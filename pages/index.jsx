import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";

import ParticlesContainer from "../components/ParticlesContainer";
import CaseStudiesBtn from "../components/CaseStudiesBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  // Contact section state
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);
    formData.append("selected_services", selectedServices.join(", "));

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
          setSelectedServices([]);
          myForm.reset();
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-primary/60">
      {/* 1. HERO SECTION */}
      <section id="home" className="h-screen relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
          <div className="text-center flex flex-col justify-center pt-32 xl:pt-40 xl:text-left h-full container mx-auto">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView="show"
              className="h1 font-marker"
            >
              We give thoughts a <br /> chance at{" "}
              <span className="text-accent">reality</span>
            </motion.h1>

            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView="show"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-3xl font-grandHotel"
            >
              through digital craftsmanship for forward-looking brands
            </motion.p>

            <div className="flex justify-center xl:hidden relative">
              <CaseStudiesBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView="show"
              className="hidden xl:flex"
            >
              <CaseStudiesBtn />
            </motion.div>
          </div>
        </div>

        {/* Hero Background Elements */}
        <div className="w-[1280px] h-full absolute right-0 bottom-0 pointer-events-none">
          <div
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
            aria-hidden
          />
          <ParticlesContainer />
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section id="who-we-are" className="min-h-screen relative py-32 flex items-center">
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12 relative z-10">
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              className="h2 font-marker leading-tight mb-8"
            >
              We're a digital solutions business made up by tech <span className="text-accent">misfits, passionate creatives and curious humans.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            className="flex-1 flex flex-col justify-center gap-y-6 text-white/80 text-lg xl:text-left font-grandHotel"
          >
            <p className="text-2xl">
              We work with entrepreneurs and forward-looking companies to transform ideas into products that HELP, CHALLENGE, and INSPIRE.
            </p>
            <p className="text-xl">
              From design through to code, we delight in finding simple solutions to complex challenges. And by collaborating with our clients to form rewarding relationships, we help their companies grow and evolve.
            </p>
            <p className="font-semibold text-white font-marker pt-4 text-xl">
              Want to dive deep into our philosophy?{" "}
              <Link href="/who-we-are/details" className="text-accent underline cursor-pointer hover:text-white transition-all">
                Read the full story.
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. HOW WE WORK (NERD) */}
      <section id="how-we-work" className="min-h-screen relative py-32 bg-primary/20">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="h2 mb-20 font-marker text-center"
          >
            Put simply, we are <span className="text-accent">nerds.</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {[
              { l: "N", t: "Navigate", d: "We start by exploring your business, objectives and what makes it all tick." },
              { l: "E", t: "Explode", d: "We pull it apart in search of all opportunities. We love good ol' blue sky thinking." },
              { l: "R", t: "Refine", d: "After some hustling and huddling, we refine our ideas into elegant solutions." },
              { l: "D", t: "Define", d: "Lastly we craft user-centric products for you to take on the world. And win." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.2 + (i * 0.1))}
                initial="hidden"
                whileInView="show"
                className="flex flex-col items-center group text-center"
              >
                <h3 className="text-9xl font-marker mb-2 transition-all duration-300 group-hover:text-accent group-hover:scale-110">{item.l}</h3>
                <p className="text-sm uppercase tracking-[0.3em] mb-4 text-accent">{item.t}</p>
                <p className="text-white/60 text-lg font-grandHotel italic">{item.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            className="text-center text-xl font-grandHotel"
          >
            Curious about our uncommon ways?{" "}
            <Link href="/how-we-work/details" className="font-semibold text-white underline cursor-pointer hover:text-accent transition-all">
              Learn how we run things.
            </Link>
          </motion.p>
        </div>
      </section>

      {/* 4. WHAT WE DO (TIERS) */}
      <section id="what-we-do" className="min-h-screen relative py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-24 max-w-[800px] mx-auto">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              className="h2 font-marker mb-6"
            >
              We can help in many ways... <br />
              <span className="text-accent">Or just a few depending on what you need.</span>
            </motion.h2>
          </div>

          <div className="flex flex-col gap-y-24 max-w-5xl mx-auto">
            {[
              { h: "Above the screen", s: "Strategy", d: "Digital audits, facilitated design thinking workshops, digital strategy development, campaign and website analytics, user research, content strategy development." },
              { h: "On the screen", s: "Design + UX", d: "UX design, interface design, visual design, digital advertising campaigns, branding, IA + wireframing, motion graphics and video." },
              { h: "Below the screen", s: "Tech + Dev", d: "CMS (Custom, Wordpress, Drupal), front end development, API integration, mobile app development, website and eCommerce development." },
              { h: "In the brain", s: "AI + Automation", d: "AI chatbot development, conversational UI/UX, intelligent automation, predictive analytics, NLP integration, machine learning." }
            ].map((tier, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                className="flex flex-col lg:flex-row gap-8 lg:gap-16 border-t border-white/10 pt-12"
              >
                <div className="lg:w-1/3">
                  <h3 className="text-4xl font-marker mb-4 text-accent">{tier.h}</h3>
                  <p className="text-2xl font-marker italic text-white/40">{tier.s}</p>
                </div>
                <div className="lg:w-2/3">
                  <p className="text-xl leading-relaxed font-grandHotel text-white/80">{tier.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUFF THAT WORKED */}
      <section id="stuff-that-worked" className="min-h-screen relative py-32 bg-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-20">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView="show"
              className="h2 font-marker mb-4"
            >
              And here's some stuff that's <span className="text-accent">worked.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                variants={fadeIn("up", 0.2 * item)}
                initial="hidden"
                whileInView="show"
                className="relative group overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-accent transition-all duration-500 cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden bg-white/10 flex items-center justify-center text-white/20 text-4xl">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                  <span className="absolute font-marker opacity-20">Project {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-marker text-xl mb-2 group-hover:text-accent transition-all">Project Title {item}</h3>
                  <p className="text-white/60 text-sm font-grandHotel">Digital craftsmanship applied to this specific case study.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LET'S TALK */}
      <section id="let-s-talk" className="min-h-screen relative py-32 flex items-center">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="h2 font-marker mb-16 text-center"
          >
            Let's <span className="text-accent text-6xl">do this</span>
          </motion.h2>

          <form onSubmit={handleSubmit} className="w-full max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-20">
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView="show"
                className="flex-1 flex flex-col gap-y-12"
              >
                <div className="border-b border-white/10 pb-4">
                  <label className="text-white/40 block mb-2 uppercase text-xs tracking-widest font-grandHotel">My project is...</label>
                  <textarea
                    name="project_description"
                    className="w-full bg-transparent outline-none text-2xl font-marker resize-none"
                    placeholder="Describe your vision"
                    rows={2}
                    required
                  ></textarea>
                </div>
                <div className="border-b border-white/10 pb-4">
                  <label className="text-white/40 block mb-2 uppercase text-xs tracking-widest font-grandHotel">My name is...</label>
                  <input
                    name="name"
                    className="w-full bg-transparent outline-none text-2xl font-marker"
                    placeholder="Your name"
                    type="text"
                    required
                  />
                </div>
                <div className="border-b border-white/10 pb-4">
                  <label className="text-white/40 block mb-2 uppercase text-xs tracking-widest font-grandHotel">My email is...</label>
                  <input
                    name="email"
                    className="w-full bg-transparent outline-none text-2xl font-marker"
                    placeholder="Your email address"
                    type="email"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                whileInView="show"
                className="w-full lg:w-[320px]"
              >
                <p className="text-white/40 uppercase text-xs tracking-widest mb-8">I need help with a:</p>
                <div className="flex flex-col gap-y-4">
                  {[
                    "website", "mobile app", "digital strategy", "banner campaign",
                    "brand design", "video", "digital newsletter", "not sure, help!"
                  ].map((item) => {
                    const isSelected = selectedServices.includes(item);
                    return (
                      <div
                        key={item}
                        onClick={() => toggleService(item)}
                        className="flex items-center gap-x-4 group cursor-pointer"
                      >
                        <div className={`w-4 h-4 border transition-all duration-300 ${isSelected ? 'bg-accent border-accent scale-125' : 'border-white/20 group-hover:border-accent'}`}></div>
                        <span className={`text-2xl font-marker transition-all duration-300 ${isSelected ? 'text-accent' : 'group-hover:text-accent'}`}>
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView="show"
              className="mt-24 flex flex-col items-center"
            >
              <button
                type="submit"
                disabled={isLoading}
                className="group flex items-center gap-x-6 text-5xl font-marker hover:text-accent disabled:opacity-50 transition-all duration-300"
              >
                {isLoading ? "Sending..." : "Send it our way"}
                {!isLoading && <BsArrowRight className="group-hover:translate-x-4 transition-all duration-300" />}
              </button>
            </motion.div>
          </form>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="py-20 border-t border-white/5 bg-black/20">
        <div className="container mx-auto text-center">
          <h2 className="h2 font-grandHotel mb-8">
            Let's make some <span className="text-accent">magic.</span> Together.
          </h2>
          <p className="text-white/40 font-grandHotel text-xl italic">
            Our Digital Solutions • Crafting Reality Since 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
