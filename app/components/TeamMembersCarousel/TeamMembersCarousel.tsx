import React from 'react'
import type { TeamMember } from './TeamMemberCard'
import TeamMemberCard from './TeamMemberCard';


interface TeamMembersCarouselProps {
  teamMembers: TeamMember[];
}

function TeamMembersCarousel({ teamMembers }: TeamMembersCarouselProps) {
  return (
    <div>
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  )
}

export default TeamMembersCarousel