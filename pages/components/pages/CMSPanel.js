// C:\Users\User\economyblindsandshadesjs\pages\components\pages\CMSPanel.js


import React, { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from '../../../styles/components/pages/cmspanel.module.css';
import { useData } from "../../../utils/DataContext";
import FooterPage from "../footer";
import Image from "next/image";


const CMSPanel = () => {

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

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const { data: session } = useSession();
  const { postData, updateData } = useData();


  const [name, setname] = useState("name");
  const [productName1, setproductName1] = useState("0");
  const [productName2, setproductName2] = useState("0");
  const [WandPriceCMS, setWandPriceCMS] = useState("0");
  const [roomname, setroomname] = useState("0");
  const [cordlesspriceCMS, setcordlesspriceCMS] = useState("0");
  const [motorizedpriceCMS, setmotorizedpriceCMS] = useState("0");
  const [inchPriceCMSWidthInsideMount, setinchPriceCMSWidthInsideMount] = useState("0");
  const [inchPriceCMSeightInsideMount, setinchPriceCMSeightInsideMount] = useState("0");
  const [inchPriceCMSWidthOutsideMount, setinchPriceCMSWidthOutsideMount] = useState("0");
  const [inchPriceCMSHeightOutsideMount, setinchPriceCMSHeightOutsideMount] = useState("0");


  const [productName1ZebrablindsRoomLightening, setproductName1ZebrablindsRoomLightening] = useState("");
  const [productName2ZebrablindsRoomLightening, setProductName2ZebrablindsRoomLightening] = useState("");
  const [roomnameZebrablindsRoomLightening, setroomnameZebrablindsRoomLightening] = useState("");
  const [WandPriceCMSZebrablindsRoomLightening, setWandPriceCMSZebrablindsRoomLightening] = useState("");
  const [cordlesspriceCMSZebrablindsRoomLightening, setcordlesspriceCMSZebrablindsRoomLightening] = useState("");
  const [motorizedpriceCMSZebrablindsRoomLightening, setmotorizedpriceCMSZebrablindsRoomLightening] = useState("");


  const [productName1ZebrablindsRoomDarkening, setproductName1ZebrablindsRoomDarkening] = useState("");
  const [productName2ZebrablindsRoomDarkening, setproductName2ZebrablindsRoomDarkening] = useState("");
  const [roomnameZebrablindsRoomDarkening, setroomnameZebrablindsRoomDarkening] = useState("");
  const [WandPriceCMSZebrablindsRoomDarkening, setWandPriceCMSZebrablindsRoomDarkening] = useState("");
  const [cordlesspriceCMSZebrablindsRoomDarkening, setcordlesspriceCMSZebrablindsRoomDarkening] = useState("");
  const [motorizedpriceCMSZebrablindsRoomDarkening, setmotorizedpriceCMSZebrablindsRoomDarkening] = useState("");


  const [productName1ShangrilablindsRoomDarkening, setproductName1ShangrilablindsRoomDarkening] = useState("");
  const [productName2ShangrilablindsRoomDarkening, setproductName2ShangrilablindsRoomDarkening] = useState("");
  const [roomnameShangrilablindsRoomDarkening, setroomnameShangrilablindsRoomDarkening] = useState("");
  const [WandPriceCMSShangrilablindsRoomDarkening, setWandPriceCMSShangrilablindsRoomDarkening] = useState("");
  const [cordlesspriceCMSShangrilablindsRoomDarkening, setcordlesspriceCMSShangrilablindsRoomDarkening] = useState("");
  const [motorizedpriceCMSShangrilablindsRoomDarkening, setmotorizedpriceCMSShangrilablindsRoomDarkening] = useState("");


  const [productName1ShangrilablindsRoomLightening, setproductName1ShangrilablindsRoomLightening] = useState("");
  const [productName2ShangrilablindsRoomLightening, setproductName2ShangrilablindsRoomLightening] = useState("");
  const [roomnameShangrilablindsRoomLightening, setroomnameShangrilablindsRoomLightening] = useState("");
  const [WandPriceCMSShangrilablindsRoomLightening, setWandPriceCMSShangrilablindsRoomLightening] = useState("");
  const [cordlesspriceCMSShangrilablindsRoomLightening, setcordlesspriceCMSShangrilablindsRoomLightening] = useState("");
  const [motorizedpriceCMSShangrilablindsRoomLightening, setmotorizedpriceCMSShangrilablindsRoomLightening] = useState("");


  const [inchPricesAfterWidthInsideMount, setinchPricesAfterWidthInsideMount] = useState({});
  const [inchPricesAfterHeightInsideMount, setinchPricesAfterHeightInsideMount] = useState({});
  const [inchPricesAfterWidthOutsideMount, setinchPricesAfterWidthOutsideMount] = useState({});
  const [inchPricesAfterHeightOutsideMount, setinchPricesAfterHeightOutsideMount] = useState({});


  const [inchPricesAfterWidthInsideMountZebrablindsRoomLightening, setinchPricesAfterWidthInsideMountZebrablindsRoomLightening] = useState({});
  const [inchPricesAfterHeightInsideMountZebrablindsRoomLightening, setinchPricesAfterHeightInsideMountZebrablindsRoomLightening] = useState({});
  const [inchPricesAfterWidthOutsideMountZebrablindsRoomLightening, setinchPricesAfterWidthOutsideMountZebrablindsRoomLightening] = useState({});
  const [inchPricesAfterHeightOutsideMountZebrablindsRoomLightening, setinchPricesAfterHeightOutsideMountZebrablindsRoomLightening] = useState({});

  const [inchPricesAfterWidthInsideMountZebrablindsRoomDarkening, setinchPricesAfterWidthInsideMountZebrablindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightInsideMountZebrablindsRoomDarkening, setinchPricesAfterHeightInsideMountZebrablindsRoomDarkening] = useState({});
  const [inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening, setinchPricesAfterWidthOutsideMountZebrablindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening, setinchPricesAfterHeightOutsideMountZebrablindsRoomDarkening] = useState({});

  const [inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening, setinchPricesAfterWidthInsideMountShangrilablindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening, setinchPricesAfterHeightInsideMountShangrilablindsRoomDarkening] = useState({});
  const [inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening, setinchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening, setinchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening] = useState({});

  const [inchPricesAfterWidthInsideMountShangrilablindsRoomLightening, setinchPricesAfterWidthInsideMountShangrilablindsRoomLightening] = useState({});
  const [inchPricesAfterHeightInsideMountShangrilablindsRoomLightening, setinchPricesAfterHeightInsideMountShangrilablindsRoomLightening] = useState({});
  const [inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening, setinchPricesAfterWidthOutsideMountShangrilablindsRoomLightening] = useState({});
  const [inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening, setinchPricesAfterHeightOutsideMountShangrilablindsRoomLightening] = useState({});


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const scrollableDivRefInchesWidthInsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthInsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountShangrilablindsRoomDarkening = useRef();

  const scrollableDivRefInchesHeightInsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightInsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountShangrilablindsRoomDarkening = useRef();

  const scrollableDivRefInchesWidthOutsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomDarkening = useRef();

  const scrollableDivRefInchesHeightOutsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomDarkening = useRef();


  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountZebrablindsRoomLightening.current:", scrollableDivRefInchesWidthInsideMountZebrablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountZebrablindsRoomDarkening.current:", scrollableDivRefInchesWidthInsideMountZebrablindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountShangrilablindsRoomLightening.current:", scrollableDivRefInchesWidthInsideMountShangrilablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountShangrilablindsRoomDarkening.current:", scrollableDivRefInchesWidthInsideMountShangrilablindsRoomDarkening.current);
  }, []);




  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountZebrablindsRoomLightening.current:", scrollableDivRefInchesHeightInsideMountZebrablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountZebrablindsRoomDarkening.current:", scrollableDivRefInchesHeightInsideMountZebrablindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountShangrilablindsRoomLightening.current:", scrollableDivRefInchesHeightInsideMountShangrilablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountShangrilablindsRoomDarkening.current:", scrollableDivRefInchesHeightInsideMountShangrilablindsRoomDarkening.current);
  }, []);




  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountZebrablindsRoomLightening.current:", scrollableDivRefInchesWidthOutsideMountZebrablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountZebrablindsRoomDarkening.current:", scrollableDivRefInchesWidthOutsideMountZebrablindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomLightening.current:", scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomDarkening.current:", scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomDarkening.current);
  }, []);




  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountZebrablindsRoomLightening.current:", scrollableDivRefInchesHeightOutsideMountZebrablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountZebrablindsRoomDarkening.current:", scrollableDivRefInchesHeightOutsideMountZebrablindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomLightening.current:", scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomDarkening.current:", scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomDarkening.current);
  }, []);



  const [selectedInchesWidthInsideMountZebrablindsRoomLightening, setselectedInchesWidthInsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchesHeightInsideMountZebrablindsRoomLightening, setselectedInchesHeightInsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchesWidthOutsideMountZebrablindsRoomLightening, setselectedInchesWidthOutsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchesHeightOutsideMountZebrablindsRoomLightening, setselectedInchesHeightOutsideMountZebrablindsRoomLightening] = useState(null);


  const [inchesHeightInsideMountShangrilablindsRoomLightening, setinchesHeightInsideMountShangrilablindsRoomLightening] = useState(null);


  const [selectedInchesWidthInsideMountZebrablindsRoomDarkening, setselectedInchesWidthInsideMountZebrablindsRoomDarkening] = useState(null);
  const [selectedInchesHeightInsideMountZebrablindsRoomDarkening, setselectedInchesHeightInsideMountZebrablindsRoomDarkening] = useState(null);
  const [selectedInchesWidthOutsideMountZebrablindsRoomDarkening, setselectedInchesWidthOutsideMountZebrablindsRoomDarkening] = useState(null);
  const [selectedInchesHeightOutsideMountZebrablindsRoomDarkening, setselectedInchesHeightOutsideMountZebrablindsRoomDarkening] = useState(null);

  const [selectedInchesWidthInsideMountShangrilablindsRoomDarkening, setselectedInchesWidthInsideMountShangrilablindsRoomDarkening] = useState(null);
  const [selectedInchesHeightInsideMountShangrilablindsRoomDarkening, setselectedInchesHeightInsideMountShangrilablindsRoomDarkening] = useState(null);
  const [selectedInchesWidthOutsideMountShangrilablindsRoomDarkening, setselectedInchesWidthOutsideMountShangrilablindsRoomDarkening] = useState(null);
  const [selectedInchesHeightOutsideMountShangrilablindsRoomDarkening, setselectedInchesHeightOutsideMountShangrilablindsRoomDarkening] = useState(null);

  const [selectedInchesWidthInsideMountShangrilablindsRoomLightening, setselectedInchesWidthInsideMountShangrilablindsRoomLightening] = useState(null);
  const [selectedInchesHeightInsideMountShangrilablindsRoomLightening, setselectedInchesHeightInsideMountShangrilablindsRoomLightening] = useState(null);
  const [selectedInchesWidthOutsideMountShangrilablindsRoomLightening, setselectedInchesWidthOutsideMountShangrilablindsRoomLightening] = useState(null);
  const [selectedInchesHeightOutsideMountShangrilablindsRoomLightening, setselectedInchesHeightOutsideMountShangrilablindsRoomLightening] = useState(null);




  const [selectedInchesVisibleWidthInsideMountZebrablindsRoomLightening, setselectedInchesVisibleWidthInsideMountZebrablindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountZebrablindsRoomLightening, setselectedInchesVisibleHeightInsideMountZebrablindsRoomLightening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountZebrablindsRoomLightening, setselectedInchesVisibleWidthOutsideMountZebrablindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountZebrablindsRoomLightening, setselectedInchesVisibleHeightOutsideMountZebrablindsRoomLightening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountZebrablindsRoomDarkening, setselectedInchesVisibleWidthInsideMountZebrablindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountZebrablindsRoomDarkening, setselectedInchesVisibleHeightInsideMountZebrablindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountZebrablindsRoomDarkening, setselectedInchesVisibleWidthOutsideMountZebrablindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountZebrablindsRoomDarkening, setselectedInchesVisibleHeightOutsideMountZebrablindsRoomDarkening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountShangrilablindsRoomDarkening, setselectedInchesVisibleWidthInsideMountShangrilablindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountShangrilablindsRoomDarkening, setselectedInchesVisibleHeightInsideMountShangrilablindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountShangrilablindsRoomDarkening, setselectedInchesVisibleWidthOutsideMountShangrilablindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountShangrilablindsRoomDarkening, setselectedInchesVisibleHeightOutsideMountShangrilablindsRoomDarkening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountShangrilablindsRoomLightening, setselectedInchesVisibleWidthInsideMountShangrilablindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountShangrilablindsRoomLightening, setselectedInchesVisibleHeightInsideMountShangrilablindsRoomLightening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountShangrilablindsRoomLightening, setselectedInchesVisibleWidthOutsideMountShangrilablindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountShangrilablindsRoomLightening, setselectedInchesVisibleHeightOutsideMountShangrilablindsRoomLightening] = useState(true);



  const [newSetPriceInchesWidthInsideMountZebrablindsRoomLightening, setnewSetPriceInchesWidthInsideMountZebrablindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightInsideMountZebrablindsRoomLightening, setnewSetPriceInchesHeightInsideMountZebrablindsRoomLightening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountZebrablindsRoomLightening, setnewSetPriceInchesWidthOutsideMountZebrablindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountZebrablindsRoomLightening, setnewSetPriceInchesHeightOutsideMountZebrablindsRoomLightening] = useState(null);

  const [newSetPriceInchesWidthInsideMountZebrablindsRoomDarkening, setnewSetPriceInchesWidthInsideMountZebrablindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightInsideMountZebrablindsRoomDarkening, setnewSetPriceInchesHeightInsideMountZebrablindsRoomDarkening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountZebrablindsRoomDarkening, setnewSetPriceInchesWidthOutsideMountZebrablindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening, setnewSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening] = useState(null);

  const [newSetPriceInchesWidthInsideMountShangrilablindsRoomDarkening, setnewSetPriceInchesWidthInsideMountShangrilablindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening, setnewSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountShangrilablindsRoomDarkening, setnewSetPriceInchesWidthOutsideMountShangrilablindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening, setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening] = useState(null);

  const [newSetPriceInchesWidthInsideMountShangrilablindsRoomLightening, setnewSetPriceInchesWidthInsideMountShangrilablindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightInsideMountShangrilablindsRoomLightening, setnewSetPriceInchesHeightInsideMountShangrilablindsRoomLightening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountShangrilablindsRoomLightening, setnewSetPriceInchesWidthOutsideMountShangrilablindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening, setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening] = useState(null);



  const [selectedInchWidthInsideMountZebrablindsRoomLightening, setselectedInchWidthInsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchHeightInsideMountZebrablindsRoomLightening, setselectedInchHeightInsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchWidthOutsideMountZebrablindsRoomLightening, setselectedInchWidthOutsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchHeightOutsideMountZebrablindsRoomLightening, setselectedInchHeightOutsideMountZebrablindsRoomLightening] = useState(null);

  const [selectedInchWidthInsideMountZebrablindsRoomDarkening, setselectedInchWidthInsideMountZebrablindsRoomDarkening] = useState(null);
  const [selectedInchHeightInsideMountZebrablindsRoomDarkening, setselectedInchHeightInsideMountZebrablindsRoomDarkening] = useState(null);
  const [selectedInchWidthOutsideMountZebrablindsRoomDarkening, setselectedInchWidthOutsideMountZebrablindsRoomDarkening] = useState(null);
  const [selectedInchHeightOutsideMountZebrablindsRoomDarkening, setselectedInchHeightOutsideMountZebrablindsRoomDarkening] = useState(null);

  const [selectedInchWidthInsideMountShangrilablindsRoomDarkening, setselectedInchWidthInsideMountShangrilablindsRoomDarkening] = useState(null);
  const [selectedInchHeightInsideMountShangrilablindsRoomDarkening, setselectedInchHeightInsideMountShangrilablindsRoomDarkening] = useState(null);
  const [selectedInchWidthOutsideMountShangrilablindsRoomDarkening, setselectedInchWidthOutsideMountShangrilablindsRoomDarkening] = useState(null);
  const [selectedInchHeightOutsideMountShangrilablindsRoomDarkening, setselectedInchHeightOutsideMountShangrilablindsRoomDarkening] = useState(null);

  const [selectedInchWidthInsideMountShangrilablindsRoomLightening, setselectedInchWidthInsideMountShangrilablindsRoomLightening] = useState(null);
  const [selectedInchHeightInsideMountShangrilablindsRoomLightening, setselectedInchHeightInsideMountShangrilablindsRoomLightening] = useState(null);
  const [selectedInchWidthOutsideMountShangrilablindsRoomLightening, setselectedInchWidthOutsideMountShangrilablindsRoomLightening] = useState(null);
  const [selectedInchHeightOutsideMountShangrilablindsRoomLightening, setselectedInchHeightOutsideMountShangrilablindsRoomLightening] = useState(null);


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMountZebrablindsRoomLightening = (inchesWidthInsideMountZebrablindsRoomLightening) => {
    setselectedInchesWidthInsideMountZebrablindsRoomLightening(inchesWidthInsideMountZebrablindsRoomLightening);
    setselectedInchesVisibleWidthInsideMountZebrablindsRoomLightening(false);
    setselectedInchWidthInsideMountZebrablindsRoomLightening(inchesWidthInsideMountZebrablindsRoomLightening);

    const scrollableDivInchesdWidthInsideMountZebrablindsRoomLightening = scrollableDivRefInchesWidthInsideMountZebrablindsRoomLightening.current;

    if (scrollableDivInchesdWidthInsideMountZebrablindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountZebrablindsRoomLightening = scrollableDivInchesdWidthInsideMountZebrablindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthInsideMountZebrablindsRoomLightening) {
          const selectedInchesDivRectWidthInsideMountZebrablindsRoomLightening = selectedInchesDivdWidthInsideMountZebrablindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMount.top +
            scrollableDivInchesdWidthInsideMountZebrablindsRoomLightening.scrollTop -
            (scrollableDivInchesdWidthInsideMountZebrablindsRoomLightening.offsetHeight - selectedInchesDivRectWidthInsideMountZebrablindsRoomLightening.height) / 2;

          scrollableDivInchesdWidthInsideMountZebrablindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountZebrablindsRoomLightening = (inchesWidthInsideMountZebrablindsRoomLightening, price) => {
    const updatedInchPricesWidthInsideMountZebrablindsRoomLightening = { ...inchPricesAfterWidthInsideMountZebrablindsRoomLightening, [inchesWidthInsideMountZebrablindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountZebrablindsRoomLightening(updatedInchPricesWidthInsideMountZebrablindsRoomLightening);
  };

  const handleNewSpanClickedWidthInsideMountZebrablindsRoomLightening = () => {
    setselectedInchesVisibleWidthInsideMountZebrablindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledInchesWhenClickedWidthInsideMountZebrablindsRoomDarkening = (inchesWidthInsideMountZebrablindsRoomDarkening) => {
    setselectedInchesWidthInsideMountZebrablindsRoomDarkening(inchesWidthInsideMountZebrablindsRoomDarkening);
    setselectedInchesVisibleWidthInsideMountZebrablindsRoomDarkening(false);
    setselectedInchWidthInsideMountZebrablindsRoomDarkening(inchesWidthInsideMountZebrablindsRoomDarkening);

    const scrollableDivInchesdWidthInsideMountZebrablindsRoomDarkening = scrollableDivRefInchesWidthInsideMountZebrablindsRoomDarkening.current;

    if (scrollableDivInchesdWidthInsideMountZebrablindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountZebrablindsRoomDarkening = scrollableDivInchesdWidthInsideMountZebrablindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthInsideMountZebrablindsRoomDarkening) {
          const selectedInchesDivRectWidthInsideMountZebrablindsRoomDarkening = selectedInchesDivdWidthInsideMountZebrablindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountZebrablindsRoomDarkening.top +
            scrollableDivInchesdWidthInsideMountZebrablindsRoomDarkening.scrollTop -
            (scrollableDivInchesdWidthInsideMountZebrablindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthInsideMountZebrablindsRoomDarkening.height) / 2;

          scrollableDivInchesdWidthInsideMountZebrablindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountZebrablindsRoomDarkening = (inchesWidthInsideMountZebrablindsRoomDarkening, price) => {
    const updatedInchPricesWidthInsideMountZebrablindsRoomDarkening = { ...inchPricesAfterWidthInsideMountZebrablindsRoomDarkening, [inchesWidthInsideMountZebrablindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountZebrablindsRoomDarkening(updatedInchPricesWidthInsideMountZebrablindsRoomDarkening);
  };

  const handleNewSpanClickedWidthInsideMountZebrablindsRoomDarkening = () => {
    setselectedInchesVisibleWidthInsideMountZebrablindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMountShangrilablindsRoomDarkening = (inchesWidthInsideMountShangrilablindsRoomDarkening) => {
    setselectedInchesWidthInsideMountShangrilablindsRoomDarkening(inchesWidthInsideMountShangrilablindsRoomDarkening);
    setselectedInchesVisibleWidthInsideMountShangrilablindsRoomDarkening(false);
    setselectedInchWidthInsideMountShangrilablindsRoomDarkening(inchesWidthInsideMountShangrilablindsRoomDarkening);

    const scrollableDivInchesdWidthInsideMountShangrilablindsRoomDarkening = scrollableDivRefInchesWidthInsideMountShangrilablindsRoomDarkening.current;

    if (scrollableDivInchesdWidthInsideMountShangrilablindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMount = scrollableDivInchesdWidthInsideMountShangrilablindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthInsideMountShangrilablindsRoomDarkening) {
          const selectedInchesDivRectWidthInsideMountShangrilablindsRoomDarkening = selectedInchesDivdWidthInsideMountShangrilablindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountShangrilablindsRoomDarkening.top +
            scrollableDivInchesdWidthInsideMountShangrilablindsRoomDarkening.scrollTop -
            (scrollableDivInchesdWidthInsideMountShangrilablindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthInsideMountShangrilablindsRoomDarkening.height) / 2;

          scrollableDivInchesdWidthInsideMountShangrilablindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountShangrilablindsRoomDarkening = (inchesWidthInsideMountShangrilablindsRoomDarkening, price) => {
    const updatedInchPricesWidthInsideMountShangrilablindsRoomDarkening = { ...inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening, [inchesWidthInsideMountShangrilablindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountShangrilablindsRoomDarkening(updatedInchPricesWidthInsideMountShangrilablindsRoomDarkening);
  };

  const handleNewSpanClickedWidthInsideMountShangrilablindsRoomDarkening = () => {
    setselectedInchesVisibleWidthInsideMountShangrilablindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMountShangrilablindsRoomLightening = (inchesWidthInsideMountShangrilablindsRoomLightening) => {
    setselectedInchesWidthInsideMountShangrilablindsRoomLightening(inchesWidthInsideMountShangrilablindsRoomLightening);
    setselectedInchesVisibleWidthInsideMountShangrilablindsRoomLightening(false);
    setselectedInchWidthInsideMountShangrilablindsRoomLightening(inchesWidthInsideMountShangrilablindsRoomLightening);

    const scrollableDivInchesdWidthInsideMountShangrilablindsRoomLightening = scrollableDivRefInchesWidthInsideMountShangrilablindsRoomLightening.current;

    if (scrollableDivInchesdWidthInsideMountShangrilablindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountShangrilablindsRoomLightening = scrollableDivInchesdWidthInsideMountShangrilablindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthInsideMountShangrilablindsRoomLightening) {
          const selectedInchesDivRectWidthInsideMount = selectedInchesDivdWidthInsideMountShangrilablindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountShangrilablindsRoomLightening.top +
            scrollableDivInchesdWidthInsideMountShangrilablindsRoomLightening.scrollTop -
            (scrollableDivInchesdWidthInsideMountShangrilablindsRoomLightening.offsetHeight - selectedInchesDivRectWidthInsideMountShangrilablindsRoomLightening.height) / 2;

          scrollableDivInchesdWidthInsideMountShangrilablindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountShangrilablindsRoomLightening = (inchesWidthInsideMountShangrilablindsRoomLightening, price) => {
    const updatedInchPricesWidthInsideMountShangrilablindsRoomLightening = { ...inchPricesAfterWidthInsideMountShangrilablindsRoomLightening, [inchesWidthInsideMountShangrilablindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountShangrilablindsRoomLightening(updatedInchPricesWidthInsideMountShangrilablindsRoomLightening);
  };

  const handleNewSpanClickedWidthInsideMountShangrilablindsRoomLightening = () => {
    setselectedInchesVisibleWidthInsideMountShangrilablindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightInsideMountZebrablindsRoomLightening = (selectedInchesHeightInsideMountZebrablindsRoomLightening, newPriceHeightInsideMountZebrablindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountZebrablindsRoomLightening);
    console.log("New price:", newPriceHeightInsideMountZebrablindsRoomLightening);

    setinchPricesAfterHeightInsideMountZebrablindsRoomLightening(prevPricesHeightInsideMountZebrablindsRoomLightening => {
      const updatedPricesHeightInsideMountZebrablindsRoomLightening = { ...prevPricesHeightInsideMountZebrablindsRoomLightening };
      updatedPricesHeightInsideMountZebrablindsRoomLightening[selectedInchesHeightInsideMountZebrablindsRoomLightening] = parseFloat(newPriceHeightInsideMountZebrablindsRoomLightening);
      return updatedPricesHeightInsideMountZebrablindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMountZebrablindsRoomLightening = (inchesHeightInsideMountZebrablindsRoomLightening) => {
    setselectedInchesHeightInsideMountZebrablindsRoomLightening(inchesHeightInsideMountZebrablindsRoomLightening);

    if (inchesHeightInsideMountZebrablindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountZebrablindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountZebrablindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountZebrablindsRoomLightening = inchPricesAfterHeightInsideMountZebrablindsRoomLightening[inchesHeightInsideMountZebrablindsRoomLightening];
    setnewSetPriceInchesHeightInsideMountZebrablindsRoomLightening(newSetPriceHeightInsideMountZebrablindsRoomLightening !== undefined ? newSetPriceHeightInsideMountZebrablindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountZebrablindsRoomLightening === undefined && inchesHeightInsideMountZebrablindsRoomLightening % 5 !== 0) {
      let prevInchHeightInsideMountZebrablindsRoomLightening = inchesHeightInsideMountZebrablindsRoomLightening - 1;
      while (prevInchHeightInsideMountZebrablindsRoomLightening % 5 !== 0) {
        prevInchHeightInsideMountZebrablindsRoomLightening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomLightening = inchPricesAfterHeightInsideMountZebrablindsRoomLightening[prevInchHeightInsideMountZebrablindsRoomLightening];
      setnewSetPriceInchesHeightInsideMountZebrablindsRoomLightening(nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomLightening !== undefined ? nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomLightening);
      let nextInchHeightInsideMountZebrablindsRoomLightening = prevInchHeightInsideMountZebrablindsRoomLightening + 1;
      while (nextInchHeightInsideMountZebrablindsRoomLightening < inchesHeightInsideMountZebrablindsRoomLightening) {
        nextInchHeightInsideMountZebrablindsRoomLightening++;
      }

    } else if (inchesHeightInsideMountZebrablindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountZebrablindsRoomLightening[inchesHeightInsideMountZebrablindsRoomLightening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountZebrablindsRoomLightening = () => {
    setselectedInchesVisibleHeightInsideMountZebrablindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightInsideMountZebrablindsRoomDarkening = (selectedInchesHeightInsideMountZebrablindsRoomDarkening, newPriceHeightInsideMountZebrablindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountZebrablindsRoomDarkening);
    console.log("New price:", newPriceHeightInsideMountZebrablindsRoomDarkening);

    setinchPricesAfterHeightInsideMountZebrablindsRoomDarkening(prevPricesHeightInsideMountZebrablindsRoomDarkening => {
      const updatedPricesHeightInsideMountZebrablindsRoomDarkening = { ...prevPricesHeightInsideMountZebrablindsRoomDarkening };
      updatedPricesHeightInsideMountZebrablindsRoomDarkening[selectedInchesHeightInsideMountZebrablindsRoomDarkening] = parseFloat(newPriceHeightInsideMountZebrablindsRoomDarkening);
      return updatedPricesHeightInsideMountZebrablindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMountZebrablindsRoomDarkening = (inchesHeightInsideMountZebrablindsRoomDarkening) => {
    setselectedInchesHeightInsideMountZebrablindsRoomDarkening(inchesHeightInsideMountZebrablindsRoomDarkening);

    if (inchesHeightInsideMountZebrablindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountZebrablindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountZebrablindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountZebrablindsRoomDarkening = inchPricesAfterHeightInsideMountZebrablindsRoomDarkening[inchesHeightInsideMountZebrablindsRoomDarkening];
    setnewSetPriceInchesHeightInsideMountZebrablindsRoomDarkening(newSetPriceHeightInsideMountZebrablindsRoomDarkening !== undefined ? newSetPriceHeightInsideMountZebrablindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountZebrablindsRoomDarkening === undefined && inchesHeightInsideMountZebrablindsRoomDarkening % 5 !== 0) {
      let prevInchHeightInsideMountZebrablindsRoomDarkening = inchesHeightInsideMountZebrablindsRoomDarkening - 1;
      while (prevInchHeightInsideMountZebrablindsRoomDarkening % 5 !== 0) {
        prevInchHeightInsideMountZebrablindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomDarkening = inchPricesAfterHeightInsideMountZebrablindsRoomDarkening[prevInchHeightInsideMountZebrablindsRoomDarkening];
      setnewSetPriceInchesHeightInsideMountZebrablindsRoomDarkening(nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomDarkening !== undefined ? nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountZebrablindsRoomDarkening);
      let nextInchHeightInsideMountZebrablindsRoomDarkening = prevInchHeightInsideMountZebrablindsRoomDarkening + 1;
      while (nextInchHeightInsideMountZebrablindsRoomDarkening < inchesHeightInsideMountZebrablindsRoomDarkening) {
        nextInchHeightInsideMountZebrablindsRoomDarkening++;
      }

    } else if (inchesHeightInsideMountZebrablindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountZebrablindsRoomDarkening[inchesHeightInsideMountZebrablindsRoomDarkening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountZebrablindsRoomDarkening = () => {
    setselectedInchesVisibleHeightInsideMountZebrablindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightInsideMountShangrilablindsRoomDarkening = (selectedInchesHeightInsideMountShangrilablindsRoomDarkening, newPriceHeightInsideMountShangrilablindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountShangrilablindsRoomDarkening);
    console.log("New price:", newPriceHeightInsideMountShangrilablindsRoomDarkening);

    setinchPricesAfterHeightInsideMountShangrilablindsRoomDarkening(prevPricesHeightInsideMountShangrilablindsRoomDarkening => {
      const updatedPricesHeightInsideMountShangrilablindsRoomDarkening = { ...prevPricesHeightInsideMountShangrilablindsRoomDarkening };
      updatedPricesHeightInsideMountShangrilablindsRoomDarkening[selectedInchesHeightInsideMountShangrilablindsRoomDarkening] = parseFloat(newPriceHeightInsideMountShangrilablindsRoomDarkening);
      return updatedPricesHeightInsideMountShangrilablindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMountShangrilablindsRoomDarkening = (inchesHeightInsideMountShangrilablindsRoomDarkening) => {
    setselectedInchesHeightInsideMountShangrilablindsRoomDarkening(inchesHeightInsideMountShangrilablindsRoomDarkening);

    if (inchesHeightInsideMountShangrilablindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountShangrilablindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountShangrilablindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountShangrilablindsRoomDarkening = inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening[inchesHeightInsideMountShangrilablindsRoomDarkening];
    setnewSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening(newSetPriceHeightInsideMountShangrilablindsRoomDarkening !== undefined ? newSetPriceHeightInsideMountShangrilablindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountShangrilablindsRoomDarkening === undefined && inchesHeightInsideMountShangrilablindsRoomDarkening % 5 !== 0) {
      let prevInchHeightInsideMountShangrilablindsRoomDarkening = inchesHeightInsideMountShangrilablindsRoomDarkening - 1;
      while (prevInchHeightInsideMountShangrilablindsRoomDarkening % 5 !== 0) {
        prevInchHeightInsideMountShangrilablindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomDarkening = inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening[prevInchHeightInsideMountShangrilablindsRoomDarkening];
      setnewSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening(nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomDarkening !== undefined ? nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomDarkening);
      let nextInchHeightInsideMountShangrilablindsRoomDarkening = prevInchHeightInsideMountShangrilablindsRoomDarkening + 1;
      while (nextInchHeightInsideMountShangrilablindsRoomDarkening < inchesHeightInsideMountShangrilablindsRoomDarkening) {
        nextInchHeightInsideMountShangrilablindsRoomDarkening++;
      }

    } else if (inchesHeightInsideMountShangrilablindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening[inchesHeightInsideMountShangrilablindsRoomDarkenings]);
    }
  };

  const handleNewSpanClickedHeightInsideMountShangrilablindsRoomDarkening = () => {
    setselectedInchesVisibleHeightInsideMountShangrilablindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightInsideMountShangrilablindsRoomLightening = (selectedInchesHeightInsideMountShangrilablindsRoomLightening, newPriceHeightInsideMountShangrilablindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountShangrilablindsRoomLightening);
    console.log("New price:", newPriceHeightInsideMountShangrilablindsRoomLightening);

    setinchPricesAfterHeightInsideMountShangrilablindsRoomLightening(prevPricesHeightInsideMountShangrilablindsRoomLightening => {
      const updatedPricesHeightInsideMountShangrilablindsRoomLightening = { ...prevPricesHeightInsideMountShangrilablindsRoomLightening };
      updatedPricesHeightInsideMountShangrilablindsRoomLightening[selectedInchesHeightInsideMountShangrilablindsRoomLightening] = parseFloat(newPriceHeightInsideMountShangrilablindsRoomLightening);
      return updatedPricesHeightInsideMountShangrilablindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMountShangrilablindsRoomLightening = (inchesHeightInsideMountShangrilablindsRoomLightening) => {
    setselectedInchesHeightInsideMountShangrilablindsRoomLightening(inchesHeightInsideMountShangrilablindsRoomLightening);

    if (inchesHeightInsideMountShangrilablindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountShangrilablindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountShangrilablindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountShangrilablindsRoomLightening = inchPricesAfterHeightInsideMountShangrilablindsRoomLightening[inchesHeightInsideMountShangrilablindsRoomLightening];
    setnewSetPriceInchesHeightInsideMountShangrilablindsRoomLightening(newSetPriceHeightInsideMountShangrilablindsRoomLightening !== undefined ? newSetPriceHeightInsideMountShangrilablindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountShangrilablindsRoomLightening === undefined && inchesHeightInsideMountShangrilablindsRoomLightening % 5 !== 0) {
      let prevInchHeightInsideMountShangrilablindsRoomLightening = inchesHeightInsideMountShangrilablindsRoomLightening - 1;
      while (prevInchHeightInsideMountShangrilablindsRoomLightening % 5 !== 0) {
        prevInchHeightInsideMountShangrilablindsRoomLightening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomLightening = inchPricesAfterHeightInsideMountShangrilablindsRoomLightening[prevInchHeightInsideMountShangrilablindsRoomLightening];
      setnewSetPriceInchesHeightInsideMountShangrilablindsRoomLightening(nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomLightening !== undefined ? nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountShangrilablindsRoomLightening);
      let nextInchHeightInsideMountShangrilablindsRoomLightening = prevInchHeightInsideMountShangrilablindsRoomLightening + 1;
      while (nextInchHeightInsideMountShangrilablindsRoomLightening < inchesHeightInsideMountShangrilablindsRoomLightening) {
        nextInchHeightInsideMountShangrilablindsRoomLightening++;
      }

    } else if (inchesHeightInsideMountShangrilablindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountShangrilablindsRoomLightening[inchesHeightInsideMountShangrilablindsRoomLightening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountShangrilablindsRoomLightening = () => {
    setselectedInchesVisibleHeightInsideMountShangrilablindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountZebrablindsRoomLightening = (inchesWidthOutsideMountZebrablindsRoomLightening) => {
    setselectedInchesWidthOutsideMountZebrablindsRoomLightening(inchesWidthOutsideMountZebrablindsRoomLightening);
    setselectedInchesVisibleWidthOutsideMountZebrablindsRoomLightening(false);
    setselectedInchWidthOutsideMountZebrablindsRoomLightening(inchesWidthOutsideMountZebrablindsRoomLightening);

    const scrollableDivInchesWidthOutsideMountZebrablindsRoomLightening = scrollableDivRefInchesWidthOutsideMountZebrablindsRoomLightening.current;

    if (scrollableDivInchesWidthOutsideMountZebrablindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountZebrablindsRoomLightening = scrollableDivInchesWidthOutsideMountZebrablindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountZebrablindsRoomLightening) {
          const selectedInchesDivRectWidthOutsideMountZebrablindsRoomLightening = selectedInchesDivWidthOutsideMountZebrablindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountZebrablindsRoomLightening.top +
            scrollableDivInchesWidthOutsideMountZebrablindsRoomLightening.scrollTop -
            (scrollableDivInchesWidthOutsideMountZebrablindsRoomLightening.offsetHeight - selectedInchesDivRectWidthOutsideMountZebrablindsRoomLightening.height) / 2;

          scrollableDivInchesWidthOutsideMountZebrablindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthOutsideMountZebrablindsRoomLightening = (inchesWidthOutsideMountZebrablindsRoomLightening, price) => {
    const updatedInchPricesWidthOutsideMountZebrablindsRoomLightening = { ...inchPricesAfterWidthOutsideMountZebrablindsRoomLightening, [inchesWidthOutsideMountZebrablindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountZebrablindsRoomLightening(updatedInchPricesWidthOutsideMountZebrablindsRoomLightening);
  };

  const handleNewSpanClickedWidthOutsideMountZebrablindsRoomLightening = () => {
    setselectedInchesVisibleWidthOutsideMountZebrablindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountZebrablindsRoomDarkening = (inchesWidthOutsideMountZebrablindsRoomDarkening) => {
    setselectedInchesWidthOutsideMountZebrablindsRoomDarkening(inchesWidthOutsideMountZebrablindsRoomDarkening);
    setselectedInchesVisibleWidthOutsideMountZebrablindsRoomDarkening(false);
    setselectedInchWidthOutsideMountZebrablindsRoomDarkening(inchesWidthOutsideMountZebrablindsRoomDarkening);

    const scrollableDivInchesWidthOutsideMountZebrablindsRoomDarkening = scrollableDivRefInchesWidthOutsideMountZebrablindsRoomDarkening.current;

    if (scrollableDivInchesWidthOutsideMountZebrablindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountZebrablindsRoomDarkening = scrollableDivInchesWidthOutsideMountZebrablindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountZebrablindsRoomDarkening) {
          const selectedInchesDivRectWidthOutsideMountZebrablindsRoomDarkening = selectedInchesDivWidthOutsideMountZebrablindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountZebrablindsRoomDarkening.top +
            scrollableDivInchesWidthOutsideMountZebrablindsRoomDarkening.scrollTop -
            (scrollableDivInchesWidthOutsideMountZebrablindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthOutsideMountZebrablindsRoomDarkening.height) / 2;

          scrollableDivInchesWidthOutsideMountZebrablindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthOutsideMountZebrablindsRoomDarkening = (inchesWidthOutsideMountZebrablindsRoomDarkening, price) => {
    const updatedInchPricesWidthOutsideMountZebrablindsRoomDarkening = { ...inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening, [inchesWidthOutsideMountZebrablindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountZebrablindsRoomDarkening(updatedInchPricesWidthOutsideMountZebrablindsRoomDarkening);
  };

  const handleNewSpanClickedWidthOutsideMountZebrablindsRoomDarkening = () => {
    setselectedInchesVisibleWidthOutsideMountZebrablindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledInchesWhenClickedWidthOutsideMountShangrilablindsRoomDarkening = (inchesWidthOutsideMountShangrilablindsRoomDarkening) => {
    setselectedInchesWidthOutsideMountShangrilablindsRoomDarkening(inchesWidthOutsideMountShangrilablindsRoomDarkening);
    setselectedInchesVisibleWidthOutsideMountShangrilablindsRoomDarkening(false);
    setselectedInchWidthOutsideMountShangrilablindsRoomDarkening(inchesWidthOutsideMountShangrilablindsRoomDarkening);

    const scrollableDivInchesWidthOutsideMountShangrilablindsRoomDarkening = scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomDarkening.current;

    if (scrollableDivInchesWidthOutsideMountShangrilablindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountShangrilablindsRoomDarkening = scrollableDivInchesWidthOutsideMountShangrilablindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountShangrilablindsRoomDarkening) {
          const selectedInchesDivRectWidthOutsideMountShangrilablindsRoomDarkening = selectedInchesDivWidthOutsideMountShangrilablindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountShangrilablindsRoomDarkening.top +
            scrollableDivInchesWidthOutsideMountShangrilablindsRoomDarkening.scrollTop -
            (scrollableDivInchesWidthOutsideMountShangrilablindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthOutsideMountShangrilablindsRoomDarkening.height) / 2;

          scrollableDivInchesWidthOutsideMountShangrilablindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthOutsideMountShangrilablindsRoomDarkening = (inchesWidthOutsideMountShangrilablindsRoomDarkening, price) => {
    const updatedInchPricesWidthOutsideMountShangrilablindsRoomDarkening = { ...inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening, [inchesWidthOutsideMountShangrilablindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening(updatedInchPricesWidthOutsideMountShangrilablindsRoomDarkening);
  };

  const handleNewSpanClickedWidthOutsideMountShangrilablindsRoomDarkening = () => {
    setselectedInchesVisibleWidthOutsideMountShangrilablindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountShangrilablindsRoomLightening = (inchesWidthOutsideMountShangrilablindsRoomLightening) => {
    setselectedInchesWidthOutsideMountShangrilablindsRoomLightening(inchesWidthOutsideMountShangrilablindsRoomLightening);
    setselectedInchesVisibleWidthOutsideMountShangrilablindsRoomLightening(false);
    setselectedInchWidthOutsideMountShangrilablindsRoomLightening(inchesWidthOutsideMountShangrilablindsRoomLightening);

    const scrollableDivInchesWidthOutsideMountShangrilablindsRoomLightening = scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomLightening.current;

    if (scrollableDivInchesWidthOutsideMountShangrilablindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountShangrilablindsRoomLightening = scrollableDivInchesWidthOutsideMountShangrilablindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountShangrilablindsRoomLightening) {
          const selectedInchesDivRectWidthOutsideMountShangrilablindsRoomLightening = selectedInchesDivWidthOutsideMountShangrilablindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountShangrilablindsRoomLightening.top +
            scrollableDivInchesWidthOutsideMountShangrilablindsRoomLightening.scrollTop -
            (scrollableDivInchesWidthOutsideMountShangrilablindsRoomLightening.offsetHeight - selectedInchesDivRectWidthOutsideMountShangrilablindsRoomLightening.height) / 2;

          scrollableDivInchesWidthOutsideMountShangrilablindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthOutsideMountShangrilablindsRoomLightening = (inchesWidthOutsideMountShangrilablindsRoomLightening, price) => {
    const updatedInchPricesWidthOutsideMountShangrilablindsRoomLightening = { ...inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening, [inchesWidthOutsideMountShangrilablindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountShangrilablindsRoomLightening(updatedInchPricesWidthOutsideMountShangrilablindsRoomLightening);
  };

  const handleNewSpanClickedWidthOutsideMountShangrilablindsRoomLightening = () => {
    setselectedInchesVisibleWidthOutsideMountShangrilablindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMountZebrablindsRoomLightening = (selectedInchesHeightOutsideMountZebrablindsRoomLightening, newPriceHeightOutsideMountZebrablindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountZebrablindsRoomLightening);
    console.log("New price:", newPriceHeightOutsideMountZebrablindsRoomLightening);

    setinchPricesAfterHeightOutsideMountZebrablindsRoomLightening(prevPricesHeightOutsideMountZebrablindsRoomLightening => {
      const updatedPricesHeightOutsideMountZebrablindsRoomLightening = { ...prevPricesHeightOutsideMountZebrablindsRoomLightening };
      updatedPricesHeightOutsideMountZebrablindsRoomLightening[selectedInchesHeightOutsideMountZebrablindsRoomLightening] = parseFloat(newPriceHeightOutsideMountZebrablindsRoomLightening);
      return updatedPricesHeightOutsideMountZebrablindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountZebrablindsRoomLightening = (inchesHeightOutsideMountZebrablindsRoomLightening) => {
    setselectedInchesHeightOutsideMountZebrablindsRoomLightening(inchesHeightOutsideMountZebrablindsRoomLightening);

    if (inchesHeightOutsideMountZebrablindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountZebrablindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountZebrablindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountZebrablindsRoomLightening = inchPricesAfterHeightOutsideMountZebrablindsRoomLightening[inchesHeightOutsideMountZebrablindsRoomLightening];
    setnewSetPriceInchesHeightOutsideMountZebrablindsRoomLightening(newSetPriceinchesHeightOutsideMountZebrablindsRoomLightening !== undefined ? newSetPriceinchesHeightOutsideMountZebrablindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountZebrablindsRoomLightening === undefined && inchesHeightOutsideMountZebrablindsRoomLightening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountZebrablindsRoomLightening = inchesHeightOutsideMountZebrablindsRoomLightening - 1;
      while (prevInchinchesHeightOutsideMountZebrablindsRoomLightening % 5 !== 0) {
        prevInchinchesHeightOutsideMountZebrablindsRoomLightening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomLightening = inchPricesAfterHeightOutsideMountZebrablindsRoomLightening[prevInchinchesHeightOutsideMountZebrablindsRoomLightening];
      setnewSetPriceInchesHeightOutsideMountZebrablindsRoomLightening(nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomLightening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomLightening);
      let nextInchHeightOutsideMountZebrablindsRoomLightening = prevInchinchesHeightOutsideMountZebrablindsRoomLightening + 1;
      while (nextInchHeightOutsideMountZebrablindsRoomLightening < inchesHeightOutsideMountZebrablindsRoomLightening) {
        nextInchHeightOutsideMountZebrablindsRoomLightening++;
      }

    } else if (inchesHeightOutsideMountZebrablindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountZebrablindsRoomLightening[inchesHeightOutsideMountZebrablindsRoomLightening]);
    }
  };

  const handleNewSpanClickedHeightOutsideMountZebrablindsRoomLightening = () => {
    setselectedInchesVisibleHeightOutsideMountZebrablindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightOutsideMountZebrablindsRoomDarkening = (selectedInchesHeightOutsideMountZebrablindsRoomDarkening, newPriceHeightOutsideMountZebrablindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountZebrablindsRoomDarkening);
    console.log("New price:", newPriceHeightOutsideMountZebrablindsRoomDarkening);

    setinchPricesAfterHeightOutsideMountZebrablindsRoomDarkening(prevPricesHeightOutsideMountZebrablindsRoomDarkening => {
      const updatedPricesHeightOutsideMountZebrablindsRoomDarkening = { ...prevPricesHeightOutsideMountZebrablindsRoomDarkening };
      updatedPricesHeightOutsideMountZebrablindsRoomDarkening[selectedInchesHeightOutsideMountZebrablindsRoomDarkening] = parseFloat(newPriceHeightOutsideMountZebrablindsRoomDarkening);
      return updatedPricesHeightOutsideMountZebrablindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountZebrablindsRoomDarkening = (inchesHeightOutsideMountZebrablindsRoomDarkening) => {
    setselectedInchesHeightOutsideMountZebrablindsRoomDarkening(inchesHeightOutsideMountZebrablindsRoomDarkening);

    if (inchesHeightOutsideMountZebrablindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountZebrablindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountZebrablindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountZebrablindsRoomDarkening = inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening[inchesHeightOutsideMountZebrablindsRoomDarkening];
    setnewSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening(newSetPriceinchesHeightOutsideMountZebrablindsRoomDarkening !== undefined ? newSetPriceinchesHeightOutsideMountZebrablindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountZebrablindsRoomDarkening === undefined && inchesHeightOutsideMountZebrablindsRoomDarkening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountZebrablindsRoomDarkening = inchesHeightOutsideMountZebrablindsRoomDarkening - 1;
      while (prevInchinchesHeightOutsideMountZebrablindsRoomDarkening % 5 !== 0) {
        prevInchinchesHeightOutsideMountZebrablindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomDarkening = inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening[prevInchinchesHeightOutsideMountZebrablindsRoomDarkening];
      setnewSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening(nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomDarkening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountZebrablindsRoomDarkening);
      let nextInchHeightOutsideMountZebrablindsRoomDarkening = prevInchinchesHeightOutsideMountZebrablindsRoomDarkening + 1;
      while (nextInchHeightOutsideMountZebrablindsRoomDarkening < inchesHeightOutsideMountZebrablindsRoomDarkening) {
        nextInchHeightOutsideMountZebrablindsRoomDarkening++;
      }

    } else if (inchesHeightOutsideMountZebrablindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening[inchesHeightOutsideMountZebrablindsRoomDarkening]);
    }
  };

  const handleNewSpanClickedHeightOutsideMountZebrablindsRoomDarkening = () => {
    setselectedInchesVisibleHeightOutsideMountZebrablindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMountShangrilablindsRoomDarkening = (selectedInchesHeightOutsideMountShangrilablindsRoomDarkening, newPriceHeightOutsideMountShangrilablindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountShangrilablindsRoomDarkening);
    console.log("New price:", newPriceHeightOutsideMountShangrilablindsRoomDarkening);

    setinchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening(prevPricesHeightOutsideMountShangrilablindsRoomDarkening => {
      const updatedPricesHeightOutsideMountShangrilablindsRoomDarkening = { ...prevPricesHeightOutsideMountShangrilablindsRoomDarkening };
      updatedPricesHeightOutsideMountShangrilablindsRoomDarkening[selectedInchesHeightOutsideMountShangrilablindsRoomDarkening] = parseFloat(newPriceHeightOutsideMountShangrilablindsRoomDarkening);
      return updatedPricesHeightOutsideMountShangrilablindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountShangrilablindsRoomDarkening = (inchesHeightOutsideMountShangrilablindsRoomDarkening) => {
    setselectedInchesHeightOutsideMountShangrilablindsRoomDarkening(inchesHeightOutsideMountShangrilablindsRoomDarkening);

    if (inchesHeightOutsideMountShangrilablindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountShangrilablindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountShangrilablindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountShangrilablindsRoomDarkening = inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening[inchesHeightOutsideMountShangrilablindsRoomDarkening];
    setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening(newSetPriceinchesHeightOutsideMountShangrilablindsRoomDarkening !== undefined ? newSetPriceinchesHeightOutsideMountShangrilablindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountShangrilablindsRoomDarkening === undefined && inchesHeightOutsideMountShangrilablindsRoomDarkening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountShangrilablindsRoomDarkening = inchesHeightOutsideMountShangrilablindsRoomDarkening - 1;
      while (prevInchinchesHeightOutsideMountShangrilablindsRoomDarkening % 5 !== 0) {
        prevInchinchesHeightOutsideMountShangrilablindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomDarkening = inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening[prevInchinchesHeightOutsideMountShangrilablindsRoomDarkening];
      setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening(nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomDarkening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomDarkening);
      let nextInchHeightOutsideMountShangrilablindsRoomDarkening = prevInchinchesHeightOutsideMountShangrilablindsRoomDarkening + 1;
      while (nextInchHeightOutsideMountShangrilablindsRoomDarkening < inchesHeightOutsideMountShangrilablindsRoomDarkening) {
        nextInchHeightOutsideMountShangrilablindsRoomDarkening++;
      }

    } else if (inchesHeightOutsideMountShangrilablindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening[inchesHeightOutsideMountShangrilablindsRoomDarkening]);
    }
  };

  const handleNewSpanClickedHeightOutsideMountShangrilablindsRoomDarkening = () => {
    setselectedInchesVisibleHeightOutsideMountShangrilablindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMountShangrilablindsRoomLightening = (selectedInchesHeightOutsideMountShangrilablindsRoomLightening, newPriceHeightOutsideMountShangrilablindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountShangrilablindsRoomLightening);
    console.log("New price:", newPriceHeightOutsideMountShangrilablindsRoomLightening);

    setinchPricesAfterHeightOutsideMountShangrilablindsRoomLightening(prevPricesHeightOutsideMountShangrilablindsRoomLightening => {
      const updatedPricesHeightOutsideMountShangrilablindsRoomLightening = { ...prevPricesHeightOutsideMountShangrilablindsRoomLightening };
      updatedPricesHeightOutsideMountShangrilablindsRoomLightening[selectedInchesHeightOutsideMountShangrilablindsRoomLightening] = parseFloat(newPriceHeightOutsideMountShangrilablindsRoomLightening);
      return updatedPricesHeightOutsideMountShangrilablindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountShangrilablindsRoomLightening = (inchesHeightOutsideMountShangrilablindsRoomLightening) => {
    setselectedInchesHeightOutsideMountShangrilablindsRoomLightening(inchesHeightOutsideMountShangrilablindsRoomLightening);

    if (inchesHeightOutsideMountShangrilablindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountShangrilablindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountShangrilablindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountShangrilablindsRoomLightening = inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening[inchesHeightOutsideMountShangrilablindsRoomLightening];
    setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening(newSetPriceinchesHeightOutsideMountShangrilablindsRoomLightening !== undefined ? newSetPriceinchesHeightOutsideMountShangrilablindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountShangrilablindsRoomLightening === undefined && inchesHeightOutsideMountShangrilablindsRoomLightening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountShangrilablindsRoomLightening = inchesHeightOutsideMountShangrilablindsRoomLightening - 1;
      while (prevInchinchesHeightOutsideMountShangrilablindsRoomLightening % 5 !== 0) {
        prevInchinchesHeightOutsideMountShangrilablindsRoomLightening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomLightening = inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening[prevInchinchesHeightOutsideMountShangrilablindsRoomLightening];
      setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening(nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomLightening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountShangrilablindsRoomLightening);
      let nextInchHeightOutsideMountShangrilablindsRoomLightening = prevInchinchesHeightOutsideMountShangrilablindsRoomLightening + 1;
      while (nextInchHeightOutsideMountShangrilablindsRoomLightening < inchesHeightOutsideMountShangrilablindsRoomLightening) {
        nextInchHeightOutsideMountShangrilablindsRoomLightening++;
      }

    } else if (inchesHeightOutsideMountShangrilablindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening[inchesHeightOutsideMountShangrilablindsRoomLightening]);
    }
  };

  const handleNewSpanClickedHeightOutsideMountShangrilablindsRoomLightening = () => {
    setselectedInchesVisibleHeightOutsideMountShangrilablindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const fetchLatestData = async () => {
    try {
      const response = await fetch("/api/getLatestData");
      const result = await response.json();
      const latestData = result.data;

      if (latestData) {



        setproductName1(latestData.productName1 || "");
        setproductName1ZebrablindsRoomLightening(latestData.productName1ZebrablindsRoomLightening || "");
        setproductName1ZebrablindsRoomDarkening(latestData.productName1ZebrablindsRoomDarkening || "");
        setproductName1ShangrilablindsRoomDarkening(latestData.productName1ShangrilablindsRoomDarkening || "");
        setproductName1ShangrilablindsRoomLightening(latestData.productName1ShangrilablindsRoomLightening || "");

        setproductName2(latestData.productName2 || "");
        setProductName2ZebrablindsRoomLightening(latestData.productName2ZebrablindsRoomLightening || "");
        setproductName2ZebrablindsRoomDarkening(latestData.productName2ZebrablindsRoomDarkening || "");
        setproductName2ShangrilablindsRoomLightening(latestData.productName2ShangrilablindsRoomLightening || "");
        setproductName2ShangrilablindsRoomDarkening(latestData.productName2ShangrilablindsRoomDarkening || "");


        setroomname(latestData.roomname || "");
        setroomnameZebrablindsRoomLightening(latestData.roomnameZebrablindsRoomLightening || "");
        setroomnameZebrablindsRoomDarkening(latestData.roomnameZebrablindsRoomDarkening || "");
        setroomnameShangrilablindsRoomLightening(latestData.roomnameShangrilablindsRoomLightening || "");
        setroomnameShangrilablindsRoomDarkening(latestData.roomnameShangrilablindsRoomDarkening || "");


        setWandPriceCMS(latestData.WandPriceCMS || "");
        setWandPriceCMSZebrablindsRoomLightening(latestData.WandPriceCMSZebrablindsRoomLightening || "");
        setWandPriceCMSZebrablindsRoomDarkening(latestData.WandPriceCMSZebrablindsRoomDarkening || "");
        setWandPriceCMSShangrilablindsRoomLightening(latestData.WandPriceCMSShangrilablindsRoomLightening || "");
        setWandPriceCMSShangrilablindsRoomDarkening(latestData.WandPriceCMSShangrilablindsRoomDarkening || "");


        setcordlesspriceCMS(latestData.cordlesspriceCMS || "");
        setcordlesspriceCMSZebrablindsRoomLightening(latestData.cordlesspriceCMSZebrablindsRoomLightening || "");
        setcordlesspriceCMSZebrablindsRoomDarkening(latestData.cordlesspriceCMSZebrablindsRoomDarkening || "");
        setcordlesspriceCMSShangrilablindsRoomLightening(latestData.cordlesspriceCMSShangrilablindsRoomLightening || "");
        setcordlesspriceCMSShangrilablindsRoomDarkening(latestData.cordlesspriceCMSShangrilablindsRoomDarkening || "");


        setmotorizedpriceCMS(latestData.motorizedpriceCMS || "");
        setmotorizedpriceCMSZebrablindsRoomLightening(latestData.motorizedpriceCMSZebrablindsRoomLightening || "");
        setmotorizedpriceCMSZebrablindsRoomDarkening(latestData.motorizedpriceCMSZebrablindsRoomDarkening || "");
        setmotorizedpriceCMSShangrilablindsRoomLightening(latestData.motorizedpriceCMSShangrilablindsRoomLightening || "");
        setmotorizedpriceCMSShangrilablindsRoomDarkening(latestData.motorizedpriceCMSShangrilablindsRoomDarkening || "");


        setinchPriceCMSWidthInsideMount(latestData.inchPriceCMSWidthInsideMount || "");
        setinchPriceCMSeightInsideMount(latestData.inchPriceCMSeightInsideMount || "");
        setinchPriceCMSWidthOutsideMount(latestData.inchPriceCMSWidthOutsideMount || "");
        setinchPriceCMSHeightOutsideMount(latestData.inchPriceCMSHeightOutsideMount || "");


        
        const inchPricesWidthInsideMount = JSON.parse(latestData.inchPricesAfterWidthInsideMount || "{}");
        setinchPricesAfterWidthInsideMount(inchPricesWidthInsideMount);

        const inchPricesHeightInsideMount = JSON.parse(latestData.inchPricesAfterHeightInsideMount || "{}");
        setinchPricesAfterHeightInsideMount(inchPricesHeightInsideMount);

        const inchPricesWidthOutsideMount = JSON.parse(latestData.inchPricesAfterWidthOutsideMount || "{}");
        setinchPricesAfterWidthOutsideMount(inchPricesWidthOutsideMount);

        const inchPricesHeightOutsideMount = JSON.parse(latestData.inchPricesAfterHeightOutsideMount || "{}");
        setinchPricesAfterHeightOutsideMount(inchPricesHeightOutsideMount);



        const inchPricesWidthInsideMountZebrablindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthInsideMountZebrablindsRoomLightening || "{}");
        setinchPricesAfterWidthInsideMountZebrablindsRoomLightening(inchPricesWidthInsideMountZebrablindsRoomLightening);

        const inchPricesWidthInsideMountZebrablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthInsideMountZebrablindsRoomDarkening || "{}");
        setinchPricesAfterWidthInsideMountZebrablindsRoomDarkening(inchPricesWidthInsideMountZebrablindsRoomDarkening);

        const inchPricesWidthInsideMountShangrilablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening || "{}");
        setinchPricesAfterWidthInsideMountShangrilablindsRoomDarkening(inchPricesWidthInsideMountShangrilablindsRoomDarkening);

        const inchPricesWidthInsideMountShangrilablindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthInsideMountShangrilablindsRoomLightening || "{}");
        setinchPricesAfterWidthInsideMountShangrilablindsRoomLightening(inchPricesWidthInsideMountShangrilablindsRoomLightening);




        const inchPricesWidthOutsideMountZebrablindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountZebrablindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountZebrablindsRoomLightening(inchPricesWidthOutsideMountZebrablindsRoomLightening);

        const inchPricesWidthOutsideMountZebrablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountZebrablindsRoomDarkening(inchPricesWidthOutsideMountZebrablindsRoomDarkening);

        const inchPricesWidthOutsideMountShangrilablindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountShangrilablindsRoomLightening(inchPricesWidthOutsideMountShangrilablindsRoomLightening);

        const inchPricesWidthOutsideMountShangrilablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening(inchPricesWidthOutsideMountShangrilablindsRoomDarkening);




        const inchPricesHeightInsideMountZebrablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountZebrablindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountZebrablindsRoomLightening(inchPricesHeightInsideMountZebrablindsRoomLightening);

        const inchPricesHeightInsideMountZebrablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountZebrablindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountZebrablindsRoomDarkening(inchPricesHeightInsideMountZebrablindsRoomDarkening);

        const inchPricesHeightInsideMountShangrilablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountShangrilablindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountShangrilablindsRoomLightening(inchPricesHeightInsideMountShangrilablindsRoomLightening);

        const inchPricesHeightInsideMountShangrilablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountShangrilablindsRoomDarkening(inchPricesHeightInsideMountShangrilablindsRoomDarkening);




        const inchPricesHeightOutsideMountZebrablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountZebrablindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountZebrablindsRoomLightening(inchPricesHeightOutsideMountZebrablindsRoomLightening);

        const inchPricesHeightOutsideMountZebrablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountZebrablindsRoomDarkening(inchPricesHeightOutsideMountZebrablindsRoomDarkening);

        const inchPricesHeightOutsideMountShangrilablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountShangrilablindsRoomLightening(inchPricesHeightOutsideMountShangrilablindsRoomLightening);

        const inchPricesHeightOutsideMountShangrilablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening(inchPricesHeightOutsideMountShangrilablindsRoomDarkening);




        const lastSetPriceWidthInsideMountZebrablindsRoomLightening = inchPricesWidthInsideMountZebrablindsRoomLightening[selectedInchesWidthInsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountZebrablindsRoomLightening(lastSetPriceWidthInsideMountZebrablindsRoomLightening);

        const lastSetPriceWidthInsideMountZebrablindsRoomDarkening = inchPricesWidthInsideMountZebrablindsRoomDarkening[selectedInchesWidthInsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountZebrablindsRoomDarkening(lastSetPriceWidthInsideMountZebrablindsRoomDarkening);

        const lastSetPriceWidthInsideMountShangrilablindsRoomLightening = inchPricesWidthInsideMountShangrilablindsRoomLightening[selectedInchesWidthInsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountShangrilablindsRoomLightening(lastSetPriceWidthInsideMountShangrilablindsRoomLightening);

        const lastSetPriceWidthInsideMountShangrilablindsRoomDarkening = inchPricesWidthInsideMountShangrilablindsRoomDarkening[selectedInchesWidthInsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountShangrilablindsRoomDarkening(lastSetPriceWidthInsideMountShangrilablindsRoomDarkening);




        const lastSetPriceWidthOutsideMountZebrablindsRoomLightening = inchPricesWidthOutsideMountZebrablindsRoomLightening[selectedInchesWidthOutsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountZebrablindsRoomLightening(lastSetPriceWidthOutsideMountZebrablindsRoomLightening);

        const lastSetPriceWidthOutsideMountZebrablindsRoomDarkening = inchPricesWidthOutsideMountZebrablindsRoomDarkening[selectedInchesWidthOutsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountZebrablindsRoomDarkening(lastSetPriceWidthOutsideMountZebrablindsRoomDarkening);

        const lastSetPriceWidthOutsideMountShangrilablindsRoomDarkening = inchPricesWidthOutsideMountShangrilablindsRoomDarkening[selectedInchesWidthOutsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountShangrilablindsRoomDarkening(lastSetPriceWidthOutsideMountShangrilablindsRoomDarkening);

        const lastSetPriceWidthOutsideMountShangrilablindsRoomLightening = inchPricesWidthOutsideMountShangrilablindsRoomLightening[selectedInchesWidthOutsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountShangrilablindsRoomLightening(lastSetPriceWidthOutsideMountShangrilablindsRoomLightening);




        const lastSetPriceHeightInsideMountZebrablindsRoomLightening = inchPricesHeightInsideMountZebrablindsRoomLightening[selectedInchesHeightInsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountZebrablindsRoomLightening(lastSetPriceHeightInsideMountZebrablindsRoomLightening);

        const lastSetPriceHeightInsideMountZebrablindsRoomDarkening = inchPricesHeightInsideMountZebrablindsRoomDarkening[selectedInchesHeightInsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountZebrablindsRoomDarkening(lastSetPriceHeightInsideMountZebrablindsRoomDarkening);

        const lastSetPriceHeightInsideMountShangrilablindsRoomLightening = inchPricesHeightInsideMountShangrilablindsRoomLightening[selectedInchesHeightInsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountShangrilablindsRoomLightening(lastSetPriceHeightInsideMountShangrilablindsRoomLightening);

        const lastSetPriceHeightInsideMountShangrilablindsRoomDarkening = inchPricesHeightInsideMountShangrilablindsRoomDarkening[selectedInchesHeightInsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening(lastSetPriceHeightInsideMountShangrilablindsRoomDarkening);




        const lastSetPriceHeightOutsideMountZebrablindsRoomLightening = inchPricesHeightOutsideMountZebrablindsRoomLightening[selectedInchesHeightOutsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountZebrablindsRoomLightening(lastSetPriceHeightOutsideMountZebrablindsRoomLightening);

        const lastSetPriceHeightOutsideMountZebrablindsRoomDarkening = inchPricesHeightOutsideMountZebrablindsRoomDarkening[selectedInchesHeightOutsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening(lastSetPriceHeightOutsideMountZebrablindsRoomDarkening);

        const lastSetPriceHeightOutsideMountShangrilablindsRoomLightening = inchPricesHeightOutsideMountShangrilablindsRoomLightening[selectedInchesHeightOutsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening(lastSetPriceHeightOutsideMountShangrilablindsRoomLightening);

        const lastSetPriceHeightOutsideMountShangrilablindsRoomDarkening = inchPricesHeightOutsideMountShangrilablindsRoomDarkening[selectedInchesHeightOutsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening(lastSetPriceHeightOutsideMountShangrilablindsRoomDarkening);




      }
    } catch (error) {
      console.error("Error fetching latest data:", error);
    }
  };


  useEffect(() => {
    fetchLatestData();
  }, []);


  const [isSavedtext, setIsSavedtext] = useState(false);

  const handleSaveOptions = async () => {
    try {
      const button = document.getElementById("save_button");

      button.style.transform = "scale(0.94)";
      button.style.transition = "transform 0.2s";
      button.style.borderColor = "grey";
      button.style.backgroundColor = "#f1f1f1";

      const response = await fetch("/api/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

          name: `unique_${Date.now()}`,
          productName1: productName1,
          productName2: productName2,
          WandPriceCMS: WandPriceCMS,
          roomname: roomname,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,
          inchPriceCMSWidthInsideMount: JSON.stringify(inchPriceCMSWidthInsideMount),
          inchPriceCMSeightInsideMount: JSON.stringify(inchPriceCMSeightInsideMount),
          inchPriceCMSWidthOutsideMount: JSON.stringify(inchPriceCMSWidthOutsideMount),
          inchPriceCMSHeightOutsideMount: JSON.stringify(inchPriceCMSHeightOutsideMount),

          inchPricesAfterWidthInsideMount: JSON.stringify(inchPricesAfterWidthInsideMount),
          inchPricesAfterHeightInsideMount: JSON.stringify(inchPricesAfterHeightInsideMount),
          inchPricesAfterWidthOutsideMount: JSON.stringify(inchPricesAfterWidthOutsideMount),
          inchPricesAfterHeightOutsideMount: JSON.stringify(inchPricesAfterHeightOutsideMount),


          nameZebrablindsRoomLightening: `unique_${Date.now()}`,
          productName1ZebrablindsRoomLightening: productName1ZebrablindsRoomLightening,
          productName2ZebrablindsRoomLightening: productName2ZebrablindsRoomLightening,
          WandPriceCMSZebrablindsRoomLightening: WandPriceCMSZebrablindsRoomLightening,
          roomnameZebrablindsRoomLightening: roomnameZebrablindsRoomLightening,
          cordlesspriceCMSZebrablindsRoomLightening: cordlesspriceCMSZebrablindsRoomLightening,
          motorizedpriceCMSZebrablindsRoomLightening: motorizedpriceCMSZebrablindsRoomLightening,
          inchPricesAfterWidthInsideMountZebrablindsRoomLightening: JSON.stringify(inchPricesAfterWidthInsideMountZebrablindsRoomLightening),
          inchPricesAfterHeightInsideMountZebrablindsRoomLightening: JSON.stringify(inchPricesAfterHeightInsideMountZebrablindsRoomLightening),
          inchPricesAfterWidthOutsideMountZebrablindsRoomLightening: JSON.stringify(inchPricesAfterWidthOutsideMountZebrablindsRoomLightening),
          inchPricesAfterHeightOutsideMountZebrablindsRoomLightening: JSON.stringify(inchPricesAfterHeightOutsideMountZebrablindsRoomLightening),

          nameZebrablindsRoomDarkening: `unique_${Date.now()}`,
          productName1ZebrablindsRoomDarkening: productName1ZebrablindsRoomDarkening,
          productName2ZebrablindsRoomDarkening: productName2ZebrablindsRoomDarkening,
          WandPriceCMSZebrablindsRoomDarkening: WandPriceCMSZebrablindsRoomDarkening,
          roomnameZebrablindsRoomDarkening: roomnameZebrablindsRoomDarkening,
          cordlesspriceCMSZebrablindsRoomDarkening: cordlesspriceCMSZebrablindsRoomDarkening,
          motorizedpriceCMSZebrablindsRoomDarkening: motorizedpriceCMSZebrablindsRoomDarkening,
          inchPricesAfterWidthInsideMountZebrablindsRoomDarkening: JSON.stringify(inchPricesAfterWidthInsideMountZebrablindsRoomDarkening),
          inchPricesAfterHeightInsideMountZebrablindsRoomDarkening: JSON.stringify(inchPricesAfterHeightInsideMountZebrablindsRoomDarkening),
          inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening: JSON.stringify(inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening),
          inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening: JSON.stringify(inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening),

          nameShangrilablindsRoomDarkening: `unique_${Date.now()}`,
          productName1ShangrilablindsRoomDarkening: productName1ShangrilablindsRoomDarkening,
          productName2ShangrilablindsRoomDarkening: productName2ShangrilablindsRoomDarkening,
          WandPriceCMSShangrilablindsRoomDarkening: WandPriceCMSShangrilablindsRoomDarkening,
          roomnameShangrilablindsRoomDarkening: roomnameShangrilablindsRoomDarkening,
          cordlesspriceCMSShangrilablindsRoomDarkening: cordlesspriceCMSShangrilablindsRoomDarkening,
          motorizedpriceCMSShangrilablindsRoomDarkening: motorizedpriceCMSShangrilablindsRoomDarkening,
          inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening: JSON.stringify(inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening),
          inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening: JSON.stringify(inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening),
          inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening: JSON.stringify(inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening),
          inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening: JSON.stringify(inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening),

          nameShangrilablindsRoomLightening: `unique_${Date.now()}`,
          productName1ShangrilablindsRoomLightening: productName1ShangrilablindsRoomLightening,
          productName2ShangrilablindsRoomLightening: productName2ShangrilablindsRoomLightening,
          WandPriceCMSShangrilablindsRoomLightening: WandPriceCMSShangrilablindsRoomLightening,
          roomnameShangrilablindsRoomLightening: roomnameShangrilablindsRoomLightening,
          cordlesspriceCMSShangrilablindsRoomLightening: cordlesspriceCMSShangrilablindsRoomLightening,
          motorizedpriceCMSShangrilablindsRoomLightening: motorizedpriceCMSShangrilablindsRoomLightening,
          inchPricesAfterWidthInsideMountShangrilablindsRoomLightening: JSON.stringify(inchPricesAfterWidthInsideMountShangrilablindsRoomLightening),
          inchPricesAfterHeightInsideMountShangrilablindsRoomLightening: JSON.stringify(inchPricesAfterHeightInsideMountShangrilablindsRoomLightening),
          inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening: JSON.stringify(inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening),
          inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening: JSON.stringify(inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening),


          inchPriceCMSWidthInsideMount: JSON.stringify(inchPriceCMSWidthInsideMount),
          inchPriceCMSeightInsideMount: JSON.stringify(inchPriceCMSeightInsideMount),
          inchPriceCMSWidthOutsideMount: JSON.stringify(inchPriceCMSWidthOutsideMount),
          inchPriceCMSHeightOutsideMount: JSON.stringify(inchPriceCMSHeightOutsideMount),

        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);
        updateData && updateData(result.data);
        setIsSavedtext(true); // Set the state to true when saved
      }

      setTimeout(() => {
        button.style.transform = "scale(1)";
        button.style.borderWidth = "2px";
        button.style.borderColor = "orange";
        button.style.backgroundColor = "white";
        setIsSavedtext(false); // Reset the state after 700 milliseconds
      }, 700);
    } catch (error) {
      console.error("Error saving new name:", error);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <>
      {session ? (

        <div className={styles.CMSPanel_Page_Wrapper}>
          <div className={styles.save_button_wrapper}>

            <button id="save_button" className={styles.save_button} onClick={handleSaveOptions}>
              Save
            </button>

            {isSavedtext &&
              <>
                <p className={styles.save_button_confirmation_text}>Saved</p>
                <Image
                  className={styles.arrowdowngreencircle}
                  alt="arrowdowngreencircle"
                  src={"/arrowdowngreencircle.png"}
                  width={500}
                  height={500}
                ></Image>
              </>
            }
          </div>


          <span className={styles.section_group}>
            <div className={styles.section_tag}>
              <h1 className={styles.section_tag_title} >
                Section:
              </h1>
              <h1 className={styles.section_tag_branch}>
                Zebra Blinds (Room Lightening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1ZebrablindsRoomLightening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1ZebrablindsRoomLightening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setProductName2ZebrablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.setproductName2ZebrablindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameZebrablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameZebrablindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSZebrablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSZebrablindsRoomLightening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSZebrablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSZebrablindsRoomLightening}
                  </h1>
                </div>
              </div>



              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>
                  Change Motorized Price:
                </label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setmotorizedpriceCMSZebrablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSZebrablindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ZEBRABLINDS ROOM LIGHTENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthInsideMountZebrablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountZebrablindsRoomLightening(inchesWidthInsideMountZebrablindsRoomLightening)}
                            className={`${selectedInchesWidthInsideMountZebrablindsRoomLightening === inchesWidthInsideMountZebrablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountZebrablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountZebrablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountZebrablindsRoomLightening}>
                        {selectedInchesWidthInsideMountZebrablindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountZebrablindsRoomLightening(selectedInchesWidthInsideMountZebrablindsRoomLightening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountZebrablindsRoomLightening[selectedInchesWidthInsideMountZebrablindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthInsideMountZebrablindsRoomLightening[selectedInchesWidthInsideMountZebrablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>


                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>


                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountZebrablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountZebrablindsRoomLightening(inchesHeightInsideMountZebrablindsRoomLightening)}
                            className={`${selectedInchesHeightInsideMountZebrablindsRoomLightening === inchesHeightInsideMountZebrablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountZebrablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountZebrablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountZebrablindsRoomLightening}>
                        {selectedInchesVisibleHeightInsideMountZebrablindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountZebrablindsRoomLightening(selectedInchesHeightInsideMountZebrablindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountZebrablindsRoomLightening[selectedInchesHeightInsideMountZebrablindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightInsideMountZebrablindsRoomLightening[selectedInchesHeightInsideMountZebrablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountZebrablindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightInsideMountZebrablindsRoomLightening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>


              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>


                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ZEBRABLINDS ROOM LIGHTENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthOutsideMountZebrablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountZebrablindsRoomLightening(inchesWidthOutsideMountZebrablindsRoomLightening)}
                            className={`${selectedInchesWidthOutsideMountZebrablindsRoomLightening === inchesWidthOutsideMountZebrablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountZebrablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountZebrablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountZebrablindsRoomLightening}>
                        {selectedInchesWidthOutsideMountZebrablindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountZebrablindsRoomLightening(selectedInchesWidthOutsideMountZebrablindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountZebrablindsRoomLightening[selectedInchesWidthOutsideMountZebrablindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthOutsideMountZebrablindsRoomLightening[selectedInchesWidthOutsideMountZebrablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountZebrablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountZebrablindsRoomLightening(inchesHeightOutsideMountZebrablindsRoomLightening)}
                            className={`${selectedInchesHeightOutsideMountZebrablindsRoomLightening === inchesHeightOutsideMountZebrablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountZebrablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountZebrablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountZebrablindsRoomLightening}>
                        {selectedInchesVisibleHeightOutsideMountZebrablindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountZebrablindsRoomLightening(selectedInchesHeightOutsideMountZebrablindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountZebrablindsRoomLightening[selectedInchesHeightOutsideMountZebrablindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightOutsideMountZebrablindsRoomLightening[selectedInchesHeightOutsideMountZebrablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountZebrablindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightOutsideMountZebrablindsRoomLightening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>

            </div>
          </span>
























































          <span className={styles.section_group}>
            <div className={styles.section_tag}>
              <h1 className={styles.section_tag_title} >
                Section:
              </h1>
              <h1 className={styles.section_tag_branch}>
                Zebra Blinds (Room Darkening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1ZebrablindsRoomDarkening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1ZebrablindsRoomDarkening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2ZebrablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2ZebrablindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameZebrablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameZebrablindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSZebrablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSZebrablindsRoomDarkening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSZebrablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSZebrablindsRoomDarkening}
                  </h1>
                </div>
              </div>



              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>
                  Change Motorized Price:
                </label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setmotorizedpriceCMSZebrablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSZebrablindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ZEBRABLINDS ROOM DARKENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthInsideMountZebrablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountZebrablindsRoomDarkening(inchesWidthInsideMountZebrablindsRoomDarkening)}
                            className={`${selectedInchesWidthInsideMountZebrablindsRoomDarkening === inchesWidthInsideMountZebrablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountZebrablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountZebrablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountZebrablindsRoomDarkening}>
                        {selectedInchesWidthInsideMountZebrablindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountZebrablindsRoomDarkening(selectedInchesWidthInsideMountZebrablindsRoomDarkening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountZebrablindsRoomDarkening[selectedInchesWidthInsideMountZebrablindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthInsideMountZebrablindsRoomDarkening[selectedInchesWidthInsideMountZebrablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>


                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>


                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountZebrablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountZebrablindsRoomDarkening(inchesHeightInsideMountZebrablindsRoomDarkening)}
                            className={`${selectedInchesHeightInsideMountZebrablindsRoomDarkening === inchesHeightInsideMountZebrablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountZebrablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountZebrablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountZebrablindsRoomDarkening}>
                        {selectedInchesVisibleHeightInsideMountZebrablindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountZebrablindsRoomDarkening(selectedInchesHeightInsideMountZebrablindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountZebrablindsRoomDarkening[selectedInchesHeightInsideMountZebrablindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightInsideMountZebrablindsRoomDarkening[selectedInchesHeightInsideMountZebrablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountZebrablindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightInsideMountZebrablindsRoomDarkening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>


              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>


                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ZEBRABLINDS ROOM DARKENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthOutsideMountZebrablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountZebrablindsRoomDarkening(inchesWidthOutsideMountZebrablindsRoomDarkening)}
                            className={`${selectedInchesWidthOutsideMountZebrablindsRoomDarkening === inchesWidthOutsideMountZebrablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountZebrablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountZebrablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountZebrablindsRoomDarkening}>
                        {selectedInchesWidthOutsideMountZebrablindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountZebrablindsRoomDarkening(selectedInchesWidthOutsideMountZebrablindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening[selectedInchesWidthOutsideMountZebrablindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening[selectedInchesWidthOutsideMountZebrablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountZebrablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountZebrablindsRoomDarkening(inchesHeightOutsideMountZebrablindsRoomDarkening)}
                            className={`${selectedInchesHeightOutsideMountZebrablindsRoomDarkening === inchesHeightOutsideMountZebrablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountZebrablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountZebrablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountZebrablindsRoomDarkening}>
                        {selectedInchesVisibleHeightOutsideMountZebrablindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountZebrablindsRoomDarkening(selectedInchesHeightOutsideMountZebrablindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening[selectedInchesHeightOutsideMountZebrablindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening[selectedInchesHeightOutsideMountZebrablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>

            </div>
          </span>
























          <span className={styles.section_group}>
            <div className={styles.section_tag}>
              <h1 className={styles.section_tag_title} >
                Section:
              </h1>
              <h1 className={styles.section_tag_branch}>
                SHANGRILA BLINDS (Room Lightening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1ShangrilablindsRoomLightening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1ShangrilablindsRoomLightening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2ShangrilablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameShangrilablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameShangrilablindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSShangrilablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSShangrilablindsRoomLightening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSShangrilablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSShangrilablindsRoomLighteningg}
                  </h1>
                </div>
              </div>



              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>
                  Change Motorized Price:
                </label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setmotorizedpriceCMSShangrilablindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSShangrilablindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  SHANGRILA BLINDS ROOM LIGHTENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthInsideMountShangrilablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountShangrilablindsRoomLightening(inchesWidthInsideMountShangrilablindsRoomLightening)}
                            className={`${selectedInchesWidthInsideMountShangrilablindsRoomLightening === inchesWidthInsideMountShangrilablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountShangrilablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountShangrilablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountShangrilablindsRoomLightening}>
                        {selectedInchesWidthInsideMountShangrilablindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountShangrilablindsRoomLightening(selectedInchesWidthInsideMountShangrilablindsRoomLightening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountShangrilablindsRoomLightening[selectedInchesWidthInsideMountShangrilablindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthInsideMountShangrilablindsRoomLightening[selectedInchesWidthInsideMountShangrilablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>


                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>


                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountShangrilablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountShangrilablindsRoomLightening(inchesHeightInsideMountShangrilablindsRoomLightening)}
                            className={`${selectedInchesHeightInsideMountShangrilablindsRoomLightening === inchesHeightInsideMountShangrilablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountShangrilablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountShangrilablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountShangrilablindsRoomLightening}>
                        {selectedInchesVisibleHeightInsideMountShangrilablindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountShangrilablindsRoomLightening(selectedInchesHeightInsideMountShangrilablindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountShangrilablindsRoomLightening[selectedInchesHeightInsideMountShangrilablindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightInsideMountShangrilablindsRoomLightening[selectedInchesHeightInsideMountShangrilablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountShangrilablindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightInsideMountShangrilablindsRoomLightening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>


              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>


                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  SHANGRILA BLINDS ROOM LIGHTENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthOutsideMountShangrilablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountShangrilablindsRoomLightening(inchesWidthOutsideMountShangrilablindsRoomLightening)}
                            className={`${selectedInchesWidthOutsideMountShangrilablindsRoomLightening === inchesWidthOutsideMountShangrilablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountShangrilablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountShangrilablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountShangrilablindsRoomLightening}>
                        {selectedInchesWidthOutsideMountShangrilablindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountShangrilablindsRoomLightening(selectedInchesWidthOutsideMountShangrilablindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening[selectedInchesWidthOutsideMountShangrilablindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening[selectedInchesWidthOutsideMountShangrilablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountShangrilablindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountShangrilablindsRoomLightening(inchesHeightOutsideMountShangrilablindsRoomLightening)}
                            className={`${selectedInchesHeightOutsideMountShangrilablindsRoomLightening === inchesHeightOutsideMountShangrilablindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountShangrilablindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountShangrilablindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountShangrilablindsRoomLightening}>
                        {selectedInchesVisibleHeightOutsideMountShangrilablindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountShangrilablindsRoomLightening(selectedInchesHeightOutsideMountShangrilablindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening[selectedInchesHeightOutsideMountShangrilablindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening[selectedInchesHeightOutsideMountShangrilablindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>

            </div>
          </span>













          <span className={styles.section_group}>
            <div className={styles.section_tag}>
              <h1 className={styles.section_tag_title} >
                Section:
              </h1>
              <h1 className={styles.section_tag_branch}>
                Shangrila Blinds (Room Darkening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1ShangrilablindsRoomDarkening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1ShangrilablindsRoomDarkening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2ShangrilablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2ShangrilablindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameShangrilablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameShangrilablindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSShangrilablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSShangrilablindsRoomDarkening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSShangrilablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSShangrilablindsRoomDarkening}
                  </h1>
                </div>
              </div>



              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>
                  Change Motorized Price:
                </label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setmotorizedpriceCMSShangrilablindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSShangrilablindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  SHANGRILA BLINDS ROOM DARKENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthInsideMountShangrilablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountShangrilablindsRoomDarkening(inchesWidthInsideMountShangrilablindsRoomDarkening)}
                            className={`${selectedInchesWidthInsideMountShangrilablindsRoomDarkening === inchesWidthInsideMountShangrilablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountShangrilablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountShangrilablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountShangrilablindsRoomDarkening}>
                        {selectedInchesWidthInsideMountShangrilablindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountShangrilablindsRoomDarkening(selectedInchesWidthInsideMountShangrilablindsRoomDarkening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening[selectedInchesWidthInsideMountShangrilablindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthInsideMountShangrilablindsRoomDarkening[selectedInchesWidthInsideMountShangrilablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>


                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>


                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountShangrilablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountShangrilablindsRoomDarkening(inchesHeightInsideMountShangrilablindsRoomDarkening)}
                            className={`${selectedInchesHeightInsideMountShangrilablindsRoomDarkening === inchesHeightInsideMountShangrilablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountShangrilablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountShangrilablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountShangrilablindsRoomDarkening}>
                        {selectedInchesVisibleHeightInsideMountShangrilablindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountShangrilablindsRoomDarkening(selectedInchesHeightInsideMountShangrilablindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening[selectedInchesHeightInsideMountShangrilablindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening[selectedInchesHeightInsideMountShangrilablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>


              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>


                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  SHANGRILA BLINDS ROOM DARKENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"].map((inchesWidthOutsideMountShangrilablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountShangrilablindsRoomDarkening(inchesWidthOutsideMountShangrilablindsRoomDarkening)}
                            className={`${selectedInchesWidthOutsideMountShangrilablindsRoomDarkening === inchesWidthOutsideMountShangrilablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountShangrilablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountShangrilablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountShangrilablindsRoomDarkening}>
                        {selectedInchesWidthOutsideMountShangrilablindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountShangrilablindsRoomDarkening(selectedInchesWidthOutsideMountShangrilablindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening[selectedInchesWidthOutsideMountShangrilablindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening[selectedInchesWidthOutsideMountShangrilablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1></h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>

                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Height
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountShangrilablindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountShangrilablindsRoomDarkening(inchesHeightOutsideMountShangrilablindsRoomDarkening)}
                            className={`${selectedInchesHeightOutsideMountShangrilablindsRoomDarkening === inchesHeightOutsideMountShangrilablindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountShangrilablindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountShangrilablindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountShangrilablindsRoomDarkening}>
                        {selectedInchesVisibleHeightOutsideMountShangrilablindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountShangrilablindsRoomDarkening(selectedInchesHeightOutsideMountShangrilablindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening[selectedInchesHeightOutsideMountShangrilablindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening[selectedInchesHeightOutsideMountShangrilablindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening
                          : ""}
                      </h1>
                    </div>

                    <button id="save_button" className={styles.save_button2} onClick={handleSaveOptions}>
                      Save
                    </button>

                  </div>
                </div>
              </div>

            </div>
          </span>






        </div>


      ) : (
        <div className={styles.warning}>
          <p className={styles.warning_section_title}>
            Please Sign in to access the CMS panel or contact Admin.
          </p>
          <p className={styles.warning_section}>
            <span>Admin email 1: </span>  astrumstellar@gmail.com
          </p>
          <p className={styles.warning_section}>
            <span>Admin email 2: </span>  economyblindsshades@gmail.com
          </p>
          <p className={styles.warning_section_thank_you}>
            Thank You
          </p>
        </div>
      )}


      {showFooter && <span className={styles.ZebraBlindsFooter_wrapper}>
        <div className={`${styles.ZebraBlindsFooter} ${showFooter ? styles.showFooter : ''}`}>
          <div className={styles.shipping_divider2}></div>
          <FooterPage></FooterPage>
          <div className={styles.shipping_divider2}></div>

        </div>
      </span>}

    </>

  );
};

export default CMSPanel;