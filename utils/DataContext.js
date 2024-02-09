//C:\Users\User\economyblindsandshadesjs\utils\DataContext.js
import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [postData, setPostData] = useState(null);

  const updateData = async (newData) => {
    // Make a request to your backend API to save the data
    await fetch('/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: newData }),
    });

    setPostData(newData);
  };

  return (
    <DataContext.Provider value={{ postData, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
