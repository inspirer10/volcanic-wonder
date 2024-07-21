import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <footer>
            <div className='footer_bg-image' />
            <div className='footer_content-container'>
                <h3>Volcanic Wonder</h3>
                <div className='footer_content-wrapper'>
                    <p>history</p>
                    <p>about</p>
                    <p>your trip</p>
                    <p>map</p>
                    <p>contact us</p>
                    <p>faq</p>
                </div>

                <p className='footer_info'>
                    National Park Service U.S Departament of the Interior
                </p>

                <div className='icons-wrapper'>
                    <p>
                        <FaFacebook />
                    </p>
                    <p>
                        <FaInstagram />
                    </p>
                    <p>
                        <FaYoutube />
                    </p>
                    <p>
                        <FaXTwitter />
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
