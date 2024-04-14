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
  const [productName1, setProductName1] = useState("");
  const [productName2, setProductName2] = useState("");
  const [roomname, setroomname] = useState("");
  const [WandPriceCMS, setWandPriceCMS] = useState("");
  const [cordlesspriceCMS, setcordlesspriceCMS] = useState("");
  const [motorizedpriceCMS, setmotorizedpriceCMS] = useState("");

  const [inchPricesAfterWidthInsideMount, setinchPricesAfterWidthInsideMount] = useState({});
  const [inchPricesAfterHeightInsideMount, setinchPricesAfterHeightInsideMount] = useState({});
  const [inchPricesAfterWidthOutsideMount, setinchPricesAfterWidthOutsideMount] = useState({});
  const [inchPricesAfterHeightOutsideMount, setinchPricesAfterHeightOutsideMount] = useState({});

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const scrollableDivRefInchesWidthInsideMount = useRef();
  const scrollableDivRefInchesHeightInsideMount = useRef();
  const scrollableDivRefInchesWidthOutsideMount = useRef();
  const scrollableDivRefInchesHeightOutsideMount = useRef();

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthInsideMount.current:", scrollableDivRefInchesWidthInsideMount.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightInsideMount.current:", scrollableDivRefInchesHeightInsideMount.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesWidthOutsideMount.current:", scrollableDivRefInchesWidthOutsideMount.current);
  }, []);

  useEffect(() => {
    console.log("scrollableDivRefInchesHeightOutsideMount.current:", scrollableDivRefInchesHeightOutsideMount.current);
  }, []);

  const [selectedInchesWidthInsideMount, setselectedInchesWidthInsideMount] = useState(null);
  const [selectedInchesHeightInsideMount, setselectedInchesHeightInsideMount] = useState(null);
  const [selectedInchesWidthOutsideMount, setselectedInchesWidthOutsideMount] = useState(null);
  const [selectedInchesHeightOutsideMount, setselectedInchesHeightOutsideMount] = useState(null);

  const [selectedInchesVisibleWidthInsideMount, setselectedInchesVisibleWidthInsideMount] = useState(true);
  const [selectedInchesVisibleHeightInsideMount, setselectedInchesVisibleHeightInsideMount] = useState(true);
  const [selectedInchesVisibleWidthOutsideMount, setselectedInchesVisibleWidthOutsideMount] = useState(true);
  const [selectedInchesVisibleHeightOutsideMount, setselectedInchesVisibleHeightOutsideMount] = useState(true);

  const [newSetPriceInchesWidthInsideMount, setnewSetPriceInchesWidthInsideMount] = useState(null);
  const [newSetPriceInchesHeightInsideMount, setnewSetPriceInchesHeightInsideMount] = useState(null);
  const [newSetPriceInchesWidthOutsideMount, setnewSetPriceInchesWidthOutsideMount] = useState(null);
  const [newSetPriceInchesHeightOutsideMount, setnewSetPriceInchesHeightOutsideMount] = useState(null);


  const [selectedInchWidthInsideMount, setselectedInchWidthInsideMount] = useState(null);
  const [selectedInchHeightInsideMount, setselectedInchHeightInsideMount] = useState(null);
  const [selectedInchWidthOutsideMount, setselectedInchWidthOutsideMount] = useState(null);
  const [selectedInchHeightOutsideMount, setselectedInchHeightOutsideMount] = useState(null);

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthInsideMount = (inchesWidthInsideMount) => {
    setselectedInchesWidthInsideMount(inchesWidthInsideMount);
    setselectedInchesVisibleWidthInsideMount(false);
    setselectedInchWidthInsideMount(inchesWidthInsideMount);

    const scrollableDivInchesdWidthInsideMount = scrollableDivRefInchesWidthInsideMount.current;

    if (scrollableDivInchesdWidthInsideMount) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMount = scrollableDivInchesdWidthInsideMount.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthInsideMount) {
          const selectedInchesDivRectWidthInsideMount = selectedInchesDivdWidthInsideMount.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthInsideMount.top +
            scrollableDivInchesdWidthInsideMount.scrollTop -
            (scrollableDivInchesdWidthInsideMount.offsetHeight - selectedInchesDivRectWidthInsideMount.height) / 2;

          scrollableDivInchesdWidthInsideMount.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthInsideMount = (inchesWidthInsideMount, price) => {
    const updatedInchPricesWidthInsideMount = { ...inchPricesAfterWidthInsideMount, [inchesWidthInsideMount]: parseFloat(price) };
    setinchPricesAfterWidthInsideMount(updatedInchPricesWidthInsideMount);
  };

  const handleNewSpanClickedWidthInsideMount = () => {
    setselectedInchesVisibleWidthInsideMount((prev) => !prev);
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightInsideMount = (selectedInchesHeightInsideMount, newPriceHeightInsideMount) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightInsideMount);
    console.log("New price:", newPriceHeightInsideMount);

    setinchPricesAfterHeightInsideMount(prevPricesHeightInsideMount => {
      const updatedPricesHeightInsideMount = { ...prevPricesHeightInsideMount };
      updatedPricesHeightInsideMount[selectedInchesHeightInsideMount] = parseFloat(newPriceHeightInsideMount);
      return updatedPricesHeightInsideMount;
    });
  };


  const handleScrolledInchesWhenClickedHeightInsideMount = (inchesHeightInsideMount) => {
    setselectedInchesHeightInsideMount(inchesHeightInsideMount);

    if (inchesHeightInsideMount % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightInsideMount);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightInsideMount);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceHeightInsideMount = inchPricesAfterHeightInsideMount[inchesHeightInsideMount];
    setnewSetPriceInchesHeightInsideMount(newSetPriceHeightInsideMount !== undefined ? newSetPriceHeightInsideMount : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceHeightInsideMount === undefined && inchesHeightInsideMount % 5 !== 0) {
      let prevInchHeightInsideMount = inchesHeightInsideMount - 1;
      while (prevInchHeightInsideMount % 5 !== 0) {
        prevInchHeightInsideMount--;
      }

      const nearestMultipleOf5PriceHeightInsideMount = inchPricesAfterHeightInsideMount[prevInchHeightInsideMount];
      setnewSetPriceInchesHeightInsideMount(nearestMultipleOf5PriceHeightInsideMount !== undefined ? nearestMultipleOf5PriceHeightInsideMount : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceHeightInsideMount);
      let nextInchHeightInsideMount = prevInchHeightInsideMount + 1;
      while (nextInchHeightInsideMount < inchesHeightInsideMount) {
        nextInchHeightInsideMount++;
      }

    } else if (inchesHeightInsideMount % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightInsideMount[inchesHeightInsideMount]);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleScrolledInchesWhenClickedWidthOutsideMount = (inchesWidthOutsideMount) => {
    setselectedInchesWidthOutsideMount(inchesWidthOutsideMount);
    setselectedInchesVisibleWidthOutsideMount(false);
    setselectedInchWidthOutsideMount(inchesWidthOutsideMount);

    const scrollableDivInchesWidthOutsideMount = scrollableDivRefInchesWidthOutsideMount.current;

    if (scrollableDivInchesWidthOutsideMount) {
      setTimeout(() => {
        const selectedInchesDivWidthOutsideMount = scrollableDivInchesWidthOutsideMount.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivWidthOutsideMount) {
          const selectedInchesDivRectWidthOutsideMount = selectedInchesDivWidthOutsideMount.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMount.top +
            scrollableDivInchesWidthOutsideMount.scrollTop -
            (scrollableDivInchesWidthOutsideMount.offsetHeight - selectedInchesDivRectWidthOutsideMount.height) / 2;

          scrollableDivInchesWidthOutsideMount.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  const handleInchPriceChangeWidthOutsideMount = (inchesWidthOutsideMount, price) => {
    const updatedInchPricesWidthOutsideMount = { ...inchPricesAfterWidthInsideMount, [inchesWidthOutsideMount]: parseFloat(price) };
    setinchPricesAfterWidthInsideMount(updatedInchPricesWidthOutsideMount);
  };

  const handleNewSpanClickedWidthOutsideMount = () => {
    setselectedInchesVisibleWidthOutsideMount((prev) => !prev);
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeHeightOutsideMount = (selectedInchesHeightOutsideMount, newPriceHeightOutsideMount) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesHeightOutsideMount);
    console.log("New price:", newPriceHeightOutsideMount);

    setinchPricesAfterHeightOutsideMount(prevPricesHeightOutsideMount => {
      const updatedPricesHeightOutsideMount = { ...prevPricesHeightOutsideMount };
      updatedPricesHeightOutsideMount[selectedInchesHeightOutsideMount] = parseFloat(newPriceHeightOutsideMount);
      return updatedPricesHeightOutsideMount;
    });
  };


  const handleScrolledInchesWhenClickedHeightOutsideMount = (inchesHeightOutsideMount) => {
    setselectedInchesHeightOutsideMount(inchesHeightOutsideMount);

    if (inchesHeightOutsideMount % 5 === 0) {
      // Log when a multiple of 5 is clicked
      console.log("Selected multiple of 5:", inchesHeightOutsideMount);
    } else {
      // Log when a subsequent number of a multiple of 5 is clicked
      console.log("Selected subsequent number of multiple of 5:", inchesHeightOutsideMount);
    }

    // Retrieve the price associated with the selected inch
    const newSetPriceinchesHeightOutsideMount = inchPricesAfterHeightOutsideMount[inchesHeightOutsideMount];
    setnewSetPriceInchesHeightOutsideMount(newSetPriceinchesHeightOutsideMount !== undefined ? newSetPriceinchesHeightOutsideMount : "");

    // If the selected inch is not a multiple of 5, find the nearest multiple of 5 and display its price
    if (newSetPriceinchesHeightOutsideMount === undefined && inchesHeightOutsideMount % 5 !== 0) {
      let prevInchinchesHeightOutsideMount = inchesHeightOutsideMount - 1;
      while (prevInchinchesHeightOutsideMount % 5 !== 0) {
        prevInchinchesHeightOutsideMount--;
      }

      const nearestMultipleOf5PriceinchesHeightOutsideMount = inchPricesAfterHeightOutsideMount[prevInchinchesHeightOutsideMount];
      setnewSetPriceInchesHeightOutsideMount(nearestMultipleOf5PriceinchesHeightOutsideMount !== undefined ? nearestMultipleOf5PriceinchesHeightOutsideMount : "");

      console.log("Price for subsequent numbers of multiple of 5:", nearestMultipleOf5PriceinchesHeightOutsideMount);
      let nextInchHeightOutsideMount = prevInchinchesHeightOutsideMount + 1;
      while (nextInchHeightOutsideMount < inchesHeightOutsideMount) {
        nextInchHeightOutsideMount++;
      }

    } else if (inchesHeightOutsideMount % 5 === 0) {
      // Log the price of the multiple of 5 when clicked
      console.log("Price for multiple of 5:", inchPricesAfterHeightOutsideMount[inchesHeightOutsideMount]);
    }
  };


  ////////////////////////////////////////////////////////////////////////////////////////////////

  const fetchLatestData = async () => {
    try {
      const response = await fetch("/api/getLatestData");
      const result = await response.json();
      const latestData = result.data;

      if (latestData) {
        setProductName1(latestData.productName1 || "");
        setProductName2(latestData.productName2 || "");
        setroomname(latestData.roomname || "");
        setWandPriceCMS(latestData.WandPriceCMS || "");
        setcordlesspriceCMS(latestData.cordlesspriceCMS || "");
        setmotorizedpriceCMS(latestData.motorizedpriceCMS || "");


        const inchPricesWidthInsideMount = JSON.parse(latestData.inchPricesAfterWidthInsideMount || "{}");

        setinchPricesAfterWidthInsideMount(inchPricesWidthInsideMount);

        const inchPricesWidthOutsideMount = JSON.parse(latestData.inchPricesAfterWidthOutsideMount || "{}");
        setinchPricesAfterWidthOutsideMount(inchPricesWidthOutsideMount);

        const inchPricesHeightInsideMount = JSON.parse(latestData.inchPricesAfterHeightInsideMount || "{}");
        setinchPricesAfterHeightInsideMount(inchPricesHeightInsideMount);

        const inchPricesHeightOutsideMount = JSON.parse(latestData.inchPricesAfterHeightOutsideMount || "{}");
        setinchPricesAfterHeightOutsideMount(inchPricesHeightOutsideMount);


        const lastSetPriceWidthInsideMount = inchPricesWidthInsideMount[selectedInchesWidthInsideMount];
        setnewSetPriceInchesWidthInsideMount(lastSetPriceWidthInsideMount);

        const lastSetPriceWidthOutsideMount = inchPricesWidthOutsideMount[selectedInchesWidthOutsideMount];
        setnewSetPriceInchesWidthOutsideMount(lastSetPriceWidthOutsideMount);

        const lastSetPriceHeightInsideMount = inchPricesHeightInsideMount[selectedInchesHeightInsideMount];
        setnewSetPriceInchesHeightInsideMount(lastSetPriceHeightInsideMount);

        const lastSetPriceHeightOutsideMount = inchPricesHeightOutsideMount[selectedInchesHeightOutsideMount];
        setnewSetPriceInchesHeightOutsideMount(lastSetPriceHeightOutsideMount);

      }
    } catch (error) {
      console.error("Error fetching latest data:", error);
    }
  };


  useEffect(() => {
    fetchLatestData();
  }, []);


  const handleSaveOptions = async () => {
    try {
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
          inchPricesAfterWidthInsideMount: JSON.stringify(inchPricesAfterWidthInsideMount, (key, value) => {
            return value;
          }),
          inchPricesAfterHeightInsideMount: JSON.stringify(inchPricesAfterHeightInsideMount, (key, value) => {
            return value;
          }),
          inchPricesAfterWidthOutsideMount: JSON.stringify(inchPricesAfterWidthOutsideMount, (key, value) => {
            return value;
          }),
          inchPricesAfterHeightOutsideMount: JSON.stringify(inchPricesAfterHeightOutsideMount, (key, value) => {
            return value;
          }),
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);

        updateData && updateData(result.data);
      }
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
            <button className={styles.save_button} onClick={handleSaveOptions}>
              Save
            </button>
            <Image
              className={styles.arrowdowngreencircle}
              alt="arrowdowngreencircle"
              src={"/arrowdowngreencircle.png"}
              width={500}
              height={500}
            ></Image>
          </div>

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
                onChange={(e) => setProductName1(e.target.value)}
              />

              <label className={styles.cms_panel_label}>
                Entered Value
              </label>

              <label className={styles.cms_panel_label}>
                Last Entered Value
              </label>

              <h1 className={styles.key_locker1}>{postData && postData.productName1}
              </h1>

            </div>

            <div className={styles.cms_panel_section}>
              <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
              <input
                className={styles.cms_panel_input_box}
                type="text"
                onChange

                ={(e) => setProductName2(e.target.value)}
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
                onChange={(e) => setroomname(e.target.value)}
              />


              <label className={styles.cms_panel_label}>
                Entered Value
              </label>

              <label className={styles.cms_panel_label}>
                Last Entered Value
              </label>

              <div className={styles.key_locker2}>
                <h1 >{postData && postData.roomname}
                </h1>
              </div>
            </div>

            <div className={styles.cms_panel_section}>
              <label className={styles.cms_panel_label}>Change Wand Price:</label>
              <input
                className={styles.cms_panel_input_box}
                type="text"
                onChange={(e) => setWandPriceCMS(e.target.value)}
              />


              <label className={styles.cms_panel_label}>
                Entered Value
              </label>

              <label className={styles.cms_panel_label}>
                Last Entered Value
              </label>

              <div className={styles.key_locker2}>
                <h1 >{postData && postData.WandPriceCMS}
                </h1>
              </div>
            </div>


            <div className={styles.cms_panel_section}>
              <label className={styles.cms_panel_label}>Change Cordless Price:</label>
              <input
                className={styles.cms_panel_input_box}
                type="text"
                onChange={(e) => setcordlesspriceCMS(e.target.value)}
              />


              <label className={styles.cms_panel_label}>
                Entered Value
              </label>

              <label className={styles.cms_panel_label}>
                Last Entered Value
              </label>


              <div className={styles.key_locker2}>
                <h1 >{postData && postData.cordlesspriceCMS}
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
                onChange={(e) => setmotorizedpriceCMS(e.target.value)}
              />


              <label className={styles.cms_panel_label}>
                Entered Value
              </label>

              <label className={styles.cms_panel_label}>
                Last Entered Value
              </label>


              <div className={styles.key_locker2}>
                <h1 >{postData && postData.motorizedpriceCMS}
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
                      {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesWidthInsideMount, index) => (
                        <div
                          key={index}
                          onClick={() => handleScrolledInchesWhenClickedWidthInsideMount(inchesWidthInsideMount)}
                          className={`${selectedInchesWidthInsideMount === inchesWidthInsideMount ? styles.selectedInch : ''} ${styles.numberStyle}`}
                        >
                          {inchesWidthInsideMount}
                        </div>
                      ))}
                    </span>
                  </div>

                  {selectedInchesVisibleWidthInsideMount ? (
                    <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthInsideMount}>
                      {selectedInchesWidthInsideMount}
                    </span>
                  ) : null}


                  <div className={styles.enter_a_price}>
                    Enter Price
                  </div>

                  <input
                    className={styles.cms_panel_input_box_ruler_number}
                    type="number"
                    onChange={(e) => handleInchPriceChangeWidthInsideMount(selectedInchesWidthInsideMount, e.target.value)}
                  />



                  <div className={styles.live_display}>
                    Live Display
                  </div>

                  <div className={styles.show_price_ruler_number}>
                    <h1>
                      ${inchPricesAfterWidthInsideMount[selectedInchesWidthInsideMount] !== undefined
                        ? inchPricesAfterWidthInsideMount[selectedInchesWidthInsideMount]
                        : ""}
                    </h1>
                  </div>

                  <div className={styles.previously_entered_price}>
                    Price Before
                  </div>

                  <div className={styles.show_price_ruler_number_green}>
                    <h1></h1>
                  </div>

                </div>

                <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                  <label className={styles.cms_panel_label}>
                    Height
                  </label>

                  <div className={styles.span_visibility_1_wrapper}>
                    <span className={styles.span_visibility_1}>
                      {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesHeightInsideMount, index) => (
                        <div
                          key={index}
                          onClick={() => handleScrolledInchesWhenClickedHeightInsideMount(inchesHeightInsideMount)}
                          className={`${selectedInchesHeightInsideMount === inchesHeightInsideMount ? styles.selectedInch : ''} ${styles.numberStyle}`}
                        >
                          {inchesHeightInsideMount}
                        </div>
                      ))}
                    </span>
                  </div>

                  <div className={styles.enter_a_price}>
                    Enter Price
                  </div>

                  <input
                    className={styles.cms_panel_input_box_ruler_number}
                    type="number"
                    onChange={(e) => handleInchPriceChangeHeightInsideMount(selectedInchesHeightInsideMount, e.target.value)}
                  />

                  <div className={styles.live_display}>
                    Live Display
                  </div>


                  <div className={styles.show_price_ruler_number}>
                    <h1>
                      ${inchPricesAfterHeightInsideMount[selectedInchesHeightInsideMount] !== undefined
                        ? inchPricesAfterHeightInsideMount[selectedInchesHeightInsideMount]
                        : ""}
                    </h1>
                  </div>

                  <div className={styles.previously_entered_price}>
                    Price Before
                  </div>

                  <div className={styles.show_price_ruler_number_green}>
                    <h1>
                      ${newSetPriceInchesHeightInsideMount !== undefined
                        ? newSetPriceInchesHeightInsideMount
                        : ""}
                    </h1>
                  </div>

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
                      {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesWidthOutsideMount, index) => (
                        <div
                          key={index}
                          onClick={() => handleScrolledInchesWhenClickedWidthOutsideMount(inchesWidthOutsideMount)}
                          className={`${selectedInchesWidthOutsideMount === inchesWidthOutsideMount ? styles.selectedInch : ''} ${styles.numberStyle}`}
                        >
                          {inchesWidthOutsideMount}
                        </div>
                      ))}
                    </span>
                  </div>


                  {selectedInchesVisibleWidthOutsideMount ? (
                    <span className={styles._scroller_div_span} onClick={handleNewSpanClickedWidthOutsideMount}>
                      {selectedInchesWidthOutsideMount}
                    </span>
                  ) : null}

                  <div className={styles.enter_a_price}>
                    Enter Price
                  </div>

                  <input
                    className={styles.cms_panel_input_box_ruler_number}
                    type="number"
                    onChange={(e) => handleInchPriceChangeWidthOutsideMount(selectedInchesWidthOutsideMount, e.target.value)}
                  />

                  <div className={styles.live_display}>
                    Live Display
                  </div>

                  <div className={styles.show_price_ruler_number}>
                    <h1>
                      ${inchPricesAfterWidthOutsideMount[selectedInchesWidthOutsideMount] !== undefined
                        ? inchPricesAfterWidthOutsideMount[selectedInchesWidthOutsideMount]
                        : ""}
                    </h1>
                  </div>

                  <div className={styles.previously_entered_price}>
                    Price Before
                  </div>


                  <div className={styles.show_price_ruler_number_green}>
                    <h1></h1>
                  </div>

                </div>

                <div className={`${styles.cms_panel_section_ruler_numbers} ${styles.local_root}`}>
                  <label className={styles.cms_panel_label}>
                    Height
                  </label>

                  <div className={styles.span_visibility_1_wrapper}>
                    <span className={styles.span_visibility_1}>
                      {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesHeightOutsideMount, index) => (
                        <div
                          key={index}
                          onClick={() => handleScrolledInchesWhenClickedHeightOutsideMount(inchesHeightOutsideMount)}
                          className={`${selectedInchesHeightOutsideMount === inchesHeightOutsideMount ? styles.selectedInch : ''} ${styles.numberStyle}`}
                        >
                          {inchesHeightOutsideMount}
                        </div>
                      ))}
                    </span>
                  </div>

                  <div className={styles.enter_a_price}>
                    Enter Price
                  </div>

                  <input
                    className={styles.cms_panel_input_box_ruler_number}
                    type="number"
                    onChange={(e) => handleInchPriceChangeHeightOutsideMount(selectedInchesHeightOutsideMount, e.target.value)}
                  />

                  <div className={styles.live_display}>
                    Live Display
                  </div>


                  <div className={styles.show_price_ruler_number}>
                    <h1>
                      ${inchPricesAfterHeightOutsideMount[selectedInchesHeightOutsideMount] !== undefined
                        ? inchPricesAfterHeightOutsideMount[selectedInchesHeightOutsideMount]
                        : ""}
                    </h1>
                  </div>

                  <div className={styles.previously_entered_price}>
                    Price Before
                  </div>


                  <div className={styles.show_price_ruler_number_green}>
                    <h1>
                      ${newSetPriceInchesHeightOutsideMount !== undefined
                        ? newSetPriceInchesHeightOutsideMount
                        : ""}
                    </h1>
                  </div>

                </div>
              </div>
            </div>

          </div>
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
