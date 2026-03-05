import { motion } from "framer-motion";
import { FlaskConical, Droplets, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: FlaskConical,
    title: "Remove Impurities",
    description:
      "State-of-the-art filtration removes what you can't see — chlorine, lead, sediment, and hundreds of other contaminants hiding in your water supply.",
  },
  {
    icon: Droplets,
    title: "Be Healthier",
    description:
      "Better skin, softer hair, cleaner clothes. No more hard water damage to your body or your home. Feel the difference from day one.",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description:
      "Cut spending on bottled water, cleaning products, and appliance repairs. A filtration system pays for itself — and keeps paying you back.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display mb-4">
            The <span className="text-gradient">Benefits</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 text-center group transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <b.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-display mb-3 text-foreground">{b.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
