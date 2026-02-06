import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const HowWeWorkDetails = () => {
    const nerd = [
        { letter: "N", word: "NAVIGATE", desc: "We start by exploring your business, objectives and what makes it all tick." },
        { letter: "e", word: "EXPLODE", desc: "We pull it apart in search of all opportunities. We love good ol' blue sky thinking." },
        { letter: "r", word: "REFINE", desc: "After some hustling and huddling, we refine our ideas into elegant solutions." },
        { letter: "d", word: "DEFINE", desc: "Lastly we craft user-centric products for you to take on the world. And win." },
    ];

    return (
        <div className="h-full bg-primary/30 py-32 xl:py-48 overflow-y-auto scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-accent/80 font-grandHotel">
            <Circles />
            <Bulb />

            <div className="container mx-auto px-4 xl:px-0 flex flex-col gap-y-24 pb-32">

                {/* Intro Section */}
                <section className="max-w-[900px] mx-auto text-center space-y-8">
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="h1 font-marker tracking-tight">
                            We keep you close, and your users <span className="text-accent italic">closer.</span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed max-w-[700px] mx-auto">
                            We know that delivering work that doesn’t meet the needed user outcomes hurts us as much as our partners. So we focus every part of our process around the end users, and only them.
                        </p>
                    </motion.div>
                </section>

                {/* Approach Section */}
                <section className="max-w-5xl mx-auto border-t border-white/10 pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            <h2 className="text-4xl font-marker mb-6">
                                We always set out to <br />
                                <span className="text-accent">get it right the first time</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="space-y-6 text-lg text-white/70"
                        >
                            <p>
                                We work with you to revisit your brief and your pain points, ensuring that what’s been identified is the actual user problem to address.
                            </p>
                            <p>
                                We use the precious time we have with you to chat, ask questions, listen and observe, rather than try sell an idea, or worse yet, a solution only we have fallen in love with.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* NERD Section */}
                <section className="max-w-5xl mx-auto border-t border-white/10 pt-20 text-center lg:text-left">
                    <motion.h3
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        className="text-3xl font-marker mb-16 text-center"
                    >
                        Put simply (again), we are <span className="text-accent underline underline-offset-8">nerds</span>
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {nerd.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={fadeIn("up", 0.1 * (i + 1))}
                                initial="hidden"
                                whileInView="show"
                                className="flex flex-col items-center lg:items-start group"
                            >
                                <span className="text-7xl font-marker text-white/20 group-hover:text-accent transition-all duration-500 mb-4 inline-block">{item.letter}</span>
                                <h4 className="text-xl font-bold tracking-widest uppercase mb-4">{item.word}</h4>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* The Stages */}
                <section className="max-w-5xl mx-auto flex flex-col gap-y-24 mt-12">
                    <motion.h2
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        className="text-4xl font-playfair border-b border-white/10 pb-8"
                    >
                        And this is how we work
                    </motion.h2>

                    {/* Stage 1 */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-20"
                    >
                        <div className="lg:w-1/3">
                            <span className="text-accent font-mono text-sm tracking-widest mb-4 block">PHASE 01</span>
                            <h3 className="text-4xl font-playfair">Discover</h3>
                        </div>
                        <div className="lg:w-2/3">
                            <p className="text-xl text-white/70 leading-relaxed">
                                The first stage of our process is unearthing everything we can about the brief - the objectives and the needed outcomes. This delivers the strategic underpinning of everything moving forward.
                            </p>
                            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/5 text-sm space-y-2">
                                <p className="text-accent font-bold uppercase tracking-wider mb-2">Outputs include:</p>
                                <p>Target audience segmentation, user research, defined functional scope, recommended User Centered Navigation including Information Architecture and Wireframes.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stage 2 */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-20 border-t border-white/10 pt-16"
                    >
                        <div className="lg:w-1/3">
                            <span className="text-accent font-mono text-sm tracking-widest mb-4 block">PHASE 02</span>
                            <h3 className="text-4xl font-playfair">Design</h3>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            <p className="text-xl text-white/70 leading-relaxed">
                                We bring the strategy to life, with a focus on <span className="text-white font-semibold italic">simplification.</span> This is the most important tool we have when approaching all elements of design.
                            </p>
                            <p className="text-xl text-white/70 leading-relaxed">
                                We constantly strive to make content more accessible and consumable, whilst delivering the best user experience for all of our identified audiences. The new simplicity paradigm shapes everything we do.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stage 3 */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-20 border-t border-white/10 pt-16"
                    >
                        <div className="lg:w-1/3">
                            <span className="text-accent font-mono text-sm tracking-widest mb-4 block">PHASE 03</span>
                            <h3 className="text-4xl font-playfair">Develop</h3>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            <p className="text-xl text-white/70 leading-relaxed">
                                Finally, we wrap our recommendations into a technically crafted solution in the most effective and efficient way possible for both internal and external audiences.
                            </p>
                            <p className="text-xl text-white/70 leading-relaxed">
                                Mostly executed in <span className="text-accent">two week sprints</span> with ongoing QA and user-testing, here we bring the project to life via a combination of Agile and Waterfall procedures and high end code.
                            </p>
                        </div>
                    </motion.div>
                </section>

                {/* Action Section */}
                <motion.section
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto w-full text-center py-20 border-t border-white/10"
                >
                    <h2 className="h2 font-playfair mb-10">
                        Let's make some <span className="text-accent">magic,</span> together.
                    </h2>
                    <Link
                        href="/let-s-talk"
                        className="inline-flex items-center gap-4 text-2xl font-playfair group hover:text-accent transition-all duration-300"
                    >
                        Get a quote
                        <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
                    </Link>
                </motion.section>

            </div>
        </div>
    );
};

export default HowWeWorkDetails;
