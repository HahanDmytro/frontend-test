import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styling/home.css'


let adminId = sessionStorage.getItem('id');
const PostCard = ({
        id, 
        title, 
        body, 
        display, 
        delid,
        updateId,
        toBeUpdate,
        images
    }) => {
    

    const history = useLocation();
    const isAdminPath = history.pathname === '/admin'

    return (
        <div className='postCard'>
            
            <h2>{title}</h2>
            <p>{body}</p>
            <div className='image-page'>
            
                { images && images.map((item, index) => (
                <div key={index} id={index}>
                    <img className='image' src={item.url} alt='image'/>
                </div>
                ))}
                
            </div>
            {adminId ? isAdminPath && (<>
            <button className='btn-admin btn-cards' onClick={() => {
                delid(id);
            }}>
                delete
            </button>
            <button className='btn-admin btn-cards' onClick={() => {
                display('block');
                toBeUpdate(updateId)
            }}>
                update
            </button>
            </>): null}
        </div>
    )
}

export default PostCard