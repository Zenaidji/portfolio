import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-glow opacity-50 animate-pulse-glow" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float animation-delay-200" />
      
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Disponible pour de nouveaux projets</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 animate-slide-up animation-delay-200">
            Développeur
            <br />
            <span className="gradient-text">Full Stack</span>
            <br />
            & Cloud Engineer
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-400">
            Je conçois et développe des applications web modernes, 
            scalables et performantes. Passionné par le cloud et les architectures distribuées.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up animation-delay-600">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:glow-effect transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:glow-effect transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="p-3 rounded-xl border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50 hover:glow-effect transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
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
