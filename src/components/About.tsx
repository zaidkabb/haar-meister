import { Award, Users, Clock, Scissors } from "lucide-react";

const stats = [
  { icon: Clock, value: "38+", label: "Jahre Erfahrung" },
  { icon: Users, value: "15.000+", label: "Zufriedene Kunden" },
  { icon: Scissors, value: "50.000+", label: "Haarschnitte" },
  { icon: Award, value: "12", label: "Auszeichnungen" },
];

const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="ueber-uns">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Über uns
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
              Tradition seit 1985
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Seit fast vier Jahrzehnten steht Klassik für erstklassige Barbierkunst 
                im Herzen von Berlin. Wir verbinden traditionelle Handwerkskunst mit 
                modernem Styling und schaffen eine Atmosphäre, in der sich jeder 
                Gentleman willkommen fühlt.
              </p>
              <p>
                Unser Team aus erfahrenen Meistern widmet sich mit Leidenschaft 
                dem perfekten Schnitt. Jeder Besuch bei uns ist mehr als nur ein 
                Haarschnitt – es ist ein Erlebnis der besonderen Art.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="font-serif text-2xl text-primary italic">Stefan Müller</p>
              <p className="text-sm text-muted-foreground mt-1">Gründer & Master Barber</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl md:text-4xl font-serif text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
