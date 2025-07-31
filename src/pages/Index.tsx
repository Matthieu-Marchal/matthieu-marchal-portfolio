import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionSeparator from "@/components/ui/SectionSeparator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <SectionSeparator />
      <About />
      
      <SectionSeparator />
      <Skills />
      
      <SectionSeparator />
      <Experience />
      
      <SectionSeparator />
      <Projects />
      
      <SectionSeparator />
      <Education />
      
      <SectionSeparator />
      <Contact />
      
      <SectionSeparator animated={false} className="opacity-50" />
      <Footer />
    </div>
  );
};

export default Index;
