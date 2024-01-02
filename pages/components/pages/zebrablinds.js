import React from "react";
import styles from '../../../styles/components/pages/zebrablinds.module.css';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MaterialsPage, { selectedImageData } from '../materials/materials.js'; // Adjust the path accordingly
import FabricsPage from '../fabrics/fabrics.js'; // Adjust the path accordingly
import LeftSidePage from "../leftside/leftside.js";
import Footer from "../footer.js";



function ZebraBlinds() {
    const [Was_Next_Button_Clicked4, Set_Was_Next_Button_Clicked4] = useState(false);



    //Logic for add chain side

    const [showImageright, setShowImageright] = useState(true);


    const [showImageleft, setShowImageleft] = useState(false);



    const showleftsidechain = () => {
        setShowImageleft(!showImageleft);
        setShowImageleft(true);
        // Toggle off the right side image
        setShowImageright(false);
    };

    const showrightsidechain = () => {
        setShowImageright(!showImageright);
        setShowImageright(true);

        // Toggle off the left side image
        setShowImageleft(false);
    };

    //logic for turning next button's bg color 

    const NextButton4buttonStyle = {
        backgroundColor: Was_Next_Button_Clicked4 ? 'white' : '#313131',
    };





    //2. // LOGIC FOR SHOW WHOLE NUMBERS INSIDE MOUNT HEIGHT
    const [selectedNumber_height_inside_mount, setselectedNumber_height_inside_mount] = useState(null);
    const [whole_number_index_inside_mount_height, setwhole_number_index_inside_mount_height] = useState(1);
    const whole_number_inside_mount_height = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

    const handle_drop_down_show_numbers_height_inside_mount = () => {
        setwhole_number_index_inside_mount_height(!whole_number_index_inside_mount_height);
    }
    //LOGIC FOR CLICKING THE SHOWN NUMBERS INSIDE MOUNT HEIGHT
    const handleNumberClick_inside_mount_height = (number_inside_mount_height) => {
        setselectedNumber_height_inside_mount(number_inside_mount_height);
    };

    const renderNumbers_inside_mount_height = () => {
        return whole_number_inside_mount_height.map((number_inside_mount_height, index) => (
            <div
                key={index}
                className={`${styles.singleNumber_inside_mount_height} ${selectedNumber_height_inside_mount === number_inside_mount_height ? styles.selectedNumber_height_inside_mount : ''}`}
                onClick={() => handleNumberClick_inside_mount_height(number_inside_mount_height)}
            >
                {number_inside_mount_height}
            </div>
        ));
    };
    //2. // LOGIC FOR SHOW FRACTIONS INSIDE MOUNT FRACTIONS HEIGHT
    const [selectedFraction_height, setselectedFraction_height] = useState(null);
    const [fractionIndex, setFractionIndex] = useState(0);
    const fractions_inside_mount_height = ["0", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];

    const handle_drop_down_show_fractions_inside_mount_height = () => {
        setFractionIndex(!fractionIndex);
    }

    //LOGIC FOR CLICKING THE SHOWN FRACTIONS INSIDE MOUNT FRACTIONS HEIGHT
    const handleFractionClick_inside_mount_height = (fraction_inside_mount_height) => {
        setselectedFraction_height(fraction_inside_mount_height);
    };

    const renderFractions_inside_mount_height = () => {
        return fractions_inside_mount_height.map((fraction_inside_mount_height, index) => (
            <div
                key={index}
                className={`${styles.singleFraction_height} ${selectedFraction_height === fraction_inside_mount_height ? styles.selectedFraction_height : ''}`}
                onClick={() => handleFractionClick_inside_mount_height(fraction_inside_mount_height)}
            >
                {fraction_inside_mount_height}
            </div>
        ));
    };


    //---------------------------------------------------------------------------------------------------

    //2. // LOGIC FOR SHOW WHOLE NUMBERS INSIDE MOUNT WIDTH
    const [selectedNumber_inside_mount_width, setselectedNumber_inside_mount_width] = useState(null);
    const [whole_number_index_inside_mount_width, setwhole_number_index_inside_mount_width] = useState(1);
    const whole_number_inside_mount_width = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

    const handle_drop_down_show_numbers_width_inside_mount = () => {
        setwhole_number_index_inside_mount_width(!whole_number_index_inside_mount_width);
    }
    //LOGIC FOR CLICKING THE SHOWN NUMBERS INSIDE MOUNT WIDTH
    const handleNumberClick_inside_mount_width = (number_inside_mount_width) => {
        setselectedNumber_inside_mount_width(number_inside_mount_width);
    };

    const renderNumbers_inside_mount_width = () => {
        return whole_number_inside_mount_width.map((number_inside_mount_width, index) => (
            <div
                key={index}
                className={`${styles.singleNumber_inside_mount_width} ${selectedNumber_inside_mount_width === number_inside_mount_width ? styles.selectedNumber_inside_mount_width : ''}`}
                onClick={() => handleNumberClick_inside_mount_width(number_inside_mount_width)}
            >
                {number_inside_mount_width}
            </div>
        ));
    };
    //2. // LOGIC FOR SHOW FRACTIONS INSIDE MOUNT FRACTIONS WIDTH
    const [selectedFraction_width, setselectedFraction_width] = useState(null);
    const [fractionIndex_inside_mount_width, setfractionIndex_inside_mount_width] = useState(0);
    const fractions_inside_mount_width = ["0", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];

    const handle_drop_down_show_fractions_inside_mount_width = () => {
        setfractionIndex_inside_mount_width(!fractionIndex_inside_mount_width);
    }

    //LOGIC FOR CLICKING THE SHOWN FRACTIONS INSIDE MOUNT FRACTIONS WIDTH
    const handleFractionClick_inside_mount_width = (fraction_inside_mount_width) => {
        setselectedFraction_width(fraction_inside_mount_width);
    };

    const renderFractions_inside_mount_width = () => {
        return fractions_inside_mount_width.map((fraction_inside_mount_width, index) => (
            <div
                key={index}
                className={`${styles.singleFraction_width} ${selectedFraction_width === fraction_inside_mount_width ? styles.selectedFraction_width : ''}`}
                onClick={() => handleFractionClick_inside_mount_width(fraction_inside_mount_width)}
            >
                {fraction_inside_mount_width}
            </div>
        ));
    };










    //1. //  ellipse logic
    const [active_inside_outside_ellipse, Setactive_inside_outside_ellipse] = useState(null);
    const [active_wand_cordlift_motorized, Setactive_wand_cordlift_motorized] = useState(null);
    const [active_cassette_round1, Setactive_cassette_round1] = useState(null);

    const [active_cassette_round2, Setactive_cassette_round2] = useState(null);

    const [InsideOrOutsideRenderingContent, setInsideOrOutsideRenderingContent] = useState('');
    const [active_wand_cordlift_motorizedRenderingContent, setactive_wand_cordlift_motorizedRenderingContent] = useState('');
    const [active_cassette_round1RenderingContent, Setactive_cassette_round1RenderingContent] = useState('');
    const [bottomRailOptionsRenderingContent, setbottomRailOptionsRenderingContent] = useState('');

    //LOGIC FOR BOM

    //Add inside or outside options to the bom 

    const handleClickInside_And_Outisde_Ellipses = (ellipseNumber) => {
        Setactive_inside_outside_ellipse(ellipseNumber);

        // Set the content based on the clicked ellipse number
        if (ellipseNumber === 1) {
            setInsideOrOutsideRenderingContent('Inside Mount');
        } else if (ellipseNumber === 2) {
            setInsideOrOutsideRenderingContent('Outside Mount');
        }

        // Keep the existing functionality here if needed

    };

    //add bottom rail options to the bom
    const handleEllipseClick5 = (ellipseNumber) => {
        Setactive_cassette_round2(ellipseNumber);

        if (ellipseNumber === 1) {
            setbottomRailOptionsRenderingContent("Bottom Rail Option 1");
        } else if (ellipseNumber === 2) {
            setbottomRailOptionsRenderingContent("Bottom Rail Option 2");
        } else if (ellipseNumber === 3) {
            setbottomRailOptionsRenderingContent("Bottom Rail Option 3");
        }

    };


    //Add 3 lift type options to the bom
    const handleLiftFeatureEllipsess = (ellipseNumber) => {
        Setactive_wand_cordlift_motorized((prevActiveEllipse) => (prevActiveEllipse === ellipseNumber ? null : ellipseNumber));

        // Set the content based on the clicked ellipse number
        if (ellipseNumber === 1) {
            setactive_wand_cordlift_motorizedRenderingContent('wand');
        } else if (ellipseNumber === 2) {
            setactive_wand_cordlift_motorizedRenderingContent('cord lift');
        }
        else if (ellipseNumber === 3) {
            setactive_wand_cordlift_motorizedRenderingContent('motorized');
        }

        // Keep the existing functionality here if needed

    };


    //Add 2 head rail options to the bom
    const handleactive_cassette_round1Ellipses = (ellipseNumber) => {
        Setactive_cassette_round1((prevActiveEllipse) => (prevActiveEllipse === ellipseNumber ? null : ellipseNumber));

        // Set the content based on the clicked ellipse number
        if (ellipseNumber === 1) {
            Setactive_cassette_round1RenderingContent('cassette');
        } else if (ellipseNumber === 2) {
            Setactive_cassette_round1RenderingContent('round');
        }
    };

    // Keep the existing functionality here if needed




    //Logic for product title 
    const [product_title, setproduct_title] = useState("ZEBRA BLINDS SHADES");

    //Logic for room darkening section
    const [roomDarkeningContent, setRoomDarkeningContent] = useState('');

    useEffect(() => {
        // Fetch the contents of the room_darkening_element and set the state
        const roomDarkeningElement = document.querySelector(`.${styles.room_darkening_element}`);
        if (roomDarkeningElement) {
            setRoomDarkeningContent(roomDarkeningElement.textContent || roomDarkeningElement.innerText);
        }
    }, []);




    return (

        <>
            <div className={styles.page}>
                <div className={styles.page_wrapper}>

                    <LeftSidePage></LeftSidePage>

                    <div className={styles.right_half}>

                        <div className={styles.top_title_area}>
                            <div className={styles.product_title}>ZEBRA BLINDS SHADES</div>

                            <div className={styles.room_darkening_rectangle}></div>


                            <div>
                                <div className={styles.room_darkening}>

                                    <p className={styles.room_darkening_element}>Room Darkening</p>

                                    <div className={styles.top_prices}>
                                        <p className={styles.price_regular}>$ 00.00 </p>

                                        <p className={styles.price_discount}>SAVE 00%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={styles.a_distinctive_look_that}
                        >
                            A distinctive look that makes a statement, this revolutionary     sheer shade
                            adds personality to any room. These zebra shades are made with two pieces
                            of fabric, which both have alternating panels/bands:
                        </div>

                        <div className={styles.star_group}>
                            <Image alt="star" width={100} height={100} className={styles.star_6} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_7} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_8} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_9} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_10} src="/star.png" />
                        </div>

                        <div className={styles.top_divider_line}></div>

                        <div className={styles.select_mount_group}>
                            <div className={styles.choose_inside_or_outside_mount}>
                                1. Choose Inside or Outside Mount
                            </div>

                            <div>
                                <div className={styles.inside_mount_group}>
                                    <div
                                        className={`${styles.inside_mount_ellipse} ${active_inside_outside_ellipse === 1 ? styles.active_inside_outside_ellipse : ''}`}
                                        onClick={() => handleClickInside_And_Outisde_Ellipses(1)}
                                    ></div>
                                    <div className={styles.inside_mount}>Inside Mount</div>

                                    <div className={styles.inside_mount_measurement_instructions}>
                                        Measurement Instructions:
                                    </div>

                                    <div
                                        className={styles.step_1}
                                    >
                                        <p className={styles.step_tag}> Step 1:</p> Measure in 3 places on the width, use the smallest measurement.
                                    </div>

                                    <div
                                        className={styles.step_2}
                                    >
                                        <p className={styles.step_tag}>  Step 2:</p>Measure the Height in the Center, use this measurement.
                                    </div>

                                    <div
                                        className={styles.step_3}
                                    >
                                        <p className={styles.step_tag}> Step 3: </p> Ensure you have 3” inside the window frame ledge. (If you don’t have 3” window Ledge follow process for outside mount).
                                    </div>

                                </div>

                                <Image alt="image" width={400} height={400} className={styles.insidemount_Image} src="/insidemount.png" />

                                <div className={styles.enter_size_inside_mount}>

                                    <div className={styles.enter_size_inside_mount_tag}>Choose Inside Mount Size</div>

                                    <div className={styles.enter_size_inside_mount_triggers}>


                                        <div className={styles.enter_height1}>

                                            <div className={styles.height_inside_mount_sub_title}>Height:</div>
                                            <div className={styles.enter_height_inside_mount_rectangle_1}>
                                                <div className={styles.toggle_disclaimer}>
                                                    Toggle
                                                </div>
                                                <svg
                                                    className={styles.polygon_1}
                                                    width="20"
                                                    height="16"
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={handle_drop_down_show_numbers_height_inside_mount}>
                                                    <path
                                                        d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                        fill="#da1212"
                                                    />
                                                </svg>



                                            </div>


                                            <div className={styles.enter_height_inside_mount_rectangle_2}>
                                                <div className={styles.toggle_disclaimer}>
                                                    Toggle
                                                </div>
                                                <svg
                                                    className={styles.polygon_2}
                                                    width="20"
                                                    height="16"
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={handle_drop_down_show_fractions_inside_mount_height}>
                                                    <path
                                                        d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                        fill="#da1212"
                                                    />
                                                </svg>

                                            </div>



                                            <div>
                                                <div className={styles.height_scroll_number_inches}>

                                                    {whole_number_index_inside_mount_height && (
                                                        <div className={styles.display_whole_numbers_wrapper}>
                                                            <div>
                                                                <div className={styles.heightScrollNumberInches}>
                                                                    {whole_number_index_inside_mount_height && (
                                                                        <div className={styles.displayWholeNumbersWrapper}>
                                                                            <div className={styles.displayWholeNumbers}>{whole_number_index_inside_mount_height && <>{renderNumbers_inside_mount_height()}</>}</div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>


                                            <div className={styles.scroll_number_fractions_inside_mount_height}>
                                                <p className={styles.height_rendering_element_fractions}>
                                                    <div className={styles.heightScrollNumberInches}>
                                                        {fractionIndex && (
                                                            <div className={styles.display_fractions_inside_mount_height}>
                                                                <div className={styles.displayWholeFractions_inside_mount_height}>{fractionIndex && <>{renderFractions_inside_mount_height()}</>}</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </p>
                                            </div>







                                        </div>
                                    </div>



                                    <div className={styles.enter_width_inside_mount}>

                                        <div className={styles.enter_width_inside_mount_title}>Width1:</div>

                                        <div className={styles.enter_width_inside_mount_rectangle_1}>
                                            <div className={styles.toggle_disclaimer}>
                                                Toggle
                                            </div>
                                            <svg
                                                className={styles.polygon_3}
                                                width="20"
                                                height="16"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={handle_drop_down_show_numbers_width_inside_mount}

                                            >                                                <path
                                                    d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                    fill="#da1212"
                                                />
                                            </svg>


                                        </div>

                                        <div className={styles.enter_width_inside_mount_rectangle_2}>
                                            <div className={styles.toggle_disclaimer}>
                                                Toggle
                                            </div>
                                            <svg
                                                className={styles.polygon_4}
                                                width="20"
                                                height="16"
                                                viewBox="0 0 10 8"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={handle_drop_down_show_fractions_inside_mount_width}
                                            >
                                                <path
                                                    d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                    fill="#da1212"
                                                />
                                            </svg>


                                        </div>

                                        <div className={styles.for_width_inches_scrollbar}>
                                            <div className={styles.height_scroll_number_inches}>

                                                {whole_number_index_inside_mount_width && (
                                                    <div className={styles.display_whole_numbers_wrapper}>
                                                        <div>
                                                            <div className={styles.heightScrollNumberInches}>
                                                                {whole_number_index_inside_mount_width && (
                                                                    <div className={styles.displayWholeNumbersWrapper}>
                                                                        <div className={styles.displayWholeNumbers}>{whole_number_index_inside_mount_width && <>{renderNumbers_inside_mount_width()}</>}</div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>


                                        <div className={styles.scroll_number_fractions_inside_mount_width}>
                                            <p className={styles.rendering_element_fractions_inside_mount_width}>
                                                <div className={styles.heightScrollNumberInches}>
                                                    {fractionIndex_inside_mount_width && (
                                                        <div className={styles.display_fractions_inside_mount_width}>
                                                            <div className={styles.displayWholeFractions_inside_mount_width}>{fractionIndex_inside_mount_width && <>{renderFractions_inside_mount_width()}</>}</div>
                                                        </div>
                                                    )}
                                                </div>
                                            </p>
                                        </div>




                            





                                        <svg
                                            className={styles.polygon_5}
                                            width="10"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>



                                        <svg
                                            className={styles.polygon_5}
                                            width="10"
                                            height="8"
                                            viewBox="0 0 10 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                fill="#D9D9D9"
                                            />
                                        </svg>

                                    </div>
                                </div>

                            </div>


                            <div className={styles.outside_mount_group}>
                                <div
                                    className={`${styles.outside_mount_ellipse} ${active_inside_outside_ellipse === 2 ? styles.active_inside_outside_ellipse : ''}`}
                                    onClick={() => handleClickInside_And_Outisde_Ellipses(2)}
                                ></div>
                                <div className={styles.outside_mount}>Outside Mount</div>

                                <div className={styles.outside_mount_instructions}>
                                    Measurement Instructions:                                </div>


                                <Image alt="image" width={400} height={400} className={styles.outsidemount_Image} src="/outsidemount.png" />



                                <div className={styles.step_1_outside_mount}>
                                    <p className={styles.step_tag}> Step 1: </p>Measure the width including window trim – Then ADD 4” to your dimension(This will ensure you are past the trim 2” on each side for overlap), use this measurement.
                                </div>

                                <div
                                    className={styles.step_2_outside_mount}
                                >
                                    <p className={styles.step_tag}> Step 2: </p> Measure the height in the center including window trim, Then ADD 5-1/2” to your dimension(This will ensure you are past the trim to allow top cassette mount & bottom overlap), use this measurement.

                                </div>


                                <div
                                    className={styles.step_3_outside_mount}
                                >
                                    <p className={styles.step_tag}> Step 3: </p> Measure the height in the center including window trim, Then ADD 5-1/2” to your dimension(This will ensure you are past the trim to allow top cassette mount & bottom overlap), use this measurement.

                                </div>



                                <div className={styles.enter_size_outside_mount_group}>

                                    <div className={styles.enter_size_outside_mount_tag}>Enter Outside Mount Size:</div>

                                    <div className={styles.enter_size_outside_mount_triggers}>

                                        <div className={styles.enter_height_outside_mount}>
                                            <div className={styles.enter_height_outside_subtitle}>Height:</div>

                                            <div className={styles.enter_width_outside_mount_rectangle1}></div>
                                            <div className={styles.enter_width_outside_mount_rectangle2}></div>
                                            <div>

                                                <div className={styles.height_scroll_number_inches_outside_mount}>

                                                    <p className={styles.height_rendering_element_inches_outside_mount}>
                                                    </p>
                                                </div>




                                            </div>




                                        </div>

                                        <div className={styles.enter_width_outisde_mount}>
                                            <div className={styles.width_outside_mount_sub_title}>Width2:</div>


                                            <div className={styles.enter_height_outside_mount_rectangle1}></div>
                                            <div className={styles.enter_height_outisde_mount_rectangle2}></div>
                                            <div>

                                                <div className={styles.height_scroll_number_inches}>

                                                    <p className={styles.height_rendering_element_inches}>
                                                    </p>
                                                </div>


                                            </div>



                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className={styles.select_color_type_seperator_line}></div>



                        <div className={styles.select_color_group}>
                            <Image
                                className={styles.iconforselectcolor}
                                alt="iconforselectcolor"
                                width={100}
                                height={100}
                                src={"/chevronleft.png"}>
                            </Image>
                            <svg
                                className={styles.select_color_long_rectangle}
                                width="482"
                                height="32"
                                viewBox="0 0 482 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.667969 16.1941C0.667969 7.66779 7.5799 0.755859 16.1062 0.755859H465.856C474.382 0.755859 481.294 7.66779 481.294 16.1941V16.1941C481.294 24.7204 474.382 31.6323 465.856 31.6323H16.1062C7.57992 31.6323 0.667969 24.7204 0.667969 16.1941V16.1941Z"
                                    fill="#202020"
                                />
                            </svg>

                            <svg
                                className={styles.select_color_short_rectangle}
                                width="225"
                                height="31"
                                viewBox="0 0 225 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 15.5C0 6.93959 6.93959 0 15.5 0H209.5C218.06 0 225 6.93959 225 15.5V15.5C225 24.0604 218.06 31 209.5 31H15.5C6.93959 31 0 24.0604 0 15.5V15.5Z"
                                    fill="#630505"

                                />
                            </svg>



                            <div className={styles.select_color}>
                                <div className={styles.select_color_title}>

                                    <p className={styles.iconforselectcolor_text}>Select Color / Material</p></div>
                            </div>

                            <div className={styles.select_material}>2. Select Material</div>

                            <MaterialsPage></MaterialsPage>
                        </div>

                        <div className={styles.select_lift_type_group}>

                            <Image
                                className={styles.iconforselectlifttype}
                                alt="iconforselectlifttype"
                                width={100}
                                height={100}
                                src={"/chevronleft.png"}>
                            </Image>

                            <div className={styles.select_lift_type_seperator_line}></div>
                            <svg
                                className={styles.select_lift_type_long_rectangle}
                                width="482"
                                height="32"
                                viewBox="0 0 482 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.496094 16.0847C0.496094 7.55841 7.40802 0.646484 15.9343 0.646484H465.684C474.21 0.646484 481.122 7.55841 481.122 16.0847V16.0847C481.122 24.611 474.21 31.5229 465.684 31.5229H15.9343C7.40804 31.5229 0.496094 24.611 0.496094 16.0847V16.0847Z"
                                    fill="#202020"
                                />
                            </svg>

                            <svg
                                className={styles.select_lift_type_short_rectangle}
                                width="225"
                                height="31"
                                viewBox="0 0 225 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 15.5C0 6.93959 6.93959 0 15.5 0H209.5C218.06 0 225 6.93959 225 15.5V15.5C225 24.0604 218.06 31 209.5 31H15.5C6.93959 31 0 24.0604 0 15.5V15.5Z"
                                    fill="#630505"
                                />
                            </svg>

                            <div className={styles.select_lift_type_title}>
                                <p>
                                    Select Lift Type
                                </p>
                            </div>

                            <Image alt="image" width={100} height={100} className={styles.lift_typeicon1} src="/lifttypeicon.png" />

                            <div className={styles.add_lift_feature}>3. Add Lift Feature</div>
                            <div
                                className={`${styles.wand_ellipse} ${active_wand_cordlift_motorized === 1 ? styles.active_wand_cordlift_motorized : ''}`}
                                onClick={() => handleLiftFeatureEllipsess(1)}
                            ></div>
                            <div className={styles.wand}>Wand</div>
                            <div className={styles.free}>Free</div>

                            <div className={styles.select_chain_side_wrapper}>
                                <div className={styles.select_chain_side_wrapper_title}>
                                    Select Chain Side
                                </div>


                                <button
                                    className={styles.select_chain_left_box_button}
                                    onClick={showleftsidechain}
                                >
                                    <div className={styles.select_chain_left_box}>Left</div>
                                </button>

                                <button
                                    className={styles.select_chain_right_box_button}
                                    onClick={showrightsidechain}
                                >
                                    <div className={styles.select_chain_right_box}>Right</div>
                                </button>

                                {showImageright && (

                                    <>
                                        <div className={styles.showrightchain_wrapper}>
                                            <Image
                                                width={400}
                                                height={400}
                                                className={styles.showrightchain}
                                                alt="showrightchain"
                                                src="/rightside.png" // replace with the path to your image

                                            />
                                        </div>
                                    </>
                                )}


                                {showImageleft && (

                                    <>
                                        <div className={styles.showleftchain_wrapper}>
                                            <Image
                                                width={400}
                                                height={400}
                                                className={styles.showleftchain}
                                                alt="showleftchain"
                                                src="/leftside.png" // replace with the path to your image

                                            />
                                        </div>
                                    </>
                                )}

                            </div>
                            <div
                                className={`${styles.cord_lift_ellipse} ${active_wand_cordlift_motorized === 2 ? styles.active_wand_cordlift_motorized : ''}`}
                                onClick={() => handleLiftFeatureEllipsess(2)}
                            ></div>

                            <div className={styles.cord_lift}>Cord Less</div>

                            <div className={styles.cordlift_price_value}>$05.00</div>

                            <div
                                className={`${styles.motorized_ellipse} ${active_wand_cordlift_motorized === 3 ?
                                    styles.active_wand_cordlift_motorized : ''}`}
                                onClick={() => handleLiftFeatureEllipsess(3)}
                            ></div>

                            <div className={styles.motorized}>Motorized</div>
                            <div className={styles.motorized_price_value}>$100.00</div>
                        </div>


                        <div className={styles.select_head_rail_group}>
                            <div className={styles.select_head_rail_seperator_line}></div>
                            <svg
                                className={styles.select_cassette_head_rail_long_rectangle}
                                width="482"
                                height="32"
                                viewBox="0 0 482 32"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.496094 16.3113C0.496094 7.78497 7.40802 0.873047 15.9343 0.873047H465.684C474.21 0.873047 481.122 7.78497 481.122 16.3113V16.3113C481.122 24.8376 474.21 31.7495 465.684 31.7495H15.9343C7.40804 31.7495 0.496094 24.8376 0.496094 16.3113V16.3113Z"
                                    fill="#202020"
                                />
                            </svg>

                            <svg
                                className={styles.select_cassette_head_rail_short_rectangle}
                                width="225"
                                height="31"
                                viewBox="0 0 225 31"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 15.5C0 6.93959 6.93959 0 15.5 0H209.5C218.06 0 225 6.93959 225 15.5V15.5C225 24.0604 218.06 31 209.5 31H15.5C6.93959 31 0 24.0604 0 15.5V15.5Z"
                                    fill="#630505"
                                />
                            </svg>



                            <div className={styles.select_head_rail_and_bottom_rail}>Select Head Rail And Bottom Rail</div>
                            <div className={styles.select_head_rail}>4. Select Head Rail</div>

                            <div
                                className={`${styles.select_cassette_ellipse1} ${active_cassette_round1 === 1 ? styles.active_cassette_round1 : ''}`}
                                onClick={() => handleactive_cassette_round1Ellipses(1)}
                            ></div>
                            <div className={styles.cassette}>Cassette</div>
                            <Image alt="image" width={400} height={400} className={styles.chosen_image} src="/cassette.png" />


                            <div
                                className={`${styles.select_round_ellipse1} ${active_cassette_round1 === 2 ? styles.active_cassette_round1 : ''}`}
                                onClick={() => handleactive_cassette_round1Ellipses(2)}
                            ></div>
                            <div className={styles.round}>Round</div>
                            <Image alt="image" width={400} height={400} className={styles.cassette_round_image} src="/cassetteround.png" />
                            <div className={styles.pick_head_rail_color}>Pick Head Rail Color</div>
                            <div className={styles.fabric_types}>FABRIC TYPES</div>



                            <FabricsPage></FabricsPage>


                         <div className={styles.chosen_cassette_or_chosen_round_wrapper}>


                                <div className={styles.select_cassette_bottom_rail_group}>

                                    <div className={styles.select_cassette_bottom_rail}>5. Select Bottom Rail</div>


                                    <div className={styles.bottom_rail_options}>
                                        <span className={styles.option1}>
                                            <div
                                                className={`${styles.select_cassette_ellipse2} ${active_cassette_round2 === 1 ? styles.active_cassette_round2 : ''}`}
                                                onClick={() => handleEllipseClick5(1)}
                                            ></div>
                                            <div className={styles.cassette2}>option 1</div>
                                            <div className={styles.product_price}>$00.00</div>
                                            <Image alt="image" width={400} height={400} className={styles.cassette_image_2} src="/cassette.png" />
                                        </span>


                                        <span className={styles.option2}>
                                            <div
                                                className={`${styles.select_round_ellipse2} ${active_cassette_round2 === 2 ? styles.active_cassette_round2 : ''}`}
                                                onClick={() => handleEllipseClick5(2)}
                                            ></div>
                                            <div className={styles.round2}>option 2</div>
                                            <div className={styles.product_price_2}>$00.00</div>
                                            <Image alt="image" width={400} height={400} className={styles.cassette_image3} src="/cassette.png" />
                                            <Image alt="image" width={400} height={400} className={styles.chosen_headrail_image} src="/cassettesteel.png" />
                                        </span>
                                    </div>
                                </div>



                                <div className={styles.pick_bottom_rail_color_wrapper}>
                                    <div className={styles.pick_bottom_rail_color}>Pick Bottom Rail Color</div>
                                    <div className={styles.fabric_types_for_bottom_rail}>FABRIC TYPES</div>


                                </div>


                            </div>
                            <button
                                className={styles.next_item4}                            >
                                <div
                                    style={NextButton4buttonStyle}
                                    className={styles.next_button4}>See Bill</div>
                            </button>
                        </div>




                        <div className={styles.quantity_and_add_to_cart_group}>
                            <div className={styles.quantity_seperator_line}></div>

                            <div className={styles.quantity}>Quantity</div>
                            <div className={styles.rectangle_29}></div>
                            <div className={styles.rectangle_30}></div>
                            <div className={styles.question_mark_ellipse}></div>
                            <div className={styles.question_mark}>?</div>
                            <div className={styles.qty}>Qty</div>
                            <div className={styles.qty_number}>1</div>
                            <div className={styles.quantity_is_always_1_box}></div>
                            <div className={styles.quantity_is_always_1}>Quantity is always 1</div>

                            <div className={styles.quantity_is_always_1_note}>Not all Windows are identical in size – Each window will need to be measured & entered individually to avoid errors.</div>





                            <div className={styles.review_your_order_seperator_line}></div>


                            <div className={styles.review_your_order}>Review Your Order</div>

                            <div className={styles.review_your_order_bg}></div>



                            <div className={styles.order_items_list}>

                                <svg
                                    className={styles.rectangle_45}
                                    width="483"
                                    height="2"
                                    viewBox="0 0 483 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                        fill="black"
                                    />
                                </svg>

                                <div className={styles.window_name}>Window Name:
                                </div>

                                <div className={styles.window_name_answer}>
                                    {product_title}
                                </div>


                                <svg
                                    className={styles.rectangle_43}
                                    width="483"
                                    height="2"
                                    viewBox="0 0 483 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                        fill="black"
                                    />
                                </svg>


                                <div className={styles.window_type}>Window Type:</div>

                                <div className={styles.window_type_answer}>
                                    {roomDarkeningContent}
                                </div>


                                <svg
                                    className={styles.rectangle_36}
                                    width="483"
                                    height="2"
                                    viewBox="0 0 483 2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                        fill="black"
                                    />
                                </svg>



                                <div className={styles.widthbom}>Inside Mount Width:</div>


                                <div className={styles.width2_answer}>
                                    <p className={styles.width_rendering_element_inches}><span>{selectedNumber_inside_mount_width}</span>{" (Inches width),"}<span></span></p>
                                    <p className={styles.width_rendering_element_fractions}><span>{selectedFraction_width}</span>{" (Fractions width)"}<span></span></p>

                                </div>
                            </div>

                            <svg
                                className={styles.rectangle_37}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>



                            <div className={styles.heightbom}>Inside Mount Height:</div>


                            <div className={styles.height2Answer}>
                                <p className={styles.heightRenderingElementInches}><span>{selectedNumber_height_inside_mount}</span>{" (Inches)height,"}<span></span></p>
                                <p className={styles.heightRenderingElementFractions}><span>{selectedFraction_height}</span>{" (Fractions)height"}<span></span></p>

                            </div>





                            <svg
                                className={styles.rectangle_38}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>

                            <div className={styles.mount}>Mount:</div>
                            <div className={styles.mount_answer}>
                                {InsideOrOutsideRenderingContent}
                            </div>

                            <svg
                                className={styles.rectangle_39}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>

                            <div className={styles.materialsbom}>Materials:</div>



                            <svg
                                className={styles.rectangle_40}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>


                            <div className={styles.lift_type}>Lift Type:</div>
                            <div className={styles.lift_type_answer}>
                                {active_wand_cordlift_motorizedRenderingContent}
                            </div>


                            <svg
                                className={styles.rectangle_41}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>


                            <div className={styles.casette_head_rail_type}> Head Rail Type:</div>
                            <div className={styles.casette_head_rail_type_answer}>
                                {active_cassette_round1RenderingContent}
                            </div>

                            <svg
                                className={styles.rectangle_42}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>

                            <div className={styles.head_rail_color}>Head Rail Color:</div>

                            <div className={styles.bottom_rail_color}>Bottom Rail Color:</div>
                            <svg
                                className={styles.rectangle_47}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>

                            <div className={styles.bottom_rail_type}>Bottom Rail Type:</div>
                            <div className={styles.bottom_rail_type_answer}>
                                {bottomRailOptionsRenderingContent}
                            </div>


                            <svg
                                className={styles.rectangle_44}
                                width="483"
                                height="2"
                                viewBox="0 0 483 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.871094 0.853516H482.871V1.85352H0.871094V0.853516Z"
                                    fill="black"
                                />
                            </svg>
                        </div>


<div>

                        <Image alt="image" width={100} height={100} className={styles.shippingtruck_1} src="/shippingtruck.png" />
                        <div className={styles.shipping_details_titles}>
                            <div className={styles.shipping_details}>Shipping Details</div>
                            <div className={styles.total_price_tile}>Total Price</div>
                        </div>
                        <div className={styles.shipping_divider1}></div>


                        <div className={styles.shipping_tagger}>

                            <div className={styles.shipping}>Shipping</div>
                            <div className={styles.shipping_price}>FREE</div>
                            <div className={styles.qty_1}>Qty 1</div>
                            <div className={styles.total_price}>$00.00</div>
                        </div>

                        <div className={styles.shipping_divider2}></div>

                        <div className={styles.order_number}>Order Number: 345969654</div>
                        <div className={styles.estimated_delivery_date}>Estimated Delivery Date:</div>
                        <div className={styles.date}>00/00/0000</div>


                        <div className={styles.add_to_cart_rectangle}></div>

                        <Link href={'/cart/3353453-55555-xxvfdfd-3345'}>
                            <div className={styles.add_to_cart}>ADD TO CART</div>
                        </Link>

                        <Image alt="image" width={100} height={100} className={styles.paymenticon}
                            src="/interact.png" />

                        <Image alt="image" width={100} height={100}
                            className={styles.paypalicon}
                            src="/paymenticon.png"
                        />
                        </div>
                    </div>


                </div>
            </div>
            <Footer></Footer>


        </>
    )
}
export default ZebraBlinds;
