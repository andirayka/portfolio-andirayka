import { BiCheck } from 'react-icons/bi'
import './services.css'

const servicesList1 = [
  'Implementing design from Figma or Zeplin to the application.',
  'Using UI libraries such as React Native Paper, React Native Elements, NativeBase, etc.',
  'Implementing styling from scratch.',
  'Uploading application to Google Play Store.',
  'Implementing analytics for Google Analytics and device information.',
  'Impelementing firebase services',
]
const servicesList2 = [
  'Implementing design from Figma or Zeplin to the webiste.',
  'Using UI libraries such as Mantine, Material UI, Tailwind CSS, etc.',
  'Implementing CSS from scratch.',
  'Building a responsive website.',
  'Implementing Google Analytics perpage.',
]
const servicesList3 = [
  'Fixing bugs from existing application.',
  'Implementing feedbacks from user.',
  'Adding new features.',
  'Continuing the app development.',
  'Upgrading React Native Application.',
  'Uploading or updating the application to Google Play Store.',
]
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* List 1 */}
        <article className="service">
          <div className="service_head">
            <h3>Mobile Dev</h3>
          </div>

          <ul className="service_list">
            {servicesList1.map((service) => {
              return (
                <li key={service}>
                  <BiCheck className="service_list-icon" />
                  <p>{service}</p>
                </li>
              )
            })}
          </ul>
        </article>

        {/* List 2 */}
        <article className="service">
          <div className="service_head">
            <h3>Web Dev</h3>
          </div>

          <ul className="service_list">
            {servicesList2.map((service) => {
              return (
                <li key={service}>
                  <BiCheck className="service_list-icon" />
                  <p>{service}</p>
                </li>
              )
            })}
          </ul>
        </article>

        {/* List 3 */}
        <article className="service">
          <div className="service_head">
            <h3>Web/Mobile Maintenance</h3>
          </div>

          <ul className="service_list">
            {servicesList3.map((service) => {
              return (
                <li key={service}>
                  <BiCheck className="service_list-icon" />
                  <p>{service}</p>
                </li>
              )
            })}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
