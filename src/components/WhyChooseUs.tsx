import { motion } from "framer-motion";
import { ShieldCheck, MapPin, Award, ThumbsUp } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: MapPin, label: "Locally Owned" },
  { icon: Award, label: "Certified Installers" },
  { icon: ThumbsUp, label: "Satisfaction Guaranteed" },
];

const WhyChooseUs = () => {
  return (
    <section id="choose" className="section-padding relative z-10 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-display mb-8">
            Why Choose <span className="text-gradient">Pure Water Innovations</span>?
          </h2>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
            We offer affordable whole-home filtration solutions with custom installation placement 
            tailored to your home's unique layout. No cookie-cutter setups — every system is designed 
            specifically for you.
          </p>

          <p className="font-body text-lg text-primary font-medium mb-12">
            Proud to offer special discounts for first responders, military personnel, and educators.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass-card p-5 flex flex-col items-center gap-3"
              >
                <badge.icon className="w-8 h-8 text-primary" />
                <span className="font-body text-sm text-foreground text-center">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
