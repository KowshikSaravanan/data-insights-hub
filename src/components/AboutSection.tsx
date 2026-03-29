import { motion } from "framer-motion";
import { Database, GitBranch, BarChart3, Layers } from "lucide-react";

const highlights = [
  { icon: Database, title: "Data Engineering", desc: "Building reliable, scalable data pipelines using modern ELT patterns" },
  { icon: GitBranch, title: "dbt Modeling", desc: "Data transformation, testing, and lineage with dbt Core" },
  { icon: Layers, title: "Modern Data Stack", desc: "Architecting lakehouse solutions with Apache Iceberg & Airflow" },
  { icon: BarChart3, title: "BI Enablement", desc: "Empowering teams with trusted dashboards and self-serve analytics" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">About</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Turning <span className="text-gradient">data chaos</span> into clarity
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I'm a data engineer passionate about building robust data infrastructure that organizations can trust.
          With expertise spanning ETL/ELT pipelines, workflow orchestration, and analytics engineering,
          I help teams move from fragile spreadsheets to reliable, version-controlled data platforms.
          My focus is on the modern data stack—leveraging tools like Apache Airflow, dbt, and Apache Iceberg
          to create data ecosystems that scale.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass rounded-xl p-6 hover:border-primary/40 transition-all group"
          >
            <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
