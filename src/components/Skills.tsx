import { TrendingUp, Users, Settings, Globe } from "lucide-react";
import AnimationWrapper from "@/components/animations/AnimationWrapper";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const Skills = () => {
  const skillCategories = [
    {
      icon: TrendingUp,
      title: "Business Development",
      skills: [
        "Prospection & démarchage (physique, téléphonique, digital)",
        "Négociation B2B",
        "Suivi de comptes / fidélisation",
        "CRM & outils métier : HubSpot, Goodays, Google Suite, ERP (SAP, METI)"
      ]
    },
    {
      icon: Settings,
      title: "Stratégie commerciale & gestion magasin",
      skills: [
        "Optimisation des marges, gammes, stocks",
        "Animation de l'offre, campagnes e-commerce",
        "Formation & supervision d'équipes",
        "Analyse de données et reporting"
      ]
    },
    {
      icon: Globe,
      title: "Langues",
      skills: [
        "Français : Natif",
        "Anglais : Courant",
        "Espagnol : Notions professionnelles"
      ]
    }
  ];

  return (
    <section id="competences" className="py-16 bg-secondary relative shadow-raised transform-gpu w-full max-w-full overflow-hidden">
      {/* Highlight subtil pour l'effet élevé */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimationWrapper type="slideUp">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Ce que je sais faire
            </h2>
          </AnimationWrapper>
          <AnimationWrapper type="slideUp" delay={0.2}>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Des compétences développées sur le terrain, au service de la performance commerciale
            </p>
          </AnimationWrapper>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.2}>
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <StaggerItem key={index}>
                  <div className="bg-surface-card rounded-lg p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-white/30">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 shadow-gold-soft">
                        <IconComponent className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-primary">
                        {category.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-foreground">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
};

export default Skills;