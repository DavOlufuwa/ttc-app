import React, { useState } from 'react'
import { Outlet , NavLink, Link} from 'react-router-dom'
import Logo from '../../assets/logo/logo.png'
import { Icon } from '@iconify/react'

const HomeLayout = () => {
    const [menu , setMenu] = useState(false)
    const func = ({isActive}) => isActive ? "nav-link active-link" : " nav-link"

  return (
    <div>
        <header>
        <div className="logo">
          <Link to="">
            <img src={Logo} alt="" className='logo'/>
          </Link>
        </div>
        <nav className={menu ? "opened" :""}>
          <ul>
            <NavLink 
              className={func}
              onClick={()=>setMenu(!menu)}
            >
              Speak with us
            </NavLink>
            <NavLink 
              className={func}
              onClick={()=>setMenu(!menu)}
            >
              What we do
            </NavLink>
            <NavLink 
              to="blog"
              className={func}
              onClick={()=>setMenu(!menu)}
            >
              Our Blog
            </NavLink>
            <NavLink 
              className={func}
              onClick={()=>setMenu(!menu)}
              
            >
              Login
            </NavLink>
            <NavLink 
              className={func}
              onClick={()=>setMenu(!menu)}
            >
              Sign Up
            </NavLink>
          </ul>
        </nav>
        <div className='mobile'
          onClick={()=>setMenu(!menu)}
        >
          <Icon 
            icon={menu ? "ic:sharp-close" : "ic:baseline-menu"} 
            className={menu ? 'menu-btn close' :'menu-btn'}
            />
        </div>
      </header>
        <Outlet/>
    </div>
  )
}

export default HomeLayout