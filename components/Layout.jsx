import { Sora, Luckiest_Guy, Permanent_Marker, Grand_Hotel } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import ScrollingBrain from "../components/ScrollingBrain";

// setup fonts
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const luckiest = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-luckiest",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
});

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-grand-hotel",
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} ${luckiest.variable} ${marker.variable} ${grandHotel.variable} font-sora relative min-h-screen overflow-y-auto`}
    >
      {/* metadata */}
      <Head>
        <title>Nerdx | Digital Solutions</title>
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
