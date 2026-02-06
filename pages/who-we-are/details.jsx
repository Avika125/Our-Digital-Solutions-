import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";

const Details = () => {
    const points = [
        "Only looking towards digital, and ignoring the reality of outside the screen.",
        "Scared by ugly solutions (because not everything needs to be pretty to solve big problems).",
        "Waiting for other people to solve the challenges we all face.",
        "Only chasing trends (we are also a part of creating them).",
    ];

    return (
        <div className="h-full bg-primary/30 py-32 xl:py-48 overflow-y-auto scrollbar-thin scrollbar-track-white/10 scrollbar-thumb-accent/80 font-grandHotel">
            <Circles />
            <Bulb />

            <div className="container mx-auto px-4 xl:px-0 flex flex-col gap-y-24 pb-32">

                {/* Intro Section */}
                <section className="max-w-[800px] mx-auto text-center space-y-8">
                    <motion.div
                        variants={fadeIn("down", 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <p className="text-accent text-xl font-marker italic mb-4">We are problem solvers…</p>
                        <h1 className="h1 font-marker tracking-tight">
                            Who live for that feeling you get when a problem is <span className="text-accent italic">solved.</span>
                        </h1>
                    </motion.div>
                </section>

                {/* Why Partners Choose Us */}
                <section className="max-w-5xl mx-auto border-t border-white/10 pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            <h2 className="text-4xl font-marker mb-6">Our partners choose to work with us because <span className="text-accent">we aren’t…</span></h2>
                        </motion.div>
                        <motion.ul
                            variants={fadeIn("left", 0.4)}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="space-y-6"
                        >
                            {points.map((point, i) => (
                                <li key={i} className="flex items-start gap-4 text-lg text-white/70">
                                    <span className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0" />
                                    <p className="leading-relaxed">{point}</p>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                </section>

                {/* Story Tiers */}
                <div className="max-w-5xl mx-auto flex flex-col gap-y-24">

                    {/* Where we came from */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-20 border-t border-white/10 pt-16"
                    >
                        <div className="lg:w-1/3">
                            <h3 className="text-4xl font-marker text-accent">Where we came from</h3>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            <p className="text-xl text-white/80 leading-relaxed">
                                With many years combined in big agencies at the forefront of the ‘digital revolution’, it became clear to us that our jobs were about commercial efficiency, not problem solving effectiveness.
                            </p>
                            <p className="text-xl text-white/80 leading-relaxed">
                                Fitting jobs to limited resources, not fitting the right resources to the job which resulted in overpriced and ineffective ‘solutions’. The feeling of effectively solving a problem, was set aside for suffocating process, pursuing awards and margin maximisation. So we abandoned ship and created a new way of doing things.
                            </p>
                        </div>
                    </motion.div>

                    {/* What’s happened since */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-20 border-t border-white/10 pt-16"
                    >
                        <div className="lg:w-1/3">
                            <h3 className="text-4xl font-marker text-accent">What’s happened since</h3>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            <p className="text-xl text-white/80 leading-relaxed font-grandHotel italic">
                                “Since we set out to challenge the offering available, we have been dedicated to working with numerous startups and established businesses.”
                            </p>
                            <p className="text-xl text-white/80 leading-relaxed border-l-2 border-accent/30 pl-8">
                                In an era where ‘digital’ has become a buzzword that everyone talks about but few truly master, we have focused on technical competence and solution-based craftsmanship. Despite the growth in options, the industry is still characterised by a low level of technical competence and solution based craftmanship.
                            </p>
                        </div>
                    </motion.div>

                    {/* Where we are now */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row gap-8 lg:gap-20 border-t border-white/10 pt-16"
                    >
                        <div className="lg:w-1/3">
                            <h3 className="text-4xl font-grandHotel text-accent">Where we are now</h3>
                        </div>
                        <div className="lg:w-2/3 space-y-6">
                            <p className="text-xl text-white/80 leading-relaxed">
                                While others continue to paint zebra stripes on their horses, we continue to connect ourselves with the strategic, design and engineering misfits capable of taking ideas on a piece of scrap paper to an efficiently implementable solution that actually addresses real business problems.
                            </p>
                            <p className="text-xl text-white/80 leading-relaxed italic">
                                And in doing so, we continue to be lucky enough to work with some incredible people on some incredible projects.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Action Section */}
                <motion.section
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto w-full text-center py-20 border-t border-white/10"
                >
                    <h2 className="h2 font-grandHotel mb-10">
                        Let's make some <span className="text-accent">magic.</span> Together.
                    </h2>
                    <Link
                        href="/let-s-talk"
                        className="inline-flex items-center gap-4 text-2xl font-grandHotel group hover:text-accent transition-all duration-300"
                    >
                        Get a quote
                        <HiArrowLongRight className="group-hover:translate-x-2 transition-all duration-300" />
                    </Link>
                </motion.section>

            </div>
        </div>
    );
};

export default Details;
