const About = () => {
  return (
    <section id="apropos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            À propos de moi
          </h2>
          
          <div className="space-y-6 text-lg text-foreground leading-relaxed">
            <p>
              Passionné par la relation client et la performance commerciale, j'ai développé au fil des années 
              une expertise solide dans le domaine du développement commercial B2B. Mon parcours chez Carrefour 
              m'a permis de gravir les échelons, de la vente traditionnelle au management d'équipes et à la 
              stratégie e-commerce.
            </p>
            
            <p>
              Ma montée en responsabilité témoigne de ma capacité d'adaptation et de mon engagement constant 
              vers l'excellence. J'ai eu l'opportunité de diriger des équipes de plus de 10 collaborateurs, 
              tout en développant une vision stratégique qui a permis d'augmenter significativement le 
              chiffre d'affaires de mes secteurs.
            </p>
            
            <p>
              Ce qui me motive vraiment, c'est la négociation et la construction de relations durables avec 
              les clients. Mon sens de l'organisation et ma rigueur me permettent de mener à bien des projets 
              complexes, tout en gardant une approche humaine basée sur l'écoute et la réactivité.
            </p>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">R</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Rigueur</h3>
                <p className="text-muted-foreground">
                  Organisation méthodique et attention aux détails dans chaque projet
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">É</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Écoute</h3>
                <p className="text-muted-foreground">
                  Comprendre les besoins pour proposer des solutions adaptées
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">R</span>
                </div>
                <h3 className="font-semibold text-xl mb-2">Réactivité</h3>
                <p className="text-muted-foreground">
                  Réponses rapides et adaptation aux changements du marché
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;