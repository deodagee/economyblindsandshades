
// /economyblindsandshadesjs/pages/components/localstorage.js

import React from "react";

const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

var LocalStorageAPI = {
  getValue: (key) => {
    if (isLocalStorageAvailable) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    }
    return null;
  },
  setValue: (key, value) => {
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
};

export default LocalStorageAPI;
