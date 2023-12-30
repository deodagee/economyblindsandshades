// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/zebrablinds.module.css"
import { useState } from "react";

const MaterialsPage = () => {
  //logic for show color sections
  const [showBeigeImages, setshowBeigeImages] = useState(true);
  const [showBlackImages, setshowBlackImages] = useState(true);
  const [showBrownImages, setshowBrownImages] = useState(true);
  const [showBronzeImages, setshowBronzeImages] = useState(true);
  const [showGreyImages, setshowGreyImages] = useState(true);
  const [showWhiteImages, setshowWhiteImages] = useState(true);


  const handleshowBeigeImages = () => {
    setshowBeigeImages(!showBeigeImages);
    setshowBeigeImages(true);
  };

  const handleshowBlackImages = () => {
    setshowBlackImages(!showBlackImages);
    setshowBlackImages(true);
  };

  const handleshowBrownImages = () => {
    setshowBrownImages(!showBrownImages);
    setshowBrownImages(true);
  };

  const handleshowBronzeImages = () => {
    setshowBronzeImages(!showBronzeImages);
    setshowBronzeImages(true);
  };

  const handleshowGreyImages = () => {
    setshowGreyImages(!showGreyImages);
    setshowGreyImages(true);
  };

  const handleshowWhiteImages = () => {
    setshowWhiteImages(!showWhiteImages);
    setshowWhiteImages(true);
  };

  const imagesData = [
    { key: 'Beige', src: '/BEIGE/ETB1-003 - BEIGE.png', label: 'Beige' },
    { key: 'Black', src: '/BLACK/ETB1-006 - BLACK.png', label: 'Black' },
    { key: 'Bronze', src: '/BRONZE/ETB1-005 - BRONZE.png', label: 'Bronze' },
    { key: 'Brown', src: '/BROWN/ETB2-004 - BROWN.png', label: 'Brown' },
    { key: 'Grey', src: '/GREY/ETB1-004 - GREY.png', label: 'Grey' },
    { key: 'White', src: '/WHITE/ETB2-001 - WHITE.png', label: 'White' },
  ];

  const colorImageLists = {
    Beige: [
      { key: "Beige", src: '/BEIGE/ETB1-003BEIGE.png', label: "ETB1-003" },
      { key: "Beige", src: '/BEIGE/ETB2-002BEIGE.png', label: "ETB2-002" },
      { key: "Beige", src: '/BEIGE/ETB3-001BEIGE.png', label: "ETB3-001" },
      { key: "Beige", src: '/BEIGE/ETB3-002BEIGE.png', label: "ETB3-002" },
      { key: "Beige", src: '/BEIGE/ETB3-003BEIGE.png', label: "ETB3-003" },
      { key: "Beige", src: '/BEIGE/ETB5-003BEIGE.png', label: "ETB5-003" },
      { key: "Beige", src: '/BEIGE/ETB6-003BEIGE.png', label: "ETB6-003" },
      { key: "Beige", src: '/BEIGE/ETB7-001BEIGE.png', label: "ETB7-001" },
      { key: "Beige", src: '/BEIGE/ETB8-003BEIGE.png', label: "ETB8-003" },
      { key: "Beige", src: '/BEIGE/ETB10-001BEIGE.png', label: "ETB10-001" },
      { key: "Beige", src: '/BEIGE/ETB11-003BEIGE.png', label: "ETB11-003" },

    ],

    Black: [
      { key: "Black", src: '/BLACK/ETB1-006BLACK.png', label: "ETB1-006" },
      { key: "Black", src: '/BLACK/ETB4-003BLACK.png', label: "ETB4-003" },
      { key: "Black", src: '/BLACK/ETB4-004BLACK.png', label: "ETB4-004" },
      { key: "Black", src: '/BLACK/ETB5-006BLACK.png', label: "ETB5-006" },
      { key: "Black", src: '/BLACK/ETB5-007BLACK.png', label: "ETB5-007" },
      { key: "Black", src: '/BLACK/ETB8-005BLACK.png', label: "ETB8-005" },
      { key: "Black", src: '/BLACK/ETB9-003BLACK.png', label: "ETB9-003" },
    ],

    Brown: [
      { key: "Brown", src: '/BROWN/ETB2-004BROWN.png', label: "ETB2-004" },
      { key: "Brown", src: '/BROWN/ETB3-007BROWN.png', label: "ETB3-007" },
      { key: "Brown", src: '/BROWN/ETB5-005BROWN.png', label: "ETB5-005" },
      { key: "Brown", src: '/BROWN/ETB6-004BROWN.png', label: "ETB6-004" },
      { key: "Brown", src: '/BROWN/ETB7-003BROWN.png', label: "ETB7-003" },
      { key: "Brown", src: '/BROWN/ETB9-004BROWN.png', label: "ETB9-004" },
    ],

    Bronze: [
      { key: "Bronze", src: '/BRONZE/ETB1-005BRONZE.png', label: "ETB1-005" },
      { key: "Bronze", src: '/BRONZE/ETB3-006BRONZE.png', label: "ETB3-006" },
    ],

    Grey: [
      { key: "Grey", src: '/GREY/ETB1-004GREY.png', label: "ETB1-004" },
      { key: "Grey", src: '/GREY/ETB2-003GREY.png', label: "ETB2-003" },
      { key: "Grey", src: '/GREY/ETB3-004GREY.png', label: "ETB3-004" },
      { key: "Grey", src: '/GREY/ETB3-005GREY.png', label: "ETB3-005" },
      { key: "Grey", src: '/GREY/ETB5-004GREY.png', label: "ETB5-004" },
      { key: "Grey", src: '/GREY/ETB6-002GREY.png', label: "ETB6-002" },
      { key: "Grey", src: '/GREY/ETB7-002GREY.png', label: "ETB7-002" },
      { key: "Grey", src: '/GREY/ETB8-004GREY.png', label: "ETB8-004" },
      { key: "Grey", src: '/GREY/ETB9-002GREY.png', label: "ETB9-002" },
      { key: "Grey", src: '/GREY/ETB10-002GREY.png', label: "ETB10-002" },
      { key: "Grey", src: '/GREY/ETB11-001GREY.png', label: "ETB11-001" },
      { key: "Grey", src: '/GREY/ETB11-002GREY.png', label: "ETB11-002" },
      { key: "Grey", src: '/GREY/ETB11-004GREY.png', label: "ETB11-004" },
      { key: "Grey", src: '/GREY/ETB14-004GREY.png', label: "ETB14 - 004" },
      { key: "Grey", src: '/GREY/ETB14-003GREY.png', label: "ETB14-003" },
      { key: "Grey", src: '/GREY/ETB14-005GREY.png', label: "ETB14-005" },
    ],
    White: [
      { key: "White", src: '/WHITE/ETB2-001WHITE.png', label: "ETB2-001" },
      { key: "White", src: '/WHITE/ETB4-001WHITE.png', label: "ETB4-001" },
      { key: "White", src: '/WHITE/ETB4-002WHITE.png', label: "ETB4-002" },
      { key: "White", src: '/WHITE/ETB5-001WHITE.png', label: "ETB5-001" },
      { key: "White", src: '/WHITE/ETB5-002WHITE.png', label: "ETB5-002" },
      { key: "White", src: '/WHITE/ETB6-001WHITE.png', label: "ETB6-001" },
      { key: "White", src: '/WHITE/ETB8-001WHITE.png', label: "ETB8-001" },
      { key: "White", src: '/WHITE/ETB8-002WHITE.png', label: "ETB8-002" },
      { key: "White", src: '/WHITE/ETB9-001WHITE.png', label: "ETB9-001" },
      { key: "White", src: '/WHITE/ETB14-001WHITE.png', label: "ETB14-001" },
      { key: "White", src: '/WHITE/ETB15-001WHITE.png', label: "ETB15-001" },
      { key: "White", src: '/WHITE/ETB16-001WHITE.png', label: "ETB16-001" },
    ],
  };


  // Logic for materials image render
  //1.
  const [materials_selectedImage, Set_materials_selectedImage] = useState(null);
  //2.
  const getImageClassName = (imageName) => {
    const baseClassName1 = styles[imageName];
    return `${baseClassName1} ${imageName === materials_selectedImage ? styles.materials_selectedImage : ''}`;
  };
  //3.
  const handleClickgetImageClassName = (imageName) => {
    Set_materials_selectedImage(imageName === materials_selectedImage ? null : imageName);
  };
  //4.
  const selectedImageData = imagesData.find((imageData) => imageData.key === materials_selectedImage );



  //1.
  const [materials_selectedColor, Set_materials_selectedColor] = useState(null);
  //2.
  const getImageColorName = (imageName) => {
    const baseClassName = styles[imageName];
    return `${baseClassName} ${imageName === materials_selectedImage ? styles.materials_selectedImage : styles.hidden}`;
  };
  //3.
  const handleClickgetImageColorName = (ColorName) => {
    Set_materials_selectedColor(ColorName === materials_selectedColor ? null : ColorName);
  };
  //4.
  const selectedColorData = colorImageLists[materials_selectedImage]?.find((colordata) => colordata.key === materials_selectedColor );




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


      {colorImageLists && (
        <div className={styles.showImages_wrapper}>
          {/* Map over the selected color's image list */}
          {colorImageLists[materials_selectedImage]?.map((colordata) => (
            <div key={colordata.key} className={styles.imageContainer}>
              <div>
                <Image
                  className={getImageColorName(colordata.key)}
                  alt="key"
                  width={100}
                  height={100}
                  src={colordata.src}
                  onClick={() => {
                    console.log(`Click handler for ${colordata.key}`);
                    handleClickgetImageColorName(colordata.key);
                  }}
                />
              </div>
              <div className={styles.selectedImageClass_label}>{colordata.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className={styles.materials_answer}>
        {selectedImageData ? selectedImageData.label : ''}
      </div>

      <div className={styles.materials_answer2}>
        {selectedColorData ? selectedColorData.label : ''}
      </div>
    </>
  );
};

export default MaterialsPage;
