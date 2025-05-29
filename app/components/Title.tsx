import React from 'react'

interface TitleProps {
  text: string
}

function Title({text}: TitleProps) {
  return (
    <h2 
      className="font-semibold text-2xl text-center inline-block relative after:content-[''] after:h-[2px] after:w-3/4 after:bg-primary after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:mt-2"
    >
      {text}
    </h2>
  )
}

export default Title