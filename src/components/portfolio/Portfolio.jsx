import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'

// Image resolution is 16:9
export const portfolioList = [
  {
    image: IMG1,
    title: 'IntegreOffice Cloud',
    description:
      'A mailing application to send mail, disposition, and instruction within one instituion.',
    githubLink: '',
    githubText: '',
    demoLink:
      'https://play.google.com/store/apps/details?id=com.eofficelite_rn',
    demoText: 'Play Store',
  },
  {
    image: IMG2,
    title: 'Lesin Aja Mobile',
    description:
      'A mobile app that provides a platform to connect students, parents, and soon-to-be tutors with payment history, student grades, and parent reviews. There are Admin, Student, and Tutor roles.',
    githubLink: 'https://github.com/andirayka/lesinaja',
    githubText: 'Github',
    demoLink:
      'https://play.google.com/store/apps/details?id=com.lesinajamobile',
    demoText: 'Play Store',
  },
  {
    image: IMG3,
    title: 'Lesin Aja Web',
    description:
      'The web version of Lesin Aja mobile. Having the same capabilities as the mobile version, intended for admin usage.',
    githubLink: 'https://github.com/andirayka/LesinAjaWeb',
    githubText: 'Github',
    demoLink: 'https://fir-react-basic-crud-29560.web.app/masuk',
    demoText: 'Demo',
  },
  {
    image: IMG4,
    title: 'Pasar WA',
    description:
      "A React-based website of the merchants' personal store. Customers can have a shopping list and then order the products via WhatsApp with a neatly formatted list.",
    githubLink: '',
    githubText: '',
    demoLink: '',
    demoText: '',
  },
  {
    image: IMG5,
    title: 'NodPay Mobile',
    description:
      'Developing the app of a Pakistan-based financial app for transferring money and financial planning.',
    githubLink: '',
    githubText: '',
    demoLink: '',
    demoText: '',
  },
  {
    image: IMG6,
    title: "Châteaux de' Café",
    description:
      'Developing a seat and food reservation app for customer, and cashier app for management.',
    githubLink: '',
    githubText: '',
    demoLink: '',
    demoText: '',
  },
  {
    image: IMG7,
    title: 'KPBU Mobile',
    description:
      'A mobile version of the government application to submit and review reports, have discussions, and archive files. ',
    githubLink: '',
    githubText: '',
    demoLink: '',
    demoText: '',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mye Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {portfolioList.map((item) => {
          return (
            <article key={item.title} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="portfolio_item-cta">
                {item.githubLink !== '' && (
                  <a
                    href={item.githubLink}
                    target="_blank"
                    className="btn"
                    rel="noreferrer"
                  >
                    {item.githubText}
                  </a>
                )}
                {item.demoLink !== '' && (
                  <a
                    href={item.demoLink}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    {item.demoText}
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
