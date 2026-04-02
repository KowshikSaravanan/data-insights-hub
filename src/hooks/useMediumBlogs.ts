import { useQuery } from "@tanstack/react-query";

export interface MediumBlog {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

interface Rss2JsonItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  categories: string[];
}

interface Rss2JsonResponse {
  status: string;
  items: Rss2JsonItem[];
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(text: string, maxLength = 150): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "…";
}

async function fetchMediumBlogs(): Promise<MediumBlog[]> {
  const rssUrl = encodeURIComponent("https://medium.com/feed/@kowshiksaravanan");
  const url = `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch Medium RSS feed");
  const data: Rss2JsonResponse = await res.json();
  if (data.status !== "ok") throw new Error("RSS feed returned error status");
  return data.items.map((item) => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: truncate(stripHtml(item.description)),
    thumbnail: item.thumbnail,
    categories: item.categories ?? [],
  }));
}

export function useMediumBlogs() {
  return useQuery<MediumBlog[], Error>({
    queryKey: ["mediumBlogs"],
    queryFn: fetchMediumBlogs,
    staleTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
  });
}
