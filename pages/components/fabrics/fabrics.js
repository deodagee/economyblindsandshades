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
    { key: 'Beige', src: '/BEIGE/ETB1003BEIGE.png', label: 'Beige' },
    { key: 'Black', src: '/BLACK/ETB1006BLACK.png', label: 'Black' },
    { key: 'Bronze', src: '/BRONZE/ETB1005BRONZE.png', label: 'Bronze' },
    { key: 'Brown', src: '/BROWN/ETB2004BROWN.png', label: 'Brown' },
    { key: 'Grey', src: '/GREY/ETB1004GREY.png', label: 'Grey' },
    { key: 'White', src: '/WHITE/ETB2001WHITE.png', label: 'White' },
    // Add more image data as needed
  ];

  const imagesDataBottomRail = [
    { key: 'Beige', src: '/BEIGE/ETB1003BEIGE.png', label: 'Beige' },
    { key: 'Black', src: '/BLACK/ETB1006BLACK.png', label: 'Black' },
    { key: 'Bronze', src: '/BRONZE/ETB1005BRONZE.png', label: 'Bronze' },
    { key: 'Brown', src: '/BROWN/ETB2004BROWN.png', label: 'Brown' },
    { key: 'Grey', src: '/GREY/ETB1004GREY.png', label: 'Grey' },
    { key: 'White', src: '/WHITE/ETB2001WHITE.png', label: 'White' },
    // Add more image data as needed
  ];

  //add color selections to the bom 

  //add head rail colors

  const selectedImageData_Bottomrail = imagesDataHeadRail.find(imageData => imageData.key === selected_head_rail_color);
  const selectedImageData_Headrail = imagesDataBottomRail.find(imageData => imageData.key === selected_bottom_rail_color);

  return (

    <div>

      <div className={styles.select_head_rail_group}>
        <span className={styles.titled_step_combo}>
          <div className={styles.select_cassette_head_rail_long_rectangle}
          >
            <div
              className={styles.select_cassette_head_rail_short_rectangle}
            >
              <Image
                className={styles.iconforselect_cassette_head_rail}
                alt="iconforselectcassetteheaerail"
                width={100}
                height={100}
                src={"/chevronleft.png"}>
              </Image>
              <div className={styles.select_head_rail_group_title}>
                <span className={styles.select_head_rail_group_title_tag}>4.</span>Select Head Rail And Bottom Rail
              </div>
            </div>
          </div>
        </span>

        <div className={styles.select_head_rail_subtitle}> Select Head Rail</div>



        <div className={styles.select_head_rail_option_group}>

          <span className={styles.select_head_rail_option_selection_wrapper}>

            <div className={`${styles.select_cassette_ellipse1} ${active_cassette_round1 === 1 ? styles.active_cassette_round1 : ''}`}
              onClick={() => handleactive_cassette_round1Ellipses(1)}
            ></div>
            <span className={styles.select_head_rail_image_and_tag}>
              <Image alt="image" width={400} height={400} className={styles.cassette_chosen_image} src="/cassette.png" />
              <div className={styles.cassette_header}>Cassette Type</div>
            </span>
          </span>

          <span className={styles.select_head_rail_option_selection_wrapper}>
            <div
              className={`${styles.select_round_ellipse1} ${active_cassette_round1 === 2 ? styles.active_cassette_round1 : ''}`}
              onClick={() => handleactive_cassette_round1Ellipses(2)}
            ></div>
            <span className={styles.select_head_rail_image_and_tag}>
              <Image alt="image" width={400} height={400} className={styles.round_chosen_image} src="/cassetteround.png" />
              <div className={styles.round_header}>Round Type</div>
            </span>
          </span>
        </div>

        <div className={styles.pick_head_rail_color_titles_wrapper}>
          <div className={styles.fabric_types_subtitle}>FABRIC TYPES</div>

          <div className={styles.pick_head_rail_color_subtitle}>Pick Head Rail Color</div>
        </div>











































        <div className={styles.skip_head_section}>

<div>
  {active_skip_head_rail_ellipse ? null : (
    <div className={styles.fabric_list_header} style={{ marginTop: active_skip_head_rail_ellipse ? '-100px' : '0' }}>
      {imagesDataHeadRail.map((imageData) => (
        <div key={imageData.key} className={styles.fabric_list_header_image_and_description}>

          <div className={styles.fabric_list_header_image}>
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
          </div>

          <div className={styles.fabric_list_header_image_description}>
            <div>{imageData.label}</div>
          </div>

        </div>
      ))}
    </div>
  )}
</div>


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
</div>




<div className={styles.skip_bottom_section}>

<div>
  {active_skip_bottom_rail_ellipse ? null : (
    <div className={styles.fabric_list_bottom} style={{ marginTop: active_skip_bottom_rail_ellipse ? '-100px' : '0' }}>
      {imagesDataBottomRail.map((imageData) => (

        <div key={imageData.key} className={styles.fabric_list_bottom_image_and_description}>

          <div className={styles.fabric_list_bottom_image}>
            <Image
              alt="image"
              width={100}
              height={100}
              className={getImageClassNameColorBottomRail(imageData.key)}
              src={imageData.src}
              onClick={() => {
                if (!active_skip_bottom_rail_ellipse) {
                  console.log(`Click handler for ${imageData.key}`);
                  Set_selected_bottom_rail_color(imageData.key);
                }
              }}
              style={{ pointerEvents: active_skip_bottom_rail_ellipse ? 'none' : 'auto' }}
            />
          </div>

          <div className={styles.fabric_list_bottom_image_description}>
            <div>{imageData.label}</div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

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





























        <div className={styles.chosen_cassette_or_chosen_round_wrapper}>


          <div className={styles.select_cassette_bottom_rail_group}>

            <div className={styles.select_cassette_bottom_rail_subtitle}>Select Bottom Rail</div>


            <div className={styles.select_bottom_rail_options}>

              <span className={styles.bottom_rail_option_1}>

                <div
                  className={`${styles.select_cassette_ellipse2} ${active_cassette_round2 === 1 ? styles.active_cassette_round2 : ''}`}
                  onClick={() => handleEllipseClick5(1)}
                ></div>

                <div className={styles.cassette2}>option 1</div>
                <div className={styles.product_price}>$00.00</div>
                <Image alt="image" width={400} height={400} className={styles.cassette_image_2} src="/cassette.png" />
              </span>

              <span className={styles.bottom_rail_option_2}>

                <div
                  className={`${styles.select_round_ellipse2} ${active_cassette_round2 === 2 ? styles.active_cassette_round2 : ''}`}
                  onClick={() => handleEllipseClick5(2)}
                ></div>

                <div className={styles.round2}>option 2</div>
                <div className={styles.product_price_2}>$00.00</div>
                <Image alt="image" width={400} height={400} className={styles.cassette_image3} src="/cassette.png" />
                <Image alt="image" width={400} height={400} className={styles.chosen_headrail_image} src="/cassettesteel.png" />
              </span>

            </div>

          </div>

          <div className={styles.pick_bottom_rail_color_wrapper}>
            <div className={styles.pick_bottom_rail_color}>Pick Bottom Rail Color</div>
            <div className={styles.fabric_types_for_bottom_rail}>FABRIC TYPES</div>
          </div>

        </div>



        <button
          className={styles.next_item4}>
          <div
            style={NextButton4buttonStyle}
            className={styles.next_button4}>See Bill</div>
        </button>
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
