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

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]:value})
    }

    const submit = async () => {
        await axios.put(`http://localhost:5000/api/v2/updatePost/${update._id}`, Inputs)
            .then((response) => {
                console.log(response.data.post);
            });
        display('none');
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
            </div>
            <div>
                <button className='btn-admin btn-update' onClick={submit}>update</button>
                <button className='btn-admin btn-update' onClick={() => {
                    display('none')
                }}>close</button>
            </div>
        
        </>
    )
}

export default PostUpdate