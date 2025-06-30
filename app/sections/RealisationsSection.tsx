import React from 'react'
import Title from '../components/Title'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectImg from '../components/ProjectCard/ProjectImg'
import ProjectDescription from '../components/ProjectCard/ProjectDescription'

function RealisationsSection() {
  const projects = [
    {
      title: "Parc André Malraux",
      description: "Refonte d’un site informatif pour un parc urbain : navigation simplifiée, identité visuelle modernisée et meilleure accessibilité mobile.",
      projectLink: '/',
      tags: ['WordPress', 'Figma', 'JavaScript'],
      date: 'Avril 2025',
      imgsrc: '/pngs/parc_andre_malraux.png',
      gradientColors: { from: 'from-[#2A5801]', to: 'to-[#BDED62]' }
    },
    {
      title: "Babel Master",
      description: "Création d’une plateforme claire et engageante pour promouvoir des cours d’anglais au coeur de la ville de Nanterre.",
      projectLink: '/',
      tags: ['WordPress', 'Elementor', 'Figma', 'Javascript'],
      date: 'Mai 2025',
      imgsrc: '/pngs/babelmaster.png',
      gradientColors: { from: 'from-[#F73A5B]', to: 'to-[#FFCED7]' }
    },
  ]
  return (
    <section className="mt-28">
      <div className="p-5 max-w-7xl mx-auto">
        <div className="text-center mb-18">
          <Title text="Réalisations"/>
          <p className="text-custom-text-gray mt-5">Découvrez quelques exemples de réalisations déjà en ligne créer par nos soins</p>
        </div>

        <div>
          <div className="max-w-xl">
            <h3 className="text-2xl font-bold mb-3">Des projets concrets, des <span className="font-secondary text-primary font-normal">résultats visibles.</span></h3>
            <p>
              Vous pouvez retrouver ci-dessous différents sites web que nous sommes capables
              de mettre en place pour répondre à vos besoins.
            </p>
          </div>


          <ul className="flex flex-col gap-8 items-center mt-5 md:flex-row md:items-stretch">
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImg title={project.title} projectImgSrc={project.imgsrc} gradientColors={project.gradientColors}/>
                <ProjectDescription 
                  title={project.title}
                  description={project.description}
                  link={project.projectLink}
                  tags={project.tags}
                  date={project.date}
                />
              </ProjectCard>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default RealisationsSection