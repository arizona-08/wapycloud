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
    <div>TeamMemberCard</div>
  )
}

export default TeamMemberCard