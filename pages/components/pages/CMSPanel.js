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



  const [productName1ShangrilablindsRoomLightening, setproductName1ShangrilablindsRoomLightening] = useState("");
  const [productName2ShangrilablindsRoomLightening, setproductName2ShangrilablindsRoomLightening] = useState("");
  const [roomnameShangrilablindsRoomLightening, setroomnameShangrilablindsRoomLightening] = useState("");
  const [WandPriceCMSShangrilablindsRoomLightening, setWandPriceCMSShangrilablindsRoomLightening] = useState("");
  const [cordlesspriceCMSShangrilablindsRoomLightening, setcordlesspriceCMSShangrilablindsRoomLightening] = useState("");
  const [motorizedpriceCMSShangrilablindsRoomLightening, setmotorizedpriceCMSShangrilablindsRoomLightening] = useState("");


  const [productName1ShangrilablindsRoomDarkening, setproductName1ShangrilablindsRoomDarkening] = useState("");
  const [productName2ShangrilablindsRoomDarkening, setproductName2ShangrilablindsRoomDarkening] = useState("");
  const [roomnameShangrilablindsRoomDarkening, setroomnameShangrilablindsRoomDarkening] = useState("");
  const [WandPriceCMSShangrilablindsRoomDarkening, setWandPriceCMSShangrilablindsRoomDarkening] = useState("");
  const [cordlesspriceCMSShangrilablindsRoomDarkening, setcordlesspriceCMSShangrilablindsRoomDarkening] = useState("");
  const [motorizedpriceCMSShangrilablindsRoomDarkening, setmotorizedpriceCMSShangrilablindsRoomDarkening] = useState("");



  const [productName1RomanBlindsRoomLightening, setproductName1RomanBlindsRoomLightening] = useState("");
  const [productName2RomanBlindsRoomLightening, setproductName2RomanBlindsRoomLightening] = useState("");
  const [roomnameRomanBlindsRoomLightening, setroomnameRomanBlindsRoomLightening] = useState("");
  const [WandPriceCMSRomanBlindsRoomLightening, setWandPriceCMSRomanBlindsRoomLightening] = useState("");
  const [cordlesspriceCMSRomanBlindsRoomLightening, setcordlesspriceCMSRomanBlindsRoomLightening] = useState("");
  const [motorizedpriceCMSRomanBlindsRoomLightening, setmotorizedpriceCMSRomanBlindsRoomLightening] = useState("");


  const [productName1RomanBlindsRoomDarkening, setproductName1RomanBlindsRoomDarkening] = useState("");
  const [productName2RomanBlindsRoomDarkening, setproductName2RomanBlindsRoomDarkening] = useState("");
  const [roomnameRomanBlindsRoomDarkening, setroomnameRomanBlindsRoomDarkening] = useState("");
  const [WandPriceCMSRomanBlindsRoomDarkening, setWandPriceCMSRomanBlindsRoomDarkening] = useState("");
  const [cordlesspriceCMSRomanBlindsRoomDarkening, setcordlesspriceCMSRomanBlindsRoomDarkening] = useState("");
  const [motorizedpriceCMSRomanBlindsRoomDarkening, setmotorizedpriceCMSRomanBlindsRoomDarkening] = useState("");



  const [productName1RollerBlindsRoomLightening, setproductName1RollerBlindsRoomLightening] = useState("");
  const [productName2RollerBlindsRoomLightening, setproductName2RollerBlindsRoomLightening] = useState("");
  const [roomnameRollerBlindsRoomLightening, setroomnameRollerBlindsRoomLightening] = useState("");
  const [WandPriceCMSRollerBlindsRoomLightening, setWandPriceCMSRollerBlindsRoomLightening] = useState("");
  const [cordlesspriceCMSRollerBlindsRoomLightening, setcordlesspriceCMSRollerBlindsRoomLightening] = useState("");
  const [motorizedpriceCMSRollerBlindsRoomLightening, setmotorizedpriceCMSRollerBlindsRoomLightening] = useState("");



  const [productName1RollerBlindsRoomDarkening, setproductName1RollerBlindsRoomDarkening] = useState("");
  const [productName2RollerBlindsRoomDarkening, setproductName2RollerBlindsRoomDarkening] = useState("");
  const [roomnameRollerBlindsRoomDarkening, setroomnameRollerBlindsRoomDarkening] = useState("");
  const [WandPriceCMSRollerBlindsRoomDarkening, setWandPriceCMSRollerBlindsRoomDarkening] = useState("");
  const [cordlesspriceCMSRollerBlindsRoomDarkening, setcordlesspriceCMSRollerBlindsRoomDarkening] = useState("");
  const [motorizedpriceCMSRollerBlindsRoomDarkening, setmotorizedpriceCMSRollerBlindsRoomDarkening] = useState("");



  const [productName1NoDrillTypeBlindsRoomLightening, setproductName1NoDrillTypeBlindsRoomLightening] = useState("");
  const [productName2NoDrillTypeBlindsRoomLightening, setproductName2NoDrillTypeBlindsRoomLightening] = useState("");
  const [roomnameNoDrillTypeBlindsRoomLightening, setroomnameNoDrillTypeBlindsRoomLightening] = useState("");
  const [WandPriceCMSNoDrillTypeBlindsRoomLightening, setWandPriceCMSNoDrillTypeBlindsRoomLightening] = useState("");
  const [cordlesspriceCMSNoDrillTypeBlindsRoomLightening, setcordlesspriceCMSNoDrillTypeBlindsRoomLightening] = useState("");
  const [motorizedpriceCMSNoDrillTypeBlindsRoomLightening, setmotorizedpriceCMSNoDrillTypeBlindsRoomLightening] = useState("");



  const [productName1NoDrillTypeBlindsRoomDarkening, setproductName1NoDrillTypeBlindsRoomDarkening] = useState("");
  const [productName2NoDrillTypeBlindsRoomDarkening, setproductName2NoDrillTypeBlindsRoomDarkening] = useState("");
  const [roomnameNoDrillTypeBlindsRoomDarkening, setroomnameNoDrillTypeBlindsRoomDarkening] = useState("");
  const [WandPriceCMSNoDrillTypeBlindsRoomDarkening, setWandPriceCMSNoDrillTypeBlindsRoomDarkening] = useState("");
  const [cordlesspriceCMSNoDrillTypeBlindsRoomDarkening, setcordlesspriceCMSNoDrillTypeBlindsRoomDarkening] = useState("");
  const [motorizedpriceCMSNoDrillTypeBlindsRoomDarkening, setmotorizedpriceCMSNoDrillTypeBlindsRoomDarkening] = useState("");



  const [productName1HoneycombBlindsRoomLightening, setproductName1HoneycombBlindsRoomLightening] = useState("");
  const [productName2HoneycombBlindsRoomLightening, setproductName2HoneycombBlindsRoomLightening] = useState("");
  const [roomnameHoneycombBlindsRoomLightening, setroomnameHoneycombBlindsRoomLightening] = useState("");
  const [WandPriceCMSHoneycombBlindsRoomLightening, setWandPriceCMSHoneycombBlindsRoomLightening] = useState("");
  const [cordlesspriceCMSHoneycombBlindsRoomLightening, setcordlesspriceCMSHoneycombBlindsRoomLightening] = useState("");
  const [motorizedpriceCMSHoneycombBlindsRoomLightening, setmotorizedpriceCMSHoneycombBlindsRoomLightening] = useState("");



  const [productName1HoneycombBlindsRoomDarkening, setproductName1HoneycombBlindsRoomDarkening] = useState("");
  const [productName2HoneycombBlindsRoomDarkening, setproductName2HoneycombBlindsRoomDarkening] = useState("");
  const [roomnameHoneycombBlindsRoomDarkening, setroomnameHoneycombBlindsRoomDarkening] = useState("");
  const [WandPriceCMSHoneycombBlindsRoomDarkening, setWandPriceCMSHoneycombBlindsRoomDarkening] = useState("");
  const [cordlesspriceCMSHoneycombBlindsRoomDarkening, setcordlesspriceCMSHoneycombBlindsRoomDarkening] = useState("");
  const [motorizedpriceCMSHoneycombBlindsRoomDarkening, setmotorizedpriceCMSHoneycombBlindsRoomDarkening] = useState("");




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



  const [inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening, setinchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening, setinchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening] = useState({});
  const [inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening, setinchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening, setinchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening] = useState({});

  const [inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening, setinchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening, setinchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening] = useState({});
  const [inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening, setinchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening, setinchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening] = useState({});

  const [inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening, setinchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening, setinchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening] = useState({});
  const [inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening, setinchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening, setinchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening] = useState({});

  const [inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening, setinchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening, setinchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening] = useState({});
  const [inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening, setinchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening, setinchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening] = useState({});

  const [inchPricesAfterWidthInsideMountRollerBlindsRoomLightening, setinchPricesAfterWidthInsideMountRollerBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightInsideMountRollerBlindsRoomLightening, setinchPricesAfterHeightInsideMountRollerBlindsRoomLightening] = useState({});
  const [inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening, setinchPricesAfterWidthOutsideMountRollerBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening, setinchPricesAfterHeightOutsideMountRollerBlindsRoomLightening] = useState({});

  const [inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening, setinchPricesAfterWidthInsideMountRollerBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening, setinchPricesAfterHeightInsideMountRollerBlindsRoomDarkening] = useState({});
  const [inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening, setinchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening, setinchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening] = useState({});

  const [inchPricesAfterWidthInsideMountRomanBlindsRoomLightening, setinchPricesAfterWidthInsideMountRomanBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightInsideMountRomanBlindsRoomLightening, setinchPricesAfterHeightInsideMountRomanBlindsRoomLightening] = useState({});
  const [inchPricesAfterWidthOutsideMountRomanBlindsRoomLightening, setinchPricesAfterWidthOutsideMountRomanBlindsRoomLightening] = useState({});
  const [inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening, setinchPricesAfterHeightOutsideMountRomanBlindsRoomLightening] = useState({});

  const [inchPricesAfterWidthInsideMountRomanBlindsRoomDarkening, setinchPricesAfterWidthInsideMountRomanBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening, setinchPricesAfterHeightInsideMountRomanBlindsRoomDarkening] = useState({});
  const [inchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening, setinchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening] = useState({});
  const [inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening, setinchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening] = useState({});


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const scrollableDivRefInchesWidthInsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthInsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountShangrilablindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthInsideMountRollerBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountRollerBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthInsideMountRomanBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthInsideMountRomanBlindsRoomDarkening = useRef();



  const scrollableDivRefInchesHeightInsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightInsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountShangrilablindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightInsideMountHoneycombBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountHoneycombBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightInsideMountNoDrillTypeBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightInsideMountRollerBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountRollerBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightInsideMountRomanBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightInsideMountRomanBlindsRoomDarkening = useRef();


  const scrollableDivRefInchesWidthOutsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountShangrilablindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomLightening = useRef();
  const scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomDarkening = useRef();


  const scrollableDivRefInchesHeightOutsideMountZebrablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountZebrablindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountShangrilablindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightOutsideMountHoneycombBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountHoneycombBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightOutsideMountRollerBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountRollerBlindsRoomDarkening = useRef();
  const scrollableDivRefInchesHeightOutsideMountRomanBlindsRoomLightening = useRef();
  const scrollableDivRefInchesHeightOutsideMountRomanBlindsRoomDarkening = useRef();


  //

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
    console.log("scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomLightening.current:", scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomDarkening.current:", scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomLightening.current:", scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening.current:", scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountRollerBlindsRoomLightening.current:", scrollableDivRefInchesWidthInsideMountRollerBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountRollerBlindsRoomDarkening.current:", scrollableDivRefInchesWidthInsideMountRollerBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountRomanBlindsRoomLightening.current:", scrollableDivRefInchesWidthInsideMountRomanBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMountRomanBlindsRoomDarkening.current:", scrollableDivRefInchesWidthInsideMountRomanBlindsRoomDarkening.current);
  }, []);

  //



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
    console.log("scrollableDivRefInchesHeightInsideMountHoneycombBlindsRoomLightening.current:", scrollableDivRefInchesHeightInsideMountHoneycombBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountHoneycombBlindsRoomDarkening.current:", scrollableDivRefInchesHeightInsideMountHoneycombBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountNoDrillTypeBlindsRoomLightening.current:", scrollableDivRefInchesHeightInsideMountNoDrillTypeBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening.current:", scrollableDivRefInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountRollerBlindsRoomLightening.current:", scrollableDivRefInchesHeightInsideMountRollerBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountRollerBlindsRoomDarkening.current:", scrollableDivRefInchesHeightInsideMountRollerBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountRomanBlindsRoomLightening.current:", scrollableDivRefInchesHeightInsideMountRomanBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMountRomanBlindsRoomDarkening.current:", scrollableDivRefInchesHeightInsideMountRomanBlindsRoomDarkening.current);
  }, []);

  //




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
    console.log("scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomLightening.current:", scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomDarkening.current:", scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening.current:", scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening.current:", scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomLightening.current:", scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomDarkening.current:", scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomDarkening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomLightening.current:", scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomLightening.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomDarkening.current:", scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomDarkening.current);
  }, []);

  //



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


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountHoneycombBlindsRoomLightening.current:", scrollableDivRefInchesHeightOutsideMountHoneycombBlindsRoomLightening.current);
  }, []);


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountHoneycombBlindsRoomDarkening.current:", scrollableDivRefInchesHeightOutsideMountHoneycombBlindsRoomDarkening.current);
  }, []);


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening.current:", scrollableDivRefInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening.current);
  }, []);


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening.current:", scrollableDivRefInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening.current);
  }, []);


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountRollerBlindsRoomLightening.current:", scrollableDivRefInchesHeightOutsideMountRollerBlindsRoomLightening.current);
  }, []);


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountRollerBlindsRoomDarkening.current:", scrollableDivRefInchesHeightOutsideMountRollerBlindsRoomDarkening.current);
  }, []);


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountRomanBlindsRoomLightening.current:", scrollableDivRefInchesHeightOutsideMountRomanBlindsRoomLightening.current);
  }, []);


  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMountRomanBlindsRoomDarkening.current:", scrollableDivRefInchesHeightOutsideMountRomanBlindsRoomDarkening.current);
  }, []);


  //



  const [selectedInchesWidthInsideMountZebrablindsRoomLightening, setselectedInchesWidthInsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchesHeightInsideMountZebrablindsRoomLightening, setselectedInchesHeightInsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchesWidthOutsideMountZebrablindsRoomLightening, setselectedInchesWidthOutsideMountZebrablindsRoomLightening] = useState(null);
  const [selectedInchesHeightOutsideMountZebrablindsRoomLightening, setselectedInchesHeightOutsideMountZebrablindsRoomLightening] = useState(null);


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


  const [selectedInchesWidthInsideMountHoneycombBlindsRoomLightening, setselectedInchesWidthInsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightInsideMountHoneycombBlindsRoomLightening, setselectedInchesHeightInsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [selectedInchesWidthOutsideMountHoneycombBlindsRoomLightening, setselectedInchesWidthOutsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening, setselectedInchesHeightOutsideMountHoneycombBlindsRoomLightening] = useState(null);


  const [selectedInchesWidthInsideMountHoneycombBlindsRoomDarkening, setselectedInchesWidthInsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening, setselectedInchesHeightInsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [selectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening, setselectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening, setselectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening] = useState(null);


  const [selectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening] = useState(null);


  const [selectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);


  const [selectedInchesWidthInsideMountRollerBlindsRoomLightening, setselectedInchesWidthInsideMountRollerBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightInsideMountRollerBlindsRoomLightening, setselectedInchesHeightInsideMountRollerBlindsRoomLightening] = useState(null);
  const [selectedInchesWidthOutsideMountRollerBlindsRoomLightening, setselectedInchesWidthOutsideMountRollerBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightOutsideMountRollerBlindsRoomLightening, setselectedInchesHeightOutsideMountRollerBlindsRoomLightening] = useState(null);


  const [selectedInchesWidthInsideMountRollerBlindsRoomDarkening, setselectedInchesWidthInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightInsideMountRollerBlindsRoomDarkening, setselectedInchesHeightInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [selectedInchesWidthOutsideMountRollerBlindsRoomDarkening, setselectedInchesWidthOutsideMountRollerBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightOutsideMountRollerBlindsRoomDarkening, setselectedInchesHeightOutsideMountRollerBlindsRoomDarkening] = useState(null);


  const [selectedInchesWidthInsideMountRomanBlindsRoomLightening, setselectedInchesWidthInsideMountRomanBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightInsideMountRomanBlindsRoomLightening, setselectedInchesHeightInsideMountRomanBlindsRoomLightening] = useState(null);
  const [selectedInchesWidthOutsideMountRomanBlindsRoomLightening, setselectedInchesWidthOutsideMountRomanBlindsRoomLightening] = useState(null);
  const [selectedInchesHeightOutsideMountRomanBlindsRoomLightening, setselectedInchesHeightOutsideMountRomanBlindsRoomLightening] = useState(null);


  const [selectedInchesWidthInsideMountRomanBlindsRoomDarkening, setselectedInchesWidthInsideMountRomanBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightInsideMountRomanBlindsRoomDarkening, setselectedInchesHeightInsideMountRomanBlindsRoomDarkening] = useState(null);
  const [selectedInchesWidthOutsideMountRomanBlindsRoomDarkening, setselectedInchesWidthOutsideMountRomanBlindsRoomDarkening] = useState(null);
  const [selectedInchesHeightOutsideMountRomanBlindsRoomDarkening, setselectedInchesHeightOutsideMountRomanBlindsRoomDarkening] = useState(null);





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


  const [selectedInchesVisibleWidthInsideMountHoneycombBlindsRoomLightening, setselectedInchesVisibleWidthInsideMountHoneycombBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountHoneycombBlindsRoomLightening, setselectedInchesVisibleHeightInsideMountHoneycombBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomLightening, setselectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomLightening, setselectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomLightening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountHoneycombBlindsRoomDarkening, setselectedInchesVisibleWidthInsideMountHoneycombBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountHoneycombBlindsRoomDarkening, setselectedInchesVisibleHeightInsideMountHoneycombBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomDarkening, setselectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomDarkening, setselectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomDarkening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomLightening, setselectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomLightening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountRollerBlindsRoomLightening, setselectedInchesVisibleWidthInsideMountRollerBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountRollerBlindsRoomLightening, setselectedInchesVisibleHeightInsideMountRollerBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountRollerBlindsRoomLightening, setselectedInchesVisibleWidthOutsideMountRollerBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountRollerBlindsRoomLightening, setselectedInchesVisibleHeightOutsideMountRollerBlindsRoomLightening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountRollerBlindsRoomDarkening, setselectedInchesVisibleWidthInsideMountRollerBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountRollerBlindsRoomDarkening, setselectedInchesVisibleHeightInsideMountRollerBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountRollerBlindsRoomDarkening, setselectedInchesVisibleWidthOutsideMountRollerBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountRollerBlindsRoomDarkening, setselectedInchesVisibleHeightOutsideMountRollerBlindsRoomDarkening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountRomanBlindsRoomLightening, setselectedInchesVisibleWidthInsideMountRomanBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountRomanBlindsRoomLightening, setselectedInchesVisibleHeightInsideMountRomanBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountRomanBlindsRoomLightening, setselectedInchesVisibleWidthOutsideMountRomanBlindsRoomLightening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountRomanBlindsRoomLightening, setselectedInchesVisibleHeightOutsideMountRomanBlindsRoomLightening] = useState(true);

  const [selectedInchesVisibleWidthInsideMountRomanBlindsRoomDarkening, setselectedInchesVisibleWidthInsideMountRomanBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightInsideMountRomanBlindsRoomDarkening, setselectedInchesVisibleHeightInsideMountRomanBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleWidthOutsideMountRomanBlindsRoomDarkening, setselectedInchesVisibleWidthOutsideMountRomanBlindsRoomDarkening] = useState(true);
  const [selectedInchesVisibleHeightOutsideMountRomanBlindsRoomDarkening, setselectedInchesVisibleHeightOutsideMountRomanBlindsRoomDarkening] = useState(true);



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


  const [newSetPriceInchesWidthInsideMountHoneycombBlindsRoomLightening, setnewSetPriceInchesWidthInsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightInsideMountHoneycombBlindsRoomLightening, setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountHoneycombBlindsRoomLightening, setnewSetPriceInchesWidthOutsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountHoneycombBlindsRoomLightening, setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomLightening] = useState(null);

  const [newSetPriceInchesWidthInsideMountHoneycombBlindsRoomDarkening, setnewSetPriceInchesWidthInsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightInsideMountHoneycombBlindsRoomDarkening, setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountHoneycombBlindsRoomDarkening, setnewSetPriceInchesWidthOutsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountHoneycombBlindsRoomDarkening, setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomDarkening] = useState(null);

  const [newSetPriceInchesWidthInsideMountNoDrillTypeBlindsRoomLightening, setnewSetPriceInchesWidthInsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomLightening, setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening, setnewSetPriceInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening, setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening] = useState(null);

  const [newSetPriceInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening, setnewSetPriceInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening, setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening, setnewSetPriceInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening, setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);

  const [newSetPriceInchesWidthInsideMountRollerBlindsRoomLightening, setnewSetPriceInchesWidthInsideMountRollerBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightInsideMountRollerBlindsRoomLightening, setnewSetPriceInchesHeightInsideMountRollerBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountRollerBlindsRoomLightening, setnewSetPriceInchesWidthOutsideMountRollerBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountRollerBlindsRoomLightening, setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomLightening] = useState(null);

  const [newSetPriceInchesWidthInsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesWidthInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesWidthOutsideMountRollerBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening, setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening] = useState(null);

  const [newSetPriceInchesWidthInsideMountRomanBlindsRoomLightening, setnewSetPriceInchesWidthInsideMountRomanBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightInsideMountRomanBlindsRoomLightening, setnewSetPriceInchesHeightInsideMountRomanBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountRomanBlindsRoomLightening, setnewSetPriceInchesWidthOutsideMountRomanBlindsRoomLightening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountRomanBlindsRoomLightening, setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomLightening] = useState(null);

  const [newSetPriceInchesWidthInsideMountRomanBlindsRoomDarkening, setnewSetPriceInchesWidthInsideMountRomanBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightInsideMountRomanBlindsRoomDarkening, setnewSetPriceInchesHeightInsideMountRomanBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesWidthOutsideMountRomanBlindsRoomDarkening, setnewSetPriceInchesWidthOutsideMountRomanBlindsRoomDarkening] = useState(null);
  const [newSetPriceInchesHeightOutsideMountRomanBlindsRoomDarkening, setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomDarkening] = useState(null);



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


  const [selectedInchWidthInsideMountHoneycombBlindsRoomLightening, setselectedInchWidthInsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [selectedInchHeightInsideMountHoneycombBlindsRoomLightening, setselectedInchHeightInsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [selectedInchWidthOutsideMountHoneycombBlindsRoomLightening, setselectedInchWidthOutsideMountHoneycombBlindsRoomLightening] = useState(null);
  const [selectedInchHeightOutsideMountHoneycombBlindsRoomLightening, setselectedInchHeightOutsideMountHoneycombBlindsRoomLightening] = useState(null);

  const [selectedInchWidthInsideMountHoneycombBlindsRoomDarkening, setselectedInchWidthInsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightInsideMountHoneycombBlindsRoomDarkening, setselectedInchHeightInsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [selectedInchWidthOutsideMountHoneycombBlindsRoomDarkening, setselectedInchWidthOutsideMountHoneycombBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightOutsideMountHoneycombBlindsRoomDarkening, setselectedInchHeightOutsideMountHoneycombBlindsRoomDarkening] = useState(null);

  const [selectedInchWidthInsideMountNoDrillTypeBlindsRoomLightening, setselectedInchWidthInsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [selectedInchHeightInsideMountNoDrillTypeBlindsRoomLightening, setselectedInchHeightInsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [selectedInchWidthOutsideMountNoDrillTypeBlindsRoomLightening, setselectedInchWidthOutsideMountNoDrillTypeBlindsRoomLightening] = useState(null);
  const [selectedInchHeightOutsideMountNoDrillTypeBlindsRoomLightening, setselectedInchHeightOutsideMountNoDrillTypeBlindsRoomLightening] = useState(null);

  const [selectedInchWidthInsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchWidthInsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightInsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchHeightInsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [selectedInchWidthOutsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchWidthOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightOutsideMountNoDrillTypeBlindsRoomDarkening, setselectedInchHeightOutsideMountNoDrillTypeBlindsRoomDarkening] = useState(null);

  const [selectedInchWidthInsideMountRollerBlindsRoomLightening, setselectedInchWidthInsideMountRollerBlindsRoomLightening] = useState(null);
  const [selectedInchHeightInsideMountRollerBlindsRoomLightening, setselectedInchHeightInsideMountRollerBlindsRoomLightening] = useState(null);
  const [selectedInchWidthOutsideMountRollerBlindsRoomLightening, setselectedInchWidthOutsideMountRollerBlindsRoomLightening] = useState(null);
  const [selectedInchHeightOutsideMountRollerBlindsRoomLightening, setselectedInchHeightOutsideMountRollerBlindsRoomLightening] = useState(null);

  const [selectedInchWidthInsideMountRollerBlindsRoomDarkening, setselectedInchWidthInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightInsideMountRollerBlindsRoomDarkening, setselectedInchHeightInsideMountRollerBlindsRoomDarkening] = useState(null);
  const [selectedInchWidthOutsideMountRollerBlindsRoomDarkening, setselectedInchWidthOutsideMountRollerBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightOutsideMountRollerBlindsRoomDarkening, setselectedInchHeightOutsideMountRollerBlindsRoomDarkening] = useState(null);

  const [selectedInchWidthInsideMountRomanBlindsRoomLightening, setselectedInchWidthInsideMountRomanBlindsRoomLightening] = useState(null);
  const [selectedInchHeightInsideMountRomanBlindsRoomLightening, setselectedInchHeightInsideMountRomanBlindsRoomLightening] = useState(null);
  const [selectedInchWidthOutsideMountRomanBlindsRoomLightening, setselectedInchWidthOutsideMountRomanBlindsRoomLightening] = useState(null);
  const [selectedInchHeightOutsideMountRomanBlindsRoomLightening, setselectedInchHeightOutsideMountRomanBlindsRoomLightening] = useState(null);

  const [selectedInchWidthInsideMountRomanBlindsRoomDarkening, setselectedInchWidthInsideMountRomanBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightInsideMountRomanBlindsRoomDarkening, setselectedInchHeightInsideMountRomanBlindsRoomDarkening] = useState(null);
  const [selectedInchWidthOutsideMountRomanBlindsRoomDarkening, setselectedInchWidthOutsideMountRomanBlindsRoomDarkening] = useState(null);
  const [selectedInchHeightOutsideMountRomanBlindsRoomDarkening, setselectedInchHeightOutsideMountRomanBlindsRoomDarkening] = useState(null);



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
        const selectedInchesDivdWidthInsideMountShangrilablindsRoomDarkening = scrollableDivInchesdWidthInsideMountShangrilablindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

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
          const selectedInchesDivRectWidthInsideMountShangrilablindsRoomLightening = selectedInchesDivdWidthInsideMountShangrilablindsRoomLightening.getBoundingClientRect();
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

  const handleScrolledInchesWhenClickedWidthInsideMountRomanBlindsRoomDarkening = (inchesWidthInsideMountRomanBlindsRoomDarkening) => {
    setselectedInchesWidthInsideMountRomanBlindsRoomDarkening(inchesWidthInsideMountRomanBlindsRoomDarkening);
    setselectedInchesVisibleWidthInsideMountRomanBlindsRoomDarkening(false);
    setselectedInchWidthInsideMountRomanBlindsRoomDarkening(inchesWidthInsideMountRomanBlindsRoomDarkening);

    const scrollableDivInchesdWidthInsideMountRomanBlindsRoomDarkening = scrollableDivRefInchesWidthInsideMountRomanBlindsRoomDarkening.current;

    if (scrollableDivInchesdWidthInsideMountRomanBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountRomanBlindsRoomDarkening = scrollableDivInchesdWidthInsideMountRomanBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthInsideMountRomanBlindsRoomDarkening) {
          const selectedInchesDivRectWidthInsideMountRomanBlindsRoomDarkening = selectedInchesDivdWidthInsideMountRomanBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountRomanBlindsRoomDarkening.top +
            scrollableDivInchesdWidthInsideMountRomanBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesdWidthInsideMountRomanBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthInsideMountRomanBlindsRoomDarkening.height) / 2;

          scrollableDivInchesdWidthInsideMountRomanBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthInsideMountRomanBlindsRoomDarkening = (inchesWidthInsideMountRomanBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthInsideMountRomanBlindsRoomDarkening = { ...inchPricesAfterWidthInsideMountRomanBlindsRoomDarkening, [inchesWidthInsideMountRomanBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountRomanBlindsRoomDarkening(updatedInchPricesWidthInsideMountRomanBlindsRoomDarkening);
  };

  const handleNewSpanClickedWidthInsideMountRomanBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthInsideMountRomanBlindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledInchesWhenClickedWidthInsideMountRomanBlindsRoomLightening = (inchesWidthInsideMountRomanBlindsRoomLightening) => {
    setselectedInchesWidthInsideMountRomanBlindsRoomLightening(inchesWidthInsideMountRomanBlindsRoomLightening);
    setselectedInchesVisibleWidthInsideMountRomanBlindsRoomLightening(false);
    setselectedInchWidthInsideMountRomanBlindsRoomLightening(inchesWidthInsideMountRomanBlindsRoomLightening);

    const scrollableDivInchesdWidthInsideMountRomanBlindsRoomLightening = scrollableDivRefInchesWidthInsideMountRomanBlindsRoomLightening.current;

    if (scrollableDivInchesdWidthInsideMountRomanBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountRomanBlindsRoomLightening = scrollableDivInchesdWidthInsideMountRomanBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthInsideMountRomanBlindsRoomLightening) {
          const selectedInchesDivRectWidthInsideMountRomanBlindsRoomLightening = selectedInchesDivdWidthInsideMountRomanBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountRomanBlindsRoomLightening.top +
            scrollableDivInchesdWidthInsideMountRomanBlindsRoomLightening.scrollTop -
            (scrollableDivInchesdWidthInsideMountRomanBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthInsideMountRomanBlindsRoomLightening.height) / 2;

          scrollableDivInchesdWidthInsideMountRomanBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthInsideMountRomanBlindsRoomLightening = (inchesWidthInsideMountRomanBlindsRoomLightening, price) => {
    const updatedInchPricesWidthInsideMountRomanBlindsRoomLightening = { ...inchPricesAfterWidthInsideMountRomanBlindsRoomLightening, [inchesWidthInsideMountRomanBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountRomanBlindsRoomLightening(updatedInchPricesWidthInsideMountRomanBlindsRoomLightening);
  };


  const handleNewSpanClickedWidthInsideMountRomanBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthInsideMountRomanBlindsRoomLightening((prev) => !prev);
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////



  const handleScrolledInchesWhenClickedWidthInsideMountRollerBlindsRoomDarkening = (inchesWidthInsideMountRollerBlindsRoomDarkening) => {
    setselectedInchesWidthInsideMountRollerBlindsRoomDarkening(inchesWidthInsideMountRollerBlindsRoomDarkening);
    setselectedInchesVisibleWidthInsideMountRollerBlindsRoomDarkening(false);
    setselectedInchWidthInsideMountRollerBlindsRoomDarkening(inchesWidthInsideMountRollerBlindsRoomDarkening);
    const scrollableDivInchesdWidthInsideMountRollerBlindsRoomDarkening = scrollableDivRefInchesWidthInsideMountRollerBlindsRoomDarkening.current;
    if (scrollableDivInchesdWidthInsideMountRollerBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountRollerBlindsRoomDarkening = scrollableDivInchesdWidthInsideMountRollerBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);
        if (selectedInchesDivdWidthInsideMountRollerBlindsRoomDarkening) {
          const selectedInchesDivRectWidthInsideMountRollerBlindsRoomDarkening = selectedInchesDivdWidthInsideMountRollerBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountRollerBlindsRoomDarkening.top +
            scrollableDivInchesdWidthInsideMountRollerBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesdWidthInsideMountRollerBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthInsideMountRollerBlindsRoomDarkening.height) / 2;
          scrollableDivInchesdWidthInsideMountRollerBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountRollerBlindsRoomDarkening = (inchesWidthInsideMountRollerBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthInsideMountRollerBlindsRoomDarkening = { ...inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening, [inchesWidthInsideMountRollerBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountRollerBlindsRoomDarkening(updatedInchPricesWidthInsideMountRollerBlindsRoomDarkening);
  };

  const handleNewSpanClickedWidthInsideMountRollerBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthInsideMountRollerBlindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMountRollerBlindsRoomLightening = (inchesWidthInsideMountRollerBlindsRoomLightening) => {
    setselectedInchesWidthInsideMountRollerBlindsRoomLightening(inchesWidthInsideMountRollerBlindsRoomLightening);
    setselectedInchesVisibleWidthInsideMountRollerBlindsRoomLightening(false);
    setselectedInchWidthInsideMountRollerBlindsRoomLightening(inchesWidthInsideMountRollerBlindsRoomLightening);
    const scrollableDivInchesdWidthInsideMountRollerBlindsRoomLightening = scrollableDivRefInchesWidthInsideMountRollerBlindsRoomLightening.current;
    if (scrollableDivInchesdWidthInsideMountRollerBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountRollerBlindsRoomLightening = scrollableDivInchesdWidthInsideMountRollerBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);
        if (selectedInchesDivdWidthInsideMountRollerBlindsRoomLightening) {
          const selectedInchesDivRectWidthInsideMountRollerBlindsRoomLightening = selectedInchesDivdWidthInsideMountRollerBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountRollerBlindsRoomLightening.top +
            scrollableDivInchesdWidthInsideMountRollerBlindsRoomLightening.scrollTop -
            (scrollableDivInchesdWidthInsideMountRollerBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthInsideMountRollerBlindsRoomLightening.height) / 2;
          scrollableDivInchesdWidthInsideMountRollerBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountRollerBlindsRoomLightening = (inchesWidthInsideMountRollerBlindsRoomLightening, price) => {
    const updatedInchPricesWidthInsideMountRollerBlindsRoomLightening = { ...inchPricesAfterWidthInsideMountRollerBlindsRoomLightening, [inchesWidthInsideMountRollerBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountRollerBlindsRoomLightening(updatedInchPricesWidthInsideMountRollerBlindsRoomLightening);
  };

  const handleNewSpanClickedWidthInsideMountRollerBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthInsideMountRollerBlindsRoomLightening((prev) => !prev);
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMountHoneycombBlindsRoomLightening = (inchesWidthInsideMountHoneycombBlindsRoomLightening) => {
    setselectedInchesWidthInsideMountHoneycombBlindsRoomLightening(inchesWidthInsideMountHoneycombBlindsRoomLightening);
    setselectedInchesVisibleWidthInsideMountHoneycombBlindsRoomLightening(false);
    setselectedInchWidthInsideMountHoneycombBlindsRoomLightening(inchesWidthInsideMountHoneycombBlindsRoomLightening);
    const scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomLightening = scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomLightening.current;
    if (scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountHoneycombBlindsRoomLightening = scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);
        if (selectedInchesDivdWidthInsideMountHoneycombBlindsRoomLightening) {
          const selectedInchesDivRectWidthInsideMountHoneycombBlindsRoomLightening = selectedInchesDivdWidthInsideMountHoneycombBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountHoneycombBlindsRoomLightening.top +
            scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomLightening.scrollTop -
            (scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthInsideMountHoneycombBlindsRoomLightening.height) / 2;
          scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountHoneycombBlindsRoomLightening = (inchesWidthInsideMountHoneycombBlindsRoomLightening, price) => {
    const updatedInchPricesWidthInsideMountHoneycombBlindsRoomLightening = { ...inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening, [inchesWidthInsideMountHoneycombBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening(updatedInchPricesWidthInsideMountHoneycombBlindsRoomLightening);
  };

  const handleNewSpanClickedWidthInsideMountHoneycombBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthInsideMountHoneycombBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////
  const handleScrolledInchesWhenClickedWidthInsideMountHoneycombBlindsRoomDarkening = (inchesWidthInsideMountHoneycombBlindsRoomDarkening) => {
    setselectedInchesWidthInsideMountHoneycombBlindsRoomDarkening(inchesWidthInsideMountHoneycombBlindsRoomDarkening);
    setselectedInchesVisibleWidthInsideMountHoneycombBlindsRoomDarkening(false);
    setselectedInchWidthInsideMountHoneycombBlindsRoomDarkening(inchesWidthInsideMountHoneycombBlindsRoomDarkening);
    const scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomDarkening = scrollableDivRefInchesWidthInsideMountHoneycombBlindsRoomDarkening.current;
    if (scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountHoneycombBlindsRoomDarkening = scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);
        if (selectedInchesDivdWidthInsideMountHoneycombBlindsRoomDarkening) {
          const selectedInchesDivRectWidthInsideMountHoneycombBlindsRoomDarkening = selectedInchesDivdWidthInsideMountHoneycombBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountHoneycombBlindsRoomDarkening.top +
            scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthInsideMountHoneycombBlindsRoomDarkening.height) / 2;
          scrollableDivInchesdWidthInsideMountHoneycombBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountHoneycombBlindsRoomDarkening = (inchesWidthInsideMountHoneycombBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthInsideMountHoneycombBlindsRoomDarkening = { ...inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening, [inchesWidthInsideMountHoneycombBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening(updatedInchPricesWidthInsideMountHoneycombBlindsRoomDarkening);
  };

  const handleNewSpanClickedWidthInsideMountHoneycombBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthInsideMountHoneycombBlindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMountNoDrillTypeBlindsRoomLightening = (inchesWidthInsideMountNoDrillTypeBlindsRoomLightening) => {
    setselectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening(inchesWidthInsideMountNoDrillTypeBlindsRoomLightening);
    setselectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomLightening(false);
    setselectedInchWidthInsideMountNoDrillTypeBlindsRoomLightening(inchesWidthInsideMountNoDrillTypeBlindsRoomLightening);
    const scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomLightening = scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomLightening.current;
    if (scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountNoDrillTypeBlindsRoomLightening = scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);
        if (selectedInchesDivdWidthInsideMountNoDrillTypeBlindsRoomLightening) {
          const selectedInchesDivRectWidthInsideMountNoDrillTypeBlindsRoomLightening = selectedInchesDivdWidthInsideMountNoDrillTypeBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountNoDrillTypeBlindsRoomLightening.top +
            scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomLightening.scrollTop -
            (scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthInsideMountNoDrillTypeBlindsRoomLightening.height) / 2;
          scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountNoDrillTypeBlindsRoomLightening = (inchesWidthInsideMountNoDrillTypeBlindsRoomLightening, price) => {
    const updatedInchPricesWidthInsideMountNoDrillTypeBlindsRoomLightening = { ...inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening, [inchesWidthInsideMountNoDrillTypeBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening(updatedInchPricesWidthInsideMountNoDrillTypeBlindsRoomLightening);
  };

  const handleNewSpanClickedWidthInsideMountNoDrillTypeBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMountNoDrillTypeBlindsRoomDarkening = (inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening) => {
    setselectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening(inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening);
    setselectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomDarkening(false);
    setselectedInchWidthInsideMountNoDrillTypeBlindsRoomDarkening(inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening);
    const scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomDarkening = scrollableDivRefInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening.current;
    if (scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMountNoDrillTypeBlindsRoomDarkening = scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);
        if (selectedInchesDivdWidthInsideMountNoDrillTypeBlindsRoomDarkening) {
          const selectedInchesDivRectWidthInsideMountNoDrillTypeBlindsRoomDarkening = selectedInchesDivdWidthInsideMountNoDrillTypeBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMountNoDrillTypeBlindsRoomDarkening.top +
            scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthInsideMountNoDrillTypeBlindsRoomDarkening.height) / 2;
          scrollableDivInchesdWidthInsideMountNoDrillTypeBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMountNoDrillTypeBlindsRoomDarkening = (inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthInsideMountNoDrillTypeBlindsRoomDarkening = { ...inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening, [inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening(updatedInchPricesWidthInsideMountNoDrillTypeBlindsRoomDarkening);
  };

  const handleNewSpanClickedWidthInsideMountNoDrillTypeBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomDarkening((prev) => !prev);
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


  const handleInchPriceChangeHeightInsideMountRomanBlindsRoomDarkening = (selectedInchesHeightInsideMountRomanBlindsRoomDarkening, newPriceHeightInsideMountRomanBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountRomanBlindsRoomDarkening);
    console.log("New price:", newPriceHeightInsideMountRomanBlindsRoomDarkening);

    setinchPricesAfterHeightInsideMountRomanBlindsRoomDarkening(prevPricesHeightInsideMountRomanBlindsRoomDarkening => {
      const updatedPricesHeightInsideMountRomanBlindsRoomDarkening = { ...prevPricesHeightInsideMountRomanBlindsRoomDarkening };
      updatedPricesHeightInsideMountRomanBlindsRoomDarkening[selectedInchesHeightInsideMountRomanBlindsRoomDarkening] = parseFloat(newPriceHeightInsideMountRomanBlindsRoomDarkening);
      return updatedPricesHeightInsideMountRomanBlindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMountRomanBlindsRoomDarkening = (inchesHeightInsideMountRomanBlindsRoomDarkening) => {
    setselectedInchesHeightInsideMountRomanBlindsRoomDarkening(inchesHeightInsideMountRomanBlindsRoomDarkening);

    if (inchesHeightInsideMountRomanBlindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountRomanBlindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountRomanBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountRomanBlindsRoomDarkening = inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening[inchesHeightInsideMountRomanBlindsRoomDarkening];
    setnewSetPriceInchesHeightInsideMountRomanBlindsRoomDarkening(newSetPriceHeightInsideMountRomanBlindsRoomDarkening !== undefined ? newSetPriceHeightInsideMountRomanBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountRomanBlindsRoomDarkening === undefined && inchesHeightInsideMountRomanBlindsRoomDarkening % 5 !== 0) {
      let prevInchHeightInsideMountRomanBlindsRoomDarkening = inchesHeightInsideMountRomanBlindsRoomDarkening - 1;
      while (prevInchHeightInsideMountRomanBlindsRoomDarkening % 5 !== 0) {
        prevInchHeightInsideMountRomanBlindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomDarkening = inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening[prevInchHeightInsideMountRomanBlindsRoomDarkening];
      setnewSetPriceInchesHeightInsideMountRomanBlindsRoomDarkening(nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomDarkening);
      let nextInchHeightInsideMountRomanBlindsRoomDarkening = prevInchHeightInsideMountRomanBlindsRoomDarkening + 1;
      while (nextInchHeightInsideMountRomanBlindsRoomDarkening < inchesHeightInsideMountRomanBlindsRoomDarkening) {
        nextInchHeightInsideMountRomanBlindsRoomDarkening++;
      }

    } else if (inchesHeightInsideMountRomanBlindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening[inchesHeightInsideMountRomanBlindsRoomDarkening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountRomanBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightInsideMountRomanBlindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightInsideMountRomanBlindsRoomLightening = (selectedInchesHeightInsideMountRomanBlindsRoomLightening, newPriceHeightInsideMountRomanBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountRomanBlindsRoomLightening);
    console.log("New price:", newPriceHeightInsideMountRomanBlindsRoomLightening);

    setinchPricesAfterHeightInsideMountRomanBlindsRoomLightening(prevPricesHeightInsideMountRomanBlindsRoomLightening => {
      const updatedPricesHeightInsideMountRomanBlindsRoomLightening = { ...prevPricesHeightInsideMountRomanBlindsRoomLightening };
      updatedPricesHeightInsideMountRomanBlindsRoomLightening[selectedInchesHeightInsideMountRomanBlindsRoomLightening] = parseFloat(newPriceHeightInsideMountRomanBlindsRoomLightening);
      return updatedPricesHeightInsideMountRomanBlindsRoomLightening;
    });
  };



  const handleScrolledInchesWhenClickedHeightInsideMountRomanBlindsRoomLightening = (inchesHeightInsideMountRomanBlindsRoomLightening) => {
    setselectedInchesHeightInsideMountRomanBlindsRoomLightening(inchesHeightInsideMountRomanBlindsRoomLightening);

    if (inchesHeightInsideMountRomanBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountRomanBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountRomanBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountRomanBlindsRoomLightening = inchPricesAfterHeightInsideMountRomanBlindsRoomLightening[inchesHeightInsideMountRomanBlindsRoomLightening];
    setnewSetPriceInchesHeightInsideMountRomanBlindsRoomLightening(newSetPriceHeightInsideMountRomanBlindsRoomLightening !== undefined ? newSetPriceHeightInsideMountRomanBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountRomanBlindsRoomLightening === undefined && inchesHeightInsideMountRomanBlindsRoomLightening % 5 !== 0) {
      let prevInchHeightInsideMountRomanBlindsRoomLightening = inchesHeightInsideMountRomanBlindsRoomLightening - 1;
      while (prevInchHeightInsideMountRomanBlindsRoomLightening % 5 !== 0) {
        prevInchHeightInsideMountRomanBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomLightening = inchPricesAfterHeightInsideMountRomanBlindsRoomLightening[prevInchHeightInsideMountRomanBlindsRoomLightening];
      setnewSetPriceInchesHeightInsideMountRomanBlindsRoomLightening(nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountRomanBlindsRoomLightening);
      let nextInchHeightInsideMountRomanBlindsRoomLightening = prevInchHeightInsideMountRomanBlindsRoomLightening + 1;
      while (nextInchHeightInsideMountRomanBlindsRoomLightening < inchesHeightInsideMountRomanBlindsRoomLightening) {
        nextInchHeightInsideMountRomanBlindsRoomLightening++;
      }

    } else if (inchesHeightInsideMountRomanBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountRomanBlindsRoomLightening[inchesHeightInsideMountRomanBlindsRoomLightening]);
    }
  };



  const handleNewSpanClickedHeightInsideMountRomanBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightInsideMountRomanBlindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightInsideMountRollerBlindsRoomDarkening = (selectedInchesHeightInsideMountRollerBlindsRoomDarkening, newPriceHeightInsideMountRollerBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountRollerBlindsRoomDarkening);
    console.log("New price:", newPriceHeightInsideMountRollerBlindsRoomDarkening);

    setinchPricesAfterHeightInsideMountRollerBlindsRoomDarkening(prevPricesHeightInsideMountRollerBlindsRoomDarkening => {
      const updatedPricesHeightInsideMountRollerBlindsRoomDarkening = { ...prevPricesHeightInsideMountRollerBlindsRoomDarkening };
      updatedPricesHeightInsideMountRollerBlindsRoomDarkening[selectedInchesHeightInsideMountRollerBlindsRoomDarkening] = parseFloat(newPriceHeightInsideMountRollerBlindsRoomDarkening);
      return updatedPricesHeightInsideMountRollerBlindsRoomDarkening;
    });
  };

  const handleScrolledInchesWhenClickedHeightInsideMountRollerBlindsRoomDarkening = (inchesHeightInsideMountRollerBlindsRoomDarkening) => {
    setselectedInchesHeightInsideMountRollerBlindsRoomDarkening(inchesHeightInsideMountRollerBlindsRoomDarkening);

    if (inchesHeightInsideMountRollerBlindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountRollerBlindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountRollerBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountRollerBlindsRoomDarkening = inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[inchesHeightInsideMountRollerBlindsRoomDarkening];
    setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening(newSetPriceHeightInsideMountRollerBlindsRoomDarkening !== undefined ? newSetPriceHeightInsideMountRollerBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountRollerBlindsRoomDarkening === undefined && inchesHeightInsideMountRollerBlindsRoomDarkening % 5 !== 0) {
      let prevInchHeightInsideMountRollerBlindsRoomDarkening = inchesHeightInsideMountRollerBlindsRoomDarkening - 1;
      while (prevInchHeightInsideMountRollerBlindsRoomDarkening % 5 !== 0) {
        prevInchHeightInsideMountRollerBlindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomDarkening = inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[prevInchHeightInsideMountRollerBlindsRoomDarkening];
      setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening(nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomDarkening);
      let nextInchHeightInsideMountRollerBlindsRoomDarkening = prevInchHeightInsideMountRollerBlindsRoomDarkening + 1;
      while (nextInchHeightInsideMountRollerBlindsRoomDarkening < inchesHeightInsideMountRollerBlindsRoomDarkening) {
        nextInchHeightInsideMountRollerBlindsRoomDarkening++;
      }

    } else if (inchesHeightInsideMountRollerBlindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[inchesHeightInsideMountRollerBlindsRoomDarkening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountRollerBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightInsideMountRollerBlindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightInsideMountRollerBlindsRoomLightening = (selectedInchesHeightInsideMountRollerBlindsRoomLightening, newPriceHeightInsideMountRollerBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountRollerBlindsRoomLightening);
    console.log("New price:", newPriceHeightInsideMountRollerBlindsRoomLightening);

    setinchPricesAfterHeightInsideMountRollerBlindsRoomLightening(prevPricesHeightInsideMountRollerBlindsRoomLightening => {
      const updatedPricesHeightInsideMountRollerBlindsRoomLightening = { ...prevPricesHeightInsideMountRollerBlindsRoomLightening };
      updatedPricesHeightInsideMountRollerBlindsRoomLightening[selectedInchesHeightInsideMountRollerBlindsRoomLightening] = parseFloat(newPriceHeightInsideMountRollerBlindsRoomLightening);
      return updatedPricesHeightInsideMountRollerBlindsRoomLightening;
    });
  };

  const handleScrolledInchesWhenClickedHeightInsideMountRollerBlindsRoomLightening = (inchesHeightInsideMountRollerBlindsRoomLightening) => {
    setselectedInchesHeightInsideMountRollerBlindsRoomLightening(inchesHeightInsideMountRollerBlindsRoomLightening);

    if (inchesHeightInsideMountRollerBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountRollerBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountRollerBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountRollerBlindsRoomLightening = inchPricesAfterHeightInsideMountRollerBlindsRoomLightening[inchesHeightInsideMountRollerBlindsRoomLightening];
    setnewSetPriceInchesHeightInsideMountRollerBlindsRoomLightening(newSetPriceHeightInsideMountRollerBlindsRoomLightening !== undefined ? newSetPriceHeightInsideMountRollerBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountRollerBlindsRoomLightening === undefined && inchesHeightInsideMountRollerBlindsRoomLightening % 5 !== 0) {
      let prevInchHeightInsideMountRollerBlindsRoomLightening = inchesHeightInsideMountRollerBlindsRoomLightening - 1;
      while (prevInchHeightInsideMountRollerBlindsRoomLightening % 5 !== 0) {
        prevInchHeightInsideMountRollerBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomLightening = inchPricesAfterHeightInsideMountRollerBlindsRoomLightening[prevInchHeightInsideMountRollerBlindsRoomLightening];
      setnewSetPriceInchesHeightInsideMountRollerBlindsRoomLightening(nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountRollerBlindsRoomLightening);
      let nextInchHeightInsideMountRollerBlindsRoomLightening = prevInchHeightInsideMountRollerBlindsRoomLightening + 1;
      while (nextInchHeightInsideMountRollerBlindsRoomLightening < inchesHeightInsideMountRollerBlindsRoomLightening) {
        nextInchHeightInsideMountRollerBlindsRoomLightening++;
      }

    } else if (inchesHeightInsideMountRollerBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountRollerBlindsRoomLightening[inchesHeightInsideMountRollerBlindsRoomLightening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountRollerBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightInsideMountRollerBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightInsideMountHoneycombBlindsRoomLightening = (selectedInchesHeightInsideMountHoneycombBlindsRoomLightening, newPriceHeightInsideMountHoneycombBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountHoneycombBlindsRoomLightening);
    console.log("New price:", newPriceHeightInsideMountHoneycombBlindsRoomLightening);

    setinchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening(prevPricesHeightInsideMountHoneycombBlindsRoomLightening => {
      const updatedPricesHeightInsideMountHoneycombBlindsRoomLightening = { ...prevPricesHeightInsideMountHoneycombBlindsRoomLightening };
      updatedPricesHeightInsideMountHoneycombBlindsRoomLightening[selectedInchesHeightInsideMountHoneycombBlindsRoomLightening] = parseFloat(newPriceHeightInsideMountHoneycombBlindsRoomLightening);
      return updatedPricesHeightInsideMountHoneycombBlindsRoomLightening;
    });
  };

  const handleScrolledInchesWhenClickedHeightInsideMountHoneycombBlindsRoomLightening = (inchesHeightInsideMountHoneycombBlindsRoomLightening) => {
    setselectedInchesHeightInsideMountHoneycombBlindsRoomLightening(inchesHeightInsideMountHoneycombBlindsRoomLightening);

    if (inchesHeightInsideMountHoneycombBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountHoneycombBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountHoneycombBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountHoneycombBlindsRoomLightening = inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening[inchesHeightInsideMountHoneycombBlindsRoomLightening];
    setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomLightening(newSetPriceHeightInsideMountHoneycombBlindsRoomLightening !== undefined ? newSetPriceHeightInsideMountHoneycombBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountHoneycombBlindsRoomLightening === undefined && inchesHeightInsideMountHoneycombBlindsRoomLightening % 5 !== 0) {
      let prevInchHeightInsideMountHoneycombBlindsRoomLightening = inchesHeightInsideMountHoneycombBlindsRoomLightening - 1;
      while (prevInchHeightInsideMountHoneycombBlindsRoomLightening % 5 !== 0) {
        prevInchHeightInsideMountHoneycombBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomLightening = inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening[prevInchHeightInsideMountHoneycombBlindsRoomLightening];
      setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomLightening(nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomLightening);
      let nextInchHeightInsideMountHoneycombBlindsRoomLightening = prevInchHeightInsideMountHoneycombBlindsRoomLightening + 1;
      while (nextInchHeightInsideMountHoneycombBlindsRoomLightening < inchesHeightInsideMountHoneycombBlindsRoomLightening) {
        nextInchHeightInsideMountHoneycombBlindsRoomLightening++;
      }

    } else if (inchesHeightInsideMountHoneycombBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening[inchesHeightInsideMountHoneycombBlindsRoomLightening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountHoneycombBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightInsideMountHoneycombBlindsRoomLightening((prev) => !prev);
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightInsideMountHoneycombBlindsRoomDarkening = (selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening, newPriceHeightInsideMountHoneycombBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening);
    console.log("New price:", newPriceHeightInsideMountHoneycombBlindsRoomDarkening);

    setinchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening(prevPricesHeightInsideMountHoneycombBlindsRoomDarkening => {
      const updatedPricesHeightInsideMountHoneycombBlindsRoomDarkening = { ...prevPricesHeightInsideMountHoneycombBlindsRoomDarkening };
      updatedPricesHeightInsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening] = parseFloat(newPriceHeightInsideMountHoneycombBlindsRoomDarkening);
      return updatedPricesHeightInsideMountHoneycombBlindsRoomDarkening;
    });
  };

  const handleScrolledInchesWhenClickedHeightInsideMountHoneycombBlindsRoomDarkening = (inchesHeightInsideMountHoneycombBlindsRoomDarkening) => {
    setselectedInchesHeightInsideMountHoneycombBlindsRoomDarkening(inchesHeightInsideMountHoneycombBlindsRoomDarkening);

    if (inchesHeightInsideMountHoneycombBlindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountHoneycombBlindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountHoneycombBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountHoneycombBlindsRoomDarkening = inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening[inchesHeightInsideMountHoneycombBlindsRoomDarkening];
    setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomDarkening(newSetPriceHeightInsideMountHoneycombBlindsRoomDarkening !== undefined ? newSetPriceHeightInsideMountHoneycombBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountHoneycombBlindsRoomDarkening === undefined && inchesHeightInsideMountHoneycombBlindsRoomDarkening % 5 !== 0) {
      let prevInchHeightInsideMountHoneycombBlindsRoomDarkening = inchesHeightInsideMountHoneycombBlindsRoomDarkening - 1;
      while (prevInchHeightInsideMountHoneycombBlindsRoomDarkening % 5 !== 0) {
        prevInchHeightInsideMountHoneycombBlindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomDarkening = inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening[prevInchHeightInsideMountHoneycombBlindsRoomDarkening];
      setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomDarkening(nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountHoneycombBlindsRoomDarkening);
      let nextInchHeightInsideMountHoneycombBlindsRoomDarkening = prevInchHeightInsideMountHoneycombBlindsRoomDarkening + 1;
      while (nextInchHeightInsideMountHoneycombBlindsRoomDarkening < inchesHeightInsideMountHoneycombBlindsRoomDarkening) {
        nextInchHeightInsideMountHoneycombBlindsRoomDarkening++;
      }

    } else if (inchesHeightInsideMountHoneycombBlindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening[inchesHeightInsideMountHoneycombBlindsRoomDarkening]);
    }
  };

  const handleNewSpanClickedHeightInsideMountHoneycombBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightInsideMountHoneycombBlindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////
  const handleInchPriceChangeHeightInsideMountNoDrillTypeBlindsRoomLightening = (selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening, newPriceHeightInsideMountNoDrillTypeBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening);
    console.log("New price:", newPriceHeightInsideMountNoDrillTypeBlindsRoomLightening);

    setinchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening(prevPricesHeightInsideMountNoDrillTypeBlindsRoomLightening => {
      const updatedPricesHeightInsideMountNoDrillTypeBlindsRoomLightening = { ...prevPricesHeightInsideMountNoDrillTypeBlindsRoomLightening };
      updatedPricesHeightInsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening] = parseFloat(newPriceHeightInsideMountNoDrillTypeBlindsRoomLightening);
      return updatedPricesHeightInsideMountNoDrillTypeBlindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMountNoDrillTypeBlindsRoomLightening = (inchesHeightInsideMountNoDrillTypeBlindsRoomLightening) => {
    setselectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening(inchesHeightInsideMountNoDrillTypeBlindsRoomLightening);

    if (inchesHeightInsideMountNoDrillTypeBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountNoDrillTypeBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountNoDrillTypeBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountNoDrillTypeBlindsRoomLightening = inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening[inchesHeightInsideMountNoDrillTypeBlindsRoomLightening];
    setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomLightening(newSetPriceHeightInsideMountNoDrillTypeBlindsRoomLightening !== undefined ? newSetPriceHeightInsideMountNoDrillTypeBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountNoDrillTypeBlindsRoomLightening === undefined && inchesHeightInsideMountNoDrillTypeBlindsRoomLightening % 5 !== 0) {
      let prevInchHeightInsideMountNoDrillTypeBlindsRoomLightening = inchesHeightInsideMountNoDrillTypeBlindsRoomLightening - 1;
      while (prevInchHeightInsideMountNoDrillTypeBlindsRoomLightening % 5 !== 0) {
        prevInchHeightInsideMountNoDrillTypeBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomLightening = inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening[prevInchHeightInsideMountNoDrillTypeBlindsRoomLightening];
      setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomLightening(nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomLightening);
      let nextInchHeightInsideMountNoDrillTypeBlindsRoomLightening = prevInchHeightInsideMountNoDrillTypeBlindsRoomLightening + 1;
      while (nextInchHeightInsideMountNoDrillTypeBlindsRoomLightening < inchesHeightInsideMountNoDrillTypeBlindsRoomLightening) {
        nextInchHeightInsideMountNoDrillTypeBlindsRoomLightening++;
      }

    } else if (inchesHeightInsideMountNoDrillTypeBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening[inchesHeightInsideMountNoDrillTypeBlindsRoomLightening]);
    }
  };


  const handleNewSpanClickedHeightInsideMountNoDrillTypeBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////
  const handleInchPriceChangeHeightInsideMountNoDrillTypeBlindsRoomDarkening = (selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening, newPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening);
    console.log("New price:", newPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening);

    setinchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening(prevPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening => {
      const updatedPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening = { ...prevPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening };
      updatedPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening] = parseFloat(newPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening);
      return updatedPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMountNoDrillTypeBlindsRoomDarkening = (inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening) => {
    setselectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening(inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening);

    if (inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening = inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening[inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening];
    setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening(newSetPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening !== undefined ? newSetPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening === undefined && inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening % 5 !== 0) {
      let prevInchHeightInsideMountNoDrillTypeBlindsRoomDarkening = inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening - 1;
      while (prevInchHeightInsideMountNoDrillTypeBlindsRoomDarkening % 5 !== 0) {
        prevInchHeightInsideMountNoDrillTypeBlindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomDarkening = inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening[prevInchHeightInsideMountNoDrillTypeBlindsRoomDarkening];
      setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening(nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMountNoDrillTypeBlindsRoomDarkening);
      let nextInchHeightInsideMountNoDrillTypeBlindsRoomDarkening = prevInchHeightInsideMountNoDrillTypeBlindsRoomDarkening + 1;
      while (nextInchHeightInsideMountNoDrillTypeBlindsRoomDarkening < inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening) {
        nextInchHeightInsideMountNoDrillTypeBlindsRoomDarkening++;
      }

    } else if (inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening[inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening]);
    }
  };


  const handleNewSpanClickedHeightInsideMountNoDrillTypeBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomDarkening((prev) => !prev);
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


  const handleScrolledInchesWhenClickedWidthOutsideMountRomanBlindsRoomDarkening = (inchesWidthOutsideMountRomanBlindsRoomDarkening) => {
    setselectedInchesWidthOutsideMountRomanBlindsRoomDarkening(inchesWidthOutsideMountRomanBlindsRoomDarkening);
    setselectedInchesVisibleWidthOutsideMountRomanBlindsRoomDarkening(false);
    setselectedInchWidthOutsideMountRomanBlindsRoomDarkening(inchesWidthOutsideMountRomanBlindsRoomDarkening);

    const scrollableDivInchesWidthOutsideMountRomanBlindsRoomDarkening = scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomDarkening.current;

    if (scrollableDivInchesWidthOutsideMountRomanBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountRomanBlindsRoomDarkening = scrollableDivInchesWidthOutsideMountRomanBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountRomanBlindsRoomDarkening) {
          const selectedInchesDivRectWidthOutsideMountRomanBlindsRoomDarkening = selectedInchesDivWidthOutsideMountRomanBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountRomanBlindsRoomDarkening.top +
            scrollableDivInchesWidthOutsideMountRomanBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesWidthOutsideMountRomanBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthOutsideMountRomanBlindsRoomDarkening.height) / 2;

          scrollableDivInchesWidthOutsideMountRomanBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountRomanBlindsRoomDarkening = (inchesWidthOutsideMountRomanBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthOutsideMountRomanBlindsRoomDarkening = { ...inchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening, [inchesWidthOutsideMountRomanBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening(updatedInchPricesWidthOutsideMountRomanBlindsRoomDarkening);
  };


  const handleNewSpanClickedWidthOutsideMountRomanBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthOutsideMountRomanBlindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountRomanBlindsRoomLightening = (inchesWidthOutsideMountRomanBlindsRoomLightening) => {
    setselectedInchesWidthOutsideMountRomanBlindsRoomLightening(inchesWidthOutsideMountRomanBlindsRoomLightening);
    setselectedInchesVisibleWidthOutsideMountRomanBlindsRoomLightening(false);
    setselectedInchWidthOutsideMountRomanBlindsRoomLightening(inchesWidthOutsideMountRomanBlindsRoomLightening);

    const scrollableDivInchesWidthOutsideMountRomanBlindsRoomLightening = scrollableDivRefInchesWidthOutsideMountRomanBlindsRoomLightening.current;

    if (scrollableDivInchesWidthOutsideMountRomanBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountRomanBlindsRoomLightening = scrollableDivInchesWidthOutsideMountRomanBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountRomanBlindsRoomLightening) {
          const selectedInchesDivRectWidthOutsideMountRomanBlindsRoomLightening = selectedInchesDivWidthOutsideMountRomanBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountRomanBlindsRoomLightening.top +
            scrollableDivInchesWidthOutsideMountRomanBlindsRoomLightening.scrollTop -
            (scrollableDivInchesWidthOutsideMountRomanBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthOutsideMountRomanBlindsRoomLightening.height) / 2;

          scrollableDivInchesWidthOutsideMountRomanBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountRomanBlindsRoomLightening = (inchesWidthOutsideMountRomanBlindsRoomLightening, price) => {
    const updatedInchPricesWidthOutsideMountRomanBlindsRoomLightening = { ...inchPricesAfterWidthOutsideMountRomanBlindsRoomLightening, [inchesWidthOutsideMountRomanBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountRomanBlindsRoomLightening(updatedInchPricesWidthOutsideMountRomanBlindsRoomLightening);
  };



  const handleNewSpanClickedWidthOutsideMountRomanBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthOutsideMountRomanBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountRollerBlindsRoomDarkening = (inchesWidthOutsideMountRollerBlindsRoomDarkening) => {
    setselectedInchesWidthOutsideMountRollerBlindsRoomDarkening(inchesWidthOutsideMountRollerBlindsRoomDarkening);
    setselectedInchesVisibleWidthOutsideMountRollerBlindsRoomDarkening(false);
    setselectedInchWidthOutsideMountRollerBlindsRoomDarkening(inchesWidthOutsideMountRollerBlindsRoomDarkening);

    const scrollableDivInchesWidthOutsideMountRollerBlindsRoomDarkening = scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomDarkening.current;

    if (scrollableDivInchesWidthOutsideMountRollerBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountRollerBlindsRoomDarkening = scrollableDivInchesWidthOutsideMountRollerBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountRollerBlindsRoomDarkening) {
          const selectedInchesDivRectWidthOutsideMountRollerBlindsRoomDarkening = selectedInchesDivWidthOutsideMountRollerBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountRollerBlindsRoomDarkening.top +
            scrollableDivInchesWidthOutsideMountRollerBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesWidthOutsideMountRollerBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthOutsideMountRollerBlindsRoomDarkening.height) / 2;

          scrollableDivInchesWidthOutsideMountRollerBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountRollerBlindsRoomDarkening = (inchesWidthOutsideMountRollerBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthOutsideMountRollerBlindsRoomDarkening = { ...inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening, [inchesWidthOutsideMountRollerBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening(updatedInchPricesWidthOutsideMountRollerBlindsRoomDarkening);
  };



  const handleNewSpanClickedWidthOutsideMountRollerBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthOutsideMountRollerBlindsRoomDarkening((prev) => !prev);
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountRollerBlindsRoomLightening = (inchesWidthOutsideMountRollerBlindsRoomLightening) => {
    setselectedInchesWidthOutsideMountRollerBlindsRoomLightening(inchesWidthOutsideMountRollerBlindsRoomLightening);
    setselectedInchesVisibleWidthOutsideMountRollerBlindsRoomLightening(false);
    setselectedInchWidthOutsideMountRollerBlindsRoomLightening(inchesWidthOutsideMountRollerBlindsRoomLightening);

    const scrollableDivInchesWidthOutsideMountRollerBlindsRoomLightening = scrollableDivRefInchesWidthOutsideMountRollerBlindsRoomLightening.current;

    if (scrollableDivInchesWidthOutsideMountRollerBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountRollerBlindsRoomLightening = scrollableDivInchesWidthOutsideMountRollerBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountRollerBlindsRoomLightening) {
          const selectedInchesDivRectWidthOutsideMountRollerBlindsRoomLightening = selectedInchesDivWidthOutsideMountRollerBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountRollerBlindsRoomLightening.top +
            scrollableDivInchesWidthOutsideMountRollerBlindsRoomLightening.scrollTop -
            (scrollableDivInchesWidthOutsideMountRollerBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthOutsideMountRollerBlindsRoomLightening.height) / 2;

          scrollableDivInchesWidthOutsideMountRollerBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountRollerBlindsRoomLightening = (inchesWidthOutsideMountRollerBlindsRoomLightening, price) => {
    const updatedInchPricesWidthOutsideMountRollerBlindsRoomLightening = { ...inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening, [inchesWidthOutsideMountRollerBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountRollerBlindsRoomLightening(updatedInchPricesWidthOutsideMountRollerBlindsRoomLightening);
  };



  const handleNewSpanClickedWidthOutsideMountRollerBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthOutsideMountRollerBlindsRoomLightening((prev) => !prev);
  };




  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledInchesWhenClickedWidthOutsideMountHoneycombBlindsRoomLightening = (inchesWidthOutsideMountHoneycombBlindsRoomLightening) => {
    setselectedInchesWidthOutsideMountHoneycombBlindsRoomLightening(inchesWidthOutsideMountHoneycombBlindsRoomLightening);
    setselectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomLightening(false);
    setselectedInchWidthOutsideMountHoneycombBlindsRoomLightening(inchesWidthOutsideMountHoneycombBlindsRoomLightening);

    const scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomLightening = scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomLightening.current;

    if (scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountHoneycombBlindsRoomLightening = scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountHoneycombBlindsRoomLightening) {
          const selectedInchesDivRectWidthOutsideMountHoneycombBlindsRoomLightening = selectedInchesDivWidthOutsideMountHoneycombBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountHoneycombBlindsRoomLightening.top +
            scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomLightening.scrollTop -
            (scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthOutsideMountHoneycombBlindsRoomLightening.height) / 2;

          scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountHoneycombBlindsRoomLightening = (inchesWidthOutsideMountHoneycombBlindsRoomLightening, price) => {
    const updatedInchPricesWidthOutsideMountHoneycombBlindsRoomLightening = { ...inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening, [inchesWidthOutsideMountHoneycombBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening(updatedInchPricesWidthOutsideMountHoneycombBlindsRoomLightening);
  };



  const handleNewSpanClickedWidthOutsideMountHoneycombBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountHoneycombBlindsRoomDarkening = (inchesWidthOutsideMountHoneycombBlindsRoomDarkening) => {
    setselectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening(inchesWidthOutsideMountHoneycombBlindsRoomDarkening);
    setselectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomDarkening(false);
    setselectedInchWidthOutsideMountHoneycombBlindsRoomDarkening(inchesWidthOutsideMountHoneycombBlindsRoomDarkening);

    const scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomDarkening = scrollableDivRefInchesWidthOutsideMountHoneycombBlindsRoomDarkening.current;

    if (scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountHoneycombBlindsRoomDarkening = scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountHoneycombBlindsRoomDarkening) {
          const selectedInchesDivRectWidthOutsideMountHoneycombBlindsRoomDarkening = selectedInchesDivWidthOutsideMountHoneycombBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountHoneycombBlindsRoomDarkening.top +
            scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthOutsideMountHoneycombBlindsRoomDarkening.height) / 2;

          scrollableDivInchesWidthOutsideMountHoneycombBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountHoneycombBlindsRoomDarkening = (inchesWidthOutsideMountHoneycombBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthOutsideMountHoneycombBlindsRoomDarkening = { ...inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening, [inchesWidthOutsideMountHoneycombBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening(updatedInchPricesWidthOutsideMountHoneycombBlindsRoomDarkening);
  };



  const handleNewSpanClickedWidthOutsideMountHoneycombBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMountNoDrillTypeBlindsRoomLightening = (inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening) => {
    setselectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening(inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening);
    setselectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomLightening(false);
    setselectedInchWidthOutsideMountNoDrillTypeBlindsRoomLightening(inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening);

    const scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening = scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening.current;

    if (scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountNoDrillTypeBlindsRoomLightening = scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountNoDrillTypeBlindsRoomLightening) {
          const selectedInchesDivRectWidthOutsideMountNoDrillTypeBlindsRoomLightening = selectedInchesDivWidthOutsideMountNoDrillTypeBlindsRoomLightening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountNoDrillTypeBlindsRoomLightening.top +
            scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening.scrollTop -
            (scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening.offsetHeight - selectedInchesDivRectWidthOutsideMountNoDrillTypeBlindsRoomLightening.height) / 2;

          scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountNoDrillTypeBlindsRoomLightening = (inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening, price) => {
    const updatedInchPricesWidthOutsideMountNoDrillTypeBlindsRoomLightening = { ...inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening, [inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening(updatedInchPricesWidthOutsideMountNoDrillTypeBlindsRoomLightening);
  };



  const handleNewSpanClickedWidthOutsideMountNoDrillTypeBlindsRoomLightening = () => {
    setselectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleScrolledInchesWhenClickedWidthOutsideMountNoDrillTypeBlindsRoomDarkening = (inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening) => {
    setselectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening(inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening);
    setselectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomDarkening(false);
    setselectedInchWidthOutsideMountNoDrillTypeBlindsRoomDarkening(inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening);

    const scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening = scrollableDivRefInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening.current;

    if (scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMountNoDrillTypeBlindsRoomDarkening = scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMountNoDrillTypeBlindsRoomDarkening) {
          const selectedInchesDivRectWidthOutsideMountNoDrillTypeBlindsRoomDarkening = selectedInchesDivWidthOutsideMountNoDrillTypeBlindsRoomDarkening.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMountNoDrillTypeBlindsRoomDarkening.top +
            scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening.scrollTop -
            (scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening.offsetHeight - selectedInchesDivRectWidthOutsideMountNoDrillTypeBlindsRoomDarkening.height) / 2;

          scrollableDivInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };


  const handleInchPriceChangeWidthOutsideMountNoDrillTypeBlindsRoomDarkening = (inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening, price) => {
    const updatedInchPricesWidthOutsideMountNoDrillTypeBlindsRoomDarkening = { ...inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening, [inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening]: parseFloat(price) };
    setinchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening(updatedInchPricesWidthOutsideMountNoDrillTypeBlindsRoomDarkening);
  };



  const handleNewSpanClickedWidthOutsideMountNoDrillTypeBlindsRoomDarkening = () => {
    setselectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomDarkening((prev) => !prev);
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


  const handleInchPriceChangeHeightOutsideMountRomanBlindsRoomDarkening = (selectedInchesHeightOutsideMountRomanBlindsRoomDarkening, newPriceHeightOutsideMountRomanBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountRomanBlindsRoomDarkening);
    console.log("New price:", newPriceHeightOutsideMountRomanBlindsRoomDarkening);

    setinchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening(prevPricesHeightOutsideMountRomanBlindsRoomDarkening => {
      const updatedPricesHeightOutsideMountRomanBlindsRoomDarkening = { ...prevPricesHeightOutsideMountRomanBlindsRoomDarkening };
      updatedPricesHeightOutsideMountRomanBlindsRoomDarkening[selectedInchesHeightOutsideMountRomanBlindsRoomDarkening] = parseFloat(newPriceHeightOutsideMountRomanBlindsRoomDarkening);
      return updatedPricesHeightOutsideMountRomanBlindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountRomanBlindsRoomDarkening = (inchesHeightOutsideMountRomanBlindsRoomDarkening) => {
    setselectedInchesHeightOutsideMountRomanBlindsRoomDarkening(inchesHeightOutsideMountRomanBlindsRoomDarkening);

    if (inchesHeightOutsideMountRomanBlindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountRomanBlindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountRomanBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountRomanBlindsRoomDarkening = inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening[inchesHeightOutsideMountRomanBlindsRoomDarkening];
    setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomDarkening(newSetPriceinchesHeightOutsideMountRomanBlindsRoomDarkening !== undefined ? newSetPriceinchesHeightOutsideMountRomanBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountRomanBlindsRoomDarkening === undefined && inchesHeightOutsideMountRomanBlindsRoomDarkening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountRomanBlindsRoomDarkening = inchesHeightOutsideMountRomanBlindsRoomDarkening - 1;
      while (prevInchinchesHeightOutsideMountRomanBlindsRoomDarkening % 5 !== 0) {
        prevInchinchesHeightOutsideMountRomanBlindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomDarkening = inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening[prevInchinchesHeightOutsideMountRomanBlindsRoomDarkening];
      setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomDarkening(nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomDarkening);
      let nextInchHeightOutsideMountRomanBlindsRoomDarkening = prevInchinchesHeightOutsideMountRomanBlindsRoomDarkening + 1;
      while (nextInchHeightOutsideMountRomanBlindsRoomDarkening < inchesHeightOutsideMountRomanBlindsRoomDarkening) {
        nextInchHeightOutsideMountRomanBlindsRoomDarkening++;
      }

    } else if (inchesHeightOutsideMountRomanBlindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening[inchesHeightOutsideMountRomanBlindsRoomDarkening]);
    }
  };

  const handleNewSpanClickedHeightOutsideMountRomanBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightOutsideMountRomanBlindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightOutsideMountRomanBlindsRoomLightening = (selectedInchesHeightOutsideMountRomanBlindsRoomLightening, newPriceHeightOutsideMountRomanBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountRomanBlindsRoomLightening);
    console.log("New price:", newPriceHeightOutsideMountRomanBlindsRoomLightening);

    setinchPricesAfterHeightOutsideMountRomanBlindsRoomLightening(prevPricesHeightOutsideMountRomanBlindsRoomLightening => {
      const updatedPricesHeightOutsideMountRomanBlindsRoomLightening = { ...prevPricesHeightOutsideMountRomanBlindsRoomLightening };
      updatedPricesHeightOutsideMountRomanBlindsRoomLightening[selectedInchesHeightOutsideMountRomanBlindsRoomLightening] = parseFloat(newPriceHeightOutsideMountRomanBlindsRoomLightening);
      return updatedPricesHeightOutsideMountRomanBlindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountRomanBlindsRoomLightening = (inchesHeightOutsideMountRomanBlindsRoomLightening) => {
    setselectedInchesHeightOutsideMountRomanBlindsRoomLightening(inchesHeightOutsideMountRomanBlindsRoomLightening);

    if (inchesHeightOutsideMountRomanBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountRomanBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountRomanBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountRomanBlindsRoomLightening = inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening[inchesHeightOutsideMountRomanBlindsRoomLightening];
    setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomLightening(newSetPriceinchesHeightOutsideMountRomanBlindsRoomLightening !== undefined ? newSetPriceinchesHeightOutsideMountRomanBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountRomanBlindsRoomLightening === undefined && inchesHeightOutsideMountRomanBlindsRoomLightening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountRomanBlindsRoomLightening = inchesHeightOutsideMountRomanBlindsRoomLightening - 1;
      while (prevInchinchesHeightOutsideMountRomanBlindsRoomLightening % 5 !== 0) {
        prevInchinchesHeightOutsideMountRomanBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomLightening = inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening[prevInchinchesHeightOutsideMountRomanBlindsRoomLightening];
      setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomLightening(nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountRomanBlindsRoomLightening);
      let nextInchHeightOutsideMountRomanBlindsRoomLightening = prevInchinchesHeightOutsideMountRomanBlindsRoomLightening + 1;
      while (nextInchHeightOutsideMountRomanBlindsRoomLightening < inchesHeightOutsideMountRomanBlindsRoomLightening) {
        nextInchHeightOutsideMountRomanBlindsRoomLightening++;
      }

    } else if (inchesHeightOutsideMountRomanBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening[inchesHeightOutsideMountRomanBlindsRoomLightening]);
    }
  };


  const handleNewSpanClickedHeightOutsideMountRomanBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightOutsideMountRomanBlindsRoomLightening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightOutsideMountRollerBlindsRoomDarkening = (selectedInchesHeightOutsideMountRollerBlindsRoomDarkening, newPriceHeightOutsideMountRollerBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountRollerBlindsRoomDarkening);
    console.log("New price:", newPriceHeightOutsideMountRollerBlindsRoomDarkening);

    setinchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening(prevPricesHeightOutsideMountRollerBlindsRoomDarkening => {
      const updatedPricesHeightOutsideMountRollerBlindsRoomDarkening = { ...prevPricesHeightOutsideMountRollerBlindsRoomDarkening };
      updatedPricesHeightOutsideMountRollerBlindsRoomDarkening[selectedInchesHeightOutsideMountRollerBlindsRoomDarkening] = parseFloat(newPriceHeightOutsideMountRollerBlindsRoomDarkening);
      return updatedPricesHeightOutsideMountRollerBlindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountRollerBlindsRoomDarkening = (inchesHeightOutsideMountRollerBlindsRoomDarkening) => {
    setselectedInchesHeightOutsideMountRollerBlindsRoomDarkening(inchesHeightOutsideMountRollerBlindsRoomDarkening);

    if (inchesHeightOutsideMountRollerBlindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountRollerBlindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountRollerBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountRollerBlindsRoomDarkening = inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[inchesHeightOutsideMountRollerBlindsRoomDarkening];
    setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening(newSetPriceinchesHeightOutsideMountRollerBlindsRoomDarkening !== undefined ? newSetPriceinchesHeightOutsideMountRollerBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountRollerBlindsRoomDarkening === undefined && inchesHeightOutsideMountRollerBlindsRoomDarkening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountRollerBlindsRoomDarkening = inchesHeightOutsideMountRollerBlindsRoomDarkening - 1;
      while (prevInchinchesHeightOutsideMountRollerBlindsRoomDarkening % 5 !== 0) {
        prevInchinchesHeightOutsideMountRollerBlindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomDarkening = inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[prevInchinchesHeightOutsideMountRollerBlindsRoomDarkening];
      setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening(nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomDarkening);
      let nextInchHeightOutsideMountRollerBlindsRoomDarkening = prevInchinchesHeightOutsideMountRollerBlindsRoomDarkening + 1;
      while (nextInchHeightOutsideMountRollerBlindsRoomDarkening < inchesHeightOutsideMountRollerBlindsRoomDarkening) {
        nextInchHeightOutsideMountRollerBlindsRoomDarkening++;
      }

    } else if (inchesHeightOutsideMountRollerBlindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[inchesHeightOutsideMountRollerBlindsRoomDarkening]);
    }
  };


  const handleNewSpanClickedHeightOutsideMountRollerBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightOutsideMountRollerBlindsRoomDarkening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMountRollerBlindsRoomLightening = (selectedInchesHeightOutsideMountRollerBlindsRoomLightening, newPriceHeightOutsideMountRollerBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountRollerBlindsRoomLightening);
    console.log("New price:", newPriceHeightOutsideMountRollerBlindsRoomLightening);

    setinchPricesAfterHeightOutsideMountRollerBlindsRoomLightening(prevPricesHeightOutsideMountRollerBlindsRoomLightening => {
      const updatedPricesHeightOutsideMountRollerBlindsRoomLightening = { ...prevPricesHeightOutsideMountRollerBlindsRoomLightening };
      updatedPricesHeightOutsideMountRollerBlindsRoomLightening[selectedInchesHeightOutsideMountRollerBlindsRoomLightening] = parseFloat(newPriceHeightOutsideMountRollerBlindsRoomLightening);
      return updatedPricesHeightOutsideMountRollerBlindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountRollerBlindsRoomLightening = (inchesHeightOutsideMountRollerBlindsRoomLightening) => {
    setselectedInchesHeightOutsideMountRollerBlindsRoomLightening(inchesHeightOutsideMountRollerBlindsRoomLightening);

    if (inchesHeightOutsideMountRollerBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountRollerBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountRollerBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountRollerBlindsRoomLightening = inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening[inchesHeightOutsideMountRollerBlindsRoomLightening];
    setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomLightening(newSetPriceinchesHeightOutsideMountRollerBlindsRoomLightening !== undefined ? newSetPriceinchesHeightOutsideMountRollerBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountRollerBlindsRoomLightening === undefined && inchesHeightOutsideMountRollerBlindsRoomLightening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountRollerBlindsRoomLightening = inchesHeightOutsideMountRollerBlindsRoomLightening - 1;
      while (prevInchinchesHeightOutsideMountRollerBlindsRoomLightening % 5 !== 0) {
        prevInchinchesHeightOutsideMountRollerBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomLightening = inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening[prevInchinchesHeightOutsideMountRollerBlindsRoomLightening];
      setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomLightening(nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountRollerBlindsRoomLightening);
      let nextInchHeightOutsideMountRollerBlindsRoomLightening = prevInchinchesHeightOutsideMountRollerBlindsRoomLightening + 1;
      while (nextInchHeightOutsideMountRollerBlindsRoomLightening < inchesHeightOutsideMountRollerBlindsRoomLightening) {
        nextInchHeightOutsideMountRollerBlindsRoomLightening++;
      }

    } else if (inchesHeightOutsideMountRollerBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening[inchesHeightOutsideMountRollerBlindsRoomLightening]);
    }
  };


  const handleNewSpanClickedHeightOutsideMountRollerBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightOutsideMountRollerBlindsRoomLightening((prev) => !prev);
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMountHoneycombBlindsRoomLightening = (selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening, newPriceHeightOutsideMountHoneycombBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening);
    console.log("New price:", newPriceHeightOutsideMountHoneycombBlindsRoomLightening);

    setinchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening(prevPricesHeightOutsideMountHoneycombBlindsRoomLightening => {
      const updatedPricesHeightOutsideMountHoneycombBlindsRoomLightening = { ...prevPricesHeightOutsideMountHoneycombBlindsRoomLightening };
      updatedPricesHeightOutsideMountHoneycombBlindsRoomLightening[selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening] = parseFloat(newPriceHeightOutsideMountHoneycombBlindsRoomLightening);
      return updatedPricesHeightOutsideMountHoneycombBlindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountHoneycombBlindsRoomLightening = (inchesHeightOutsideMountHoneycombBlindsRoomLightening) => {
    setselectedInchesHeightOutsideMountHoneycombBlindsRoomLightening(inchesHeightOutsideMountHoneycombBlindsRoomLightening);

    if (inchesHeightOutsideMountHoneycombBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountHoneycombBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountHoneycombBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomLightening = inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening[inchesHeightOutsideMountHoneycombBlindsRoomLightening];
    setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomLightening(newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomLightening !== undefined ? newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomLightening === undefined && inchesHeightOutsideMountHoneycombBlindsRoomLightening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountHoneycombBlindsRoomLightening = inchesHeightOutsideMountHoneycombBlindsRoomLightening - 1;
      while (prevInchinchesHeightOutsideMountHoneycombBlindsRoomLightening % 5 !== 0) {
        prevInchinchesHeightOutsideMountHoneycombBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomLightening = inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening[prevInchinchesHeightOutsideMountHoneycombBlindsRoomLightening];
      setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomLightening(nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomLightening);
      let nextInchHeightOutsideMountHoneycombBlindsRoomLightening = prevInchinchesHeightOutsideMountHoneycombBlindsRoomLightening + 1;
      while (nextInchHeightOutsideMountHoneycombBlindsRoomLightening < inchesHeightOutsideMountHoneycombBlindsRoomLightening) {
        nextInchHeightOutsideMountHoneycombBlindsRoomLightening++;
      }

    } else if (inchesHeightOutsideMountHoneycombBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening[inchesHeightOutsideMountHoneycombBlindsRoomLightening]);
    }
  };


  const handleNewSpanClickedHeightOutsideMountHoneycombBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomLightening((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeHeightOutsideMountHoneycombBlindsRoomDarkening = (selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening, newPriceHeightOutsideMountHoneycombBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening);
    console.log("New price:", newPriceHeightOutsideMountHoneycombBlindsRoomDarkening);

    setinchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening(prevPricesHeightOutsideMountHoneycombBlindsRoomDarkening => {
      const updatedPricesHeightOutsideMountHoneycombBlindsRoomDarkening = { ...prevPricesHeightOutsideMountHoneycombBlindsRoomDarkening };
      updatedPricesHeightOutsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening] = parseFloat(newPriceHeightOutsideMountHoneycombBlindsRoomDarkening);
      return updatedPricesHeightOutsideMountHoneycombBlindsRoomDarkening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountHoneycombBlindsRoomDarkening = (inchesHeightOutsideMountHoneycombBlindsRoomDarkening) => {
    setselectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening(inchesHeightOutsideMountHoneycombBlindsRoomDarkening);

    if (inchesHeightOutsideMountHoneycombBlindsRoomDarkening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountHoneycombBlindsRoomDarkening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountHoneycombBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening = inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening[inchesHeightOutsideMountHoneycombBlindsRoomDarkening];
    setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomDarkening(newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening !== undefined ? newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening === undefined && inchesHeightOutsideMountHoneycombBlindsRoomDarkening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountHoneycombBlindsRoomDarkening = inchesHeightOutsideMountHoneycombBlindsRoomDarkening - 1;
      while (prevInchinchesHeightOutsideMountHoneycombBlindsRoomDarkening % 5 !== 0) {
        prevInchinchesHeightOutsideMountHoneycombBlindsRoomDarkening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening = inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening[prevInchinchesHeightOutsideMountHoneycombBlindsRoomDarkening];
      setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomDarkening(nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountHoneycombBlindsRoomDarkening);
      let nextInchHeightOutsideMountHoneycombBlindsRoomDarkening = prevInchinchesHeightOutsideMountHoneycombBlindsRoomDarkening + 1;
      while (nextInchHeightOutsideMountHoneycombBlindsRoomDarkening < inchesHeightOutsideMountHoneycombBlindsRoomDarkening) {
        nextInchHeightOutsideMountHoneycombBlindsRoomDarkening++;
      }

    } else if (inchesHeightOutsideMountHoneycombBlindsRoomDarkening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening[inchesHeightOutsideMountHoneycombBlindsRoomDarkening]);
    }
  };


  const handleNewSpanClickedHeightOutsideMountHoneycombBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomDarkening((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMountNoDrillTypeBlindsRoomLightening = (selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening, newPriceHeightOutsideMountNoDrillTypeBlindsRoomLightening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening);
    console.log("New price:", newPriceHeightOutsideMountNoDrillTypeBlindsRoomLightening);

    setinchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening(prevPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening => {
      const updatedPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening = { ...prevPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening };
      updatedPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening] = parseFloat(newPriceHeightOutsideMountNoDrillTypeBlindsRoomLightening);
      return updatedPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMountNoDrillTypeBlindsRoomLightening = (inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening) => {
    setselectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening(inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening);

    if (inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening = inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening[inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening];
    setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening(newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening !== undefined ? newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening === undefined && inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening % 5 !== 0) {
      let prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening = inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening - 1;
      while (prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening % 5 !== 0) {
        prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening = inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening[prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening];
      setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening(nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening);
      let nextInchHeightOutsideMountNoDrillTypeBlindsRoomLightening = prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomLightening + 1;
      while (nextInchHeightOutsideMountNoDrillTypeBlindsRoomLightening < inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening) {
        nextInchHeightOutsideMountNoDrillTypeBlindsRoomLightening++;
      }

    } else if (inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening[inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening]);
    }
  };


  const handleNewSpanClickedHeightOutsideMountNoDrillTypeBlindsRoomLightening = () => {
    setselectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomLightening((prev) => !prev);
  };



  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMountNoDrillTypeBlindsRoomDarkening = (selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening, newPriceHeightOutsideMountNoDrillTypeBlindsRoomDarkening) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening);
    console.log("New price:", newPriceHeightOutsideMountNoDrillTypeBlindsRoomDarkening);

    setinchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening(prevPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening => {
        const updatedPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening = { ...prevPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening };
        updatedPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening] = parseFloat(newPriceHeightOutsideMountNoDrillTypeBlindsRoomDarkening);
        return updatedPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening;
    });
};


const handleScrolledInchesWhenClickedHeightOutsideMountNoDrillTypeBlindsRoomDarkening = (inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening) => {
    setselectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening(inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening);

    if (inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening % 5 === 0) {
        // Log when a multiple of 5 is clicked
        console.log("Selected multiple of 5:", inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening);
    } else {
        // Log when a subsequent number of a multiple of 5 is clicked
        console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening = inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening[inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening];
    setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening(newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening !== undefined ? newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening === undefined && inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening % 5 !== 0) {
        let prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening = inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening - 1;
        while (prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening % 5 !== 0) {
            prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening--;
        }

        const nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening = inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening[prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening(nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening : "");

        console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening);
        let nextInchHeightOutsideMountNoDrillTypeBlindsRoomDarkening = prevInchinchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening + 1;
        while (nextInchHeightOutsideMountNoDrillTypeBlindsRoomDarkening < inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening) {
            nextInchHeightOutsideMountNoDrillTypeBlindsRoomDarkening++;
        }

    } else if (inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening % 5 === 0) {
        // Log the price of the multiple of 5 when clicked
        console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening[inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening]);
    }
};


const handleNewSpanClickedHeightOutsideMountNoDrillTypeBlindsRoomDarkening = () => {
    setselectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomDarkening((prev) => !prev);
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
        setproductName1HoneycombBlindsRoomLightening(latestData.productName1HoneycombBlindsRoomLightening || "");
        setproductName1HoneycombBlindsRoomDarkening(latestData.productName1HoneycombBlindsRoomDarkening || "");
        setproductName1NoDrillTypeBlindsRoomLightening(latestData.productName1NoDrillTypeBlindsRoomLightening || "");
        setproductName1NoDrillTypeBlindsRoomDarkening(latestData.productName1NoDrillTypeBlindsRoomDarkening || "");
        setproductName1RollerBlindsRoomLightening(latestData.productName1RollerBlindsRoomLightening || "");
        setproductName1RollerBlindsRoomDarkening(latestData.productName1RollerBlindsRoomDarkening || "");
        setproductName1RomanBlindsRoomLightening(latestData.productName1RomanBlindsRoomLightening || "");
        setproductName1RomanBlindsRoomDarkening(latestData.productName1RomanBlindsRoomDarkening || "");


        setproductName2(latestData.productName2 || "");
        setProductName2ZebrablindsRoomLightening(latestData.productName2ZebrablindsRoomLightening || "");
        setproductName2ZebrablindsRoomDarkening(latestData.productName2ZebrablindsRoomDarkening || "");
        setproductName2ShangrilablindsRoomLightening(latestData.productName2ShangrilablindsRoomLightening || "");
        setproductName2ShangrilablindsRoomDarkening(latestData.productName2ShangrilablindsRoomDarkening || "");
        setproductName2HoneycombBlindsRoomLightening(latestData.productName2HoneycombBlindsRoomLightening || "");
        setproductName2HoneycombBlindsRoomDarkening(latestData.productName2HoneycombBlindsRoomDarkening || "");
        setproductName2NoDrillTypeBlindsRoomLightening(latestData.productName2NoDrillTypeBlindsRoomLightening || "");
        setproductName2NoDrillTypeBlindsRoomDarkening(latestData.productName2NoDrillTypeBlindsRoomDarkening || "");
        setproductName2RollerBlindsRoomLightening(latestData.productName2RollerBlindsRoomLightening || "");
        setproductName2RollerBlindsRoomDarkening(latestData.productName2RollerBlindsRoomDarkening || "");
        setproductName2RomanBlindsRoomLightening(latestData.productName2RomanBlindsRoomLightening || "");
        setproductName2RomanBlindsRoomDarkening(latestData.productName2RomanBlindsRoomDarkening || "");


        setroomname(latestData.roomname || "");
        setroomnameZebrablindsRoomLightening(latestData.roomnameZebrablindsRoomLightening || "");
        setroomnameZebrablindsRoomDarkening(latestData.roomnameZebrablindsRoomDarkening || "");
        setroomnameShangrilablindsRoomLightening(latestData.roomnameShangrilablindsRoomLightening || "");
        setroomnameShangrilablindsRoomDarkening(latestData.roomnameShangrilablindsRoomDarkening || "");
        setroomnameHoneycombBlindsRoomLightening(latestData.roomnameHoneycombBlindsRoomLightening || "");
        setroomnameHoneycombBlindsRoomDarkening(latestData.roomnameHoneycombBlindsRoomDarkening || "");
        setroomnameNoDrillTypeBlindsRoomLightening(latestData.roomnameNoDrillTypeBlindsRoomLightening || "");
        setroomnameNoDrillTypeBlindsRoomDarkening(latestData.roomnameNoDrillTypeBlindsRoomDarkening || "");
        setroomnameRollerBlindsRoomLightening(latestData.roomnameRollerBlindsRoomLightening || "");
        setroomnameRollerBlindsRoomDarkening(latestData.roomnameRollerBlindsRoomDarkening || "");
        setroomnameRomanBlindsRoomLightening(latestData.roomnameRomanBlindsRoomLightening || "");
        setroomnameRomanBlindsRoomDarkening(latestData.roomnameRomanBlindsRoomDarkening || "");


        setWandPriceCMS(latestData.WandPriceCMS || "");
        setWandPriceCMSZebrablindsRoomLightening(latestData.WandPriceCMSZebrablindsRoomLightening || "");
        setWandPriceCMSZebrablindsRoomDarkening(latestData.WandPriceCMSZebrablindsRoomDarkening || "");
        setWandPriceCMSShangrilablindsRoomLightening(latestData.WandPriceCMSShangrilablindsRoomLightening || "");
        setWandPriceCMSShangrilablindsRoomDarkening(latestData.WandPriceCMSShangrilablindsRoomDarkening || "");
        setWandPriceCMSHoneycombBlindsRoomLightening(latestData.WandPriceCMSHoneycombBlindsRoomLightening || "");
        setWandPriceCMSHoneycombBlindsRoomDarkening(latestData.WandPriceCMSHoneycombBlindsRoomDarkening || "");
        setWandPriceCMSNoDrillTypeBlindsRoomLightening(latestData.WandPriceCMSNoDrillTypeBlindsRoomLightening || "");
        setWandPriceCMSNoDrillTypeBlindsRoomDarkening(latestData.WandPriceCMSNoDrillTypeBlindsRoomDarkening || "");
        setWandPriceCMSRollerBlindsRoomLightening(latestData.WandPriceCMSRollerBlindsRoomLightening || "");
        setWandPriceCMSRollerBlindsRoomDarkening(latestData.WandPriceCMSRollerBlindsRoomDarkening || "");
        setWandPriceCMSRomanBlindsRoomLightening(latestData.WandPriceCMSRomanBlindsRoomLightening || "");
        setWandPriceCMSRomanBlindsRoomDarkening(latestData.WandPriceCMSRomanBlindsRoomDarkening || "");


        setcordlesspriceCMS(latestData.cordlesspriceCMS || "");
        setcordlesspriceCMSZebrablindsRoomLightening(latestData.cordlesspriceCMSZebrablindsRoomLightening || "");
        setcordlesspriceCMSZebrablindsRoomDarkening(latestData.cordlesspriceCMSZebrablindsRoomDarkening || "");
        setcordlesspriceCMSShangrilablindsRoomLightening(latestData.cordlesspriceCMSShangrilablindsRoomLightening || "");
        setcordlesspriceCMSShangrilablindsRoomDarkening(latestData.cordlesspriceCMSShangrilablindsRoomDarkening || "");
        setcordlesspriceCMSHoneycombBlindsRoomLightening(latestData.cordlesspriceCMSHoneycombBlindsRoomLightening || "");
        setcordlesspriceCMSHoneycombBlindsRoomDarkening(latestData.cordlesspriceCMSHoneycombBlindsRoomDarkening || "");
        setcordlesspriceCMSNoDrillTypeBlindsRoomLightening(latestData.cordlesspriceCMSNoDrillTypeBlindsRoomLightening || "");
        setcordlesspriceCMSNoDrillTypeBlindsRoomDarkening(latestData.cordlesspriceCMSNoDrillTypeBlindsRoomDarkening || "");
        setcordlesspriceCMSRollerBlindsRoomLightening(latestData.cordlesspriceCMSRollerBlindsRoomLightening || "");
        setcordlesspriceCMSRollerBlindsRoomDarkening(latestData.cordlesspriceCMSRollerBlindsRoomDarkening || "");
        setcordlesspriceCMSRomanBlindsRoomLightening(latestData.cordlesspriceCMSRomanBlindsRoomLightening || "");
        setcordlesspriceCMSRomanBlindsRoomDarkening(latestData.cordlesspriceCMSRomanBlindsRoomDarkening || "");


        setmotorizedpriceCMS(latestData.motorizedpriceCMS || "");
        setmotorizedpriceCMSZebrablindsRoomLightening(latestData.motorizedpriceCMSZebrablindsRoomLightening || "");
        stemotorizedpriceCMSZebrablindsRoomDarkening(latestData.motorizedpriceCMSZebrablindsRoomDarkening || "");
        setmotorizedpriceCMSShangrilablindsRoomLightening(latestData.motorizedpriceCMSShangrilablindsRoomLightening || "");
        setmotorizedpriceCMSShangrilablindsRoomDarkening(latestData.motorizedpriceCMSShangrilablindsRoomDarkening || "");
        setmotorizedpriceCMSHoneycombBlindsRoomLightening(latestData.motorizedpriceCMSHoneycombBlindsRoomLightening || "");
        setmotorizedpriceCMSHoneycombBlindsRoomDarkening(latestData.motorizedpriceCMSHoneycombBlindsRoomDarkening || "");
        setmotorizedpriceCMSNoDrillTypeBlindsRoomLightening(latestData.motorizedpriceCMSNoDrillTypeBlindsRoomLightening || "");
        setmotorizedpriceCMSNoDrillTypeBlindsRoomDarkening(latestData.motorizedpriceCMSNoDrillTypeBlindsRoomDarkening || "");
        setmotorizedpriceCMSRollerBlindsRoomLightening(latestData.motorizedpriceCMSRollerBlindsRoomLightening || "");
        setmotorizedpriceCMSRollerBlindsRoomDarkening(latestData.motorizedpriceCMSRollerBlindsRoomDarkening || "");
        setmotorizedpriceCMSRomanBlindsRoomLightening(latestData.motorizedpriceCMSRomanBlindsRoomLightening || "");
        setmotorizedpriceCMSRomanBlindsRoomDarkening(latestData.motorizedpriceCMSRomanBlindsRoomDarkening || "");



        setmotorizedpriceCMSRollerBlindsRoomLightening
        motorizedpriceCMSRollerBlindsRoomLightening


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

        const inchPricesWidthInsideMountHoneycombBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening || "{}");
        setinchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening(inchPricesWidthInsideMountHoneycombBlindsRoomLightening);

        const inchPricesWidthInsideMountHoneycombBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening(inchPricesWidthInsideMountHoneycombBlindsRoomDarkening);

        const inchPricesWidthInsideMountNoDrillTypeBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening || "{}");
        setinchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening(inchPricesWidthInsideMountNoDrillTypeBlindsRoomLightening);

        const inchPricesWidthInsideMountNoDrillTypeBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening(inchPricesWidthInsideMountNoDrillTypeBlindsRoomDarkening);

        const inchPricesWidthInsideMountRollerBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthInsideMountRollerBlindsRoomLightening || "{}");
        setinchPricesAfterWidthInsideMountRollerBlindsRoomLightening(inchPricesWidthInsideMountRollerBlindsRoomLightening);

        const inchPricesWidthInsideMountRollerBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthInsideMountRollerBlindsRoomDarkening(inchPricesWidthInsideMountRollerBlindsRoomDarkening);

        const inchPricesWidthInsideMountRomanBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthInsideMountRomanBlindsRoomLightening || "{}");
        setinchPricesAfterWidthInsideMountRomanBlindsRoomLightening(inchPricesWidthInsideMountRomanBlindsRoomLightening);

        const inchPricesWidthInsideMountRomanBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthInsideMountRomanBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthInsideMountRomanBlindsRoomDarkening(inchPricesWidthInsideMountRomanBlindsRoomDarkening);






        const inchPricesWidthOutsideMountZebrablindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountZebrablindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountZebrablindsRoomLightening(inchPricesWidthOutsideMountZebrablindsRoomLightening);

        const inchPricesWidthOutsideMountZebrablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountZebrablindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountZebrablindsRoomDarkening(inchPricesWidthOutsideMountZebrablindsRoomDarkening);

        const inchPricesWidthOutsideMountShangrilablindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountShangrilablindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountShangrilablindsRoomLightening(inchPricesWidthOutsideMountShangrilablindsRoomLightening);

        const inchPricesWidthOutsideMountShangrilablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountShangrilablindsRoomDarkening(inchPricesWidthOutsideMountShangrilablindsRoomDarkening);

        const inchPricesWidthOutsideMountHoneycombBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening(inchPricesWidthOutsideMountHoneycombBlindsRoomLightening);

        const inchPricesWidthOutsideMountHoneycombBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening(inchPricesWidthOutsideMountHoneycombBlindsRoomDarkening);

        const inchPricesWidthOutsideMountNoDrillTypeBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening(inchPricesWidthOutsideMountNoDrillTypeBlindsRoomLightening);

        const inchPricesWidthOutsideMountNoDrillTypeBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening(inchPricesWidthOutsideMountNoDrillTypeBlindsRoomDarkening);

        const inchPricesWidthOutsideMountRollerBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountRollerBlindsRoomLightening(inchPricesWidthOutsideMountRollerBlindsRoomLightening);

        const inchPricesWidthOutsideMountRollerBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening(inchPricesWidthOutsideMountRollerBlindsRoomDarkening);

        const inchPricesWidthOutsideMountRomanBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountRomanBlindsRoomLightening || "{}");
        setinchPricesAfterWidthOutsideMountRomanBlindsRoomLightening(inchPricesWidthOutsideMountRomanBlindsRoomLightening);

        const inchPricesWidthOutsideMountRomanBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening || "{}");
        setinchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening(inchPricesWidthOutsideMountRomanBlindsRoomDarkening);





        const inchPricesHeightInsideMountZebrablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountZebrablindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountZebrablindsRoomLightening(inchPricesHeightInsideMountZebrablindsRoomLightening);

        const inchPricesHeightInsideMountZebrablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountZebrablindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountZebrablindsRoomDarkening(inchPricesHeightInsideMountZebrablindsRoomDarkening);

        const inchPricesHeightInsideMountShangrilablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountShangrilablindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountShangrilablindsRoomLightening(inchPricesHeightInsideMountShangrilablindsRoomLightening);

        const inchPricesHeightInsideMountShangrilablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountShangrilablindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountShangrilablindsRoomDarkening(inchPricesHeightInsideMountShangrilablindsRoomDarkening);

        const inchPricesHeightInsideMountHoneycombBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening(inchPricesHeightInsideMountHoneycombBlindsRoomLightening);

        const inchPricesHeightInsideMountHoneycombBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening(inchPricesHeightInsideMountHoneycombBlindsRoomDarkening);

        const inchPricesHeightInsideMountNoDrillTypeBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening(inchPricesHeightInsideMountNoDrillTypeBlindsRoomLightening);

        const inchPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening(inchPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening);

        const inchPricesHeightInsideMountRollerBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountRollerBlindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountRollerBlindsRoomLightening(inchPricesHeightInsideMountRollerBlindsRoomLightening);

        const inchPricesHeightInsideMountRollerBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountRollerBlindsRoomDarkening(inchPricesHeightInsideMountRollerBlindsRoomDarkening);

        const inchPricesHeightInsideMountRomanBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightInsideMountRomanBlindsRoomLightening || "{}");
        setinchPricesAfterHeightInsideMountRomanBlindsRoomLightening(inchPricesHeightInsideMountRomanBlindsRoomLightening);

        const inchPricesHeightInsideMountRomanBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightInsideMountRomanBlindsRoomDarkening(inchPricesHeightInsideMountRomanBlindsRoomDarkening);




        const inchPricesHeightOutsideMountZebrablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountZebrablindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountZebrablindsRoomLightening(inchPricesHeightOutsideMountZebrablindsRoomLightening);

        const inchPricesHeightOutsideMountZebrablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountZebrablindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountZebrablindsRoomDarkening(inchPricesHeightOutsideMountZebrablindsRoomDarkening);

        const inchPricesHeightOutsideMountShangrilablindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountShangrilablindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountShangrilablindsRoomLightening(inchPricesHeightOutsideMountShangrilablindsRoomLightening);

        const inchPricesHeightOutsideMountShangrilablindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountShangrilablindsRoomDarkening(inchPricesHeightOutsideMountShangrilablindsRoomDarkening);

        const inchPricesHeightOutsideMountHoneycombBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening(inchPricesHeightOutsideMountHoneycombBlindsRoomLightening);

        const inchPricesHeightOutsideMountHoneycombBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening(inchPricesHeightOutsideMountHoneycombBlindsRoomDarkening);

        const inchPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening(inchPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening);

        const inchPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMounNoDrillTypeBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening(inchPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening);

        const inchPricesHeightOutsideMountRollerBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountRollerBlindsRoomLightening(inchPricesHeightOutsideMountRollerBlindsRoomLightening);

        const inchPricesHeightOutsideMountRollerBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening(inchPricesHeightOutsideMountRollerBlindsRoomDarkening);

        const inchPricesHeightOutsideMountRomanBlindsRoomLightening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening || "{}");
        setinchPricesAfterHeightOutsideMountRomanBlindsRoomLightening(inchPricesHeightOutsideMountRomanBlindsRoomLightening);

        const inchPricesHeightOutsideMountRomanBlindsRoomDarkening = JSON.parse(latestData.inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening || "{}");
        setinchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening(inchPricesHeightOutsideMountRomanBlindsRoomDarkening);




        const lastSetPriceWidthInsideMountZebrablindsRoomLightening = inchPricesWidthInsideMountZebrablindsRoomLightening[selectedInchesWidthInsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountZebrablindsRoomLightening(lastSetPriceWidthInsideMountZebrablindsRoomLightening);

        const lastSetPriceWidthInsideMountZebrablindsRoomDarkening = inchPricesWidthInsideMountZebrablindsRoomDarkening[selectedInchesWidthInsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountZebrablindsRoomDarkening(lastSetPriceWidthInsideMountZebrablindsRoomDarkening);

        const lastSetPriceWidthInsideMountShangrilablindsRoomLightening = inchPricesWidthInsideMountShangrilablindsRoomLightening[selectedInchesWidthInsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountShangrilablindsRoomLightening(lastSetPriceWidthInsideMountShangrilablindsRoomLightening);

        const lastSetPriceWidthInsideMountShangrilablindsRoomDarkening = inchPricesWidthInsideMountShangrilablindsRoomDarkening[selectedInchesWidthInsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountShangrilablindsRoomDarkening(lastSetPriceWidthInsideMountShangrilablindsRoomDarkening);

        const lastSetPriceWidthInsideMountHoneycombBlindsRoomLightening = inchPricesWidthInsideMountHoneycombBlindsRoomLightening[selectedInchesWidthInsideMountHoneycombBlindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountHoneycombBlindsRoomLightening(lastSetPriceWidthInsideMountHoneycombBlindsRoomLightening);

        const lastSetPriceWidthInsideMountHoneycombBlindsRoomDarkening = inchPricesWidthInsideMountHoneycombBlindsRoomDarkening[selectedInchesWidthInsideMountHoneycombBlindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountHoneycombBlindsRoomDarkening(lastSetPriceWidthInsideMountHoneycombBlindsRoomDarkening);

        const lastSetPriceWidthInsideMountNoDrillTypeBlindsRoomLightening = inchPricesWidthInsideMountNoDrillTypeBlindsRoomLightening[selectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountNoDrillTypeBlindsRoomLightening(lastSetPriceWidthInsideMountNoDrillTypeBlindsRoomLightening);

        const lastSetPriceWidthInsideMountNoDrillTypeBlindsRoomDarkening = inchPricesWidthInsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening(lastSetPriceWidthInsideMountNoDrillTypeBlindsRoomDarkening);

        const lastSetPriceWidthInsideMountRollerBlindsRoomLightening = inchPricesWidthInsideMountRollerBlindsRoomLightening[selectedInchesWidthInsideMountRollerBlindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountRollerBlindsRoomLightening(lastSetPriceWidthInsideMountRollerBlindsRoomLightening);

        const lastSetPriceWidthInsideMountRollerBlindsRoomDarkening = inchPricesWidthInsideMountRollerBlindsRoomDarkening[selectedInchesWidthInsideMountRollerBlindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountRollerBlindsRoomDarkening(lastSetPriceWidthInsideMountRollerBlindsRoomDarkening);

        const lastSetPriceWidthInsideMountRomanBlindsRoomLightening = inchPricesWidthInsideMountRomanBlindsRoomLightening[selectedInchesWidthInsideMountRomanBlindsRoomLightening];
        setnewSetPriceInchesWidthInsideMountRomanBlindsRoomLightening(lastSetPriceWidthInsideMountRomanBlindsRoomLightening);

        const lastSetPriceWidthInsideMountRomanBlindsRoomDarkening = inchPricesWidthInsideMountRomanBlindsRoomDarkening[selectedInchesWidthInsideMountRomanBlindsRoomDarkening];
        setnewSetPriceInchesWidthInsideMountRomanBlindsRoomDarkening(lastSetPriceWidthInsideMountRomanBlindsRoomDarkening);




        const lastSetPriceWidthOutsideMountZebrablindsRoomLightening = inchPricesWidthOutsideMountZebrablindsRoomLightening[selectedInchesWidthOutsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountZebrablindsRoomLightening(lastSetPriceWidthOutsideMountZebrablindsRoomLightening);

        const lastSetPriceWidthOutsideMountZebrablindsRoomDarkening = inchPricesWidthOutsideMountZebrablindsRoomDarkening[selectedInchesWidthOutsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountZebrablindsRoomDarkening(lastSetPriceWidthOutsideMountZebrablindsRoomDarkening);

        const lastSetPriceWidthOutsideMountShangrilablindsRoomDarkening = inchPricesWidthOutsideMountShangrilablindsRoomDarkening[selectedInchesWidthOutsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountShangrilablindsRoomDarkening(lastSetPriceWidthOutsideMountShangrilablindsRoomDarkening);

        const lastSetPriceWidthOutsideMountShangrilablindsRoomLightening = inchPricesWidthOutsideMountShangrilablindsRoomLightening[selectedInchesWidthOutsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountShangrilablindsRoomLightening(lastSetPriceWidthOutsideMountShangrilablindsRoomLightening);

        const lastSetPriceWidthOutsideMountHoneycombBlindsRoomLightening = inchPricesWidthOutsideMountHoneycombBlindsRoomLightening[selectedInchesWidthOutsideMountHoneycombBlindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountHoneycombBlindsRoomLightening(lastSetPriceWidthOutsideMountHoneycombBlindsRoomLightening);

        const lastSetPriceWidthOutsideMountHoneycombBlindsRoomDarkening = inchPricesWidthOutsideMountHoneycombBlindsRoomDarkening[selectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountHoneycombBlindsRoomDarkening(lastSetPriceWidthOutsideMountHoneycombBlindsRoomDarkening);

        const lastSetPriceWidthOutsideMountNoDrillTypeBlindsRoomLightening = inchPricesWidthOutsideMountNoDrillTypeBlindsRoomLightening[selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening(lastSetPriceWidthOutsideMountNoDrillTypeBlindsRoomLightening);

        const lastSetPriceWidthOutsideMountNoDrillTypeBlindsRoomDarkening = inchPricesWidthOutsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening(lastSetPriceWidthOutsideMountNoDrillTypeBlindsRoomDarkening);

        const lastSetPriceWidthOutsideMountRollerBlindsRoomLightening = inchPricesWidthOutsideMountRollerBlindsRoomLightening[selectedInchesWidthOutsideMountRollerBlindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountRollerBlindsRoomLightening(lastSetPriceWidthOutsideMountRollerBlindsRoomLightening);

        const lastSetPriceWidthOutsideMountRollerBlindsRoomDarkening = inchPricesWidthOutsideMountRollerBlindsRoomDarkening[selectedInchesWidthOutsideMountRollerBlindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountRollerBlindsRoomDarkening(lastSetPriceWidthOutsideMountRollerBlindsRoomDarkening);

        const lastSetPriceWidthOutsideMountRomanBlindsRoomLightening = inchPricesWidthOutsideMountRomanBlindsRoomLightening[selectedInchesWidthOutsideMountRomanBlindsRoomLightening];
        setnewSetPriceInchesWidthOutsideMountRomanBlindsRoomLightening(lastSetPriceWidthOutsideMountRomanBlindsRoomLightening);

        const lastSetPriceWidthOutsideMountRomanBlindsRoomDarkening = inchPricesWidthOutsideMountRomanBlindsRoomDarkening[selectedInchesWidthOutsideMountRomanBlindsRoomDarkening];
        setnewSetPriceInchesWidthOutsideMountRomanBlindsRoomDarkening(lastSetPriceWidthOutsideMountRomanBlindsRoomDarkening);





        const lastSetPriceHeightInsideMountZebrablindsRoomLightening = inchPricesHeightInsideMountZebrablindsRoomLightening[selectedInchesHeightInsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountZebrablindsRoomLightening(lastSetPriceHeightInsideMountZebrablindsRoomLightening);

        const lastSetPriceHeightInsideMountZebrablindsRoomDarkening = inchPricesHeightInsideMountZebrablindsRoomDarkening[selectedInchesHeightInsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountZebrablindsRoomDarkening(lastSetPriceHeightInsideMountZebrablindsRoomDarkening);

        const lastSetPriceHeightInsideMountShangrilablindsRoomLightening = inchPricesHeightInsideMountShangrilablindsRoomLightening[selectedInchesHeightInsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountShangrilablindsRoomLightening(lastSetPriceHeightInsideMountShangrilablindsRoomLightening);

        const lastSetPriceHeightInsideMountShangrilablindsRoomDarkening = inchPricesHeightInsideMountShangrilablindsRoomDarkening[selectedInchesHeightInsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountShangrilablindsRoomDarkening(lastSetPriceHeightInsideMountShangrilablindsRoomDarkening);

        const lastSetPriceHeightInsideMountHoneycombBlindsRoomLightening = inchPricesHeightInsideMountHoneycombBlindsRoomLightening[selectedInchesHeightInsideMountHoneycombBlindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomLightening(lastSetPriceHeightInsideMountHoneycombBlindsRoomLightening);

        const lastSetPriceHeightInsideMountHoneycombBlindsRoomDarkening = inchPricesHeightInsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountHoneycombBlindsRoomDarkening(lastSetPriceHeightInsideMountHoneycombBlindsRoomDarkening);

        const lastSetPriceHeightInsideMountNoDrillTypeBlindsRoomLightening = inchPricesHeightInsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomLightening(lastSetPriceHeightInsideMountNoDrillTypeBlindsRoomLightening);

        const lastSetPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening = inchPricesHeightInsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening(lastSetPriceHeightInsideMountNoDrillTypeBlindsRoomDarkening);

        const lastSetPriceHeightInsideMountRollerBlindsRoomLightening = inchPricesHeightInsideMountRollerBlindsRoomLightening[selectedInchesHeightInsideMountRollerBlindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountRollerBlindsRoomLightening(lastSetPriceHeightInsideMountRollerBlindsRoomLightening);

        const lastSetPriceHeightInsideMountRollerBlindsRoomDarkening = inchPricesHeightInsideMountRollerBlindsRoomDarkening[selectedInchesHeightInsideMountRollerBlindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening(lastSetPriceHeightInsideMountRollerBlindsRoomDarkening);

        const lastSetPriceHeightInsideMountRomanBlindsRoomLightening = inchPricesHeightInsideMountRomanBlindsRoomLightening[selectedInchesHeightInsideMountRomanBlindsRoomLightening];
        setnewSetPriceInchesHeightInsideMountRomanBlindsRoomLightening(lastSetPriceHeightInsideMountRomanBlindsRoomLightening);

        const lastSetPriceHeightInsideMountRomanBlindsRoomDarkening = inchPricesHeightInsideMountRomanBlindsRoomDarkening[selectedInchesHeightInsideMountRomanBlindsRoomDarkening];
        setnewSetPriceInchesHeightInsideMountRomanBlindsRoomDarkening(lastSetPriceHeightInsideMountRomanBlindsRoomDarkening);



        const lastSetPriceHeightOutsideMountZebrablindsRoomLightening = inchPricesHeightOutsideMountZebrablindsRoomLightening[selectedInchesHeightOutsideMountZebrablindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountZebrablindsRoomLightening(lastSetPriceHeightOutsideMountZebrablindsRoomLightening);

        const lastSetPriceHeightOutsideMountZebrablindsRoomDarkening = inchPricesHeightOutsideMountZebrablindsRoomDarkening[selectedInchesHeightOutsideMountZebrablindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountZebrablindsRoomDarkening(lastSetPriceHeightOutsideMountZebrablindsRoomDarkening);

        const lastSetPriceHeightOutsideMountShangrilablindsRoomLightening = inchPricesHeightOutsideMountShangrilablindsRoomLightening[selectedInchesHeightOutsideMountShangrilablindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomLightening(lastSetPriceHeightOutsideMountShangrilablindsRoomLightening);

        const lastSetPriceHeightOutsideMountShangrilablindsRoomDarkening = inchPricesHeightOutsideMountShangrilablindsRoomDarkening[selectedInchesHeightOutsideMountShangrilablindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountShangrilablindsRoomDarkening(lastSetPriceHeightOutsideMountShangrilablindsRoomDarkening);

        const lastSetPriceHeightOutsideMountHoneycombBlindsRoomLightening = inchPricesHeightOutsideMountHoneycombBlindsRoomLightening[selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomLightening(lastSetPriceHeightOutsideMountHoneycombBlindsRoomLightening);

        const lastSetPriceHeightOutsideMountHoneycombBlindsRoomDarkening = inchPricesHeightOutsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountHoneycombBlindsRoomDarkening(lastSetPriceHeightOutsideMountHoneycombBlindsRoomDarkening);

        const lastSetPriceHeightOutsideMountNoDrillTypeBlindsRoomLightening = inchPricesHeightOutsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening(lastSetPriceHeightOutsideMountNoDrillTypeBlindsRoomLightening);

        const lastSetPriceHeightOutsideMountNoDrillTypeBlindsRoomDarkening = inchPricesHeightOutsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening(lastSetPriceHeightOutsideMountNoDrillTypeBlindsRoomDarkening);

        const lastSetPriceHeightOutsideMountRollerBlindsRoomLightening = inchPricesHeightOutsideMountRollerBlindsRoomLightening[selectedInchesHeightOutsideMountRollerBlindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomLightening(lastSetPriceHeightOutsideMountRollerBlindsRoomLightening);

        const lastSetPriceHeightOutsideMountRollerBlindsRoomDarkening = inchPricesHeightOutsideMountRollerBlindsRoomDarkening[selectedInchesHeightOutsideMountRollerBlindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening(lastSetPriceHeightOutsideMountRollerBlindsRoomDarkening);

        const lastSetPriceHeightOutsideMountRomanBlindsRoomLightening = inchPricesHeightOutsideMountRomanBlindsRoomLightening[selectedInchesHeightOutsideMountRomanBlindsRoomLightening];
        setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomLightening(lastSetPriceHeightOutsideMountRomanBlindsRoomLightening);

        const lastSetPriceHeightOutsideMountRomanBlindsRoomDarkening = inchPricesHeightOutsideMountRomanBlindsRoomDarkening[selectedInchesHeightOutsideMountRomanBlindsRoomDarkening];
        setnewSetPriceInchesHeightOutsideMountRomanBlindsRoomDarkening(lastSetPriceHeightOutsideMountRomanBlindsRoomDarkening);




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


          nameRomanBlindsRoomDarkening: `unique_${Date.now()}`,
          productName1RomanBlindsRoomDarkening: productName1RomanBlindsRoomDarkening,
          productName2RomanBlindsRoomDarkening: productName2RomanBlindsRoomDarkening,
          WandPriceCMSRomanBlindsRoomDarkening: WandPriceCMSRomanBlindsRoomDarkening,
          roomnameRomanBlindsRoomDarkening: roomnameRomanBlindsRoomDarkening,
          cordlesspriceCMSRomanBlindsRoomDarkening: cordlesspriceCMSRomanBlindsRoomDarkening,
          motorizedpriceCMSRomanBlindsRoomDarkening: motorizedpriceCMSRomanBlindsRoomDarkening,
          inchPricesAfterWidthInsideMountRomanBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthInsideMountRomanBlindsRoomDarkening),
          inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening),
          inchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening),
          inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening),



          nameRomanBlindsRoomLightening: `unique_${Date.now()}`,
          productName1RomanBlindsRoomLightening: productName1RomanBlindsRoomLightening,
          productName2RomanBlindsRoomLightening: productName2RomanBlindsRoomLightening,
          WandPriceCMSRomanBlindsRoomLightening: WandPriceCMSRomanBlindsRoomLightening,
          roomnameRomanBlindsRoomLightening: roomnameRomanBlindsRoomLightening,
          cordlesspriceCMSRomanBlindsRoomLightening: cordlesspriceCMSRomanBlindsRoomLightening,
          motorizedpriceCMSRomanBlindsRoomLightening: motorizedpriceCMSRomanBlindsRoomLightening,
          inchPricesAfterWidthInsideMountRomanBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthInsideMountRomanBlindsRoomLightening),
          inchPricesAfterHeightInsideMountRomanBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightInsideMountRomanBlindsRoomLightening),
          inchPricesAfterWidthOutsideMountRomanBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthOutsideMountRomanBlindsRoomLightening),
          inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening),


          nameRollerBlindsRoomDarkening: `unique_${Date.now()}`,
          productName1RollerBlindsRoomDarkening: productName1RollerBlindsRoomDarkening,
          productName2RollerBlindsRoomDarkening: productName2RollerBlindsRoomDarkening,
          WandPriceCMSRollerBlindsRoomDarkening: WandPriceCMSRollerBlindsRoomDarkening,
          roomnameRollerBlindsRoomDarkening: roomnameRollerBlindsRoomDarkening,
          cordlesspriceCMSRollerBlindsRoomDarkening: cordlesspriceCMSRollerBlindsRoomDarkening,
          motorizedpriceCMSRollerBlindsRoomDarkening: motorizedpriceCMSRollerBlindsRoomDarkening,
          inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening),
          inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening),
          inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening),
          inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening),


          nameRollerBlindsRoomLightening: `unique_${Date.now()}`,
          productName1RollerBlindsRoomLightening: productName1RollerBlindsRoomLightening,
          productName2RollerBlindsRoomLightening: productName2RollerBlindsRoomLightening,
          WandPriceCMSRollerBlindsRoomLightening: WandPriceCMSRollerBlindsRoomLightening,
          roomnameRollerBlindsRoomLightening: roomnameRollerBlindsRoomLightening,
          cordlesspriceCMSRollerBlindsRoomLightening: cordlesspriceCMSRollerBlindsRoomLightening,
          motorizedpriceCMSRollerBlindsRoomLightening: motorizedpriceCMSRollerBlindsRoomLightening,
          inchPricesAfterWidthInsideMountRollerBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthInsideMountRollerBlindsRoomLightening),
          inchPricesAfterHeightInsideMountRollerBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightInsideMountRollerBlindsRoomLightening),
          inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening),
          inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening),



          nameNoDrillTypeBlindsRoomDarkening: `unique_${Date.now()}`,
          productName1NoDrillTypeBlindsRoomDarkening: productName1NoDrillTypeBlindsRoomDarkening,
          productName2NoDrillTypeBlindsRoomDarkening: productName2NoDrillTypeBlindsRoomDarkening,
          WandPriceCMSNoDrillTypeBlindsRoomDarkening: WandPriceCMSNoDrillTypeBlindsRoomDarkening,
          roomnameNoDrillTypeBlindsRoomDarkening: roomnameNoDrillTypeBlindsRoomDarkening,
          cordlesspriceCMSNoDrillTypeBlindsRoomDarkening: cordlesspriceCMSNoDrillTypeBlindsRoomDarkening,
          motorizedpriceCMSNoDrillTypeBlindsRoomDarkening: motorizedpriceCMSNoDrillTypeBlindsRoomDarkening,
          inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening),
          inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening),
          inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening),
          inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening),


          nameNoDrillTypeBlindsRoomLightening: `unique_${Date.now()}`,
          productName1NoDrillTypeBlindsRoomLightening: productName1NoDrillTypeBlindsRoomLightening,
          productName2NoDrillTypeBlindsRoomLightening: productName2NoDrillTypeBlindsRoomLightening,
          WandPriceCMSNoDrillTypeBlindsRoomLightening: WandPriceCMSNoDrillTypeBlindsRoomLightening,
          roomnameNoDrillTypeBlindsRoomLightening: roomnameNoDrillTypeBlindsRoomLightening,
          cordlesspriceCMSNoDrillTypeBlindsRoomLightening: cordlesspriceCMSNoDrillTypeBlindsRoomLightening,
          motorizedpriceCMSNoDrillTypeBlindsRoomLightening: motorizedpriceCMSNoDrillTypeBlindsRoomLightening,
          inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening),
          inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening),
          inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening),
          inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening),



          nameHoneycombBlindsRoomDarkening: `unique_${Date.now()}`,
          productName1HoneycombBlindsRoomDarkening: productName1HoneycombBlindsRoomDarkening,
          productName2HoneycombBlindsRoomDarkening: productName2HoneycombBlindsRoomDarkening,
          WandPriceCMSHoneycombBlindsRoomDarkening: WandPriceCMSHoneycombBlindsRoomDarkening,
          roomnameHoneycombBlindsRoomDarkening: roomnameHoneycombBlindsRoomDarkening,
          cordlesspriceCMSHoneycombBlindsRoomDarkening: cordlesspriceCMSHoneycombBlindsRoomDarkening,
          motorizedpriceCMSHoneycombBlindsRoomDarkening: motorizedpriceCMSHoneycombBlindsRoomDarkening,
          inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening),
          inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening),
          inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening: JSON.stringify(inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening),
          inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening: JSON.stringify(inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening),



          nameHoneycombBlindsRoomLightening: `unique_${Date.now()}`,
          productName1HoneycombBlindsRoomLightening: productName1HoneycombBlindsRoomLightening,
          productName2HoneycombBlindsRoomLightening: productName2HoneycombBlindsRoomLightening,
          WandPriceCMSHoneycombBlindsRoomLightening: WandPriceCMSHoneycombBlindsRoomLightening,
          roomnameHoneycombBlindsRoomLightening: roomnameHoneycombBlindsRoomLightening,
          cordlesspriceCMSHoneycombBlindsRoomLightening: cordlesspriceCMSHoneycombBlindsRoomLightening,
          motorizedpriceCMSHoneycombBlindsRoomLightening: motorizedpriceCMSHoneycombBlindsRoomLightening,
          inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening),
          inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening),
          inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening: JSON.stringify(inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening),
          inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening: JSON.stringify(inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening),



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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountZebrablindsRoomLightening, index) => (
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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountZebrablindsRoomLightening, index) => (
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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountZebrablindsRoomDarkening, index) => (
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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountZebrablindsRoomDarkening, index) => (
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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountShangrilablindsRoomLightening, index) => (
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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountShangrilablindsRoomLightening, index) => (
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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountShangrilablindsRoomDarkening, index) => (
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
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountShangrilablindsRoomDarkening, index) => (
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





























          <span className={styles.section_group}>
            <div className={styles.section_tag}>
              <h1 className={styles.section_tag_title} >
                Section:
              </h1>
              <h1 className={styles.section_tag_branch}>
                ROMAN BLINDS (Room Lightening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>

                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange
                  ={(e) => setproductName1RomanBlindsRoomLightening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1RomanBlindsRoomLightening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2RomanBlindsRoomLightening(e.target.value)}
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
                  onChange={(e) => setroomnameRomanBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameRomanBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSRomanBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSRomanBlindsRoomLightening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSRomanBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSRomanBlindsRoomLightening}
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
                  onChange={(e) => setmotorizedpriceCMSRomanBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSRomanBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ROMAN BLINDS ROOM LIGHTENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountRomanBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountRomanBlindsRoomLightening(inchesWidthInsideMountRomanBlindsRoomLightening)}
                            className={`${selectedInchesWidthInsideMountRomanBlindsRoomLightening === inchesWidthInsideMountRomanBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountRomanBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountRomanBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountRomanBlindsRoomLightening}>
                        {selectedInchesWidthInsideMountRomanBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountRomanBlindsRoomLightening(selectedInchesWidthInsideMountRomanBlindsRoomLightening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountRomanBlindsRoomLightening[selectedInchesWidthInsideMountRomanBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthInsideMountRomanBlindsRoomLightening[selectedInchesWidthInsideMountRomanBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountRomanBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountRomanBlindsRoomLightening(inchesHeightInsideMountRomanBlindsRoomLightening)}
                            className={`${selectedInchesHeightInsideMountRomanBlindsRoomLightening === inchesHeightInsideMountRomanBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountRomanBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountRomanBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountRomanBlindsRoomLightening}>
                        {selectedInchesVisibleHeightInsideMountRomanBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountRomanBlindsRoomLightening(selectedInchesHeightInsideMountRomanBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountRomanBlindsRoomLightening[selectedInchesHeightInsideMountRomanBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightInsideMountRomanBlindsRoomLightening[selectedInchesHeightInsideMountRomanBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountRomanBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightInsideMountRomanBlindsRoomLightening
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
                  ROMAN BLINDS ROOM LIGHTENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountRomanBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountRomanBlindsRoomLightening(inchesWidthOutsideMountRomanBlindsRoomLightening)}
                            className={`${selectedInchesWidthOutsideMountRomanBlindsRoomLightening === inchesWidthOutsideMountRomanBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountRomanBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountRomanBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountRomanBlindsRoomLightening}>
                        {selectedInchesWidthOutsideMountRomanBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountRomanBlindsRoomLightening(selectedInchesWidthOutsideMountRomanBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountRomanBlindsRoomLightening[selectedInchesWidthOutsideMountRomanBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthOutsideMountRomanBlindsRoomLightening[selectedInchesWidthOutsideMountRomanBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountRomanBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountRomanBlindsRoomLightening(inchesHeightOutsideMountRomanBlindsRoomLightening)}
                            className={`${selectedInchesHeightOutsideMountRomanBlindsRoomLightening === inchesHeightOutsideMountRomanBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountRomanBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountRomanBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountRomanBlindsRoomLightening}>
                        {selectedInchesVisibleHeightOutsideMountRomanBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountRomanBlindsRoomLightening(selectedInchesHeightOutsideMountRomanBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening[selectedInchesHeightOutsideMountRomanBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightOutsideMountRomanBlindsRoomLightening[selectedInchesHeightOutsideMountRomanBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountRomanBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightOutsideMountRomanBlindsRoomLightening
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
                Roman Blinds (Room Darkening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1RomanBlindsRoomDarkening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1RomanBlindsRoomDarkening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2RomanBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2RomanBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameRomanBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameRomanBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSRomanBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSRomanBlindsRoomDarkening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSRomanBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSRomanBlindsRoomDarkening}
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
                  onChange={(e) => setmotorizedpriceCMSRomanBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSRomanBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ROMAN BLINDS ROOM DARKENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountRomanBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountRomanBlindsRoomDarkening(inchesWidthInsideMountRomanBlindsRoomDarkening)}
                            className={`${selectedInchesWidthInsideMountRomanBlindsRoomDarkening === inchesWidthInsideMountRomanBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountRomanBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountRomanBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountRomanBlindsRoomDarkening}>
                        {selectedInchesWidthInsideMountRomanBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountRomanBlindsRoomDarkening(selectedInchesWidthInsideMountRomanBlindsRoomDarkening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountRomanBlindsRoomDarkening[selectedInchesWidthInsideMountRomanBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthInsideMountRomanBlindsRoomDarkening[selectedInchesWidthInsideMountRomanBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountRomanBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountRomanBlindsRoomDarkening(inchesHeightInsideMountRomanBlindsRoomDarkening)}
                            className={`${selectedInchesHeightInsideMountRomanBlindsRoomDarkening === inchesHeightInsideMountRomanBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountRomanBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountRomanBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountRomanBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightInsideMountRomanBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountRomanBlindsRoomDarkening(selectedInchesHeightInsideMountRomanBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening[selectedInchesHeightInsideMountRomanBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightInsideMountRomanBlindsRoomDarkening[selectedInchesHeightInsideMountRomanBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountRomanBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightInsideMountRomanBlindsRoomDarkening
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
                  ROMAN BLINDS ROOM DARKENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountRomanBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountRomanBlindsRoomDarkening(inchesWidthOutsideMountRomanBlindsRoomDarkening)}
                            className={`${selectedInchesWidthOutsideMountRomanBlindsRoomDarkening === inchesWidthOutsideMountRomanBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountRomanBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountRomanBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountRomanBlindsRoomDarkening}>
                        {selectedInchesWidthOutsideMountRomanBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountRomanBlindsRoomDarkening(selectedInchesWidthOutsideMountRomanBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening[selectedInchesWidthOutsideMountRomanBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthOutsideMountRomanBlindsRoomDarkening[selectedInchesWidthOutsideMountRomanBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountRomanBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountRomanBlindsRoomDarkening(inchesHeightOutsideMountRomanBlindsRoomDarkening)}
                            className={`${selectedInchesHeightOutsideMountRomanBlindsRoomDarkening === inchesHeightOutsideMountRomanBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountRomanBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountRomanBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountRomanBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightOutsideMountRomanBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountRomanBlindsRoomDarkening(selectedInchesHeightOutsideMountRomanBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening[selectedInchesHeightOutsideMountRomanBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightOutsideMountRomanBlindsRoomDarkening[selectedInchesHeightOutsideMountRomanBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountRomanBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightOutsideMountRomanBlindsRoomDarkening
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
                Roller Blinds (Room Lightening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1RollerBlindsRoomLightening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1RollerBlindsRoomLightening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2RollerBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2RollerBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameRollerBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameRollerBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSRollerBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSRollerBlindsRoomLightening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSRollerBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSRollerBlindsRoomLightening}
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
                  onChange={(e) => setmotorizedpriceCMSRollerBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>
                

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSRollerBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ROLLER BLINDS ROOM LIGHTENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountRollerBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountRollerBlindsRoomLightening(inchesWidthInsideMountRollerBlindsRoomLightening)}
                            className={`${selectedInchesWidthInsideMountRollerBlindsRoomLightening === inchesWidthInsideMountRollerBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountRollerBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountRollerBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountRollerBlindsRoomLightening}>
                        {selectedInchesWidthInsideMountRollerBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountRollerBlindsRoomLightening(selectedInchesWidthInsideMountRollerBlindsRoomLightening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountRollerBlindsRoomLightening[selectedInchesWidthInsideMountRollerBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthInsideMountRollerBlindsRoomLightening[selectedInchesWidthInsideMountRollerBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountRollerBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountRollerBlindsRoomLightening(inchesHeightInsideMountRollerBlindsRoomLightening)}
                            className={`${selectedInchesHeightInsideMountRollerBlindsRoomLightening === inchesHeightInsideMountRollerBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountRollerBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountRollerBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountRollerBlindsRoomLightening}>
                        {selectedInchesVisibleHeightInsideMountRollerBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountRollerBlindsRoomLightening(selectedInchesHeightInsideMountRollerBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountRollerBlindsRoomLightening[selectedInchesHeightInsideMountRollerBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightInsideMountRollerBlindsRoomLightening[selectedInchesHeightInsideMountRollerBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountRollerBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightInsideMountRollerBlindsRoomLightening
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
                  ROLLER BLINDS ROOM LIGHTENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountRollerBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountRollerBlindsRoomLightening(inchesWidthOutsideMountRollerBlindsRoomLightening)}
                            className={`${selectedInchesWidthOutsideMountRollerBlindsRoomLightening === inchesWidthOutsideMountRollerBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountRollerBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountRollerBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountRollerBlindsRoomLightening}>
                        {selectedInchesWidthOutsideMountRollerBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountRollerBlindsRoomLightening(selectedInchesWidthOutsideMountRollerBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening[selectedInchesWidthOutsideMountRollerBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthOutsideMountRollerBlindsRoomLightening[selectedInchesWidthOutsideMountRollerBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountRollerBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountRollerBlindsRoomLightening(inchesHeightOutsideMountRollerBlindsRoomLightening)}
                            className={`${selectedInchesHeightOutsideMountRollerBlindsRoomLightening === inchesHeightOutsideMountRollerBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountRollerBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountRollerBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountRollerBlindsRoomLightening}>
                        {selectedInchesVisibleHeightOutsideMountRollerBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountRollerBlindsRoomLightening(selectedInchesHeightOutsideMountRollerBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening[selectedInchesHeightOutsideMountRollerBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightOutsideMountRollerBlindsRoomLightening[selectedInchesHeightOutsideMountRollerBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountRollerBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightOutsideMountRollerBlindsRoomLightening
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
                Roller Blinds (Room Darkening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1RollerBlindsRoomDarkening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1RollerBlindsRoomDarkening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2RollerBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2RollerBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameRollerBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameRollerBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSRollerBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSRollerBlindsRoomDarkening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSRollerBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSRollerBlindsRoomDarkening}
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
                  onChange={(e) => setmotorizedpriceCMSRollerBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSRollerBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  ROLLER BLINDS ROOM DARKENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountRollerBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountRollerBlindsRoomDarkening(inchesWidthInsideMountRollerBlindsRoomDarkening)}
                            className={`${selectedInchesWidthInsideMountRollerBlindsRoomDarkening === inchesWidthInsideMountRollerBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountRollerBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountRollerBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountRollerBlindsRoomDarkening}>
                        {selectedInchesWidthInsideMountRollerBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountRollerBlindsRoomDarkening(selectedInchesWidthInsideMountRollerBlindsRoomDarkening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening[selectedInchesWidthInsideMountRollerBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthInsideMountRollerBlindsRoomDarkening[selectedInchesWidthInsideMountRollerBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountRollerBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountRollerBlindsRoomDarkening(inchesHeightInsideMountRollerBlindsRoomDarkening)}
                            className={`${selectedInchesHeightInsideMountRollerBlindsRoomDarkening === inchesHeightInsideMountRollerBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountRollerBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountRollerBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountRollerBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightInsideMountRollerBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountRollerBlindsRoomDarkening(selectedInchesHeightInsideMountRollerBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[selectedInchesHeightInsideMountRollerBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightInsideMountRollerBlindsRoomDarkening[selectedInchesHeightInsideMountRollerBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightInsideMountRollerBlindsRoomDarkening
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
                  ROLLER BLINDS ROOM DARKENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountRollerBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountRollerBlindsRoomDarkening(inchesWidthOutsideMountRollerBlindsRoomDarkening)}
                            className={`${selectedInchesWidthOutsideMountRollerBlindsRoomDarkening === inchesWidthOutsideMountRollerBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountRollerBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountRollerBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountRollerBlindsRoomDarkening}>
                        {selectedInchesWidthOutsideMountRollerBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountRollerBlindsRoomDarkening(selectedInchesWidthOutsideMountRollerBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening[selectedInchesWidthOutsideMountRollerBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthOutsideMountRollerBlindsRoomDarkening[selectedInchesWidthOutsideMountRollerBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountRollerBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountRollerBlindsRoomDarkening(inchesHeightOutsideMountRollerBlindsRoomDarkening)}
                            className={`${selectedInchesHeightOutsideMountRollerBlindsRoomDarkening === inchesHeightOutsideMountRollerBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountRollerBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountRollerBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountRollerBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightOutsideMountRollerBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountRollerBlindsRoomDarkening(selectedInchesHeightOutsideMountRollerBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[selectedInchesHeightOutsideMountRollerBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightOutsideMountRollerBlindsRoomDarkening[selectedInchesHeightOutsideMountRollerBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightOutsideMountRollerBlindsRoomDarkening
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
                Hoeycomb Blinds (Room Lightening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1HoneycombBlindsRoomLightening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1HoneycombBlindsRoomLightening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2HoneycombBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2HoneycombBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameHoneycombBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameHoneycombBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSHoneycombBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSHoneycombBlindsRoomLightening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSHoneycombBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSHoneycombBlindsRoomLightening}
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
                  onChange={(e) => setmotorizedpriceCMSHoneycombBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSHoneycombBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  HONEYCOMB BLINDS ROOM LIGHTENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountHoneycombBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountHoneycombBlindsRoomLightening(inchesWidthInsideMountHoneycombBlindsRoomLightening)}
                            className={`${selectedInchesWidthInsideMountHoneycombBlindsRoomLightening === inchesWidthInsideMountHoneycombBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountHoneycombBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountHoneycombBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountHoneycombBlindsRoomLightening}>
                        {selectedInchesWidthInsideMountHoneycombBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountHoneycombBlindsRoomLightening(selectedInchesWidthInsideMountHoneycombBlindsRoomLightening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening[selectedInchesWidthInsideMountHoneycombBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthInsideMountHoneycombBlindsRoomLightening[selectedInchesWidthInsideMountHoneycombBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountHoneycombBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountHoneycombBlindsRoomLightening(inchesHeightInsideMountHoneycombBlindsRoomLightening)}
                            className={`${selectedInchesHeightInsideMountHoneycombBlindsRoomLightening === inchesHeightInsideMountHoneycombBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountHoneycombBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountHoneycombBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountHoneycombBlindsRoomLightening}>
                        {selectedInchesVisibleHeightInsideMountHoneycombBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountHoneycombBlindsRoomLightening(selectedInchesHeightInsideMountHoneycombBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening[selectedInchesHeightInsideMountHoneycombBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightInsideMountHoneycombBlindsRoomLightening[selectedInchesHeightInsideMountHoneycombBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountHoneycombBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightInsideMountHoneycombBlindsRoomLightening
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
                  HONEYCOMB BLINDS ROOM LIGHTENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountHoneycombBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountHoneycombBlindsRoomLightening(inchesWidthOutsideMountHoneycombBlindsRoomLightening)}
                            className={`${selectedInchesWidthOutsideMountHoneycombBlindsRoomLightening === inchesWidthOutsideMountHoneycombBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountHoneycombBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountHoneycombBlindsRoomLightening}>
                        {selectedInchesWidthOutsideMountHoneycombBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountHoneycombBlindsRoomLightening(selectedInchesWidthOutsideMountHoneycombBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening[selectedInchesWidthOutsideMountHoneycombBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthOutsideMountHoneycombBlindsRoomLightening[selectedInchesWidthOutsideMountHoneycombBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountHoneycombBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountHoneycombBlindsRoomLightening(inchesHeightOutsideMountHoneycombBlindsRoomLightening)}
                            className={`${selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening === inchesHeightOutsideMountHoneycombBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountHoneycombBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountHoneycombBlindsRoomLightening}>
                        {selectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountHoneycombBlindsRoomLightening(selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening[selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightOutsideMountHoneycombBlindsRoomLightening[selectedInchesHeightOutsideMountHoneycombBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountHoneycombBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightOutsideMountHoneycombBlindsRoomLightening
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
                HoneyComb Blinds (Room Darkening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1HoneycombBlindsRoomDarkening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1HoneycombBlindsRoomDarkening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2HoneycombBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2HoneycombBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameHoneycombBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameHoneycombBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSHoneycombBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSHoneycombBlindsRoomDarkening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSHoneycombBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSHoneycombBlindsRoomDarkening}
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
                  onChange={(e) => setmotorizedpriceCMSHoneycombBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSHoneycombBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  HONEYCOMB BLINDS ROOM DARKENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountHoneycombBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountHoneycombBlindsRoomDarkening(inchesWidthInsideMountHoneycombBlindsRoomDarkening)}
                            className={`${selectedInchesWidthInsideMountHoneycombBlindsRoomDarkening === inchesWidthInsideMountHoneycombBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountHoneycombBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountHoneycombBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountHoneycombBlindsRoomDarkening}>
                        {selectedInchesWidthInsideMountHoneycombBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountHoneycombBlindsRoomDarkening(selectedInchesWidthInsideMountHoneycombBlindsRoomDarkening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening[selectedInchesWidthInsideMountHoneycombBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthInsideMountHoneycombBlindsRoomDarkening[selectedInchesWidthInsideMountHoneycombBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountHoneycombBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountHoneycombBlindsRoomDarkening(inchesHeightInsideMountHoneycombBlindsRoomDarkening)}
                            className={`${selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening === inchesHeightInsideMountHoneycombBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountHoneycombBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountHoneycombBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountHoneycombBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightInsideMountHoneycombBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountHoneycombBlindsRoomDarkening(selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightInsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightInsideMountHoneycombBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountHoneycombBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightInsideMountHoneycombBlindsRoomDarkening
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
                  HONEYCOMB BLINDS ROOM DARKENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountHoneycombBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountHoneycombBlindsRoomDarkening(inchesWidthOutsideMountHoneycombBlindsRoomDarkening)}
                            className={`${selectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening === inchesWidthOutsideMountHoneycombBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountHoneycombBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountHoneycombBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountHoneycombBlindsRoomDarkening}>
                        {selectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountHoneycombBlindsRoomDarkening(selectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening[selectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthOutsideMountHoneycombBlindsRoomDarkening[selectedInchesWidthOutsideMountHoneycombBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountHoneycombBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountHoneycombBlindsRoomDarkening(inchesHeightOutsideMountHoneycombBlindsRoomDarkening)}
                            className={`${selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening === inchesHeightOutsideMountHoneycombBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountHoneycombBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountHoneycombBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightOutsideMountHoneycombBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountHoneycombBlindsRoomDarkening(selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightOutsideMountHoneycombBlindsRoomDarkening[selectedInchesHeightOutsideMountHoneycombBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountHoneycombBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightOutsideMountHoneycombBlindsRoomDarkening
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
                No Drill Type Blinds (Room Lightening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1NoDrillTypeBlindsRoomLightening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1NoDrillTypeBlindsRoomLightening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2NoDrillTypeBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2NoDrillTypeBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameNoDrillTypeBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameNoDrillTypeBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSNoDrillTypeBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSNoDrillTypeBlindsRoomLightening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSNoDrillTypeBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSNoDrillTypeBlindsRoomLightening}
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
                  onChange={(e) => setmotorizedpriceCMSNoDrillTypeBlindsRoomLightening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSNoDrillTypeBlindsRoomLightening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  NO DRILL TYPE BLINDS ROOM LIGHTENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountNoDrillTypeBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountNoDrillTypeBlindsRoomLightening(inchesWidthInsideMountNoDrillTypeBlindsRoomLightening)}
                            className={`${selectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening === inchesWidthInsideMountNoDrillTypeBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountNoDrillTypeBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountNoDrillTypeBlindsRoomLightening}>
                        {selectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountNoDrillTypeBlindsRoomLightening(selectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening[selectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomLightening[selectedInchesWidthInsideMountNoDrillTypeBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountNoDrillTypeBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountNoDrillTypeBlindsRoomLightening(inchesHeightInsideMountNoDrillTypeBlindsRoomLightening)}
                            className={`${selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening === inchesHeightInsideMountNoDrillTypeBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountNoDrillTypeBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountNoDrillTypeBlindsRoomLightening}>
                        {selectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomLightening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountNoDrillTypeBlindsRoomLightening(selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomLightening
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
                  NO DRILL TYPE BLINDS ROOM LIGHTENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountNoDrillTypeBlindsRoomLightening(inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening)}
                            className={`${selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening === inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountNoDrillTypeBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountNoDrillTypeBlindsRoomLightening}>
                        {selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountNoDrillTypeBlindsRoomLightening(selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening[selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening] !== undefined
                          ? inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomLightening[selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomLightening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountNoDrillTypeBlindsRoomLightening(inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening)}
                            className={`${selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening === inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountNoDrillTypeBlindsRoomLightening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomLightening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountNoDrillTypeBlindsRoomLightening}>
                        {selectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomLightening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountNoDrillTypeBlindsRoomLightening(selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening] !== undefined
                          ? inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomLightening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening !== undefined
                          ? newSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomLightening
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
                No Drill Type Blinds (Room Darkening)
              </h1>
            </div>

            <div className={styles.cmspanel_wrapper}>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setproductName1NoDrillTypeBlindsRoomDarkening(e.target.value)}
                />

                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <h1 className={styles.key_locker1}>{postData && postData.productName1NoDrillTypeBlindsRoomDarkening}
                </h1>

              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange

                  ={(e) => setproductName2NoDrillTypeBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.productName2NoDrillTypeBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Room Name:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setroomnameNoDrillTypeBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.roomnameNoDrillTypeBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Wand Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setWandPriceCMSNoDrillTypeBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>

                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.WandPriceCMSNoDrillTypeBlindsRoomDarkening}
                  </h1>
                </div>
              </div>


              <div className={styles.cms_panel_section}>
                <label className={styles.cms_panel_label}>Change Cordless Price:</label>
                <input
                  className={styles.cms_panel_input_box}
                  type="text"
                  onChange={(e) => setcordlesspriceCMSNoDrillTypeBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.cordlesspriceCMSNoDrillTypeBlindsRoomDarkening}
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
                  onChange={(e) => setmotorizedpriceCMSNoDrillTypeBlindsRoomDarkening(e.target.value)}
                />


                <label className={styles.cms_panel_label}>
                  Entered Value
                </label>

                <label className={styles.cms_panel_label}>
                  Last Entered Value
                </label>


                <div className={styles.key_locker2}>
                  <h1 >{postData && postData.motorizedpriceCMSNoDrillTypeBlindsRoomDarkening}
                  </h1>
                </div>
              </div>

              <div className={styles.cms_panel_section_ruler_numbers_wrapper_WRAPPER}>

                <div className={styles.cms_panel_section_ruler_numbers_first_title}>
                  NO DRILL TYPE BLINDS ROOM DARKENING / INSIDE MOUNT
                </div>

                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>
                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthInsideMountNoDrillTypeBlindsRoomDarkening(inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening)}
                            className={`${selectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening === inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthInsideMountNoDrillTypeBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>

                    {selectedInchesVisibleWidthInsideMountNoDrillTypeBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMountNoDrillTypeBlindsRoomDarkening}>
                        {selectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthInsideMountNoDrillTypeBlindsRoomDarkening(selectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening, e.target.value)}
                    />



                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthInsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesWidthInsideMountNoDrillTypeBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightInsideMountNoDrillTypeBlindsRoomDarkening(inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening)}
                            className={`${selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening === inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightInsideMountNoDrillTypeBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightInsideMountNoDrillTypeBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightInsideMountNoDrillTypeBlindsRoomDarkening}
                      </span>
                    ) : null}


                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightInsideMountNoDrillTypeBlindsRoomDarkening(selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightInsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>

                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightInsideMountNoDrillTypeBlindsRoomDarkening
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
                  NO DRILL TYPE BLINDS ROOM DARKENING / OUTSIDE MOUNT
                </div>


                <div className={styles.cms_panel_section_ruler_numbers_wrapper}>


                  <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>

                    <label className={styles.cms_panel_label}>
                      Width
                    </label>

                    <div className={styles.span_visibility_1_wrapper}>
                      <span className={styles.span_visibility_1}>
                        {["22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"].map((inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedWidthOutsideMountNoDrillTypeBlindsRoomDarkening(inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening)}
                            className={`${selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening === inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleWidthOutsideMountNoDrillTypeBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMountNoDrillTypeBlindsRoomDarkening}>
                        {selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeWidthOutsideMountNoDrillTypeBlindsRoomDarkening(selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>

                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterWidthOutsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesWidthOutsideMountNoDrillTypeBlindsRoomDarkening]
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
                        {["24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120"].map((inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening, index) => (
                          <div
                            key={index}
                            onClick={() => handleScrolledInchesWhenClickedHeightOutsideMountNoDrillTypeBlindsRoomDarkening(inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening)}
                            className={`${selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening === inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening ? styles.selectedInch : ''} ${styles.numberStyle}`}
                          >
                            {inchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening}
                          </div>
                        ))}
                      </span>
                    </div>


                    {selectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomDarkening ? (
                      <span className={styles._scroller_div_span} onClick={handleNewSpanClickedHeightOutsideMountNoDrillTypeBlindsRoomDarkening}>
                        {selectedInchesVisibleHeightOutsideMountNoDrillTypeBlindsRoomDarkening}
                      </span>
                    ) : null}

                    <div className={styles.enter_a_price}>
                      Enter Price
                    </div>

                    <input
                      className={styles.cms_panel_input_box_ruler_number}
                      type="number"
                      onChange={(e) => handleInchPriceChangeHeightOutsideMountNoDrillTypeBlindsRoomDarkening(selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening, e.target.value)}
                    />

                    <div className={styles.live_display}>
                      Live Display
                    </div>


                    <div className={styles.show_price_ruler_number}>
                      <h1>
                        ${inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening] !== undefined
                          ? inchPricesAfterHeightOutsideMountNoDrillTypeBlindsRoomDarkening[selectedInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening]
                          : ""}
                      </h1>
                    </div>

                    <div className={styles.previously_entered_price}>
                      Price Before
                    </div>


                    <div className={styles.show_price_ruler_number_green}>
                      <h1>
                        ${newSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening !== undefined
                          ? newSetPriceInchesHeightOutsideMountNoDrillTypeBlindsRoomDarkening
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