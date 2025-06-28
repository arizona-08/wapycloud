import Image from "next/image";
import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import RealisationsSection from "./sections/RealisationsSection";
import OfferSection from "./sections/OfferSection";
import ContactSection from "./sections/ContactSection";
import TeamSection from "./sections/TeamSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUsSection />
      <RealisationsSection />
      <OfferSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
