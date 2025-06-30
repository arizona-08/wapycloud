import Image from 'next/image'
import React from 'react'
import Burgermenu from '../Burgermenu'

function Navbar() {
  const links = [
    { name: 'Accueil', href: '/' },
    { name: 'Realisations', href: '#realisations' },
    { name: 'Offre', href: '#offre' },
    { name: 'Équipe', href: '#equipe' },
  ]

  return (
    <header className="sticky top-0 left-0 w-full bg-white z-20">
      <nav className="px-6 py-5 flex justify-between items-center max-w-7xl mx-auto">
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

        <ul className="hidden md:flex md:justify-center md:items-center md:gap-5">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium text-custom-text-gray hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#" className="flex items-center gap-1 bg-primary text-white p-3 rounded-full">
            <Image
              src="/svgs/web.svg"
              alt="web"
              width={16}
              height={16}
            />
            <span>Je veux un site</span>
          </a>
        </div>

        <div className="md:hidden">
          <div className="menu-burger-container">
            <Burgermenu />
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Navbar