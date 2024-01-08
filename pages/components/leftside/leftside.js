// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/zebrablinds.module.css"
import { useState } from "react";

const LeftSidePage = () => {
    //left side image table 
    const ImageDataLeftSide = [
        { key: 'cassettesteel', src: '/cassettesteel.png', label: 'cassettesteel' },

        { key: 'indexcomponentmain', src: '/indexcomponentmain.png', label: 'indexcomponentmain' },

        { key: 'slidingcomponent8', src: '/slidingcomponent8.png', label: 'slidingcomponent8' },

        { key: 'reviewsbg', src: '/reviewsbg.png', label: 'reviewsbg' },

        { key: 'rollerblinds', src: '/rollerblinds.png', label: 'rollerblinds' },

        { key: 'zebrablinds', src: '/zebrablinds.png', label: 'zebrablinds' },

        { key: 'whattypeofblindsdoyouinstall', src: '/whattypeofblindsdoyouinstall.png', label: 'whattypeofblindsdoyouinstall' },
        { key: 'slidingcomponent1', src: '/slidingcomponent1.png', label: 'slidingcomponent1' },
        { key: 'aretheoptionsaffordableandstylish', src: '/aretheoptionsaffordableandstylish.png', label: 'aretheoptionsaffordableandstylish' },
        { key: 'howsooncanibookanestimate', src: '/howsooncanibookanestimate.png', label: 'howsooncanibookanestimate' },
        { key: 'honeycombblinds', src: '/honeycombblinds.png', label: 'FIRST1-41' },

        { key: 'etb3004', src: '/etb3004.jpg', label: 'etb3004' },
        { key: 'cassettesteel', src: '/cassettesteel.png', label: 'cassettesteel' },

        { key: 'indexcomponentmain', src: '/indexcomponentmain.png', label: 'indexcomponentmain' },

        { key: 'slidingcomponent8', src: '/slidingcomponent8.png', label: 'slidingcomponent8' },

        { key: 'reviewsbg', src: '/reviewsbg.png', label: 'reviewsbg' },

        { key: 'rollerblinds', src: '/rollerblinds.png', label: 'rollerblinds' },

        { key: 'zebrablinds', src: '/zebrablinds.png', label: 'zebrablinds' },

        { key: 'whattypeofblindsdoyouinstall', src: '/whattypeofblindsdoyouinstall.png', label: 'whattypeofblindsdoyouinstall' },
        { key: 'slidingcomponent1', src: '/slidingcomponent1.png', label: 'slidingcomponent1' },
        { key: 'aretheoptionsaffordableandstylish', src: '/aretheoptionsaffordableandstylish.png', label: 'aretheoptionsaffordableandstylish' },
        { key: 'howsooncanibookanestimate', src: '/howsooncanibookanestimate.png', label: 'howsooncanibookanestimate' },
        { key: 'honeycombblinds', src: '/honeycombblinds.png', label: 'FIRST1-41' },

        { key: 'etb3004', src: '/etb3004.jpg', label: 'etb3004' },

        // Add more image data as needed
    ];

    // Logic for color render image left side
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (src) => {
        setSelectedImage(src);
    };


    return (
        <div className={styles.left_half}>
            <div className={styles.picture_frame}>
                {selectedImage && (
                    <Image
                        className={styles.selectedImage_styles}
                        src={selectedImage}
                        alt="Selected Image"
                        width={200}
                        height={200}
                        style={{ border: '1px solid white' }}
                    />
                )}
            </div>

            <div className={styles.sliding_gallery_component}>
                <svg
                    className={styles.chevron_left}
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... your existing SVG path */}
                </svg>

                <div className={styles.slider}>
                    {ImageDataLeftSide.map((item, index) => (
                        <div
                            key={item.key}
                            className={`${styles.imageContainer} ${selectedImage === item.src ? styles.selectedImage : ''
                                }`}
                            onClick={() => setSelectedImage(item.src)}
                        >
                            <Image src={item.src} alt={item.label} width={100} height={100} />
                        </div>
                    ))}
                </div>

                <svg
                    className={styles.chevron_right}
                    width="10"
                    height="14"
                    viewBox="0 0 10 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* ... your existing SVG path */}
                </svg>
            </div>
        </div>
    );
};

export default LeftSidePage;
