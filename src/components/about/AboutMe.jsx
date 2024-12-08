import React from 'react'
import '../styling/about.css'

const AboutMe = () => {
  return (
    <div className='me'>
        <img className='about-image' src='https://res.cloudinary.com/dbcczefz2/image/upload/v1733593615/ac0zaqvpybsqocjpe0g7.jpg'/>
        <div className='me-about'>
            <h1>About me</h1>
            <h4>I'm Dmytro Hahan 23 years old</h4>
            <p>Programming is my hobby</p>
            <p>I love javascrip, nodejs, expressjs, mongodb, and react</p>
            <p>Me links</p>
            
        </div>
        
    </div>
  )
}

export default AboutMe