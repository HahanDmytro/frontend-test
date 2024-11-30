import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/navbar.css'

const Navbar = () => {
  return (
    <div className='start-finish'>
        
        <div className='nav-page'>
            <h2>Hahan Dmytro project</h2>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About me</Link>
        </div>
    </div>
  )
}

export default Navbar