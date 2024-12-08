import React, {useEffect, useState} from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import pageInfo from './about-info/frontendInfo';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";

import BackendSkills from './about-info/BackendSkills';
import BackendInfo from './BackendInfo';
import AboutMe from './AboutMe';
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

    useEffect(() => {
        const allElements = document.querySelectorAll('.icon-size');
        const allElementsDis = document.querySelectorAll('.icon-dis');

        allElements.forEach((el) => {
            el.style.filter = '';
        });
        allElementsDis.forEach((el) => {
            el.style.display = 'none';
        })

        if (document.getElementById(IndexInfo)) {
            document.getElementById(IndexInfo).style.filter = 'drop-shadow( 1px 1px 5px rgb(164, 235, 233))';
        }
        if (document.getElementById(pageInfo[IndexInfo].name)) {
            document.getElementById(pageInfo[IndexInfo].name).style.display = 'block'
        }
        
    }, [IndexInfo]);
    
    //document.getElementById([IndexInfo]).style.filter = 'drop-shadow( 1px 1px 5px rgb(164, 235, 233))';
    
    return (
        <div className='home'>
            <div className='cont'>
                    <div>
                        <AboutMe/>
                        <h2>My frontend skills</h2>
                        <div className='frontend-field'>
                            
                            <div>
                                
                                <div className='platform'> 
                                    <FaReact id={0} className='icon-size react-icon'/>
                                    <IoLogoCss3 id={1} className='icon-size css-icon'/>
                                    <IoLogoJavascript id={2} className='icon-size js-icon'/>
                                    <IoLogoHtml5 id={3} className='icon-size html-icon'/>
                                </div>
                            </div>
                            
                            <div className='more-info'>
                                <button className='btn-change' onClick={goLeft}>
                                    <FaChevronLeft/>
                                </button>
                                <div>
                                    <FaReact id='React' className='icon-size icon-dis'/>
                                    <IoLogoJavascript id='JavaScript' className='icon-size icon-dis'/>
                                    <IoLogoCss3 id='CSS' className='icon-size icon-dis'/>
                                    <IoLogoHtml5 id='HTML' className='icon-size icon-dis'/>
                                    <h3>{pageInfo[IndexInfo].name}</h3>
                                    <p>{pageInfo[IndexInfo].body}</p>
                                </div>

                                
                                <button className='btn-change' onClick={goRight}><FaChevronRight/></button>
                            </div>

                            
                        </div>

                        

                        <h2>My skils Backend</h2>
                        
                        <div className='backend-field'>
                            <BackendSkills/>
                            <BackendInfo/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default About