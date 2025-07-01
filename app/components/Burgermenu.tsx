import React from 'react'

interface BurgerMenuProps{
  isActive: boolean
  handleClick: () => void
}

function Burgermenu({isActive, handleClick}: BurgerMenuProps) {
  return (
    <div onClick={handleClick} className={`burger-menu relative w-5 h-3.5 cursor-pointer ${isActive ? 'active' : ''}`}>
      <span className="w-full h-[3px] absolute top-0 rounded bg-zinc-800 transition-all duration-150"></span>
      <span className="w-full h-[3px] absolute top-1/2 rounded bg-zinc-800 transition-all duration-150"></span>
      <span className="w-full h-[3px] absolute top-full rounded bg-zinc-800 transition-all duration-150"></span>
    </div>
  )
}

export default Burgermenu