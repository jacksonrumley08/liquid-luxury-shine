import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section id="quote" className="section-padding relative z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-background to-navy-deep" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(196 88% 62% / 0.3), transparent)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl sm:text-6xl font-display mb-6">
          Ready for Cleaner,
          <br />
          <span className="text-gradient">Healthier Water?</span>
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-10">
          Schedule your free, no-obligation in-home water consultation today. 
          Discover what's really in your water — and how easy it is to fix.
        </p>
        <a
          href="tel:8327668624"
          className="glow-button animate-pulse-glow text-xl"
        >
          Schedule Your Free Consultation
        </a>
      </motion.div>
    </section>
  );
};

export default CTABanner;
