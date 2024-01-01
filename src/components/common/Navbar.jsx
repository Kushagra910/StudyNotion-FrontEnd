import React from 'react'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { Link ,matchPath,useLocation} from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'

const Navbar = () => {

  const location = useLocation();
  const matchRoute = (route) =>{
    return matchPath({path:route},location.pathname);
  } 
  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
      <div className='w-11/12 flex max-w-maxContent justify-between'>
        {/* Image added */}
          <Link to="/">
              <img src={logo}  width={160} height={32} loading='lazy' />
          </Link>

          {/* Nav links */}
          <nav>
            <ul className='flex gap-x-6 text-richblack-25'>
                {
                  NavbarLinks.map((element,index)=>{
                   return <li key={index}>
                          {
                            element.title === "Catalog" ? (<div></div>) : (
                              <Link to={element?.path}>
                                  <p className={`${matchRoute(element?.path) ? "text-yellow-25" : "text-richblack-700" }`}>
                                    {element?.title}
                                  </p>
                              </Link>
                            )
                          }
                    </li>
                  })
                }
            </ul>
          </nav>
          
          {/* Login,signup,dashboard buttons*/}
          <div className='flex gap-x-4 items-center'>

          </div>

      </div>
    </div>
  )
}

export default Navbar