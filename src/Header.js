import React from 'react';
import logo from './earth.png';

function Header() {
    return(
        <div className='header-container'>
            <img src={logo} alt='earth' />
            <h2>my travel journal</h2>
        </div>
    )
}
export default Header;