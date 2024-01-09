// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/zebrablinds.module.css"
import { useState } from "react";

const LeftSidePage = () => {
    const ImageDataLeftSide = [
        { key: 'cassettesteel', src: '/cassettesteel.png', label: 'cassettesteel' },
    ];

    const [selectedImage, setSelectedImage] = useState(null);


    return (
        <div className={styles.left_half_off_page}>
            <div className={styles.frame_title}>
                Product View
            </div>
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
