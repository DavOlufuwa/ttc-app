import React from 'react'
import './Home.scss'
import { Carousel} from 'react-bootstrap'
import { slideImages } from '../../data/slideImages'
import { testimonials , longTalks } from '../../data/testimonial'
import Logo from '../../assets/logo/logo.png'
import { NavLink , Link} from 'react-router-dom'
import { Icon } from '@iconify/react'
import Mother from '../../assets/testimonialImages/footer-img.webp'

const Home = () => {

  const func = ({isActive}) => isActive ? "active-link" : null

  return (
    <div className='landing-page'>
      <header>
        <div className="logo">
          <img src={Logo} alt="" className='logo'/>
        </div>
        <nav>
          <ul>
            <NavLink 
              className={func}
            >
              Index
            </NavLink>
            <NavLink 
              className={func}
            >
              Index
            </NavLink>
            <NavLink 
              className={func}
            >
              Index
            </NavLink>
          </ul>
        </nav>
      </header>
        <section className='slide-section'>
          <Carousel>      
          {
            slideImages.map((image, idx)=>(
                <Carousel.Item key={idx} className='slide-image'>
                  <img
                    className="d-block w-100"
                    src={image.imageUrl}
                    alt={image.caption}
                  />
                  <Carousel.Caption>
                    <h3>{image.titleText}</h3>
                    <p>{image.subText}</p>
                  </Carousel.Caption>
                </Carousel.Item>
            ))
          }
          </Carousel>
        </section>
      <main>
          <section className="section-one">
            <Carousel 
              className='' 
              interval={10000} 
              fade={true}
              
              >
              {
                testimonials.map((test, idx)=>(
                  <Carousel.Item key={idx} className="carousel-block">
                    <div className="img">
                      <img src={test.imgUrl} alt="" />
                    </div>
                    <div className="content">
                      <h3>
                        {test.status}
                      </h3>
                      <p>
                        {test.testimony}
                      </p>
                    </div>
                  </Carousel.Item>
                ))
              }
            </Carousel>
          </section>
          <section className="section-two">
              {
                longTalks.map((talk, idx)=>(
                  <div className="block" key={idx}>
                    <h1>{talk.title}</h1>
                    <p>{talk.content}</p>
                  </div>
                ))
              }
          </section>
      </main>
      <footer>
        <section className="section-one">
          
        </section>
        <section className="section-two">
          <div className="enquiry">
            <form action="">
              <div className="form-box">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" />
              </div>
              <div class="form-box">
                <label for="email">Email</label>
                <input type="email" id="email"/>
              </div>
              <div className="form-box">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone"/>
              </div>
              <div className="form-box">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
              </div>
            </form>
          </div>    
          <div className="social-courtesy">
              <div className="socials">
                <Link>
                  <Icon icon="ic:outline-whatsapp" color="#fdfaf5" />
                </Link>
                <Link>
                  <Icon icon="mdi:instagram" color="#fdfaf5" />
                </Link>
                <Link>
                  <Icon icon="mdi:linkedin" color="#fdfaf5" />
                </Link>
              </div>
              <div className="courtesy"></div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Home