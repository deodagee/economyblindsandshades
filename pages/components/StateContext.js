// /economyblindsandshadesjs/pages/components/StateContext.js
import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [productTitle, setProductTitle] = useState('');
  const [ProductLightening, setProductLightening] = useState('');

  const updateProductTitle = (newProductTitle) => {
    setProductTitle(newProductTitle);
  };

  const updateProductLightening = (newProductLightening) => {
    setProductLightening(newProductLightening);
  };

  return (
    <StateContext.Provider value={{ productTitle, updateProductTitle, ProductLightening, updateProductLightening }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
