import React from 'react'

interface ProjectCardProps {
  children: React.ReactNode;
}
function ProjectCard({ children }: ProjectCardProps) {
  return (
    <li className="inline-block overflow-hidden rounded-lg max-w-xl relative">
      {children}
    </li>
  )
}

export default ProjectCard