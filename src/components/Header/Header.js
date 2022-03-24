import React from 'react';
import logo from '../../images/the_meal_db_api.png'
import './Header.css'

const Header = () => {

    return (
        <div className='header-area'>
            <img src={logo} alt="" />
            <div className='nav-menu'>
                <a href="/Home">Home</a>
                <a href="/Support">Support</a>
                <a href="/review">Review</a>
            </div>
        </div>
    );
};

export default Header;