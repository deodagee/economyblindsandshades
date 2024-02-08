// C:\Users\User\economyblindsandshadesjs\localstorage.js

import React from "react";

const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

const LocalStorageAPI = {
  getValue: (key) => {
    if (isLocalStorageAvailable) {
      const storedValue = localStorage.getItem(key);
      try {
        return storedValue ? JSON.parse(storedValue) : null;
      } catch (error) {
        console.error('Error parsing JSON:', error);
        return null;
      }
    }
    return null;
  },
  
  setValue: (key, value) => {
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
};

export default function LocalStorageComponent() {
  // You can use LocalStorageAPI here if needed
  return <></>;
}
