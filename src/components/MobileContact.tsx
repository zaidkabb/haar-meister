import { MapPin, Phone, Clock } from "lucide-react";

const MobileContact = () => {
  return (
    <section className="lg:hidden py-16 bg-dark-surface border-t border-border">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-serif text-center mb-8 text-primary">
          Besuchen Sie uns
        </h3>
        
        <div className="space-y-6">
          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-2">Öffnungszeiten</h4>
              <p className="text-sm text-muted-foreground">Di - Do: 09:00 - 19:00</p>
              <p className="text-sm text-muted-foreground">Fr: 09:00 - 20:00</p>
              <p className="text-sm text-muted-foreground">Sa - So: 10:00 - 18:00</p>
            </div>
          </div>
          
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-2">Adresse</h4>
              <p className="text-sm text-muted-foreground">Hauptstraße 123</p>
              <p className="text-sm text-muted-foreground">10115 Berlin</p>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-2">Telefon</h4>
              <a href="tel:+4930123456789" className="text-sm text-primary hover:underline">
                +49 30 12345678
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileContact;
