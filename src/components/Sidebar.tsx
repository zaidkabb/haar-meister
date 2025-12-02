import { MapPin, Phone, Mail } from "lucide-react";

const openingHours = [
  { day: "Montag", hours: "Geschlossen" },
  { day: "Dienstag", hours: "09:00 - 19:00" },
  { day: "Mittwoch", hours: "09:00 - 19:00" },
  { day: "Donnerstag", hours: "09:00 - 19:00" },
  { day: "Freitag", hours: "09:00 - 20:00" },
  { day: "Sa - So", hours: "10:00 - 18:00" },
];

const Sidebar = () => {
  return (
    <aside className="bg-dark-surface border-l border-border p-8 lg:p-12 sticky top-0 h-screen overflow-y-auto">
      <div className="space-y-12">
        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-serif mb-6 text-primary">Öffnungszeiten</h3>
          <div className="space-y-4">
            {openingHours.map((item, index) => (
              <div key={index} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{item.day}</span>
                <span className="text-foreground font-medium">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Address */}
        <div>
          <h3 className="text-xl font-serif mb-6 text-primary">Adresse</h3>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-foreground">Hauptstraße 123</p>
              <p className="text-muted-foreground">10115 Berlin</p>
            </div>
          </div>
        </div>
        
        {/* Contact */}
        <div>
          <h3 className="text-xl font-serif mb-6 text-primary">Kontakt</h3>
          <div className="space-y-4">
            <a 
              href="tel:+4930123456789" 
              className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
            >
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="group-hover:underline">+49 30 12345678</span>
            </a>
            
            <a 
              href="mailto:info@klassik-barbershop.de" 
              className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="group-hover:underline break-all">info@klassik-barbershop.de</span>
            </a>
          </div>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-serif mb-6 text-primary">Folgen Sie uns</h3>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
