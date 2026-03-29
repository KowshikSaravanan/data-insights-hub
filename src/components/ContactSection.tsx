import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Download } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – hook up to backend
    alert("Thank you for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-dots opacity-20" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Interested in working together or just want to say hello? Drop me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>

          {/* Info & socials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Get in Touch</h3>
                <p className="text-sm text-muted-foreground">
                  I'm always open to discussing data engineering opportunities, modern data stack architecture, or interesting analytics challenges.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Mail, label: "kowshik@example.com", href: "mailto:kowshik@example.com" },
                  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/kowshik-saravanan-b51864194/" },
                  { icon: Github, label: "GitHub Profile", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <link.icon size={18} />
                    </div>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Download resume */}
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass text-foreground font-semibold hover:border-primary/50 transition-all"
            >
              <Download size={18} />
              Download Resume (PDF)
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
