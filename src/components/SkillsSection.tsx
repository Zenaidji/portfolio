const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Langages",
      skills: ["Java", "J2EE", "Python", "C#", "PHP", "Node.js"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Angular", "Bootstrap", "HTML5", "CSS3"],
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Flask", ".NET", "Nest.js", "Hibernate"],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Docker",
        "Jenkins",
        "Azure",
        "GCP",
        "Kubernetes",
        "Tomcat",
        "Nginx",
      ],
    },
    {
      title: "Bases de données",
      skills: ["MongoDB", "PostgreSQL", "SQL Server", "SSIS", "DataStage"],
    },
    {
      title: "Outils",
      skills: [
        "Git",
        "Jira",
        "Confluence",
        "Swagger",
        "Postman",
        "JUnit",
        "SonarQube",
      ],
    },
    {
      title: "Intelligence Artificielle",
      skills: ["TensorFlow", "PySpark", "Matplotlib", "Deep Learning"],
    },
    {
      title: "Méthodologies",
      skills: ["Scrum", "Kanban", "Git Flow", "Extreme Programming"],
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 text-foreground">
              Stack Technique
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold font-display mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;
