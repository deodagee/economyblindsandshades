// /economyblindsandshadesjs/pages/components/StateContext.js
import React, { createContext, useContext, useState } from "react";



const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [productTitle, setProductTitle] = useState('');
  const [Product_Lightening, setProduct_Lightening] = useState('');

  const updateProductTitle = (newproductTitle) => {
    setProductTitle(newproductTitle);
  };

  const updateProduct_Lightening = (newProduct_Lightening) => {
    setProduct_Lightening(newProduct_Lightening);
  };

  return (
<>
    <span>
    <StateContext.Provider value={{ productTitle, updateProductTitle }}>
      {children}
    </StateContext.Provider>
    </span>

    <span>
<StateContext.Provider value={{ Product_Lightening, updateProduct_Lightening }}>
{children}
</StateContext.Provider>
</span>
</>
  );
};

export const useStateContext = () => useContext(StateContext);
