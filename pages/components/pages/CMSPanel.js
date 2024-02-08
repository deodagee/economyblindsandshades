import React, { useState } from "react";
import LocalStorageAPI from "../localstorage";
import { useStateContext } from "../StateContext";
import styles from '../../../styles/components/pages/cmspanel.module.css';
import HeaderPiece from "../header.js";

const CMSPanel = () => {
  const {
    productTitle,
    updateProductTitle,
    ProductLightening,
    updateProductLightening
  } = useStateContext();

  const [titleButtonClicked, setTitleButtonClicked] = useState(false);
  const [lighteningButtonClicked, setLighteningButtonClicked] = useState(false);

  const handleSaveproductTitle = () => {
    LocalStorageAPI.setValue("Product_Title", productTitle);
    setTitleButtonClicked(true);
  };

  const handleSaveProductLightening = () => {
    LocalStorageAPI.setValue("Product_Lightening", ProductLightening);
    setLighteningButtonClicked(true);
  };

  const handleTitleInputChange = (e) => {
    updateProductTitle(e.target.value);
    setTitleButtonClicked(false); // Set button color back to grey
  };

  const handleLighteningInputChange = (e) => {
    updateProductLightening(e.target.value);
    setLighteningButtonClicked(false); // Set button color back to grey
  };

  return (
    <>
      <HeaderPiece></HeaderPiece>

      <div className={styles.cmspanel_wrapper}>
        <div className={styles.cms_panel_section}>
          <div className={styles.cms_panel_title}>
            CMS PANEL ECONOMY BLINDS AND SHADES
          </div>
        </div>

        <div className={styles.cms_panel_section}>
          <label className={styles.cms_panel_label}>Product Title:</label>
          <input
            className={styles.cms_panel_input_box}
            type="text"
            value={productTitle}
            onChange={handleTitleInputChange}
          />
          <button
            className={styles.button}
            style={{
              
              borderWidth: titleButtonClicked ? "3px" : "4px",
              borderColor: titleButtonClicked ? 'black' : 'orange' }}
            onClick={handleSaveproductTitle}
          >
            Save
          </button>
        </div>

        <div className={styles.cms_panel_section}>
          <label className={styles.cms_panel_label}>Product Lightening:</label>
          <input
            className={styles.cms_panel_input_box}
            type="text"
            value={ProductLightening}
            onChange={handleLighteningInputChange}
          />
          <button
            className={styles.button}
            style={{ 
              borderWidth: lighteningButtonClicked ? "3px" : "4px",
              borderColor: lighteningButtonClicked ? 'black' : 'orange' }}
            onClick={handleSaveProductLightening}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default CMSPanel;
