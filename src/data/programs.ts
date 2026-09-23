export const programs = [
  {
    id: 'kids',
    number: '01',
    label: 'Ages 5–11',
    title: 'Kids Karate',
    summary: 'A clear, energetic place for kids to build focus, coordination, respect, and confidence.',
    detail: 'Classes meet children at their level and give them useful structure: listen, move well, practice with a partner, and try again.',
    image: '/images/program-kids-graphic.jpg',
    alt: 'Original editorial illustration of a young karate student practicing a front stance against a geometric blue background',
    accent: 'blue'
  },
  {
    id: 'teens-adults',
    number: '02',
    label: 'Ages 12+',
    title: 'Teens & Adults',
    summary: 'Practical American-style karate for people who want a challenging, welcoming way to train.',
    detail: 'Start from the fundamentals or bring prior experience. The work scales with you, with room for conditioning, technique, sparring, and steady progress.',
    image: '/images/program-teens-adults-graphic.jpg',
    alt: 'Original editorial illustration of two karate students practicing partner work on a marked training floor',
    accent: 'red'
  },
  {
    id: 'eskrima',
    number: '03',
    label: 'Adults 16+',
    title: 'IS3 · Eskrima',
    summary: 'Filipino martial arts training built around timing, distance, coordination, and control.',
    detail: 'Eskrima is a focused practice with its own rhythm and vocabulary. Ask about the current class path if you are new to Filipino martial arts.',
    image: '/images/program-eskrima-graphic.jpg',
    alt: 'Original editorial illustration of two pairs of hands practicing with Eskrima sticks',
    accent: 'orange'
  },
  {
    id: 'sparring',
    number: '04',
    label: 'Current students',
    title: 'Sparring',
    summary: 'A focused, safety-first place for current students to develop live practice and control.',
    detail: 'Sparring is a focused part of training with specific experience, equipment, and safety expectations. Your instructor can point you to the right starting place. Weapons and mat classes remain listed with the main public schedule rather than becoming a separate program.',
    image: '/images/program-sparring-graphic.jpg',
    alt: 'Original editorial illustration of two karate students practicing controlled sparring with gloves',
    accent: 'red'
  }
] as const;
