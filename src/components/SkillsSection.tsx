const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Redux"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "Outils",
      skills: ["Git", "GitHub Actions", "Jenkins", "Datadog", "Prometheus", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-32 relative bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
              Stack Technique
            </h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="p-6 rounded-2xl border border-border card-gradient hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold font-display mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
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
