import React from 'react'

interface PresentationCardProps {
  children?: React.ReactNode

}
function PrestationCard({ children }: PresentationCardProps) {
  return (
    <div className="bg-custom-background-gray p-7 rounded-xl min-w-72 max-w-80">
      {children}
    </div>
  )
}

export default PrestationCard