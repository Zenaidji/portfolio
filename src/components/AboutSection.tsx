import { Code2, Cloud, Rocket } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack",
      description: "React, Node.js, TypeScript, Python - je maîtrise l'ensemble de la stack moderne."
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "AWS, GCP, Azure - conception d'architectures cloud résilientes et scalables."
    },
    {
      icon: Rocket,
      title: "DevOps",
      description: "CI/CD, Docker, Kubernetes - automatisation et déploiement continu."
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">À propos</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
              Résumé
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Développeur passionné avec plus de <span className="text-foreground font-medium">5 ans d'expérience</span> dans 
                la création d'applications web et la mise en place d'infrastructures cloud.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mon expertise couvre le développement front-end et back-end, la conception 
                d'APIs RESTful et GraphQL, ainsi que l'orchestration de conteneurs et 
                l'infrastructure as code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Je suis constamment à la recherche de nouveaux défis techniques et j'aime 
                transformer des idées complexes en solutions élégantes et performantes.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold font-display gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projets</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-display gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground mt-1">Années</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold font-display gradient-text">20+</div>
                  <div className="text-sm text-muted-foreground mt-1">Clients</div>
                </div>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl border border-border card-gradient hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold font-display mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
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
