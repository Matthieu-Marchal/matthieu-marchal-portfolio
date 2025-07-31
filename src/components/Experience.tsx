import { Calendar, TrendingUp, Users, Award } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "2022 - 2024",
      company: "Carrefour City",
      role: "Responsable e-commerce & magasin",
      achievements: [
        "Encadrement de 10+ collaborateurs",
        "+20% CA via campagnes e-commerce ciblées",
        "Négociation directe avec fournisseurs locaux & clients B2B",
        "Mise en place d'un système de reporting avancé"
      ],
      icon: Award
    },
    {
      period: "2020 - 2022",
      company: "Carrefour City",
      role: "Responsable adjoint",
      achievements: [
        "Formation et accompagnement des équipes",
        "Optimisation des processus de vente",
        "Développement de partenariats locaux",
        "Amélioration de l'expérience client"
      ],
      icon: Users
    },
    {
      period: "2018 - 2020",
      company: "Carrefour City",
      role: "Conseiller commercial",
      achievements: [
        "Développement du portefeuille client",
        "Atteinte systématique des objectifs",
        "Spécialisation en négociation B2B",
        "Formation aux outils CRM"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Mes expériences les plus marquantes
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Un parcours d'évolution constante, marqué par des résultats concrets
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-border hidden md:block"></div>
                  )}
                  
                  <div className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-gold transition-all duration-300 ml-0 md:ml-16">
                    {/* Icon */}
                    <div className="absolute left-0 top-6 w-12 h-12 bg-gradient-accent rounded-full items-center justify-center hidden md:flex">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2 md:hidden">
                          <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-3">
                            <IconComponent className="w-4 h-4 text-accent-foreground" />
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-medium text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="hidden md:flex items-center text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-success rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-foreground text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Results summary */}
          <div className="mt-16 bg-gradient-subtle rounded-lg p-8 text-center">
            <h3 className="font-serif text-2xl font-bold mb-6 text-primary">
              Résultats clés de mon parcours
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">+20%</div>
                <p className="text-muted-foreground">Croissance CA e-commerce</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">Collaborateurs encadrés</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <p className="text-muted-foreground">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;