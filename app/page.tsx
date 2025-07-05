'use client';
import HeroSection from "./sections/HeroSection";
import AboutUsSection from "./sections/AboutUsSection";
import RealisationsSection from "./sections/RealisationsSection";
import OfferSection from "./sections/OfferSection";
import ContactSection from "./sections/ContactSection";
import TeamSection from "./sections/TeamSection";
import React from "react";

export default function Home() {
  const [pickedOffer, setPickedOffer] = React.useState("Essentiel");
  function handleSetOffer(offer: string){
    setPickedOffer(offer)
  }

  return (
    <div className="">
      <HeroSection />
      <AboutUsSection />
      <RealisationsSection />
      <OfferSection setOffer={handleSetOffer} />
      <TeamSection />
      <ContactSection selectedOffer={pickedOffer} />
    </div>
  );
}
