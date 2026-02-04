import { Sora, Playfair_Display } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import ScrollingBrain from "../components/ScrollingBrain";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} ${playfair.variable} font-sora relative min-h-screen overflow-y-auto`}
    >
      {/* metadata */}
      <Head>
        <title>Our | Digital Solutions</title>
        <meta
          name="description"
          content="Our is a digital agency that gives thoughts a chance at reality."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, agency, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Our" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />
      <ScrollingBrain />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
