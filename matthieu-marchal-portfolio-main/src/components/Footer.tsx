import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 relative shadow-inset-deep w-full max-w-full overflow-hidden">
      {/* Overlay pour l'effet profond */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-black/[0.05] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left w-full max-w-full">
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-xl font-bold mb-4">Matthieu Marchal</h3>
              <p className="text-primary-foreground/80 mb-4">
                Développeur Commercial
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  <a 
                    href="mailto:matthieu.marchal47210@gmail.com"
                    className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                  >
                    matthieu.marchal47210@gmail.com
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  <a 
                    href="tel:+33643337756"
                    className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                  >
                    +33 6 43 33 77 56
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2 text-sm">
                <button 
                  onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Accueil
                </button>
                <button 
                  onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  À propos
                </button>
                <button 
                  onClick={() => document.getElementById('competences')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Compétences
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Réseaux</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://www.linkedin.com/in/matthieu-marchal-ba9465278/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:matthieu.marchal47210@gmail.com"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Matthieu Marchal. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;