import { motion } from "framer-motion";

interface SectionSeparatorProps {
  className?: string;
  animated?: boolean;
}

const SectionSeparator = ({ className = "", animated = true }: SectionSeparatorProps) => {
  if (animated) {
    return (
      <div className={`relative w-full h-px my-0 ${className}`}>
        {/* Fond subtil pour la transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-surface-elevated to-background opacity-50"></div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-header-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3 
          }}
        />
        
        {/* Effet de brillance qui traverse */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/60 to-transparent h-px opacity-0"
          animate={{ 
            opacity: [0, 1, 0],
            x: ['-100%', '100%'] 
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeInOut"
          }}
        />
        
        {/* Points de brillance */}
        <motion.div
          className="absolute left-1/4 top-0 w-1 h-1 bg-accent/80 rounded-full -translate-y-0.5"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="absolute right-1/3 top-0 w-0.5 h-0.5 bg-accent/60 rounded-full -translate-y-0.25"
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>
    );
  }

  return (
    <div className={`w-full h-px bg-gradient-header-border my-0 ${className}`} />
  );
};

export default SectionSeparator;