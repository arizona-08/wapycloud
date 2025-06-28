import React from 'react'
import type { TeamMember } from './TeamMemberCard'
import TeamMemberCard from './TeamMemberCard';


interface TeamMembersCarouselProps {
  teamMembers: TeamMember[];
}

function TeamMembersCarousel({ teamMembers }: TeamMembersCarouselProps) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-5 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-hide">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-5">
        <div className="indicators flex items-center gap-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className="indicator-item w-3 h-3 bg-primary rounded-full"
              aria-label={`Go to member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TeamMembersCarousel