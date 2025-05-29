import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import RealisationsSection from "./sections/RealisationsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUsSection />
      <RealisationsSection />
    </div>
  );
}
