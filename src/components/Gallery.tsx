const galleryImages = [
  { id: 1, alt: "Klassischer Haarschnitt" },
  { id: 2, alt: "Bartpflege" },
  { id: 3, alt: "Premium Styling" },
  { id: 4, alt: "Barbershop Ambiente" },
  { id: 5, alt: "Nassrasur" },
  { id: 6, alt: "Moderne Schnitte" },
];

const Gallery = () => {
  return (
    <section className="py-24 bg-dark-elevated" id="galerie">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
            Impressionen
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
            Unsere Arbeit
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ein Blick auf unsere Handwerkskunst
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className={`bg-secondary ${
                  index === 0 ? "aspect-square" : "aspect-square"
                } w-full`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-foreground font-serif text-lg">
                    {image.alt}
                  </span>
                </div>
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
