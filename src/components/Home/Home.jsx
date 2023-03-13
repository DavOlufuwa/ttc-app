import React, { useState } from 'react'
import './Home.scss'
import { Carousel} from 'react-bootstrap'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { slideImages } from '../../data/slideImages'
import { testimonials , longTalks } from '../../data/testimonial'
import { Link} from 'react-router-dom'
import { Icon } from '@iconify/react'
import {motion} from 'framer-motion'
import { blogData } from '../../data/blog';


const Home = () => {
  const [menu , setMenu] = useState(false)
  const [blog , setBlog ] = useState(blogData)

  const bodyTag = document.getElementById('body')
  bodyTag.style.overflow = menu ? "hidden" : "";
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

  const transition = {type:'spring', duration : 3}

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
                    <motion.div
                      initial ={{opacity: 0, y: -100}}
                      transition = {{...transition, duration: 2}}
                      whileInView = {{opacity: 1, y: 0 }}
                    >
                      <img src={talk.supportImage} />
                    </motion.div>
                    <motion.div
                      initial ={{opacity: 0, x: 100}}
                      transition = {{...transition, duration: 1}}
                      whileInView = {{opacity: 1, x: 0 }}
                    >
                      <h1>{talk.title}</h1>
                      <p>{talk.content}</p>
                    </motion.div>
                  </div>
                ))
              }
          </section>
      </main>
      <section className="testimony">
      <div className='heading'>What our clients say about us</div>
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={500}
          animationType="fadeout"
          infinite
          mouseTracking
          items={items}
          responsive={responsive}
        />
      </section>
      <section className='blog-section'>
      <div className='heading'>Check out our blog posts</div>
          {blog.slice(0, 3).map((article)=>(
          <div 
            key={article.id} 
            className='blog-card'
          >
            <div className='blog-image'>
              <img src={article.image}/>
            </div>
            <div className='content'>
              <div className='title'>{article.title}</div>
              <div className='date'>{article.date}</div>
              <Link className='blog-link'>read post</Link>
            </div>
          </div>
        ))}
      </section>
      <section className='newsletter'>
        <div className='heading'>
          <h3>SIGN UP FOR OUR NEWSLETTER</h3>
          <p>We're about empowering families with the latest fertility news, lets help you stay up to date</p>
        </div>
          <form>      
            <div class="form-box">
              <input type="email" id="email" placeholder='Email'/>
            </div>
            <div className='form-btn'>
              <button>
                Sign Up
              </button>
            </div>
          </form>
      </section>
      <footer>
        <section className="section-one">
          <div >
            WANT TO SPEAK WITH US DIRECTLY, CONTACT US
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
              <button className='submit'>
                submit
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
                Speak with us
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