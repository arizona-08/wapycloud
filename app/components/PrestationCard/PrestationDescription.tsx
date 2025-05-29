import React from 'react'

interface PrestationDescriptionProps {
  title: string
  description: string
}
function PrestationDescription({title, description}: PrestationDescriptionProps) {
  return (
    <div>
      <h4 className="text-lg font-semibold m-b1">{title}</h4>
      <p className="text-custom-text-gray">{description}</p>
    </div>
  )
}

export default PrestationDescription