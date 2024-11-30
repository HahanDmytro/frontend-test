import React from 'react'
import '../styling/home.css'

const PostCard = ({title, body}) => {
    return (
        <div className='postCard'>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default PostCard