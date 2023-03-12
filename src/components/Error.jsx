import React from 'react'
import ErrorImage from '../assets/Pregnancy-illustrations/404.svg'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='error-container'>
        <div>Sorry there was an error locating that page br click <Link to="/">here</Link> to go back home</div>
        <img src={ErrorImage} />
    </div>
  )
}

export default Error