import React, { useState, useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store';
import PostCard from '../home/PostCard';
import PostUpdate from './PostUpdate';
import axios from 'axios';
import '../styling/home.css';
import '../styling/admin.css';

let id = sessionStorage.getItem('id');
let toBeUpdate = [];
const Admin = () => {
    // Here LigIn page//
    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const change = (e) =>{
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    }

    const submit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/v1/signin', Inputs)
            .then((response) => {
                sessionStorage.setItem("id", response.data.others._id);
                dispatch(authActions.login());
                history('/admin')
            });
    }
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    //Here For Post//
    const [Post,  setPost] = useState({title:"", body:""});
    const [Image, setImage] = useState(null);
    const [Array, setArray] = useState([]);

    const changePost = (e) => {
        const {name, value} = e.target;
        setPost({...Post, [name]: value})
    }

    const changeFilePost = (e) => {
        setImage(e.target.files[0]);
    }

    const adminId = id;

    const formData = new FormData();
    formData.append('id', adminId);
    formData.append('title', Post.title);
    formData.append('body', Post.body);
    formData.append('image', Image);
    
    
    // Debug: Log FormData entries
    //for (let [key, value] of formData.entries()) {
    //    console.log(key, value);
    //}

    const submitPost = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                const response = await axios.post('http://localhost:5000/api/v2/addPost', formData, {
                    httpAgent: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                console.log(response.data);
                setArray([...Array, Post]);
                setPost({title: "", body: ""});
                setImage(null);
            }
        } catch (error) {
            console.log(error);
        }
        
    }
    const del = async (CartId) => {
        if (id) {
            await axios.delete(`http://localhost:5000/api/v2/deletePost/${CartId}`, {data: {id:id}})
                .then(() => {
                    console.log('Post is deleted');
                })
        } else {
            console.log("You must registred now")
        }

    }
    const dis = (value) => {
        document.getElementById('update-post').style.display = value
    }
    const update = (value) => {
        toBeUpdate = Array[value];
    }

    useEffect(() => {
        const fetch = async () => {
            await axios.get('http://localhost:5000/api/v2/allPost').then((response) => {
                
                setArray(response.data.posts);
            });

        }
        fetch();
    },[Array]);

    return (
        <div className='home'>
            <div className='cont'>
                {!isLoggedIn && (<>
                    <h1>Log in</h1>
                    <input 
                        className='input'
                        type='text'
                        name='email'
                        onChange={change}
                        value={Inputs.email}
                    />
                    <input 
                        className='input'
                        type='password'
                        name='password'
                        onChange={change}
                        value={Inputs.password}
                    />
                    <button className='btn-admin btn-cards' onClick={submit}>
                        Signin as Admin
                    </button>
                </>)}
                {isLoggedIn && (<>
                    <h1>Wellcome</h1>
                    <form onSubmit={submitPost}>
                        <input className='input'
                            onChange={changePost}
                            name='title'
                            value={Post.title}
                        />
                        <textarea className='input'
                            onChange={changePost}
                            name='body'
                            value={Post.body}
                        />
                        <input
                            type='file'
                            accept='image/*'
                            onChange={changeFilePost}
                        />
                        <button className='btn-admin btn-cards' type='submit'>Add Post</button>
                    </form>
                    <div>
                        {Array && Array.map((item, index) => (
                            <div id={index} key={index}>
                                <PostCard 
                                    id={item._id}
                                    
                                    title={item.title}
                                    body={item.body}
                                    delid={del}
                                    display={dis}
                                    updateId={index}
                                    toBeUpdate={update}
                                />
                            </div>
                            
                        ))}
                    </div>
                    <div className='update-post' id='update-post'>
                        <PostUpdate display={dis} update={toBeUpdate}/>
                    </div>
                    
                </>)}
            </div>
        </div>
    )
}

export default Admin