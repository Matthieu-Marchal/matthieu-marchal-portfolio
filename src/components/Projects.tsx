import { Lightbulb, Target, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Target,
      title: "Lancement d'une nouvelle gamme produit",
      context: "Besoin d'introduire une gamme bio locale pour répondre à la demande croissante",
      action: "Étude de marché, négociation avec producteurs locaux, formation équipe, campagne de lancement",
      result: "+15% de CA sur la catégorie, fidélisation de 50+ nouveaux clients réguliers",
      tags: ["Négociation", "Marketing", "Formation"]
    },
    {
      icon: BarChart3,
      title: "Mise en place d'un reporting Looker Studio",
      context: "Manque de visibilité sur les performances e-commerce et l'efficacité des campagnes",
      action: "Conception de dashboards interactifs, formation des équipes, automatisation des rapports",
      result: "Réduction de 50% du temps de reporting, amélioration de 25% de la précision des prévisions",
      tags: ["Data Analysis", "Automatisation", "KPI"]
    },
    {
      icon: Lightbulb,
      title: "Optimisation du processus de relation client",
      context: "Délais de réponse clients trop longs, insatisfaction croissante",
      action: "Implémentation Goodays, formation équipe, création de procédures standardisées",
      result: "Temps de réponse divisé par 3, satisfaction client +30%, réduction des réclamations",
      tags: ["Process", "Satisfaction Client", "CRM"]
    }
  ];

  return (
    <section id="projets" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Projets & Études de cas
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Des réalisations concrètes qui illustrent ma capacité à transformer les défis en opportunités
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div key={index} className="bg-background rounded-lg p-8 shadow-elegant hover:shadow-gold transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Contexte</h4>
                      <p className="text-sm text-muted-foreground">{project.context}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Action</h4>
                      <p className="text-sm text-muted-foreground">{project.action}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Résultat</h4>
                      <p className="text-sm text-success font-medium">{project.result}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary text-xs font-medium rounded-full text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Call to action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-hero rounded-lg p-8 text-primary-foreground">
              <h3 className="font-serif text-2xl font-bold mb-4">
                Prêt à relever de nouveaux défis
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Ces projets reflètent ma capacité à analyser, agir et obtenir des résultats mesurables. 
                Parlons de vos objectifs !
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all"
              >
                Discutons de votre projet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;