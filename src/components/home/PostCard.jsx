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
        imageUrl
    }) => {
    

    const history = useLocation();
    const isAdminPath = history.pathname === '/admin'

    return (
        <div className='postCard'>
            <img className='image-card' src={imageUrl}/>
            <h2>{title}</h2>
            <p>{body}</p>
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