import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-48 pb-36">
      <Circles />
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 max-w-[800px] mx-auto">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 font-marker mb-6"
          >
            We can help in many ways... <br />
            <span className="text-accent text-playfair">Or just a few depending on what you need.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl text-white/80 leading-relaxed font-grandHotel italic"
          >
            We stand at the crossroads of tech and creativity. We hold true to the idea that there always has to be a better way.
            <br /><br />
            And so, our offering exists to unpack and address our partner’s business pain points in four key areas - above the screen, on the screen, below the screen and in the brain.
          </motion.p>
        </div>

        {/* Tiers Section */}
        <div className="flex flex-col gap-y-24 max-w-5xl mx-auto mb-32">
          {/* Above the Screen */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-white/10 pt-12"
          >
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-marker mb-4 text-accent">Above the screen</h3>
              <p className="text-2xl font-marker italic">Strategy</p>
            </div>
            <div className="lg:w-2/3">
              <p className="text-white/60 mb-6 uppercase tracking-widest text-xs">
                We are ingenious, insight-led and polished to perfection when it comes to:
              </p>
              <p className="text-xl leading-relaxed font-grandHotel">
                Digital audits, facilitated design thinking workshops, digital strategy development, campaign and website analytics, user research, content strategy development, user scenarios and persona development, media strategy, mobile app strategy and chatbot strategy.
              </p>
            </div>
          </motion.div>

          {/* On the Screen */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-white/10 pt-12"
          >
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-marker mb-4 text-accent">On the screen</h3>
              <p className="text-2xl font-marker italic">Design + UX</p>
            </div>
            <div className="lg:w-2/3">
              <p className="text-white/60 mb-6 uppercase tracking-widest text-xs">
                We weave your brand story into the fabric of everyday life through finely crafted:
              </p>
              <p className="text-xl leading-relaxed font-grandHotel">
                UX design, interface design, visual design, digital advertising campaigns, branding (including identity and print), IA + wireframing, rapid agile prototyping, motion graphics and video, digital installations and AB testing.
              </p>
            </div>
          </motion.div>

          {/* Below the Screen */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-white/10 pt-12"
          >
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-marker mb-4 text-accent">Below the screen</h3>
              <p className="text-2xl font-marker italic">Tech + Dev</p>
            </div>
            <div className="lg:w-2/3">
              <p className="text-white/60 mb-6 uppercase tracking-widest text-xs">
                We are platform agnostic, actively seeking out the best technology solution for every project. We prioritise speed, scale and agility when it comes to:
              </p>
              <p className="text-xl leading-relaxed font-grandHotel">
                Content management systems (Custom, Wordpress, Drupal), front end development (Responsive HTML5), API integration, mobile app development, website development, eCommerce development, user testing and performance optimisation, game development (3D, 2D, multilevel).
              </p>
            </div>
          </motion.div>

          {/* AI Section (In the Brain) */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-white/10 pt-12"
          >
            <div className="lg:w-1/3">
              <h3 className="text-4xl font-marker mb-4 text-accent">In the brain</h3>
              <p className="text-2xl font-marker italic">AI + Automation</p>
            </div>
            <div className="lg:w-2/3">
              <p className="text-white/60 mb-6 uppercase tracking-widest text-xs">
                We harness the power of artificial intelligence to create smarter, more intuitive digital experiences:
              </p>
              <p className="text-xl leading-relaxed font-grandHotel">
                AI chatbot development, conversational UI/UX, intelligent automation, predictive analytics, natural language processing (NLP) integration, machine learning implementation, and AI-driven content personalization.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center text-center pb-20"
        >
          <h2 className="text-5xl font-marker mb-8">Let’s make some magic.</h2>
          <button className="btn rounded-full border border-white/50 px-10 py-4 text-xl font-marker hover:border-accent hover:text-accent transition-all duration-300">
            Get a quote
          </button>
        </motion.div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
