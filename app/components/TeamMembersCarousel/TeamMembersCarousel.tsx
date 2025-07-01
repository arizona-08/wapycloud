'use client'
import React from 'react'
import type { TeamMember } from './TeamMemberCard'
import TeamMemberCard from './TeamMemberCard';


interface TeamMembersCarouselProps {
  teamMembers: TeamMember[];
}

function TeamMembersCarousel({ teamMembers }: TeamMembersCarouselProps) {
  const [scrollIndex, setScrollIndex] = React.useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = React.useState(1);


  const scrollToIndex = (index: number) => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const itemWidth = scrollEl.firstElementChild?.clientWidth || 0;
    scrollEl.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
    setScrollIndex(index);
  };

  React.useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const onScroll = () => {
      const scrollLeft = scrollEl.scrollLeft;
      const itemWidth = scrollEl.firstElementChild?.clientWidth || 1;
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setScrollIndex(currentIndex);
    };

    const updateCardsPerView = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setCardsPerView(3);
    } else if (width >= 640) {
      setCardsPerView(2);
    } else {
      setCardsPerView(1);
    }
  };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    scrollEl.addEventListener('scroll', onScroll);
    return () => {
      scrollEl.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateCardsPerView);
    }
  }, []);

  return (
    <div className="mt-8">

      <div ref={scrollRef} className="flex items-center justify-start gap-5 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-hide lg:justify-center xl:gap-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>

      <div className="w-full flex justify-center mt-5 lg:hidden">
        <div className="indicators flex items-center gap-2">
          {Array.from({length: Math.ceil(3 / cardsPerView)}, (_, index) => (
            <button
              key={index}
              className={`indicator-item w-3 h-3 rounded-full transition-colors duration-300 ${scrollIndex === index ? 'bg-primary' : 'bg-custom-background-gray'} `}
              aria-label={`Go to member ${index + 1}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default TeamMembersCarousel