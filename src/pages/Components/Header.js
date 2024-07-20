import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';

function Header() {
    return (
        <header>
            <p className='hamburger-menu'>
                <RiMenu2Line />
            </p>
            <nav>
                <p>History</p>
                <p>About</p>
                <p className='logo'>Volcanic Wonder</p>
                <p>Your trip</p>
                <p>Map</p>
            </nav>
        </header>
    );
}

export default Header;
