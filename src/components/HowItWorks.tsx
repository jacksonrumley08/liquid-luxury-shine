import { motion } from "framer-motion";
import { ClipboardCheck, Wrench, GlassWater } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Free In-Home Consultation",
    description: "We visit your home, test your water, and design a filtration system customized to your needs.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Custom System Installation",
    description: "Our certified technicians install your system with precision — clean, fast, and hassle-free.",
  },
  {
    icon: GlassWater,
    number: "03",
    title: "Enjoy Pure Water for Life",
    description: "Turn on any faucet and experience the difference. Cleaner water, healthier home, lasting peace of mind.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center relative z-10"
                style={{ boxShadow: "0 0 30px hsl(196 88% 62% / 0.15)" }}
              >
                <step.icon className="w-9 h-9 text-primary" />
              </div>
              <span className="font-display text-sm text-primary/60 tracking-[0.3em]">{step.number}</span>
              <h3 className="text-2xl font-display mt-1 mb-3 text-foreground">{step.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
