import { Scissors, Wind, Sparkles, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Klassischer Haarschnitt",
    description: "Präzise Schnitte nach traditioneller Handwerkskunst",
    price: "ab 35€",
  },
  {
    icon: Wind,
    title: "Bartpflege & Rasur",
    description: "Professionelle Bartformung und Nassrasur mit heißem Handtuch",
    price: "ab 25€",
  },
  {
    icon: Sparkles,
    title: "Premium Styling",
    description: "Komplettes Styling mit exklusiven Produkten",
    price: "ab 45€",
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Schneller Schnitt für den eiligen Gentleman",
    price: "ab 30€",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-dark-surface" id="leistungen">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Traditionelle Handwerkskunst trifft auf moderne Techniken
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 p-8 group cursor-pointer hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-serif mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <p className="text-primary font-semibold text-lg">
                {service.price}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
