import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-header backdrop-blur-md shadow-header border-b border-border/50 relative overflow-hidden">
      {/* Bordure dorée décorative */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-header-border"></div>
      {/* Effet de brillance subtile */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="font-serif text-xl font-bold text-primary relative">
            <span className="relative z-10">Matthieu Marchal</span>
            {/* Effet de brillance sur le nom */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded"></div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-white/10"
            >
              <span className="relative z-10">Accueil</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-white/10"
            >
              <span className="relative z-10">À propos</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
            </button>
            <button 
              onClick={() => scrollToSection('competences')}
              className="text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-white/10"
            >
              <span className="relative z-10">Compétences</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-white/10"
            >
              <span className="relative z-10">Expériences</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
            </button>
            <button 
              onClick={() => scrollToSection('projets')}
              className="text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-white/10"
            >
              <span className="relative z-10">Projets</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
            </button>
            <button 
              onClick={() => scrollToSection('formations')}
              className="text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-white/10"
            >
              <span className="relative z-10">Formations</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-all duration-300 relative group px-3 py-2 rounded-md hover:bg-white/10"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gradient-header-border pt-4 bg-white/20 backdrop-blur-sm rounded-lg mx-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-accent/10 rounded-md w-full"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-accent/10 rounded-md w-full"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('competences')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-accent/10 rounded-md w-full"
              >
                Compétences
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-accent/10 rounded-md w-full"
              >
                Expériences
              </button>
              <button 
                onClick={() => scrollToSection('projets')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-accent/10 rounded-md w-full"
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('formations')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-accent/10 rounded-md w-full"
              >
                Formations
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-all duration-300 p-3 hover:bg-accent/10 rounded-md w-full"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;