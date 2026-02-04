import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="fixed z-40 w-full items-center px-16 xl:px-0 xl:h-[90px] bg-primary/10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4 lg:py-8">
          {/* logo */}
          <Link href="/">
            <div className="relative group cursor-pointer">
              {/* Pulse effect */}
              <div className="absolute -inset-2 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>

              <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:scale-105 border border-white/20 relative z-10">
                <span className="font-playfair text-accent text-2xl font-bold italic tracking-[-0.05em]">
                  our
                </span>
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
