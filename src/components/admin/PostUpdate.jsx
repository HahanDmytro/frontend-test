import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styling/admin.css'
import '../styling/postUpdate.css'

const PostUpdate = ({display, update}) => {

    useEffect(() => {
        setInputs({title: update.title, body: update.body});
    }, [update]);
    const [Inputs, setInputs] = useState({
        title:"",
        body:""
    });
    const [Image, setImage] = useState(null);

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value})
    }
    const changeFile = (e) => {
        setImage(e.target.files[0]);
    }
    
    const formData = new FormData();
    formData.append('title', Inputs.title);
    formData.append('body', Inputs.body);
    formData.append('image', Image);
    const submit = async (e) => {
        e.preventDefault();
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await axios.put(`http://localhost:5000/api/v2/updatePost/${update._id}`, formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data',
                },
            });
                
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
        
            
        display('none');
    }

    return (
        <>
            <h1>Update Post</h1>
            <form onSubmit={submit}>
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
                <input 
                    type="file" 
                    accept='image/*'
                    onChange={changeFile}
                />
                <button className='btn-admin btn-update' type='submit'>update</button>
            </form>
            <div>
                
                <button className='btn-admin btn-update' onClick={() => {
                    display('none')
                }}>close</button>
            </div>
        
        </>
    )
}

export default PostUpdate