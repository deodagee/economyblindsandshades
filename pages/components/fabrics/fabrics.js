// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/zebrablinds.module.css"
import { useState } from "react";

const FabricsPage = () => {
  const [active_head_rail_color_Rendering_Content, Setactive_head_rail_color_Rendering_Content] = useState('');
  const [active_bottom_rail_color_Rendering_Content, Setactive_bottom_rail_color_Rendering_Content] = useState('');



  // Logic for color render head rails
  const [selected_head_rail_color, Set_selected_head_rail_color] = useState(null);

  const getImageClassNameColorHeadRail  = (imageName) => {
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
    { key: 'fabric_type_image1', src: '/cassette.png', label: 'Oval Black' },
    { key: 'fabric_type_image2', src: '/cassette.png', label: 'Oval Brown' },
    { key: 'fabric_type_image3', src: '/cassette.png', label: 'Oval Beige' },
    { key: 'fabric_type_image4', src: '/cassette.png', label: 'Oval Grey' },
    { key: 'fabric_type_image5', src: '/cassette.png', label: 'Oval White' },
    // Add more image data as needed
  ];
  const imagesDataBottomRail = [
    { key: 'fabric_type_image1', src: '/cassette.png', label: 'Oval Black' },
    { key: 'fabric_type_image2', src: '/cassette.png', label: 'Oval Brown' },
    { key: 'fabric_type_image3', src: '/cassette.png', label: 'Oval Beige' },
    { key: 'fabric_type_image4', src: '/cassette.png', label: 'Oval Grey' },
    { key: 'fabric_type_image5', src: '/cassette.png', label: 'Oval White' },
    // Add more image data as needed
  ];





  //add color selections to the bom 

  //add head rail colors

  const selectedImageDataHead = imagesDataHeadRail.find(imageData => imageData.key === selected_head_rail_color);
  const selectedImageDataBottom = imagesDataBottomRail.find(imageData => imageData.key === selected_bottom_rail_color);




  return (
    <div>

        <div className={styles.fabric_list_header}>

{imagesDataHeadRail.map((imageData) => (
  <div key={imageData.key} className={styles.imageAndLabelContainerFabricsHeader}>
    <Image
      alt="image"
      width={100}
      height={100}
      className={getImageClassNameColorHeadRail(imageData.key)}
      src={imageData.src}
      onClick={() => {
        console.log(`Click handler for ${imageData.key}`);
        Set_selected_head_rail_color(imageData.key);
      }}
    />

    <div className={styles.descriptionLabelFabrics}>
      <div>{imageData.label}</div>
    </div>

  </div>

))}
</div>

<div>

<div className={styles.fabric_list_bottom}>

{imagesDataBottomRail.map((imageData) => (
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

</div>

<div className={styles.head_rail_color_answer}>
{selectedImageDataHead ? selectedImageDataHead.label : ''}
                                    </div>


                                    <div className={styles.bottom_rail_color_answer}>
                                    {selectedImageDataBottom ? selectedImageDataBottom.label : ''}
                                    </div>
        
      </div>

      
  );
};

export default FabricsPage;
