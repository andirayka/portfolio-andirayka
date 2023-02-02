import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const mobileSkills = [
  { title: 'React Native', value: 'Experienced' },
  { title: 'Unit Testing', value: 'Intermediate' },
  { title: 'Typescript', value: 'Experienced' },
  { title: 'REST API', value: 'Experienced' },
  { title: 'Design Slicing', value: 'Experienced' },
  { title: 'File Management', value: 'Experienced' },
]

const webSkills = [
  { title: 'React JS', value: 'Experienced' },
  { title: 'Unit Testing', value: 'Intermediate' },
  { title: 'Typescript', value: 'Experienced' },
  { title: 'REST API', value: 'Experienced' },
  { title: 'Design Slicing', value: 'Experienced' },
  { title: 'Responsive Design', value: 'Intermediate' },
]
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_mobile">
          <h3>Mobile Development</h3>
          <div className="experience_content">
            {mobileSkills.map((item) => {
              return (
                <article key={item.title} className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">{item.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>

        <div className="experience_web">
          <h3>Frontend Web Development</h3>
          <div className="experience_content">
            {webSkills.map((item) => {
              return (
                <article key={item.title} className="experience_details">
                  <BsPatchCheckFill className="experience_details-icon" />
                  <div>
                    <h4>{item.title}</h4>
                    <small className="text-light">{item.value}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
