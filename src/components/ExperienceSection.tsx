import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Business Intelligence Engineer",
    company: "Company Name",
    period: "2023 – Present",
    location: "India",
    bullets: [
      "Architected end-to-end ELT pipelines processing 50M+ records daily using Apache Airflow and dbt",
      "Reduced pipeline latency by 40% through optimized incremental models and partitioning strategies",
      "Implemented Apache Iceberg table format, enabling time-travel queries and schema evolution",
      "Built self-serve BI dashboards in Power BI and Metabase, empowering 30+ stakeholders",
    ],
  },
  {
    role: "Data Engineer",
    company: "Previous Company",
    period: "2021 – 2023",
    location: "India",
    bullets: [
      "Designed and maintained 100+ dbt models with comprehensive testing and documentation",
      "Improved data reliability by 60% through automated data quality checks and alerting",
      "Orchestrated complex DAGs in Apache Airflow handling cross-system data integration",
      "Migrated legacy ETL workflows to modern ELT patterns, reducing maintenance overhead by 35%",
    ],
  },
  {
    role: "Junior Data Analyst",
    company: "Early Career Company",
    period: "2020 – 2021",
    location: "India",
    bullets: [
      "Developed SQL-based reporting pipelines for executive dashboards",
      "Automated manual data processes using Python, saving 15+ hours weekly",
      "Collaborated with cross-functional teams to define KPIs and data requirements",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="absolute inset-0 grid-dots opacity-30" />
    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Career <span className="text-gradient">Timeline</span>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className={`relative flex flex-col lg:flex-row mb-12 ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-6 z-10 glow-primary" />

            <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"} pl-10 lg:pl-0`}>
              <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <Briefcase size={16} />
                  <span className="font-mono text-xs">{exp.period}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.company} · {exp.location}</p>
                <ul className={`space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "lg:text-right" : ""}`}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
