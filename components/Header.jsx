import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`fixed top-0 z-40 w-full items-center px-6 lg:px-16 xl:px-0 xl:h-[90px] transition-all duration-300 ${isScrolled ? "bg-primary/80 backdrop-blur-sm py-2 lg:py-0" : "bg-transparent py-4 lg:py-0"
      }`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-4 py-4 lg:py-8">
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

          {/* socials */}
          <div className="hidden lg:flex">
            <Socials />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
