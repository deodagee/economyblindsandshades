// C:\Users\User\economyblindsandshadesjs\pages\components\pages\checkoutpage.js


import React, { useState, useEffect, useRef } from "react";
import { loadStripe } from '@stripe/stripe-js';
import styles from '../../../styles/components/pages/checkoutpage.module.css';
import Image from 'next/image';
import FooterPage from "../footer";


const CheckoutPage = ({ totalPrice }) => {
    const [showFooter, setShowFooter] = useState(false);
    const [lastSavedsumTotal, setLastSavedsumTotal] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const threshold = 100;
            const isNearBottom = scrollPosition + windowHeight >= documentHeight - threshold;
            setShowFooter(isNearBottom);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY || 'pk_test_51NYCFAHCanyZGkJbtoZKN9k84yFwChbIpp7vaIBM5O3Gju1i734YDZapIp3Vpecs1H8KLXL3i9KY4l86uOenyD2m00zQrXNijk');
    

    useEffect(() => {
        const cartDataJSON = sessionStorage.getItem('cartData');
    
        if (cartDataJSON) {
            try {
                const cartData = JSON.parse(cartDataJSON);
                setLastSavedsumTotal(parseFloat(cartData.sumTotal));
            } catch (error) {
                console.error("Error parsing cartDataJSON:", error);
            }
        } else {
            console.warn("No cartData found in sessionStorage.");
        }
    }, []);


    const handlePaymentSubmit = async () => {
        const stripe = await stripePromise;
    
        try {
            const response = await fetch('/api/sps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    totalPrice: lastSavedsumTotal,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to fetch session ID');
            }
    
            const { sessionId } = await response.json();
    
            console.log('Session ID:', sessionId);
    
            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({
                sessionId: sessionId,
            });
    
            if (result.error) {
                // Handle error
                console.error(result.error.message);
            }
        } catch (error) {
            console.error('Error creating payment session:', error);
        }
    };
    

    return (
        <>
            <div className={styles.container}>
                <div className={styles.price}>
                    <h1>Awesome, your total is ${lastSavedsumTotal}!</h1>
                </div>
                <div className={styles.icons}>
                    <Image className={styles.payment_cards_icons} width={100} height={100} src="/paypalcard.png" alt="paypal" />
                    <Image className={styles.payment_cards_icons} width={100} height={100} src="/visacard.png" alt="visa" />
                    <Image className={styles.payment_cards_icons} width={100} height={100} src="/mastercard.png" alt="mastercard" />
                    <Image className={styles.payment_cards_icons} width={100} height={100} src="/amexcard.png" alt="amex" />
                    <Image className={styles.payment_cards_icons} width={100} height={100} src="/maestrocard.png" alt="maestro" />
                </div>
                
                <div className={styles.button}>
                    <button onClick={handlePaymentSubmit}><i className={styles.ion_locked}></i> Confirm and Pay</button>
                </div>
            </div>


            {showFooter && <span className={styles.ZebraBlindsFooter_wrapper}>
                <div className={`${styles.ZebraBlindsFooter} ${showFooter ? styles.showFooter : ''}`}>
                    <div className={styles.shipping_divider2}></div>
                    <FooterPage></FooterPage>
                    <div className={styles.shipping_divider2}></div>

                </div>
            </span>}

        </>

    );
};

export default CheckoutPage;
