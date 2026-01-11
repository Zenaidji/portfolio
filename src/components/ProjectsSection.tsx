import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "GED Bancaire",
      description:
        "Système de Gestion Électronique de Documents pour la Banque Populaire avec interface moderne et gestion des workflows.",
      tags: ["Spring Boot", "mssql-server", "Jenkins", "Tomcat"],
      image: "/assets/ged.png",
    },
    {
      title: "Intégration de Données",
      description:
        "Pipeline d'intégration de données pour le service épargne monétaire avec SSIS et DataStage.",
      tags: ["SSIS", "DataStage", "SQL Server", "ETL"],
      image: "/assets/SSIS.png",
    },
    {
      title: "Site vétrine pour Omega-auto",
      description:
        "Site web vitrine pour un gragiste, mettant en avant les services proposés déployé sur omega-auto.fr.",
      tags: ["Angular", "Docker", "Nginx", "VPS", "CI/CD"],
      image: "/assets/omega-auto.png",
    },
    {
      title: "Solution de qualification de chantier",
      description:
        "Système de demande d’intervention réactif en fonction des réponses aux questions posées aux clients.",
      tags: ["Express js", "Mongodb", "Angular", "Docker", "CI/CD", "nginx"],
      image: "assets/interexpress.png",
    },
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Portfolio
            </span>
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
