import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "GED Bancaire",
      description: "Système de Gestion Électronique de Documents pour la Banque Populaire avec interface moderne et gestion des workflows.",
      tags: ["Spring Boot", "Angular", "Bootstrap", "jQuery"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    },
    {
      title: "Intégration de Données",
      description: "Pipeline d'intégration de données pour le service épargne monétaire avec SSIS et DataStage.",
      tags: ["SSIS", "DataStage", "SQL Server", "ETL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      title: "API Gateway Sécurisée",
      description: "Infrastructure de déploiement avec Jenkins, Tomcat et analyse de sécurité Checkmarx.",
      tags: ["Jenkins", "Docker", "Tomcat", "Checkmarx"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop"
    },
    {
      title: "Solution Jeu Mobile",
      description: "Système de gestion utilisateurs pour application mobile développé en méthodologie Scrum.",
      tags: ["C#", ".NET", "ASP.NET", "Falcon"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 text-foreground">
              Projets Réalisés
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group rounded-2xl border border-border overflow-hidden bg-card shadow-soft hover:shadow-card-hover transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold font-display mb-3 group-hover:text-primary transition-colors text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
