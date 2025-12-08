import { Github, Linkedin, Mail, ChevronDown, MapPin, Phone } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background decorations */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Status badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card shadow-soft mb-8 animate-slide-up">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm text-muted-foreground">Disponible pour de nouveaux projets</span>
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-4 animate-slide-up animation-delay-200">
                Ghani Zenaidji
              </h1>
              
              <p className="text-xl md:text-2xl font-medium mb-6 animate-slide-up animation-delay-400">
                <span className="gradient-text">Développeur Full-Stack</span>
                <br />
                <span className="text-muted-foreground">& Ingénieur DevOps</span>
              </p>

              {/* Description */}
              <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-slide-up animation-delay-400">
                Développeur Full Stack et DevOps avec 2 ans d'expérience en développement Java 
                à la Banque Populaire. Expertise en cloud computing (AWS, GCP, Azure) et 
                actuellement en Master 2 Intelligence Artificielle.
              </p>

              {/* Contact info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 animate-slide-up animation-delay-600">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>ghazedj@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>07 52 52 56 25</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Lille, France</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center lg:justify-start gap-4 animate-slide-up animation-delay-600">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-card shadow-soft hover:shadow-card-hover hover:border-primary/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-border bg-card shadow-soft hover:shadow-card-hover hover:border-primary/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:ghazedj@gmail.com"
                  className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-soft"
                >
                  Me contacter
                </a>
              </div>
            </div>

            {/* Profile image */}
            <div className="order-1 lg:order-2 flex justify-center animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-2xl scale-110" />
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-card shadow-card-hover">
                  <img 
                    src={profilePhoto} 
                    alt="Ghani Zenaidji"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
