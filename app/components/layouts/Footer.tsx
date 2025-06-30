import Image from 'next/image'
import React from 'react'

function Footer() {
  const socialLinks = [
    {
      name: 'X',
      url: 'https://www.x.com/wapycloud',
      icon: '/svgs/x.svg'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/wapycloud',
      icon: '/svgs/instagram.svg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/wapycloud',
      icon: '/svgs/linkedIn.svg'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/wapycloud',
      icon: '/svgs/tiktok.svg'
    },
  ]

  const footerLinks = [
    {
      title: 'Liens rapides',
      links : [
        {name: 'Accueil', href: '/'},
        {name: 'Expertise', href: '/'},
        {name: 'Offre', href: '/'},
        {name: 'Atout', href: '/'},
        {name: 'Équipe', href: '/'},
      ]
    },
    {
      title: 'Services',
      links : [
        {name: 'Design UI / UX', href: '/'},
        {name: 'Développement front', href: '/'},
        {name: 'Développement back', href: '/'},
        {name: 'Hébergement', href: '/'},
        {name: 'Maintenance', href: '/'},
      ]
    },
    {
      title: 'Aide & Support',
      links : [
        {name: 'Contact', href: '/'},
        {name: 'FAQ', href: '/'},
        {name: 'Mentions légales', href: '/'},
        {name: 'Politique de confidentialité', href: '/'},
        {name: 'Plan du site', href: '/'},
      ]
    },

  ]

  return (
    <footer className="p-12 bg-footer-background">
      <div className="max-w-7xl mx-auto xl:flex xl:items-start xl:justify-between">
        <div className="left">
          <div className="flex items-center gap-1">
            <div className="logo-container">
              <Image
                src="/svgs/wapycloud_logo.svg"
                alt="WapyCloud Logo"
                width={20}
                height={20}
                className="logo-image"
              />
            </div>
            <p className="text-xl font-semibold">WapyCloud</p>
          </div>
          <div className="max-w-md">
            <p className="mt-3 text-custom-text-gray">WapyCloud imagine, développe et héberge le site internet de vos rêves. </p>
            <ul className="social-links flex items-center gap-2 mt-2">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={40}
                      height={40}
                      className="logo-image"
                    />
                  </a>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-7 flex flex-col items-start gap-8 md:flex-row md:flex-wrap md:items-start xl:mt-0">
          {footerLinks.map((footerLink, index) => (
            <li key={index}>
              <span className="inline-block font-semibold mb-3">{footerLink.title}</span>

              <ul className="flex flex-col gap-2">
                {footerLink.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="text-[#696969] font-normal">
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

    </footer>
  )
}

export default Footer