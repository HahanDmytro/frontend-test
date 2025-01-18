import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../../store';
import '../styling/navbar.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const logout = () => {
        sessionStorage.clear("id");
        dispatch(authActions.logout());
    }
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    return (
        <>
            <div className='start-finish'>
                
                <div className='nav-page'>
                    <h2>Hahan Dmytro project</h2>
                    <div>
                        <Link className='link' to='/'>Home</Link>
                    </div>
                    <div>
                        <Link className='link' to='/about'>About me</Link>
                    </div>
                    <div>
                        <Link className='link' to='/donate'>Donate me</Link>
                    </div>
                    <div>
                    { isLoggedIn && (
                        <>
                            <Link className='link' onClick={logout}>
                                Logout
                            </Link>
                            
                            <Link className='link' to='/admin'>Admin</Link>
                                
                        
                        </>
                    )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar