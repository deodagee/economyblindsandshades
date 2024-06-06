// C:\Users\User\economyblindsandshadesjs\pages\api\sps.js

import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51NYCFAHCanyZGkJbrTJWykHjTtDTVFCeVUoxfILmIVc1guzI2owtLQvFilDKpmY56GSz4no3AoKeIBCyt29bELoI00JEX0XE0H", {
  apiVersion: '2020-08-27', // specify the API version
});
export default async function PaymentSession(req, res) {
  if (req.method === 'POST') {
    const { totalPrice } = req.body;

    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Your Product Name',
              },
              unit_amount: totalPrice * 100, // amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://127.0.0.1:3000',
        cancel_url: 'http://127.0.0.1:3000',
      });

      res.status(200).json({ sessionId: session.id }); // Ensure sessionId is returned
    } catch (error) {
      console.error('Error creating payment session:', error);
      res.status(500).json({ error: 'Error creating payment session' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
