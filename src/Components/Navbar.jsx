import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/Images/KitxenLogo.png'
import SearchBar from './Search'

export const Navbar = () => {
  return (
    <nav className=' grid py-4 bg-lime-200 grid-cols-3 justify-items-center items-center'>
      <NavLink to="/"><img src={logo} alt={logo} /></NavLink>
      <div className='w-full'>
        <SearchBar />
      </div>
       
        
    </nav>
  )
}
