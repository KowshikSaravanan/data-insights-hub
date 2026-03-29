import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data Engineering",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 95 },
      { name: "Apache Airflow", level: 85 },
      { name: "ETL / ELT", level: 90 },
    ],
  },
  {
    title: "Data Modeling",
    skills: [
      { name: "dbt Core", level: 90 },
      { name: "dbt Testing", level: 85 },
      { name: "Data Lineage", level: 80 },
    ],
  },
  {
    title: "Data Lakehouse",
    skills: [
      { name: "Apache Iceberg", level: 80 },
      { name: "Spark", level: 75 },
      { name: "Trino / Presto", level: 70 },
    ],
  },
  {
    title: "Business Intelligence",
    skills: [
      { name: "Power BI", level: 85 },
      { name: "Metabase", level: 80 },
      { name: "Lightdash", level: 75 },
      { name: "Apache Superset", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 85 },
      { name: "AWS", level: 70 },
      { name: "GCP", level: 65 },
      { name: "Docker", level: 75 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="absolute inset-0 grid-dots opacity-30" />
    <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1 }}
            className="glass rounded-xl p-6"
          >
            <h3 className="font-semibold text-sm uppercase tracking-wider text-primary mb-5">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((skill, si) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.05, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
