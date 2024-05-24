// C:\Users\User\economyblindsandshadesjs\pages\components\pages\rollerblindsroomdarkening.js

import styles from '../../../styles/components/pages/rollerblinds.module.css';
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderPiece from "../header.js";
import { useSession } from "next-auth/react";
import FooterPage from "../footer.js"
import { useRouter } from 'next/router';

const RollerBlindsRoomDarkening = () => {
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
  const [productName1RollerBlindsRoomDarkening, setProductName1RollerBlindsRoomDarkening] = useState("");
  const [productName2RollerBlindsRoomDarkening, setProductName2RollerBlindsRoomDarkening] = useState("");
  const [roomnameRollerBlindsRoomDarkening, setroomnameRollerBlindsRoomDarkening] = useState("");
  const [WandPriceCMSRollerBlindsRoomDarkening, setWandPriceCMSRollerBlindsRoomDarkening] = useState("");
  const [cordlesspriceCMSRollerBlindsRoomDarkening, setcordlesspriceCMSRollerBlindsRoomDarkening] = useState("");
  const [motorizedpriceCMSRollerBlindsRoomDarkening, setmotorizedpriceCMSRollerBlindsRoomDarkening] = useState("");

  const [inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening, setinchPricesAfterWidthInsideMountRollerBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening, setinchPricesAfterHeightInsideMountRollerBlindsRoomDarkening] = useState({});
  const [inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening, setinchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening, setinchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening] = useState({});

  const [newSetPriceInchesWidthInsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesWidthInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesWidthOutsideMountRollerBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening] = useState(null);


  const fetchLatestData = async () => {
    try {
      const response = await fetch("/api/getLatestData");
      const result = await response.json();
      const latestData = result.data;

      if (latestData) {
        setProductName1RollerBlindsRoomDarkening(latestData.productName1RollerBlindsRoomDarkening || "");
        setProductName2RollerBlindsRoomDarkening(latestData.productName2RollerBlindsRoomDarkening || "");
        setroomnameRollerBlindsRoomDarkening(latestData.roomnameRollerBlindsRoomDarkening || "");
        setWandPriceCMSRollerBlindsRoomDarkening(latestData.WandPriceCMSRollerBlindsRoomDarkening || "");
        setcordlesspriceCMSRollerBlindsRoomDarkening(latestData.cordlesspriceCMSRollerBlindsRoomDarkening || "");
        setmotorizedpriceCMSRollerBlindsRoomDarkening(latestData.motorizedpriceCMSRollerBlindsRoomDarkening || "");

        const inchPricesWidthInsideMount = JSON.parse(latestData.inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening || "{}");

        setinchPricesAfterWidthInsideMountRollerBlindsRoomDarkening(inchPricesWidthInsideMount);

        const inchPricesWidthOutsideMount = JSON.parse(latestData.inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening(inchPricesWidthOutsideMount);

        const inchPricesHeightInsideMount = JSON.parse(latestData.inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountRollerBlindsRoomDarkening(inchPricesHeightInsideMount);

        const inchPricesHeightOutsideMount = JSON.parse(latestData.inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening(inchPricesHeightOutsideMount);



        const lastSetPriceWidthInsideMount = inchPricesWidthInsideMount[selectedInchesWidthInsideMount];
        setnewSetPriceInchesWidthInsideMountRollerBlindsRoomDarkening(lastSetPriceWidthInsideMount);

        const lastSetPriceWidthOutsideMount = inchPricesWidthOutsideMount[selectedInchesWidthOutsideMount];
        setnewSetPriceInchesWidthOutsideMountRollerBlindsRoomDarkening(lastSetPriceWidthOutsideMount);

        const lastSetPriceHeightInsideMount = inchPricesHeightInsideMount[selectedInchesHeightInsideMount];
        setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening(lastSetPriceHeightInsideMount);

        const lastSetPriceHeightOutsideMount = inchPricesHeightOutsideMount[selectedInchesHeightOutsideMount];
        setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening(lastSetPriceHeightOutsideMount);

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

  const [active_wand_cordless_motorized, setactive_wand_cordless_motorized] = useState(null);
  const [active_wand_cordless_motorizedRenderingContent, setactive_wand_cordless_motorizedRenderingContent] = useState('');
  const [active_wand_left_choice, setactive_wand_left_choice] = useState('');
  const [active_wand_right_choice, setactive_wand_right_choice] = useState('');
  const [active_wand_left_choice_rendering_content, setactive_wand_left_choice_rendering_content] = useState("");
  const [active_wand_right_choice_rendering_content, setactive_wand_right_choice_rendering_content] = useState(null);
  const [showImageright, setShowImageright] = useState(false);
  const [showImageleft, setShowImageleft] = useState(true);

  const [totalpricecalculated, setTotalPriceCalculated] = useState(0);


  const handleClickInside_And_Outside_Ellipses = (ellipseNumber) => {
    if (ellipseNumber === 1) {
      setActiveInsideOutsideEllipse(1);
      setInsideOrOutsideRenderingContent('Inside Mount');
      setInsideMountGroupVisible(true);
      setOutsideMountGroupVisible(false);
    } else if (ellipseNumber === 2) {
      setActiveInsideOutsideEllipse(2);
      setInsideOrOutsideRenderingContent('Outside Mount');
      setInsideMountGroupVisible(false);
      setOutsideMountGroupVisible(true);
    }
  };

  const handleLiftFeatureEllipsess = (ellipseNumber) => {
    // Reset states based on the clicked ellipse number
    if (ellipseNumber === 1) {
      setactive_wand_cordless_motorized(1);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('wand');
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(null);
      setShowImageleft(true);
      setShowImageright(false);

    } else if (ellipseNumber === 2) {
      setactive_wand_cordless_motorized(2);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('cordless');
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(false);

    } else if (ellipseNumber === 3) {
      setactive_wand_cordless_motorized(1);
      setactive_wand_cordless_motorized(3);
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('motorized');
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(false);


    } else if (ellipseNumber === 4) {
      setactive_wand_cordless_motorized(1);
      setactive_wand_left_choice(4);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('wand');
      setactive_wand_left_choice_rendering_content('Left wand choice');
      setactive_wand_right_choice_rendering_content(false);
      setShowImageleft(true);
      setShowImageright(false);

    } else if (ellipseNumber === 5) {
      setactive_wand_cordless_motorized(1);
      setactive_wand_right_choice(5);
      setactive_wand_left_choice(null);
      setactive_wand_cordless_motorizedRenderingContent('wand');
      setactive_wand_left_choice_rendering_content(false);
      setactive_wand_right_choice_rendering_content('Right wand choice');
      setShowImageleft(false);
      setShowImageright(true);
    } else {
      // Reset all states if any other ellipse is selected
      setactive_wand_left_choice(null);
      setactive_wand_right_choice(null);
      setactive_wand_cordless_motorizedRenderingContent(null);
      setactive_wand_left_choice_rendering_content(null);
      setactive_wand_right_choice_rendering_content(null);

    }

    let newTotalPrice = 0;

    switch (ellipseNumber) {
      case 1:
        newTotalPrice = WandPriceCMSRollerBlindsRoomDarkening;
        break;

      case 2:
        newTotalPrice = cordlesspriceCMSRollerBlindsRoomDarkening;
        break;

      case 3:
        newTotalPrice = motorizedpriceCMSRollerBlindsRoomDarkening;
        break;

      default:
    }


    setTotalPriceCalculated(newTotalPrice);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    switch (active_inside_outside_ellipse) {
      case 1:
        totalPrice = totalpricecalculated + (active_wand_left_choice === 4 ? WandPriceCMSZebrablindsRollerBlindsRoomDarkening : 0) + (active_wand_right_choice === 5 ? WandPriceCMSZebrablindsRollerBlindsRoomDarkening : 0);
        break;
      case 2:
        totalPrice = totalpricecalculated;
        break;
      // Add cases for other ellipses if needed
      default:
        break;
    }

    return totalPrice;
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


  const [RollerBlindsRoomDarkeningContent, setRollerBlindsRoomDarkeningContent] = useState('');

  useEffect(() => {
    const RollerBlindsRoomDarkeningElement = document.querySelector(`.${styles.room_darkening_element}`);
    if (RollerBlindsRoomDarkeningElement) {
      setRollerBlindsRoomDarkeningContent(RollerBlindsRoomDarkeningElement.textContent || RollerBlindsRoomDarkeningElement.innerText);
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

  const colorDataMatcher = {

    White: [
      { key: "White", src: '/WHITEMATCHER/ETB2001WHITE.png', label: "ETB2-001" },
      { key: "White", src: '/WHITEMATCHER/ETB4001WHITE.png', label: "ETB4-001" },
      { key: "White", src: '/WHITEMATCHER/ETB4002WHITE.png', label: "ETB4-002" },
      { key: "White", src: '/WHITEMATCHER/ETB5001WHITE.png', label: "ETB5-001" },
      { key: "White", src: '/WHITEMATCHER/ETB5002WHITE.png', label: "ETB5-002" },
      { key: "White", src: '/WHITEMATCHER/ETB6001WHITE.png', label: "ETB6-001" },
      { key: "White", src: '/WHITEMATCHER/ETB8001WHITE.png', label: "ETB8-001" },
      { key: "White", src: '/WHITEMATCHER/ETB8002WHITE.png', label: "ETB8-002" },
      { key: "White", src: '/WHITEMATCHER/ETB9001WHITE.png', label: "ETB9-001" },
      { key: "White", src: '/WHITEMATCHER/ETB14001WHITE.png', label: "ETB14-001" },
      { key: "White", src: '/WHITEMATCHER/ETB15001WHITE.png', label: "ETB15-001" },
      { key: "White", src: '/WHITEMATCHER/ETB16001WHITE.png', label: "ETB16-001" },
      { key: "White", src: '/WHITEMATCHER/ETB1001WHITE.png', label: "ETB1-001" },
    ],

    Grey: [
      { key: "Grey", src: '/GREYMATCHER/ETB1004GREY.png', label: "ETB1-004" },
      { key: "Grey", src: '/GREYMATCHER/ETB2003GREY.png', label: "ETB2-003" },
      { key: "Grey", src: '/GREYMATCHER/ETB3004GREY.png', label: "ETB3-004" },
      { key: "Grey", src: '/GREYMATCHER/ETB3005GREY.png', label: "ETB3-005" },
      { key: "Grey", src: '/GREYMATCHER/ETB5004GREY.png', label: "ETB5-004" },
      { key: "Grey", src: '/GREYMATCHER/ETB6002GREY.png', label: "ETB6-002" },
      { key: "Grey", src: '/GREYMATCHER/ETB7002GREY.png', label: "ETB7-002" },
      { key: "Grey", src: '/GREYMATCHER/ETB8004GREY.png', label: "ETB8-004" },
      { key: "Grey", src: '/GREYMATCHER/ETB9002GREY.png', label: "ETB9-002" },
      { key: "Grey", src: '/GREYMATCHER/ETB10002GREY.png', label: "ETB10-002" },
      { key: "Grey", src: '/GREYMATCHER/ETB11001GREY.png', label: "ETB11-001" },
      { key: "Grey", src: '/GREYMATCHER/ETB11002GREY.png', label: "ETB11-002" },
      { key: "Grey", src: '/GREYMATCHER/ETB11004GREY.png', label: "ETB11-004" },
      { key: "Grey", src: '/GREYMATCHER/ETB14004GREY.png', label: "ETB14-004" },
      { key: "Grey", src: '/GREYMATCHER/ETB14003GREY.png', label: "ETB14-003" },
      { key: "Grey", src: '/GREYMATCHER/ETB14005GREY.png', label: "ETB14-005" },
    ],

    Black: [
      { key: "Black", src: '/BLACKMATCHER/ETB1006BLACK.png', label: "ETB1-006" },
      { key: "Black", src: '/BLACKMATCHER/ETB4003BLACK.png', label: "ETB4-003" },
      { key: "Black", src: '/BLACKMATCHER/ETB4004BLACK.png', label: "ETB4-004" },
      { key: "Black", src: '/BLACKMATCHER/ETB5006BLACK.png', label: "ETB5-006" },
      { key: "Black", src: '/BLACKMATCHER/ETB5007BLACK.png', label: "ETB5-007" },
      { key: "Black", src: '/BLACKMATCHER/ETB8005BLACK.png', label: "ETB8-005" },
      { key: "Black", src: '/BLACKMATCHER/ETB9003BLACK.png', label: "ETB9-003" },
    ],

    Bronze: [
      { key: "Bronze", src: '/BRONZEMATCHER/ETB1005BRONZE.png', label: "ETB1-005" },
      { key: "Bronze", src: '/BRONZEMATCHER/ETB3006BRONZE.png', label: "ETB3-006" },
    ],

    Brown: [
      { key: "Brown", src: '/BROWNMATCHER/ETB2004BROWN.png', label: "ETB2-004" },
      { key: "Brown", src: '/BROWNMATCHER/ETB3007BROWN.png', label: "ETB3-007" },
      { key: "Brown", src: '/BROWNMATCHER/ETB5005BROWN.png', label: "ETB5-005" },
      { key: "Brown", src: '/BROWNMATCHER/ETB6004BROWN.png', label: "ETB6-004" },
      { key: "Brown", src: '/BROWNMATCHER/ETB7003BROWN.png', label: "ETB7-003" },
      { key: "Brown", src: '/BROWNMATCHER/ETB9004BROWN.png', label: "ETB9-004" },
    ],

    Beige: [
      { key: "Beige", src: '/BEIGEMATCHER/ETB1003BEIGE.png', label: "ETB1-003" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB2002BEIGE.png', label: "ETB2-002" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB3001BEIGE.png', label: "ETB3-001" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB3002BEIGE.png', label: "ETB3-002" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB3003BEIGE.png', label: "ETB3-003" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB5003BEIGE.png', label: "ETB5-003" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB6003BEIGE.png', label: "ETB6-003" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB7001BEIGE.png', label: "ETB7-001" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB8003BEIGE.png', label: "ETB8-003" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB10001BEIGE.png', label: "ETB10-001" },
      { key: "Beige", src: '/BEIGEMATCHER/ETB11003BEIGE.png', label: "ETB11-003" },
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
      { key2: 'whitetag2', src: '/Ovals/SquareTopCassetteAluminum/WhiteSquareTopCassetteAluminum.jpg', label: 'White - Aluminum Squared ' },
      { key2: 'greytag2', src: '/Ovals/SquareTopCassetteAluminum/GreySquareTopCassetteAluminum.jpg', label: 'Grey - Aluminum Squared ' },
      { key2: 'blacktag2', src: '/Ovals/SquareTopCassetteAluminum/BlackSquareTopCassetteAluminum.jpg', label: 'Black - Aluminum Squared ' },
      { key2: 'browntag2', src: '/Ovals/SquareTopCassetteAluminum/BrownSquareTopCassetteAluminum.jpg', label: 'Brown - Aluminum Squared ' },
      { key2: 'beigetag2', src: '/Ovals/SquareTopCassetteAluminum/BeigeSquareTopCassetteAluminum.jpg', label: 'Beige - Aluminum Squared ' },
    ],
  };


  const Bottom_Bottom_Rail_Choices_Materials = {

    BottomRailList: [

      { key1: 'whitetag1', key2: 'whitetag2', key3: 'whitetag3a', src: '/Fabrics/BottomRailSquareWithFabricInsert/WhiteBottomRailSquareWithFabricInsert.jpg', label: 'White - Bottom Square With Fabric' },
      { key1: 'greytag1', key2: 'greytag2', key3: 'greytag3a', src: '/Fabrics/BottomRailSquareWithFabricInsert/GreyBottomRailSquareWithFabricInsert.jpg', label: 'Grey - Bottom Square With Fabric' },
      { key1: 'blacktag1', key2: 'blacktag2', key3: 'blacktag3a', src: '/Fabrics/BottomRailSquareWithFabricInsert/BlackBottomRailSquareWithFabricInsert.jpg', label: 'Black - Bottom Square With Fabric' },
      { key1: 'browntag1', key2: 'browntag2', key3: 'browntag3a', src: '/Fabrics/BottomRailSquareWithFabricInsert/BrownBottomRailSquareWithFabricInsert.jpg', label: 'Brown - Bottom Square With Fabric' },
      { key1: 'beigetag1', key2: 'beigetag2', key3: 'beigetag3a', src: '/Fabrics/BottomRailSquareWithFabricInsert/BeigeBottomRailSquareWithFabricInsert.jpg', label: 'Beige - Bottom Square With Fabric' },

      { key1: 'whitetag1', key2: 'whitetag2', key3: 'whitetag3b', src: '/Ovals/OvalBottomRails/WhiteBottomOvalRail.jpg', label: 'White - Bottom Oval ' },
      { key1: 'greytag1', key2: 'greytag2', key3: 'greytag3b', src: '/Ovals/OvalBottomRails/GreyBottomOvalRail.jpg', label: 'Grey - Bottom Oval ' },
      { key1: 'blacktag1', key2: 'blacktag2', key3: 'blacktag3b', src: '/Ovals/OvalBottomRails/BlackBottomOvalRail.jpg', label: 'Black - Bottom Oval ' },
      { key1: 'browntag1', key2: 'browntag2', key3: 'browntag3b', src: '/Ovals/OvalBottomRails/BrownBottomOvalRail.jpg', label: 'Brown - Bottom Oval ' },
      { key1: 'beigetag1', key2: 'beigetag2', key3: 'beigetag3b', src: '/Ovals/OvalBottomRails/BeigeBottomOvalRail.jpg', label: 'Beige - Bottom Oval ' },
    ],

  }


  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [firstImage_div, setfirstImage_div] = useState(true);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedColorImages, setSelectedColorImages] = useState([]);
  const [selectedFileNameMaterials, setselectedFileNameMaterials] = useState(null); // Add this line


  const handleSelectMaterial = (color, key, src, label) => {
    setfirstImage_div(false);

    console.log(`Clicked on file: ${src}`);

    // Use getColorMatcherImage to get the matched image
    const matchingSrc = getColorMatcherImage(label);

    if (matchingSrc) {
      const updatedMaterial = {
        key,
        src: matchingSrc,
        label,
      };

      setSelectedMaterial(updatedMaterial);
      setSelectedColorImages([{ src: matchingSrc }]);
      setselectedFileNameMaterials(`${key} - ${label}`);
    } else {
      // Handle the case when no matching image is found
      console.error("No matching image found for label:", label);
    }
  };

  // Update getColorMatcherImage to search for the label across all colors
  const getColorMatcherImage = (label) => {
    for (const color in colorDataMatcher) {
      const matchingColorData = colorDataMatcher[color];
      const matchingImage = matchingColorData.find((item) => item.label === label);
      if (matchingImage) {
        return matchingImage.src;
      }
    }
    return null;
  };



  // No changes needed in the render functions


  const renderColorList = (colorDataArray) => (
    <>
      <div className={styles.images_and_subtitles} key={selectedColor}>
        {colorDataArray.map((item) => (
          <div
            key={item.label}
            className={`${styles.materials_image_container} ${selectedMaterial && selectedMaterial.src === item.src ? styles.selectedImage : ''}`}
            onClick={() => {
              console.log("Selected color:", selectedColor);
              handleSelectMaterial(selectedColor, item.key, item.src, item.label);
            }}
          >
            <h3 className={styles.images_and_subtitles_color_name}>{item.key}</h3>
            <Image className={styles.materials_image_container_image_itself} src={item.src} alt={item.label} width={300} height={300} />
            <p className={styles.selectedImageClass_label}>{item.label}</p>
          </div>
        ))}
      </div>
    </>
  );

  const renderMatcherImage = () => (
    <>
      {selectedMaterial ? (
        <div className={styles.left_imageContainer_wrapper}>
          <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
            <Image
              className={styles.left_first_image_render}
              src={selectedColorImages.length > 0 ? selectedColorImages[0].src : ''}
              alt='matcher-image'
              width={300}
              height={300}
            />
          </div>
          <h3 className={styles.left_imageContainer_image_itself1_label}>{selectedMaterial.label}</h3>
        </div>
      ) : (
        // Render default content if no material is selected
        <></>
      )}
    </>
  );

  const [selectedImagesTop, setSelectedImagesTop] = useState([]);
  const [selectedImagesBottom, setSelectedImagesBottom] = useState([]);
  const [clickedImageKeyTop, setClickedImageKeyTop] = useState(null);
  const [clickedImageKeyBottom, setClickedImageKeyBottom] = useState(null);
  const [showSorryMessage, setShowSorryMessage] = useState(false);
  const [bottomImagesEnabled, setBottomImagesEnabled] = useState(false);


  const handleBottomImageClick = (key3) => {
    setfirstImage_div(false);
    setSelectedMaterial(false);
    setSteelMaterialChosen(false);

    if (!clickedImageKeyTop) {
      setShowSorryMessage(true);
      return;
    }

    setShowSorryMessage(false);
    setBottomImagesEnabled(true); // Enable displaying Bottom images
    setSelectedImagesBottom(selectedImagesBottom[0] === key3 ? selectedImagesBottom : [key3]);
  };

  const handleImageClickImagesTop1 = (key1) => {
    setBottomImagesEnabled(false);
    setClickedImageKeyTop(key1);
    setShowSorryMessage(false);
    setfirstImage_div(false);
    setSelectedMaterial(false);
    setSteelMaterialChosen(false);

    // Filter the Bottom images based on matching key1
    const matchingBottomImages = Bottom_Bottom_Rail_Choices_Materials.BottomRailList.filter(choice => choice.key1 === key1);
    const selectedBottomImage = matchingBottomImages.length > 0 ? [matchingBottomImages[0].key3] : [];

    // Toggle selection only if the clicked image is different from the current selection
    setSelectedImagesTop(selectedImagesTop[0] === key1 ? selectedImagesTop : [key1]);
    setSelectedImagesBottom(selectedBottomImage);
  };

  const handleImageClickImagesTop2 = (key2) => {
    setBottomImagesEnabled(false);
    setClickedImageKeyTop(key2);
    setShowSorryMessage(false);

    setfirstImage_div(false);
    setSelectedMaterial(false);
    setSteelMaterialChosen(false);

    // Filter the Bottom images based on matching key2
    const matchingBottomImages = Bottom_Bottom_Rail_Choices_Materials.BottomRailList.filter(choice => choice.key2 === key2);
    const selectedBottomImage = matchingBottomImages.length > 0 ? [matchingBottomImages[0].key3] : [];

    // Toggle selection only if the clicked image is different from the current selection
    setSelectedImagesTop(selectedImagesTop[0] === key2 ? selectedImagesTop : [key2]);
    setSelectedImagesBottom(selectedBottomImage);
  };

  //////// /////////////////////////////////// ////////////// /////////////////////////// /////////////////



  const [activeDimensionsinsideMount, setActiveDimensionsinsideMount] = useState("insideMount");
  const [activeDimensionsoutsideMount, setActiveDimensionsoutsideMount] = useState("outsideMount");



  ////////////////////////////////////////////////////////////////////////////////////////////////

  const [selectedRulerNumberInchWidthInsideMount, setselectedRulerNumberInchWidthInsideMount] = useState(null);
  const [selectedRulerNumberInchHeightInsideMount, setselectedRulerNumberInchHeightInsideMount] = useState(null);

  const [selectedRulerNumberFractionWidthInsideMount, setselectedRulerNumberFractionWidthInsideMount] = useState(null);
  const [selectedRulerNumberFractionHeightInsideMount, setselectedRulerNumberFractionHeightInsideMount] = useState(null);
  const [selectedRulerNumberFractionWidthOutsideMount, setselectedRulerNumberFractionWidthOutsideMount] = useState(null);
  const [selectedRulerNumberFractionHeightOutsideMount, setselectedRulerNumberFractionHeightOutsideMount] = useState(null);

  const [selectedFractionVisibleWidthInsideMount, setselectedFractionVisibleWidthInsideMount] = useState(true);
  const [selectedFractionVisibleWidthOutsideMount, setselectedFractionVisibleWidthOutsideMount] = useState(true);
  const [selectedFractionVisibleHeightInsideMount, setSelectedFractionVisibleHeightInsideMount] = useState(true);
  const [selectedFractionVisibleHeightOutsideMount, setselectedFractionVisibleHeightOutsideMount] = useState(true);

  const [selectedFractionsWidthInsideMount, setselectedFractionsWidthInsideMount] = useState(null);
  const [selectedFractionsWidthOutsideMount, setselectedFractionsWidthOutsideMount] = useState(null);
  const [selectedFractionsHeightInsideMount, setselectedFractionsHeightInsideMount] = useState(null);
  const [selectedFractionsHeightOutsideMount, setselectedFractionsHeightOutsideMount] = useState(null);

  const [selectedFractionWidthInsideMount, setselectedFractionWidthInsideMount] = useState(null);
  const [selectedFractionHeightInsideMount, setselectedFractionHeightInsideMount] = useState(null);
  const [selectedFractionWidthOutsideMount, setselectedFractionWidthOutsideMount] = useState(null);
  const [selectedFractionHeightOutsideMount, setselectedFractionHeightOutsideMount] = useState(null);

  const [selectedInchesWidthInsideMount, setselectedInchesWidthInsideMount] = useState(null);
  const [selectedInchesHeightInsideMount, setselectedInchesHeightInsideMount] = useState(null);
  const [selectedInchesWidthOutsideMount, setselectedInchesWidthOutsideMount] = useState(null);
  const [selectedInchesHeightOutsideMount, setselectedInchesHeightOutsideMount] = useState(null);

  const [selectedInchesVisibleWidthInsideMount, setselectedInchesVisibleWidthInsideMount] = useState(true);
  const [selectedInchesVisibleHeightInsideMount, setselectedInchesVisibleHeightInsideMount] = useState(true);
  const [selectedInchesVisibleWidthOutsideMount, setselectedInchesVisibleWidthOutsideMount] = useState(true);
  const [selectedInchesVisibleHeightOutsideMount, setselectedInchesVisibleHeightOutsideMount] = useState(true);

  const [selectedInchWidthInsideMount, setselectedInchWidthInsideMount] = useState(null);
  const [selectedInchHeightInsideMount, setselectedInchHeightInsideMount] = useState(null);
  const [selectedInchWidthOutsideMount, setselectedInchWidthOutsideMount] = useState(null);
  const [selectedInchHeightOutsideMount, setselectedInchHeightOutsideMount] = useState(null);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  const scrollableDivRefFractionsWidthInsideMount = useRef();
  const scrollableDivRefFractionsWidthOutsideMount = useRef();
  const scrollableDivRefFractionsHeightInsideMount = useRef();
  const scrollableDivRefFractionsHeightOutsideMount = useRef();

  const scrollableDivRefWidthInsideMount = useRef();
  const scrollableDivRefHeightInsideMount = useRef();
  const scrollableDivRefWidthOutsideMount = useRef();
  const scrollableDivRefHeightOutsideMount = useRef();

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledInchesWhenClickedWidthInsideMount = (inchesWidthInsideMount) => {
    setselectedInchesWidthInsideMount(inchesWidthInsideMount);
    setselectedInchesVisibleWidthInsideMount(false);
    setselectedInchWidthInsideMount(inchesWidthInsideMount);
    setActiveDimensionsinsideMount("insideMount");
    setActiveDimensionsoutsideMount("");

    const scrollableDivWidthInsideMount = scrollableDivRefWidthInsideMount.current;

    setTimeout(() => {
      const selectedInchesDivWidthInsideMount = scrollableDivWidthInsideMount.querySelector(`.${styles.selectedInch}`);

      if (selectedInchesDivWidthInsideMount) {
        const selectedInchesDivRectWidthInsideMount = selectedInchesDivWidthInsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedInchesDivRectWidthInsideMount.top +
          scrollableDivWidthInsideMount.scrollTopWidthInsideMount -
          (scrollableDivWidthInsideMount.offsetWidthInsideMount - selectedInchesDivRectWidthInsideMount.height) / 2;

        scrollableDivWidthInsideMount.scrollTopWidthInsideMount = scrollPosition;
      } else {
        console.warn("Selected inch div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickedWidthInsideMount = () => {
    setselectedInchesVisibleWidthInsideMount((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  const handleScrolledInchesWhenClickedHeightInsideMount = (inchesHeightInsideMount) => {
    setselectedInchesHeightInsideMount(inchesHeightInsideMount);
    setselectedInchesVisibleHeightInsideMount(false);
    setselectedInchHeightInsideMount(inchesHeightInsideMount);
    setActiveDimensionsinsideMount("insideMount");
    setActiveDimensionsoutsideMount("");

    const scrollableDivHeightInsideMount = scrollableDivRefHeightInsideMount.current;

    setTimeout(() => {
      const selectedInchesDivHeightInsideMount = scrollableDivHeightInsideMount.querySelector(`.${styles.selectedInch}`);

      if (selectedInchesDivHeightInsideMount) {
        const selectedInchesDivRectHeightInsideMount = selectedInchesDivHeightInsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedInchesDivRectHeightInsideMount.top +
          scrollableDivHeightInsideMount.scrollTopHeightInsideMount -
          (scrollableDivHeightInsideMount.offsetHeightInsideMount - selectedInchesDivRectHeightInsideMount.height) / 2;

        scrollableDivHeightInsideMount.scrollTopHeightInsideMount = scrollPosition;
      } else {
        console.warn("Selected inch div not found in the scrollable div");
      }
    }, 0);

    if (inchesHeightInsideMount % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMount);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMount);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMount = inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[inchesHeightInsideMount];
    setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening(newSetPriceHeightInsideMount !== undefined ? newSetPriceHeightInsideMount : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMount === undefined && inchesHeightInsideMount % 5 !== 0) {
      let prevInchHeightInsideMount = inchesHeightInsideMount - 1;
      while (prevInchHeightInsideMount % 5 !== 0) {
        prevInchHeightInsideMount--;
      }

      const nearestMultipleOf5PriceHeightInsideMount = inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[prevInchHeightInsideMount];
      setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening(nearestMultipleOf5PriceHeightInsideMount !== undefined ? nearestMultipleOf5PriceHeightInsideMount : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMount);
      let nextInchHeightInsideMount = prevInchHeightInsideMount + 1;
      while (nextInchHeightInsideMount < inchesHeightInsideMount) {
        nextInchHeightInsideMount++;
      }

    } else if (inchesHeightInsideMount % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[inchesHeightInsideMount]);
    }
  };


  const handleNewSpanClickedHeightInsideMount = () => {
    setselectedInchesVisibleHeightInsideMount((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMount = (inchesWidthOutsideMount) => {
    setselectedInchesWidthOutsideMount(inchesWidthOutsideMount);
    setselectedInchesVisibleWidthOutsideMount(false);
    setselectedInchWidthOutsideMount(inchesWidthOutsideMount);
    setActiveDimensionsinsideMount(""); // Reset the insideMount active dimension
    setActiveDimensionsoutsideMount("outsideMount");

    const scrollableDivWidthOutsideMount = scrollableDivRefWidthOutsideMount.current;

    setTimeout(() => {
      const selectedInchesDivWidthOutsideMount = scrollableDivWidthOutsideMount.querySelector(`.${styles.selectedInch}`);

      if (selectedInchesDivWidthOutsideMount) {
        const selectedInchesDivRectWidthOutsideMount = selectedInchesDivWidthOutsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedInchesDivRectWidthOutsideMount.top +
          scrollableDivWidthOutsideMount.scrollTopWidthOutsideMount -
          (scrollableDivWidthOutsideMount.offsetWidthOutsideMount - selectedInchesDivRectWidthOutsideMount.height) / 2;

        scrollableDivWidthOutsideMount.scrollTopWidthOutsideMount = scrollPosition;
      } else {
        console.warn("Selected inch  div not found in the scrollable div");
      }
    }, 0);
  };

  const handleNewSpanClickedWidthOutsideMount = () => {
    setselectedInchesVisibleWidthOutsideMount((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedHeightOutsideMount = (inchesHeightOutsideMount) => {
    setselectedInchesHeightOutsideMount(inchesHeightOutsideMount);
    setselectedInchesVisibleHeightOutsideMount(false);
    setselectedInchHeightOutsideMount(inchesHeightOutsideMount);
    setActiveDimensionsinsideMount(""); // Reset the insideMount active dimension
    setActiveDimensionsoutsideMount("outsideMount");

    const scrollableDivHeightOutsideMount = scrollableDivRefHeightOutsideMount.current;

    setTimeout(() => {
      const selectedInchesDivHeightOutsideMount = scrollableDivHeightOutsideMount.querySelector(`.${styles.selectedInch}`);

      if (selectedInchesDivHeightOutsideMount) {
        const selectedInchesDivRectHeightOutsideMount = selectedInchesDivHeightOutsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedInchesDivRectHeightOutsideMount.top +
          scrollableDivHeightOutsideMount.scrollTopHeightOutsideMount -
          (scrollableDivHeightOutsideMount.offsetHeightOutsideMount - selectedInchesDivRectHeightOutsideMount.height) / 2;

        scrollableDivHeightOutsideMount.scrollTopHeightOutsideMount = scrollPosition;
      } else {
        console.warn("Selected inch div not found in the scrollable div");
      }
    }, 0);

    if (inchesHeightOutsideMount % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMount);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMount);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightOutsideMount = inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[inchesHeightOutsideMount];
    setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening(newSetPriceHeightOutsideMount !== undefined ? newSetPriceHeightOutsideMount : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightOutsideMount === undefined && inchesHeightOutsideMount % 5 !== 0) {
      let prevInchHeightOutsideMount = inchesHeightOutsideMount - 1;
      while (prevInchHeightOutsideMount % 5 !== 0) {
        prevInchHeightOutsideMount--;
      }

      const nearestMultipleOf5PriceHeightOutsideMount = inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[prevInchHeightOutsideMount];
      setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening(nearestMultipleOf5PriceHeightOutsideMount !== undefined ? nearestMultipleOf5PriceHeightOutsideMount : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightOutsideMount);
      let nextInchHeightOutsideMount = prevInchHeightOutsideMount + 1;
      while (nextInchHeightOutsideMount < inchesHeightOutsideMount) {
        nextInchHeightOutsideMount++;
      }

    } else if (inchesHeightOutsideMount % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[inchesHeightOutsideMount]);
    }
  };


  const handleNewSpanClickedHeightOutsideMount = () => {
    setselectedInchesVisibleHeightOutsideMount((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleSelectedInchAndMatchToScrollerWidthInsideMount = (rulerNumberWidthInsideMount) => {
    setselectedRulerNumberInchWidthInsideMount(rulerNumberWidthInsideMount);
  };

  const handleSelectedInchAndMatchToScrollerHeightInsideMount = (rulerNumberHeightInsideMount) => {
    setselectedRulerNumberInchHeightInsideMount(rulerNumberHeightInsideMount);
  };

  const handleSelectedInchAndMatchToScrollerWidthOutsideMount = (rulerNumberWidthOutsideMount) => {
    setselectedRulerNumberInchWidthOtusideMount(rulerNumberWidthOutsideMount);
  };
  const handleSelectedInchAndMatchToScrollerHeightOutsideMount = (rulerNumberHeightOutsideMount) => {
    setselectedRulerNumberInchHeightOutsideMount(rulerNumberHeightOutsideMount);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledFractionsWhenClickedHEIGHTINSIDEMOUNT = (fractionHeightInsideMount) => {
    setselectedFractionsHeightInsideMount(fractionHeightInsideMount);
    setSelectedFractionVisibleHeightInsideMount(false);
    setselectedFractionHeightInsideMount(fractionHeightInsideMount);
    setActiveDimensionsinsideMount("insideMount");
    setActiveDimensionsoutsideMount("");

    const scrollableDivFractionsHeightInsideMount = scrollableDivRefFractionsHeightInsideMount.current;

    setTimeout(() => {
      const selectedFractionDivHeightInsideMount = scrollableDivFractionsHeightInsideMount.querySelector(`.${styles.selectedFraction}`);

      if (selectedFractionDivHeightInsideMount) {
        const selectedFractionDivRectHeightInsideMount = selectedFractionDivHeightInsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedFractionDivRectHeightInsideMount.top +
          scrollableDivFractionsHeightInsideMount.scrollTopFractionsHeightInsideMount -
          (scrollableDivFractionsHeightInsideMount.offsetHeightFractionsHeightInsideMount - selectedFractionDivRectHeightInsideMount.height) / 2;

        scrollableDivFractionsHeightInsideMount.scrollTopFractionsHeightInsideMount = scrollPosition;
      } else {
        console.warn("Selected fraction div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickFractionsWhenClickedHEIGHTINSIDEMOUNT = () => {
    setSelectedFractionVisibleHeightInsideMount((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledFractionsWhenClickedHEIGHTOUTSIDEMOUNT = (fractionHeightOutsideMount) => {
    setselectedFractionsHeightOutsideMount(fractionHeightOutsideMount);
    setselectedFractionVisibleHeightOutsideMount(false);
    setselectedFractionHeightOutsideMount(fractionHeightOutsideMount);
    setActiveDimensionsinsideMount(""); // Reset the insideMount active dimension
    setActiveDimensionsoutsideMount("outsideMount");

    const scrollableDivFractionsHeightOutsideMount = scrollableDivRefFractionsHeightOutsideMount.current;

    setTimeout(() => {
      const selectedFractionDivHeightOutsideMount = scrollableDivFractionsHeightOutsideMount.querySelector(`.${styles.selectedFraction}`);

      if (selectedFractionDivHeightOutsideMount) {
        const selectedFractionDivRectHeightOutsideMount = selectedFractionDivHeightOutsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedFractionDivRectHeightOutsideMount.top +
          scrollableDivFractionsHeightOutsideMount.scrollTopFractionsHeightOutsideMount -
          (scrollableDivFractionsHeightOutsideMount.offsetHeightFractionsHeightOutsideMount - selectedFractionDivRectHeightOutsideMount.height) / 2;

        scrollableDivFractionsHeightOutsideMount.scrollTopFractionsHeightOutsideMount = scrollPosition;
      } else {
        console.warn("Selected fraction div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickFractionsWhenClickedHEIGHTOUTSIDEMOUNT = () => {
    setselectedFractionVisibleHeightOutsideMount((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledFractionsWhenClickedWIDTHINSIDEMOUNT = (fractionWidthWidthInsideMount) => {
    setselectedFractionsWidthInsideMount(fractionWidthWidthInsideMount);
    setselectedFractionVisibleWidthInsideMount(false);
    setselectedFractionWidthInsideMount(fractionWidthWidthInsideMount);
    setActiveDimensionsinsideMount("insideMount");
    setActiveDimensionsoutsideMount("");

    const scrollableDivFractionsWidthInsideMount = scrollableDivRefFractionsWidthInsideMount.current;

    setTimeout(() => {
      const selectedFractionDivWidthInsideMount = scrollableDivFractionsWidthInsideMount.querySelector(`.${styles.selectedFraction}`);

      if (selectedFractionDivWidthInsideMount) {
        const selectedFractionDivRectWidthInsideMount = selectedFractionDivWidthInsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedFractionDivRectWidthInsideMount.top +
          scrollableDivFractionsWidthInsideMount.scrollTopFractionsWidthInsideMount -
          (scrollableDivFractionsWidthInsideMount.offsetHeightFractionsWidthInsideMount - selectedFractionDivRectWidthInsideMount.height) / 2;

        scrollableDivFractionsWidthInsideMount.scrollTopFractionsWidthInsideMount = scrollPosition;
      } else {
        console.warn("Selected fraction div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickFractionsWhenClickedWIDTHINSIDEMOUNT = () => {
    setselectedFractionVisibleWidthInsideMount((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledFractionsWhenClickedWIDTHOUTSIDEMOUNT = (fractionWidthOutsideMount) => {
    setselectedFractionsWidthOutsideMount(fractionWidthOutsideMount);
    setselectedFractionVisibleWidthOutsideMount(false);
    setselectedFractionWidthOutsideMount(fractionWidthOutsideMount);
    setActiveDimensionsinsideMount(""); // Reset the insideMount active dimension
    setActiveDimensionsoutsideMount("outsideMount");

    const scrollableDivFractionsWidthOutsideMount = scrollableDivRefFractionsWidthOutsideMount.current;

    setTimeout(() => {
      const selectedFractionDivWidthOutsideMount = scrollableDivFractionsWidthOutsideMount.querySelector(`.${styles.selectedFraction}`);

      if (selectedFractionDivWidthOutsideMount) {
        const selectedFractionDivRectWidthOutsideMount = selectedFractionDivWidthOutsideMount.getBoundingClientRect();
        const scrollPosition =
          selectedFractionDivRectWidthOutsideMount.top +
          scrollableDivFractionsWidthOutsideMount.scrollTopFractionsWidthOutsideMount -
          (scrollableDivFractionsWidthOutsideMount.offsetHeightFractionsWidthOutsideMount - selectedFractionDivRectWidthOutsideMount.height) / 2;

        scrollableDivFractionsWidthOutsideMount.scrollTopFractionsWidthOutsideMount = scrollPosition;
      } else {
        console.warn("Selected fraction div not found in the scrollable div");
      }
    }, 0);
  };
  const handleNewSpanClickFractionsWhenClickedWIDTHOUTSIDEMOUNT = () => {
    setselectedFractionVisibleWidthOutsideMount((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  // Function to calculate sum of prices
  const calculateSumTotal = () => {
    let priceHeightInsideMount = parseFloat(newSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening) || 0;
    let priceWidthInsideMount = parseFloat(inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening[selectedInchesWidthInsideMount]) || 0;

    // Add prices based on selected options
    switch (active_wand_cordless_motorized) {
      case 1:
        // If "wand" option is selected
        priceHeightInsideMount += parseFloat(WandPriceCMSRollerBlindsRoomDarkening) || 0;
        break;
      case 2:
        // If "cordless" option is selected
        priceHeightInsideMount += parseFloat(cordlesspriceCMSRollerBlindsRoomDarkening) || 0;
        break;
      case 3:
        // If "motorized" option is selected
        priceHeightInsideMount += parseFloat(motorizedpriceCMSRollerBlindsRoomDarkening) || 0;
        break;
      default:
        // Default case when none of the options are selected
        break;
    }

    return priceHeightInsideMount + priceWidthInsideMount;
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


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const [isCartVisible, setIsCartVisible] = useState(false);



  const cartRef = useRef(null);

  const handleSeeCartClick = () => {
    if (cartRef.current) {
      cartRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };





  const handleAddToCart = async () => {

    const newTotalPrice = getTotalPrice();

    const cartData = {
      productName1RollerBlindsRoomDarkening: productName1RollerBlindsRoomDarkening,
      productName2RollerBlindsRoomDarkening: productName2RollerBlindsRoomDarkening,
      roomnameRollerBlindsRoomDarkening: roomnameRollerBlindsRoomDarkening,
      WandPriceCMSRollerBlindsRoomDarkening: WandPriceCMSRollerBlindsRoomDarkening,
      cordlesspriceCMSRollerBlindsRoomDarkening: cordlesspriceCMSRollerBlindsRoomDarkening,
      motorizedpriceCMSRollerBlindsRoomDarkening: motorizedpriceCMSRollerBlindsRoomDarkening,
      totalpricecalculated: newTotalPrice,
    };

    sessionStorage.setItem('cartData', JSON.stringify(cartData));

    window.location.href = '/addtocart'; // Update the URL to match your cart page
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////



  return (

    <>
      <div className={styles.page}>
        <span className={styles.header_piece}>
          <HeaderPiece></HeaderPiece>
        </span>

        <span className={styles.page_wrapper}>

          <ol className={`${styles.left_half_of_page} ${showFooter ? styles.scaleDown : ''}`}>
            =             <div className={`${styles.left_half_of_page_wrapper} ${showLeftHalf ? styles.imagevisible : styles.imagehidden}`}>

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
                          width={500}
                          height={500}
                          className={styles.left_first_image_render}
                          src="/GREYMATCHER/ETB5004GREY.png"
                          alt="Default Image"
                        />
                        <h3 className={styles.left_imageContainer_image_itself1_label}>Welcome</h3>
                      </div>
                    </div>
                  )}

                  {selectedMaterial ? (
                    <div className={styles.left_imageContainer_wrapper}>
                      <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
                        <Image
                          className={styles.left_first_image_render}
                          src={selectedColorImages.length > 0 ? selectedColorImages[0].src : ''}
                          alt='image'
                          width={300}
                          height={300}
                        />

                      </div>
                      <h3 className={styles.left_imageContainer_image_itself1_label}>{selectedMaterial.label}</h3>
                    </div>

                  ) : (

                    <>

                      {selectedImagesTop?.length > 0 && (
                        <div className={styles.left_imageContainer_wrapper}>
                          <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
                            <span className={styles.left_imageContainer_image_itself1_label}>
                              Top Rail
                            </span>
                            <div className={styles.left_first_image_render_wrapper}>
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
                                  (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key1 === selectedImagesTop[0]) ||
                                    Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key2 === selectedImagesTop[0])
                                  )?.label
                                }
                              />

                            </div>
                          </div>
                        </div>
                      )}

                      {bottomImagesEnabled && selectedImagesBottom?.length > 0 && (
                        <div className={styles.left_imageContainer_wrapper}>
                          <div className={`${styles.left_first_image_render_container} ${styles.left_first_image_render_container_styled}`}>
                            <span className={styles.left_imageContainer_image_itself1_label}>
                              Bottom Rail
                            </span>
                            <div className={styles.left_first_image_render_wrapper}>
                              <Image
                                width={200}
                                height={200}
                                className={styles.left_first_image_render}
                                src={
                                  (Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key3 === selectedImagesBottom[0]) || {}).src
                                }
                                alt={
                                  (Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key3 === selectedImagesBottom[0]) || {}).label
                                }
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      {renderMatcherImage()}

                    </>

                  )}

                </div>
              </div>
            </div>
          </ol>

          <ol className={styles.right_half}>
            <span className={styles.right_half_wrapper}>

              <div className={styles.right_half_top}>

                <div className={styles.top_title_area}>

                  <span className={styles.product_title_styles_styles_and_product_roomname}>
                    <h1 className={styles.product_title_styles}>
                      {productName1RollerBlindsRoomDarkening}
                    </h1>
                    <h1 className={styles.product_roomname}>
                      <p>Room Name:</p> <p>{roomnameRollerBlindsRoomDarkening}</p>
                    </h1>
                  </span>

                  <h1 className={styles.product_lightening_styles}>
                    {productName2RollerBlindsRoomDarkening}
                  </h1>

                </div>

                <div className={styles.star_group}>
                  <span className={styles.star_group_wrapper}>
                    <Image alt="star" width={100} height={100} className={styles.star_6} src="/star.png" />
                    <Image alt="star" width={100} height={100} className={styles.star_7} src="/star.png" />
                    <Image alt="star" width={100} height={100} className={styles.star_8} src="/star.png" />
                    <Image alt="star" width={100} height={100} className={styles.star_9} src="/star.png" />
                    <Image alt="star" width={100} height={100} className={styles.star_10} src="/star.png" />
                  </span>
                </div>




                <div
                  className={styles.a_distinctive_look_that}>
                  A distinctive look that makes a statement, this revolutionary sheer shade
                  adds personality to any room. These zebra shades are made with two pieces
                  of fabric, which both have alternating panels/bands.
                </div>

              </div>


              <div className={styles.top_divider_line}></div>

              <div className={styles.inside_mount_and_outside_mount_whole_wrapper}>

                <span className={styles.inside_mount_and_outside_mount_group_titles_wrapper}>

                  <div className={styles.select_mount_type_long_rectangle}>

                    <div className={styles.select_mount_type_short_rectangle}>

                      <div className={styles.select_mount_type_title}>
                        <span className={styles.select_mount_type_title_tag}>1</span>
                        Choose Your Mount Type
                      </div>

                    </div>
                  </div>

                  <div className={styles.ellipse_and_type}>
                    <div
                      className={`${styles.inside_mount_ellipse} ${active_inside_outside_ellipse === 1 ? styles.active_inside_outside_ellipse : ''}`}
                      onClick={() => handleClickInside_And_Outside_Ellipses(1)}>
                    </div>
                    <div className={styles.inside_mount_choice}>Inside Mount</div>

                    <div
                      className={`${styles.outside_mount_ellipse} ${active_inside_outside_ellipse === 2 ? styles.active_inside_outside_ellipse : ''}`}
                      onClick={() => handleClickInside_And_Outside_Ellipses(2)}>
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

                          <span className={styles.mount_measurement_instructions_wrapper}>
                            <div className={styles.mount_measurement_instructions}>
                              <p className={styles.measurement_instructions_title}>
                                Measurement Instructions:
                              </p>
                            </div>

                            <div
                              className={styles.step_1_inside_mount}
                            >
                              <p className={styles.step_tag}> Step 1:</p>
                              <span className={styles.step_tag_description_wrapper}>
                                <p className={styles.step_tag_description}>
                                  Depth Of Window Frame Ledge Must Have 3”. (As Shown In Picture Above With The Orange Lines)
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
                                  (As Shown In Picture Above With The Orange Lines) The Smallest Of The 3 Measurements Is The Number You Will Input For Size On Width.
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
                                  (As Shown In Picture Above With The Orange Liness) This Number You Will Input For Size On Height.
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
                                  CHOOSE WIDTH INSIDE MOUNT:
                                </div>
                                <div className={styles.key_locker2}>
                                  <h1>
                                    Price Width Inside Mount: ($) {inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening[selectedInchesWidthInsideMount] !== undefined
                                      ? inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening[selectedInchesWidthInsideMount]
                                      : "no price set for this value"}
                                  </h1>
                                </div>
                                <div className={styles.enter_width_inside_mount_rectangle_1}>

                                  <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                    <div className={styles.enter_inches_group_wrapper}>
                                      <div className={styles.inches_subtitle}
                                      >
                                        <p>INCHES WIDTH INSIDE MOUNT</p>
                                      </div>


                                      <div className={styles.inches_scroller_wrapper}>

                                        <div ref={scrollableDivRefWidthInsideMount} className={styles.inches_scroller_div}>

                                          {selectedInchesVisibleWidthInsideMount ? (
                                            <span className={styles.span_visibility_1}>
                                              {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledInchesWhenClickedWidthInsideMount(inchesWidthInsideMount)}
                                                  className={selectedInchesWidthInsideMount === inchesWidthInsideMount ? styles.selectedInch : ''}
                                                >
                                                  {inchesWidthInsideMount}
                                                </div>
                                              ))}
                                            </span>
                                          ) : (
                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMount}>
                                              {selectedInchesWidthInsideMount}

                                            </span>
                                          )}
                                        </div>
                                      </div>
                                    </div>


                                    <div className={styles.enter_fractions_group_wrapper}>
                                      <div className={styles.fractions_subtitle}
                                      >
                                        <p>FRACTIONS WIDTH INSIDE MOUNT</p>
                                      </div>
                                      <div className={styles.fractions_scroller_wrapper}>

                                        <div ref={scrollableDivRefFractionsWidthInsideMount} className={styles.fractions_scroller_div}>
                                          {selectedFractionVisibleWidthInsideMount ? (
                                            <span className={styles.span_visibility_1}>
                                              {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionWidthWidthInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledFractionsWhenClickedWIDTHINSIDEMOUNT(fractionWidthWidthInsideMount)}
                                                  className={selectedFractionsWidthInsideMount === fractionWidthWidthInsideMount ? styles.selectedFraction : ''}
                                                >
                                                  {fractionWidthWidthInsideMount}
                                                </div>
                                              ))}
                                            </span>

                                          ) : (
                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedWIDTHINSIDEMOUNT}>
                                              {selectedFractionsWidthInsideMount}
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
                                                {[selectedInchWidthInsideMount || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedInchAndMatchToScrollerWidthInsideMount(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedInchWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                  >
                                                    {rulerNumberWidthAndHeightInsideMount}
                                                  </div>
                                                ))}
                                              </div>
                                            </span>

                                            <span className={styles.ruler_line_group}>
                                              <span className={styles.line_0}></span>
                                              <div className={styles.ruler_line_number_inches}>
                                                {[selectedInchHeightInsideMount].map((selectedInchHeightInsideMount, index) => {
                                                  const yourArrayOfNumbers = ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
                                                  const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInchHeightInsideMount) + 1;
                                                  const nextNumber = yourArrayOfNumbers[nextNumberIndex];


                                                  return (

                                                    <>
                                                      <div className={styles.selected_next_number}>
                                                        <div
                                                          key={index}
                                                          onClick={() => handleSelectedInchAndMatchToScrollerWidthInsideMount(nextNumber)}
                                                          className={selectedInchHeightInsideMount === nextNumber ? styles.selected_next_number : ''}
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
                                    Window Width Inside Mount: {selectedInchWidthInsideMount} - {selectedFractionWidthInsideMount}
                                    {selectedFractionWidthInsideMount && " Inches Long"}
                                  </div>

                                </div>
                              </div>

                              <div className={styles.inches_and_fractions_and_ruler_group}>
                                <div className={styles.width_inside_mount_sub_title}>
                                  CHOOSE HEIGHT INSIDE MOUNT:
                                </div>
                                <div className={styles.key_locker2}>

                                  <h1>
                                    Price Height Inside Mount: ($)
                                    {newSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening !== undefined
                                      ? newSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening
                                      : "no price set"}
                                  </h1>

                                </div>
                                <div className={styles.enter_width_inside_mount_rectangle_1}>

                                  <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                    <div className={styles.enter_inches_group_wrapper}>
                                      <div className={styles.inches_subtitle}
                                      >
                                        <p>INCHES HEIGHT INSIDE MOUNT</p>
                                      </div>

                                      <div className={styles.inches_scroller_wrapper}>
                                        <div ref={scrollableDivRefHeightInsideMount} className={styles.inches_scroller_div}>
                                          {selectedInchesVisibleHeightInsideMount ? (
                                            <span className={styles.span_visibility_1}>
                                              {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledInchesWhenClickedHeightInsideMount(inchesHeightInsideMount)}
                                                  className={selectedInchesHeightInsideMount === inchesHeightInsideMount ? styles.selectedInch : ''}
                                                >
                                                  {inchesHeightInsideMount}
                                                </div>
                                              ))}
                                            </span>
                                          ) : (
                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMount}>
                                              {selectedInchesHeightInsideMount}

                                            </span>
                                          )}

                                        </div>
                                      </div>
                                    </div>


                                    <div className={styles.enter_fractions_group_wrapper}>
                                      <div className={styles.fractions_subtitle}
                                      >
                                        <p>FRACTIONS HEIGHT INSIDE MOUNT</p>
                                      </div>
                                      <div className={styles.fractions_scroller_wrapper}>
                                        <div ref={scrollableDivRefFractionsHeightInsideMount} className={styles.fractions_scroller_div}>
                                          {selectedFractionVisibleHeightInsideMount ? (
                                            <span className={styles.span_visibility_1}>
                                              {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionHeight, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledFractionsWhenClickedHEIGHTINSIDEMOUNT(fractionHeight)}
                                                  className={selectedFractionsHeightInsideMount === fractionHeight ? styles.selectedFraction : ''}
                                                >
                                                  {fractionHeight}
                                                </div>

                                              ))}
                                            </span>
                                          ) : (
                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedHEIGHTINSIDEMOUNT}>
                                              {selectedFractionsHeightInsideMount}
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
                                                {[selectedInchHeightInsideMount || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedInchAndMatchToScrollerHeightInsideMount(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedInchHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                  >
                                                    {rulerNumberWidthAndHeightInsideMount}
                                                  </div>

                                                ))}

                                              </div>

                                            </span>

                                            <span className={styles.ruler_line_group}>
                                              <span className={styles.line_0}></span>
                                              <div className={styles.ruler_line_number_fractions}>

                                                {[selectedInchHeightInsideMount].map((selectedInchHeightInsideMount, index) => {
                                                  const yourArrayOfNumbers = ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];

                                                  const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInchHeightInsideMount) + 1;
                                                  const nextNumber = yourArrayOfNumbers[nextNumberIndex];

                                                  return (

                                                    <>

                                                      <div className={styles.selected_next_number}>
                                                        <div
                                                          key={index}
                                                          onClick={() => handleSelectedInchAndMatchToScrollerHeightInsideMount(nextNumber)}
                                                          className={selectedInchHeightInsideMount === nextNumber ? styles.selected_next_number : ''}
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
                                    Window Height Inside Mount: {selectedInchHeightInsideMount} - {selectedFractionHeightInsideMount}
                                    {selectedFractionHeightInsideMount && " Inches High"}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className={styles.sum_total_and_tag_wrapper}>
                              <div className={styles.sum_total_and_tag}>
                                <div className={styles.sum_total}>
                                  ${calculateSumTotal().toFixed(2)}
                                </div>
                                <div className={styles.sum_total_tag_1_wrapper}>
                                  <div className={styles.sum_total_tag_1}>
                                    For size:
                                    {activeDimensionsinsideMount === "insideMount" && (
                                      <>
                                        <div>
                                          {selectedInchesWidthInsideMount ? `${selectedInchesWidthInsideMount}"` : ""}
                                          {selectedFractionsWidthInsideMount ? ` ${selectedFractionsWidthInsideMount}"` : ""}
                                        </div>
                                        <p>X</p>
                                        <div>
                                          {selectedInchesHeightInsideMount ? `${selectedInchesHeightInsideMount}"` : ""}
                                          {selectedFractionsHeightInsideMount ? ` ${selectedFractionsHeightInsideMount}"` : ""}
                                        </div>
                                      </>
                                    )}

                                    {activeDimensionsoutsideMount === "outsideMount" && (
                                      <>
                                        <div>
                                          {selectedInchesWidthOutsideMount ? `${selectedInchesWidthOutsideMount}"` : ""}
                                          {selectedFractionsWidthOutsideMount ? ` ${selectedFractionsWidthOutsideMount}"` : ""}
                                        </div>
                                        X
                                        <div>
                                          {selectedInchesHeightOutsideMount ? `${selectedInchesHeightOutsideMount}"` : ""}
                                          {selectedFractionsHeightOutsideMount ? ` ${selectedFractionsHeightOutsideMount}"` : ""}
                                        </div>


                                      </>
                                    )}
                                  </div>

                                  <div className={styles.sum_total_tag_1}>
                                    <div>
                                      {active_wand_cordless_motorizedRenderingContent ? `Lift Type: ${active_wand_cordless_motorizedRenderingContent}` : ""}
                                    </div>
                                    <div>
                                      {active_wand_left_choice_rendering_content ? ` ${active_wand_left_choice_rendering_content}` : ""}
                                    </div>
                                    <div>
                                      {active_wand_right_choice_rendering_content ? ` ${active_wand_right_choice_rendering_content}` : ""}
                                    </div>
                                  </div>
                                </div>

                                <div className={styles.see_cart} onClick={handleSeeCartClick}>
                                  <p>See Cart</p>
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
                          <span className={styles.mount_measurement_instructions_wrapper}>

                            <div className={styles.mount_measurement_instructions}>

                              <p className={styles.measurement_instructions_title}>
                                Measurement Instructions:
                              </p>

                              <div className={styles.step_1_outside_mount}>
                                <p className={styles.step_tag}> Step 1: </p>
                                <span className={styles.step_tag_description_wrapper}>
                                  <p className={styles.step_tag_description}>
                                    Horizontal Direction (Width) Measure Width Including Window Trim In The Center
                                    (As Shown In Picture Above With The Orange Lines) This Number You Will Input For Size On Width.</p>
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
                                    (As Shown In Picture Above With The Orange Lines) This Number You Will Input For Size On Height.
                                  </p>
                                  <p className={styles.step_tag_description_note}>Note: We Will Add 5-1/2” On Height To Allow Overlap Of Trim & Space For Top Cassette.</p>
                                </span>
                              </div>
                            </div>
                          </span>
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
                              </div>
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
                                  CHOOSE WIDTH OUTSIDE MOUNT:
                                </div>

                                <div className={styles.key_locker2}>
                                  <h1>
                                    Price Width Outside Mount: ($) {inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening
                                    [selectedInchesWidthOutsideMount] !== undefined
                                      ? inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening[selectedInchesWidthOutsideMount]
                                      : "no price set for this value"}
                                  </h1>
                                </div>

                                <div className={styles.enter_width_inside_mount_rectangle_1}>

                                  <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                    <div className={styles.enter_inches_group_wrapper}>

                                      <div className={styles.inches_subtitle}
                                      >
                                        <p>INCHES WIDTH OUTSIDE MOUNT</p>
                                      </div>

                                      <div className={styles.inches_scroller_wrapper}>
                                        <div ref={scrollableDivRefWidthOutsideMount} className={styles.inches_scroller_div}>
                                          {selectedInchesVisibleWidthOutsideMount ? (

                                            <span className={styles.span_visibility_1}>
                                              {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledInchesWhenClickedWidthOutsideMount(inchesWidthOutsideMount)}
                                                  className={selectedInchesWidthOutsideMount === inchesWidthOutsideMount ? styles.selectedInch : ''}
                                                >
                                                  {inchesWidthOutsideMount}
                                                </div>
                                              ))}
                                            </span>
                                          ) : (
                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMount}
                                            >
                                              {selectedInchesWidthOutsideMount}
                                            </span>
                                          )}
                                        </div>
                                      </div>
                                      <div className={styles.click_to_choose}>
                                        Click To Choose
                                      </div>
                                    </div>

                                    <div className={styles.enter_fractions_group_wrapper}>
                                      <div className={styles.fractions_subtitle}
                                      >
                                        <p>FRACTIONS WIDTH OUTSIDE MOUNT</p>
                                      </div>
                                      <div className={styles.fractions_scroller_wrapper}>

                                        <div ref={scrollableDivRefFractionsWidthOutsideMount} className={styles.fractions_scroller_div}>
                                          {selectedFractionVisibleWidthOutsideMount ? (
                                            <span className={styles.span_visibility_1}>
                                              {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionWidthOutsideMount, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledFractionsWhenClickedWIDTHOUTSIDEMOUNT(fractionWidthOutsideMount)}
                                                  className={selectedFractionsWidthOutsideMount === fractionWidthOutsideMount ? styles.selectedFraction : ''}
                                                >
                                                  {fractionWidthOutsideMount}
                                                </div>
                                              ))}
                                            </span>

                                          ) : (
                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedWIDTHOUTSIDEMOUNT}>
                                              {selectedFractionsWidthOutsideMount}
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
                                                {[selectedInchWidthOutsideMount || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedInchAndMatchToScrollerWidthOutsideMount(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedInchWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerWIDTH(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionWidthOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                  >
                                                    {rulerNumberWidthAndHeightInsideMount}
                                                  </div>
                                                ))}
                                              </div>
                                            </span>


                                            <span className={styles.ruler_line_group}>
                                              <span className={styles.line_0}></span>
                                              <div className={styles.ruler_line_number_inches}>
                                                {[selectedInchWidthOutsideMount].map((selectedInchWidthOutsideMount, index) => {
                                                  const yourArrayOfNumbers = ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"];
                                                  const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInchWidthOutsideMount) + 1;
                                                  const nextNumber = yourArrayOfNumbers[nextNumberIndex];

                                                  return (


                                                    <>
                                                      <div className={styles.selected_next_number}>
                                                        <div key={index}
                                                          onClick={() => handleSelectedInchAndMatchToScrollerWidthOutsideMount(nextNumber)}
                                                          className={selectedInchWidthOutsideMount === nextNumber ? styles.selected_next_number : ''}
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
                                    Window Width Outside Mount: {selectedInchWidthOutsideMount} - {selectedFractionWidthOutsideMount}
                                    {selectedFractionWidthOutsideMount && " Inches Long"}
                                  </div>

                                </div>
                              </div>


                              <div className={styles.inches_and_fractions_and_ruler_group}>
                                <div className={styles.width_inside_mount_sub_title}>
                                  CHOOSE HEIGHT OUTSIDE MOUNT:
                                </div>
                                <div className={styles.key_locker2}>
                                  <h1>
                                    Price Height Outside Mount: ($) {newSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening !== undefined
                                      ? newSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening
                                      : "no price set"}
                                  </h1>
                                </div>

                                <div className={styles.enter_width_inside_mount_rectangle_1}>

                                  <div className={styles.enter_inches_group_wrapper_and_enter_fractions_group_wrapper}>
                                    <div className={styles.enter_inches_group_wrapper}>
                                      <div className={styles.inches_subtitle}
                                      >
                                        <p>INCHES HEIGHT OUTSIDE MOUNT</p>
                                      </div>

                                      <div className={styles.inches_scroller_wrapper}>
                                        <div ref={scrollableDivRefHeightOutsideMount} className={styles.inches_scroller_div}>
                                          {selectedInchesVisibleHeightOutsideMount ? (

                                            <span className={styles.span_visibility_1}>

                                              {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMount, index) => (

                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledInchesWhenClickedHeightOutsideMount(inchesHeightOutsideMount)}
                                                  className={selectedInchesHeightOutsideMount === inchesHeightOutsideMount ? styles.selectedInch : ''}
                                                >
                                                  {inchesHeightOutsideMount}
                                                </div>

                                              ))}

                                            </span>

                                          ) : (

                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMount}>
                                              {selectedInchesHeightOutsideMount}
                                            </span>

                                          )}

                                        </div>
                                      </div>

                                      <div className={styles.click_to_choose}>
                                        Click To Choose
                                      </div>

                                    </div>

                                    <div className={styles.enter_fractions_group_wrapper}>
                                      <div className={styles.fractions_subtitle}
                                      >
                                        <p>FRACTIONS HEIGHT OUTSIDE MOUNT</p>
                                      </div>
                                      <div className={styles.fractions_scroller_wrapper}>
                                        <div ref={scrollableDivRefFractionsHeightOutsideMount} className={styles.fractions_scroller_div}>
                                          {selectedFractionVisibleHeightOutsideMount ? (
                                            <span className={styles.span_visibility_1}>
                                              {["0", "1/8", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"].map((fractionHeight, index) => (
                                                <div
                                                  key={index}
                                                  onClick={() => handleScrolledFractionsWhenClickedHEIGHTOUTSIDEMOUNT(fractionHeight)}
                                                  className={selectedFractionsHeightOutsideMount === fractionHeight ? styles.selectedFraction : ''}
                                                >
                                                  {fractionHeight}
                                                </div>
                                              ))}
                                            </span>
                                          ) : (
                                            <span className={styles._scroller_div_span} onClick={handleNewSpanClickFractionsWhenClickedHEIGHTOUTSIDEMOUNT}>
                                              {selectedFractionsHeightOutsideMount}
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
                                                {[selectedInchHeightOutsideMount || '0'].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedInchAndMatchToScrollerHeightOutsideMount(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedInchHeightOutsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number : ''}
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
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                {["1/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                {["3/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                {["1/2"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                  >
                                                    {rulerNumberWidthAndHeightInsideMount}
                                                  </div>

                                                ))}

                                              </div>

                                            </span>

                                            <span className={styles.ruler_line_group}>

                                              <span className={styles.line_3}></span>

                                              <div className={styles.ruler_line_number_fractions}>

                                                {["5/8"].map((rulerNumberWidthAndHeightInsideMount, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    onClick={() => handleSelectedFractionhAndMatchToScrollerHEIGHT(rulerNumberWidthAndHeightInsideMount)}
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
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
                                                    className={selectedFractionsHeightInsideMount === rulerNumberWidthAndHeightInsideMount ? styles.selected_ruler_number_FRACTION : ''}
                                                  >
                                                    {rulerNumberWidthAndHeightInsideMount}
                                                  </div>

                                                ))}
                                              </div>
                                            </span>


                                            <span className={styles.ruler_line_group}>
                                              <span className={styles.line_0}></span>
                                              <div className={styles.ruler_line_number_inches}>
                                                {[selectedInchHeightOutsideMount].map((selectedInchHeightOutsideMount, index) => {
                                                  const yourArrayOfNumbers = ["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"];
                                                  const nextNumberIndex = yourArrayOfNumbers.indexOf(selectedInchHeightOutsideMount) + 1;
                                                  const nextNumber = yourArrayOfNumbers[nextNumberIndex];

                                                  return (
                                                    <>
                                                      <div className={styles.selected_next_number}>
                                                        <div key={index}
                                                          onClick={() => handleSelectedInchAndMatchToScrollerHeightOutsideMount(nextNumber)}
                                                          className={selectedInchHeightOutsideMount === nextNumber ? styles.selected_next_number : ''}
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
                                    Window Height Outside Mount: {selectedInchHeightOutsideMount} - {selectedFractionHeightOutsideMount}
                                    {selectedFractionHeightOutsideMount && " Inches High"}
                                  </div>





                                </div>


                              </div>



                            </div>


                            <div className={styles.sum_total_and_tag_wrapper}>


                              <div className={styles.sum_total_and_tag}>

                                <div className={styles.sum_total}>
                                  ${calculateSumTotal().toFixed(2)}
                                </div>


                                <div className={styles.sum_total_tag_1_wrapper}>
                                  <div className={styles.sum_total_tag_1}>
                                    For size:

                                    {activeDimensionsinsideMount === "insideMount" && (
                                      <>
                                        <div>
                                          {selectedInchesWidthInsideMount ? `${selectedInchesWidthInsideMount}"` : ""}
                                          {selectedFractionsWidthInsideMount ? ` ${selectedFractionsWidthInsideMount}"` : ""}
                                        </div>
                                        <p>X</p>
                                        <div>
                                          {selectedInchesHeightInsideMount ? `${selectedInchesHeightInsideMount}"` : ""}
                                          {selectedFractionsHeightInsideMount ? ` ${selectedFractionsHeightInsideMount}"` : ""}
                                        </div>
                                      </>
                                    )}



                                    {activeDimensionsoutsideMount === "outsideMount" && (
                                      <>
                                        <div>
                                          {selectedInchesWidthOutsideMount ? `${selectedInchesWidthOutsideMount}"` : ""}
                                          {selectedFractionsWidthOutsideMount ? ` ${selectedFractionsWidthOutsideMount}"` : ""}
                                        </div>
                                        X
                                        <div>
                                          {selectedInchesHeightOutsideMount ? `${selectedInchesHeightOutsideMount}"` : ""}
                                          {selectedFractionsHeightOutsideMount ? ` ${selectedFractionsHeightOutsideMount}"` : ""}
                                        </div>
                                      </>
                                    )}

                                  </div>
                                  <div className={styles.sum_total_tag_1}>
                                    <div>
                                      {active_wand_cordless_motorizedRenderingContent ? `Lift Type: ${active_wand_cordless_motorizedRenderingContent}` : ""}
                                    </div>
                                    <div>
                                      {active_wand_left_choice_rendering_content ? ` ${active_wand_left_choice_rendering_content}` : ""}
                                    </div>
                                    <div>
                                      {active_wand_right_choice_rendering_content ? ` ${active_wand_right_choice_rendering_content}` : ""}
                                    </div>
                                  </div>
                                </div>

                                <div className={styles.see_cart} onClick={handleSeeCartClick}>
                                  <p>See Cart</p>
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

                <div className={styles.select_color_group_whole_wrapper}>

                  <span className={styles.select_color_group_titles_wrapper}>
                    <div className={styles.select_color_long_rectangle}
                    >
                      <div className={styles.select_color_short_rectangle}>

                        <div className={styles.select_color_title}>
                          <span className={styles.select_color_group_title_tag}>2</span>
                          Select Color / Material
                        </div>

                      </div>
                    </div>

                    <div className={styles.ellipse_and_type}>
                      <div className={styles.select_color_subtitle}> Select Material</div>
                      <div>Click On A Color To Choose And Add</div>
                    </div>

                  </span>

                  <div className={styles.selectColorImageCollection}>
                    {Object.keys(colorData).map((color) => (
                      <div key={color} className={styles[color.toLowerCase()]}>

                        <div className={styles.selectColorImageCollection_wrapper} >
                          <span>
                            <p className={styles.color_section_title}>{color}</p>
                          </span>
                          <span>
                            {renderColorList(colorData[color])}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>


              <div className={styles.review_your_order_seperator_line}></div>

              <div className={styles.select_lift_type_group_whole_wrapper}>

                <span className={styles.select_lift_type_group_titles_wrapper}>

                  <div className={styles.select_lift_type_long_rectangle}>

                    <div className={styles.select_lift_type_short_rectangle}>

                      <div className={styles.select_lift_type_title}>
                        <span className={styles.select_lift_type_title_tag}>3</span>
                        Select Lift Type
                      </div>

                    </div>
                  </div>

                  <div className={styles.ellipse_and_type}>
                    <div className={styles.select_lift_type_subtitle}>Add Lift Feature</div>
                    <div>
                      Select Wand, Cordless Or Motorized
                    </div>
                  </div>

                </span>



                <div className={styles.select_chain_option1_wrapper}>

                  <div className={styles.select_chain_option1_ellipse_and_options}>




                    <div className={styles.select_chain_options___side_wrapper}>

                      <div className={styles.select_chain_options___side}>

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

                        <div className={styles.wand_extra_buttons}>
                          <button>
                            <div
                              className={`${styles.select_chain_left_text} ${active_wand_left_choice === 4 ? styles.active_wand_left_choice : ''}`}
                              onClick={() => handleLiftFeatureEllipsess(4)}
                            >
                              Left
                            </div>
                          </button>

                          <button>
                            <div
                              className={`${styles.select_chain_right_text} ${active_wand_right_choice === 5 ? styles.active_wand_right_choice : ''}`}
                              onClick={() => handleLiftFeatureEllipsess(5)}
                            >
                              Right
                            </div>
                          </button>
                        </div>

                      </div>


                      <div className={styles.select_chain_options___side}>
                        <div className={styles.select_chain_option1_options}>

                          <div className={styles.wand_subtitle}>
                            <span>Free</span>
                            <span className={styles.price_bar}>${WandPriceCMSRollerBlindsRoomDarkening}</span>
                          </div>

                          <div className={styles.options_price_seperator}></div>

                          <span className={styles.priced_item}>Wand</span>

                          <div className={styles.select_chain_option1_ellipse_wrapper}>
                            <span
                              className={`${styles.wand_ellipse} ${active_wand_cordless_motorized === 1 ? styles.active_wand_cordless_motorized : ''}`}
                              onClick={() => handleLiftFeatureEllipsess(1)}
                            ></span>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>


                <div className={styles.select_chain_option2_wrapper}>
                  <div className={styles.select_chain_option2_ellipse_and_options}>



                    <div className={styles.select_chain_options___side_wrapper}>

                      <div className={styles.select_chain_options___side}>
                        <div className={styles.cord_less_option_image_placeholder}>
                          <Image
                            width={400}
                            height={400}
                            alt="showrightchain"
                            src="/cordlesslift.png"
                          />
                        </div>
                      </div>

                      <div className={styles.select_chain_options___side}>

                        <div className={styles.select_chain_option2_options}>

                          <div className={styles.cord_less_subtitle}>
                            <span className={styles.price_bar}>${cordlesspriceCMSRollerBlindsRoomDarkening}</span>
                          </div>

                          <div className={styles.options_price_seperator}></div>

                          <span className={styles.priced_item}>Cord Less</span>

                          <div className={styles.select_chain_option2_ellipse_wrapper}>
                            <span
                              className={`${styles.cord_less_ellipse} ${active_wand_cordless_motorized === 2 ? styles.active_wand_cordless_motorized : ''}`}
                              onClick={() => handleLiftFeatureEllipsess(2)}
                            ></span>
                          </div>


                        </div>
                      </div>

                    </div>

                  </div>
                </div>


                <div className={styles.select_chain_option3_wrapper}>
                  <div className={styles.select_chain_option3_ellipse_and_options}>

                    <div className={styles.select_chain_options___side_wrapper}>

                      <div className={styles.select_chain_options___side}>
                        <div className={styles.motorized_option_image_placeholder}>
                          <Image
                            width={400}
                            height={400}
                            alt="showrightchain"
                            src="/motorizedlift.png"
                          />

                        </div>
                      </div>

                      <div className={styles.select_chain_options___side}>

                        <div className={styles.select_chain_option3_options}>

                          <div className={styles.motorized_subtitle}>
                            <span className={styles.price_bar}>${motorizedpriceCMSRollerBlindsRoomDarkening}</span>
                          </div>

                          <div className={styles.options_price_seperator}></div>


                          <span className={styles.priced_item}>Motorized</span>

                          <div className={styles.select_chain_option3_ellipse_wrapper}>
                            <span
                              className={`${styles.motorized_ellipse} ${active_wand_cordless_motorized === 3 ?
                                styles.active_wand_cordless_motorized : ''}`}
                              onClick={() => handleLiftFeatureEllipsess(3)}
                            ></span>
                          </div>


                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>



              <div>
                <div className={styles.select_head_rail_group}>
                  <div className={styles.select_cassette_head_rail_whole_wrapper}>
                    <span className={styles.select_cassette_head_rail_group_titles_wrapper}>
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
                      <div className={styles.ellipse_and_type}>
                        <div className={styles.select_color_type_subtitle}>Select Top Rail Types</div>
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


                            <div className={styles.materials_organized_div_wrapper}>
                              {[
                                { key: 'TopRailList1', list: Top_Head_Rail_Choices_Materialskey1.TopRailList1, type: 'Top' },
                                { key: 'TopRailList2', list: Top_Head_Rail_Choices_Materialskey2.TopRailList2, type: 'Top' },
                              ].map((choicesObj, index) => (

                                <div key={index} className={styles.materials_organized_div}>
                                  {choicesObj.list.map((choice, choiceIndex) => (
                                    <div
                                      className={`${styles.materials_organized_div_image} 
                                      ${(choicesObj.key === 'TopRailList1' && selectedImagesTop?.includes(choice.key1)) ||
                                          (choicesObj.key === 'TopRailList2' && selectedImagesTop?.includes(choice.key2))
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

                                      <div className={styles.railimage_wrapper}>
                                        <Image
                                          className={styles.railimage}
                                          width={100}
                                          height={100}
                                          src={choice.src}
                                          alt={choice.label} />

                                      </div>

                                      <p className={styles.materials_organized_div_image_paragraph}>{choice.label}</p>
                                    </div>
                                  ))}
                                </div>
                              ))}
                            </div>
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
                      <div className={styles.ellipse_and_type}>
                        <div className={styles.select_color_type_subtitle}>Select Bottom Rail Types</div>
                      </div>


                      <div className={styles.fabric_types_top_and_bottom_main_wrapper}>

                        <div className={styles.fabric_types_top_and_bottom_second_wrapper}>

                          <div className={styles.bottom_section}>
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
                                    <p className={styles.sorryMessage}>First pick a selection from the TOP rail to select the appropriate BOTTOM rail.</p>

                                    <div className={styles.materials_organized_div_wrapper}>
                                      {Object.keys(Bottom_Bottom_Rail_Choices_Materials).map((railType, index) => (
                                        <div key={index} className={styles.materials_organized_div}>
                                          {Bottom_Bottom_Rail_Choices_Materials[railType].map((choice) => (
                                            <div
                                              className={`${styles.materials_organized_div_image} 
                                                ${selectedImagesBottom?.includes(choice.key3)
                                                  ? styles.selectedImage
                                                  : ''
                                                } 
                                                ${clickedImageKeyBottom === choice.key3 ? styles.clickedImage : ''}`}
                                              key={choice.key3}
                                              onClick={() => handleBottomImageClick(choice.key3)}
                                              style={{
                                                pointerEvents: (clickedImageKeyTop === choice.key1 || clickedImageKeyTop === choice.key2) ? 'auto' : 'none',
                                                opacity: (clickedImageKeyTop === choice.key1 || clickedImageKeyTop === choice.key2) ? 1 : 0.5,
                                              }}
                                            >

                                              <div className={styles.railimage_wrapper}>
                                                <Image
                                                  className={styles.railimage}
                                                  width={100}
                                                  height={100}
                                                  src={choice.src}
                                                  alt={choice.label}
                                                />

                                              </div>
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


              <div className={styles.seperator_line_div}>
                <div className={styles.review_your_order_seperator_line2}></div>
                <div className={styles.review_your_order_seperator_line1}></div>
                <div className={styles.review_your_order_seperator_line0}></div>

                <div className={styles.review_your_order_seperator_line0}></div>
                <div className={styles.review_your_order_seperator_line1}></div>
                <div className={styles.review_your_order_seperator_line2}></div>

              </div>

              <div className={styles.quantity_and_add_to_cart_group} ref={cartRef}>

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
                        {productName1RollerBlindsRoomDarkening.charAt(0).toUpperCase() + productName1RollerBlindsRoomDarkening.slice(1)}
                      </div>

                    </div>

                    <span
                      className={styles.bill_divider}>
                    </span>

                    <div className={styles.description_and_answer}>

                      <div className={styles.window_type_answer}>Window Type:</div>
                      <div className={styles.answers_answers}>
                        {productName2RollerBlindsRoomDarkening.charAt(0).toUpperCase() + productName2RollerBlindsRoomDarkening.slice(1)}
                      </div>

                    </div>

                    <span
                      className={styles.bill_divider}>
                    </span>

                    <div className={styles.description_and_answer}>
                      <div className={styles.width2_answer}>Window Size:</div>

                      <div className={styles.answers_answers}>
                        {activeDimensionsinsideMount === "insideMount" && (
                          <>
                            <div>
                              Width:
                              {selectedInchesWidthInsideMount ? ` ${selectedInchesWidthInsideMount}` : ""}
                              {selectedFractionsWidthInsideMount ? ` ${selectedFractionsWidthInsideMount}` : ""}
                            </div>
                            <div>
                              Height:
                              {selectedInchesHeightInsideMount ? ` ${selectedInchesHeightInsideMount}` : ""}
                              {selectedFractionsHeightInsideMount ? ` ${selectedFractionsHeightInsideMount}` : ""}
                            </div>
                          </>
                        )}

                        {activeDimensionsoutsideMount === "outsideMount" && (
                          <>
                            <div>
                              Width:
                              {selectedInchesWidthOutsideMount ? ` ${selectedInchesWidthOutsideMount}` : ""}
                              {selectedFractionsWidthOutsideMount ? ` ${selectedFractionsWidthOutsideMount}` : ""}
                            </div>
                            <div>
                              Height:
                              {selectedInchesHeightOutsideMount ? ` ${selectedInchesHeightOutsideMount}` : ""}
                              {selectedFractionsHeightOutsideMount ? ` ${selectedFractionsHeightOutsideMount}` : ""}
                            </div>
                          </>
                        )}
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

                      <div className={styles.answers_answers3}>

                        <div className={`${styles.materials_answer_image} ${styles.materials_answer_image_styled}`}>
                          <h3 className={styles.materials_answer_image_label}>
                            Material: {selectedMaterial ? selectedMaterial.label : ''}
                          </h3>

                          <Image
                            className={styles.materials_answer_image_itself}
                            src={selectedColorImages.length > 0 ? selectedColorImages[0].src : ''}
                            alt='image'
                            width={200}
                            height={200}
                          />
                        </div>
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


                    <div className={styles.description_and_answer_top_rail}>
                      <div className={styles.casette_rail_type_answer}> Top Rail Choice:</div>

                      <div className={styles.answers_answers2}>
                        {selectedImagesTop?.length > 0 && (

                          <div className={styles.left_imageContainer_wrapper}>

                            <div className={`${styles.casette_rail_type_answer_container} ${styles.casette_rail_type_answer_container_styled}`}>

                              <p className={styles.casette_rail_type_answer_container_text}>
                                {
                                  (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key1 === selectedImagesTop[0]) ||
                                    Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key2 === selectedImagesTop[0])
                                  )?.label
                                }
                              </p>


                              <div className={styles.casette_rail_type_answer_image_render_wrapper}>
                                <Image
                                  width={200}
                                  height={200}
                                  className={styles.casette_rail_type_answer_image_render}
                                  src={
                                    (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key1 === selectedImagesTop[0]) ||
                                      Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key2 === selectedImagesTop[0])
                                    )?.src
                                  }
                                  alt={
                                    (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key1 === selectedImagesTop[0]) ||
                                      Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key2 === selectedImagesTop[0])
                                    )?.label
                                  }
                                />
                              </div>

                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <span
                      className={styles.bill_divider}>
                    </span>


                    <div className={styles.description_and_answer_bottom_rail}>
                      <div className={styles.bottom_rail_type_answer}>Bottom Rail Choice:</div>
                      <div className={styles.answers_answers2}>
                        {selectedImagesBottom?.length > 0 && (

                          <div className={styles.left_imageContainer_wrapper}>

                            <div className={`${styles.bottom_rail_type_answer_container} ${styles.bottom_rail_type_answer_container_styled}`}>

                              <p className={styles.bottom_rail_type_answer_container_text}>
                                {Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key3 === selectedImagesBottom[0])?.label}
                              </p>

                              <div className={styles.bottom_rail_type_answer_image_render_wrapper}>
                                <Image
                                  width={200}
                                  height={200}
                                  className={styles.bottom_rail_type_answer_image_render}
                                  src={
                                    Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key3 === selectedImagesBottom[0])?.src
                                  }
                                  alt={
                                    Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key3 === selectedImagesBottom[0])?.label
                                  }
                                />
                              </div>

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


                        <div className={styles.between_dates}>
                          <p>Between</p>
                          <div className={styles.estimated_delivery_date_render}>{futureDate}{" "}
                          </div>
                          <p>and</p>
                          <div className={styles.estimated_delivery_date_render}>{futureDate2}{" "}
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className={styles.add_to_cart_rectangle_wrapper}>
                      <Link href={`/addtocart?totalpricecalculated=${totalpricecalculated}`}>
                        <button onClick={handleAddToCart} className={styles.add_to_cart_rectangle}>
                          <div className={styles.total_price}>TOTAL:${calculateSumTotal().toFixed(2)}</div>
                          <p className={styles.add_to_cart}>ADD TO CART</p>
                        </button>
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
                  </div>

                </div>
              </div>


            </span>

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


export default RollerBlindsRoomDarkening;


