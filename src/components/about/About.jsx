import React, {useEffect, useState} from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import pageInfo from './about-info/frontendInfo';
import '../styling/home.css'
import '../styling/about.css'


const About = () => {
    const [IndexInfo, setIndexInfo] = useState(0);
    
    const goRight = (e) => {
        e.preventDefault();
        if (IndexInfo >= pageInfo.length -1) {
            setIndexInfo(IndexInfo - (pageInfo.length -1));
        } else {
            setIndexInfo(IndexInfo +1);
        }
    }
    const goLeft = (e) => {
        e.preventDefault();
        if (IndexInfo <= 0) {
            setIndexInfo(IndexInfo + pageInfo.length -1);
        } else {
            setIndexInfo(IndexInfo -1);
        }
    }
    

    return (
        <div className='home'>
            <div className='cont'>
                <h1>About page</h1>
                    <div>
                        <div className='frontend-field'>
                            
                            <div>
                                <h2>My frontend skills</h2>
                                <div className='platform'> 
                                    <img className='react-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                    <img className='icon-size css-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg" />
                                    <img className='icon-size js-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />                            
                                    <img className='icon-size html-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" />

                                </div>
                            </div>
                            <button className='btn-change' onClick={goLeft}><FaChevronLeft/></button>
                            <div className='more-info'>
                                <h3>{pageInfo[IndexInfo].name}</h3>
                                <p>{pageInfo[IndexInfo].body}</p>
                            </div>
                            <button className='btn-change' onClick={goRight}><FaChevronRight/></button>
                        </div>

                        

                        <h4>My skils Backend</h4>
                        <div >
                            
                            <img className='icon-size' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                            
                            <img className='icon-size' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" />
          

                            <img className='icon-size' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                    
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About