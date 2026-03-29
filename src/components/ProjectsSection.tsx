import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Modern Data Stack Pipeline",
    desc: "End-to-end ELT pipeline orchestrating data from multiple sources through transformation to analytics-ready datasets. Features incremental processing, automated testing, and data lineage tracking.",
    tech: ["Apache Airflow", "dbt Core", "Apache Iceberg", "Python", "SQL"],
    impact: "Processed 100M+ rows with 99.9% reliability and sub-hour latency",
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "BI Dashboarding Suite",
    desc: "Comprehensive business intelligence platform enabling self-serve analytics across the organization. Unified semantic layer with consistent metrics definitions.",
    tech: ["Power BI", "Metabase", "Apache Superset", "Lightdash", "dbt Metrics"],
    impact: "Empowered 50+ analysts with trusted, governed data access",
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Data Lakehouse Architecture",
    desc: "Production-grade data lakehouse implementation using open table formats. Supports ACID transactions, time-travel queries, and seamless schema evolution.",
    tech: ["Apache Iceberg", "Spark", "AWS S3", "Trino", "Airflow"],
    impact: "Reduced storage costs by 45% while enabling advanced analytics",
    color: "from-primary/15 to-accent/10",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Projects</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Featured <span className="text-gradient">Work</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-xl overflow-hidden group hover:border-primary/40 transition-all"
          >
            {/* Gradient header */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-2 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors"><Github size={18} /></a>
                  <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
              <p className="text-xs text-primary font-medium mb-4 flex items-center gap-1">
                <ArrowUpRight size={14} />
                {project.impact}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
