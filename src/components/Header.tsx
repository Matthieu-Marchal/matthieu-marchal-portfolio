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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-xl font-bold text-primary">
            Matthieu Marchal
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('competences')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Compétences
            </button>
            <button 
              onClick={() => scrollToSection('experiences')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Expériences
            </button>
            <button 
              onClick={() => scrollToSection('projets')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projets
            </button>
            <button 
              onClick={() => scrollToSection('formations')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Formations
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
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
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('apropos')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('competences')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Compétences
              </button>
              <button 
                onClick={() => scrollToSection('experiences')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Expériences
              </button>
              <button 
                onClick={() => scrollToSection('projets')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Projets
              </button>
              <button 
                onClick={() => scrollToSection('formations')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Formations
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
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