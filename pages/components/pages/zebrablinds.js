// C:\Users\User\economyblindsandshadesjs\pages\components\pages\zebrablinds.js

import styles from '../../../styles/components/pages/zebrablinds.module.css';
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderPiece from "../header.js";
import { useSession } from "next-auth/react";
import FooterPage from "../../../pages/components/footer.js"

const ZebraBlinds = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const threshold = 100;

      const isNearBottom = scrollPosition + windowHeight >= documentHeight - threshold;

      setShowFooter(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const { data: session } = useSession();
  const [productName1, setProductName1] = useState("");
  const [productName2, setProductName2] = useState("");

  const fetchLatestData = async () => {
    try {
      const response = await fetch("/api/getLatestData");
      const result = await response.json();
      const latestData = result.data;

      if (latestData) {
        setProductName1(latestData.productName1 || "");
        setProductName2(latestData.productName2 || "");
      }
    } catch (error) {
      console.error("Error fetching latest data:", error);
    }
  };

  useEffect(() => {
    fetchLatestData();
  }, []);


  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////



  const [active_inside_outside_ellipse, setActiveInsideOutsideEllipse] = useState(1);
  const [inside_mount_group_visible, setInsideMountGroupVisible] = useState(true);
  const [outside_mount_group_visible, setOutsideMountGroupVisible] = useState(false);
  const [InsideOrOutsideRenderingContent, setInsideOrOutsideRenderingContent] = useState('Inside Mount');

  const handleClickInside_And_Outside_Ellipses = (ellipseNumber) => {

    if (ellipseNumber === 1) {
      setActiveInsideOutsideEllipse(ellipseNumber);
      setInsideOrOutsideRenderingContent('Inside Mount');
      setInsideMountGroupVisible(true);
      setOutsideMountGroupVisible(false);

    } else if (ellipseNumber === 2) {
      setActiveInsideOutsideEllipse(ellipseNumber);
      setInsideOrOutsideRenderingContent('Outside Mount');
      setInsideMountGroupVisible(false);
      setOutsideMountGroupVisible(true);
    }
  };

  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////
  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////

  const [active_wand_cordless_motorized, setactive_wand_cordless_motorized] = useState(null);
  const [active_wand_cordless_motorizedRenderingContent, setactive_wand_cordless_motorizedRenderingContent] = useState('');
  const [active_wand_left_choice, setactive_wand_left_choice] = useState('');
  const [active_wand_right_choice, setactive_wand_right_choice] = useState('');
  const [active_wand_left_choice_rendering_content, setactive_wand_left_choice_rendering_content] = useState("Selected Wand Side:");
  const [active_wand_right_choice_rendering_content, setactive_wand_right_choice_rendering_content] = useState(null);
  const [showImageright, setShowImageright] = useState(false);
  const [showImageleft, setShowImageleft] = useState(true);

  const handleLiftFeatureEllipsess = (ellipseNumber) => {
    // Reset states based on the clicked ellipse number
    if (ellipseNumber === 1) {
      setactive_wand_cordless_motorized(1);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('wand');
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(null);

    } else if (ellipseNumber === 2) {
      setactive_wand_cordless_motorized(2);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('cordless');
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(false);

    } else if (ellipseNumber === 3) {
      setactive_wand_cordless_motorized(3);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('motorized');
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(false);

    }
    else if (ellipseNumber === 4) {
      setactive_wand_cordless_motorized(null);
      setactive_wand_left_choice(4);
      setactive_wand_cordless_motorized(1);
      setactive_wand_right_choice(null);
      setactive_wand_left_choice_rendering_content('Left wand choice');
      setactive_wand_cordless_motorizedRenderingContent('wand');
      setactive_wand_right_choice_rendering_content(false);

      setShowImageleft(true);
      setShowImageright(false);

    }
    else if (ellipseNumber === 5) {
      setactive_wand_cordless_motorized(null);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(5);
      setactive_wand_cordless_motorized(1);
      setactive_wand_left_choice_rendering_content(false);
      setactive_wand_right_choice_rendering_content('Right wand choice');
      setactive_wand_cordless_motorizedRenderingContent('wand');

      setShowImageleft(false);
      setShowImageright(true);

    }
    else {
      // Reset all states if any other ellipse is selected
      setactive_wand_cordless_motorized(null);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent(null);
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(null);
    }
  };










  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////
  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////

  const [showLeftHalf, setShowLeftHalf] = useState(true);


  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////
  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////


  const [active_skip_head_rail_ellipse, Set_active_skip_head_rail_ellipse] = useState(false);
  const [active_skip_bottom_rail_ellipse, Set_active_skip_bottom_rail_ellipse] = useState(null);
  const [skip_head_rail_image_placeholder, setskip_head_rail_image_placeholder] = useState(false);
  const [skip_bottom_rail_image_placeholder, setskip_bottom_rail_image_placeholder] = useState(false);
  const [steelMaterialChosen, setSteelMaterialChosen] = useState(null);



  const handleEllipseClickSkipHeadRailAndBotomRailColor = () => {
    console.log('Ellipse Clicked');
    Set_active_skip_head_rail_ellipse((prevActive) => !prevActive);
    setskip_head_rail_image_placeholder((prevActive) => !prevActive);
    Set_active_skip_bottom_rail_ellipse((prevActive) => !prevActive);
    setskip_bottom_rail_image_placeholder((prevActive) => !prevActive);
    setSteelMaterialChosen(true);

  };




  const [roomDarkeningContent, setRoomDarkeningContent] = useState('');

  useEffect(() => {
    const roomDarkeningElement = document.querySelector(`.${styles.room_darkening_element}`);
    if (roomDarkeningElement) {
      setRoomDarkeningContent(roomDarkeningElement.textContent || roomDarkeningElement.innerText);
    }
  }, []);

  const FirstImageRender = [
    { key: "rfblinds", src: '/slidingcomponent2.png', label: "rfblinds" },
  ];

  const colorData = {
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
    Black: [
      { key: "Black", src: '/BLACK/ETB1006BLACK.png', label: "ETB1-006" },
      { key: "Black", src: '/BLACK/ETB4003BLACK.png', label: "ETB4-003" },
      { key: "Black", src: '/BLACK/ETB4004BLACK.png', label: "ETB4-004" },
      { key: "Black", src: '/BLACK/ETB5006BLACK.png', label: "ETB5-006" },
      { key: "Black", src: '/BLACK/ETB5007BLACK.png', label: "ETB5-007" },
      { key: "Black", src: '/BLACK/ETB8005BLACK.png', label: "ETB8-005" },
      { key: "Black", src: '/BLACK/ETB9003BLACK.png', label: "ETB9-003" },
    ],
    Bronze: [
      { key: "Bronze", src: '/BRONZE/ETB1005BRONZE.png', label: "ETB1-005" },
      { key: "Bronze", src: '/BRONZE/ETB3006BRONZE.png', label: "ETB3-006" },
    ],
    Brown: [
      { key: "Brown", src: '/BROWN/ETB2004BROWN.png', label: "ETB2-004" },
      { key: "Brown", src: '/BROWN/ETB3007BROWN.png', label: "ETB3-007" },
      { key: "Brown", src: '/BROWN/ETB5005BROWN.png', label: "ETB5-005" },
      { key: "Brown", src: '/BROWN/ETB6004BROWN.png', label: "ETB6-004" },
      { key: "Brown", src: '/BROWN/ETB7003BROWN.png', label: "ETB7-003" },
      { key: "Brown", src: '/BROWN/ETB9004BROWN.png', label: "ETB9-004" },
    ],

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
  };



  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////
  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////


  const Top_Head_Rail_Choices_Materialskey1 = {

    TopRailList1: [
      { key1: 'whitetag1', src: '/Fabrics/RoundedWithFabric/WhiteRoundedWithFabric.jpg', label: 'White - Rounded With Fabric' },
      { key1: 'greytag1', src: '/Fabrics/RoundedWithFabric/GreyRoundedWithFabric.jpg', label: 'Grey - Rounded With Fabric' },
      { key1: 'blacktag1', src: '/Fabrics/RoundedWithFabric/BlackRoundedWithFabric.jpg', label: 'Black - Rounded With Fabric' },
      { key1: 'browntag1', src: '/Fabrics/RoundedWithFabric/BrownRoundedWithFabric.jpg', label: 'Brown - Rounded With Fabric' },
      { key1: 'beigetag1', src: '/Fabrics/RoundedWithFabric/BeigeRoundedWithFabric.jpg', label: 'Beige - Rounded With Fabric' },
    ],
  };

  const Top_Head_Rail_Choices_Materialskey2 = {

    TopRailList2: [
      { key2: 'whitetag2', src: '/Ovals/SquareTopCassetteAluminum/WhiteSquareTopCassetteAluminum.jpg', label: 'White - Aluminum ' },
      { key2: 'greytag2', src: '/Ovals/SquareTopCassetteAluminum/GreySquareTopCassetteAluminum.jpg', label: 'Grey - Aluminum ' },
      { key2: 'blacktag2', src: '/Ovals/SquareTopCassetteAluminum/BlackSquareTopCassetteAluminum.jpg', label: 'Black - Aluminum ' },
      { key2: 'browntag2', src: '/Ovals/SquareTopCassetteAluminum/BrownSquareTopCassetteAluminum.jpg', label: 'Brown - Aluminum ' },
      { key2: 'beigetag2', src: '/Ovals/SquareTopCassetteAluminum/BeigeSquareTopCassetteAluminum.jpg', label: 'Beige - Aluminum ' },
    ],
  };


  const Bottom_Bottom_Rail_Choices_Materials = {

    BottomRailList: [

      { key1: 'whitetag1', key2: 'whitetag2', src: '/Fabrics/BottomRailSquareWithFabricInsert/WhiteBottomRailSquareWithFabricInsert.jpg', label: 'White - Bottom Square With Fabric' },
      { key1: 'greytag1', key2: 'greytag2', src: '/Fabrics/BottomRailSquareWithFabricInsert/GreyBottomRailSquareWithFabricInsert.jpg', label: 'Grey - Bottom Square With Fabric' },
      { key1: 'blacktag1', key2: 'blacktag2', src: '/Fabrics/BottomRailSquareWithFabricInsert/BlackBottomRailSquareWithFabricInsert.jpg', label: 'Black - Bottom Square With Fabric' },
      { key1: 'browntag1', key2: 'browntag2', src: '/Fabrics/BottomRailSquareWithFabricInsert/BrownBottomRailSquareWithFabricInsert.jpg', label: 'Brown - Bottom Square With Fabric' },
      { key1: 'beigetag1', key2: 'beigetag2', src: '/Fabrics/BottomRailSquareWithFabricInsert/BeigeBottomRailSquareWithFabricInsert.jpg', label: 'Beige - Bottom Square With Fabric' },

      { key1: 'whitetag1', key2: 'whitetag2', src: '/Ovals/OvalBottomRails/WhiteBottomOvalRail.jpg', label: 'White - Bottom Oval ' },
      { key1: 'greytag1', key2: 'greytag2', src: '/Ovals/OvalBottomRails/GreyBottomOvalRail.jpg', label: 'Grey - Bottom Oval ' },
      { key1: 'blacktag1', key2: 'blacktag2', src: '/Ovals/OvalBottomRails/BlackBottomOvalRail.jpg', label: 'Black - Bottom Oval ' },
      { key1: 'browntag1', key2: 'browntag2', src: '/Ovals/OvalBottomRails/BrownBottomOvalRail.jpg', label: 'Brown - Bottom Oval ' },
      { key1: 'beigetag1', key2: 'beigetag2', src: '/Ovals/OvalBottomRails/BeigeBottomOvalRail.jpg', label: 'Beige - Bottom Oval ' },
    ],

  }


  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [firstImage_div, setfirstImage_div] = useState(true);

  const [selectedFileNameMaterials, setselectedFileNameMaterials] = useState(null);

  const handleSelectMaterial = (key, src, label) => {
    setfirstImage_div(false);
    setSteelMaterialChosen(false);

    console.log(`Clicked on file: ${src}`);
    setSelectedMaterial({ key, src, label });
    setselectedFileNameMaterials(`${key} - ${label}`); // Combine key and label
  };

  const renderColorList = (colorList2) => (

    <>
      <div className={styles.images_and_subtitles} key={colorList2[0].key}>

        {colorList2.map((item) => (

          <div
            key={item.label}
            className={`${styles.materials_image_container} ${selectedMaterial && selectedMaterial.src === item.src ? styles.selectedImage : ''}`}
            onClick={() => handleSelectMaterial(item.key, item.src, item.label)} // Pass key, src, and label

          >
            <h3 className={styles.images_and_subtitles_color_name}>{item.key}</h3>
            <Image className={styles.materials_image_container_image_itself} src={item.src} alt={item.label} width={100} height={100} />
            <p className={styles.selectedImageClass_label}>{item.label}</p>
          </div>

        ))}

      </div>
    </>
  );


  const [selectedImagesTop, setSelectedImagesTop] = useState([]);
  const [selectedImagesBottom, setSelectedImagesBottom] = useState([]);
  const [selectedRailType, setSelectedRailType] = useState(null);
  const [clickedImageKeyTop, setClickedImageKeyTop] = useState(null);
  const [clickedImageKeyBottom, setClickedImageKeyBottom] = useState(null);


  const handleBottomImageClick = (key2) => {
    setfirstImage_div(false);
    setSelectedMaterial(false);
    setSteelMaterialChosen(false);
    setSelectedRailType('bottom');
  
    const matchingBottomImages = Bottom_Bottom_Rail_Choices_Materials.BottomRailList.filter(image => image.key2 === key2);
  
    if (matchingBottomImages && matchingBottomImages.length > 0) {
      // Sort matchingBottomImages to prioritize the first image
      matchingBottomImages.sort((a, b) => a.key2.localeCompare(b.key2));
      const selectedImage = matchingBottomImages[0];
  
      // Update selectedImagesBottom
      setSelectedImagesBottom(selectedImage ? [selectedImage.key2] : []);
    }
  };
  

  const handleImageClickImagesTop1 = (key1) => {
    setfirstImage_div(false);
    setSelectedMaterial(false);
    setSteelMaterialChosen(false);
    setSelectedRailType('top');
  
    const matchingImage1 = Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(image => image.key1 === key1);
  
    if (matchingImage1) {
      setSelectedImagesTop(key1 === clickedImageKeyTop ? [] : [key1]);
  
      const matchingBottomImages = Bottom_Bottom_Rail_Choices_Materials.BottomRailList.filter(image => image.key1 === key1);
  
      if (matchingBottomImages && matchingBottomImages.length > 0) {
        // Sort matchingBottomImages to prioritize the first image
        matchingBottomImages.sort((a, b) => a.key2.localeCompare(b.key2));
        const bottomKeys = [matchingBottomImages[0].key2]; // Take only the first image
        setSelectedImagesBottom(key1 === selectedImagesBottom ? [] : bottomKeys);
      }
    }
  };

  
  const handleImageClickImagesTop2 = (key2) => {
    setfirstImage_div(false);
    setSelectedMaterial(false);
    setSteelMaterialChosen(false);
    setSelectedRailType('top');
  
    setSelectedImagesTop(key2 === clickedImageKeyTop ? [] : [key2]);
  
    const matchingBottomImages = Bottom_Bottom_Rail_Choices_Materials.BottomRailList.filter(image => image.key2 === key2);
  
    if (matchingBottomImages && matchingBottomImages.length > 0) {
      // Sort matchingBottomImages to prioritize the first image
      matchingBottomImages.sort((a, b) => a.key2.localeCompare(b.key2));
      const bottomKeys = [matchingBottomImages[0].key2]; // Take only the first image
      setSelectedImagesBottom(key2 === selectedImagesBottom ? [] : bottomKeys);
    }
  };
  

  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////
  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////


  const [selectedRulerNumberInchHEIGHT, setselectedRulerNumberInchHEIGHT] = useState(null);
  const [selectedRulerNumberFractionHEIGHT, setselectedRulerNumberFractionHEIGHT] = useState(null);
  const [selectedRulerNumberInchWIDTH, setselectedRulerNumberInchWIDTH] = useState(null);
  const [selectedRulerNumberFractionWIDTH, setselectedRulerNumberFractionWIDTH] = useState(null);

  const [selectedInchVisiblehEIGHT, setSelectedInchVisibleHeight] = useState(true);
  const [selectedInchesHeight, setselectedInchesHeight] = useState(null);

  const [selectedFractionVisibleWidth, setselectedFractionVisibleWidth] = useState(true);
  const [selectedFractionsWidth, setselectedFractionsWidth] = useState(null);

  const [selectedFractionVisibleHeight, setSelectedFractionVisibleHeight] = useState(true);
  const [selectedFractionsHeight, setselectedFractionsHeight] = useState(null);

  const [selectedInchesVisibleWidth, setselectedInchesVisibleWidth] = useState(true);
  const [selectedInchesWidth, setselectedInchesWidth] = useState(null);


  const [selectedFractionWIDTH, setselectedFractionWIDTH] = useState(null);
  const [selectedFractionHEIGHT, setselectedFractionHEIGHT] = useState(null);

  const [selectedInchWIDTH, setselectedInchWIDTH] = useState(null);
  const [selectedInchHEIGHT, setselectedInchHEIGHT] = useState(null);


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const scrollableDivRef = useRef();

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWIDTH = (inchesWidth) => {
    setselectedInchesWidth(inchesWidth);
    setselectedInchesVisibleWidth(false);
    setselectedInchWIDTH(inchesWidth);

    const scrollableDiv = scrollableDivRef.current;

    setTimeout(() => {
      const selectedInchesDiv = scrollableDiv.querySelector(`.${styles.selectedInch}`);

      if (selectedInchesDiv) {
        const selectedInchesDivRect = selectedInchesDiv.getBoundingClientRect();
        const scrollPosition =
          selectedInchesDivRect.top +
          scrollableDiv.scrollTop -
          (scrollableDiv.offsetHeight - selectedInchesDivRect.height) / 2;

        scrollableDiv.scrollTop = scrollPosition;
      } else {
        console.warn("Selected inch div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickInchessWhenClickedWidth = () => {
    setselectedInchesVisibleWidth((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////



  const handleScrolledFractionsWhenClickedWIDTH = (fractionWidth) => {
    setselectedFractionsWidth(fractionWidth);
    setselectedFractionVisibleWidth(false);
    setselectedFractionWIDTH(fractionWidth);

    const scrollableDiv = scrollableDivRef.current;

    setTimeout(() => {
      const selectedFractionDiv = scrollableDiv.querySelector(`.${styles.selectedFraction}`);

      if (selectedFractionDiv) {
        const selectedFractionDivRect = selectedFractionDiv.getBoundingClientRect();
        const scrollPosition =
          selectedFractionDivRect.top +
          scrollableDiv.scrollTop -
          (scrollableDiv.offsetHeight - selectedFractionDivRect.height) / 2;

        scrollableDiv.scrollTop = scrollPosition;
      } else {
        console.warn("Selected fraction div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickFractionsWhenClickedWidth = () => {
    setselectedFractionVisibleWidth((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedHEIGHT = (inchHEIGHT) => {
    setselectedInchesHeight(inchHEIGHT);
    setSelectedInchVisibleHeight(false);
    setselectedInchHEIGHT(inchHEIGHT);

    const scrollableDiv = scrollableDivRef.current;

    setTimeout(() => {
      const selectedInchesDiv = scrollableDiv.querySelector(`.${styles.selectedInch}`);

      if (selectedInchesDiv) {
        const selectedInchesDivRect = selectedInchesDiv.getBoundingClientRect();
        const scrollPosition =
          selectedInchesDivRect.top +
          scrollableDiv.scrollTop -
          (scrollableDiv.offsetHeight - selectedInchesDivRect.height) / 2;

        scrollableDiv.scrollTop = scrollPosition;
      } else {
        console.warn("Selected inch  div not found in the scrollable div");
      }
    }, 0);
  };

  const handleNewSpanClickInchesWhenClickedHEIGHT = () => {
    setSelectedInchVisibleHeight((prev) => !prev);
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledFractionsWhenClickedHEIGHT = (fractionWidth) => {
    setselectedFractionsHeight(fractionWidth);
    setSelectedFractionVisibleHeight(false);
    setselectedFractionHEIGHT(fractionWidth);

    const scrollableDiv = scrollableDivRef.current;

    setTimeout(() => {
      const selectedFractionDiv = scrollableDiv.querySelector(`.${styles.selectedFraction}`);

      if (selectedFractionDiv) {
        const selectedFractionDivRect = selectedFractionDiv.getBoundingClientRect();
        const scrollPosition =
          selectedFractionDivRect.top +
          scrollableDiv.scrollTop -
          (scrollableDiv.offsetHeight - selectedFractionDivRect.height) / 2;

        scrollableDiv.scrollTop = scrollPosition;
      } else {
        console.warn("Selected fraction div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickFractionsWhenClickedHEIGHT = () => {
    setSelectedFractionVisibleHeight((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleSelectedInchAndMatchToScrollerWIDTH = (rulerNumberWidthAndHeightInsideMount) => {
    setselectedRulerNumberInchWIDTH(rulerNumberWidthAndHeightInsideMount);
  };

  const handleSelectedFractionhAndMatchToScrollerWIDTH = (rulerNumberWidthAndHeightInsideMount) => {
    setselectedRulerNumberFractionWIDTH(rulerNumberWidthAndHeightInsideMount);
  };

  const handleSelectedInchAndMatchToScrollerHEIGHT = (rulerNumberWidthAndHeightInsideMount) => {
    setselectedRulerNumberInchHEIGHT(rulerNumberWidthAndHeightInsideMount);
  };

  const handleSelectedFractionhAndMatchToScrollerHEIGHT = (rulerNumberWidthAndHeightInsideMount) => {
    setselectedRulerNumberFractionHEIGHT(rulerNumberWidthAndHeightInsideMount);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const [futureDate, setFutureDate] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    currentDate.setUTCHours(currentDate.getUTCHours() - 5);

    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 14);

    const formattedDate = futureDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    setFutureDate(formattedDate);
  },
    []);


  const [futureDate2, setfutureDate2] = useState(null);

  useEffect(() => {
    const currentDate2 = new Date();
    currentDate2.setUTCHours(currentDate2.getUTCHours() - 5);

    const futureDate2 = new Date(currentDate2);
    futureDate2.setDate(currentDate2.getDate() + 21);

    const formattedDate2 = futureDate2.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    setfutureDate2(formattedDate2);
  },

    []);

  return (

    <>
      <div className={styles.page}>
        <span className={styles.header_piece}>
          <HeaderPiece></HeaderPiece>
        </span>

        <span className={styles.page_wrapper}>

          <ol className={`${styles.left_half_of_page} ${showFooter ? styles.scaleDown : ''}`}>
            <div className={`${styles.left_half_of_page_wrapper} ${showLeftHalf ? styles.imagevisible : styles.imagehidden}`}>

              <div className={styles.sliding_gallery_component}>

                <div className={styles.imageContainer_titles}><p className={styles.imageContainer_title1}>Image Viewer</p>
                  <p className={styles.imageContainer_title2}>Selected Images Will Appear Here</p>
                  <p className={styles.imageContainer_title3}>*All Images Owned by Economy Blinds And Shades Inc.</p>
                </div>

                <div className={styles.selectedImageContainer}>
                  {firstImage_div && (
                    <div className={styles.left_imageContainer_wrapper}>

                      <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
                        <Image
                          width={200}
                          height={200}
                          className={styles.left_first_image_render}
                          src="/rfblinds.jpg"
                          alt="Default Image"
                        />
                        <h3 className={styles.left_imageContainer_image_itself1_label}>Welcome</h3>
                      </div>
                    </div>
                  )}

                  {selectedMaterial ? (
                    <>
                      <div className={styles.left_imageContainer_wrapper}>
                        <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
                          <Image
                            className={styles.left_first_image_render}
                            src={selectedMaterial.src}
                            alt='image'
                            width={100}
                            height={100}
                          />
                        </div>
                        <h3 className={styles.left_imageContainer_image_itself1_label}>{selectedMaterial.label}</h3>
                      </div>
                    </>
                  ) : (
                    <>
                      {selectedImagesTop?.length > 0 && (
                        <div className={styles.left_imageContainer_wrapper}>
                          <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
                            <span className={styles.left_imageContainer_image_itself1_label}>
                              Top Rail
                            </span>
                            <Image
                              width={200}
                              height={200}
                              className={styles.left_first_image_render}
                              src={
                                (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key1 === selectedImagesTop[0]) ||
                                  Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key2 === selectedImagesTop[0])
                                )?.src
                              }
                              alt={
                                (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key === selectedImagesTop[0]) ||
                                  Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key2 === selectedImagesTop[0])
                                )?.label
                              }
                            />
                          </div>
                        </div>
                      )}

                      <div>
                        {selectedImagesBottom?.length > 0 && (
                          <div className={styles.left_imageContainer_wrapper}>
                            <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
                              <span className={styles.left_imageContainer_image_itself1_label}>
                                Bottom Rail
                              </span>
                              {selectedImagesBottom.map((selectedKey, index) => (
                                <div key={index}>
                                  <Image
                                    width={200}
                                    height={200}
                                    className={styles.left_first_image_render}
                                    src={
                                      Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key2 === selectedKey)?.src
                                    }
                                    alt={
                                      Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key2 === selectedKey)?.label
                                    }
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                    </>
                  )}
                </div>
              </div>
            </div>
          </ol>

          <ol className={styles.right_half}>

            <div className={styles.top_title_area}>
              <span>
                <h1 className={styles.product_title_styles}>
                  {productName1}
                </h1>
                <h1 className={styles.product_lightening_styles}>
                  {productName2}
                </h1>
              </span>
            </div>

            <div className={styles.star_group}>
              <Image alt="star" width={100} height={100} className={styles.star_6} src="/star.png" />
              <Image alt="star" width={100} height={100} className={styles.star_7} src="/star.png" />
              <Image alt="star" width={100} height={100} className={styles.star_8} src="/star.png" />
              <Image alt="star" width={100} height={100} className={styles.star_9} src="/star.png" />
              <Image alt="star" width={100} height={100} className={styles.star_10} src="/star.png" />
            </div>




            <div
              className={styles.a_distinctive_look_that}
            >
              A distinctive look that makes a statement, this revolutionary sheer shade
              adds personality to any room. These zebra shades are made with two pieces
              of fabric, which both have alternating panels/bands:
            </div>


            <div className={styles.top_divider_line}></div>

            <div className={styles.inside_mount_and_outside_mount_whole_wrapper}>

              <span className={styles.inside_mount_and_outside_mount_group_titles_wrapper}>
                <div className={styles.select_mount_type_long_rectangle}
                >
                  <div className={styles.select_mount_type_short_rectangle}>
                    <Image
                      className={styles.iconforselect_mount_type}
                      alt="iconforselectcolor"
                      width={100}
                      height={100}
                      src={"/chevronleft.png"}>
                    </Image>
                    <div className={styles.select_mount_type_group_title}>
                      <span className={styles.select_mount_type_group_title_tag}>1</span>
                      Choose Your Mount Type</div>
                  </div>
                </div>
                <div className={styles.ellipse_and_type}>
                  <div
                    className={`${styles.inside_mount_ellipse} ${active_inside_outside_ellipse === 1 ? styles.active_inside_outside_ellipse : ''}`}
                    onClick={() => handleClickInside_And_Outside_Ellipses(1)}
                  >
                  </div>
                  <div className={styles.inside_mount_choice}>Inside Mount</div>

                  <div
                    className={`${styles.outside_mount_ellipse} ${active_inside_outside_ellipse === 2 ? styles.active_inside_outside_ellipse : ''}`}
                    onClick={() => handleClickInside_And_Outside_Ellipses(2)}
                  >
                  </div>
                  <div className={styles.outside_mount_choice}>Outside Mount</div>
                </div>

              </span>



              <div className={styles.inside_mount_group_wrapper}>

                <div className={`${styles.inside_mount_group} ${inside_mount_group_visible ? styles.visible_inside_mount : styles.invisible_inside_mount}`}>

                  <span className={styles.first_chosen_inside_mount_selection_wrapper}>
                    <Image
                      alt="first chosen image"
                      width={500}
                      src={"/insidemountimage.png"}
                      height={500}
                      className={styles.first_chosen_inside_mount_selection}>

                    </Image>
                  </span>

                  <span className={styles.left_right_inside_mount}>


                    <span className={styles.left_inside_mount}>

                      <div className={styles.inside_mount_group_left_side}>

                        <span className={styles.inside_mount_measurement_instructions_wrapper}>
                          <div className={styles.inside_mount_measurement_instructions}>
                            <p className={styles.measurement_instructions_title_inside_mount}>
                              Measurement Instructions:
                            </p>
                          </div>

                          <div
                            className={styles.step_1_inside_mount}
                          >
                            <p className={styles.step_tag}> Step 1:</p>
                            <span className={styles.step_tag_description_wrapper}>
                              <p className={styles.step_tag_description}>
                                Depth Of Window Frame Ledge Must Have 3”. (As Shown In Below Picture Green Lines)
                                (If You Do Not Have 3” Ledge Follow Outside Mount Process).
                              </p>
                            </span>
                          </div>

                          <div
                            className={styles.step_2_inside_mount}>
                            <p className={styles.step_tag}>  Step 2:</p>
                            <span className={styles.step_tag_description_wrapper}>
                              <p className={styles.step_tag_description}>
                                Horizontal Direction (Width) Measure Inside Window Frame In 3 Places Top/Middle//Bottom
                                (As Shown In Below Picture Orange Lines) The Smallest Of The 3 Measurements Is The Number You Will Input For Size On Width.
                              </p>
                            </span>
                          </div>


                          <div
                            className={styles.step_3_inside_mount}
                          >
                            <p className={styles.step_tag}> Step 3: </p>
                            <span className={styles.step_tag_description_wrapper}>
                              <p className={styles.step_tag_description}>
                                Vertical Direction (Height) Measure Inside Window Frame Centre.
                                (As Shown In Below Picture Purple Lines) This Number You Will Input For Size On Height.
                              </p>
                            </span>

                          </div>
                        </span>
                      </div>
                    </span>


                    <span className={styles.right_inside_mount}>
                      <div className={styles.inside_mount_group_right_side}>
                        <Image alt="image" width={400} height={400} className={styles.inside_mount_image} src="/insidemount.png" />
                      </div>
                    </span>
                  </span>



                  <div className={styles.enter_size_inside_mount_group}>
                    <div>
                      <div className={styles.step_1_wrapper}>

                        <div className={styles.qty_group}>
                          <div className={styles.qty_group_part1}>
                            <div className={styles.quantity_title}>QUANTITY</div>
                            <div className={styles.quantity_rectangle_and_numbers}>

                              <div className={styles.quantity_rectangle}>
                                <div className={styles.qty}>QTY</div>
                                <div className={styles.qty_number}>1</div>
                              </div>

                              <div>
                                <span>
                                  <div className={styles.quantity_is_always_1_wrapper}>
                                    <div className={styles.quantity_is_always_1}>Quantity is always 1</div>
                                  </div>

                                </span>
                              </div>
                            </div>
                          </div>
                          <div className={styles.qty_group_part2}>
                            <div className={styles.quantity_is_always_1_note}>Not all Windows are identical in size – Each window will need to be measured & entered individually to avoid errors.</div>
                          </div>
                        </div>

                        <div className={styles.bottom_portion_ruler_and_stuff_wrapper}>
                          <div className={styles.select_your_width_and_height}>Select Your Width And Height. Double Check To Make Sure the Measurments are correct for the Width And the Height</div>


                          <div className={styles.bottom_portion_ruler_and_stuff}>

                            <div className={styles.inches_and_fractions_and_ruler_group}>
                              <div className={styles.width_inside_mount_sub_title}>
                                CHOOSE WIDTH:
                              </div>
                              <div className={styles.enter_width_inside_mount_rectangle_1}>

                                <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                  <div className={styles.enter_inches_group_wrapper}>
                                    <div className={styles.inches_subtitle}
                                    >
                                      <p>INCHES</p>
                                    </div>

                                    <div className={styles.inches_scroller_wrapper}>
                                      <div ref={scrollableDivRef} className={styles.inches_scroller_div}>
                                        {selectedInchesVisibleWidth ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",].map((inchesWidth, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledInchesWhenClickedWIDTH(inchesWidth)}
                                                className={selectedInchesWidth === inchesWidth ? styles.selectedInch : ''}
                                              >
                                                {inchesWidth}
                                              </div>
                                            ))}
                                          </span>
                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickInchessWhenClickedWidth}>
                                            {selectedInchesWidth}

                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  <div className={styles.enter_fractions_group_wrapper}>
                                    <div className={styles.fractions_subtitle}
                                    >
                                      <p>FRACTIONS</p>
                                    </div>
                                    <div className={styles.fractions_scroller_wrapper}>

                                      <div ref={scrollableDivRef} className={styles.fractions_scroller_div}>
                                        {selectedFractionVisibleWidth ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionWidth, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledFractionsWhenClickedWIDTH(fractionWidth)}
                                                className={selectedFractionsWidth === fractionWidth ? styles.selectedFraction : ''}
                                              >
                                                {fractionWidth}
                                              </div>
                                            ))}
                                          </span>

                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedWidth}>
                                            {selectedFractionsWidth}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>


                                <div className={styles.ruler_div}>

                                  < span className={styles.enter_size_boat_span} >
                                    <div className={styles.ruler_for_boat_wrapper}>

                                      <div className={styles.ruler_for_boat}>
                                        <div className={styles.ruler_numbers_and_label}>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_0}></span>

                                            <div className={styles.ruler_line_number_inches}>
                                              {[selectedInchWIDTH || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedInchAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedInchWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_3}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_2}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["3/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_3}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/2"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["5/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_3}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["3/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_2}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["7/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>


                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_0}></span>
                                            <div className={styles.ruler_line_number_inches}>
                                              {[selectedInchWIDTH].map((selectedInch, index) => {
                                                const yourArrayOfNumbers = ["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
                                                const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInch) + 1;
                                                const nextNumber = yourArrayOfNumbers[nextNumberIndex];

                                                return (

                                                  <>
                                                    <div className={styles.selected_next_number}>
                                                      <div
                                                        key={index}
                                                        onClick={() => handleSelectedInchAndMatchToScrollerWIDTH(nextNumber)}
                                                        className={selectedInchWIDTH === nextNumber ? styles.selected_next_number : ''}
                                                      >
                                                        {nextNumber}
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              })}
                                            </div>
                                          </span>


                                        </div>


                                        <div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>

                                <div className={styles.selected_width_answer_top}>
                                  Window Width: {selectedInchWIDTH} - {selectedFractionWIDTH}
                                  {selectedFractionWIDTH && " Inches Long"}
                                </div>


                              </div>
                            </div>



                            <div className={styles.inches_and_fractions_and_ruler_group}>
                              <div className={styles.width_inside_mount_sub_title}>
                                CHOOSE HEIGHT:
                              </div>
                              <div className={styles.enter_width_inside_mount_rectangle_1}>

                                <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                  <div className={styles.enter_inches_group_wrapper}>
                                    <div className={styles.inches_subtitle}
                                    >
                                      <p>INCHES</p>
                                    </div>

                                    <div className={styles.inches_scroller_wrapper}>
                                      <div ref={scrollableDivRef} className={styles.inches_scroller_div}>
                                        {selectedInchVisiblehEIGHT ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"].map((inchHEIGHT, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledInchesWhenClickedHEIGHT(inchHEIGHT)}
                                                className={selectedInchesHeight === inchHEIGHT ? styles.selectedInch : ''}
                                              >
                                                {inchHEIGHT}
                                              </div>
                                            ))}
                                          </span>
                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickInchesWhenClickedHEIGHT}>
                                            {selectedInchesHeight}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  <div className={styles.enter_fractions_group_wrapper}>
                                    <div className={styles.fractions_subtitle}
                                    >
                                      <p>FRACTIONS</p>
                                    </div>
                                    <div className={styles.fractions_scroller_wrapper}>
                                      <div ref={scrollableDivRef} className={styles.fractions_scroller_div}>
                                        {selectedFractionVisibleHeight ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionHeight, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledFractionsWhenClickedHEIGHT(fractionHeight)}
                                                className={selectedFractionsHeight === fractionHeight ? styles.selectedFraction : ''}
                                              >
                                                {fractionHeight}
                                              </div>
                                            ))}
                                          </span>
                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedHEIGHT}>
                                            {selectedFractionsHeight}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>


                                <div className={styles.ruler_div}>

                                  <span className={styles.enter_size_boat_span}>

                                    <div className={styles.ruler_for_boat_wrapper}>

                                      <div className={styles.ruler_for_boat}>

                                        <div className={styles.ruler_numbers_and_label}>



                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_0}></span>

                                            <div className={styles.ruler_line_number_inches}>
                                              {[selectedInchHEIGHT || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedInchAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedInchHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>


                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["1/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_3}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["1/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}
                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["3/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_3}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["1/2"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}
                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["5/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_3}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["3/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}
                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["7/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {[].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_0}></span>
                                            <div className={styles.ruler_line_number_fractions}>
                                              {[selectedInchHEIGHT].map((selectedInch, index) => {
                                                const yourArrayOfNumbers = ["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
                                                const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInch) + 1;
                                                const nextNumber = yourArrayOfNumbers[nextNumberIndex];

                                                return (

                                                  <>
                                                    <div className={styles.selected_next_number}>
                                                      <div
                                                        key={index}
                                                        onClick={() => handleSelectedInchAndMatchToScrollerHEIGHT(nextNumber)}
                                                        className={selectedInchHEIGHT === nextNumber ? styles.selected_next_number : ''}
                                                      >
                                                        {nextNumber}
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              })}
                                            </div>
                                          </span>

                                        </div>
                                        <div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>

                                <div className={styles.selected_width_answer_top}>
                                  Window Height: {selectedInchHEIGHT} - {selectedFractionHEIGHT}
                                  {selectedFractionHEIGHT && " Inches High"}
                                </div>

                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.outside_mount_group_wrapper}>
                <div className={`${styles.outside_mount_group} ${outside_mount_group_visible ? styles.visible_outside_mount : styles.invisible_outside_mount}`}>
                  <span className={styles.first_chosen_outside_mount_selection_wrapper}>

                    <Image
                      alt="first chosen image"
                      width={500}
                      src={"/outsidemountimage.png"}
                      height={500}
                      className={styles.first_chosen_outside_mount_selection}>
                    </Image>

                  </span>

                  <span className={styles.left_right_outside_mount}>

                    <span className={styles.left_outside_mount}>

                      <div className={styles.outside_mount_group_left_side}>
                        <div className={styles.outside_mount_measurement_instructions}>

                          <p className={styles.measurement_instructions_title_outside_mount}>
                            Measurement Instructions:
                          </p>

                          <div className={styles.step_1_outside_mount}>
                            <p className={styles.step_tag}> Step 1: </p>
                            <span className={styles.step_tag_description_wrapper}>
                              <p className={styles.step_tag_description}>
                                Horizontal Direction (Width) Measure Width Including Window Trim In The Center
                                (As Shown In Below Picture Orange Lines) This Number You Will Input For Size On Width.</p>
                              <p className={styles.step_tag_description_note}>Note: We Will Add 2” Per Side To Allow Overlap Of Trim.</p>
                            </span>
                          </div>

                          <div
                            className={styles.step_2_outside_mount}
                          >
                            <p className={styles.step_tag}> Step 2: </p>
                            <span className={styles.step_tag_description_wrapper}>
                              <p className={styles.step_tag_description}>
                                Vertical Direction (Height) Measure Height Including Window Trim In The Center
                                (As Shown In Below Picture Purple Lines) This Number You Will Input For Size On Height.
                              </p>
                              <p className={styles.step_tag_description_note}>Note: We Will Add 5-1/2” On Height To Allow Overlap Of Trim & Space For Top Cassette.</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </span>

                    <span className={styles.right_outside_mount}>
                      <div className={styles.outside_mount_group_right_side}>
                        <Image alt="image" width={400} height={400} className={styles.outsidemount_Image} src="/outsidemount.png" />
                      </div>
                    </span>
                  </span>

                  <div className={styles.enter_size_outside_mount_title}>Choose Outside Mount Window Size:</div>

                  <div className={styles.enter_height_and_width_outside_mount_group}>
                    <div>
                      <div className={styles.step_1_wrapper}>

                        <div className={styles.qty_group}>
                          <div className={styles.qty_group_part1}>
                            <div className={styles.quantity_title}>QUANTITY</div>
                            <div className={styles.quantity_rectangle_and_numbers}>

                              <div className={styles.quantity_rectangle}>
                                <div className={styles.qty}>QTY</div>
                                <div className={styles.qty_number}>1</div>
                              </div>

                              <div>
                                <span>
                                  <div className={styles.quantity_is_always_1_wrapper}>
                                    <div className={styles.quantity_is_always_1}>Quantity is always 1</div>
                                  </div>

                                </span>
                              </div>
                            </div>npm
                          </div>

                          <div className={styles.qty_group_part2}>
                            <div className={styles.quantity_is_always_1_note}>Not all Windows are identical in size – Each window will need to be measured & entered individually to avoid errors.</div>
                          </div>

                        </div>

                        <div className={styles.bottom_portion_ruler_and_stuff_wrapper}>
                          <div>Select Your Width And Height. Double Check To Make Sure the Measurments are correct for the Width And the Height</div>

                          <div className={styles.bottom_portion_ruler_and_stuff}>

                            <div className={styles.inches_and_fractions_and_ruler_group}>
                              <div className={styles.width_inside_mount_sub_title}>
                                CHOOSE WIDTH:
                              </div>
                              <div className={styles.enter_width_inside_mount_rectangle_1}>

                                <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                  <div className={styles.enter_inches_group_wrapper}>
                                    <div className={styles.inches_subtitle}
                                    >
                                      <p>INCHES</p>
                                    </div>

                                    <div className={styles.inches_scroller_wrapper}>
                                      <div ref={scrollableDivRef} className={styles.inches_scroller_div}>
                                        {selectedInchesVisibleWidth ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31",].map((inchesWidth, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledInchesWhenClickedWIDTH(inchesWidth)}
                                                className={selectedInchesWidth === inchesWidth ? styles.selectedInch : ''}
                                              >
                                                {inchesWidth}
                                              </div>
                                            ))}
                                          </span>
                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickInchessWhenClickedWidth}>
                                            {selectedInchesWidth}

                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  <div className={styles.enter_fractions_group_wrapper}>
                                    <div className={styles.fractions_subtitle}
                                    >
                                      <p>FRACTIONS</p>
                                    </div>
                                    <div className={styles.fractions_scroller_wrapper}>

                                      <div ref={scrollableDivRef} className={styles.fractions_scroller_div}>
                                        {selectedFractionVisibleWidth ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionWidth, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledFractionsWhenClickedWIDTH(fractionWidth)}
                                                className={selectedFractionsWidth === fractionWidth ? styles.selectedFraction : ''}
                                              >
                                                {fractionWidth}
                                              </div>
                                            ))}
                                          </span>

                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedWidth}>
                                            {selectedFractionsWidth}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className={styles.ruler_div}>

                                  < span className={styles.enter_size_boat_span} >
                                    <div className={styles.ruler_for_boat_wrapper}>

                                      <div className={styles.ruler_for_boat}>
                                        <div className={styles.ruler_numbers_and_label}>


                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_0}></span>

                                            <div className={styles.ruler_line_number_inches}>
                                              {[selectedInchWIDTH || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedInchAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedInchWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>


                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}

                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["3/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}
                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_3}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["1/2"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["5/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_2}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["3/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>

                                            <span className={styles.line_1}></span>

                                            <div className={styles.ruler_line_number_fractions}>

                                              {["7/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionWIDTH === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>

                                              ))}

                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_0}></span>
                                            <div className={styles.ruler_line_number_inches}>
                                              {[selectedInchWIDTH].map((selectedInch, index) => {
                                                const yourArrayOfNumbers = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
                                                const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInch) + 1;
                                                const nextNumber = yourArrayOfNumbers[nextNumberIndex];

                                                return (


                                                  <>
                                                    <div className={styles.selected_next_number}>
                                                      <div key={index}
                                                        onClick={() => handleSelectedInchAndMatchToScrollerWIDTH(nextNumber)}
                                                        className={selectedInchWIDTH === nextNumber ? styles.selected_next_number : ''}
                                                      >
                                                        {nextNumber}
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              })}
                                            </div>
                                          </span>
                                        </div>
                                        <div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>

                                <div className={styles.selected_width_answer_top}>
                                  Window Width: {selectedInchWIDTH} - {selectedFractionWIDTH}
                                  {selectedFractionWIDTH && " Inches Long"}
                                </div>


                              </div>
                            </div>



                            <div className={styles.inches_and_fractions_and_ruler_group}>
                              <div className={styles.width_inside_mount_sub_title}>
                                CHOOSE HEIGHT:
                              </div>
                              <div className={styles.enter_width_inside_mount_rectangle_1}>

                                <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                  <div className={styles.enter_inches_group_wrapper}>
                                    <div className={styles.inches_subtitle}
                                    >
                                      <p>INCHES</p>
                                    </div>

                                    <div className={styles.inches_scroller_wrapper}>
                                      <div ref={scrollableDivRef} className={styles.inches_scroller_div}>
                                        {selectedInchVisiblehEIGHT ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"].map((inchHEIGHT, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledInchesWhenClickedHEIGHT(inchHEIGHT)}
                                                className={selectedInchesHeight === inchHEIGHT ? styles.selectedInch : ''}
                                              >
                                                {inchHEIGHT}
                                              </div>
                                            ))}
                                          </span>
                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickInchesWhenClickedHEIGHT}>
                                            {selectedInchesHeight}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>

                                  <div className={styles.enter_fractions_group_wrapper}>
                                    <div className={styles.fractions_subtitle}
                                    >
                                      <p>FRACTIONS</p>
                                    </div>
                                    <div className={styles.fractions_scroller_wrapper}>
                                      <div ref={scrollableDivRef} className={styles.fractions_scroller_div}>
                                        {selectedFractionVisibleHeight ? (
                                          <span className={styles.span_visibility_1}>
                                            {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionHeight, index) => (
                                              <div
                                                key={index}
                                                onClick={() => handleScrolledFractionsWhenClickedHEIGHT(fractionHeight)}
                                                className={selectedFractionsHeight === fractionHeight ? styles.selectedFraction : ''}
                                              >
                                                {fractionHeight}
                                              </div>
                                            ))}
                                          </span>
                                        ) : (
                                          <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedHEIGHT}>
                                            {selectedFractionsHeight}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>


                                <div className={styles.ruler_div}>

                                  < span className={styles.enter_size_boat_span} >
                                    <div className={styles.ruler_for_boat_wrapper}>

                                      <div className={styles.ruler_for_boat}>
                                        <div className={styles.ruler_numbers_and_label}>



                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_0}></span>

                                            <div className={styles.ruler_line_number_inches}>
                                              {[selectedInchHEIGHT || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedInchAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedInchHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>

                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_2}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["3/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_3}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["1/2"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["5/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_2}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["3/4"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_1}>
                                            </span>

                                            <div className={styles.ruler_line_number_fractions}>
                                              {["7/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                  className={selectedFractionHEIGHT === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                >
                                                  {rulerNumberWidthAndHeightInsideMount}
                                                </div>
                                              ))}
                                            </div>
                                          </span>

                                          <span className={styles.ruler_line_group}>
                                            <span className={styles.line_0}></span>
                                            <div className={styles.ruler_line_number_inches}>
                                              {[selectedInchHEIGHT].map((selectedInch, index) => {
                                                const yourArrayOfNumbers = ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
                                                const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInch) + 1;
                                                const nextNumber = yourArrayOfNumbers[nextNumberIndex];

                                                return (
                                                  <>
                                                    <div className={styles.selected_next_number}>
                                                      <div key={index}
                                                        onClick={() => handleSelectedInchAndMatchToScrollerHEIGHT(nextNumber)}
                                                        className={selectedInchHEIGHT === nextNumber ? styles.selected_next_number : ''}
                                                      >
                                                        {nextNumber}
                                                      </div>
                                                    </div>
                                                  </>
                                                );
                                              })}
                                            </div>
                                          </span>

                                        </div>
                                        <div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>

                                <div className={styles.selected_width_answer_top}>
                                  Window Height: {selectedInchHEIGHT} - {selectedFractionHEIGHT}
                                  {selectedFractionHEIGHT && " Inches High"}
                                </div>

                              </div>
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>



            <div className={styles.review_your_order_seperator_line}></div>



            <div className={styles.select_color_group}>


              <div className={styles.select_color_long_rectangle}
              >
                <div className={styles.select_color_short_rectangle}>
                  <Image
                    className={styles.iconforselectcolor}
                    alt="iconforselectcolor"
                    width={100}
                    height={100}
                    src={"/chevronleft.png"}>
                  </Image>
                  <div className={styles.select_color_title}> <span className={styles.select_color_group_title_tag}>2 </span> Select Color / Material</div>
                </div>
              </div>

              <div className={styles.ellipse_and_type_select_material}>
                <div className={styles.select_color_subtitle}> Select Material</div>
                <div>Click On A Color To Choose And Add</div>
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

            <div className={styles.review_your_order_seperator_line}></div>

            <div className={styles.select_lift_type_group}>
              <span className={styles.titled_step_combo}>

                <div
                  className={styles.select_lift_type_long_rectangle}
                >
                  <div
                    className={styles.select_lift_type_short_rectangle}
                  >
                    <Image
                      className={styles.iconforselectlifttype}
                      alt="iconforselectlifttype"
                      width={100}
                      height={100}
                      src={"/chevronleft.png"}>
                    </Image>
                    <div className={styles.select_lift_type_group_title}>
                      <span className={styles.select_lift_type_group_title_tag}>3</span>
                      Select Lift Type
                    </div>
                  </div>
                </div>
              </span>

              <div className={styles.select_lift_type_subtitle_wrapper}>
                <div className={styles.select_lift_type_subtitle}>Add Lift Feature</div>
                <div>
                  Select Wand, Cordless Or Motorized
                </div>
              </div>

              <div className={styles.select_chain_option1_wrapper}>

                <div className={styles.select_chain_option1_ellipse_and_options}>
                  <div className={styles.select_chain_option1_ellipse_wrapper}>
                    <span
                      className={`${styles.wand_ellipse} ${active_wand_cordless_motorized === 1 ? styles.active_wand_cordless_motorized : ''}`}
                      onClick={() => handleLiftFeatureEllipsess(1)}
                    ></span>
                  </div>

                  <div className={styles.select_chain_option1_options}>
                    <div className={styles.wand_subtitle}>Wand</div>
                    <div className={styles.options_price_seperator}></div>
                    <div className={styles.free_subtitle}>Free</div>

                    <div className={styles.wand_extra_buttons}>
                      <button>
                        <div className={`${styles.select_chain_left_text} ${active_wand_left_choice === 4 ? styles.active_wand_left_choice : ''}`}
                          onClick={() => handleLiftFeatureEllipsess(4)}>
                          Left
                        </div>
                      </button>

                      <button>

                        <div className={`${styles.select_chain_right_text} ${active_wand_right_choice === 5 ? styles.active_wand_right_choice : ''}`}
                          onClick={() => handleLiftFeatureEllipsess(5)}>
                          Right
                        </div>
                      </button>

                    </div>
                  </div>
                  <div className={styles.wand_option_image_placeholder}>
                    {showImageleft && (
                      <div className={styles.showleftchain_wrapper}>
                        <Image
                          width={400}
                          height={400}
                          className={styles.show_left_chain_image_render}
                          alt="showleftchain"
                          src="/leftside.png"
                        />
                      </div>
                    )}


                    {showImageright && (
                      <div className={styles.showrightchain_wrapper}>
                        <Image
                          width={400}
                          height={400}
                          className={styles.show_left_chain_image_render}
                          alt="showleftchain"
                          src="/rightside.png"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>


              <div className={styles.select_chain_option2_wrapper}>
                <div className={styles.select_chain_option2_ellipse_and_options}>
                  <div className={styles.select_chain_option2_ellipse_wrapper}>
                    <span
                      className={`${styles.cord_less_ellipse} ${active_wand_cordless_motorized === 2 ? styles.active_wand_cordless_motorized : ''}`}
                      onClick={() => handleLiftFeatureEllipsess(2)}
                    ></span>
                  </div>


                  <div className={styles.select_chain_option2_options}>
                    <div className={styles.cord_less_subtitle}>Cord Less</div>
                    <div className={styles.options_price_seperator}></div>
                    <div className={styles.cordlift_price_value_subtitle}>$05.00</div>
                  </div>

                  <div className={styles.cord_less_option_image_placeholder}>
                    <Image
                      width={400}
                      height={400}
                      alt="showrightchain"
                      src="/cordlesslift.png"
                    />
                  </div>

                </div>
              </div>


              <div className={styles.select_chain_option3_wrapper}>
                <div className={styles.select_chain_option3_ellipse_and_options}>
                  <div className={styles.select_chain_option3_ellipse_wrapper}>
                    <span
                      className={`${styles.motorized_ellipse} ${active_wand_cordless_motorized === 3 ?
                        styles.active_wand_cordless_motorized : ''}`}
                      onClick={() => handleLiftFeatureEllipsess(3)}
                    ></span>
                  </div>

                  <div className={styles.select_chain_option3_options}>

                    <div className={styles.motorized_subtitle}>Motorized</div>
                    <div className={styles.options_price_seperator}></div>
                    <div className={styles.motorized_price_value_subtitle}>$100.00</div>
                  </div>

                  <div className={styles.motorized_option_image_placeholder}>
                    <Image
                      width={400}
                      height={400}
                      alt="showrightchain"
                      src="/motorizedlift.png"
                    />
                  </div>

                </div>
              </div>


            </div>



            <div>
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
                          <span className={styles.select_head_rail_group_title_tag}>4</span> Top Rail
                        </div>


                      </div>
                    </div>
                  </span>


                  <div className={styles.fabric_types_top_and_bottom_main_wrapper}>

                    <div className={styles.fabric_types_top_and_bottom_second_wrapper}>


                      <div className={styles.top_section}>
                        <div className={styles.pick_bottom_rail_color_subtitle0}>Top Rail Casettes:</div>

                        <div className={styles.skip_top_section}>
                          <div className={styles.ellipse_and_title_head_rail}>
                            <div className={`${styles.skip_head_rail_ellipse} ${active_skip_head_rail_ellipse ? styles.active_skip_head_rail_ellipse : ''}`}
                              onClick={handleEllipseClickSkipHeadRailAndBotomRailColor}
                            ></div>
                            <div className={styles.skip_head_rail_color}>Skip Cassette Type
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className={`${styles.skip_head_rail_image_placeholder_invisible} ${skip_head_rail_image_placeholder ? styles.skip_head_rail_image_placeholder_visible : ''}`}>
                            <div className={styles.gobacktochoices}>
                              <div className={`${styles.gobacktochoicesellipse} ${active_skip_head_rail_ellipse ? styles.active_skip_head_rail_ellipse : ''}`}
                                onClick={handleEllipseClickSkipHeadRailAndBotomRailColor}
                              ><p>Go Back To Choices
                                </p></div>
                            </div>
                          </div>

                          {[
                            { key: 'TopRailList1', list: Top_Head_Rail_Choices_Materialskey1.TopRailList1, type: 'Top' },
                            { key: 'TopRailList2', list: Top_Head_Rail_Choices_Materialskey2.TopRailList2, type: 'Top' },
                          ].map((choicesObj, index) => (
                            <div key={index} className={styles.materials_organized_div}>
                              {choicesObj.list.map((choice, choiceIndex) => (
                                <div
                                  className={`${styles.materials_organized_div_image} ${(choicesObj.key === 'TopRailList1' && selectedImagesTop?.includes(choice.key1)) ||
                                    (choicesObj.key === 'TopRailList2' && selectedImagesTop?.includes(choice.key2)) ||
                                    (choicesObj.type === 'Bottom' && selectedImagesBottom?.includes(choice.key2))
                                    ? styles.selectedImage
                                    : ''
                                    }`}
                                  key={choiceIndex}
                                  onClick={() => {
                                    if (choicesObj.key === 'TopRailList1') {
                                      handleImageClickImagesTop1(choice.key1);
                                    } else if (choicesObj.key === 'TopRailList2') {
                                      handleImageClickImagesTop2(choice.key2);
                                    }
                                  }}
                                >
                                  <Image width={100} height={100} src={choice.src} alt={choice.label} />
                                  <p className={styles.materials_organized_div_image_paragraph}>{choice.label}</p>
                                </div>
                              ))}
                            </div>
                          ))}






                        </div>

                      </div>
                    </div>
                  </div>




                  <div className={styles.pick_bottom_rail_color_wrapper}>

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
                          <span className={styles.select_head_rail_group_title_tag}>5</span> Bottom Rail
                        </div>


                      </div>
                    </div>


                    <div className={styles.fabric_types_top_and_bottom_main_wrapper}>

                      <div className={styles.fabric_types_top_and_bottom_second_wrapper}>

                        <div className={styles.bottom_section}>
                          <div className={styles.skip_bottom_section}>
                            <div>
                              <div className={`${styles.skip_bottom_rail_image_placeholder_invisible} ${skip_bottom_rail_image_placeholder ? styles.skip_bottom_rail_image_placeholder_visible : ''}`}>
                                <div className={styles.gobacktochoices}>
                                  <div className={`${styles.gobacktochoicesellipse} ${active_skip_head_rail_ellipse ? styles.active_skip_head_rail_ellipse : ''}`}
                                    onClick={handleEllipseClickSkipHeadRailAndBotomRailColor}
                                  >
                                    <p>Go Back To Choices
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {!active_skip_bottom_rail_ellipse && (
                                <div className={styles.fabric_list_bottom} style={{ marginTop: active_skip_bottom_rail_ellipse ? '-100px' : '0' }}>
                                  <div className={styles.fabric_list_bottom_list1}>
                                    <div className={styles.pick_bottom_rail_color_subtitle1}>Bottom Rail Type:</div>

                                    <div className={styles.materials_organized_div_wrapper}>
                                      {Object.keys(Bottom_Bottom_Rail_Choices_Materials).map((railType, index) => (
                                        <div key={index} className={styles.materials_organized_div}>
                                          {Bottom_Bottom_Rail_Choices_Materials[railType].map((choice) => (
                                            <div
                                              className={`${styles.materials_organized_div_image} ${selectedImagesBottom?.includes(choice.key2) ? styles.selectedImage : ''} ${clickedImageKeyBottom === (choice.key2, choice.key) ? styles.clickedImage : ''}`}
                                              key={(choice.key2, choice.key)}
                                              onClick={() => handleBottomImageClick(choice.key2, choice.key)}
                                            >
                                              <Image
                                                width={100}
                                                height={100}
                                                src={choice.src}
                                                alt={choice.label}
                                              />
                                              <p className={styles.materials_organized_div_image_paragraph}>{choice.label}</p>
                                            </div>
                                          ))}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className={styles.seperator_line_div}>
              <div className={styles.review_your_order_seperator_line2}></div>
              <div className={styles.review_your_order_seperator_line1}></div>
              <div className={styles.review_your_order_seperator_line0}></div>

              <div className={styles.review_your_order_seperator_line0}></div>
              <div className={styles.review_your_order_seperator_line1}></div>
              <div className={styles.review_your_order_seperator_line2}></div>

            </div>

            <div className={styles.quantity_and_add_to_cart_group}>

              <div className={styles.review_your_order_seperator_line3}></div>
              <div className={styles.review_your_order}>Review Your Blind Selection</div>

              <span className={styles.my_order_band_wrapper}>
                <div className={styles.my_order_band}>
                  <span className={styles.my_order_band_element1}>
                    My Order
                  </span>


                </div>
              </span>
              <div className={styles.review_your_order_bg}>

                <div className={styles.order_items_list}>
                  <span
                    className={styles.bill_divider}>
                  </span>

                  <div className={styles.description_and_answer}>
                    <div className={styles.window_name_answer}>Window Name:
                    </div>
                    <div className={styles.answers_answers}>
                      {productName1}
                    </div>
                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>

                  <div className={styles.description_and_answer}>

                    <div className={styles.window_type_answer}>Window Type:</div>
                    <div className={styles.answers_answers}>
                      {productName2}
                    </div>
                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>

                  <div className={styles.description_and_answer}>
                    <div className={styles.width2_answer}>Window Size:</div>

                    <div className={styles.answers_answers}>

                      <div>
                        Length: {selectedInchesWidth} - {selectedFractionsWidth}
                        {selectedFractionsWidth && " Inches Long"}
                      </div>

                      <div>
                        Height: {selectedInchesHeight} - {selectedFractionsHeight}
                        {selectedFractionsHeight && " Inches High"}
                      </div>


                    </div>
                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>

                  <div className={styles.description_and_answer}>
                    <div className={styles.mount_answer}>Mount:</div>

                    <div className={styles.answers_answers}>
                      {InsideOrOutsideRenderingContent ? `Mount Type: ${InsideOrOutsideRenderingContent}` : "Please Select A Mount Type"}
                    </div>

                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>

                  <div className={styles.description_and_answer}>
                    <div className={styles.materials_answer}>Material:</div>

                    <div className={styles.answers_answers}>
                      {selectedFileNameMaterials ? `Material: ${selectedFileNameMaterials}` : "Please Select Your Material"}
                    </div>
                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>

                  <div className={styles.description_and_answer}>
                    <div className={styles.lift_type_answer}>Lift Type:</div>
                    <div className={styles.answers_answers3}>
                      <div>
                        {active_wand_cordless_motorizedRenderingContent ? `Lift Type: ${active_wand_cordless_motorizedRenderingContent}` : "Please Select A Lift Type"}
                      </div>
                      <div>
                        {active_wand_left_choice_rendering_content ? ` ${active_wand_left_choice_rendering_content}` : ""}
                      </div>
                      <div>
                        {active_wand_right_choice_rendering_content ? ` ${active_wand_right_choice_rendering_content}` : ""}

                      </div>
                    </div>
                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>


                  <div className={styles.description_and_answer}>
                    <div className={styles.casette_rail_type_answer}> Top Rail Choice:</div>

                    <div className={styles.answers_answers2}>
                      {selectedImagesTop?.length > 0 && (
                        <div className={styles.left_imageContainer_wrapper}>
                          <div className={`${styles.casette_rail_type_answer_container} ${styles.casette_rail_type_answer_container_styled}`}>
                            <p>
                              {(
                                Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key === selectedImagesTop[0]) ||
                                Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key === selectedImagesTop[0])
                              )?.label}
                            </p>
                            <Image
                              width={200}
                              height={200}
                              className={styles.casette_rail_type_answer_image_render}
                              src={
                                (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key === selectedImagesTop[0]) ||
                                  Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key === selectedImagesTop[0])
                                )?.src
                              }
                              alt={
                                (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key === selectedImagesTop[0]) ||
                                  Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key === selectedImagesTop[0])
                                )?.label
                              }
                            />
                          </div>
                        </div>
                      )}

                    </div>
                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>



                  <div className={styles.description_and_answer}>
                    <div className={styles.bottom_rail_type_answer}>Bottom Rail Choice:</div>
                    <div className={styles.answers_answers2}>
                      {selectedImagesBottom?.length > 0 && (

                        <div className={styles.left_imageContainer_wrapper}>

                          <div className={`${styles.bottom_rail_type_answer_container} ${styles.bottom_rail_type_answer_container_styled}`}>
                            <p>
                              {Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key === selectedImagesBottom)?.label}
                            </p>
                            <Image
                              width={200}
                              height={200}
                              className={styles.bottom_rail_type_answer_image_render}
                              src={
                                Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key2 === selectedImagesBottom[0])?.src
                              }
                              alt={
                                Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key2 === selectedImagesBottom[0])?.label
                              }
                            />

                          </div>
                        </div>

                      )}
                    </div>

                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>


                  <div className={styles.description_and_answer}>
                    <div className={styles.estimated_delivery_date_title}>Estimated Delivery Date:</div>

                    <div className={styles.answers_answers}>

                      <p>Between</p>
                      <div className={styles.estimated_delivery_date_render}>{futureDate}{" "}
                      </div>
                      <p>and</p>
                      <div className={styles.estimated_delivery_date_render}>{futureDate2}{" "}
                      </div>
                    </div>
                  </div>


                  <div className={styles.add_to_cart_rectangle_wrapper}>
                    <Link href={'/addtocart'}>

                      <div className={styles.add_to_cart_rectangle}>

                        <p className={styles.add_to_cart}>ADD TO CART</p>

                      </div>
                    </Link>
                  </div>

                  <span
                    className={styles.bill_divider}>
                  </span>

                </div>
              </div>
            </div>



            <div className={styles.shipping_details_group_wrapper}>
              <Image alt="image" width={100} height={100} className={styles.shippingtruck_1} src="/shippingtruck.png" />
              <div className={styles.shipping_details_title_wrapper}>
                <div className={styles.shipping_details_title}>Shipping Details: </div>
              </div>
              <div className={styles.shipping_divider1}></div>

              <div className={styles.shipping_tagger}>
                <div className={styles.shipping_tagger_prt1}>

                  <div className={styles.shipping_title}>Shipping</div>
                  <div className={styles.shipping_title}>=</div>

                  <div className={styles.shipping_price}>FREE</div>
                </div>

                <div className={styles.shipping_tagger_prt2}>
                  <div className={styles.qty_1}>Qty 1</div>
                  <div className={styles.total_price}>$00.00</div>
                </div>

              </div>



            </div>





          </ol>




        </span >

      </div >



      <>


        <>


          {showFooter && <span className={styles.ZebraBlindsFooter_wrapper}>
            <div className={`${styles.ZebraBlindsFooter} ${showFooter ? styles.showFooter : ''}`}>
              <div className={styles.shipping_divider2}></div>
              <FooterPage></FooterPage>
              <div className={styles.shipping_divider2}></div>

            </div>
          </span>}
        </>
      </>


    </>
  )
}


export default ZebraBlinds;
