import Image from 'next/image';
import React from 'react'

export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  grade: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({member}: TeamMemberCardProps) {
  return (
    <div className="shrink-0 min-w-72 max-w-80 p-7 bg-[#F4F4F4] rounded-md">
      <div className="relative w-full min-h-72 rounded-md overflow-hidden">
        <div className="absolute top-2 right-2 z-10 px-3 py-0.5 bg-[#FAEEE2] rounded-full flex items-center gap-1">
          <Image
            src="/svgs/star.svg"
            alt="star icon"
            width={11}
            height={11}
          />
          <span className="text-primary">{member.grade}</span>
        </div>

        <Image
          src={member.image}
          alt={`${member.name}'s picture`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        />

      </div>

      <div className="mt-2">
        <span className="block text-lg font-semibold leading-normal">{member.name}</span>
        <span className="block text-primary">{member.role}</span>

        <p className="mt-3 text-custom-text-gray">{member.description}</p>

      </div>
    </div>
  )
}

export default TeamMemberCard