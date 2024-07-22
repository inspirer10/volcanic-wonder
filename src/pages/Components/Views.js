import React, { useEffect, useRef, useState } from 'react';
import { HiArrowLongLeft, HiArrowLongRight } from 'react-icons/hi2';
import { MdVolcano } from 'react-icons/md';
import { useScroll, useTransform, motion } from 'framer-motion';

function Views() {
    const [currentDescription, setCurrentDescription] = useState(0);
    const [currentImg, setCurrentImg] = useState(1);
    const descriptionOptions = [
        {
            title: 'PARK LANDFORMS',
            description:
                'Land surface are sculpted into a wide diversity of shapes and arrangements, called landforms.',
        },
        {
            title: 'MOUNTAIN RANGES',
            description:
                "Large natural elevations of the earth's surface rising abruptly from the surrounding level.",
        },
        {
            title: 'DESERT DUNES',
            description:
                'Waves of sand formed by the wind, found in deserts and along beaches.',
        },
        {
            title: 'RIVER VALLEYS',
            description:
                'Low areas between hills or mountains typically with a river running through them.',
        },
        {
            title: 'COASTAL CLIFFS',
            description:
                'Steep faces of rock and earth found along the coastline.',
        },
        {
            title: 'FORESTED HILLS',
            description:
                'Elevated areas covered predominantly with trees and shrubs.',
        },
    ];

    const handleChange = (type) => {
        if (type === 'next') {
            if (currentDescription === 5) {
                setCurrentDescription(0);
            } else {
                setCurrentDescription(currentDescription + 1);
            }
        } else if (type === 'prev') {
            if (currentDescription === 0) {
                setCurrentDescription(5);
            } else {
                setCurrentDescription(currentDescription - 1);
            }
        }
    };

    const handleImgChange = (type) => {
        if (type === 'next') {
            if (currentImg === 7) {
                setCurrentImg(1);
            } else {
                setCurrentImg(currentImg + 1);
            }
        } else if (type === 'prev') {
            if (currentImg === 1) {
                setCurrentImg(7);
            } else {
                setCurrentImg(currentImg - 1);
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentDescription === 5) {
                setCurrentDescription(0);
            } else {
                setCurrentDescription(currentDescription + 1);
            }
        }, 2750);

        return () => {
            clearInterval(interval);
        };
    }, [currentDescription]);

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start'],
    });

    const scrollParalax = useTransform(scrollYProgress, [0, 1], [0, -275]);

    return (
        <>
            <div className='introduction_text'>
                <h3>
                    <span className='highlited'>Explore</span> the <br />
                    <span className='border-bottom'>Un</span>discovered
                </h3>

                <div className='description'>
                    <p className='paragraph'>
                        Lassen Volcanic National Park is home to steaming
                        fumaroles, meadows freckled with wildflowers, clear
                        mountain lakes, and numerous volcanoes. Jagged peaks
                        tell the story of its eruptive past while hot water
                        continues to shape the land. Lassen Volcanic offers
                        opportunities to discover the wonder and mysteries of
                        volcanoes and hot water for visitors willing to explore
                        the undiscovered.
                    </p>
                    <p className='button'>
                        Explore lassen volcanic
                        <HiArrowLongRight className='arrow-icon' />
                    </p>
                </div>
            </div>

            <section className='views_section-container'>
                <article className='views_article' id='views' ref={container}>
                    <motion.div style={{ y: scrollParalax }}>
                        <img src='img1.jpg' alt='image' />
                    </motion.div>

                    <div className='views_description'>
                        <h2>THE VIEWS</h2>
                        <p className='subheading'>
                            Enjoy the views of a lifetime
                        </p>
                        <p className='description-text'>
                            National parks contain many of our nation's most
                            treasured landscapes, from the majestic mountain
                            ranges of Alaska to the vast prairies of the
                            Everglades. Learn about the natural resources in
                            parks, from the rocks under our feet to the sky
                            overhead and everything in between. Discover the
                            issues that affect our parks and how we join with
                            neighbors and partners to address them. Meet the
                            people who protect our parks and learn how you can
                            help preserve these treasures for generations to
                            come.
                        </p>
                        <p className='button'>
                            Points of interest
                            <HiArrowLongRight className='arrow-icon' />
                        </p>
                    </div>
                </article>

                <article className='views_video_article'>
                    <video
                        className='views-video'
                        src={'/vid6.mp4'}
                        playsinline
                        autoPlay
                        loop
                        muted
                        disablepictureinpicture
                        preload
                    />

                    <div className='views-video-description'>
                        <h5>
                            {descriptionOptions[currentDescription].title}
                            <div className='arrows-wrapper'>
                                <HiArrowLongLeft
                                    className='arrow-icon'
                                    onClick={() => handleChange('prev')}
                                />
                                <HiArrowLongRight
                                    className='arrow-icon'
                                    onClick={() => handleChange('next')}
                                />
                            </div>
                        </h5>
                        <p>
                            {descriptionOptions[currentDescription].description}
                        </p>
                    </div>
                </article>

                <article className='volcanic-landforms-article'>
                    <aside className='views_description'>
                        <h2>VOLCANIC LANDFORMS</h2>
                        <p className='subheading'>
                            Volcanic processes create many features we see
                        </p>
                        <p className='description-text'>
                            Extrusive igneous landforms are the result of magma
                            coming from deep within the earth to the surface,
                            where it cools as lava. This can happen explosively
                            or slowly, depending on the chemical composition of
                            the lava and whether there is an easy path for it to
                            take to the surface. If there is not a pathway,
                            pressure builds up over time (like a shaken soda)
                            until the magma forcibly explodes outward.
                        </p>
                        <p className='description-text '>
                            Volcanic processes are constantly changing the
                            Earth. Eruptions can create new islands, build and
                            destroy mountains, and alter landscapes.
                        </p>
                        <p className='button'>
                            Points of interest
                            <HiArrowLongRight className='arrow-icon' />
                        </p>
                    </aside>

                    <div
                        style={{
                            backgroundImage: `url(volcanic${currentImg}.jpg)`,
                        }}
                        className='side-img'
                    >
                        <div
                            className='left-arrow'
                            onClick={() => handleImgChange('prev')}
                        >
                            <HiArrowLongLeft className='icon' />
                        </div>
                        <div
                            className='right-arrow'
                            onClick={() => handleImgChange('next')}
                        >
                            <HiArrowLongRight className='icon' />
                        </div>
                    </div>
                </article>

                <article class='views_experience_article'>
                    <img src='img3.jpg' class='experience_bg-image' />
                    <div class='overlay' />
                    <div class='views_experience-content'>
                        <h3>EXPERIENCE</h3>
                        <p className='main_subheading'>
                            National Park California
                        </p>

                        <div className='explore-cards-wrapper'>
                            <div className='explore-card'>
                                <img
                                    src='thumbnail2.jpg'
                                    alt='card thumbnail'
                                />
                                <h5>KARST LANDSCAPES</h5>
                                <p className='card-text'>
                                    Karst is a type of landscape where the
                                    dissolving of the bedrock has created
                                    sinkholes, caves, springs and other
                                    characteristic features.
                                </p>
                                <p className='button'>
                                    Explore more
                                    <HiArrowLongRight className='icon' />
                                </p>
                            </div>
                            <div className='explore-card'>
                                <img
                                    src='thumbnail3.jpg'
                                    alt='card thumbnail'
                                />
                                <h5>FLUVIAL LANDSFORMS</h5>
                                <p className='card-text'>
                                    Fluvial systems are dominatend by rivers and
                                    streams. Stream erosion may be the most
                                    important geomorphic agent.
                                </p>
                                <p className='button'>
                                    Explore more
                                    <HiArrowLongRight className='icon' />
                                </p>
                            </div>
                            <div className='explore-card'>
                                <img
                                    src='thumbnail1.jpg'
                                    alt='card thumbnail'
                                />
                                <h5>FLUVIAL LANDSFORMS </h5>
                                <p className='card-text'>
                                    Eolian processes involve erosion,
                                    transportation, and deposition of sediment
                                    by the wind. These processes occur in a
                                    variety of environments.
                                </p>
                                <p className='button'>
                                    Explore more
                                    <HiArrowLongRight className='icon' />
                                </p>
                            </div>
                        </div>

                        <article className='coastal_video-wrapper'>
                            <video
                                className='coastal_video'
                                src={'/vid5.mp4'}
                                playsinline
                                autoPlay
                                loop
                                muted
                                disablepictureinpicture
                                //preload
                            />

                            <div className='coastal_video-description'>
                                <h6>
                                    Coastal Landforms
                                    <MdVolcano className='volcano-icon' />
                                </h6>
                                <p className='description_paragraph'>
                                    Our national parks contain diverse coastal
                                    environments: high energy rocky shorelines
                                    of Acadia national park in maine, quiet
                                    lagoons within war in the pacific national
                                    historical park.
                                </p>
                            </div>
                        </article>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Views;
