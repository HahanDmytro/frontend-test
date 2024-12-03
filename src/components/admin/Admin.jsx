import React, { useState } from  'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from '../../store';
import axios from 'axios';
import '../styling/home.css';
import '../styling/admin.css';


const Admin = () => {
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
                history('/')
            });
    }
    
    return (
        <div className='home'>
            <div className='cont'>
            
                <h1>Admin Page</h1>
                <input 
                    className='input'
                    name='email'
                    onChange={change}
                    value={Inputs.email}
                />
                <input 
                    className='input'
                    name='password'
                    onChange={change}
                    value={Inputs.password}
                />
                <button onClick={submit}>
                    Signin as Admin
                </button>
                
            </div>
        </div>
    )
}

export default Admin