import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/matthieu-profile.jpg";
import AnimationWrapper from "@/components/animations/AnimationWrapper";

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
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-hero-main pt-20 relative overflow-hidden w-full max-w-full">
      {/* Gradient overlay sophistiqué */}
      <div className="absolute inset-0 bg-gradient-hero-overlay"></div>
      
      {/* Particules et effets de brillance */}
      <div className="absolute inset-0 bg-gradient-hero-particles opacity-60"></div>
      
      {/* Motifs géométriques subtils - Seulement sur très grands écrans, sans débordement */}
      <div className="absolute inset-0 opacity-20 hidden 2xl:block overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 border border-accent/10 rounded-full animate-pulse-ring"></div>
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-24 h-24 border border-primary/8 rounded-full animate-pulse-ring" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Effet de transition depuis le header */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gradient-header to-transparent opacity-80"></div>
      
      {/* Effets de brillance animés - Seulement sur grands écrans, centré */}
      <div className="absolute inset-0 overflow-hidden w-full max-w-full pointer-events-none hidden xl:block">
        <motion.div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent/40 rounded-full"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12 items-center w-full max-w-full">
            {/* Content */}
            <div className="text-center lg:text-left">
              <AnimationWrapper type="slideUp" delay={0.2}>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6 relative">
                  <span className="relative z-10">Matthieu Marchal</span>
                  {/* Effet de brillance subtil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer rounded-lg"></div>
                </h1>
              </AnimationWrapper>
              
              <AnimationWrapper type="slideUp" delay={0.4}>
                <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                  Développeur Commercial
                </h2>
              </AnimationWrapper>
              
              <AnimationWrapper type="slideUp" delay={0.6}>
                <p className="text-lg text-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  J'accompagne les entreprises à générer du chiffre et à fidéliser leurs clients 
                  grâce à une stratégie commerciale ciblée.
                </p>
              </AnimationWrapper>
              
              <AnimationWrapper type="slideUp" delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={handleDownloadCV}
                      className="font-medium"
                    >
                      <Download className="w-5 h-5" />
                      Télécharger mon CV
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={scrollToContact}
                      className="font-medium"
                    >
                      <Mail className="w-5 h-5" />
                      Me contacter
                    </Button>
                  </motion.div>
                </div>
              </AnimationWrapper>
            </div>

            {/* Photo */}
            <AnimationWrapper type="scale" delay={0.5} className="flex justify-center lg:justify-end">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Halo de brillance autour de la photo */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-full blur-xl scale-110 animate-pulse"></div>
                
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 max-w-[90vw] max-h-[90vw] rounded-full overflow-hidden shadow-elegant ring-2 ring-white/30 backdrop-blur-sm relative z-10 mx-auto lg:mx-0 flex-shrink-0">
                  <img 
                    src={profileImage} 
                    alt="Matthieu Marchal - Développeur Commercial"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay subtil */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent/5"></div>
                </div>
                
                {/* Éléments décoratifs simplifiés - sans débordement */}
                <motion.div 
                  className="absolute inset-0 rounded-full opacity-10 -z-10 hidden lg:block"
                  style={{
                    background: 'radial-gradient(circle, rgba(var(--accent), 0.1) 0%, transparent 70%)'
                  }}
                  animate={{ 
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;