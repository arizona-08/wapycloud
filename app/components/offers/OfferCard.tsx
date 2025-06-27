import React from 'react'
import OfferIndicator from './OfferIndicator'
import OfferTitle from './OfferTitle'
import Image from 'next/image';

interface OfferCardProps{
  title: string;
  plan: string;
  description: string;
  price: number;
  price_per_month: number;
  price_per_month_after_one_year: number;
  features: string[];
  features_pro: string[];
  isSubscribing: boolean;
}

function OfferCard({title, plan, description, price, price_per_month, price_per_month_after_one_year, features, features_pro, isSubscribing}: OfferCardProps) {
  return (
    <li className={`shrink-0 inline-block min-w-72 w-full max-w-96 rounded-xl border border-gray-200 p-7 transition-all duration-300 ${isSubscribing ? 'bg-gradient-to-tr from-primary/20 from-20% to-white to-50%' : 'bg-white'}`}>
      <OfferIndicator offerTitle={title}/>
      <div className="mb-5">
        <OfferTitle title={title} plan={plan} isSubscribing={isSubscribing}/>
        <p className="text-gray-600">{description}</p>
      </div>

      {isSubscribing && (
        <div className="mb-5">
          <span className="text-sm text-custom-text-gray">À partir de</span>
          <p className="text-2xl font-semibold">{price_per_month}€<span className="font-normal text-sm text-custom-text-gray">/mois</span></p>
          <p className="text-custom-text-gray text-xs flex items-center gap-1">
            <span className="inline-block ">
              <Image
                  src="/svgs/info.svg"
                  alt="Check icon"
                  width={12}
                  height={12}
                />
            </span>
            Engagement 1 an puis {price_per_month_after_one_year}€/mois</p>
        </div>
      )}

      {!isSubscribing && (
        <div className="mb-5">
          <span className="text-sm text-custom-text-gray">Prix fixe</span>
          <p className="text-2xl font-semibold">{price}€</p>
        </div>
      )}
      

      <hr className="text-zinc-800"/>

      <div className="mt-5">
        <p className="font-semibold">Le plan {title} inclus:</p>
        <ul className="">
          {(isSubscribing ? features_pro : features).map((feature, index) => (
            <li key={index} className="text-sm mt-2 flex items-center gap-2">
              <span className="inline-block">
                <Image
                  src="/svgs/check.svg"
                  alt="Check icon"
                  width={16}
                  height={16}
                />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button className="bg-primary rounded-full text-center text-white py-1.5 text-sm w-full mt-5 flex items-center justify-center gap-2">
        Je choisis ce plan
        <span className="inline-block w-3 h-3">
          <Image
            src="/svgs/diag_arrow.svg"
            alt="arrow icon"
            width={16}
            height={16}
          />
        </span>
      </button>
    </li>
  )
}

export default OfferCard