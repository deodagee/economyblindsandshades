// addtocart.js


import React, { useState, useEffect, useRef } from "react";
import styles from '../../../styles/components/pages/add_to_cart.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from "next-auth/react";
import HeaderPiece from "../../components/header.js"
import FooterPage from "../../../pages/components/footer.js"

const AddToCart = () => {

    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Adjust the threshold as needed
            const threshold = 100;

            // Check if we are close to the bottom of the page
            const isNearBottom = scrollPosition + windowHeight >= documentHeight - threshold;

            // Set the state to show or hide the footer
            setShowFooter(isNearBottom);
        };

        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once


    const { data: session } = useSession();
    const [productName1, setProductName1] = useState("");
    const [productName2, setProductName2] = useState("");

    const [selectedInchesWidth, setselectedInchesWidth] = useState(null);
    const [selectedFractionsWidth, setselectedFractionsWidth] = useState(null);
    const [selectedInchesHeight, setselectedInchesHeight] = useState(null);
    const [selectedFractionsHeight, setselectedFractionsHeight] = useState(null);
    const [InsideOrOutsideRenderingContent, setInsideOrOutsideRenderingContent] = useState('Inside Mount');
    const [selectedFileNameMaterials, setselectedFileNameMaterials] = useState(null);
    const [active_wand_cordless_motorizedRenderingContent, setactive_wand_cordless_motorizedRenderingContent] = useState('');
    const [active_wand_left_choice_rendering_content, setactive_wand_left_choice_rendering_content] = useState("Selected Wand Side:");
    const [active_wand_right_choice_rendering_content, setactive_wand_right_choice_rendering_content] = useState(null);
    const [selectedImagesTop, setSelectedImagesTop] = useState([]);
    const [selectedImagesBottom, setSelectedImagesBottom] = useState([]);


    const fetchLatestData = async () => {
        try {
            const response = await fetch("/api/getLatestData");
            const result = await response.json();
            const latestData = result.data;

            if (latestData) {
                setProductName1(latestData.productName1 || "");
                setProductName2(latestData.productName2 || "");
            }
        } catch (error) {
            console.error("Error fetching latest data:", error);
        }
    };

    useEffect(() => {
        // Fetch the latest data when the component mounts
        fetchLatestData();
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
                        <div className={styles.progress_bar}>
                            
                            <div className={styles.progress_bar_element}>
                            <span className={styles.progress_bar_circle_and_number}>
                                <p className={styles.progress_bar_number}>
                                    1
                                </p>
                            </span>
                            <p>start</p>     
                            </div>                


                            <span className={styles.progress_bar_line}>
                            </span>

                            <div className={styles.progress_bar_element}>
                            <span className={styles.progress_bar_circle_and_number}>
                                <p className={styles.progress_bar_number}>
                                    2
                                </p> 
                                  </span>
                                  <p>middle</p>     
                                  </div>                


                            <span className={styles.progress_bar_line}>
                            </span>


                            <div className={styles.progress_bar_element}>
                            <span className={styles.progress_bar_circle_and_number}>
                                <p className={styles.progress_bar_number}>
                                    3
                                </p>                    
                                    </span>
                                    <p>end</p>     
                                    </div>                



                        </div>
                    </span>

                    <div className={styles.review_your_order_bg}>

                        <div className={styles.review_your_order_bg_wrapper}>

                            <div className={styles.column1}>
                                <div className={styles.column_wrapper}>

                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.window_name_answer}>Window:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {productName1}
                                        </div>
                                    </div>

                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.window_type_answer}>Type:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {productName2}
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

                                            <div>
                                                Length: {selectedInchesWidth} - {selectedFractionsWidth}
                                                {selectedFractionsWidth && " Inches Long"}
                                            </div>

                                            <div>
                                                Height: {selectedInchesHeight} - {selectedFractionsHeight}
                                                {selectedFractionsHeight && " Inches High"}
                                            </div>

                                        </div>
                                    </div>

                                    <div className={styles.description_and_answer_div}>

                                        <div className={styles.mount_answer}>Mount:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {InsideOrOutsideRenderingContent ? `Mount Type: ${InsideOrOutsideRenderingContent}` : "Please Select A Mount Type"}
                                        </div>

                                    </div>


                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.materials_answer}>Material:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {selectedFileNameMaterials ? `Material: ${selectedFileNameMaterials}` : "Please Select Your Material"}
                                        </div>
                                    </div>

                                    <div className={styles.description_and_answer_div}>
                                        <div className={styles.lift_type_answer}>Lift Type:</div>
                                        <div className={styles.description_and_answer_seperator_wrapper}>
                                            <div className={styles.description_and_answer_column_seperator}></div>
                                        </div>
                                        <div className={styles.answers_answers3}>
                                            <div>
                                                {active_wand_cordless_motorizedRenderingContent ? `Lift Type: ${active_wand_cordless_motorizedRenderingContent}` : "Please Select A Lift Type"}
                                            </div>
                                            <div>
                                                {active_wand_left_choice_rendering_content ? ` ${active_wand_left_choice_rendering_content}` : ""}
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
                                <div className={styles.column_wrapper}>
                                    <div className={styles.price_summary_wrapper}>
                                        <p className={styles.price_summary_title}>Price Summary</p>

                                        <p className={styles.price_summary_title}>Price before taxes</p>
                                        <p className={styles.price_summary_title}>Price after taxes</p>
                                        <p className={styles.price_summary_title}>Shipping: Free</p>

                                        <Link href={'/checkoutpage'}>
                                            <p className={styles.add_to_cart}>COMFIRM PURCHASE</p>
                                        </Link>
                                        <p className={styles.add_to_cart}>Price Summary</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={styles.addtocart}>
                    <div className={styles.addtocartContainer}>
                        <div className={styles.PurchaseTitle}>Go Back</div>
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
