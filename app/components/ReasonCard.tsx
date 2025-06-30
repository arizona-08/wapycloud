import Image from 'next/image'
import React from 'react'

interface ReasonProps{
  title: string
  description: string
  number: string
  icon: string
}

function ReasonCard({title, description, number, icon}: ReasonProps ) {
  return (
    <li>
      <div className="min-w-60 max-w-72 p-4 border border-gray-300 rounded-lg">
        <div className="head flex items-center justify-between mb-3">
          <Image 
            src={icon}
            alt={icon}
            width={30}
            height={30}
          />
          <span className="text-custom-text-gray/80 font-black text-2xl">{number}</span>
        </div>

        <h4 className="font-semibold">{title}</h4>
        <p className="text-custom-text-gray">{description}</p>
      </div>
    </li>
  )
}

export default ReasonCard