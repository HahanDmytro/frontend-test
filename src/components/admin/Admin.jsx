import React, { useState, useEffect } from  'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store';
import PostCard from '../home/PostCard'
import axios from 'axios';
import '../styling/home.css';
import '../styling/admin.css';

let id = sessionStorage.getItem('id');
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
    const [Array, setArray] = useState([]);

    const changePost = (e) => {
        const {name, value} = e.target;
        setPost({...Post, [name]: value})
    }
    const submitPost = async (e) => {
        if (id) {
            await axios.post('http://localhost:5000/api/v2/addPost', {title:Post.title, body:Post.body, id:id})
                .then((response) => {
                    console.log(response.data.post);
                })
                setArray([...Array, Post]);
                setPost({title: "", body: ""});
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
                    <button onClick={submit}>
                        Signin as Admin
                    </button>
                </>)}
                {isLoggedIn && (<>
                    <h1>Wellcome</h1>
                    <div>
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
                        <button onClick={submitPost}>Add Post</button>
                    </div>
                    <div>
                        {Array && Array.map((item, index) => (
                            <div id={index} key={index}>
                                <PostCard 
                                    id={item._id}
                                    index={index}
                                    title={item.title}
                                    body={item.body}
                                    delid={del}
                                />
                            </div>
                        ))}
                    </div>
                </>)}
            </div>
        </div>
    )
}

export default Admin