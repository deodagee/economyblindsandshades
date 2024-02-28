// C:\Users\User\economyblindsandshadesjs\pages\api/saveData.js

export default async function handler(req, res) {
    const { method, body } = req;
  
    if (method === 'POST') {
      const { productTitle, productLightening } = JSON.parse(body);
  
      // Store the data on the server (you need to implement this part)
      // Example: Save data to a database
  
      return res.status(200).json({ success: true });
    } else if (method === 'GET') {
      // Retrieve the data from the server (you need to implement this part)
      // Example: Retrieve data from a database
  
      const data = { productTitle: '...', productLightening: '...' };
      return res.status(200).json(data);
    }
  
    return res.status(405).end();
  }
  
