import { Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    icon: '🏆',
  },
  {
    name: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    icon: '☁️',
  },
  {
    name: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    icon: '💎',
  },
  {
    name: 'HashiCorp Terraform Associate',
    issuer: 'HashiCorp',
    icon: '🔧',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Certifications
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications Professionnelles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Des certifications reconnues dans l'industrie pour valider mes compétences cloud et DevOps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
