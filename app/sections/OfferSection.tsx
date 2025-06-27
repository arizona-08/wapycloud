'use client'
import React from 'react'
import Title from '../components/Title'
import OfferCard from '../components/offers/OfferCard'
import OfferSwitch from '../components/offers/OfferSwitch'

function OfferSection() {
  const offers = [
    {
      title: "Template",
      plan: "Plan de départ",
      description: "Pour les clients autonomes qui veulent un site one-page simple et livré clé en main.",
      price: 200.00,
      price_per_month: 20.00,
      price_per_month_after_one_year: 15.00,
      features: [
        "Design à partir de nos templates",
        "Site responsive (desktop / mobile)",
        "1 retouche incluse"
      ],
      features_pro: [
        "Plan Template",
        "Hébergement",
        "Nom de domaine",
        "Sécurité de base",
        "1 modification mensuelle"
      ]
    },
    {
      title: "Essentiel",
      plan: "Plan populaire",
      description: "Pour ceux qui veulent un site one-page plus personnel et chaleureux.",
      price: 350.00,
      price_per_month: 35.00,
      price_per_month_after_one_year: 30.00,
      features: [
        "Design fait main (UI / UX)",
        "Site responsive (desktop / mobile)",
        "Formulaire de contact",
        "2 retouche incluses"
      ],
      features_pro: [
        "Plan Essentiel",
        "Hébergement",
        "Nom de domaine",
        "Sécurité de base",
        "SEO de base",
        "2 modifications mensuelles"
      ]
    },
    {
      title: "Pro",
      plan: "Plan entreprise",
      description: "Pour les pros exigeants ou en croissance, qui veulent un site évolutif jusqu'a 5 pages.",
      price: 600.00,
      price_per_month: 60.00,
      price_per_month_after_one_year: 55.00,
      features: [
        "Design fait main (UI / UX)",
        "Site responsive (desktop / mobile)",
        "Formulaire de contact",
        "Calendrier de réservation",
        "5 retouche incluses"
      ],
      features_pro: [
        "Plan Pro",
        "Hébergement",
        "Nom de domaine",
        "Sécurité de base",
        "SEO de base",
        "Prototypage",
        "1 modification hebdomadaire"
      ]

    },
  ]
  const [isSubscribing, setIsSuscribing] = React.useState(false);

  function handleSubscribe(){
    setIsSuscribing(true)
  }

  function handleUnsubscribe(){
    setIsSuscribing(false)
  }
  return (
    <section className="mt-28">
      <div className="p-5">
        <div className="text-center mb-18">
          <Title text="Offres"/>
          <p className="text-custom-text-gray mt-5">Nous vous proposons des offres adaptés à vos besoins et vos envies</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Une solution clé en main pour créer votre site<span className="font-secondary text-primary font-normal"> sans complications.</span></h3>
          <p>
            Que vous soyez indépendant, artisan, commerçant ou dirigeant d’entreprise, nous vous proposons une solution simple, rapide et performante pour être visible en ligne.
          </p>

          <div className="w-full flex justify-center">
            <OfferSwitch isSubscription={isSubscribing} triggerSubscribe={handleSubscribe} triggerUnsubscribe={handleUnsubscribe}/>
          </div>
          <ul className="mt-8 flex flex-col items-center gap-5 ">
            {offers.map((offer, index) => (
              <OfferCard 
                key={index}
                title={offer.title}
                plan={offer.plan}
                description={offer.description}
                price={offer.price}
                price_per_month={offer.price_per_month}
                price_per_month_after_one_year={offer.price_per_month_after_one_year}
                features={offer.features}
                features_pro={offer.features_pro}
                isSubscribing={isSubscribing}
              />
            ))}
            
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OfferSection