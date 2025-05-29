import Image from 'next/image'
import React from 'react'

interface PrestationImageProps {
  imgSrc: string
  alt: string
}

function PrestationImage({ imgSrc, alt }: PrestationImageProps) {
  return (
    <div className="prestation-image-container relative w-full overflow-hidden rounded-lg mb-4">
      <Image 
        src={imgSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  )
}

export default PrestationImage