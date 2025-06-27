import React from 'react'
import Title from '../components/Title'
import PrestationCard from '../components/PrestationCard/PrestationCard'
import PrestationDescription from '../components/PrestationCard/PrestationDescription'
import PrestationImage from '../components/PrestationCard/PrestationImage'
import Image from 'next/image'

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
  return (
    <section className="mt-28">
      <div className="p-5">
        <section>
          <div className="text-center mb-18">
            <Title text="À propos" />
            <p className="text-custom-text-gray mt-5">Avec 12 années d'expertise au total, notre équipe est là pour vous accompagner à réaliser votre site web</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">Des compétences solides pour des sites qui <span className="font-secondary text-primary font-normal">tiennent la route.</span></h3>
            <p>
              Nous combinons design, performance et technologies modernes pour vous livrer des sites efficaces, durables et évolutifs. Notre équipe maîtrise chaque étape de la création d’un site web, du prototype à la mise en ligne.
            </p>
          </div>

          <ul className="prestation-cards flex items-start gap-8 mt-4 overflow-auto pb-4">
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
          <div>
            <h3 className="text-2xl font-bold mb-3">Pouquoi nous confier <span className="font-secondary text-primary">votre site ?</span></h3>
            <p>
              Nous ne vous vendons pas un simple site. Nous vous livrons une solution complète, pensée pour durer, évoluer et performer dès le premier jour.
            </p>
          </div>

          <ul className="tech-logo-contaiener mt-5 flex flex-wrap gap-2">
            {techLogos.map((logo, index) => (
              <li className="inline-block relative w-11" key={index}>
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
        </section>

        
      </div>
    </section>
  )
}

export default AboutUsSection