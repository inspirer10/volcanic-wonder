import { useRouter } from 'next/router';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { IoAirplaneSharp } from 'react-icons/io5';

function Introduction() {
    const router = useRouter();

    const navigateToMap = (link) => {
        router.push(`#${link}`);
    };

    return (
        <section className='introduction'>
            <div className='social-icons'>
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

            <video
                className='main-video'
                src={'/vid1.mp4'}
                playsinline
                autoPlay
                loop
                muted
                disablepictureinpicture
                preload
            />

            <div
                className='start-trip'
                onClick={() => navigateToMap('yourTrip')}
            >
                <IoAirplaneSharp className='plane_icon' />
                Start your trip
            </div>
            <div className='vid-description'>
                <h5 className='heading'>Volcanic Wonder</h5>
                <p className='paragraph'>national park california</p>
            </div>
        </section>
    );
}

export default Introduction;
