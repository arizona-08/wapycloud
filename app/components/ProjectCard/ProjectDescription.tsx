import React from 'react'
import ProjectTag from './ProjectTag';

interface ProjectDescriptionProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
  date: string;
}
function ProjectDescription({title, description, link, tags, date }: ProjectDescriptionProps) {
  return (
    <div className="p-4 bg-white">
      <ul className="tags-container flex items-center gap-2 flex-wrap">
        {tags.map((tag, index) => (
          <li key={index}>
            <ProjectTag text={tag} />
          </li>
        ))}
      </ul>

      <div>
        <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
        <p className="text-custom-text-gray mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            Voir le projet
          </a>
          <span className="text-custom-text-gray">{date}</span>
        </div>
        
      </div>
    </div>
  )
}

export default ProjectDescription