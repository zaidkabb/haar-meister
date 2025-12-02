const team = [
  {
    name: "Stefan Müller",
    role: "Master Barber",
    experience: "25 Jahre Erfahrung",
  },
  {
    name: "Michael Weber",
    role: "Senior Barber",
    experience: "15 Jahre Erfahrung",
  },
  {
    name: "Thomas Schmidt",
    role: "Barber & Stylist",
    experience: "10 Jahre Erfahrung",
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-background" id="team">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
            Unser Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meister ihres Fachs mit jahrelanger Erfahrung
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div 
              key={index}
              className="text-center group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-secondary overflow-hidden relative group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-xl font-serif mb-2 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <p className="text-primary text-sm mb-1">
                {member.role}
              </p>
              
              <p className="text-muted-foreground text-sm">
                {member.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
