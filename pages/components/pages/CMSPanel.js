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


  const { data: session } = useSession();
  const { postData, updateData } = useData();
  const [productName1, setProductName1] = useState("");
  const [productName2, setProductName2] = useState("");
  const [roomname, setroomname] = useState("");
  const [WandPriceCMS, setWandPriceCMS] = useState("");
  const [cordlesspriceCMS, setcordlesspriceCMS] = useState("");
  const [motorizedpriceCMS, setmotorizedpriceCMS] = useState("");
  const [inchPriceCMS, setInchPriceCMS] = useState(0);
  const [fractionPriceCMS, setFractionPriceCMS] = useState(0);

  ////////////////////////////////////////////////////////////////////////////////////////////////


  const scrollableDivRef = useRef();

  useEffect(() => {
    console.log("scrollableDivRef.current:", scrollableDivRef.current);
  }, []); 
  
  ////////////////////////////////////////////////////////////////////////////////////////////////


  const [selectedInchesVisibleWidth, setselectedInchesVisibleWidth] = useState(true);
  const [selectedInchesWidth, setselectedInchesWidth] = useState(null);
  const [selectedInchWIDTH, setselectedInchWIDTH] = useState(null);


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
        setFractionPriceCMS(latestData.fractionPriceCMS || "");
        setInchPriceCMS(latestData.inchPriceCMS || "");
      }

    } catch (error) {
      console.error("Error fetching latest data:", error);
    }

  };

  useEffect(() => {
    fetchLatestData();
  }, []);

  const handleSave1 = async () => {
    try {
      const response = await fetch("/api/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `standard_${Date.now()}`,
          productName1: productName1,
          productName2: productName2,
          roomname: roomname,
          WandPriceCMS: WandPriceCMS,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,


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

  const handleSave2 = async () => {
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


  const handleSave3 = async () => {
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
          roomname: roomname,
          WandPriceCMS: WandPriceCMS,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,

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

  const handleSave4 = async () => {

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
          roomname: roomname,
          WandPriceCMS: WandPriceCMS,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,

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

  const handleSave5 = async () => {
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
          roomname: roomname,
          WandPriceCMS: WandPriceCMS,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,

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

  const handleSave6 = async () => {
    try {
      const response = await fetch("/api/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `unique_${Date.now()}`, // Append timestamp for uniqueness
          productName1: productName1,
          productName2: productName2,
          roomname: roomname,
          WandPriceCMS: WandPriceCMS,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,

        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);
        // Call updateData with the updated data
        updateData && updateData(result.data);
      }
    } catch (error) {
      console.error("Error saving new name:", error);
    }
  };

  const handleSave7 = async () => {
    try {
      const response = await fetch("/api/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `unique_${Date.now()}`, // Append timestamp for uniqueness
          productName1: productName1,
          productName2: productName2,
          roomname: roomname,
          WandPriceCMS: WandPriceCMS,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,
          inchPriceCMS: inchPriceCMS,
          fractionPriceCMS: fractionPriceCMS,

        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);
        // Call updateData with the updated data
        updateData && updateData(result.data);
      }
    } catch (error) {
      console.error("Error saving new name:", error);
    }
  };

  const handleSave8 = async () => {
    try {
      const response = await fetch("/api/test/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `unique_${Date.now()}`, // Append timestamp for uniqueness
          productName1: productName1,
          productName2: productName2,
          roomname: roomname,
          WandPriceCMS: WandPriceCMS,
          cordlesspriceCMS: cordlesspriceCMS,
          motorizedpriceCMS: motorizedpriceCMS,
          inchPriceCMS: inchPriceCMS,
          fractionPriceCMS: fractionPriceCMS,

        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);
        // Call updateData with the updated data
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
        <div className={styles.cmspanel_wrapper}>

          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>Change Page Title:</label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={productName1}
              onChange={(e) => setProductName1(e.target.value)}
            />
            <button className={styles.button} onClick={handleSave1}>
              Save
            </button>
            <h1 className={styles.key_locker1}>{postData && postData.productName1}</h1>
          </div>

          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>Change Page Title Tag:</label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={productName2}
              onChange={(e) => setProductName2(e.target.value)}
            />
            <button className={styles.button} onClick={handleSave2}>
              Save
            </button>
            <div className={styles.key_locker2}>
              <h1 >{postData && postData.productName2}</h1>
            </div>
          </div>

          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>Room Name:</label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={roomname}
              onChange={(e) => setroomname(e.target.value)}
            />
            <button className={styles.button} onClick={handleSave6}>
              Save
            </button>
            <div className={styles.key_locker2}>
              <h1 >{postData && postData.roomname}</h1>
            </div>
          </div>

          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>Change Wand Price:</label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={WandPriceCMS}
              onChange={(e) => setWandPriceCMS(e.target.value)}
            />
            <button className={styles.button} onClick={handleSave3}>
              Save
            </button>
            <div className={styles.key_locker2}>
              <h1 >{postData && postData.WandPriceCMS}</h1>
            </div>
          </div>


          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>Change Cordless Price:</label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={cordlesspriceCMS}
              onChange={(e) => setcordlesspriceCMS(e.target.value)}
            />
            <button className={styles.button} onClick={handleSave4}>
              Save
            </button>
            <div className={styles.key_locker2}>
              <h1 >{postData && postData.cordlesspriceCMS}</h1>
            </div>
          </div>

          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>
              Change Motorized Price:
            </label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={motorizedpriceCMS}
              onChange={(e) => setmotorizedpriceCMS(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={handleSave5}>
              Save
            </button>
            <div className={styles.key_locker2}>
              <h1 >{postData && postData.motorizedpriceCMS}</h1>
            </div>
          </div>


          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>
              Change Inches Prices:
            </label>

            {selectedInchesVisibleWidth ? (
              <span className={styles.span_visibility_1}>
                {["0", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110"].map((inchesWidth, index) => (
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

            <input className={styles.cms_panel_input_box}
              type="text"
              value={inchPriceCMS}
              onChange={(e) => setInchPriceCMS(e.target.value)} />
            <button
              className={styles.button}
              onClick={handleSave7}>
              Save
            </button>
            <div className={styles.key_locker2}>
              <h1 >{postData && postData.inchPriceCMS}</h1>
            </div>
          </div>

          <div className={styles.cms_panel_section}>
            <label className={styles.cms_panel_label}>
              Change Fractions Prices:
            </label>

            <input className={styles.prices_for_inches_and_fractions_input}
              type="text"
              value={fractionPriceCMS}
              onChange={(e) => setFractionPriceCMS(e.target.value)} />
            <button
              className={styles.button}
              onClick={handleSave8}>
              Save
            </button>
            <div className={styles.key_locker2}>
              <h1 >{postData && postData.fractionPriceCMS}</h1>
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
