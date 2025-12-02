import { Star } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Klassik Barbershop Interieur" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Seit 1985
          </p>
          
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            "Die authentischste Barbershop-Erfahrung"
          </h1>
          
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed animate-fade-in max-w-xl" style={{ animationDelay: "0.4s" }}>
            Herausragend! Der Haarschnitt war perfekt, und die Bartpflege war erstklassig. 
            Es ist klar, dass die Meister ihr Herz in jede Dienstleistung stecken. 
            Ein herrlicher Ort für den modernen Gentleman.
          </p>
          
          <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background" />
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background" />
                <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background" />
              </div>
            </div>
            
            <div className="border-l border-border pl-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-3xl font-bold text-primary">4,9</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">(847 Bewertungen)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
