import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/me-about.jpg'
import { portfolioList } from '../portfolio/Portfolio'

const data = [
  {
    Icon: FaAward,
    title: 'Experience',
    value: '3+ Years Working',
  },
  {
    Icon: FiUsers,
    title: 'Clients',
    value: '6+ Clients',
  },
  {
    Icon: VscFolderLibrary,
    title: 'Projects',
    value: `${portfolioList.length} Completed`,
  },
]
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            {data.map((item) => {
              return (
                <article key={item.title} className="about_card">
                  <FaAward className="about_icon" />
                  <h5>{item.title}</h5>
                  <small>{item.value}</small>
                </article>
              )
            })}
          </div>

          <p>
            I am a React Native and React Js developer with 3+ years of
            experience. I&apos;m used to working with Backend Developers and
            UI/UX designers in building online mobile apps from scratch until
            production and maintenance. I&apos;m familiar with RESTFUL API,
            state management, Github, Gitlab, also slicing design from Figma and
            Zeplin.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
