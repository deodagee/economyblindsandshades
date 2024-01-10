// pages/components/materials/materials.js
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../../styles/components/pages/materials.module.css';

const MaterialsPage = ({ showLeftHalf }) => {

  const FirstImageRender = [
    { key: "Black", src: '/BLACK/ETB1006BLACK.png', label: "ETB1-006" },
  ];

  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const handleSelectMaterial = (src, label) => {
    console.log(`Clicked on file: ${src}`);
    setSelectedMaterial({ src, label });
  };

  const colorData = {
    Beige: [
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
    ],
    Black: [
      { key: "Black", src: '/BLACK/ETB1006BLACK.png', label: "ETB1-006" },
      { key: "Black", src: '/BLACK/ETB4003BLACK.png', label: "ETB4-003" },
      { key: "Black", src: '/BLACK/ETB4004BLACK.png', label: "ETB4-004" },
      { key: "Black", src: '/BLACK/ETB5006BLACK.png', label: "ETB5-006" },
      { key: "Black", src: '/BLACK/ETB5007BLACK.png', label: "ETB5-007" },
      { key: "Black", src: '/BLACK/ETB8005BLACK.png', label: "ETB8-005" },
      { key: "Black", src: '/BLACK/ETB9003BLACK.png', label: "ETB9-003" },
    ],
    Brown: [
      { key: "Brown", src: '/BROWN/ETB2004BROWN.png', label: "ETB2-004" },
      { key: "Brown", src: '/BROWN/ETB3007BROWN.png', label: "ETB3-007" },
      { key: "Brown", src: '/BROWN/ETB5005BROWN.png', label: "ETB5-005" },
      { key: "Brown", src: '/BROWN/ETB6004BROWN.png', label: "ETB6-004" },
      { key: "Brown", src: '/BROWN/ETB7003BROWN.png', label: "ETB7-003" },
      { key: "Brown", src: '/BROWN/ETB9004BROWN.png', label: "ETB9-004" },
    ],
    Bronze: [
      { key: "Bronze", src: '/BRONZE/ETB1005BRONZE.png', label: "ETB1-005" },
      { key: "Bronze", src: '/BRONZE/ETB3006BRONZE.png', label: "ETB3-006" },
    ],
    Grey: [
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
    ],
    White: [
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
    ],

  };

  const renderColorList = (colorList) => (
    <div className={styles.images_and_subtitles} key={colorList[0].key}>
      {colorList.map((item) => (
        <div
          key={item.label}
          className={`${styles.imageContainer} ${selectedMaterial && selectedMaterial.src === item.src ? styles.selectedImage : ''}`}
          onClick={() => handleSelectMaterial(item.src)}
          style={{
            border: selectedMaterial && selectedMaterial.src === item.src ? '2px solid black' : '2px solid transparent',
            padding: selectedMaterial && selectedMaterial.src === item.src ? '5px' : '0', // Add padding if selected
          }}
        >
          <h3 className={styles.images_and_subtitles_color_name}>{item.key}</h3>
          <Image className={styles.image_itself} src={item.src} alt={item.label} width={100} height={100} />
          <p className={styles.selectedImageClass_label}>{item.label}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.materials_page}>
      <div className={`${styles.whole_thing} ${showLeftHalf ? styles.imagevisible : styles.imagehidden}`}>

        <div className={styles.sliding_gallery_component}>
          <div className={styles.imageContainer_titles}><p className={styles.imageContainer_title1}>Image Viewer</p>
            <p className={styles.imageContainer_title2}>Selected Images Will Appear Here</p>
            <p className={styles.imageContainer_title3}>*All Images Owned by Economy Blinds And Shades Inc.</p></div>
          <div className={styles.selectedImageContainer}>
            {selectedMaterial ? (
              <>
                <h3 className={styles.images_and_subtitles_color_name}>{selectedMaterial.label}</h3>
                <div className={`${styles.imageContainer2} ${styles.selectedImage2}`}>
                  <Image
                    className={styles.image_itself1}
                    src={selectedMaterial.src}
                    alt='image'
                    width={100}
                    height={100}
                  />
                </div>
              </>
            ) : (

              <div className={styles.image_and_scroller_wrapper}>
                <div className={`${styles.imageContainer2} ${styles.selectedImage3}`}>
                  <Image
                    width={100}
                    height={100}
                    className={styles.image_itself2}
                    src={FirstImageRender[0].src}
                    alt={FirstImageRender[0].label}

                  />
                </div>
                <div className={styles.scroller}>

                  <span>
                    <Image
                      width={100}
                      height={100}
                      className={styles.chevron_left}
                      alt='chevronright'
                      src={"/chevronright.png"}>
                    </Image>
                  </span>

                  <div className={styles.scroller_image_list}>
                    {FirstImageRender.map((item) => (
                      <Image
                        key={item.label}
                        width={100}
                        height={100}
                        className={styles.scroller_image}
                        src={item.src}
                        alt={item.label}
                      />
                    ))}
                  </div>

                  <span>
                    <Image
                      width={100}
                      height={100}
                      className={styles.chevron_right}
                      alt='chevronright'
                      src={"/chevronright.png"}>
                    </Image>
                  </span>

                </div>
              </div>

            )}
          </div>
        </div>
      </div>
      <div className={styles.selectColorImageCollection}>
        {Object.keys(colorData).map((color) => (
          <div key={color} className={styles[color.toLowerCase()]}>
            <p className={styles.color_section_title}>{color}</p>
            {renderColorList(colorData[color])}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterialsPage;