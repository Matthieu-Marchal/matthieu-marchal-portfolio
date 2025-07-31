import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Download, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Prenons contact
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Vous avez un projet commercial ? Une opportunité à discuter ? 
            N'hésitez pas à me contacter, je serais ravi d'échanger avec vous.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background rounded-lg p-8 shadow-elegant">
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
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-background rounded-lg p-8 shadow-elegant">
                <h3 className="font-serif text-2xl font-bold mb-6 text-primary">
                  Informations de contact
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">matthieu.marchal@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <p className="text-muted-foreground">+33 6 XX XX XX XX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Localisation</p>
                      <p className="text-muted-foreground">Région parisienne, France</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-background rounded-lg p-8 shadow-elegant">
                <h3 className="font-serif text-xl font-bold mb-6 text-primary">
                  Actions rapides
                </h3>
                
                <div className="space-y-4">
                  <Button variant="outline" size="lg" className="w-full justify-start">
                    <Linkedin className="w-5 h-5 mr-3" />
                    Voir mon profil LinkedIn
                  </Button>
                  
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
              <div className="bg-gradient-hero rounded-lg p-6 text-primary-foreground">
                <h4 className="font-bold mb-2">Disponibilité</h4>
                <p className="text-sm opacity-90">
                  Je suis actuellement à la recherche de nouvelles opportunités en développement commercial B2B. 
                  Disponible pour un démarrage rapide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;