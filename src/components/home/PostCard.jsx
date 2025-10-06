import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styling/home.css'
import axios from 'axios';


let adminId = sessionStorage.getItem('id');
const PostCard = ({
        id, 
        title, 
        body, 
        display, 
        delid,
        updateId,
        toBeUpdate,
        images,
        link
    }) => {
    
// add images
    const [Image, setImage] = useState(null)
    const changeImage = (e) => {
        setImage(e.target.files[0]);
    }

    const formData = new FormData();
    formData.append('id', adminId);
    formData.append('image', Image);

    const submitImage = async (e) => {
        e.preventDefault();
    
        await axios.post(`${link}api/v3/addImage/${id}`, formData, {
            headers: {
                "Content-Type" : "multipart/form-data",
            },
        });
        setImage(null);
    }

    const del = async (imageId) => {
        await axios.delete(`${link}api/v3/deleteImage/${imageId}`, {data: {"id": adminId, postId: id}})
            .then((response) => {
                console.log(response.data.message);
            });
    }

    const history = useLocation();
    const isAdminPath = history.pathname === '/admin';
    const isHomePath = history.pathname === '/';

    

    return (
        <div className='postCard'>
            
            <h2>{title}</h2>
            <p>{body}</p>
            <div className='image-page'>

            {isHomePath && (<>
                { images && images.map((item, index) => (<>
                    <div className='cont-images'>
                        <div key={index} id={index}>
                            <img className='image' src={item.url} alt='image'/>
                        </div>
                        
                    </div>
                </>))}
            </>)}
            

                
            </div>
            {adminId ? isAdminPath && (<>
            <div className='image-page'>
                { images && images.map((item, index) => (<>
                <div className='cont-images'>
                    <div key={index} id={index}>
                        <img className='image' src={item.url} alt='image'/>
                    </div>
                    <button className='btn' onClick={() => {
                        del(item._id)
                        
                    }}>delete image</button>
                </div>
                </>))}
            </div>
            <form onSubmit={submitImage}>
                <input
                    type='file'
                    accept='image/*'
                    onChange={changeImage}
                />
                <button className='btn' type='submit'>add Image</button>
            </form>
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