import React, {useEffect, useState} from 'react'
import PostCard from './PostCard'
import { useTranslation } from "react-i18next";
import { translateText } from "../../utils/deeplTranslate"; 
import axios from 'axios'
import '../styling/home.css'


const Home = ({link}) => {
    const {i18n} = useTranslation();
    const [translatedPosts, setTranslatedPosts] = useState([]);
    const [translationsCache, setTranslationsCache] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get(`${link}api/v2/allPost`);
                const posts = response.data.posts;
                if (i18n.language !== 'en') {
                    const translatedData = await Promise.all(
                        posts.map(async (post) => {
                            const titleCacheKey = `${post.title}-${i18n.language}`;
                            const bodyCacheKey = `${post.boody}-${i18n.language}`;

                            // Cache if translation is cached
                            const translatedTitle = translationsCache[titleCacheKey] || 
                                (await translateText(post.title, i18n.language));
                            const translatedBody = translationsCache[bodyCacheKey] ||
                                (await translateText(post.body, i18n.language));

                            // Update the Cache
                            setTranslationsCache((prevCache) => ({
                                ...prevCache,
                                [titleCacheKey]: translatedTitle,
                                [bodyCacheKey]: translatedBody,
                            }));
                            return {
                                ...post,
                                title:translatedTitle,
                                body:translatedBody,
                            };
                        })
                    );
                    setTranslatedPosts(translatedData);
                } else {
                    setTranslatedPosts(posts);
                }
                
            } catch (error) {
                
            }
            

        }
        fetch();
    },[i18n.language, link]);

    return (
        <div className='home'>
            <div className='cont'>
                <h1>Home page</h1>
                
                {translatedPosts && translatedPosts.map((item, index) => (
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