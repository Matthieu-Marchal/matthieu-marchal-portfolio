import { TrendingUp, Users, Settings, Globe } from "lucide-react";

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
    <section id="competences" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Ce que je sais faire
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Des compétences développées sur le terrain, au service de la performance commerciale
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-gold transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
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
              );
            })}
          </div>
          
          {/* Additional section for technical tools */}
          <div className="mt-16 bg-background rounded-lg p-8 shadow-elegant">
            <h3 className="font-serif text-2xl font-bold text-center mb-8 text-primary">
              Outils & Technologies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-accent-foreground">CRM</span>
                </div>
                <p className="font-medium">HubSpot</p>
                <p className="text-sm text-muted-foreground">Salesforce</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-accent-foreground">ERP</span>
                </div>
                <p className="font-medium">SAP</p>
                <p className="text-sm text-muted-foreground">METI</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-accent-foreground">DATA</span>
                </div>
                <p className="font-medium">Google Suite</p>
                <p className="text-sm text-muted-foreground">Looker Studio</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-accent-foreground">CS</span>
                </div>
                <p className="font-medium">Goodays</p>
                <p className="text-sm text-muted-foreground">Relation client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;