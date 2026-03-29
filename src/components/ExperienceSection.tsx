import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Business Intelligence Engineer",
    company: "Wall Street English",
    period: "09/2021 – Present",
    location: "Chennai, India",
    bullets: [
      "Architected end-to-end ELT pipelines processing 50M+ records daily using Apache Airflow and dbt",
      "Built self-serve BI dashboards in Power BI and Metabase, empowering 30+ business stakeholders",
      "Implemented incremental dbt models and partitioning strategies, reducing pipeline latency by 40%",
      "Collaborated with cross-functional teams to define KPIs, data contracts, and reporting standards",
    ],
  },
  {
    role: "Associate Engineer",
    company: "Wall Street English",
    period: "09/2021 – 03/2024",
    location: "Chennai, India",
    bullets: [
      "Designed and maintained 100+ dbt models with comprehensive testing and documentation",
      "Improved data reliability by 60% through automated data quality checks and alerting",
      "Orchestrated complex DAGs in Apache Airflow handling cross-system data integration",
      "Migrated legacy ETL workflows to modern ELT patterns, reducing maintenance overhead by 35%",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Shiash Info Solutions Private Limited",
    period: "07/2021 – 09/2021",
    location: "Chennai, India",
    bullets: [
      "Developed and maintained backend features using SQL and Python for business applications",
      "Automated manual data processing tasks, reducing repetitive effort by 15+ hours weekly",
      "Collaborated with senior engineers to deliver bug fixes and feature enhancements on schedule",
    ],
  },
];

const education = [
  {
    institution: "SMK Fomra Institute of Technology",
    degree: "B.E, Computer Science",
    period: "01/2016 – 12/2021",
    location: "Chennai, India",
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

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20"
      >
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-primary" size={22} />
          <h2 className="text-2xl sm:text-3xl font-bold">
            Education
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="glass rounded-xl p-6 hover:border-primary/40 transition-all h-full">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <GraduationCap size={15} />
                  <span className="font-mono text-xs">{edu.period}</span>
                </div>
                <h3 className="text-base font-bold mb-1">{edu.institution}</h3>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
