import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".page");

    const handleScroll = () => {
      const scrollTop = scrollContainer ? scrollContainer.scrollTop : window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuLinks = [
    { name: "Who we are", path: "/#who-we-are" },
    { name: "How we work", path: "/#how-we-work" },
    { name: "What we do", path: "/#what-we-do" },
    { name: "Stuff that worked", path: "/#stuff-that-worked" },
    { name: "Let's talk", path: "/#let-s-talk" }
  ];

  return (
    <header className={`fixed top-0 z-40 w-full items-center px-6 lg:px-16 xl:px-0 xl:h-[90px] transition-all duration-300 ${isScrolled ? "bg-primary/80 backdrop-blur-sm py-2 lg:py-0" : "bg-transparent py-4 lg:py-0"
      }`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 lg:py-8">
          {/* logo */}
          <Link href="/">
            <div className="relative group cursor-pointer">
              {/* Pulse effect */}
              <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>

              <div className="transition-all duration-500 group-hover:scale-105 relative z-10 w-[120px] h-[36px] lg:w-[160px] lg:h-[48px]">
                <Image
                  src="/nerdx (3).png"
                  alt="Our Digital Solutions Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Nav Toggle */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white text-3xl lg:text-4xl hover:text-accent transition-all duration-300"
          >
            <HiBars3 />
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden"
          >
            {/* background elements */}

            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white text-4xl hover:text-accent transition-all duration-300 z-50"
            >
              <HiXMark />
            </button>

            <nav className="flex flex-col items-center gap-y-10 z-10">
              {menuLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(241, 48, 36)" }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white text-4xl md:text-6xl font-grandHotel hover:text-accent transition-all duration-300 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
