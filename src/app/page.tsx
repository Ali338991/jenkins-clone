import { Button } from "@nextui-org/react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import App from "./components/Navbar";
import Cards from "./components/Card";
import Words from "./components/Brands";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <div className="max-w-[1400px] px-4 m-auto">
        <Services/>
        <Cards/>
        <Brands/>
      </div>
        <Footer/>
    </div>
  );
}
