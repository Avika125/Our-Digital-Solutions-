import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import SolutionsSlider from "../../components/SolutionsSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-36 flex flex-col items-center">
      <Circles />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 font-playfair mb-4"
          >
            And here's some stuff that's <span className="text-accent text-playfair">worked.</span>
          </motion.h2>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Project Items (Placeholders based on Image 1) */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-accent transition-all duration-500 cursor-pointer">
              <div className="aspect-video relative overflow-hidden bg-white/10 flex items-center justify-center text-white/20 text-4xl">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                <span className="absolute">Project {item}</span>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl mb-2">Project Title {item}</h3>
                <p className="text-white/60 text-sm">Brief description of the digital craftsmanship applied to this specific project.</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
