import { motion } from "framer-motion";

const WhyFiltration = () => {
  return (
    <section id="why" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display mb-4">
            Why Water <span className="text-gradient">Filtration</span>?
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Your tap water travels through miles of aging infrastructure before it reaches your glass. 
              Along the way, it picks up chlorine, lead, sediment, and hard minerals like calcium and magnesium 
              that wreak havoc on your home.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Hard water leaves scale buildup on your fixtures, damages your water heater and appliances, 
              dries out your skin and hair, and leaves spots on every surface it touches. Bottled water 
              isn't the answer — it's expensive, wasteful, and doesn't protect your entire home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <p className="font-body text-lg text-foreground leading-relaxed">
              A whole-home filtration system is the only way to ensure every drop of water in your home 
              is clean, soft, and safe — from the kitchen sink to the shower to the washing machine.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyFiltration;
