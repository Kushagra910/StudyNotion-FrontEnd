import React from 'react'
import * as Icons from "react-icons/vsc"
import { matchPath, useLocation,NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const SidebarLink = ({link,iconName}) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const Icon = Icons[iconName];
  if (!Icon) {
    console.error(`Icon not found for iconName: ${iconName}`);
    return null; // or handle the missing icon case
  }

  const matchRoute = (route)=>{
    return matchPath({path:route},location.pathname);
  }
  return (
    <NavLink to={link.path} className={`${matchRoute(link.path) ? "bg-yellow-800" : "bg-opacity-0"} relative px-8 py-2 text-sm font-medium  transition-all duration-200`}>
        <span className={`absolute left-0 top-0 h-full w-[0.2rem] bg-yellow-50 
        ${matchRoute(link.path) ? "opacity-100" : "opacity-0"}`}></span>
        <div className='flex items-center gap-x-2'>
            <Icon className="text-lg"/>
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
}

export default SidebarLink