// C:\Users\User\economyblindsandshadesjs\pages\components\pages\zebrablinds.js


import styles from '../../../styles/components/pages/zebrablinds.module.css';
import React, { useEffect } from 'react';
import HeaderPiece from '../header.js';
import { useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';

function ZebraBlinds() {
  const { data: session } = useSession();

  const productTitle = useSelector((state) => state.productTitle);
  const productLightening = useSelector((state) => state.productLightening);
  const dispatch = useDispatch();

  // Fetch initial values from shared data
  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the server
      const response = await fetch(`/api/getSharedData/productTitle`);
      const data = await response.json();

      // Dispatch action to update productTitle in Redux state
      dispatch({ type: 'UPDATE_PRODUCT_TITLE', payload: data.value });
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the server
      const response = await fetch(`/api/getSharedData/productLightening`);
      const data = await response.json();

      // Dispatch action to update productLightening in Redux state
      dispatch({ type: 'UPDATE_PRODUCT_LIGHTENING', payload: data.value });
    };

    fetchData();
  }, [dispatch]);

  return (
    <>
      <HeaderPiece></HeaderPiece>
      <div className={styles.top_title_area}>
        <span>
          <h1 className={styles.product_title_styles}>{productTitle}</h1>
        </span>
        <span>
          <h1 className={styles.product_lightening_styles}>{productLightening}</h1>
        </span>
      </div>
    </>
  );
}

export default ZebraBlinds;
