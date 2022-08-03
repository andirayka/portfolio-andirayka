const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://andirayka.netlify.app/',
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
    name: 'IntegraOffice Cloud',
    description:
      'A mailing application to send mail, disposition, and instruction within one instituion.',
    stack: ['TypeScript', 'React Native'],
    // sourceCode: 'https://github.com',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.eofficelite_rn',
  },
  {
    name: 'Lesin Aja Mobile',
    description:
      'A mobile app that provide platform to connect between student, parents, and soon-to-be tutor with payment history, student grades, and parents reviews. There are Admin, Student, and Tutor roles',
    stack: ['TypeScript', 'React Native', 'Tailwind CSS'],
    sourceCode: 'https://github.com/andirayka/lesinaja',
    livePreview:
      'https://play.google.com/store/apps/details?id=com.lesinajamobile',
  },
  {
    name: 'Lesin Aja Web',
    description:
      'A mobile app that provide platform to connect between student, parents, and soon-to-be tutor with payment history, student grades, and parents reviews. There are Admin, Student, and Tutor roles',
    stack: ['TypeScript', 'React', 'Tailwind CSS'],
    sourceCode: 'https://github.com/andirayka/LesinAjaWeb',
    livePreview: 'https://fir-react-basic-crud-29560.web.app/masuk',
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
  'Tailwind CSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'andi.rayka@gmail.com',
}

export { header, about, projects, skills, contact }
