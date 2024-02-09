//C:\Users\User\economyblindsandshadesjs\utils\statemanager.js

import React, { useEffect, useState } from 'react';
import CMSPanel from '../pages/components/pages/CMSPanel';
import ZebraBlinds from '../pages/components/pages/zebrablinds';
import { useData } from './DataContext';

const StateManager = () => {
  const { postData, updateData } = useData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a request to your backend API to get the latest data
        const response = await fetch('/api/getLatestData');
        const data = await response.json();

        // Update the local state with the retrieved data
        updateData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch initial data when the component mounts
    fetchData();
  }, [updateData]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CMSPanel onUpdate={updateData} />
          <ZebraBlinds postData={postData} />
          {/* Render other components */}
        </>
      )}
    </>
  );
};

export default StateManager;
