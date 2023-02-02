import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const data = [
  {
    Icon: MdOutlineEmail,
    title: 'Email',
    value: 'andi.rayka@gmail.com',
    href: 'mailto:andi.rayka@gmail.com',
  },
  {
    Icon: BsWhatsapp,
    title: 'WhatsApp',
    value: '+62 899 7145 614',
    href: 'https://wa.me/628997145164',
  },
]
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          {data.map((item) => {
            return (
              <article key={item.title} className="contact_option">
                <item.Icon className="contact_option-icon" />
                <h4>{item.title}</h4>
                <h5>{item.value}</h5>
                <a href={item.href} target="_blank" rel="noreferrer">
                  Send a message
                </a>
              </article>
            )
          })}
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Fulll Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
