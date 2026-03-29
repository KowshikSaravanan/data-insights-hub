import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { useMediumBlogs, type MediumBlog } from "@/hooks/useMediumBlogs";

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function SkeletonCard() {
  return (
    <div className="glass rounded-xl overflow-hidden animate-pulse">
      <div className="h-2 bg-primary/20" />
      <div className="h-40 bg-secondary/40" />
      <div className="p-6 space-y-3">
        <div className="h-5 bg-secondary rounded w-3/4" />
        <div className="h-4 bg-secondary rounded w-full" />
        <div className="h-4 bg-secondary rounded w-5/6" />
        <div className="flex gap-2 mt-4">
          <div className="h-5 w-16 bg-secondary rounded-full" />
          <div className="h-5 w-20 bg-secondary rounded-full" />
        </div>
      </div>
    </div>
  );
}

function BlogCard({ blog, index }: { blog: MediumBlog; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="glass rounded-xl overflow-hidden group hover:border-primary/40 transition-all flex flex-col"
    >
      <div className="h-2 bg-gradient-to-r from-primary/20 to-accent/10" />
      {blog.thumbnail && (
        <div className="h-40 overflow-hidden">
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-base font-bold group-hover:text-primary transition-colors mb-2 leading-snug line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{blog.description}</p>

        {blog.categories.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {blog.categories.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="text-xs font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground flex items-center gap-1"
              >
                <Tag size={10} />
                {cat}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
          <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
            <Calendar size={11} />
            {formatDate(blog.pubDate)}
          </span>
          <a
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline"
          >
            Read on Medium <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

const ALL = "All";

const BlogsSection = () => {
  const { data: blogs, isLoading, isError } = useMediumBlogs();
  const [activeTag, setActiveTag] = useState<string>(ALL);

  const tags = useMemo(() => {
    if (!blogs) return [];
    const set = new Set<string>();
    blogs.forEach((b) => b.categories.forEach((c) => set.add(c)));
    return [ALL, ...Array.from(set).sort()];
  }, [blogs]);

  const filtered = useMemo(() => {
    if (!blogs) return [];
    if (activeTag === ALL) return blogs;
    return blogs.filter((b) => b.categories.includes(activeTag));
  }, [blogs, activeTag]);

  return (
    <section id="blog" className="py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Writing</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Medium <span className="text-gradient">Blogs</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Practical guides on Machine Learning and Data Engineering — explained through everyday analogies.
          </p>
        </motion.div>

        {/* Category filter pills */}
        {!isLoading && !isError && tags.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-mono transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </motion.div>
        )}

        {/* Loading skeleton */}
        {isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div className="glass rounded-xl p-8 text-center">
            <p className="text-muted-foreground mb-4">Couldn't load articles right now.</p>
            <a
              href="https://medium.com/@kowshiksaravanan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              View articles directly on Medium <ExternalLink size={14} />
            </a>
          </div>
        )}

        {/* Blog cards */}
        {!isLoading && !isError && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((blog, i) => (
              <BlogCard key={blog.link} blog={blog} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        {!isLoading && !isError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <a
              href="https://medium.com/@kowshiksaravanan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              View All on Medium <ExternalLink size={15} />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
