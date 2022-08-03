const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/andirayka/portfolio-andirayka',
  title: 'DEV',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Andi Rayka',
  role: 'Mobile Developer',
  description:
    "I am a React Native and React Js developer with 2+ years of experience. I used to work with Backend Developers and UI/UX designers in building online mobile apps from scratch until production and maintenance. I'm familiar with RESTFUL API, Github and Gitlab, also slicing design from Figma and Zeplin.",
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/andi-rayka-453b5118b/',
    github: 'https://github.com/andirayka',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description: '',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux/React Context',
  'Material UI',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'andi.rayka@gmail.com',
}

export { header, about, projects, skills, contact }
