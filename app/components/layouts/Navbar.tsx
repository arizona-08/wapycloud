import Image from 'next/image'
import React from 'react'
import Burgermenu from '../Burgermenu'

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="px-6 py-5 flex justify-between items-center">
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
          <p className="text-xl font-medium">WapyCloud</p>
        </div>

        <div>
          <div className="menu-burger-container">
            <Burgermenu />
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar