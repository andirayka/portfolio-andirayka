import './header.css'
import CTA from './CTA'
import ME from '../../assets/me-about.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I&apos;m</h5>
        <h1>Andi Rayka</h1>
        <h5 className="text-light">React Native Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
