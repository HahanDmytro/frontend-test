import React, {useEffect, useState} from 'react'
import PostCard from './PostCard'
import axios from 'axios'
import '../styling/home.css'


const Home = ({link}) => {
    const [Array, setArray] = useState([])

    useEffect(() => {
        const fetch = async () => {
            await axios.get(`${link}api/v2/allPost`).then((response) => {
                
                setArray(response.data.posts);
            });

        }
        fetch();
    },[Array]);

    return (
        <div className='home'>
            <div className='cont'>
                <h1>Home page</h1>
                {Array && Array.map((item, index) => (
                    <div id={index} key={index}>
                        <PostCard 
                            id={item._id}
                            index={index}
                            title={item.title}
                            body={item.body}
                            imageUrl={item.imageUrl}
                        />
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Home