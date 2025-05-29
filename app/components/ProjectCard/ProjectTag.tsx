import React from 'react'

interface ProjectTagProps {
  text: string;
}

function ProjectTag({text}: ProjectTagProps) {
  return (
    <span className="inline-block bg-custom-background-beige rounded-full p-1">
      {text}
    </span>
  )
}

export default ProjectTag