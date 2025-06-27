import React from 'react'

interface OfferTitleProps {
  title: string;
  plan: string;
  isSubscribing: boolean;
}

function OfferTitle({title, plan, isSubscribing }: OfferTitleProps) {
  return (
    <div className="flex items-center justify-between mb-2">
      <h4 className={`text-xl font-semibold transition-all duration-300 ${isSubscribing ? 'bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent' : ''}`}>{`${title} ${isSubscribing ? '+' : ''}`}</h4>
      <span className="inline-block bg-custom-background-beige rounded-full px-3.5 py-1">{plan}</span>
    </div>
  )
}

export default OfferTitle