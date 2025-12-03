import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import MobileContact from "@/components/MobileContact";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="lg:grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_450px]">
        <main>
          <Hero />
          <Services />
          <About />
          <Team />
          <Gallery />
          <CTA />
          <MobileContact />
          <Footer />
        </main>
        
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Index;
