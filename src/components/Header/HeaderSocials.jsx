import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

const data = [
  { href: 'https://www.linkedin.com/in/andirayka/', Icon: BsLinkedin },
  { href: 'https://github.com/andirayka/', Icon: FaGithub },
  { href: 'https://www.instagram.com/andirayka/', Icon: FiInstagram },
]
const HeaderSocials = () => {
  return (
    <div className="header_socials">
      {data.map((item) => {
        return (
          <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
            <item.Icon />
          </a>
        )
      })}
    </div>
  )
}

export default HeaderSocials
