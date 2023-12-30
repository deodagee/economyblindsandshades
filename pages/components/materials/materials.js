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
    { key: 'Beige', src: '/BEIGE/ETB1-003 - BEIGE.png', label: 'BEIGE' },
    { key: 'Black', src: '/BLACK/ETB1-006 - BLACK.png', label: 'BLACK' },
    { key: 'Bronze', src: '/BRONZE/ETB1-005 - BRONZE.png', label: 'BRONZE' },
    { key: 'Brown', src: '/BROWN/ETB2-004 - BROWN.png', label: 'BROWN' },
    { key: 'Grey', src: '/GREY/ETB1-004 - GREY.png', label: 'GREY' },
    { key: 'White', src: '/WHITE/ETB2-001 - WHITE.png', label: 'WHITE' },
  ];

  const colorImageLists = {
Beige: [
  {key: "Beige", src: '/BEIGE/ETB1-003 - BEIGE.png', label: "ETB1-003"},
  {key: "Beige", src: '/BEIGE/ETB2-002 - BEIGE.png', label: "ETB2-002"},
  {key: "Beige", src: '/BEIGE/ETB3-001 - BEIGE.png', label: "ETB3-001"},
  {key: "Beige", src: '/BEIGE/ETB3-002 - BEIGE.png', label: "ETB3-002"},
  {key: "Beige", src: '/BEIGE/ETB3-003 - BEIGE.png', label: "ETB3-003"},
  {key: "Beige", src: '/BEIGE/ETB5-003 - BEIGE.png', label: "ETB5-003"},
  {key: "Beige", src: '/BEIGE/ETB6-003 - BEIGE.png', label: "ETB6-003"},
  {key: "Beige", src: '/BEIGE/ETB7-001 - BEIGE.png', label: "ETB7-001"},
  {key: "Beige", src: '/BEIGE/ETB8-003 - BEIGE.png', label: "ETB8-003"},
  {key: "Beige", src: '/BEIGE/ETB10-001 - BEIGE.png', label: "ETB10-001"},
  {key: "Beige", src: '/BEIGE/ETB11-003 - BEIGE.png', label: "ETB11-003"},

],

    Black: [
      { key: "Black", src: '/BLACK/ETB1-006 - BLACK.png', label: "ETB1-006" },
      { key: "Black", src: '/BLACK/ETB4-003 - BLACK.png', label: "ETB4-003" },
      { key: "Black", src: '/BLACK/ETB4-004 - BLACK.png', label: "ETB4-004" },
      { key: "Black", src: '/BLACK/ETB5-006 - BLACK.png', label: "ETB5-006" },
      { key: "Black", src: '/BLACK/ETB5-007 - BLACK.png', label: "ETB5-007" },
      { key: "Black", src: '/BLACK/ETB8-005 - BLACK.png', label: "ETB8-005" },
      { key: "Black", src: '/BLACK/ETB9-003 - BLACK.png', label: "ETB9-003" },
    ],

    Brown: [
      { key: "Brown", src: '/BROWN/ETB2-004 - BROWN.png', label: "ETB2-004" },
      { key: "Brown", src: '/BROWN/ETB3-007 - BROWN.png', label: "ETB3-007" },
      { key: "Brown", src: '/BROWN/ETB5-005 - BROWN.png', label: "ETB5-005" },
      { key: "Brown", src: '/BROWN/ETB6-004 - BROWN.png', label: "ETB6-004" },
      { key: "Brown", src: '/BROWN/ETB7-003 - BROWN.png', label: "ETB7-003" },
      { key: "Brown", src: '/BROWN/ETB9-004 - BROWN.png', label: "ETB9-004" },
    ],

    Bronze: [
      { key: "Bronze", src: '/BRONZE/ETB1-005 - BRONZE.png', label: "ETB1-005" },
      { key: "Bronze", src: '/BRONZE/ETB3-006 - BRONZE.png', label: "ETB3-006" },
    ],

    Grey: [
      { key: "Grey", src: '/GREY/ETB1-004 - GREY.png', label: "ETB1-004" },
      { key: "Grey", src: '/GREY/ETB2-003 - GREY.png', label: "ETB2-003" },
      { key: "Grey", src: '/GREY/ETB3-004 - GREY.png', label: "ETB3-004" },
      { key: "Grey", src: '/GREY/ETB3-005 - GREY.png', label: "ETB3-005" },
      { key: "Grey", src: '/GREY/ETB5-004 - GREY.png', label: "ETB5-004" },
      { key: "Grey", src: '/GREY/ETB6-002 - GREY.png', label: "ETB6-002" },
      { key: "Grey", src: '/GREY/ETB7-002 - GREY.png', label: "ETB7-002" },
      { key: "Grey", src: '/GREY/ETB8-004 - GREY.png', label: "ETB8-004" },
      { key: "Grey", src: '/GREY/ETB9-002 - GREY.png', label: "ETB9-002" },
      { key: "Grey", src: '/GREY/ETB10-002 - GREY.png', label: "ETB10-002" },
      { key: "Grey", src: '/GREY/ETB11-001 - GREY.png', label: "ETB11-001" },
      { key: "Grey", src: '/GREY/ETB11-002 - GREY.png', label: "ETB11-002" },
      { key: "Grey", src: '/GREY/ETB11-004 - GREY.png', label: "ETB11-004" },
      { key: "Grey", src: '/GREY/ETB14 - 004 - GREY.png', label: "ETB14 - 004" },
      { key: "Grey", src: '/GREY/ETB14-003 - GREY.png', label: "ETB14-003" },
      { key: "Grey", src: '/GREY/ETB14-005 - GREY.png', label: "ETB14-005" },
    ],
    White: [
      { key: "White", src: '/WHITE/ETB2-001 - WHITE.png', label: "ETB2-001" },
      { key: "White", src: '/WHITE/ETB4-001 - WHITE.png', label: "ETB4-001" },
      { key: "White", src: '/WHITE/ETB4-002 - WHITE.png', label: "ETB4-002" },
      { key: "White", src: '/WHITE/ETB5-001 - WHITE.png', label: "ETB5-001" },
      { key: "White", src: '/WHITE/ETB5-002 - WHITE.png', label: "ETB5-002" },
      { key: "White", src: '/WHITE/ETB6-001 - WHITE.png', label: "ETB6-001" },
      { key: "White", src: '/WHITE/ETB8-001 - WHITE.png', label: "ETB8-001" },
      { key: "White", src: '/WHITE/ETB8-002 - WHITE.png', label: "ETB8-002" },
      { key: "White", src: '/WHITE/ETB9-001 - WHITE.png', label: "ETB9-001" },
      { key: "White", src: '/WHITE/ETB14-001 - WHITE.png', label: "ETB14-001" },
      { key: "White", src: '/WHITE/ETB15-001 - WHITE.png', label: "ETB15-001" },
      { key: "White", src: '/WHITE/ETB16-001 - WHITE.png', label: "ETB16-001" },
    ],
  };


  // Logic for materials image render
  const [materials_selectedImage, Set_materials_selectedImage] = useState(null);

  const getImageClassName = (imageName) => {
    const baseClassName = styles[imageName];
    return `${baseClassName} ${imageName === materials_selectedImage ? styles.materials_selectedImage : ''}`;
  };

  const selectedImageData = imagesData.find((imageData) => imageData.key === materials_selectedImage);

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

      {[showBeigeImages, showBlackImages, showBrownImages, showBronzeImages, showGreyImages,showWhiteImages] && (
  <div className={styles.showBeigeImages_wrapper}>
    {/* Map over the selected color's image list */}
    {colorImageLists[materials_selectedImage]?.map((image) => (
      <div key={image.label} className={styles.imageContainer}>

        <div>
        <Image
          className={styles.selectedImageClass}
          alt={image.label}
          width={100}
          height={100}
          src={image.src}
        />
         </div>
        <div className={styles.selectedImageClass_label}>{image.label}</div>
      </div>
    ))}
  </div>
)}

    </>
  );
};

export default MaterialsPage;
