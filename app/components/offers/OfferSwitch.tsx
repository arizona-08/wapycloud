import React from 'react';

interface OfferSwitchProps {
  isSubscription?: boolean;
  triggerSubscribe: () => void;
  triggerUnsubscribe: () => void;
}

function OfferSwitch({
  isSubscription,
  triggerSubscribe,
  triggerUnsubscribe,
}: OfferSwitchProps) {
  return (
    <div className="relative flex items-center justify-between bg-white mt-10 rounded-full min-w-72 w-full max-w-96 p-1 shadow-md overflow-hidden">
      {/* Capsule animée */}
      <div
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-full bg-primary transition-transform duration-300 ease-in-out ${
          isSubscription ? 'translate-x-full' : 'translate-x-0'
        }`}
      />

      {/* Boutons */}
      <button
        onClick={triggerUnsubscribe}
        className={`z-10 flex-1 text-center py-2 px-3 text-sm rounded-full transition-colors duration-200 ${
          !isSubscription ? 'text-white font-medium' : 'text-gray-500 font-normal'
        }`}
      >
        Sans abonnement
      </button>
      <button
        onClick={triggerSubscribe}
        className={`z-10 flex-1 text-center py-2 px-3 text-sm rounded-full transition-colors duration-200 ${
          isSubscription ? 'text-white font-medium' : 'text-gray-500 font-normal'
        }`}
      >
        Avec abonnement
      </button>
    </div>
  );
}


export default OfferSwitch;
