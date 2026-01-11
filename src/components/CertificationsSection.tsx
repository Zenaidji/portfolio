import { Award } from "lucide-react";

const certifications = [
  {
    name: "RNCP Niveau 7 - Chef de Projet en Intelligence Artificielle",
    issuer: "EPSI",
    image: "/assets/epsi.png",
    link: "https://certificate.bcdiploma.com/check/DC392688CDBF0FAA5A3C252EB117A58557B4CC0490DFAE488CAF79A28446E037aGpGQThwZHRiellLbHdvOVFIbVN6REJHMUl5dkZOVCttTWFHMlo3N3lNSk5UWmVE",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Udemy",
    image: "/assets/udemy.jpg",
    link: "https://www.udemy.com/certificate/UC-51ad4865-c695-4b0f-aedf-cdac5130c1ba/",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "AWS",
    image: "/assets/aws-certified-cloud-practitioner.png",
    link: "https://www.credly.com/badges/7be3477b-bafa-4fb1-ad8e-61a336e6f68f/public_url",
  },
];

// Composant Bouton simple pour l'exemple (assurez-vous d'avoir ce style dans votre CSS/Tailwind)
const Button = ({ children, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-4 w-full"
  >
    {children}
  </a>
);

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-32 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Certifications
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mt-4 text-foreground">
              Mes Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-border overflow-hidden bg-card shadow-soft hover:shadow-card-hover transition-all duration-500 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden flex items-center justify-center p-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 text-center border-t border-border flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold font-display mb-1 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.issuer}
                  </p>

                  <div className="mt-auto">
                    <Button href={cert.link}>Vérifier la certification</Button>
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

export default CertificationsSection; 
