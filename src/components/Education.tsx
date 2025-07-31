import { GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/animations/AnimationWrapper";

const Education = () => {
  const formations = [
    {
      period: "2021 - 2024",
      title: "Bachelor Développement Commercial et Marketing",
      institution: "ISCOD",
      type: "Alternance",
      description: "Formation spécialisée en stratégie commerciale, marketing digital et gestion de la relation client",
      status: "completed"
    },
    {
      period: "2018 - 2020",
      title: "BTS Management Commercial Opérationnel (MCO)",
      institution: "Lycée professionnel",
      type: "Formation initiale",
      description: "Management d'équipes commerciales, gestion d'unités commerciales, animation de réseaux",
      status: "completed"
    }
  ];



  return (
    <section id="formations" className="py-16 bg-surface-elevated relative shadow-inset">
      {/* Overlay subtil pour l'effet enfoncé */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.008] to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Formations & Technologies
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Un parcours de formation diplômante et une maîtrise des outils professionnels pour une performance commerciale optimale
          </p>
          
          {/* Formations */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary text-center">
              Formations Diplômantes
            </h3>
            
            <div className="space-y-6">
              {formations.map((formation, index) => (
                <div key={index} className="bg-surface-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-white/30">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 mt-1 shadow-gold-soft">
                          <GraduationCap className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-serif text-xl font-bold text-primary mb-1">
                            {formation.title}
                          </h4>
                          <p className="text-accent font-medium mb-2">
                            {formation.institution}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {formation.period}
                            </div>
                            <span className="px-2 py-1 bg-secondary rounded-full text-xs">
                              {formation.type}
                            </span>
                          </div>
                          <p className="text-foreground">
                            {formation.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Outils & Technologies Section */}
          <div className="mt-16">
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary text-center">
              Outils & Technologies Maîtrisés
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* HubSpot CRM */}
              <div className="bg-surface-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group border border-white/30 relative">
                {/* Badge Certifié */}
                <div className="absolute -top-2 -right-2 bg-gradient-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full shadow-gold-soft flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Certifié
                </div>
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.67 2.94-1.56 4.08-.89 1.13-2.1 1.93-3.64 2.4-.23.07-.47-.08-.47-.33V9.03c0-.25.24-.4.47-.33 1.54.47 2.75 1.27 3.64 2.4.89 1.14 1.41 2.5 1.56 4.08.02.16-.11.3-.27.3h-1.73c-.13 0-.24-.09-.26-.22-.15-1.16-.54-2.14-1.16-2.94-.63-.8-1.45-1.35-2.47-1.65-.16-.05-.27-.2-.27-.37v-1.6c0-.17.11-.32.27-.37 1.02-.3 1.84-.85 2.47-1.65.62-.8 1.01-1.78 1.16-2.94.02-.13.13-.22.26-.22h1.73c.16 0 .29.14.27.3z" fill="#ff7a59"/>
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-2">HubSpot CRM</h4>
                <p className="text-muted-foreground text-sm">Gestion commerciale & Marketing automation</p>
              </div>
              
              {/* SAP ERP */}
              <div className="bg-surface-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group border border-white/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 6.5C8.5 5.11929 9.61929 4 11 4H13C14.3807 4 15.5 5.11929 15.5 6.5V8.5C15.5 9.88071 14.3807 11 13 11H11C9.61929 11 8.5 9.88071 8.5 8.5V6.5Z" fill="#0FAAFF"/>
                    <path d="M8.5 15.5C8.5 14.1193 9.61929 13 11 13H13C14.3807 13 15.5 14.1193 15.5 15.5V17.5C15.5 18.8807 14.3807 20 13 20H11C9.61929 20 8.5 18.8807 8.5 17.5V15.5Z" fill="#0FAAFF"/>
                    <path d="M17.5 10.5C17.5 9.11929 18.6193 8 20 8H22C23.3807 8 24.5 9.11929 24.5 10.5V12.5C24.5 13.8807 23.3807 15 22 15H20C18.6193 15 17.5 13.8807 17.5 12.5V10.5Z" fill="#0FAAFF"/>
                    <path d="M2.5 10.5C2.5 9.11929 1.38071 8 0 8V12.5C1.38071 12.5 2.5 11.3807 2.5 10.5Z" fill="#0FAAFF"/>
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-2">SAP ERP</h4>
                <p className="text-muted-foreground text-sm">Gestion intégrée & METI</p>
              </div>
              
              {/* Google Suite */}
              <div className="bg-surface-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group border border-white/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.16 12.594c0-.813-.066-1.594-.19-2.344H12.5v4.438h4.281c-.188.906-.75 1.688-1.594 2.281v1.875h2.594c1.5-1.375 2.375-3.406 2.375-5.813z" fill="#4285F4"/>
                    <path d="M12.5 21c2.156 0 3.969-.719 5.281-1.938l-2.594-1.875c-.719.5-1.625.781-2.688.781-2.063 0-3.813-1.406-4.438-3.281H5.438v1.938C6.75 19.031 9.375 21 12.5 21z" fill="#34A853"/>
                    <path d="M8.063 14.687c-.156-.5-.25-1-.25-1.563s.094-1.063.25-1.563V9.625H5.438C4.875 10.719 4.5 11.969 4.5 13.125s.375 2.406.938 3.5l2.625-1.938z" fill="#FBBC05"/>
                    <path d="M12.5 8.281c1.188 0 2.219.406 3.031 1.188l2.281-2.281C16.469 5.844 14.656 5 12.5 5 9.375 5 6.75 6.969 5.438 9.375l2.625 1.938c.625-1.875 2.375-3.031 4.438-3.031z" fill="#EA4335"/>
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-2">Google Suite</h4>
                <p className="text-muted-foreground text-sm">Analytics & Looker Studio</p>
              </div>
              
              {/* Goodays */}
              <div className="bg-surface-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 text-center group border border-white/30">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#00D4AA"/>
                    <path d="M16 8l-4 4-2-2-2 2 4 4 6-6-2-2z" fill="white"/>
                  </svg>
                </div>
                <h4 className="font-bold text-primary mb-2">Goodays</h4>
                <p className="text-muted-foreground text-sm">Expérience & satisfaction client</p>
              </div>
            </div>
            
            {/* Additional tools in a compact format */}
            <div className="mt-8 bg-gradient-subtle rounded-lg p-6">
              <h4 className="font-semibold text-primary mb-4 text-center">Autres outils maîtrisés</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-3 py-1 bg-background rounded-full text-sm border border-border">Le Sphinx</span>
                <span className="px-3 py-1 bg-background rounded-full text-sm border border-border">Microsoft 365</span>
                <span className="px-3 py-1 bg-background rounded-full text-sm border border-border">Smartway</span>
                <span className="px-3 py-1 bg-background rounded-full text-sm border border-border">Oxania</span>
                <span className="px-3 py-1 bg-background rounded-full text-sm border border-border">Combo</span>
                <span className="px-3 py-1 bg-background rounded-full text-sm border border-border">Uber Manager / Deliveroo Partner </span>
              </div>
            </div>
          </div>
          
          {/* LinkedIn Section */}
          <div className="mt-16 bg-gradient-subtle rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-4 text-primary">
              Profil LinkedIn
            </h3>
            <p className="text-muted-foreground mb-6">
              Retrouvez l'ensemble de mon parcours professionnel et mes recommandations sur LinkedIn
            </p>
            <Button variant="outline" size="lg">
              <ExternalLink className="w-5 h-5 mr-2" />
              Voir mon profil LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;