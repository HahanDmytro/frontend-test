import React, {useEffect} from 'react'
import '../styling/home.css'
import '../styling/about.css'


const About = () => {
    
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
                            
                            <div className='more-info'>
                                <h3>React</h3>
                                <p>I have strong React skills, including handling authentication with redux-tools, managing URL parameters using Link and useParams, and integrating third-party libraries like Prism.js for functionality enhancements. You've also worked on optimizing API calls with Axios and handling cross-origin requests in React applications.</p>
                            </div>

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