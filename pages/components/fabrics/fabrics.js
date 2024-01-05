// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/zebrablinds.module.css"
import { useState } from "react";

const FabricsPage = () => {


  //1. //  ellipse logic

  const [active_skip_head_rail_ellipse, Set_active_skip_head_rail_ellipse] = useState(null);
  const [active_skip_bottom_rail_ellipse, Set_active_skip_bottom_rail_ellipse] = useState(null);

  const handleEllipseClickSkipHeadRailColor = () => {
    console.log('Ellipse Clicked');
    Set_active_skip_head_rail_ellipse((prevActive) => !prevActive);
    // Reset selected_head_rail_color when the ellipse is clicked
    Set_selected_head_rail_color(null);
  };


  const handleEllipseClickSkipBottomRailColor = () => {
    console.log('Ellipse Clicked');
    Set_active_skip_bottom_rail_ellipse((prevActive) => !prevActive);
    // Reset selected_bottom_rail_color when the bottom rail ellipse is clicked
    Set_selected_bottom_rail_color(null);
  };


  // Logic for color render head rails
  const [selected_head_rail_color, Set_selected_head_rail_color] = useState(null);

  const getImageClassNameColorHeadRail = (imageName) => {
    const baseClassName = styles[imageName];
    return `${baseClassName} ${imageName === selected_head_rail_color ? styles.selected_head_rail_color : ''}`;
  };

  // Logic for color render bottom rails
  const [selected_bottom_rail_color, Set_selected_bottom_rail_color] = useState(null);

  const getImageClassNameColorBottomRail = (imageName) => {
    const baseClassName = styles[imageName];
    return `${baseClassName} ${imageName === selected_bottom_rail_color ? styles.selected_bottom_rail_color : ''}`;
  };

  const imagesDataHeadRail = [
    { key: 'fabric_type_image1', src: '/pickcolor.png', label: ' Black' },
    { key: 'fabric_type_image2', src: '/pickcolor.png', label: ' Brown' },
    { key: 'fabric_type_image3', src: '/pickcolor.png', label: ' Beige' },
    { key: 'fabric_type_image4', src: '/pickcolor.png', label: ' Grey' },
    { key: 'fabric_type_image5', src: '/pickcolor.png', label: ' White' },
    // Add more image data as needed
  ];
  const imagesDataBottomRail = [
    { key: 'fabric_type_image1', src: '/pickcolor.png', label: ' Black' },
    { key: 'fabric_type_image2', src: '/pickcolor.png', label: ' Brown' },
    { key: 'fabric_type_image3', src: '/pickcolor.png', label: ' Beige' },
    { key: 'fabric_type_image4', src: '/pickcolor.png', label: ' Grey' },
    { key: 'fabric_type_image5', src: '/pickcolor.png', label: ' White' },
    // Add more image data as needed
  ];





  //add color selections to the bom 

  //add head rail colors

  const selectedImageData_Bottomrail = imagesDataHeadRail.find(imageData => imageData.key === selected_head_rail_color);
  const selectedImageData_Headrail = imagesDataBottomRail.find(imageData => imageData.key === selected_bottom_rail_color);




  return (

    <div>
      <div className={styles.skip_top_section}>

        <div className={styles.ellipse_and_title}>
          <div className={`${styles.skip_head_rail_ellipse} ${active_skip_head_rail_ellipse ? styles.active_skip_head_rail_ellipse : ''}`}
            onClick={handleEllipseClickSkipHeadRailColor}
          ></div>
          <div className={styles.skip_head_rail_color_for_head_rail_title}>Skip Head Rail Color
          </div>
        </div>
        <div className={styles.note_skipping_color_for_head_rail}>
          *Note: Skipping Color will result with steel material
        </div>
      </div>

      <div className={styles.skip_bottom_section}>
        <div className={styles.ellipse_and_title}>
        <div className={`${styles.skip_bottom_rail_ellipse} ${active_skip_bottom_rail_ellipse ? styles.active_skip_bottom_rail_ellipse : ''}`}
          onClick={handleEllipseClickSkipBottomRailColor}
        ></div>
        <div className={styles.skip_head_rail_color_for_bottom_rail}>Skip Bottom Rail Color
        </div>
        </div>
        <div className={styles.note_skipping_color_for_bottom_rail}>
          *Note: Skipping Color will result with steel material
        </div>
      </div>


      {active_skip_head_rail_ellipse ? null : (
        <div className={styles.fabric_list_header} style={{ marginTop: active_skip_bottom_rail_ellipse ? '-100px' : '0' }}>         {imagesDataHeadRail.map((imageData) => (
          <div key={imageData.key} className={styles.imageAndLabelContainerFabricsHeader}>
            <Image
              alt="image"
              width={100}
              height={100}
              className={getImageClassNameColorHeadRail(imageData.key)}
              src={imageData.src}
              onClick={() => {
                if (!active_skip_head_rail_ellipse) {
                  console.log(`Click handler for ${imageData.key}`);
                  Set_selected_head_rail_color(imageData.key);
                }
              }}
              style={{ pointerEvents: active_skip_head_rail_ellipse ? 'none' : 'auto' }}
            />

            <div className={styles.descriptionLabelFabrics}>
              <div>{imageData.label}</div>
            </div>
          </div>
        ))}
        </div>
      )}



      <div>
        {active_skip_bottom_rail_ellipse ? null : (

          <div className={styles.fabric_list_bottom} style={{ marginTop: active_skip_head_rail_ellipse ? '-100px' : '0' }}>          {imagesDataBottomRail.map((imageData) => (
            <div key={imageData.key} className={styles.imageAndLabelContainerFabricsBottom}>
              <Image
                alt="image"
                width={100}
                height={100}
                className={getImageClassNameColorBottomRail(imageData.key)}
                src={imageData.src}
                onClick={() => {
                  console.log(`Click handler for ${imageData.key}`);
                  Set_selected_bottom_rail_color(imageData.key);
                }}
              />

              <div className={styles.descriptionLabelFabrics}>
                <div>{imageData.label}</div>
              </div>

            </div>

          ))}
          </div>
        )}


      </div>



      <div className={styles.head_rail_color_answer}>
        {selectedImageData_Headrail ? selectedImageData_Headrail.label : ''}
      </div>

      <div className={styles.bottom_rail_color_answer}>
        {selectedImageData_Bottomrail ? selectedImageData_Bottomrail.label : ''}
      </div>



    </div>


  );
};

export default FabricsPage;
