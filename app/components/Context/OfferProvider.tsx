'use client';
import React, { useContext } from 'react'
import { Offer, Offercontext } from './OfferContext';

function OfferProvider({children}: {children: React.ReactNode}) {
  const [offer, setOffer] = React.useState<Offer>("Essentiel +");

  const switchOffer = function(offerTitle: Offer) {
    setOffer(offerTitle);
  }

  return (
    <Offercontext.Provider value={{ offer, switchOffer }}>
      {children}
    </Offercontext.Provider>
  )
}

export const useOffer = () => {
  const context = useContext(Offercontext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

export default OfferProvider