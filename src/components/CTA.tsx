import { Phone, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Bereit für einen neuen Look?
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">
            Vereinbaren Sie Ihren Termin
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Erleben Sie erstklassige Barbierkunst. Rufen Sie uns an oder besuchen 
            Sie uns – wir freuen uns auf Sie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+4930123456789"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-border text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-all"
            >
              <Calendar className="w-5 h-5" />
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
