import { off } from 'process';
import React from 'react'

interface OfferIndicatorProps{
  offerTitle: string
}

function OfferIndicator({offerTitle}: OfferIndicatorProps) {
  return (
    <div className="w-14 h-14 bg-primary rounded-md flex items-center justify-center mb-2">
      <div className="relative w-10 h-5 flex items-center justify-center">
        {offerTitle === 'Template' && (
          <span className="w-6 h-6 bg-white rounded-full z-30 border-2 border-white absolute left-2" />
        )}

        {offerTitle === 'Essentiel' && (
          <>
            <span className="w-6 h-6 bg-white rounded-full z-30 border-2 border-white absolute left-1" />
            <span className="w-6 h-6 bg-orange-200 rounded-full z-20 border-2 border-white absolute left-3" />
          </>
        )}

        {offerTitle === 'Pro' && (
          <>
            <span className="w-6 h-6 bg-white rounded-full z-30 border-2 border-white absolute left-0" />
            <span className="w-6 h-6 bg-orange-200 rounded-full z-20 border-2 border-white absolute left-2" />
            <span className="w-6 h-6 bg-primary rounded-full z-10 border-2 border-white absolute left-4" />
          </>
        )}
      </div>
    </div>
  );
}


export default OfferIndicator