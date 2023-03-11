import React from 'react'
import './Home.scss'
import { Carousel, Container} from 'react-bootstrap'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { slideImages } from '../../data/slideImages'
import { testimonials , longTalks } from '../../data/testimonial'
import Logo from '../../assets/logo/logo.png'
import { NavLink , Link} from 'react-router-dom'
import { Icon } from '@iconify/react'
import HappyBaby  from '../../assets/Pregnancy-illustrations/happyBaby.svg'

const Home = () => {

  const func = ({isActive}) => isActive ? "nav-link active-link" : " nav-link"

  const responsive = {
    0: { 
        items: 1
    },
    600: { 
        items: 2
    },
    1024: {
        items: 3, 
        itemsFit: 'contain'
    },
    1700:{
      items:4,
      itemsFit:'contain'
    }
  };

  const items = testimonials.map((test, idx)=>(
    <div key={idx} className="carousel-block">
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
    </div>
  ))


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
          <Carousel
          >      
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
              {
                longTalks.map((talk, idx)=>(
                  <div className="block" key={idx}>
                    <div>
                      <img src={talk.supportImage} />
                    </div>
                    <div>
                      <h1>{talk.title}</h1>
                      <p>{talk.content}</p>
                    </div>
                  </div>
                ))
              }
          </section>
      </main>
      <section className="testimony">
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        mouseTracking
        items={items}
        responsive={responsive}
      />
      </section>
      <section className='newsletter'>
        <div className='heading'>
          <h3>SIGN UP FOR OUR NEWSLETTER</h3>
          <p>We're about empowering families with the latest fertility news, lets help you stay up to date</p>
        </div>
          <form>
            <div className="form-box">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" />
              </div>
              <div class="form-box">
                <label for="email">Email</label>
                <input type="email" id="email"/>
              </div>
              <div className='form-btn'>
                <button className='sign up btn'>
                  Sign Up
                </button>
              </div>
          </form>
      </section>
      <footer>
        <section className="section-one">
          <div >
            <img src={HappyBaby} className='happy-woman'/>
          </div>
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
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject"/>
              </div>
              <div className="form-box">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" ></textarea>
              </div>
              <button className="btn">
                Submit
              </button>
            </form>
          </div>    
        </section>
        <section className="section-three"> 
            <div className="socials-links">
              <Link className='text-links'>
                About Us
              </Link>
              <Link className='text-links'>
                Contact us
              </Link>
              <Link className='text-links'>
                Privacy policy
              </Link>
              <Link className='text-links'>
                Disclaimer
              </Link>
            </div>
            <div className="socials">
              <Link className='social-links'>
                <Icon icon="ic:outline-whatsapp" width={24} height={24} className="icons" />
              </Link>
              <Link className='social-links'>
                <Icon icon="mdi:instagram"  width={24} height={24} className="icons"/>
              </Link>
              <Link className='social-links'>
                <Icon icon="mdi:linkedin"  width={24} height={24} className="icons"/>
              </Link>
            </div>
            <div className="courtesy">
              &copy;2023 Trying To Concieve
            </div>
        </section>
      </footer>
    </div>
  )
}

export default Home