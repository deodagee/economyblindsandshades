import React, { useState, useEffect, useRef } from "react";
import { loadStripe } from '@stripe/stripe-js';
import styles from '../../../styles/components/pages/checkoutpage.module.css';
import Image from 'next/image';


const CheckoutPage = ({ totalPrice }) => {

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const stripePromise = loadStripe('your_stripe_publishable_key');

    const handlePaymentSubmit = async () => {
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{ price: 'your_price_id', quantity: 1 }],
            mode: 'payment',
            successUrl: 'https://yourwebsite.com/success',
            cancelUrl: 'https://yourwebsite.com/cancel',
        });

        if (error) {
            console.error('Error redirecting to checkout:', error);
        }
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const [lastSavedsumTotal, setLastSavedsumTotal] = useState("");


    useEffect(() => {
        const cartDataJSON = sessionStorage.getItem('cartData');

        if (cartDataJSON) {
            const cartData = JSON.parse(cartDataJSON);


        setLastSavedsumTotal(parseFloat(cartData.sumTotal));

    } 
}, []);


    return (
        <div className={styles.container}>
            <div className={styles.price}>
                <h1>Awesome, that&apos;s ${lastSavedsumTotal}!</h1>
            </div>
            <div className={styles.icons}>
                <Image className={styles.payment_cards_icons} width={100} height={100} src="/paypalcard.png" alt="paypal" />
                <Image className={styles.payment_cards_icons} width={100} height={100} src="/visacard.png" alt="visa" />
                <Image className={styles.payment_cards_icons} width={100} height={100} src="/mastercard.png" alt="mastercard" />
                <Image className={styles.payment_cards_icons} width={100} height={100} src="/amexcard.png" alt="amex" />
                <Image className={styles.payment_cards_icons} width={100} height={100} src="/maestrocard.png" alt="maestro" />
            </div>
            <div className={styles.card__container}>
                <div className={styles.card}>
                    <div className={`${styles.row} ${styles.paypal}`}>
                        <div className={styles.left}>
                            <input id="pp" type="radio" name="payment" />
                            <div className={styles.radio}></div>
                            <label htmlFor="pp">Paypal</label>
                        </div>

                    </div>
                    <div className={`${styles.row} ${styles.credit}`}>
                        <div className={styles.left}>
                            <input id="cd" type="radio" name="payment" />
                            <div className={styles.radio}></div>
                            <label htmlFor="cd">Debit/ Credit Card</label>
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.cardholder}`}>
                        <div className={styles.info}>
                            <label htmlFor="cardholdername">Name</label>
                            <input placeholder="e.g. Richard Bovell" id="cardholdername" type="text" />
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.number}`}>
                        <div className={styles.info}>
                            <label htmlFor="cardnumber">Card number</label>
                            <input id="cardnumber" type="text" pattern="[0-9]{16,19}" maxLength="19" placeholder="8888-8888-8888-8888" />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <label htmlFor="expiry-date">Expiry</label>
                            <select id="expiry-date">
                                <option>MM</option>
                                <option value="1">01</option>
                                <option value="2">02</option>
                                <option value="3">03</option>
                                <option value="4">04</option>
                                <option value="5">05</option>
                                <option value="6">06</option>
                                <option value="7">07</option>
                                <option value="8">08</option>
                                <option value="9">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <span>/</span>
                            <select id="expiry-date">
                                <option>YYYY</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div className={styles.right}>
                            <label htmlFor="cvv">CVC/CVV</label>
                            <input type="text" maxLength="4" placeholder="123" />
                            <span data-balloon-length="medium" data-balloon="The 3 or 4-digit number on the back of your card." data-balloon-pos="up">i</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.button}>
                <button type="submit"><i className="ion-locked"></i> Confirm and Pay</button>
            </div>
        </div>

    );
};

export default CheckoutPage;
