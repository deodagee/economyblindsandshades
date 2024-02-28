// C:\Users\User\economyblindsandshadesjs\pages\components\pages\CMSPanel.js


import React, { useState, useEffect } from "react";
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

          // Adjust the threshold as needed
          const threshold = 100;

          // Check if we are close to the bottom of the page
          const isNearBottom = scrollPosition + windowHeight >= documentHeight - threshold;

          // Set the state to show or hide the footer
          setShowFooter(isNearBottom);
      };

      // Add scroll event listener when the component mounts
      window.addEventListener('scroll', handleScroll);

      // Remove scroll event listener when the component unmounts
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []); // Empty dependency array ensures this effect runs only once


  const { data: session } = useSession();
  const { postData, updateData } = useData();
  const [productName1, setProductName1] = useState("");
  const [productName2, setProductName2] = useState("");
  const [roomname, setroomname] = useState("");
  const [WandPriceCMS, setWandPriceCMS] = useState("");
  const [cordlesspriceCMS, setcordlesspriceCMS] = useState("");
  const [motorizedpriceCMS, setmotorizedpriceCMS] = useState("");



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



      }
    } catch (error) {
      console.error("Error fetching latest data:", error);
    }
  };

  useEffect(() => {
    // Fetch the latest data when the component mounts
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
          name: `standard_${Date.now()}`, // Append timestamp for uniqueness
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

  const handleSave2 = async () => {
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
          WandPriceCMS: WandPriceCMS,
          roomname: roomname,
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


  const handleSave3 = async () => {
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

  const handleSave4 = async () => {
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

  const handleSave5 = async () => {
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
            <label className={styles.cms_panel_label}>Change Motorized Price:</label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={motorizedpriceCMS}
              onChange={(e) => setmotorizedpriceCMS(e.target.value)}
            />
            <button className={styles.button} onClick={handleSave5}>
              Save
            </button>
            <div className={styles.key_locker2}>
            <h1 >{postData && postData.motorizedpriceCMS}</h1>
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
