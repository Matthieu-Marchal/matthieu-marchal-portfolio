import AnimationWrapper from "@/components/animations/AnimationWrapper";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

const About = () => {
  return (
    <section id="apropos" className="py-16 bg-surface-elevated relative shadow-inset w-full max-w-full overflow-hidden">
      {/* Overlay subtil pour l'effet enfoncé */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.01] to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimationWrapper type="slideUp">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              À propos de moi
            </h2>
          </AnimationWrapper>
          
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <AnimationWrapper type="slideUp" delay={0.2}>
              <p>
                Passionné par la relation client et la performance commerciale, j'ai développé au fil des années 
                une expertise solide dans le domaine du développement commercial. Mon parcours chez Carrefour 
                m'a permis de gravir les échelons, de la vente traditionnelle au management d'équipes et magasin et à la 
                stratégie e-commerce.
              </p>
            </AnimationWrapper>
            
            <AnimationWrapper type="slideUp" delay={0.4}>
              <p>
                Ma montée en responsabilité témoigne de ma capacité d'adaptation et de mon engagement constant 
                vers l'excellence. J'ai eu l'opportunité de diriger des équipes de plus de 10 collaborateurs, 
                tout en développant une vision stratégique qui a permis d'augmenter significativement le 
                chiffre d'affaires de mes secteurs tout en optimisant les processus et les marges.
              </p>
            </AnimationWrapper>
            
            <AnimationWrapper type="slideUp" delay={0.6}>
              <p>
                Ce qui me motive vraiment, c'est la négociation et la construction de relations durables avec 
                les clients. Mon sens de l'organisation et ma rigueur me permettent de mener à bien des projets 
                complexes, tout en gardant une approche humaine basée sur l'écoute et la réactivité.
              </p>
            </AnimationWrapper>
            
            <StaggerContainer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.15}>
              <StaggerItem className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-soft">
                  <span className="text-2xl font-bold text-accent-foreground">R</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Rigueur</h3>
                <p className="text-muted-foreground">
                  Organisation méthodique et attention aux détails dans chaque projet
                </p>
              </StaggerItem>
              
              <StaggerItem className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-soft">
                  <span className="text-2xl font-bold text-accent-foreground">E</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Écoute</h3>
                <p className="text-muted-foreground">
                  Comprendre les besoins pour proposer des solutions adaptées
                </p>
              </StaggerItem>
              
              <StaggerItem className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-gold-soft">
                  <span className="text-2xl font-bold text-accent-foreground">R</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Réactivité</h3>
                <p className="text-muted-foreground">
                  Réponses rapides et adaptation aux changements du marché
                </p>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;