// C:\Users\User\economyblindsandshadesjs\pages\components\pages\CMSPanel.js
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import styles from '../../../styles/components/pages/cmspanel.module.css';
import { useDispatch, useSelector } from 'react-redux';

const CMSPanel = () => {
  const { data: session } = useSession();
  const [titleButtonClicked, setTitleButtonClicked] = useState(false);
  const [lighteningButtonClicked, setLighteningButtonClicked] = useState(false);

  const productTitle = useSelector((state) => state.productTitle);
  const productLightening = useSelector((state) => state.productLightening);
  const dispatch = useDispatch();

  const handleSaveproductTitle = () => {
    // Dispatch action to update productTitle in Redux state
    dispatch({ type: 'UPDATE_PRODUCT_TITLE', payload: productTitle });
    setTitleButtonClicked(true);

    // Save the updated productTitle to the server
    saveDataToServer('productTitle', productTitle);
  };

  const handleSaveProductLightening = () => {
    // Dispatch action to update productLightening in Redux state
    dispatch({ type: 'UPDATE_PRODUCT_LIGHTENING', payload: productLightening });
    setLighteningButtonClicked(true);

    // Save the updated productLightening to the server
    saveDataToServer('productLightening', productLightening);
  };

  const handleTitleInputChange = (e) => {
    // Update productTitle directly in Redux state
    dispatch({ type: 'UPDATE_PRODUCT_TITLE', payload: e.target.value });
    setTitleButtonClicked(true);
  };

  const handleLighteningInputChange = (e) => {
    // Update productLightening directly in Redux state
    dispatch({ type: 'UPDATE_PRODUCT_LIGHTENING', payload: e.target.value });
    setLighteningButtonClicked(true);
  };

  useEffect(() => {
    // No need for fetching data, Redux state will handle it
  }, []);

  const saveDataToServer = async (key, value) => {
    // Save data to the server
    await fetch('/pages/api/setSharedData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, value }),
    });
  };

  return (
    <>
      <div>
        {session ? (
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
                  borderColor: titleButtonClicked ? 'black' : 'orange'
                }}
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
                value={productLightening}
                onChange={handleLighteningInputChange}
              />
              <button
                className={styles.button}
                style={{
                  borderWidth: lighteningButtonClicked ? "3px" : "4px",
                  borderColor: lighteningButtonClicked ? 'black' : 'orange'
                }}
                onClick={handleSaveProductLightening}
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
};

export default CMSPanel;
