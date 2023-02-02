import './footer.css'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Andi Rayka
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="instagram.com" target="_blank">
          <FiInstagram />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Andi Rayka. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
