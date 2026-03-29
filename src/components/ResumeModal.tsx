import { useState, useEffect } from "react";
import { Download, ExternalLink, FileWarning } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ResumeModal = ({ open, onOpenChange }: ResumeModalProps) => {
  const [loaded, setLoaded] = useState(false);
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);

  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    setPdfExists(null);
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => setPdfExists(res.ok && res.headers.get("content-type")?.includes("pdf") !== false))
      .catch(() => setPdfExists(false));
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b border-border shrink-0">
          <div className="flex items-center justify-between pr-8">
            <DialogTitle className="text-base font-semibold">Resume — Kowshik Saravanan</DialogTitle>
            {pdfExists && (
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <ExternalLink size={13} />
                  Open in tab
                </a>
                <a
                  href="/resume.pdf"
                  download="Kowshik_Saravanan_Resume.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  <Download size={13} />
                  Download
                </a>
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="relative flex-1 bg-muted/10">
          {/* PDF not uploaded yet */}
          {pdfExists === false && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-foreground px-6 text-center">
              <FileWarning size={40} className="text-muted-foreground/50" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">Resume PDF not found</p>
                <p className="text-xs text-muted-foreground max-w-xs">
                  Add <code className="px-1 py-0.5 rounded bg-secondary text-primary text-[11px]">resume.pdf</code> to
                  the <code className="px-1 py-0.5 rounded bg-secondary text-primary text-[11px]">public/</code> folder
                  and reload.
                </p>
              </div>
            </div>
          )}

          {/* Loading spinner */}
          {pdfExists === null && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              <span className="text-sm">Loading resume…</span>
            </div>
          )}

          {/* PDF iframe */}
          {pdfExists === true && (
            <>
              {!loaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                  <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  <span className="text-sm">Loading resume…</span>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary underline underline-offset-2"
                  >
                    Can't see it? Open directly
                  </a>
                </div>
              )}
              <iframe
                src="/resume.pdf"
                title="Kowshik Saravanan Resume"
                className="w-full h-full rounded-b-lg"
                onLoad={() => setLoaded(true)}
              />
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;
