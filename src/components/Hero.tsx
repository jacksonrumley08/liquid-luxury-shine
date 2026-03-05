import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-5 py-2.5 mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-body text-sm text-primary">
              First Responder & Military Discounts Available
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display leading-[0.9] mb-6">
            <span className="text-gradient">Experience</span>
            <br />
            <span className="text-foreground">Truly Pure Water</span>
          </h1>

          <p className="font-body text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Whole home water filtration and conditioning systems that protect your family, 
            your appliances, and your peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#quote" className="glow-button animate-pulse-glow">
              Get a Free Quote
            </a>
            <a href="#how" className="ghost-button">
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
