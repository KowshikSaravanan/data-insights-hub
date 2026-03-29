import { motion } from "framer-motion";
import { Database, GitBranch, HardDrive, BarChart3, ArrowRight, Workflow } from "lucide-react";

const stackLayers = [
  { icon: Database, label: "Data Sources", desc: "APIs, Databases, Events", color: "text-blue-400" },
  { icon: Workflow, label: "Airflow", desc: "Orchestration", color: "text-primary" },
  { icon: GitBranch, label: "dbt", desc: "Transformation", color: "text-orange-400" },
  { icon: HardDrive, label: "Iceberg", desc: "Storage Layer", color: "text-cyan-400" },
  { icon: BarChart3, label: "BI Tools", desc: "Visualization", color: "text-accent" },
];

const ArchitectureSection = () => (
  <section id="architecture" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Architecture</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Modern Data Stack <span className="text-gradient">Blueprint</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mb-12">
          A production-grade architecture powering analytics at scale—from raw ingestion to executive dashboards.
        </p>
      </motion.div>

      {/* Pipeline flow */}
      <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Animated flow line */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border hidden lg:block">
          <motion.div
            className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
            animate={{ x: ["-128px", "calc(100vw + 128px)"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 relative z-10">
          {stackLayers.map((layer, i) => (
            <div key={layer.label} className="flex items-center gap-4 lg:gap-0 lg:flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-3 border border-border hover:border-primary/50 transition-colors">
                  <layer.icon className={layer.color} size={28} />
                </div>
                <span className="font-semibold text-sm">{layer.label}</span>
                <span className="text-xs text-muted-foreground">{layer.desc}</span>
              </motion.div>

              {i < stackLayers.length - 1 && (
                <ArrowRight className="text-muted-foreground/40 hidden lg:block mx-6 shrink-0" size={20} />
              )}
            </div>
          ))}
        </div>

        {/* Stack details */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-border">
          {[
            { title: "Ingestion", desc: "Event-driven & batch ingestion from 20+ sources" },
            { title: "Orchestration", desc: "Airflow DAGs with dependency management & retries" },
            { title: "Transformation", desc: "300+ dbt models with automated testing & docs" },
            { title: "Serving", desc: "Sub-second query performance via optimized views" },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-semibold text-sm text-primary mb-1">{item.title}</p>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
