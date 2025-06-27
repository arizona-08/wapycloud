import Image from 'next/image'
import React from 'react'
import CTA from '../components/CTA'

function HeroSection() {
  return (
    <section className="px-5 py-5">
      <div>
        <div className="relative">
          <div className="w-7/8 relative left-1/2 -translate-x-1/2">
            <h1 className="text-4xl font-bold text-center">Des sites web prêts à <span className="text-primary font-secondary font-normal">performer</span></h1>
            <p className="text-custom-text-gray text-center mt-2">une solution SaaS clé en main pour lancer votre site rapidement.</p>
          </div>
        </div>

        <div className="hero-image-container relative max-w-2xl mx-auto overflow-hidden rounded-lg mt-2">
          <Image 
            src="/pngs/hero-image.png"
            alt="Hero Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="flex items-center gap-2 justify-center mt-3.5 max-w-2xl mx-auto">
          <CTA type="link" color='primary' href='/' text="Nous contacter" className='flex-1'/>
          <CTA type="link" color='secondary' href='/' text="À propos" className='flex-1'/>
        </div>
        
        
      </div>
      
    </section>
  )
}

export default HeroSection