import { Lightbulb, Target, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import AnimationWrapper from "@/components/animations/AnimationWrapper";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const Projects = () => {
  const projects = [
    {
      icon: Target,
      title: "Lancement d'une nouvelle gamme produit",
      context: "Besoin d'introduire une gamme bio locale pour répondre à la demande croissante",
      action: "Étude de marché, négociation avec producteurs locaux, formation équipe, campagne de lancement",
      tags: ["Négociation", "Marketing", "Formation"]
    },
    {
      icon: BarChart3,
      title: "Mise en place d'un reporting Looker Studio",
      context: "Manque de visibilité sur les performances e-commerce et l'efficacité des campagnes",
      action: "Conception de dashboards interactifs, formation des équipes, automatisation des rapports",
      tags: ["Data Analysis", "Automatisation", "KPI"]
    },
    {
      icon: Lightbulb,
      title: "Optimisation du processus de relation client",
      context: "Délais de réponse clients trop longs, insatisfaction croissante",
      action: "Implémentation Goodays, formation équipe, création de procédures standardisées",
      tags: ["Process", "Satisfaction Client", "CRM"]
    }
  ];

  return (
    <section id="projets" className="py-16 bg-surface-elevated relative shadow-elevated transform-gpu">
      {/* Effets premium pour la section la plus élevée */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-accent/[0.005] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <AnimationWrapper type="slideUp">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Projets & Études de cas
            </h2>
          </AnimationWrapper>
          <AnimationWrapper type="slideUp" delay={0.2}>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Des réalisations concrètes qui illustrent ma capacité à transformer les défis en opportunités
            </p>
          </AnimationWrapper>
          
          <StaggerContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={0.2}>
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <StaggerItem key={index}>
                  <motion.div 
                    className="bg-surface-card rounded-lg p-8 shadow-card group h-full border border-white/50"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 25px 50px -12px hsl(220, 26%, 14%, 0.15), 0 0 0 1px hsl(45, 93%, 47%, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-6 h-6 text-accent-foreground" />
                      </motion.div>
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
                      
                  
                      
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span 
                            key={tagIndex}
                            className="px-3 py-1 bg-secondary text-xs font-medium rounded-full text-primary"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
          
          {/* Call to action */}
          <AnimationWrapper type="slideUp" delay={0.4} className="mt-16 text-center">
            <motion.div 
              className="bg-gradient-hero rounded-lg p-8 text-primary-foreground shadow-elegant ring-1 ring-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-2xl font-bold mb-4">
                Prêt à relever de nouveaux défis
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Ces projets reflètent ma capacité à analyser, agir et obtenir des résultats mesurables. 
                Parlons de vos objectifs !
              </p>
              <motion.button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discutons de votre projet
              </motion.button>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};

export default Projects;