import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";

const FloatingNode = ({ x, y, delay, size = 6 }: { x: string; y: string; delay: number; size?: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/20 border border-primary/30"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
    transition={{ duration: 4, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const FlowLine = ({ x1, y1, x2, y2, delay }: { x1: string; y1: string; x2: string; y2: string; delay: number }) => (
  <motion.div
    className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
    style={{ left: x1, top: y1, width: `calc(${x2} - ${x1})`, transformOrigin: "left" }}
    animate={{ scaleX: [0, 1, 0], opacity: [0, 0.6, 0] }}
    transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-dots opacity-50" />

      {/* Animated background nodes */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingNode x="10%" y="20%" delay={0} size={8} />
        <FloatingNode x="85%" y="15%" delay={1} size={6} />
        <FloatingNode x="70%" y="70%" delay={2} size={10} />
        <FloatingNode x="20%" y="75%" delay={0.5} size={7} />
        <FloatingNode x="50%" y="10%" delay={1.5} size={5} />
        <FloatingNode x="90%" y="50%" delay={3} size={8} />
        <FloatingNode x="5%" y="50%" delay={2.5} size={6} />
        <FlowLine x1="10%" y1="30%" x2="40%" y2="30%" delay={0} />
        <FlowLine x1="55%" y1="60%" x2="90%" y2="60%" delay={1.5} />
        <FlowLine x1="30%" y1="80%" x2="70%" y2="80%" delay={3} />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-primary font-mono text-sm mb-4 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 tracking-tight">
            <span className="text-gradient">Kowshik</span>
            <br />
            <span className="text-foreground">Saravanan</span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground font-medium mb-3 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Business Intelligence Engineer · Data Engineer · Analytics Engineer
          </motion.p>

          <motion.p
            className="text-base text-muted-foreground/70 mb-10 max-w-xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Designing scalable data platforms, transforming raw data into trusted insights
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-primary"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-foreground font-semibold hover:border-primary/50 transition-all"
            >
              <FileText size={18} />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground/50" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
