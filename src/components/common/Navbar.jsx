import React, { useEffect , useState} from 'react'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { Link ,matchPath,useLocation} from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { BsCart4 } from "react-icons/bs";
import ProfileDrop from '../core/Auth/ProfileDrop'
import { categories } from '../../services/apis'
import { apiConnector } from '../../services/apiConnector'
import { RiArrowDropDownLine } from "react-icons/ri";

const subLinks = [
  {
    title: "python",
   link : "/catalog/python"
  },
   {
    title:"web dev",
    link : "/catalog/web-development"
   },
]

const Navbar = () => {

  const {totalItems} = useSelector((state)=>state.cart);
  const {user} = useSelector((state) => state.profile);
  const {token} = useSelector((state)=>state.auth);

  // const [subLinks,setSubLinks] = useState([]);


  // const fetchSublinks = async()=>{
  //   try{
  //     const result = await apiConnector("GET",categories.CATEGORIES_API);
  //     console.log("printing sublink result" , result);
  //     setSubLinks(result.data.data);
  //     } catch(error){
  //         console.log("Could not fetch the Category list");
  //     }
  // }

  // useEffect(()=>{
  //     // fetchSublinks();
  // },[]);

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
            <ul className='flex gap-x-6 text-richblack-25 items-center'>
                {
                  NavbarLinks.map((element,index)=>{
                   return <li key={index}>
                          {
                            element.title === "Catalog" ? (
                                <div className='flex items-center relative group'>
                                  <p>{element.title }</p>
                                  <RiArrowDropDownLine size={20} />
                                  <div className='invisible absolute left-[50%] top-[50%]
                                  translate-x-[-50%] translate-y-[25%] flex flex-col rounded-md 
                                  bg-richblack-5 p-4 lg:w-[300px] text-richblack-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100'>

                                    <div className='absolute left-[49%] top-0 translate-x-[80%]
                                    translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'></div>
                                    {
                                      subLinks.length ? (
                                        subLinks.map((subLink,index)=>(
                                          <Link to={subLink.link} key={index}>
                                              <p>
                                                {subLink.title}
                                              </p>
                                          </Link>
                                        ))
                                      ) : (<div></div>)
                                    }
                                  </div>
                                </div>
                            ) : (
                              <Link to={element?.path}>
                                  <p className={`${matchRoute(element?.path) ? "text-yellow-25" : "text-richblack-25" } self-baseline`}>
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
                {
                  user && user.accountType !== "Instructor" && (
                    <Link to="/dashboard/cart" className='relative'>
                      <BsCart4 />
                      {
                        totalItems>0 && (
                          <span>
                            {totalItems}
                          </span>
                        )
                      }
                    </Link>
                  )
                }
                {
                  token === null  && (
                    <Link to="/login">
                      <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100 rounded-md' >
                        Log in
                      </button>
                    </Link>
                  )
                }
                {
                  token === null  && (
                    <Link to="/signup">
                      <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[3px] text-richblack-100 rounded-md'  >
                        Sign Up
                      </button>
                    </Link>
                  )
                }
                {
                  token !== null && <ProfileDrop/>
                }
          </div>

      </div>
    </div>
  )
}

export default Navbar