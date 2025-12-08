import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Cloud Dashboard",
      description: "Dashboard de monitoring multi-cloud avec visualisation en temps réel des métriques et alertes automatisées.",
      tags: ["React", "TypeScript", "AWS", "Grafana"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "E-Commerce Platform",
      description: "Plateforme e-commerce haute performance avec architecture microservices et paiement sécurisé.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "DevOps Pipeline",
      description: "Pipeline CI/CD complet avec déploiement automatisé, tests et monitoring intégré.",
      tags: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "API Gateway",
      description: "Gateway API avec rate limiting, authentification OAuth2 et documentation automatique.",
      tags: ["Go", "Redis", "Kong", "OpenAPI"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4">
              Projets Récents
            </h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group rounded-2xl border border-border overflow-hidden card-gradient hover:border-primary/30 transition-all duration-500"
              >
                {/* Project image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  
                  {/* Project links overlay */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold font-display mb-3 group-hover:text-primary transition-colors">
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
