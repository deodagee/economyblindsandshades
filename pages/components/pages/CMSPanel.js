// C:\Users\User\economyblindsandshadesjs\pages\components\pages\CMSPanel.js


import React, { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from '../../../styles/components/pages/cmspanel.module.css';
import { useData } from "../../../utils/DataContext";
import FooterPage from "../footer";

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

  const [newSetPriceInchesWidthInsideMount, setnewSetPriceInchesWidthInsideMount] = useState(null);
  const [newSetPriceInchesHeightInsideMount, setnewSetPriceInchesHeightInsideMount] = useState(null);
  const [newSetPriceInchesWidthOutsideMount, setnewSetPriceInchesWidthOutsideMount] = useState(null);
  const [newSetPriceInchesHeightOutsideMount, setnewSetPriceInchesHeightOutsideMount] = useState(null);


  ////////////////////////////////////////////////////////////////////////////////////////////////


  const handleInchPriceChangeWidthInsideMount = (selectedInchesWidthInsideMount, newPriceWidthInsideMount) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesWidthInsideMount);
    console.log("New price:", newPriceWidthInsideMount);

    setinchPricesAfterWidthInsideMount(prevPricesWidthInsideMount => {
      const updatedPricesWidthInsideMount = { ...prevPricesWidthInsideMount };
      updatedPricesWidthInsideMount[selectedInchesWidthInsideMount] = parseFloat(newPriceWidthInsideMount);
      return updatedPricesWidthInsideMount;
    });
  };

  const handleScrolledInchesWhenClickedWidthInsideMount = (inchesWidthInsideMount) => {
    setselectedInchesWidthInsideMount(inchesWidthInsideMount);
    console.log("Selected inches width inside mount:", inchesWidthInsideMount);
  
    const newSetPriceInchesWidthInsideMount = inchPricesAfterWidthInsideMount[inchesWidthInsideMount];
    setnewSetPriceInchesWidthInsideMount(newSetPriceInchesWidthInsideMount);
    console.log("Previous Price:", newSetPriceInchesWidthInsideMount);
  
    const scrollableDivInchesdWidthInsideMount = scrollableDivRefInchesWidthInsideMount.current;
  
    if (scrollableDivInchesdWidthInsideMount) {
      setTimeout(() => {
        const selectedInchesDivdWidthInsideMount = scrollableDivInchesdWidthInsideMount.querySelector(`.${styles.selectedInch}`);
  
        if (selectedInchesDivdWidthInsideMount) {
          const scrollPosition = selectedInchesDivdWidthInsideMount.offsetTop - (scrollableDivInchesdWidthInsideMount.offsetHeight - selectedInchesDivdWidthInsideMount.offsetHeight) / 2;
  
          scrollableDivInchesdWidthInsideMount.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
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
    console.log("Selected inches width inside mount:", inchesHeightInsideMount);

    const newSetPriceInchesHeightInsideMount = inchPricesAfterHeightInsideMount[inchesHeightInsideMount];
    setnewSetPriceInchesHeightInsideMount(newSetPriceInchesHeightInsideMount);
    console.log("Previous Price:", newSetPriceInchesHeightInsideMount);

    const scrollableDivInchesdHeightInsideMount = scrollableDivRefInchesHeightInsideMount.current;

    if (scrollableDivInchesdHeightInsideMount) {
      setTimeout(() => {
        const selectedInchesDivdHeightInsideMount = scrollableDivInchesdHeightInsideMount.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdHeightInsideMount) {
          const selectedInchesDivRectHeightInsideMount = selectedInchesDivdHeightInsideMount.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectHeightInsideMount.top +
            scrollableDivInchesdHeightInsideMount.scrollTop -
            (scrollableDivInchesdHeightInsideMount.offsetHeight - selectedInchesDivRectHeightInsideMount.height) / 2;

          scrollableDivInchesdHeightInsideMount.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////

  const handleInchPriceChangeWidthOutsideMount = (selectedInchesWidthOutsideMount, newPriceWidthOutsideMount) => {
    console.log("Selected inches width inside mount (for price change):", selectedInchesWidthOutsideMount);
    console.log("New price:", newPriceWidthOutsideMount);

    setinchPricesAfterWidthOutsideMount(prevPricesWidthOutsideMount => {
      const updatedPricesWidthOutsideMount = { ...prevPricesWidthOutsideMount };
      updatedPricesWidthOutsideMount[selectedInchesWidthOutsideMount] = parseFloat(newPriceWidthOutsideMount);
      return updatedPricesWidthOutsideMount;
    });
  };


  const handleScrolledInchesWhenClickedWidthOutsideMount = (inchesWidthOutsideMount) => {
    setselectedInchesWidthOutsideMount(inchesWidthOutsideMount);
    console.log("Selected inches width inside mount:", inchesWidthOutsideMount);

    const newSetPriceInchesWidthOutsideMount = inchPricesAfterWidthOutsideMount[inchesWidthOutsideMount];
    setnewSetPriceInchesWidthOutsideMount(newSetPriceInchesWidthOutsideMount);
    console.log("Previous Price:", newSetPriceInchesWidthOutsideMount);

    const scrollableDivInchesdWidthOutsideMount = scrollableDivRefInchesWidthOutsideMount.current;

    if (scrollableDivInchesdWidthOutsideMount) {
      setTimeout(() => {
        const selectedInchesDivdWidthOutsideMount = scrollableDivInchesdWidthOutsideMount.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdWidthOutsideMount) {
          const selectedInchesDivRectWidthOutsideMount = selectedInchesDivdWidthOutsideMount.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectWidthOutsideMount.top +
            scrollableDivInchesdWidthOutsideMount.scrollTop -
            (scrollableDivInchesdWidthOutsideMount.offsetHeight - selectedInchesDivRectWidthOutsideMount.height) / 2;

          scrollableDivInchesdWidthOutsideMount.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
    }
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
    console.log("Selected inches width inside mount:", inchesHeightOutsideMount);

    const newSetPriceInchesHeightOutsideMount = inchPricesAfterHeightOutsideMount[inchesHeightOutsideMount];
    setnewSetPriceInchesHeightOutsideMount(newSetPriceInchesHeightOutsideMount);
    console.log("Previous Price:", newSetPriceInchesHeightOutsideMount);

    const scrollableDivInchesdHeightOutsideMount = scrollableDivRefInchesHeightOutsideMount.current;

    if (scrollableDivInchesdHeightOutsideMount) {
      setTimeout(() => {
        const selectedInchesDivdHeightOutsideMount = scrollableDivInchesdHeightOutsideMount.querySelector(`.${styles.selectedInch}`);

        if (selectedInchesDivdHeightOutsideMount) {
          const selectedInchesDivRectHeightOutsideMount = selectedInchesDivdHeightOutsideMount.getBoundingClientRect();
          const scrollPosition =
            selectedInchesDivRectHeightOutsideMount.top +
            scrollableDivInchesdHeightOutsideMount.scrollTop -
            (scrollableDivInchesdHeightOutsideMount.offsetHeight - selectedInchesDivRectHeightOutsideMount.height) / 2;

          scrollableDivInchesdHeightOutsideMount.scrollTop = scrollPosition;
        } else {
          console.warn("Selected inch div not found in the scrollable div");
        }
      }, 0);
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

        <div>
          <button className={styles.button} onClick={handleSaveOptions}>
            Save
          </button>

          <div className={styles.cmspanel_wrapper}>

            <div className={styles.cms_panel_section}>
              <label className={styles.cms_panel_label}>Change Page Title:</label>
              <input
                className={styles.cms_panel_input_box}
                type="text"
                onChange={(e) => setProductName1(e.target.value)}
              />

              <h1 className={styles.key_locker1}>{postData && postData.productName1}
              </h1>

            </div>

            <div className={styles.cms_panel_section}>
              <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
              <input
                className={styles.cms_panel_input_box}
                type="text"
                onChange={(e) => setProductName2(e.target.value)}
              />

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

              <div className={styles.key_locker2}>
                <h1 >{postData && postData.motorizedpriceCMS}
                </h1>
              </div>
            </div>


            <div className={styles.cms_panel_section}>

              <label className={styles.cms_panel_label}>
                Change Inches Prices Width Inside Mount:
              </label>

              <div className={styles.span_visibility_1_wrapper}>

                <span className={styles.span_visibility_1}>
                  {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesWidthInsideMount, index) => (
                    <div
                      key={index}
                      onClick={() => handleScrolledInchesWhenClickedWidthInsideMount(inchesWidthInsideMount)}
                      className={selectedInchesWidthInsideMount === inchesWidthInsideMount ? styles.selectedInch : ''}
                    >
                      {inchesWidthInsideMount}
                    </div>
                  ))}
                </span>
              </div>

              <input
                className={styles.cms_panel_input_box}
                type="number"
                onChange={(e) => handleInchPriceChangeWidthInsideMount(selectedInchesWidthInsideMount, e.target.value)}
              />

              <div className={styles.show_price}>
                <h1>
                  Entered Price: ${inchPricesAfterWidthInsideMount[selectedInchesWidthInsideMount] !== undefined
                    ? inchPricesAfterWidthInsideMount[selectedInchesWidthInsideMount]
                    : ""}
                </h1>
              </div>

              <div className={styles.show_price}>
                <h1>
                  Last Saved Price: ${newSetPriceInchesWidthInsideMount !== undefined
                    ? newSetPriceInchesWidthInsideMount
                    : ""}
                </h1>
              </div>

            </div>


            <div className={styles.cms_panel_section}>

              <label className={styles.cms_panel_label}>
                Change Inches Prices Height Inside Mount:
              </label>

              <div className={styles.span_visibility_1_wrapper}>
                <span className={styles.span_visibility_1}>
                  {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesHeightInsideMount, index) => (
                    <div
                      key={index}
                      onClick={() => handleScrolledInchesWhenClickedHeightInsideMount(inchesHeightInsideMount)}
                      className={selectedInchesHeightInsideMount === inchesHeightInsideMount ? styles.selectedInch : ''}
                    >
                      {inchesHeightInsideMount}
                    </div>
                  ))}
                </span>
              </div>

              <input
                className={styles.cms_panel_input_box}
                type="number"
                onChange={(e) => handleInchPriceChangeHeightInsideMount(selectedInchesHeightInsideMount, e.target.value)}
              />

              <div className={styles.show_price}>
                <h1>
                  Entered Price: ${inchPricesAfterHeightInsideMount[selectedInchesHeightInsideMount] !== undefined
                    ? inchPricesAfterHeightInsideMount[selectedInchesHeightInsideMount]
                    : ""}
                </h1>
              </div>

              <div className={styles.show_price}>
                <h1>
                  Last Saved Price: ${newSetPriceInchesHeightInsideMount !== undefined
                    ? newSetPriceInchesHeightInsideMount
                    : ""}
                </h1>
              </div>

            </div>


            <div className={styles.cms_panel_section}>

              <label className={styles.cms_panel_label}>
                Change Inches Prices Width Outside Mount:
              </label>

              <div className={styles.span_visibility_1_wrapper}>
                <span className={styles.span_visibility_1}>
                  {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesWidthOutsideMount, index) => (
                    <div
                      key={index}
                      onClick={() => handleScrolledInchesWhenClickedWidthOutsideMount(inchesWidthOutsideMount)}
                      className={selectedInchesWidthOutsideMount === inchesWidthOutsideMount ? styles.selectedInch : ''}
                    >
                      {inchesWidthOutsideMount}
                    </div>
                  ))}
                </span>
              </div>


              <input
                className={styles.cms_panel_input_box}
                type="number"
                onChange={(e) => handleInchPriceChangeWidthOutsideMount(selectedInchesWidthOutsideMount, e.target.value)}
              />

              <div className={styles.show_price}>
                <h1>
                  Entered Price: ${inchPricesAfterWidthOutsideMount[selectedInchesWidthOutsideMount] !== undefined
                    ? inchPricesAfterWidthOutsideMount[selectedInchesWidthOutsideMount]
                    : ""}
                </h1>
              </div>

              <div className={styles.show_price}>
                <h1>
                  Last Saved Price: ${newSetPriceInchesWidthOutsideMount !== undefined
                    ? newSetPriceInchesWidthOutsideMount
                    : ""}
                </h1>
              </div>

            </div>


            <div className={styles.cms_panel_section}>

              <label className={styles.cms_panel_label}>
                Change Inches Prices Height Outside Mount:
              </label>

              <div className={styles.span_visibility_1_wrapper}>
                <span className={styles.span_visibility_1}>
                  {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesHeightOutsideMount, index) => (
                    <div
                      key={index}
                      onClick={() => handleScrolledInchesWhenClickedHeightOutsideMount(inchesHeightOutsideMount)}
                      className={selectedInchesHeightOutsideMount === inchesHeightOutsideMount ? styles.selectedInch : ''}
                    >
                      {inchesHeightOutsideMount}
                    </div>
                  ))}
                </span>
              </div>

              <input
                className={styles.cms_panel_input_box}
                type="number"
                onChange={(e) => handleInchPriceChangeHeightOutsideMount(selectedInchesHeightOutsideMount, e.target.value)}
              />

              <div className={styles.show_price}>
                <h1>
                  Entered Price: ${inchPricesAfterHeightOutsideMount[selectedInchesHeightOutsideMount] !== undefined
                    ? inchPricesAfterHeightOutsideMount[selectedInchesHeightOutsideMount]
                    : ""}
                </h1>
              </div>

              <div className={styles.show_price}>
                <h1>
                  Last Saved Price: ${newSetPriceInchesHeightOutsideMount !== undefined
                    ? newSetPriceInchesHeightOutsideMount
                    : ""}
                </h1>
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
