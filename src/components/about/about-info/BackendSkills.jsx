import React from 'react'
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";

const BackendSkills = () => {

    return (
        <div className='for-backend' id='fro-backend'>
            <SiExpress className='icon-size express-icon'/>                            
            <SiMongoose className='icon-size mongoose-icon'/>          
            <IoLogoNodejs className='icon-size nodejs-icon'/>
    
        </div>
    )
}

export default BackendSkills;