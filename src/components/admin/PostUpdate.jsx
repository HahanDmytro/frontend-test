import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styling/admin.css'
import '../styling/postUpdate.css'

const id = sessionStorage.getItem("id");
const PostUpdate = ({display, update, link}) => {

    useEffect(() => {
        setInputs({title: update.title, body: update.body});
        setImages(update.image);
        
    }, [update]);

    const [Inputs, setInputs] = useState({
        title:"",
        body:""
    });

    const [Images, setImages] = useState([]);

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value})
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${link}api/v2/updatePost/${update._id}`, Inputs)
                .then((response) => {
                    console.log(response.data.message, response.data.post)
                });
                display('none');
        } catch (error) {
            console.log(error);
        }
        
            
        display('none');
    }
// add images
    const [Image, setImage] = useState(null)
    const changeImage = (e) => {
        setImage(e.target.files[0]);
    }

    const formData = new FormData();
    formData.append('id', id);
    formData.append('image', Image);

    const submitImage = async (e) => {
        e.preventDefault();
        await axios.post(`${link}api/v3/addImage/${update._id}`, formData, {
            headers: {
                "Content-Type" : "multipart/form-data",
            },
        }); 
        console.log(update.image, '0');
    }

    const del = async (imageId) => {
        await axios.delete(`${link}api/v3/deleteImage/${imageId}`, {data: {"id": id, postId: update._id}})
            .then((response) => {
                console.log(response.data.message);
            });
        console.log(update.image, '1');
    }


    return (
        <>
            <h1>Update Post</h1>
            <div>
                <input 
                    className='input' 
                    onChange={change} 
                    name='title'
                    value={Inputs.title}
                />
                <textarea 
                    className='input' 
                    onChange={change} 
                    name='body'
                    value={Inputs.body}
                />
                <button className='btn-admin btn-update' onClick={submit}>update</button>
            </div>
            <div className='image-part'>
                
                <button className='btn-admin btn-update' onClick={() => {
                    display('none')
                }}>close</button>
                <div className='cont-images'>
                    { Images && Images.map((item, index) => (
                        <div className='cont-img' key={index} id={index}>
                            <div>
                                <img style={{width:50, height:100}} className='image' src={item.url} alt=''/>

                            </div>
                            <button className='btn' onClick={() => {
                                del(item._id)
                                
                            }}>delete image</button>
                        </div>
                    )) }
                </div>
                <form onSubmit={submitImage}>
                    <input
                        type='file'
                        accept='image/*'
                        onChange={changeImage}
                    />
                    <button className='btn' type='submit'>add Image</button>
                </form>

            </div>
        
        </>
    )
}

export default PostUpdate