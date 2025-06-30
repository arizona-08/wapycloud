import React from 'react'
import Title from '../components/Title'
import PrestationCard from '../components/PrestationCard/PrestationCard'
import PrestationDescription from '../components/PrestationCard/PrestationDescription'
import PrestationImage from '../components/PrestationCard/PrestationImage'
import Image from 'next/image'
import ReasonCard from '../components/ReasonCard'

function AboutUsSection() {
  const prestations = [
    {
      title: "Webdesign",
      description: "Interfaces modernes, adaptatives, pensées pour l’expérience utilisateur.",
      imgSrc: "/svgs/webdesign.svg",
      alt: "Webdesign"
    },
    {
      title: "Développement web",
      description: "Intégration sur-mesure ou via CMS selon vos besoins.",
      imgSrc: "/svgs/developpement_web.svg",
      alt: "dev web"
    },
    {
      title: "Solution SaaS",
      description: "Des sites hébergés, sécurisés, accessibles partout, tout le temps.",
      imgSrc: "/svgs/solution_saas.svg",
      alt: "Solution SaaS"
    },
    {
      title: "Maintenance et évolutivité",
      description: "On ne vous laisse pas seul après la livraison.",
      imgSrc: "/svgs/maintenance_evolutivite.svg",
      alt: "Maintenance et évolutivité"
    },
  ]

  const techLogos = [
    { src: "/svgs/figma_logo.svg", alt: "Figma" },{ src: "/svgs/php_logo.svg", alt: "Php" },
    { src: "/svgs/vscode_logo.svg", alt: "Vscode" },{ src: "/svgs/laravel_logo.svg", alt: "Laravel" },
    { src: "/svgs/react_logo.svg", alt: "React.js" },{ src: "/svgs/tailwind_logo.svg", alt: "Tailwind.js" },
    { src: "/svgs/js_logo.svg", alt: "Js" },{ src: "/svgs/chatgpt_logo.svg", alt: "ChatGPT" },
    { src: "/svgs/cloud_logo.svg", alt: "Cloud" },{ src: "/svgs/nextjs_logo.svg", alt: "Next.js" },
    { src: "/svgs/nuxtjs_logo.svg", alt: "Nuxt.js" }
  ]

  const reasons = [
    {
      title: "Simplicité",
      description: "On s’occupe de tout, du design à la mise en ligne.",
      number: "01",
      icon: "/svgs/simplicity.svg"
    },
    {
      title: "Rapidité",
      description: "Votre site est prêt en quelques jours, sans compromis sur la qualité.",
      number: "02",
      icon: "/svgs/speed.svg"
    },
    {
      title: "Flexibilité",
      description: "Nos offres s’adaptent à vos besoins, avec la possibilité d’évoluer.",
      number: "03",
      icon: "/svgs/flexibility.svg"
    },
    {
      title: "Fiabilité",
      description: "Votre site est sécurisé, stable, et toujours disponible.",
      number: "04",
      icon: "/svgs/reliability.svg"
    },
  ]

  return (
    <section className="mt-28">
      <div className="p-5 max-w-7xl mx-auto">
        <section>
          <div className="text-center mb-18">
            <Title text="À propos" />
            <p className="text-custom-text-gray mt-5">Avec 12 années d'expertise au total, notre équipe est là pour vous accompagner à réaliser votre site web</p>
          </div>

          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-3">Des compétences solides pour des sites qui <span className="font-secondary text-primary font-normal">tiennent la route.</span></h3>
            <p>
              Nous combinons design, performance et technologies modernes pour vous livrer des sites efficaces, durables et évolutifs. Notre équipe maîtrise chaque étape de la création d’un site web, du prototype à la mise en ligne.
            </p>
          </div>

          <ul className="prestation-cards flex items-start gap-8 mt-4 overflow-auto pb-4 md:gap-8">
            { prestations.map((prestation, index) => (
              <li className="inline-block" key={index}>
                <PrestationCard>
                  <PrestationImage imgSrc={prestation.imgSrc} alt={prestation.alt}/>
                  <PrestationDescription 
                    title={prestation.title}
                    description={prestation.description}
                  />
                </PrestationCard>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-18">
          <div className="xl:flex xl:items-start xl:gap-4">
            <div className="left hidden xl:block flex-1">
              <ul className="flex flex-wrap items-start gap-3">
                {reasons.map((reason, index) => (
                  <ReasonCard 
                    key={index}
                    title={reason.title}
                    description={reason.description}
                    number={reason.number}
                    icon={reason.icon}
                  />
                ))}
              </ul>
            </div>

            <div className="max-w-xl right flex-1">
              <div>
                <h3 className="text-2xl font-bold mb-3">Pouquoi nous confier <span className="font-secondary text-primary">votre site ?</span></h3>
                <p>
                  Nous ne vous vendons pas un simple site. Nous vous livrons une solution complète, pensée pour durer, évoluer et performer dès le premier jour.
                </p>
              </div>

              <ul className="tech-logo-contaiener mt-5 flex flex-wrap gap-2">
                {techLogos.map((logo, index) => (
                  <li className="inline-block relative w-11" key={index} title={logo.alt}>
                    <Image 
                      src={logo.src}
                      alt={logo.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </li>
                ))}
                
              </ul>
            </div>
          </div>

        </section>

        
      </div>
    </section>
  )
}

export default AboutUsSection