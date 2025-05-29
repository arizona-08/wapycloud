import { triggerAsyncId } from 'async_hooks';
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
      <ul className="tags-container flex items-center gap-1">
        {tags.map((tag, index) => (
          <li key={index}>
            <ProjectTag text={tag} />
          </li>
        ))}
      </ul>

      <div>
        <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
        <p className="text-custom-text-gray mb-4">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Voir le projet
        </a>
      </div>
    </div>
  )
}

export default ProjectDescription