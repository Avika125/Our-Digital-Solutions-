import { motion } from "framer-motion";
import Link from "next/link";

import FeedbackSlider from "../../components/FeedbackSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-12 font-playfair"
        >
          Put simply, we are nerds.
        </motion.h2>

        {/* NERD Grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {/* N */}
          <div className="flex flex-col items-center group">
            <h3 className="text-8xl font-playfair mb-2 transition-all duration-300 group-hover:text-accent">N</h3>
            <p className="text-sm uppercase tracking-widest mb-4">Navigate</p>
            <p className="text-white/60 text-sm">We start by exploring your business, objectives and what makes it all tick.</p>
          </div>
          {/* E */}
          <div className="flex flex-col items-center group">
            <h3 className="text-8xl font-playfair mb-2 transition-all duration-300 group-hover:text-accent">E</h3>
            <p className="text-sm uppercase tracking-widest mb-4">Explode</p>
            <p className="text-white/60 text-sm">We pull it apart in search of all opportunities. We love good ol' blue sky thinking.</p>
          </div>
          {/* R */}
          <div className="flex flex-col items-center group">
            <h3 className="text-8xl font-playfair mb-2 transition-all duration-300 group-hover:text-accent">R</h3>
            <p className="text-sm uppercase tracking-widest mb-4">Refine</p>
            <p className="text-white/60 text-sm">After some hustling and huddling, we refine our ideas into elegant solutions.</p>
          </div>
          {/* D */}
          <div className="flex flex-col items-center group">
            <h3 className="text-8xl font-playfair mb-2 transition-all duration-300 group-hover:text-accent">D</h3>
            <p className="text-sm uppercase tracking-widest mb-4">Define</p>
            <p className="text-white/60 text-sm">Lastly we craft user-centric products for you to take on the world. And win.</p>
          </div>
        </motion.div>

        {/* Footer Link */}
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-white/80"
        >
          Somewhat curious? Here's a bit more about the{" "}
          <Link href="/how-we-work/details" className="font-semibold text-white underline cursor-pointer hover:text-accent transition-all duration-300">
            uncommon way we work
          </Link>{" "}
          and{" "}
          <Link href="/what-we-do" className="font-semibold text-white underline cursor-pointer hover:text-accent transition-all duration-300">
            what we do.
          </Link>
        </motion.p>
      </div>
    </div>
  );
};

export default Testimonials;
