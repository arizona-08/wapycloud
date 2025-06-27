import React from 'react'

function OfferIndicator() {
  return (
    <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mb-2">
      <div className="h-5">
        <span className="indicator inline-block w-5 h-5 bg-white rounded-full"></span>
        <span className="indicator inline-block w-5 h-5 bg-white rounded-full"></span>
      </div>
    </div>
  )
}

export default OfferIndicator