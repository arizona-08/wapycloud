import Link from 'next/link'
import React from 'react'

interface LinkCTAProps {
  type: 'link'
  color: 'primary' | 'secondary'
  text: string
  href: string // requis si type = 'link'
  onClick?: () => void
  className?: string
}

interface ButtonCTAProps {
  type: 'button'
  color: 'primary' | 'secondary'
  text: string
  onClick?: () => void
  className?: string
  href?: never // interdit si type = 'button'
}

type CTAProps = LinkCTAProps | ButtonCTAProps

function CTA({ type, color, text, onClick, href, className }: CTAProps) {
  const classes = {
    primary: "bg-primary border border-primary text-white text-center rounded-full p-2.5",
    secondary: "bg-white border border-primary text-primary text-center rounded-full p-2.5"
  }
  return (
    <>
      {type == 'link' ? 
      (
        <Link href={href} className={`${classes[color]} ${className}`} onClick={onClick}>{text}</Link>
      ) 
      :
      (
        <button className={`${classes[color]} ${className}`} onClick={onClick}>{text}</button>
      )
    }
    </>
  )
}

export default CTA