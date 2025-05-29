import Image from 'next/image';
import React from 'react'

type GradientColorsType = {
  from: string;
  to: string;
}
interface ProjectImgProps {
  title: string;
  projectImgSrc: string,
  gradientColors: GradientColorsType;
}

function ProjectImg({title, projectImgSrc, gradientColors }: ProjectImgProps) {
  return (
    <div className={`w-full min-h-40 px-8 pt-4 bg-linear-to-b ${gradientColors.from} ${gradientColors.to}`}>
      <div className="w-full text-center flex flex-col items-center">
        <p className="text-white font-bold mb-2">{title.toUpperCase()}</p>
        <div className="img-container relative w-full drop-shadow-custom">
          <Image 
            src={projectImgSrc}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
      
    </div>
  )
}

export default ProjectImg