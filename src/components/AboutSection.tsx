import { Code2, Cloud, Rocket, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack",
      description: "Java, Spring Boot, React, Angular, Node.js - développement d'applications web complètes."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, GCP, Azure, Docker, Kubernetes - infrastructure cloud moderne et automatisée."
    },
    {
      icon: GraduationCap,
      title: "Master IA",
      description: "En cours de Master 2 Intelligence Artificielle à l'EPSI Lille."
    },
    {
      icon: Rocket,
      title: "CI/CD",
      description: "Jenkins, Git Flow, tests automatisés - livraison continue et qualité de code."
    }
  ];

  return (
    <section id="about" className="py-32 relative bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">À propos</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 text-foreground">
              Qui suis-je ?
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis <span className="text-foreground font-medium">Ghani Zenaidji</span>, développeur 
                Full Stack et DevOps avec 2 ans d'expérience professionnelle chez 
                <span className="text-foreground font-medium"> Banque Populaire du Nord</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon expertise couvre le développement d'applications bancaires en Java/Spring Boot, 
                l'intégration de données avec SSIS et DataStage, ainsi que la mise en place de 
                pipelines CI/CD avec Jenkins.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Actuellement en <span className="text-foreground font-medium">Master 2 Intelligence Artificielle</span> à 
                l'EPSI Lille, je combine mes compétences en développement avec les technologies 
                d'IA comme TensorFlow et PySpark.
              </p>

              {/* Languages */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold font-display mb-4 text-foreground">Langues</h3>
                <div className="flex gap-4">
                  <div className="px-4 py-2 rounded-lg bg-card border border-border shadow-soft">
                    <span className="text-sm font-medium">Français</span>
                    <span className="text-xs text-primary ml-2">C2</span>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-card border border-border shadow-soft">
                    <span className="text-sm font-medium">Anglais</span>
                    <span className="text-xs text-primary ml-2">B2</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center p-4 rounded-xl bg-card border border-border shadow-soft">
                  <div className="text-3xl font-bold font-display gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">Années XP</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border shadow-soft">
                  <div className="text-3xl font-bold font-display gradient-text">M2</div>
                  <div className="text-sm text-muted-foreground mt-1">IA en cours</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card border border-border shadow-soft">
                  <div className="text-3xl font-bold font-display gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground mt-1">Technologies</div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl border border-border bg-card shadow-soft hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-display mb-2 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
