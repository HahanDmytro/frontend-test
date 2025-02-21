import React, {useEffect , useState} from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import '../styling/about.css'

const BackendInfo = () => {
    const { t } = useTranslation();
    const pageInfo = [
        {
            name: "Node",
            body: t("Node")
        },
        {
            name: "Express",
            body: t("Express")
        },
        {
            name: "Mongoose",
            body: t("Mongoose")
        }
    ]
    const [InfoNum, setInfoNum] = useState(0);

    const goRight = (e) => {
        e.preventDefault();
        if (InfoNum >= pageInfo.length -1) {
            setInfoNum(InfoNum - (pageInfo.length -1));
        } else {
            
            setInfoNum(InfoNum +1);
        }
    }
    const goLeft = (e) => {
        e.preventDefault();
        if (InfoNum <= 0) {
            setInfoNum(InfoNum + pageInfo.length -1);
        } else {
            
            setInfoNum(InfoNum -1);
        }
    }

    useEffect(() => {
        const allElementsDis = document.querySelectorAll('.back-icon');
        allElementsDis.forEach((el) => {
            el.style.display = 'none';
        });
        const allElementsDisRain = document.querySelectorAll(`.${pageInfo[InfoNum].name}`);
        allElementsDisRain.forEach((el) => {
            el.style.display = 'block';
        });

        document.getElementById(pageInfo[InfoNum].name).style.display = 'block';

    }, [InfoNum])

    return (
        <div className='back-info'>
            <button className='btn-change' onClick={goLeft}><FaChevronLeft/></button>
            <div>
                <IoLogoNodejs id='Node' className='icon-size back-icon'/>
                <SiExpress id='Express' className='icon-size back-icon'/>
                <SiMongoose id='Mongoose' className='icon-size back-icon'/>
                <h1>{pageInfo[InfoNum].name}</h1>
                <p>{pageInfo[InfoNum].body}</p>
            </div>
            <button className='btn-change' onClick={goRight}><FaChevronRight/></button>
        </div>
    )
}

export default BackendInfo