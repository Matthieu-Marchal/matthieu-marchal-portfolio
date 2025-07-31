import { Calendar, TrendingUp, Users, Award } from "lucide-react";
import AnimationWrapper from "@/components/animations/AnimationWrapper";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const Experience = () => {
  const experiences = [
    {
      period: "2022 - 2024",
      company: "Carrefour City",
      role: "Responsable e-commerce & magasin",
      achievements: [
        "Encadrement de 10+ collaborateurs",
        "Campagnes marketing & e-commerce ciblées",
        "Négociation directe avec fournisseurs & clients B2B",
        "Mise en place d'un système de reporting avancé"
      ],
      icon: Award
    },
    {
      period: "2020 - 2022",
      company: "Carrefour City",
      role: "Manager",
      achievements: [
        "Formation et accompagnement des équipes",
        "Optimisation des processus commerciaux",
        "Gestion des gammes de produits et des stocks",
        "Amélioration de l'expérience client"
      ],
      icon: Users
    },
    {
      period: "2019 - 2020",
      company: "Le Moulin de Bruges",
      role: "Assistant Manager",
      achievements: [
        "Responsabilité des processus d'ouverture et de fermeture du magasin",
        "Amélioration de la relation client",
        "Mise en place fiche de poste",
        "Gestion des stocks"
      ],
      icon: TrendingUp
    }
  ];

  return (
    <section id="experiences" className="py-16 bg-surface-elevated relative shadow-inset-deep w-full max-w-full overflow-hidden">
      {/* Overlay pour l'effet profondément enfoncé */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.015] via-transparent to-primary/[0.005] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper type="slideUp">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Mes expériences les plus marquantes
            </h2>
          </AnimationWrapper>
          <AnimationWrapper type="slideUp" delay={0.2}>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Un parcours d'évolution constante, marqué par des résultats concrets
            </p>
          </AnimationWrapper>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={index} className="relative">
                  {/* Timeline line */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-border hidden md:block"></div>
                  )}
                  
                  <div className="bg-surface-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 ml-0 md:ml-16 border border-white/30">
                    {/* Icon */}
                    <div className="absolute left-0 top-6 w-12 h-12 bg-gradient-accent rounded-full items-center justify-center hidden md:flex shadow-gold-soft">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2 md:hidden">
                          <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center mr-3 shadow-gold-soft">
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

        </div>
      </div>
    </section>
  );
};

export default Experience;