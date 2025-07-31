import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/matthieu-profile.jpg";

const Hero = () => {
  const handleDownloadCV = () => {
    // Placeholder for CV download
    console.log("CV download requested");
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-subtle pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
                Matthieu Marchal
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Développeur Commercial B2B
              </h2>
              <p className="text-lg text-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                J'accompagne les entreprises à générer du chiffre et à fidéliser leurs clients 
                grâce à une stratégie commerciale ciblée.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={handleDownloadCV}
                  className="font-medium"
                >
                  <Download className="w-5 h-5" />
                  Télécharger mon CV
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToContact}
                  className="font-medium"
                >
                  <Mail className="w-5 h-5" />
                  Me contacter
                </Button>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant">
                  <img 
                    src={profileImage} 
                    alt="Matthieu Marchal - Développeur Commercial B2B"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;