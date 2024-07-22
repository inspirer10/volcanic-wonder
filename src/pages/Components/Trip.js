import React, { useRef, useState } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';

import {
    MdOutlinePlayCircle as PlayIcon,
    MdOutlinePauseCircleOutline as PauseIcon,
} from 'react-icons/md';

import { IoIosPin as Pin } from 'react-icons/io';

function Trip() {
    const videoRefs = useRef([]);

    const [cardsContent, setCardsContent] = useState([
        {
            person: 'Maria Mkova',
            date: 'April 14, 2023',
            video: '/vid1.mp4',
            icon: 'play',
        },
        {
            person: 'Max Volkov',
            date: 'June 2, 2024',
            video: '/vid2.mp4',
            icon: 'play',
        },
        {
            person: 'Alex Trumb',
            date: 'April 23, 2023',
            video: '/vid3.mp4',
            icon: 'play',
        },
        {
            person: 'John Doe',
            date: 'July 19, 2023',
            video: '/vid4.mp4',
            icon: 'play',
        },
        {
            person: 'Bob Marly',
            date: 'March 12, 2022',
            video: '/vid7.mp4',
            icon: 'play',
        },
    ]);

    const handlePlayPause = (index) => {
        const video = videoRefs.current[index];

        if (video) {
            if (video.paused) {
                video.play();
                video.classList.add('active');
            } else {
                video.pause();
                video.classList.remove('active');
            }

            setCardsContent((prevCardsContent) => {
                const newCardsContent = [...prevCardsContent];
                newCardsContent[index].icon = video.paused ? 'play' : 'pause';
                return newCardsContent;
            });
        }
    };

    return (
        <section className='your_trip_section'>
            <article className='your_trip-wrapper'>
                <img src='trip1.jpg' alt='image' />
                <div className='views_description'>
                    <h2>YOUR TRIP</h2>
                    <p className='subheading'>Discover the lassen volcanic</p>
                    <p className='description-text'>
                        Looking for ideas to help you plan your next trip to a
                        national park? This is the place to start! These trip
                        ideas provide recommended activities designed to help
                        you figure out how to spend your time. For even more
                        ideas, see the list of all trip ideas below or search
                        for things to do and trip ideas by park, activity,
                        topic, duration, and more.
                    </p>
                    <p className='button'>
                        Points of interest
                        <HiArrowLongRight className='arrow-icon' />
                    </p>
                </div>
            </article>

            <article className='experience-slider-container'>
                <h2>Experience</h2>
                <p className='experience_subheading'>
                    experiences from travellers
                </p>

                <div className='experiences_wrapper'>
                    {cardsContent.map(
                        ({ person, date, video, icon }, index) => (
                            <div className='experience_card'>
                                <video
                                    className='card-video'
                                    src={video}
                                    playsinline
                                    loop
                                    muted
                                    disablepictureinpicture
                                    //preload
                                    ref={(el) =>
                                        (videoRefs.current[index] = el)
                                    }
                                />

                                <div className='card_description'>
                                    <div>
                                        <p>{person}</p>
                                        <p>{date}</p>
                                    </div>
                                    {icon === 'play' ? (
                                        <PlayIcon
                                            className='play-icon'
                                            onClick={() => {
                                                handlePlayPause(index);
                                            }}
                                        />
                                    ) : (
                                        <PauseIcon
                                            className='play-icon'
                                            onClick={() => {
                                                handlePlayPause(index);
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        )
                    )}
                </div>

                <div className='map_section'>
                    <Pin className='pin-icon' />
                    <Pin className='pin-icon second-pin' />
                    <Pin className='pin-icon third-pin' />
                    <Pin className='pin-icon fourth-pin' />
                    <div className='map_section_bg-image' />
                    <div className='map_section-text'>
                        <h6>
                            Harpers Ferry Center
                            <HiArrowLongRight className='arrow-icon' />
                        </h6>
                        <p>The National Park Services</p>
                    </div>

                    <div className='map_section-description'>
                        <h6>
                            High Sierra Camp area
                            <Pin className='icon' />
                        </h6>
                        <p className='description_paragraph'>
                            this map includes high sierra camps. toulumme
                            meadows lodge, and white wolf lodge spots
                        </p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default Trip;
