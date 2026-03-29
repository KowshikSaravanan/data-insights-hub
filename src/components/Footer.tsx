const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Kowshik Saravanan. All rights reserved.</p>
      <div className="flex items-center gap-4">
        <a
          href="https://medium.com/@kowshiksaravanan"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs hover:text-primary transition-colors"
          aria-label="Medium profile"
        >
          Medium
        </a>
        <p className="font-mono text-xs">Built with React + Tailwind + Framer Motion</p>
      </div>
    </div>
  </footer>
);

export default Footer;
