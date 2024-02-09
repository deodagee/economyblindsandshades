// C:\Users\User\economyblindsandshadesjs\pages\components\pages\CMSPanel.js


// C:\Users\User\economyblindsandshadesjs\pages\components\pages\CMSPanel.js

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from '../../../styles/components/pages/cmspanel.module.css';
import { useData } from "../../../utils/DataContext";


const CMSPanel = () => {
  const { data: session } = useSession();
  const { postData, updateData } = useData();
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
            <label className={styles.cms_panel_label}>Post Request Section1:</label>
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
            <label className={styles.cms_panel_label}>Post Request Section2:</label>
            <input
              className={styles.cms_panel_input_box}
              type="text"
              value={productName2}
              onChange={(e) => setProductName2(e.target.value)}
            />
            <button className={styles.button} onClick={handleSave2}>
              Save
            </button>

            <h1 className={styles.key_locker2}>{postData && postData.productName2}</h1>
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
    </>
  );
};

export default CMSPanel;
