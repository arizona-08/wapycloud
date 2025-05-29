import React from 'react'

interface ProjectTagProps {
  text: string;
}

function ProjectTag({text}: ProjectTagProps) {
  return (
    <span className="inline-block bg-custom-background-beige rounded-full px-2 py-1">
      {text}
    </span>
  )
}

export default ProjectTag