// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/zebrablinds.module.css"
import { useState } from "react";
import {MaterialsRenderingContent} from "../../zebrablinds.js"

const MaterialsPage = () => {

  // Image Database
  const imagesData = [
    { key: 'title 1', src: '/etb3004.jpg', label: 'this is label 1' },
    { key: 'title 2', src: '/etb3004.jpg', label: 'this is label 2' },
    { key: 'title 3', src: '/etb3004.jpg', label: 'this is label 3' },
    { key: 'title 4', src: '/etb3004.jpg', label: 'this is label 4' },
    { key: 'title 5', src: '/etb3004.jpg', label: 'this is label 5' },
    { key: 'title 6', src: '/etb3004.jpg', label: 'this is label 6' },
    { key: 'title 7', src: '/etb3004.jpg', label: 'this is label 7' },
    { key: 'title 8', src: '/etb3004.jpg', label: 'this is label 8' },
    { key: 'title 9', src: '/etb3004.jpg', label: 'this is label 9' },
    { key: 'title 10', src: '/etb3004.jpg', label: 'this is label 10' },
    { key: 'title 11', src: '/etb3004.jpg', label: 'this is label 11' },
    { key: 'title 12', src: '/etb3004.jpg', label: 'this is label 12' },

    // Add more image data as needed
  ];
  

  //LOGIC FOR  CHOSEN MATERIAL RENDERING IN BOM
  const [MaterialsRenderingContent, setMaterialsRenderingContent] = useState('');


     // Logic for materials image render
     const [materials_selectedImage, Set_materials_selectedImage] = useState(null);

     const getImageClassName = (imageName) => {
      const baseClassName = styles[imageName];
      return `${baseClassName} ${imageName === materials_selectedImage ? styles.materials_selectedImage : ''}`;
  };
  const selectedImageData = imagesData.find(imageData => imageData.key === materials_selectedImage);

  const handleClickgetImageClassName = (imageName) => {
    Set_materials_selectedImage(imageName === materials_selectedImage ? null : imageName);
  };




  return (
    <>
    <div>
      <div className={styles.materials_list}>

  {imagesData.map((imageData) => (
    <div key={imageData.key} className={styles.imageAndLabelContainerMaterials}>
      <Image
        alt="image"
        width={100}
        height={100}
        className={getImageClassName(imageData.key)}
        src={imageData.src}
        onClick={() => {
          console.log(`Click handler for ${imageData.key}`);
          handleClickgetImageClassName(imageData.key);
        }}
      />

      <div className={styles.descriptionLabelMaterials}>
      <div>{imageData.label}</div>
      </div>

    </div>
    
  ))}
    </div>
    </div>
    <div className={styles.materials_answer}>
        {selectedImageData ? selectedImageData.label : ''}
      </div>         

                                  </>
  );
};

export default MaterialsPage;
