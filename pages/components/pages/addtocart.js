// addtocart.js


import React, { useState, useEffect, useRef } from "react";
import styles from '../../../styles/components/pages/add_to_cart.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeaderPiece from "../../components/header.js"
import FooterPage from "../../../pages/components/footer.js"
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react'

const AddToCart = () => {


    const router = useRouter();
    const { totalpricecalculated } = router.query;
    const { nameZebrablindsRoomDarkening } = router.query;



    const totalPrice = parseFloat(totalpricecalculated || 0);
    const nameZbrd = parseFloat(nameZebrablindsRoomDarkening || 0);


    const [showFooter, setShowFooter] = useState(false);


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

    ///////////CHOOSE COUNTRY

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedRegion(''); // Reset selected region when changing the country
    };

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };


    const [selectedInchesWidthInsideMount, setselectedInchesWidthInsideMount] = useState(null);
    const [selectedInchesHeightInsideMount, setselectedInchesHeightInsideMount] = useState(null);
    const [selectedInchesWidthOutsideMount, setselectedInchesWidthOutsideMount] = useState(null);
    const [selectedInchesHeightOutsideMount, setselectedInchesHeightOutsideMount] = useState(null);

    const [selectedFractionsWidthInsideMount, setselectedFractionsWidthInsideMount] = useState(null);
    const [selectedFractionsWidthOutsideMount, setselectedFractionsWidthOutsideMount] = useState(null);
    const [selectedFractionsHeightInsideMount, setselectedFractionsHeightInsideMount] = useState(null);
    const [selectedFractionsHeightOutsideMount, setselectedFractionsHeightOutsideMount] = useState(null);

    const [InsideOrOutsideRenderingContent, setInsideOrOutsideRenderingContent] = useState('Inside Mount');

    const [selectedFileNameMaterials, setselectedFileNameMaterials] = useState(null);

    const [active_wand_cordless_motorizedRenderingContent, setactive_wand_cordless_motorizedRenderingContent] = useState('');

    const [active_wand_left_choice_rendering_content, setactive_wand_left_choice_rendering_content] = useState("Wand Side:");

    const [active_wand_right_choice_rendering_content, setactive_wand_right_choice_rendering_content] = useState(null);

    const [selectedImagesTop, setSelectedImagesTop] = useState([]);

    const [selectedImagesBottom, setSelectedImagesBottom] = useState([]);

    //////////////////////////////////////////////////////////////////////////////////


    const [activeDimensionsinsideMount, setActiveDimensionsinsideMount] = useState("insideMount");
    const [activeDimensionsoutsideMount, setActiveDimensionsoutsideMount] = useState("outsideMount");

    //////////////////////////////////////////////////////////////////////////////////


    const [productName1HoneycombBlindsRoomLightening, setproductName1HoneycombBlindsRoomLightening] = useState("");
    const [productName1HoneycombBlindsRoomDarkening, setproductName1HoneycombBlindsRoomDarkening] = useState("");

    const [productName2HoneycombBlindsRoomLightening, setproductName2HoneycombBlindsRoomLightening] = useState("");
    const [productName2HoneycombBlindsRoomDarkening, setProductName2HoneycombBlindsRoomDarkening] = useState("");


    const [roomnameHoneycombBlindsRoomLightening, setroomnameHoneycombBlindsRoomLightening] = useState("");
    const [roomnameHoneycombBlindsRoomDarkening, setroomnameHoneycombBlindsRoomDarkening] = useState("");
    const [roomnameRollerBlindsRoomLightening, setroomnameRollerBlindsRoomLightening] = useState("");
    const [roomnameRollerBlindsRoomDarkening, setroomnameRollerBlindsRoomDarkening] = useState("");
    const [roomnameZebraBlindsRoomLightening, setroomnameZebraBlindsRoomLightening] = useState("");
    const [roomnameZebraBlindsRoomDarkening, setroomnameZebraBlindsRoomDarkening] = useState("");


    const [WandPriceCMSHoneycombBlindsRoomDarkening, setWandPriceCMSHoneycombBlindsRoomDarkening] = useState("");


    const [motorizedpriceCMSHoneycombBlindsRoomDarkening, setmotorizedpriceCMSHoneycombBlindsRoomDarkening] = useState("");


    const [cordlesspriceCMSHoneycombBlindsRoomDarkening, setcordlesspriceCMSHoneycombBlindsRoomDarkening] = useState("");


    const fetchLatestData = async () => {
        try {
            const response = await fetch("/api/getLatestData");
            const result = await response.json();
            const latestData = result.data;

            if (latestData) {
                setproductName1HoneycombBlindsRoomLightening(latestData.productName1HoneycombBlindsRoomLightening || "");
                setproductName1HoneycombBlindsRoomDarkening(latestData.productName1HoneycombBlindsRoomDarkening || "");

                setProductName2HoneycombBlindsRoomDarkening(latestData.productName2HoneycombBlindsRoomDarkening || "");
                setproductName2HoneycombBlindsRoomLightening(latestData.productName2HoneycombBlindsRoomLightening || "");

                setroomnameHoneycombBlindsRoomDarkening(latestData.roomnameHoneycombBlindsRoomDarkening || "");
                setroomnameHoneycombBlindsRoomLightening(latestData.roomnameHoneycombBlindsRoomLightening || "");
                setroomnameroomnameZebraBlindsRoomDarkening(latestData.roomnameZebraBlindsRoomDarkening || "");
                setroomnameZebraBlindsRoomLightening(latestData.roomnameZebraBlindsRoomLightening || "");
                setWandPriceCMSHoneycombBlindsRoomDarkening(latestData.WandPriceCMSHoneycombBlindsRoomDarkening || "");
                setmotorizedpriceCMSHoneycombBlindsRoomDarkening(latestData.motorizedpriceCMSHoneycombBlindsRoomDarkening || "");
                setcordlesspriceCMSHoneycombBlindsRoomDarkening(latestData.cordlesspriceCMSHoneycombBlindsRoomDarkening || "");

            }
        } catch (error) {
            console.error("Error fetching latest data:", error);
        }
    };

    useEffect(() => {
        fetchLatestData();
    }, []);


    const [lastSavedproductName1HoneycombBlindsRoomLightening, setLastSavedproductName1HoneycombBlindsRoomLightening] = useState("");
    const [lastSavedproductName1HoneycombBlindsRoomDarkening, setLastSavedproductName1HoneycombBlindsRoomDarkening] = useState("");
    const [lastSavedproductName1RollerBlindsRoomLightening, setLastSavedproductName1RollerBlindsRoomLightening] = useState("");
    const [lastSavedproductName1RollerBlindsRoomDarkening, setLastSavedproductName1RollerBlindsRoomDarkening] = useState("");
    const [lastSavedproductName1ZebrablindsRoomLightening, setLastSavedproductName1ZebrablindsRoomLightening] = useState("");
    const [lastSavedproductName1ZebrablindsRoomDarkening, setLastSavedproductName1ZebrablindsRoomDarkening] = useState("");

    const [lastSavedproductName2HoneycombBlindsRoomLightening, setLastSavedproductName2HoneycombBlindsRoomLightening] = useState("");
    const [lastSavedproductName2HoneycombBlindsRoomDarkening, setLastSavedproductName2HoneycombBlindsRoomDarkening] = useState("");
    const [lastSavedproductName2RollerBlindsRoomLightening, setLastSavedproductName2RollerBlindsRoomLightening] = useState("");
    const [lastSavedproductName2RollerBlindsRoomDarkening, setLastSavedproductName2RollerBlindsRoomDarkening] = useState("");
    const [lastSavedproductName2ZebrablindsRoomLightening, setLastSavedproductName2ZebrablindsRoomLightening] = useState("");
    const [lastSavedproductName2ZebrablindsRoomDarkening, setLastSavedproductName2ZebrablindsRoomDarkening] = useState("");

    const [lastSavedroomnameHoneycombBlindsRoomDarkening, setLastSavedroomnameHoneycombBlindsRoomDarkening] = useState("");
    const [lastSavedroomnameHoneycombBlindsRoomLightening, setLastSavedroomnameHoneycombBlindsRoomLightening] = useState("");
    const [lastSavedroomnameRollerBlindsRoomLightening, setLastSavedroomnameRollerBlindsRoomLightening] = useState("");
    const [lastSavedroomnameRollerBlindsRoomDarkening, setLastSavedroomnameRollerBlindsRoomDarkening] = useState("");
    const [lastSavedroomnameZebrablindsRoomLightening, setLastSavedroomnameZebrablindsRoomLightening] = useState("");
    const [lastSavedroomnameZebrablindsRoomDarkening, setLastSavedroomnameZebrablindsRoomDarkening] = useState("");

    const [lastSavedWandPriceCMSHoneycombBlindsRoomLightening, setLastSavedWandPriceCMSHoneycombBlindsRoomLightening] = useState("");
    const [lastSavedWandPriceCMSHoneycombBlindsRoomDarkening, setLastSavedWandPriceCMSHoneycombBlindsRoomDarkening] = useState("");
    const [lastSavedWandPriceCMSRollerBlindsRoomLightening, setLastSavedWandPriceCMSRollerBlindsRoomLightening] = useState("");
    const [lastSavedWandPriceCMSRollerBlindsRoomDarkening, setLastSavedWandPriceCMSRollerBlindsRoomDarkening] = useState("");
    const [lastSavedWandPriceCMSZebrablindsRoomLightening, setLastSavedWandPriceCMSZebrablindsRoomLightening] = useState("");
    const [lastSavedWandPriceCMSZebrablindsRoomDarkening, setLastSavedWandPriceCMSZebrablindsRoomDarkening] = useState("");
    

    const [lastSavedcordlesspriceCMSHoneycombBlindsRoomLightening, setLastSavedcordlesspriceCMSHoneycombBlindsRoomLightening] = useState("");
    const [lastSavedcordlesspriceCMSHoneycombBlindsRoomDarkening, setLastSavedcordlesspriceCMSHoneycombBlindsRoomDarkening] = useState("");
    const [lastSavedcordlesspriceCMSRollerBlindsRoomLightening, setLastSavedcordlesspriceCMSRollerBlindsRoomLightening] = useState("");
    const [lastSavedcordlesspriceCMSRollerBlindsRoomDarkening, setLastSavedcordlesspriceCMSRollerBlindsRoomDarkening] = useState("");
    const [lastSavedcordlesspriceCMSZebrablindsRoomLightening, setLastSavedcordlesspriceCMSZebrablindsRoomLightening] = useState("");
    const [lastSavedcordlesspriceCMSZebrablindsRoomDarkening, setLastSavedcordlesspriceCMSZebrablindsRoomDarkening] = useState("");

    const [lastSavedmotorizedpriceCMSHoneycombBlindsRoomLightening, setLastSavedmotorizedpriceCMSHoneycombBlindsRoomLightening] = useState("");
    const [lastSavedmotorizedpriceCMSHoneycombBlindsRoomDarkening, setLastSavedmotorizedpriceCMSHoneycombBlindsRoomDarkening] = useState("");
    const [lastSavedmotorizedpriceCMSRollerBlindsRoomLightening, setLastSavedmotorizedpriceCMSRollerBlindsRoomLightening] = useState("");
    const [lastSavedmotorizedpriceCMSRollerBlindsRoomDarkening, setLastSavedmotorizedpriceCMSRollerBlindsRoomDarkening] = useState("");
    const [lastSavedmotorizedpriceCMSZebrablindsRoomLightening, setLastSavedmotorizedpriceCMSZebrablindsRoomLightening] = useState("");
    const [lastSavedmotorizedpriceCMSZebrablindsRoomDarkening, setLastSavedmotorizedpriceCMSZebrablindsRoomDarkening] = useState("");


    useEffect(() => {
        const cartDataJSON = sessionStorage.getItem('cartData');

        if (cartDataJSON) {
            const cartData = JSON.parse(cartDataJSON);
            setLastSavedproductName1HoneycombBlindsRoomLightening(cartData.productName1HoneycombBlindsRoomLightening);
            setLastSavedproductName1HoneycombBlindsRoomDarkening(cartData.productName1HoneycombBlindsRoomDarkening);
            setLastSavedproductName1RollerBlindsRoomLightening(cartData.productName1RollerBlindsRoomLightening);
            setLastSavedproductName1RollerBlindsRoomDarkening(cartData.productName1RollerBlindsRoomDarkening);
            setLastSavedproductName1ZebrablindsRoomLightening(cartData.productName1ZebrablindsRoomLightening);
            setLastSavedproductName1ZebrablindsRoomDarkening(cartData.productName1ZebrablindsRoomDarkening);

            setLastSavedproductName2HoneycombBlindsRoomLightening(cartData.productName2HoneycombBlindsRoomLightening);
            setLastSavedproductName2HoneycombBlindsRoomDarkening(cartData.productName2HoneycombBlindsRoomDarkening);
            setLastSavedproductName2RollerBlindsRoomLightening(cartData.productName2RollerBlindsRoomLightening);
            setLastSavedproductName2RollerBlindsRoomDarkening(cartData.productName2RollerBlindsRoomDarkening);
            setLastSavedproductName2ZebrablindsRoomLightening(cartData.productName2ZebrablindsRoomLightening);
            setLastSavedproductName2ZebrablindsRoomDarkening(cartData.productName2ZebrablindsRoomDarkening);

            setLastSavedroomnameHoneycombBlindsRoomDarkening(cartData.roomnameHoneycombBlindsRoomDarkening);
            setLastSavedroomnameHoneycombBlindsRoomLightening(cartData.roomnameHoneycombBlindsRoomLightening);
            setLastSavedroomnameRollerBlindsRoomLightening(cartData.roomnameRollerBlindsRoomLightening);
            setLastSavedroomnameRollerBlindsRoomDarkening(cartData.roomnameRollerBlindsRoomDarkening);
            setLastSavedroomnameZebrablindsRoomLightening(cartData.roomnameZebrablindsRoomLightening);
            setLastSavedroomnameZebrablindsRoomDarkening(cartData.roomnameZebrablindsRoomDarkening);

            setLastSavedWandPriceCMSHoneycombBlindsRoomLightening(cartData.WandPriceCMSHoneycombBlindsRoomLightening);
            setLastSavedWandPriceCMSHoneycombBlindsRoomDarkening(cartData.WandPriceCMSHoneycombBlindsRoomDarkening);
            setLastSavedWandPriceCMSRollerBlindsRoomLightening(cartData.WandPriceCMSRollerBlindsRoomLightening);
            setLastSavedWandPriceCMSRollerBlindsRoomDarkening(cartData.WandPriceCMSRollerBlindsRoomDarkening);
            setLastSavedWandPriceCMSZebrablindsRoomLightening(cartData.WandPriceCMSZebrablindsRoomLightening);
            setLastSavedWandPriceCMSZebrablindsRoomDarkening(cartData.WandPriceCMSZebrablindsRoomDarkening);

            setLastSavedcordlesspriceCMSHoneycombBlindsRoomLightening(cartData.cordlesspriceCMSHoneycombBlindsRoomLightening);
            setLastSavedcordlesspriceCMSHoneycombBlindsRoomDarkening(cartData.cordlesspriceCMSHoneycombBlindsRoomDarkening);
            setLastSavedcordlesspriceCMSRollerBlindsRoomLightening(cartData.cordlesspriceCMSRollerBlindsRoomLightening);
            setLastSavedcordlesspriceCMSRollerBlindsRoomDarkening(cartData.cordlesspriceCMSRollerBlindsRoomDarkening);
            setLastSavedcordlesspriceCMSZebrablindsRoomLightening(cartData.cordlesspriceCMSZebrablindsRoomLightening);
            setLastSavedcordlesspriceCMSZebrablindsRoomDarkening(cartData.cordlesspriceCMSZebrablindsRoomDarkening);
            
            setLastSavedmotorizedpriceCMSHoneycombBlindsRoomLightening(cartData.motorizedpriceCMSHoneycombBlindsRoomLightening);
            setLastSavedmotorizedpriceCMSHoneycombBlindsRoomDarkening(cartData.motorizedpriceCMSHoneycombBlindsRoomDarkening);
            setLastSavedmotorizedpriceCMSRollerBlindsRoomLightening(cartData.motorizedpriceCMSRollerBlindsRoomLightening);
            setLastSavedmotorizedpriceCMSRollerBlindsRoomDarkening(cartData.motorizedpriceCMSRollerBlindsRoomDarkening);
            setLastSavedmotorizedpriceCMSZebrablindsRoomLightening(cartData.motorizedpriceCMSZebrablindsRoomLightening);
            setLastSavedmotorizedpriceCMSZebrablindsRoomDarkening(cartData.motorizedpriceCMSZebrablindsRoomDarkening);
        }
    }, []);



    return (

        <>

            <HeaderPiece></HeaderPiece>
            <div className={styles.quantity_and_add_to_cart_group_wrapper}>



                <div className={styles.quantity_and_add_to_cart_group}>

                    <div className={styles.review_your_order_title_group}>
                        <p>Review Your Blind Selection</p>
                        <div className={styles.review_your_order_seperator_line3}></div>
                    </div>


                    <span className={styles.my_order_band_div}>
                        <div className={styles.my_order_band_wrapper}>
                            <div className={styles.logo_wrapper}>

                                <Image
                                    className={styles.logo}
                                    alt="logo"
                                    width={200}
                                    height={200}
                                    src={"/logoeconomyblindsandsshades.png"}
                                >
                                </Image>

                            </div>
                            <span className={styles.my_order_band_element1}>
                                My Order
                            </span>
                            <span className={styles.my_order_band_element1}>
                                Go Back
                            </span>
                        </div>

                        <div className={styles.progress_bar_and_order_number}>
                            <div className={styles.order_number_div}>
                                <div >
                                    <span className={styles.order_number_wrapper}>
                                        <p>
                                            Your Order Number: {"23423424534234"}
                                        </p>
                                        <p>
                                            Checkout
                                        </p>

                                    </span>
                                </div>
                            </div>


                            <div className={styles.progress_bar}>

                                <div className={styles.progress_bar_element}>
                                    <span className={styles.progress_bar_circle_and_number}>
                                        <p className={styles.progress_bar_number}>
                                            1
                                        </p>
                                    </span>
                                    <p className={styles.progress_bar_tag}
                                    >Shopping Cart</p>
                                </div>


                                <span className={styles.progress_bar_line}>
                                </span>

                                <div className={styles.progress_bar_element}>
                                    <span className={styles.progress_bar_circle_and_number}>
                                        <p className={styles.progress_bar_number}>
                                            2
                                        </p>
                                    </span>
                                    <p className={styles.progress_bar_tag}
                                    >Secure Checkout</p>
                                </div>

                                <span className={styles.progress_bar_line}>
                                </span>
                                <div className={styles.progress_bar_element}>
                                    <span className={styles.progress_bar_circle_and_number}>
                                        <p className={styles.progress_bar_number}>
                                            3
                                        </p>
                                    </span>
                                    <p className={styles.progress_bar_tag}
                                    >Order Confimation</p>
                                </div>



                            </div>
                        </div>
                    </span>

                    <div className={styles.review_your_order_bg}>

                        <div className={styles.review_your_order_bg_wrapper}>

                            <div className={styles.column1}>

                                <div className={styles.column_wrapper}>
                                    <Image
                                        alt="column1_image"
                                        width={100}
                                        height={100}
                                        src={"/rfblinds.jpg"}
                                        className={styles.column1_image}>

                                    </Image>
                                    <div className={styles.description_and_answer_div}>


                                        <div className={styles.window_name_answer}>Window:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>

                                        <div className={styles.answers_answers}>
                                            {lastSavedproductName1HoneycombBlindsRoomLightening && (
                                                <span>{lastSavedproductName1HoneycombBlindsRoomLightening}</span>
                                            )}
                                            {lastSavedproductName1HoneycombBlindsRoomDarkening && (
                                                <span>{lastSavedproductName1HoneycombBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedproductName1RollerBlindsRoomLightening && (
                                                <span>{lastSavedproductName1RollerBlindsRoomLightening}</span>
                                            )}
                                            {lastSavedproductName1RollerBlindsRoomDarkening && (
                                                <span>{lastSavedproductName1RollerBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedproductName1ZebrablindsRoomLightening && (
                                                <span>{lastSavedproductName1ZebrablindsRoomLightening}</span>
                                            )}
                                            {lastSavedproductName1ZebrablindsRoomDarkening && (
                                                <span>{lastSavedproductName1ZebrablindsRoomDarkening}</span>
                                            )}
                                        </div>

                                    </div>

                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.window_type_answer}>Type:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {lastSavedproductName2HoneycombBlindsRoomLightening && (
                                                <span>{lastSavedproductName2HoneycombBlindsRoomLightening}</span>
                                            )}
                                            {lastSavedproductName2HoneycombBlindsRoomDarkening && (
                                                <span>{lastSavedproductName2HoneycombBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedproductName2RollerBlindsRoomLightening && (
                                                <span>{lastSavedproductName2RollerBlindsRoomLightening}</span>
                                            )}
                                            {lastSavedproductName2RollerBlindsRoomDarkening && (
                                                <span>{lastSavedproductName2RollerBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedproductName2ZebrablindsRoomLightening && (
                                                <span>{lastSavedproductName2ZebrablindsRoomLightening}</span>
                                            )}
                                            {lastSavedproductName2ZebrablindsRoomDarkening && (
                                                <span>{lastSavedproductName2ZebrablindsRoomDarkening}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.room_name_div}>Room Name:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {lastSavedroomnameHoneycombBlindsRoomLightening && (
                                                <span>{lastSavedroomnameHoneycombBlindsRoomLightening}</span>
                                            )}
                                            {lastSavedroomnameHoneycombBlindsRoomDarkening && (
                                                <span>{lastSavedroomnameHoneycombBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedroomnameRollerBlindsRoomLightening && (
                                                <span>{lastSavedroomnameRollerBlindsRoomLightening}</span>
                                            )}
                                            {lastSavedroomnameRollerBlindsRoomDarkening && (
                                                <span>{lastSavedroomnameRollerBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedroomnameZebrablindsRoomLightening && (
                                                <span>{lastSavedroomnameZebrablindsRoomLightening}</span>
                                            )}
                                            {lastSavedroomnameZebrablindsRoomDarkening && (
                                                <span>{lastSavedroomnameZebrablindsRoomDarkening}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.notes_div}>
                                        <div className={styles.notes_div_wrapper}>
                                            Notes:
                                            <p className={styles.notes_section} contentEditable="true">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.column_seperator_wrapper}>
                                <div className={styles.column_seperator}></div>
                            </div>



                            <div className={styles.column2}>
                                <div className={styles.column_wrapper}>
                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.width2_answer}>Window Size:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {activeDimensionsinsideMount === "insideMount" && (
                                                <>
                                                    <div>
                                                        Width:
                                                        {selectedInchesWidthInsideMount ? ` ${selectedInchesWidthInsideMount}` : ""}
                                                        {selectedFractionsWidthInsideMount ? ` ${selectedFractionsWidthInsideMount}` : ""}
                                                    </div>
                                                    <div>
                                                        Height:
                                                        {selectedInchesHeightInsideMount ? ` ${selectedInchesHeightInsideMount}` : ""}
                                                        {selectedFractionsHeightInsideMount ? ` ${selectedFractionsHeightInsideMount}` : ""}
                                                    </div>
                                                </>
                                            )}

                                            {activeDimensionsoutsideMount === "outsideMount" && (
                                                <>
                                                    <div>
                                                        Width:
                                                        {selectedInchesWidthOutsideMount ? ` ${selectedInchesWidthOutsideMount}` : ""}
                                                        {selectedFractionsWidthOutsideMount ? ` ${selectedFractionsWidthOutsideMount}` : ""}
                                                    </div>
                                                    <div>
                                                        Height:
                                                        {selectedInchesHeightOutsideMount ? ` ${selectedInchesHeightOutsideMount}` : ""}
                                                        {selectedFractionsHeightOutsideMount ? ` ${selectedFractionsHeightOutsideMount}` : ""}
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                    </div>

                                    <div className={styles.description_and_answer_div}>

                                        <div className={styles.mount_answer}>Mount:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {InsideOrOutsideRenderingContent ? `Mount Type: ${InsideOrOutsideRenderingContent}` : "Mount Type?"}


                                            {lastSavedroomnameHoneycombBlindsRoomLightening && (
                                                <span>{lastSavedroomnameHoneycombBlindsRoomLightening}</span>
                                            )}
                                            
                                            {lastSavedroomnameHoneycombBlindsRoomDarkening && (
                                                <span>{lastSavedroomnameHoneycombBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedroomnameRollerBlindsRoomLightening && (
                                                <span>{lastSavedroomnameRollerBlindsRoomLightening}</span>
                                            )}
                                            {lastSavedroomnameRollerBlindsRoomDarkening && (
                                                <span>{lastSavedroomnameRollerBlindsRoomDarkening}</span>
                                            )}
                                            {lastSavedroomnameZebrablindsRoomLightening && (
                                                <span>{lastSavedroomnameZebrablindsRoomLightening}</span>
                                            )}
                                            {lastSavedroomnameZebrablindsRoomDarkening && (
                                                <span>{lastSavedroomnameZebrablindsRoomDarkening}</span>
                                            )}
                                        </div>

                                    </div>


                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.materials_answer}>Material:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {selectedFileNameMaterials ? `Material: ${selectedFileNameMaterials}` : "Material?"}
                                        </div>
                                    </div>

                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.lift_type_answer}>Lift Type:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers3}>
                                            <div>
                                                {active_wand_cordless_motorizedRenderingContent ? `Lift Type: ${active_wand_cordless_motorizedRenderingContent}` : "Lift Type?"}
                                            </div>

                                            <div>
                                                {active_wand_left_choice_rendering_content ? ` ${active_wand_left_choice_rendering_content}` : ""}
                                            </div>

                                            <div>
                                                Lift Price: {nameZebrablindsRoomDarkening}
                                            </div>

                                            <div>
                                                {active_wand_right_choice_rendering_content ? ` ${active_wand_right_choice_rendering_content}` : ""}
                                            </div>

                                        </div>
                                    </div>


                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.casette_rail_type_answer}> Top Rail Choice:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers2}>
                                            {selectedImagesTop?.length > 0 && (
                                                <div className={styles.left_imageContainer_wrapper}>
                                                    <div className={`${styles.casette_rail_type_answer_container} ${styles.casette_rail_type_answer_container_styled}`}>
                                                        <p>
                                                            {(
                                                                Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key === selectedImagesTop[0]) ||
                                                                Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key === selectedImagesTop[0])
                                                            )?.label}
                                                        </p>
                                                        <Image
                                                            width={200}
                                                            height={200}
                                                            className={styles.casette_rail_type_answer_image_render}
                                                            src={
                                                                (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key === selectedImagesTop[0]) ||
                                                                    Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key === selectedImagesTop[0])
                                                                )?.src
                                                            }
                                                            alt={
                                                                (Top_Head_Rail_Choices_Materialskey1.TopRailList1.find(item => item.key === selectedImagesTop[0]) ||
                                                                    Top_Head_Rail_Choices_Materialskey2.TopRailList2.find(item => item.key === selectedImagesTop[0])
                                                                )?.label
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    </div>

                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.bottom_rail_type_answer}>Bottom Rail Choice:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers2}>
                                            {selectedImagesBottom?.length > 0 && (

                                                <div className={styles.left_imageContainer_wrapper}>

                                                    <div className={`${styles.bottom_rail_type_answer_container} ${styles.bottom_rail_type_answer_container_styled}`}>
                                                        <p>
                                                            {Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key === selectedImagesBottom)?.label}
                                                        </p>
                                                        <Image
                                                            width={200}
                                                            height={200}
                                                            className={styles.bottom_rail_type_answer_image_render}
                                                            src={Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key === selectedImagesBottom)?.src}
                                                            alt={Bottom_Bottom_Rail_Choices_Materials.BottomRailList.find(item => item.key === selectedImagesBottom)?.label}
                                                        />

                                                    </div>
                                                </div>

                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.column_seperator_wrapper}>
                                <div className={styles.column_seperator}></div>
                            </div>


                            <div className={styles.column3}>
                                <div className={styles.column_wrapper3}>
                                    <div className={styles.price_summary_wrapper}>
                                        <p className={styles.price_summary_title}>Price Summary</p>

                                        <span className={styles.price_summary_title2_group}>

                                            <span className={styles.price_summary_title2_Spanner}>
                                                <p className={styles.price_summary_title2}>Price before taxes</p>
                                                <p className={styles.price_summary_title2_tagger}>{"$0.00"}</p>
                                            </span>

                                            <span className={styles.price_summary_title2_Spanner}>
                                                <p className={styles.price_summary_title2}>Price after taxes</p>
                                                <p className={styles.price_summary_title2_tagger}>{"$0.00"}</p>
                                            </span>

                                            <span className={styles.price_summary_title2_Spanner}>
                                                <p className={styles.price_summary_title2}>Shipping</p>
                                                <p className={styles.price_summary_title2_tagger}>{"$0.00"}</p>
                                            </span>

                                            <span className={styles.price_summary_title2_Spanner}>
                                                <p className={styles.price_summary_title2}>Total</p>
                                                <p className={styles.price_summary_title2_tagger}>${totalpricecalculated}</p>



                                            </span>

                                        </span>

                                        <Link href={'/checkoutpage'}>
                                            <p className={styles.check_out_button}>CHECKOUT</p>
                                        </Link>
                                        <div>

                                            <p className={styles.taxes_title}>Taxes</p>

                                            <select className={styles.countrySelect} value={selectedCountry} onChange={handleCountryChange}>

                                                <option value="">Select a country</option>
                                                <option value="canada">Canada</option>
                                                <option value="us">United States</option>
                                            </select>

                                            {selectedCountry === 'canada' && (
                                                <select className={styles.regionSelect} value={selectedRegion} onChange={handleRegionChange}>
                                                    <option value="">Select a province</option>
                                                    <option value="alberta">Alberta</option>
                                                    <option value="british-columbia">British Columbia</option>
                                                    <option value="manitoba">Manitoba</option>
                                                    <option value="new-brunswick">New Brunswick</option>
                                                    <option value="newfoundland-and-labrador">Newfoundland and Labrador</option>
                                                    <option value="northwest-territories">Northwest Territories</option>
                                                    <option value="nova-scotia">Nova Scotia</option>
                                                    <option value="nunavut">Nunavut</option>
                                                    <option value="ontario">Ontario</option>
                                                    <option value="prince-edward-island">Prince Edward Island</option>
                                                    <option value="quebec">Quebec</option>
                                                    <option value="saskatchewan">Saskatchewan</option>
                                                    <option value="yukon">Yukon</option>
                                                </select>
                                            )}

                                            {selectedCountry === 'us' && (
                                                <select className={styles.regionSelect} value={selectedRegion} onChange={handleRegionChange}>
                                                    <option value="">Select a state</option>
                                                    <option value="alabama">Alabama</option>
                                                    <option value="alaska">Alaska</option>
                                                    <option value="arizona">Arizona</option>
                                                    <option value="arkansas">Arkansas</option>
                                                    <option value="california">California</option>
                                                    <option value="colorado">Colorado</option>
                                                    <option value="connecticut">Connecticut</option>
                                                    <option value="delaware">Delaware</option>
                                                    <option value="florida">Florida</option>
                                                    <option value="georgia">Georgia</option>
                                                    <option value="hawaii">Hawaii</option>
                                                    <option value="idaho">Idaho</option>
                                                    <option value="illinois">Illinois</option>
                                                    <option value="indiana">Indiana</option>
                                                    <option value="iowa">Iowa</option>
                                                    <option value="kansas">Kansas</option>
                                                    <option value="kentucky">Kentucky</option>
                                                    <option value="louisiana">Louisiana</option>
                                                    <option value="maine">Maine</option>
                                                    <option value="maryland">Maryland</option>
                                                    <option value="massachusetts">Massachusetts</option>
                                                    <option value="michigan">Michigan</option>
                                                    <option value="minnesota">Minnesota</option>
                                                    <option value="mississippi">Mississippi</option>
                                                    <option value="missouri">Missouri</option>
                                                    <option value="montana">Montana</option>
                                                    <option value="nebraska">Nebraska</option>
                                                    <option value="nevada">Nevada</option>
                                                    <option value="new-hampshire">New Hampshire</option>
                                                    <option value="new-jersey">New Jersey</option>
                                                    <option value="new-mexico">New Mexico</option>
                                                    <option value="new-york">New York</option>
                                                    <option value="north-carolina">North Carolina</option>
                                                    <option value="north-dakota">North Dakota</option>
                                                    <option value="ohio">Ohio</option>
                                                    <option value="oklahoma">Oklahoma</option>
                                                    <option value="oregon">Oregon</option>
                                                    <option value="pennsylvania">Pennsylvania</option>
                                                    <option value="rhode-island">Rhode Island</option>
                                                    <option value="south-carolina">South Carolina</option>
                                                    <option value="south-dakota">South Dakota</option>
                                                    <option value="tennessee">Tennessee</option>
                                                    <option value="texas">Texas</option>
                                                    <option value="utah">Utah</option>
                                                    <option value="vermont">Vermont</option>
                                                    <option value="virginia">Virginia</option>
                                                    <option value="washington">Washington</option>
                                                    <option value="west-virginia">West Virginia</option>
                                                    <option value="wisconsin">Wisconsin</option>
                                                    <option value="wyoming">Wyoming</option>
                                                </select>
                                            )}

                                            <div className={styles.selectedRegion}>
                                                {selectedRegion && `Selected Region: ${selectedRegion}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.addtocart}>
                    <div className={styles.addtocartContainer}>
                        <Link
                            className={styles.addtocartButton}
                            href={"/zebrablinds"}
                        >Back</Link>
                    </div>
                </div>

            </div>


            {showFooter &&
                <span className={styles.ZebraBlindsFooter_wrapper}>
                    <div className={`${styles.ZebraBlindsFooter} ${showFooter ? styles.showFooter : ''}`}>
                        <div className={styles.shipping_divider2}></div>
                        <FooterPage></FooterPage>
                        <div className={styles.shipping_divider2}></div>
                    </div>
                </span>
            }

        </>
    );
};

export default AddToCart;
