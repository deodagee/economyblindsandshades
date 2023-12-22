// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/zebrablinds.module.css"
import { useState } from "react";

const MaterialsPage = () => {

     // Logic for materials image render
     const [materials_selectedImage, Set_materials_selectedImage] = useState(null);

     const handleClickCHangeMaterialsImage = (imageName) => {
         Set_materials_selectedImage(imageName === materials_selectedImage ? null : imageName);
     };
 
     const getImageClassNameImageRender = (imageName) => {
         const baseClassName = styles[imageName];
         return `${baseClassName} ${imageName === materials_selectedImage ? styles.materials_selectedImage : ''}`;
     };


  const imagesData = [
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'FIRST1-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_26_01', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_2', src: '/etb3004.jpg', label: 'ETB300-41' },
    { key: 'ema_601_1', src: '/etb3004.jpg', label: 'ETB300-41' },
    // Add more image data as needed
  ];

  return (
    <div>
      <div className={styles.materials_list}>

  {imagesData.map((imageData) => (
    <div key={imageData.key} className={styles.imageAndLabelContainerMaterials}>
      <Image
        alt="image"
        width={100}
        height={100}
        className={getImageClassNameImageRender(imageData.key)}
        src={imageData.src}
        onClick={() => {
          console.log(`Click handler for ${imageData.key}`);
          handleClickCHangeMaterialsImage(imageData.key);
        }}
      />

      <div className={styles.descriptionLabel}>
      <div>{imageData.label}</div>
      </div>

    </div>
    
  ))}
    </div>
    </div>
  );
};

export default MaterialsPage;
