import React, {useEffect, useState} from 'react'
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import '../../styling/matrix.css';
import '../../styling/about.css';

const BackendSkills = () => {
    const [rain, setRain] = useState([]);

    useEffect(() => {
    
        const generateMatrixRain = () => {
            const rows = Math.floor(window.innerHeight / 50);
            const cols = Math.floor(window.innerWidth / 60);
            const matrix = [];
            const chars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%`;
            for (let i = 0; i < cols; i++) {
                matrix.push({
                    colum: i,
                    chars: Array(rows)
                        .fill()
                        .map(() => chars.charAt(Math.floor(Math.random() * chars.length))),
                });
            }
            setRain(matrix);
        };
        generateMatrixRain();
        window.addEventListener('resize', generateMatrixRain);

        return () => {
            window.removeEventListener('resize', generateMatrixRain);
        };
        
    }, []);

    return (
        <div className='for-backend'>
            
            <div className='matrix-container'>
                
                {rain.map((col, colIndex) => (
                    <div key={colIndex} className='matrix-column'>
                        {col.chars.map((char, rowIndex) => (
                            <div
                                key={rowIndex}
                                className='matrix-char'
                                style={{
                                    animationDelay: `${Math.random() * 1}s`
                                }}
                            > 
                                <p>{char}</p>
                                
                                <IoLogoNodejs className='back-icon Node'/>
                                <SiExpress className='back-icon Express'/>
                                <SiMongoose className='back-icon Mongoose'/>
                            </div>
                        ))}
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default BackendSkills;