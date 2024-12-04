import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styling/home.css'


let adminId = sessionStorage.getItem('id');
const PostCard = ({id, title, body, delid}) => {

    const history = useLocation();
    const isAdminPath = history.pathname === '/admin'

    return (
        <div className='postCard'>
            <h2>{title}</h2>
            <p>{body}</p>
            {adminId ? isAdminPath && (<>
            <button onClick={() => {
                delid(id);
            }}>
                delete
            </button>
            <button>
                update
            </button>
            </>): null}
        </div>
    )
}

export default PostCard