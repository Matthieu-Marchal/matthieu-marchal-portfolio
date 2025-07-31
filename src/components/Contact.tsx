import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Download, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import AnimationWrapper from "@/components/animations/AnimationWrapper";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Je vous recontacterai dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-surface-elevated relative shadow-raised transform-gpu">
      {/* Highlight pour l'effet élevé */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-accent/[0.003] pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimationWrapper type="slideUp">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Prenons contact
            </h2>
          </AnimationWrapper>
          <AnimationWrapper type="slideUp" delay={0.2}>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Vous avez un projet commercial ? Une opportunité à discuter ? 
              N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.
            </p>
          </AnimationWrapper>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <AnimationWrapper type="slideLeft" delay={0.3}>
              <div className="bg-surface-card rounded-lg p-6 lg:p-8 shadow-card border border-white/30">
              <h3 className="font-serif text-2xl font-bold mb-6 text-primary">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email professionnel
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="votre.email@entreprise.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Parlez-moi de votre projet, vos besoins ou l'opportunité que vous souhaitez discuter..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Envoyer le message
                </Button>
              </form>
              </div>
            </AnimationWrapper>
            
            {/* Contact Info */}
                        <AnimationWrapper type="slideRight" delay={0.5}>
              <div className="space-y-8">
                <div className="bg-surface-card rounded-lg p-6 lg:p-8 shadow-card border border-white/30">
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">
                  Informations de contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 shadow-gold-soft">
                      <Mail className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:matthieu.marchal47210@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        matthieu.marchal47210@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 shadow-gold-soft">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <a 
                        href="tel:+33643337756"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +33 6 43 33 77 56
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 shadow-gold-soft">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Localisation</p>
                      <p className="text-muted-foreground">Bordeaux / Bayonne</p>
                    </div>
                  </div>
                </div>
              </div>
              
                              {/* Quick Actions */}
                <div className="bg-surface-card rounded-lg p-6 lg:p-8 shadow-card border border-white/30">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">
                  Actions rapides
                </h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://www.linkedin.com/in/matthieu-marchal-ba9465278/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-start w-full px-6 py-3 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mr-3" />
                    Voir mon profil LinkedIn
                  </a>
                  
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    <Download className="w-5 h-5 mr-3" />
                    Télécharger mon CV
                  </Button>
                  
                  <Button variant="accent" size="lg" className="w-full justify-start">
                    <Calendar className="w-5 h-5 mr-3" />
                    Planifier un appel
                  </Button>
                </div>
              </div>
              
                              {/* Availability */}
                <div className="bg-gradient-hero rounded-lg p-6 text-primary-foreground shadow-elegant ring-1 ring-white/10">
                <h4 className="font-bold mb-2">Disponibilité</h4>
                <p className="text-sm opacity-90">
                  Je suis actuellement à la recherche de nouvelles opportunités en développement commercial. 
                  Disponible pour un démarrage rapide.
                </p>
              </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;