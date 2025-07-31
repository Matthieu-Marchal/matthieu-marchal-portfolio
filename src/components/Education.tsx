import { GraduationCap, Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const certifications = [
    {
      title: "HubSpot Sales Software",
      issuer: "HubSpot Academy",
      description: "Maîtrise complète de la plateforme CRM HubSpot",
      verified: true
    },
    {
      title: "Google Analytics Certified",
      issuer: "Google",
      description: "Analyse de données web et e-commerce",
      verified: true
    },
    {
      title: "Certification Goodays",
      issuer: "Goodays",
      description: "Gestion de l'expérience et satisfaction client",
      verified: true
    }
  ];

  return (
    <section id="formations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Formations & Certifications
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Un parcours de formation continue pour rester à la pointe des méthodes commerciales
          </p>
          
          {/* Formations */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary text-center">
              Formations Diplômantes
            </h3>
            
            <div className="space-y-6">
              {formations.map((formation, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-gold transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start mb-4">
                        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 mt-1">
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
          
          {/* Certifications */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-8 text-primary text-center">
              Certifications Professionnelles
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-gold transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  
                  <h4 className="font-bold text-primary mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-accent font-medium text-sm mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.description}
                  </p>
                  
                  {cert.verified && (
                    <div className="flex items-center justify-center text-success text-sm">
                      <Award className="w-4 h-4 mr-1" />
                      <span>Certifié</span>
                    </div>
                  )}
                </div>
              ))}
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