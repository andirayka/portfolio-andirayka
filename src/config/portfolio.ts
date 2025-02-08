import { StaticImageData } from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: StaticImageData | string;
  liveUrl?: string;
  githubUrl?: string;
}

interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

interface Skill {
  category: string;
  items: string[];
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface PortfolioConfig {
  personal: {
    name: string;
    role: string;
    bio: string;
    location: string;
    email: string;
  };
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
  socialLinks: SocialLink[];
}

export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Andi Rayka",
    role: "React & React Native Developer",
    bio: "React and React Native developer with 5+ years of experience building and launching web+mobile applications from concept to production. I leverage strong familiarity with TypeScript and Various Node modules to design, develop, and deliver user-centric mobile experiences that automate tasks and streamline user workflows.",
    location: "Indonesia",
    email: "andi.rayka@gmail.com",
  },
  skills: [
    {
      category: "Mobile Development",
      items: [
        "React Native",
        "Expo",
        "Redux",
        "TypeScript",
        "Firebase",
        "Google Maps",
        "Camera Integration",
        "Analytics Integration",
      ],
    },
    {
      category: "Web Development",
      items: [
        "React.js",
        "Next.js",
        "Tamagui",
        "TRPC",
        "RTK Query",
        "React Query",
        "Tailwind CSS",
      ],
    },
    {
      category: "Tools & Others",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "SonarQube",
        "Trello",
        "Agile/Kanban",
        "Google Analytics",
      ],
    },
  ],
  experiences: [
    {
      id: "exp1",
      role: "Sr. Frontend Developer",
      company: "ABBA Maintenance Service",
      duration: "May 2024 - Dec 2024",
      description:
        "Led a team of 3 developers in building an internal app using T4 stack for streamlined cleaner schedule management. Utilized Tamagui UI which is part of T4 stack to ensure a consistent user experience across web (Next.js) and mobile (Expo - React Native) platforms. Used TRPC to call routes from database (Hosted on AWS).",
      technologies: [
        "Next.js",
        "React Native",
        "Expo",
        "TRPC",
        "Tamagui",
        "Google Maps API",
      ],
    },
    {
      id: "exp2",
      role: "Mobile Developer",
      company: "Freelance",
      duration: "Mar 2023 - May 2024",
      description:
        "Built Ecoloop Partner, a waste management app from scratch using React Native. Developed the user interface, implemented core functionalities, integrated with backend APIs, and deployed the app to the Google Play Store. Maintained the Maideasy mobile application (50k+ downloads) used to find domestic helpers in Malaysia. Developed and Maintained the Nusapay Merchant mobile application used for money transfer by merchants in Indonesia.",
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "RESTful APIs",
        "Google Play Store",
      ],
    },
    {
      id: "exp3",
      role: "Mobile Developer",
      company: "PT Azimuth Solusi",
      duration: "Nov 2023 - Mar 2024",
      description:
        "Built a React Native application from scratch to record the progress and history of the manufacturing process. Developed features including role-based access, data caching, and form handling, and state management using Redux Toolkit. Maintained and enhanced a Production Planning application, resolving bugs and implementing new features for viewing data, modifying forms, and sending data to API.",
      technologies: [
        "React Native",
        "Redux Toolkit",
        "TypeScript",
        "RESTful APIs",
      ],
    },
    {
      id: "exp4",
      role: "Mobile Developer",
      company: "Badr Interactive",
      duration: "Aug 2022 - Dec 2022",
      description:
        "Developed features for the KJMU mobile app (Ministry of Finance) using React Native. Responsibilities included design slicing, API integration, and state management. Utilized Git branching strategies for efficient development. Created separate branches for individual features and ensured smooth merging into the main branch. Maintained code quality through collaboration and identified potential issues through SonarQube analysis.",
      technologies: ["React Native", "TypeScript", "Redux", "Git", "SonarQube"],
    },
    {
      id: "exp5",
      role: "Mobile Developer",
      company: "NeoPay",
      duration: "May 2021 - Sep 2021",
      description:
        "Led the development team for the NeoPay mobile application using React Native. A Pakistan-based application to send and manage money. Utilizing Kanban methodology in Trello to effectively manage tasks and workflows. Assigning tasks and setting deadlines for team members based on project goals and milestones. Facilitating collaboration to ensure efficient development of the application.",
      technologies: ["React Native", "TypeScript", "Redux", "Trello", "Kanban"],
    },
    {
      id: "exp6",
      role: "Mobile Developer",
      company: "KomputerKit",
      duration: "Jul 2021 - Sep 2021",
      description:
        "Led a team of two interns in the development of the LetsApp mobile application from concept to production. Gathering user requirements: Interviewed the user requesting the application to understand their needs and business capabilities. Defining project scope: Documented user conditions, requirements, and application flow through collaborative discussions. User-centered design: Created mockups and consulted with the user for iterative design and feedback.",
      technologies: ["React Native", "TypeScript", "Redux", "Figma", "Git"],
    },
    {
      id: "exp7",
      role: "Mobile Developer",
      company: "PT Integra Teknologi Solusi",
      duration: "Jul 2019 - Apr 2021",
      description:
        "Developed and launched a mail and disposition product application from scratch using React Native. Responsibilities included building the entire application from concept to production, publishing the app on the Google Play Store, and maintaining the app to ensure smooth operation and address any issues. Leveraged Google Analytics to track user behavior within the application(s). Analyzed data to identify the most visited pages and user trends, potentially informing future development decisions.",
      technologies: [
        "React Native",
        "TypeScript",
        "Redux",
        "Google Analytics",
        "Google Play Store",
      ],
    },
  ],
  projects: [
    {
      id: "ABBA Scheduling App",
      title: "ABBA Scheduling App",
      description:
        "Led the development of a cross-platform application for cleaner schedule management. Implemented location-based assignment system that reduced manual effort from 7 minutes to 20 seconds.",
      technologies: [
        "Next.js",
        "React Native",
        "Tamagui",
        "TRPC",
        "Google Maps API",
      ],
      imageUrl: "/portfolio/abba.png",
    },
    {
      id: "Nusapay",
      title: "Nusapay",
      description:
        "Developed and Maintained the Nusapay Merchant mobile application used for money transfer by merchants in Indonesia.",
      technologies: ["React Native", "Redux", "RESTful APIs"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=id.nusa.nusapay.merchant",
      imageUrl: "/portfolio/nusapay.png",
    },
    {
      id: "Maideasy",
      title: "Maideasy",
      description:
        "Maintained the Maideasy mobile application (50k+ downloads) used to find domestic helpers in Malaysia. Responsibilities included modifying features and fixing bugs.",
      technologies: ["React Native", "Redux", "RESTful APIs"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.maideasy.app",
      imageUrl: "/portfolio/maideasy.png",
    },
    {
      id: "Ecoloop Partner",
      title: "Ecoloop Partner",
      description:
        "Built a comprehensive waste management mobile application from scratch. Implemented core functionalities and successfully deployed to Google Play Store.",
      technologies: ["React Native", "TypeScript", "Redux", "RESTful APIs"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.ecoloop_rn&hl=es",
      imageUrl: "/portfolio/ecoloop.png",
    },
    {
      id: "IntegreOffice Cloud",
      title: "IntegreOffice Cloud",
      description:
        "A mailing application to send mail, disposition, and instruction within one instituion.",
      technologies: ["React Native"],
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.eofficelite_rn",
      imageUrl: "/portfolio/ioc.png",
    },
    {
      id: "Masjied.com",
      title: "Masjied.com",
      description: "A Next Js app to find nearest mosques in Southeast Asia",
      technologies: ["Next.js"],
      imageUrl: "/portfolio/masjied.png",
      liveUrl: "masjied.com",
    },
    {
      id: "Lesin Aja Mobile",
      title: "Lesin Aja Mobile",
      description:
        "A mobile app that provides a platform to connect students, parents, and soon-to-be tutors with payment history, student grades, and parent reviews. There are Admin, Student, and Tutor roles.",
      technologies: ["React Native"],
      githubUrl: "https://github.com/andirayka/lesinaja",
      liveUrl:
        "https://play.google.com/store/apps/details?id=com.lesinajamobile",
      imageUrl: "/portfolio/lesinajamobile.png",
    },
    {
      id: "Lesin Aja Web",
      title: "Lesin Aja Web",
      description:
        "The web version of Lesin Aja mobile. Having the same capabilities as the mobile version, intended for admin usage.",
      technologies: ["React JS", "Vite", "Tailwind CSS", "Firebase Database"],
      githubUrl: "https://github.com/andirayka/LesinAjaWeb",
      liveUrl: "https://fir-react-basic-crud-29560.web.app/masuk",
      imageUrl: "/portfolio/lesinajaweb.png",
    },
    {
      id: "Pasar WA",
      title: "Pasar WA",
      description:
        "A React-based website of the merchants' personal store. Customers can have a shopping list and then order the products via WhatsApp with a neatly formatted list.",
      technologies: ["React JS"],
      imageUrl: "/portfolio/pasarwa.png",
    },
    {
      id: "NodPay Mobile",
      title: "NodPay Mobile",
      description:
        "Developing the app of a Pakistan-based financial app for transferring money and financial planning.",
      technologies: ["React Native"],
      liveUrl: "https://www.nodpay.app/",
      imageUrl: "/portfolio/nodpay.png",
    },
    {
      id: "Châteaux de' Café",
      title: "Châteaux de' Café",
      description:
        "Developing a seat and food reservation app for customer, and cashier app for management.",
      technologies: ["React Native"],
      imageUrl: "/portfolio/chateaux.png",
    },
    {
      id: "KPBU Mobile",
      title: "KPBU Mobile",
      description:
        "A mobile version of the government application to submit and review reports, have discussions, and archive files.",
      technologies: ["React Native"],
      imageUrl: "/portfolio/kpbu.png",
    },
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/andirayka",
      icon: "FaLinkedin",
    },
    {
      platform: "Email",
      url: "mailto:andi.rayka@gmail.com",
      icon: "FaEnvelope",
    },
    {
      platform: "CV",
      url: "https://docs.google.com/document/d/1Ax7kl511fckpd-HKFmZGoxAjrS9SAg8m/edit",
      icon: "FaFile",
    },
  ],
};
