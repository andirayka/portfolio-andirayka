import CV from '../../assets/CV - Andi Rayka.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a className="btn" href={CV} download>
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let&apos;s Talk
      </a>
    </div>
  )
}

export default CTA
