import React from 'react'
import Title from '../components/Title'
import TeamMembersCarousel from '../components/TeamMembersCarousel/TeamMembersCarousel'

function TeamSection() {
  const teamMembers = [
    {
      name: 'Tristan Habert',
      role: 'Ingénieur Cloud',
      image: '/pngs/Tristan.jpg',
      description: "Tristan se passionne pour l’architecture réseau, les système complexe et le cloud.",
      grade: 'BAC+4'
    },
    {
      name: 'Titouan François',
      role: 'UI / UX Designer',
      image: '/pngs/Titouan.jpg',
      description: "Titouan s’intéresse de près au design web et au nouvelle tendance quotidienne.",
      grade: 'BAC+4'
    },
    {
      name: 'Marc Assi',
      role: 'Développeur full-stack',
      image: '/pngs/Marc.jpg',
      description: "Marc est passionné par le développement web, que ce soit le front ou le back.",
      grade: 'BAC+4'
    },
  ]
  return (
    <section className="mt-28">
      <div className="p-5 max-w-7xl mx-auto">
        <div className="text-center mb-18">
          <Title text="Équipe" />
          <p className="text-custom-text-gray mt-5">Nous sommes 3 étudiants passionnés de design, développement web et réseau</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-3">Trois profil, une même passion<span className="font-secondary text-primary font-normal"> du web.</span></h3>
          <p>
            Design, développement, accompagnement : chacun apporte son expertise pour faire de votre projet un vrai site qui fonctionne.
          </p>
        </div>

        <TeamMembersCarousel teamMembers={teamMembers} />

      </div>
    </section>
  )
}

export default TeamSection