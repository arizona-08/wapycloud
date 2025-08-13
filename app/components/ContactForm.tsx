'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import axios from 'axios';
import { useOffer } from './Context/OfferProvider';
import { Offer } from './Context/OfferContext';

interface ContactFormCredentials{
  firstname: string;
  lastname: string;
  email: string;
  plan: string | Offer;
  message: string;
}

function ContactForm() {
  const {offer, switchOffer} = useOffer();
  const [credentials, setCredentials] = React.useState<ContactFormCredentials>({
    firstname: '',
    lastname: '',
    email: '',
    plan: offer,
    message: ''
  });

  const plans = [
    "Template",
    "Essentiel",
    "Pro",
    "Template +",
    "Essentiel +",
    "Pro +",
  ]

  useEffect(() => {
    setCredentials((prev) => ({ ...prev, plan: offer }));
  }, [offer]);


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Form submitted with:', credentials);
    const response = await axios.post('/api/send-email', credentials);
    if(response.status === 200){
      console.log(response.data);
    }
  }


  return (
    <form method="post" className="md:bg-white md:p-5 flex-2 md:rounded-lg" onSubmit={handleSubmit}>
      <div className="space-y-3">
        {/* Top form */}
        <div className="space-y-3 md:flex md:space-x-5">
          <div className="flex flex-col gap-1 md:flex-1">
            <label htmlFor="firstname">Votre prénom</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="w-full p-2 border border-[#DFDFDF] bg-custom-background-gray placeholder:text-custom-text-gray rounded-md outline-none"
              placeholder="Prénom"
              value={credentials.firstname}
              onChange={(e) => setCredentials({ ...credentials, firstname: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-1 md:flex-1">
            <label htmlFor="lastname">Votre nom</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="w-full p-2 border border-[#DFDFDF] bg-custom-background-gray placeholder:text-custom-text-gray rounded-md outline-none"
              placeholder="Nom"
              value={credentials.lastname}
              onChange={(e) => setCredentials({ ...credentials, lastname: e.target.value })}
              required
            />
          </div>
        </div>
        
        {/* Middle form */}
        <div className="space-y-3 md:flex md:space-x-5">
          <div className="flex flex-col gap-1 md:flex-1">
            <label htmlFor="email">Votre email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full p-2 border border-[#DFDFDF] bg-custom-background-gray placeholder:text-custom-text-gray rounded-md outline-none"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col gap-1 md:flex-1">
            <label htmlFor="plan_select">Votre plan</label>
            <select
              name="plan_select"
              id="plan_select"
              className="w-full p-2 border border-[#DFDFDF] bg-custom-background-gray placeholder:text-custom-text-gray rounded-md outline-none"
              value={credentials.plan}
              onChange={(e) => {
                const value = e.target.value as Offer;
                setCredentials({ ...credentials, plan: value });
                switchOffer(value); // 🔥 mise à jour du contexte aussi
              }}
              required
            >
              {plans.map((plan, index) => !plan.startsWith('Template') && (
               
                <option key={index} value={plan}>
                  {plan}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* textarea */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Détail de votre demande</label>
          <textarea
            name="message"
            id="message"
            className="border border-[#DFDFDF] w-full min-h-40 p-2 bg-custom-background-gray placeholder:text-custom-text-gray rounded-md outline-none"
            placeholder="Message..."
            value={credentials.message}
            onChange={(e) => setCredentials({ ...credentials, message: e.target.value })}
            required
          ></textarea>
        </div>
      </div>

      <button className="bg-primary rounded-md text-center text-white py-1.5 text-sm w-full mt-5 flex items-center justify-center gap-2">
        Envoyer
        <span className="inline-block w-3 h-3">
          <Image
            src="/svgs/diag_arrow.svg"
            alt="arrow icon"
            width={16}
            height={16}
          />
        </span>
      </button>

      
    </form>
  )
}

export default ContactForm