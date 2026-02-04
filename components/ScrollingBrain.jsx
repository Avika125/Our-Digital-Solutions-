import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ScrollingBrain = () => {
    const { scrollYProgress } = useScroll();

    // Animate opacity from 0 to 0.4 as we scroll down
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.4, 0.4, 0]);

    // Subtle parallax vertical movement
    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Scale pulse effect based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);

    return (
        <motion.div
            style={{ opacity, y, scale }}
            className="fixed right-0 bottom-0 z-10 pointer-events-none mix-blend-color-dodge select-none w-[300px] xl:w-[500px]"
        >
            <Image
                src="/brain-scroll.png"
                width={500}
                height={500}
                alt="scrolling brain"
                className="w-full h-full object-contain overflow-visible"
            />
        </motion.div>
    );
};

export default ScrollingBrain;
