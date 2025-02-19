import React from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { authActions } from '../../store';
import { useTranslation } from 'react-i18next';
import '../styling/navbar.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const logout = () => {
        sessionStorage.clear("id");
        dispatch(authActions.logout());
    }
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const { t, i18n } = useTranslation();
    // function for change language 
    const handleLanguageChange = (language) => {
        i18n.changeLanguage(language);
    }
    
    return (
        <>
            <div className='start-finish'>
                
                <div className='nav-page'>
                    <h2>Hahan Dmytro {t("project")}</h2>
                    <div>
                        <Link className='link' to='/'>{t("Home")}</Link>
                    </div>
                    <div>
                        <Link className='link' to='/about'>{t("About")}</Link>
                    </div>
                    <div>
                        <Link className='link' to='/donate'>{t("Donate")}</Link>
                    </div>
                    <div>
                        <select onChange={(e) => handleLanguageChange(e.target.value)} value={i18n.language}>
                            <option value="en">EN</option>
                            <option value="nl">NL</option>
                            <option value="uk">UK</option>
                            <option value="ru">RU</option>
                            <option value="de">DE</option>
                        </select>
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