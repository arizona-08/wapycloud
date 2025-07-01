import React from 'react'
import Title from '../components/Title'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'

function ContactSection() {
  return (
    <section id="contact" className="my-28">
      <div className="p-5 max-w-7xl mx-auto">
        <div className="text-center mb-18">
          <Title text="Contact"/>
          <p className="text-custom-text-gray mt-5">Besoin d’un site ? Décrivez nous votre demande en remplissant le formulaire de contat</p>
        </div>

        <div className="max-w-2xl">
          <h3 className="text-2xl font-bold mb-3">Il est temps de parler de <span className="font-secondary text-primary font-normal">votre projet.</span></h3>
          <p>
            Remplissez ce formulaire en nous indiquant le plus de détails possible sur la vision que vous avez de votre futur site web.
          </p>
        </div>

        <div className="mt-7 md:flex md:justify-center md:items-stretch">
          <ContactForm />
          <div className="hidden md:block relative flex-1 rounded-tr-lg rounded-br-lg overflow-hidden">
            <Image
              src="/pngs/contact-form-pic.jpg"
              alt="image de projet"
              width={0}
              height={0}
              sizes="100w"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
          
        
      </div>

      
      
    </section>
  )
}

export default ContactSection