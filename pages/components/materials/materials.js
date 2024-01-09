// pages/components/materials/materials.js
import React from 'react';
import Image from 'next/image';
import styles from "../../../styles/components/pages/materials.module.css"
import { useState } from "react";

const MaterialsPage = () => {

  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const handleSelectMaterial = (src, label) => {
    // Log the name of the file clicked on
    console.log(`Clicked on file: ${src}`);
    setSelectedMaterial(src);
  };


  const Beige = [
    { key: "Beige", src: '/BEIGE/ETB1003BEIGE.png', label: "ETB1-003" },
    { key: "Beige", src: '/BEIGE/ETB2002BEIGE.png', label: "ETB2-002" },
    { key: "Beige", src: '/BEIGE/ETB3001BEIGE.png', label: "ETB3-001" },
    { key: "Beige", src: '/BEIGE/ETB3002BEIGE.png', label: "ETB3-002" },
    { key: "Beige", src: '/BEIGE/ETB3003BEIGE.png', label: "ETB3-003" },
    { key: "Beige", src: '/BEIGE/ETB5003BEIGE.png', label: "ETB5-003" },
    { key: "Beige", src: '/BEIGE/ETB6003BEIGE.png', label: "ETB6-003" },
    { key: "Beige", src: '/BEIGE/ETB7001BEIGE.png', label: "ETB7-001" },
    { key: "Beige", src: '/BEIGE/ETB8003BEIGE.png', label: "ETB8-003" },
    { key: "Beige", src: '/BEIGE/ETB10001BEIGE.png', label: "ETB10-001" },
    { key: "Beige", src: '/BEIGE/ETB11003BEIGE.png', label: "ETB11-003" },

  ];

  const Black = [
    { key: "Black", src: '/BLACK/ETB1006BLACK.png', label: "ETB1-006" },
    { key: "Black", src: '/BLACK/ETB4003BLACK.png', label: "ETB4-003" },
    { key: "Black", src: '/BLACK/ETB4004BLACK.png', label: "ETB4-004" },
    { key: "Black", src: '/BLACK/ETB5006BLACK.png', label: "ETB5-006" },
    { key: "Black", src: '/BLACK/ETB5007BLACK.png', label: "ETB5-007" },
    { key: "Black", src: '/BLACK/ETB8005BLACK.png', label: "ETB8-005" },
    { key: "Black", src: '/BLACK/ETB9003BLACK.png', label: "ETB9-003" },
  ];

  const Brown = [
    { key: "Brown", src: '/BROWN/ETB2004BROWN.png', label: "ETB2-004" },
    { key: "Brown", src: '/BROWN/ETB3007BROWN.png', label: "ETB3-007" },
    { key: "Brown", src: '/BROWN/ETB5005BROWN.png', label: "ETB5-005" },
    { key: "Brown", src: '/BROWN/ETB6004BROWN.png', label: "ETB6-004" },
    { key: "Brown", src: '/BROWN/ETB7003BROWN.png', label: "ETB7-003" },
    { key: "Brown", src: '/BROWN/ETB9004BROWN.png', label: "ETB9-004" },
  ];

  const Bronze = [
    { key: "Bronze", src: '/BRONZE/ETB1005BRONZE.png', label: "ETB1-005" },
    { key: "Bronze", src: '/BRONZE/ETB3006BRONZE.png', label: "ETB3-006" },
  ];

  const Grey = [
    { key: "Grey", src: '/GREY/ETB1004GREY.png', label: "ETB1-004" },
    { key: "Grey", src: '/GREY/ETB2003GREY.png', label: "ETB2-003" },
    { key: "Grey", src: '/GREY/ETB3004GREY.png', label: "ETB3-004" },
    { key: "Grey", src: '/GREY/ETB3005GREY.png', label: "ETB3-005" },
    { key: "Grey", src: '/GREY/ETB5004GREY.png', label: "ETB5-004" },
    { key: "Grey", src: '/GREY/ETB6002GREY.png', label: "ETB6-002" },
    { key: "Grey", src: '/GREY/ETB7002GREY.png', label: "ETB7-002" },
    { key: "Grey", src: '/GREY/ETB8004GREY.png', label: "ETB8-004" },
    { key: "Grey", src: '/GREY/ETB9002GREY.png', label: "ETB9-002" },
    { key: "Grey", src: '/GREY/ETB10002GREY.png', label: "ETB10-002" },
    { key: "Grey", src: '/GREY/ETB11001GREY.png', label: "ETB11-001" },
    { key: "Grey", src: '/GREY/ETB11002GREY.png', label: "ETB11-002" },
    { key: "Grey", src: '/GREY/ETB11004GREY.png', label: "ETB11-004" },
    { key: "Grey", src: '/GREY/ETB14004GREY.png', label: "ETB14-004" },
    { key: "Grey", src: '/GREY/ETB14003GREY.png', label: "ETB14-003" },
    { key: "Grey", src: '/GREY/ETB14005GREY.png', label: "ETB14-005" },
  ];

  const White = [
    { key: "White", src: '/WHITE/ETB2001WHITE.png', label: "ETB2-001" },
    { key: "White", src: '/WHITE/ETB4001WHITE.png', label: "ETB4-001" },
    { key: "White", src: '/WHITE/ETB4002WHITE.png', label: "ETB4-002" },
    { key: "White", src: '/WHITE/ETB5001WHITE.png', label: "ETB5-001" },
    { key: "White", src: '/WHITE/ETB5002WHITE.png', label: "ETB5-002" },
    { key: "White", src: '/WHITE/ETB6001WHITE.png', label: "ETB6-001" },
    { key: "White", src: '/WHITE/ETB8001WHITE.png', label: "ETB8-001" },
    { key: "White", src: '/WHITE/ETB8002WHITE.png', label: "ETB8-002" },
    { key: "White", src: '/WHITE/ETB9001WHITE.png', label: "ETB9-001" },
    { key: "White", src: '/WHITE/ETB14001WHITE.png', label: "ETB14-001" },
    { key: "White", src: '/WHITE/ETB15001WHITE.png', label: "ETB15-001" },
    { key: "White", src: '/WHITE/ETB16001WHITE.png', label: "ETB16-001" },
    { key: "White", src: '/WHITE/ETB1001WHITE.png', label: "ETB1-001" },
  ];


  const renderColorList = (colorList) => {
    return (
      <>
        <div className={styles.images_and_subtitles} key={colorList[0].key}>
          {colorList.map((item) => (
            <div
              key={item.label}
              className={`${styles.imageContainer} ${selectedMaterial === item.src ? styles.selectedImage : ''}`}
              onClick={() => handleSelectMaterial(item.src)}
            >
              <h3 className={styles.images_and_subtitles_color_name}>{item.key}</h3>
              <Image className={styles.image_itself} src={item.src} alt={item.label} width={100} height={100} />
              <p className={styles.selectedImageClass_label}>{item.label}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className={styles.showImages_wrapper}>
      <div className={styles.white}>
        <p className={styles.color_section_title}>Whites</p>
        {renderColorList(White)}
      </div>
      <div className={styles.divider_line}></div>
      <div className={styles.grey}>
      <p className={styles.color_section_title}>Greys</p>

        {renderColorList(Grey)}
      </div>
      <div className={styles.divider_line}></div>
      <div className={styles.bronze}>
      <p className={styles.color_section_title}>Bronzes</p>
        {renderColorList(Bronze)}
      </div>
      <div className={styles.divider_line}></div>
      <div className={styles.brown}>
      <p className={styles.color_section_title}>Browns</p>
        {renderColorList(Brown)}
      </div>
      <div className={styles.divider_line}></div>
      <div className={styles.black}>
      <p className={styles.color_section_title}>Blacks</p>
        {renderColorList(Black)}
      </div>
      <div className={styles.divider_line}></div>
      <div className={styles.beige}>
      <p className={styles.color_section_title}>Beiges</p>
        {renderColorList(Beige)}
      </div>
    </div>
  );
};

export default MaterialsPage;