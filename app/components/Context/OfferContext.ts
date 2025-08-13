import React, { createContext } from "react";

export type Offer = "Template" | "Essentiel" | "Pro" | "Template +" | "Essentiel +" | "Pro +";

interface OfferContextType {
  offer: Offer;
  switchOffer: (offerTitle: Offer) => void;
}

export const Offercontext = createContext<OfferContextType | undefined>(undefined);