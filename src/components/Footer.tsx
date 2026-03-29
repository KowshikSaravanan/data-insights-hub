const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Kowshik Saravanan. All rights reserved.</p>
      <p className="font-mono text-xs">Built with React + Tailwind + Framer Motion</p>
    </div>
  </footer>
);

export default Footer;
