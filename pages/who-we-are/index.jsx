import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <div className="min-h-screen bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12">
        {/* Left: Headline */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 font-marker leading-tight mb-8"
          >
            We're a digital solutions business made up by tech misfits, passionate creatives and curious humans.
          </motion.h2>
        </div>

        {/* Right: Detailed Text */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex-1 flex flex-col justify-center gap-y-6 text-white/80 text-lg xl:text-left font-grandHotel"
        >
          <p className="text-2xl">
            We work with entrepreneurs and forward-looking companies to transform ideas into products that HELP, CHALLENGE, and INSPIRE.
          </p>
          <p className="text-xl">
            From design through to code, we delight in finding simple solutions to complex challenges. And by collaborating with our clients to form rewarding relationships, we help their companies grow and evolve.
          </p>
          <p className="text-xl">
            This process is further fuelled by our integrated approach to strategy, design and development, which allows us to help deliver ideas from concept to launch, and beyond.
          </p>
          <p className="font-semibold text-white font-marker">
            Not in a rush? Here's a bit more about{" "}
            <Link href="/who-we-are/details" className="text-accent underline cursor-pointer">
              who we are.
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
