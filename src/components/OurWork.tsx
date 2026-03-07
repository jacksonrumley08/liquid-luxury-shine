import { motion } from "framer-motion";
import installation1 from "@/assets/installation-1.png";
import installation2 from "@/assets/installation-2.png";
import installation3 from "@/assets/installation-3.png";

const photos = [
  { src: installation1, alt: "Whole home water filtration system installed in garage with dual blue filters and water softener" },
  { src: installation2, alt: "Custom water treatment system installation with conditioning tank and filtration housings" },
  { src: installation3, alt: "Exterior brick wall water filtration installation with dual filters and softener unit" },
];

const OurWork = () => {
  return (
    <section id="work" className="section-padding relative z-10 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display mb-4">
            Our <span className="text-gradient">Installations</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Every system is custom-designed and professionally installed to fit your home's unique layout.
          </p>
          <div className="w-20 h-0.5 bg-primary/40 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
