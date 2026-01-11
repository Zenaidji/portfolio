import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const CVSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Analyste Développeur en Alternance",
      company: "Banque Populaire du Nord",
      location: "Marcq-en-Baroeul",
      period: "Octobre 2023 - Septembre 2025",
      highlights: [
        "Conception et développement de la GED bancaire (Spring Boot, Angular)",
        "Intégration de données via SSIS et DataStage",
        "Optimisation backend : réduction du temps de réponse de 1 min à 3 sec",
        "Déploiement continu avec Jenkins et Tomcat",
        "Analyse de sécurité avec Checkmarx",
      ],
    },
    {
      type: "work",
      title: "Stage Développeur - Jeu Mobile",
      company: "Babaoo",
      location: "Villeneuve d'Ascq",
      period: "Avril 2023 - Septembre 2023",
      highlights: [
        "Développement agile (Scrum) d'une solution de gestion utilisateurs",
        "Technologies : C#, .NET, ASP.NET, Falcon",
        "Participation à la conception, développement, tests et déploiement",
      ],
    },
  ];

  const education = [
    {
      title: "Master 2 Intelligence Artificielle",
      school: "EPSI Lille",
      period: "Septembre 2024 - Septembre 2025",
    },
    {
      title: "Licence 3 Informatique",
      school: "Université de Lille",
      location: "Villeneuve d'Ascq",
      period: "Depuis Septembre 2021",
    },
    {
      title: "Baccalauréat  Mathématiques",
      school: "Lycée Oudjedi Akfadou",
      period: "2017 - 2018",
    },
  ];

  return (
    <section id="cv" className="py-32 relative bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Parcours
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 text-foreground">
              Curriculum Vitae
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground">
                  Expériences
                </h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card-hover transition-shadow">
                      <h4 className="text-lg font-semibold font-display text-foreground mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        {exp.company}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-display text-foreground">
                  Formation
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-border last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    <div className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card-hover transition-shadow">
                      <h4 className="text-lg font-semibold font-display text-foreground mb-1">
                        {edu.title}
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        {edu.school}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        {edu.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div className="mt-12">
                <h3 className="text-xl font-bold font-display mb-6 text-foreground">
                  Centres d'intérêt
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Nature & Randonnée",
                    "Formule 1",
                    "Football",
                    "Mangas & Animés",
                  ].map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-card border border-border text-sm text-muted-foreground shadow-soft"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
