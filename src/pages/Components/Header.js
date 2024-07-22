import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();

    const navigateToMap = (link) => {
        router.push(`#${link}`);
    };

    return (
        <header>
            <p className='hamburger-menu'>
                <RiMenu2Line />
            </p>
            <nav>
                <p onClick={() => navigateToMap('views')}>Views</p>
                <p onClick={() => navigateToMap('yourTrip')}>Your trip</p>
                <p className='logo'>Volcanic Wonder</p>
                <p onClick={() => navigateToMap('experience')}>Experience</p>
                <p onClick={() => navigateToMap('map')}>Map</p>
            </nav>
        </header>
    );
}

export default Header;
