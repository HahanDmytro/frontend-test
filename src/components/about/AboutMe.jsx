import React from 'react'
import '../styling/about.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next' 


const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className='me'>
        <img className='about-image' src='https://res.cloudinary.com/dbcczefz2/image/upload/v1733593615/ac0zaqvpybsqocjpe0g7.jpg'/>
        <div className='me-about'>
            <h1>{t("About")}</h1>
            <h4>{t("NameAge")}</h4>
            <p>{t("Hobby")}</p>
            <p>{t("Ilove")}</p>

        </div>
        
    </div>
  )
}

export default AboutMe