import React from "react";
import styles from '../../../styles/components/pages/zebrablinds.module.css';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MaterialsPage, { selectedImageData } from '../materials/materials.js'; // Adjust the path accordingly
import Footer from "../footer.js";
import HeaderPiece from "../header.js";
import FabricsPage from "../fabrics/fabrics.js";


function ZebraBlinds() {



    //Logic for add chain side



    const [showImageleft, setShowImageleft] = useState(false);
    const [showImageright, setShowImageright] = useState(true);



    const show_image_left_right_chain_side = (isLeftSide) => {

        if (isLeftSide) {
            setShowImageleft(true);
            setShowImageright(false);
        } else {
            setShowImageright(true);
            setShowImageleft(false);
        }
    };

    const showleftsidechain = () => {
        setShowImageleft(true);
        setShowImageright(false);
    };

    const showrightsidechain = () => {
        setShowImageright(true);
        setShowImageleft(false);
    };

    const leftButtonClass = showImageleft
        ? `${styles.select_chain_left_box_button} ${styles.select_chain_left_box_button_active}`
        : styles.select_chain_left_box_button;

    const rightButtonClass = showImageright
        ? `${styles.select_chain_right_box_button} ${styles.select_chain_right_box_button_active}`
        : styles.select_chain_right_box_button;

    //logic for turning next button's bg color 


    // // LOGIC FOR SHOW WHOLE NUMBERS INSIDE MOUNT HEIGHT
    const [selectedNumber_height_inside_mount, setselectedNumber_height_inside_mount] = useState(null);
    const [whole_number_index_inside_mount_height, setwhole_number_index_inside_mount_height] = useState(false);
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
    const [selectedFraction_height_inside_mount, setselectedFraction_height_inside_mount] = useState(null);
    const [fractionIndex_inside_mount_height, setfractionIndex_inside_mount_height] = useState(false);
    const fractions_inside_mount_height = ["0", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];

    const handle_drop_down_show_fractions_inside_mount_height = () => {
        setfractionIndex_inside_mount_height(!fractionIndex_inside_mount_height);
    }

    //LOGIC FOR CLICKING THE SHOWN FRACTIONS INSIDE MOUNT FRACTIONS HEIGHT
    const handleFractionClick_inside_mount_height = (fraction_inside_mount_height) => {
        setselectedFraction_height_inside_mount(fraction_inside_mount_height);
    };

    const renderFractions_inside_mount_height = () => {
        return fractions_inside_mount_height.map((fraction_inside_mount_height, index) => (
            <div
                key={index}
                className={`${styles.singleFraction_height_inside_mount} ${selectedFraction_height_inside_mount === fraction_inside_mount_height ? styles.selectedFraction_height_inside_mount : ''}`}
                onClick={() => handleFractionClick_inside_mount_height(fraction_inside_mount_height)}
            >
                {fraction_inside_mount_height}
            </div>
        ));
    };


    //---------------------------------------------------------------------------------------------------

    //2. // LOGIC FOR SHOW WHOLE NUMBERS INSIDE MOUNT WIDTH
    const [selectedNumber_inside_mount_width, setselectedNumber_inside_mount_width] = useState(null);
    const [whole_number_index_inside_mount_width, setwhole_number_index_inside_mount_width] = useState(false);
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
    const [fractionIndex_inside_mount_width, setfractionIndex_inside_mount_width] = useState(false);
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
                className={`${styles.singleFraction_width_inside_mount} ${selectedFraction_width === fraction_inside_mount_width ? styles.selectedFraction_width : ''}`}
                onClick={() => handleFractionClick_inside_mount_width(fraction_inside_mount_width)}
            >
                {fraction_inside_mount_width}
            </div>
        ));
    };


    //---------------------------------------------------------------------------------------------------------------------
    // // LOGIC FOR SHOW WHOLE NUMBERS OUTSIDE MOUNT HEIGHT
    const [selectedNumber_height_outside_mount, setselectedNumber_height_outside_mount] = useState(null);
    const [whole_number_index_outside_mount_height, setwhole_number_index_outside_mount_height] = useState(false);
    const whole_number_outside_mount_height = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

    const handle_drop_down_show_numbers_height_outside_mount = () => {

        setwhole_number_index_outside_mount_height(!whole_number_index_outside_mount_height);

    }
    //LOGIC FOR CLICKING THE SHOWN NUMBERS OUTSIDE MOUNT HEIGHT
    const handleNumberClick_outside_mount_height = (number_outside_mount_height) => {
        setselectedNumber_height_outside_mount(number_outside_mount_height);
    };

    const renderNumbers_outside_mount_height = () => {
        return whole_number_outside_mount_height.map((number_outside_mount_height, index) => (
            <div
                key={index}
                className={`${styles.singleNumber_outside_mount_height} ${selectedNumber_height_outside_mount === number_outside_mount_height ? styles.selectedNumber_height_inside_mount : ''}`}
                onClick={() => handleNumberClick_outside_mount_height(number_outside_mount_height)}
            >
                {number_outside_mount_height}
            </div>
        ));
    };
    //2. // LOGIC FOR SHOW FRACTIONS OUTSIDE MOUNT FRACTIONS HEIGHT
    const [selectedFraction_outside_mount_height, setselectedFraction_outside_mount_height] = useState(null);
    const [fractionIndex_outside_mount_height, setFractionIndex_outside_mount_height] = useState(false);
    const fractions_outside_mount_height = ["0", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];

    const handle_drop_down_show_fractions_outside_mount_height = () => {
        setFractionIndex_outside_mount_height(!fractionIndex_outside_mount_height);
    }

    //LOGIC FOR CLICKING THE SHOWN FRACTIONS OUTSIDE MOUNT FRACTIONS HEIGHT
    const handleFractionClick_outside_mount_height = (fraction_outside_mount_height) => {
        setselectedFraction_outside_mount_height(fraction_outside_mount_height);
    };

    const renderFractions_outside_mount_height = () => {
        return fractions_outside_mount_height.map((fraction_outside_mount_height, index) => (
            <div
                key={index}
                className={`${styles.singleFraction_height_outside_mount} ${selectedFraction_outside_mount_height === fraction_outside_mount_height ? styles.selectedFraction_outside_mount_height : ''}`}
                onClick={() => handleFractionClick_outside_mount_height(fraction_outside_mount_height)}
            >
                {fraction_outside_mount_height}
            </div>
        ));
    };


    //---------------------------------------------------------------------------------------------------

    //2. // LOGIC FOR SHOW WHOLE NUMBERS OUTSIDE MOUNT WIDTH
    const [selectedNumber_outside_mount_width, setselectedNumber_outside_mount_width] = useState(null);
    const [whole_number_index_outside_mount_width, setwhole_number_index_outside_mount_width] = useState(false);
    const whole_number_outside_mount_width = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];

    const handle_drop_down_show_numbers_width_outside_mount = () => {
        setwhole_number_index_outside_mount_width(!whole_number_index_outside_mount_width);
    }
    //LOGIC FOR CLICKING THE SHOWN NUMBERS INSIDE MOUNT WIDTH
    const handleNumberClick_outside_mount_width = (number_outside_mount_width) => {
        setselectedNumber_outside_mount_width(number_outside_mount_width);
    };

    const renderNumbers_outside_mount_width = () => {
        return whole_number_outside_mount_width.map((number_outside_mount_width, index) => (
            <div
                key={index}
                className={`${styles.singleNumber_outside_mount_width} ${selectedNumber_outside_mount_width === number_outside_mount_width ? styles.selectedNumber_outside_mount_width : ''}`}
                onClick={() => handleNumberClick_outside_mount_width(number_outside_mount_width)}
            >
                {number_outside_mount_width}
            </div>
        ));
    };

    //2. // LOGIC FOR SHOW FRACTIONS OUTSIDE MOUNT FRACTIONS WIDTH
    const [selectedFraction_width_outside_mount_width, setselectedFraction_outside_mount_width] = useState(null);
    const [fractionIndex_outside_mount_width, setfractionIndex_outside_mount_width] = useState(false);
    const fractions_outside_mount_width = ["0", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];

    const handle_drop_down_show_fractions_outside_mount_width = () => {
        setfractionIndex_outside_mount_width(!fractionIndex_outside_mount_width);
    }

    //LOGIC FOR CLICKING THE SHOWN FRACTIONS INSIDE MOUNT FRACTIONS WIDTH
    const handleFractionClick_outside_mount_width = (fraction_outside_mount_width) => {
        setselectedFraction_outside_mount_width(fraction_outside_mount_width);
    };

    const renderFractions_outside_mount_width = () => {
        return fractions_outside_mount_width.map((fraction_outside_mount_width, index) => (
            <div
                key={index}
                className={`${styles.singleFraction_width_inside_mount} ${selectedFraction_width_outside_mount_width === fraction_outside_mount_width ? styles.selectedFraction_width_outside_mount_width : ''}`}
                onClick={() => handleFractionClick_outside_mount_width(fraction_outside_mount_width)}
            >
                {fraction_outside_mount_width}
            </div>
        ));
    };


    //1. //  ellipse logic
    const [active_wand_cordless_motorized, setactive_wand_cordless_motorized] = useState(null);

    const [InsideOrOutsideRenderingContent, setInsideOrOutsideRenderingContent] = useState('');
    const [active_wand_cordless_motorizedRenderingContent, setactive_wand_cordless_motorizedRenderingContent] = useState('');




    // TOGGLE INSIDE AND OUTISDE MOUNT DIV VISIBLITY 
    const [active_inside_outside_ellipse, setActiveInsideOutsideEllipse] = useState(1);
    const [inside_mount_group_visible, setInsideMountGroupVisible] = useState(true);
    const [outside_mount_group_visible, setOutsideMountGroupVisible] = useState(false);

    const handleClickInside_And_Outside_Ellipses = (ellipseNumber) => {


        if (ellipseNumber === 1) {
            setActiveInsideOutsideEllipse(ellipseNumber);
            setInsideOrOutsideRenderingContent('Inside Mount');
            setInsideMountGroupVisible(true);
            setOutsideMountGroupVisible(false);

        } else if (ellipseNumber === 2) {
            setActiveInsideOutsideEllipse(ellipseNumber);
            setInsideOrOutsideRenderingContent('Outside Mount');
            setInsideMountGroupVisible(false);
            setOutsideMountGroupVisible(true);
        }
    };


    //LOGIC FOR BOM

    //Add inside or outside options to the bom 

    //add bottom rail options to the bom



    //Add 3 lift type options to the bom
    const handleLiftFeatureEllipsess = (ellipseNumber) => {
        setactive_wand_cordless_motorized((prevActiveEllipse) => (prevActiveEllipse === ellipseNumber ? null : ellipseNumber));

        // Set the content based on the clicked ellipse number
        if (ellipseNumber === 1) {
            setactive_wand_cordless_motorizedRenderingContent('wand');
        } else if (ellipseNumber === 2) {
            setactive_wand_cordless_motorizedRenderingContent('cord lift');
        }
        else if (ellipseNumber === 3) {
            setactive_wand_cordless_motorizedRenderingContent('motorized');
        }

        // Keep the existing functionality here if needed

    };


    //Add 2 head rail options to the bom


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

    const [Was_Next_Button_Clicked4, Set_Was_Next_Button_Clicked4] = useState(null);


    const NextButton4buttonStyle = {
        width: '5vw',
        borderRadius: Was_Next_Button_Clicked4 ? '0.45rem' : '0.95rem',
        borderWidth: '2px',
        borderColor: Was_Next_Button_Clicked4 ? 'black' : 'grey',
        backgroundColor: Was_Next_Button_Clicked4 ? "brown" : "grey",

    };

    const handle_click_see_bill_button = () => {
        // Handle button click logic
        Set_Was_Next_Button_Clicked4(true);
    };




    return (

        <>
            <div className={styles.page}>
                <div className={styles.header_piece}>
                    <HeaderPiece></HeaderPiece>
                </div>

                <div className={styles.page_wrapper}>
                    <ol className={styles.right_half}>

                        <div className={styles.top_title_area}>
                            <div className={styles.product_title}>ZEBRA BLINDS SHADES</div>

                            <div className={styles.room_darkening_rectangle}>
                                <p className={styles.room_darkening_element}>Room Darkening</p>
                            </div>

                            <div className={styles.top_prices}>
                                <p className={styles.price_regular}>$ 00.00 </p>
                                <p className={styles.price_discount}>SAVE 00%</p>
                            </div>
                        </div>
                        <div className={styles.star_group}>
                            <Image alt="star" width={100} height={100} className={styles.star_6} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_7} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_8} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_9} src="/star.png" />
                            <Image alt="star" width={100} height={100} className={styles.star_10} src="/star.png" />
                        </div>

                        <div
                            className={styles.a_distinctive_look_that}
                        >
                            A distinctive look that makes a statement, this revolutionary     sheer shade
                            adds personality to any room. These zebra shades are made with two pieces
                            of fabric, which both have alternating panels/bands:
                        </div>



                        <div className={styles.top_divider_line}></div>

                        <div className={styles.select_mount_group}>

                            <span className={styles.titled_step_combo_head}>
                                <div className={styles.select_mount_type_long_rectangle}
                                >
                                    <div className={styles.select_mount_type_short_rectangle}>
                                        <Image
                                            className={styles.iconforselect_mount_type}
                                            alt="iconforselectcolor"
                                            width={100}
                                            height={100}
                                            src={"/chevronleft.png"}>
                                        </Image>
                                        <div className={styles.select_mount_type_group_title}>
                                            <span className={styles.select_mount_type_group_title_tag}>1.</span>
                                            Choose Your Mount Type</div>
                                    </div>
                                </div>
                                <div className={styles.ellipse_and_type}>
                                    <div
                                        className={`${styles.inside_mount_ellipse} ${active_inside_outside_ellipse === 1 ? styles.active_inside_outside_ellipse : ''}`}
                                        onClick={() => handleClickInside_And_Outside_Ellipses(1)}
                                    >
                                    </div>
                                    <div className={styles.inside_mount_choice}>Inside Mount</div>


                                    <div
                                        className={`${styles.outside_mount_ellipse} ${active_inside_outside_ellipse === 2 ? styles.active_inside_outside_ellipse : ''}`}
                                        onClick={() => handleClickInside_And_Outside_Ellipses(2)}
                                    >
                                    </div>
                                    <div className={styles.outside_mount_choice}>Outside Mount</div>
                                </div>
                            </span>


                            <div className={`${styles.inside_mount_group} ${inside_mount_group_visible ? styles.visible_inside_mount : styles.invisible_inside_mount}`}>
                                <span className={styles.left_right_inside_mount}>

                                    <span className={styles.left_inside_mount}>
                                        <div className={styles.inside_mount_group_left_side}>


                                            <span className={styles.measurments_and_image_inside_mount}>
                                                <div className={styles.inside_mount_measurement_instructions}>
                                                    <p className={styles.measurement_instructions_title_inside_mount}>

                                                        Measurement Instructions:

                                                    </p>
                                                </div>

                                                <div
                                                    className={styles.step_1_inside_mount}
                                                >
                                                    <p className={styles.step_tag}> Step 1:</p>
                                                    <p className={styles.step_tag_description}>
                                                        Measure in 3 places on the width, use the smallest measurement.
                                                    </p>
                                                </div>

                                                <div
                                                    className={styles.step_2_inside_mount}
                                                >
                                                    <p className={styles.step_tag}>  Step 2:</p>
                                                    <p className={styles.step_tag_description}>
                                                        Measure the Height in the Center, use this measurement.
                                                    </p>
                                                </div>


                                                <div
                                                    className={styles.step_3_inside_mount}
                                                >
                                                    <p className={styles.step_tag}> Step 3: </p>
                                                    <p className={styles.step_tag_description}>
                                                        Ensure you have 3” inside the window frame ledge. (If you don’t have 3” window Ledge follow process for outside mount).
                                                    </p>
                                                </div>
                                            </span>
                                        </div>
                                    </span>

                                    <span className={styles.right_inside_mount}>
                                        <div className={styles.inside_mount_group_right_side}>
                                            <Image alt="image" width={400} height={400} className={styles.insidemount_Image} src="/insidemount.png" />
                                        </div>
                                    </span>
                                </span>


                                <div className={styles.enter_size_inside_mount_group}>
                                    <div className={styles.enter_size_inside_mount_title}>Choose Inside Mount Window Size</div>
                                    <div className={styles.enter_height_and_width_inside_mount_group}>

                                        <div className={styles.enter_height_group_inside_mount}>


                                            <div className={styles.height_and_toggle_inside_mount}>
                                                <div className={styles.height_inside_mount_sub_title}>
                                                    CHOOSE HEIGHT:
                                                </div>


                                                <div className={styles.inches_fractions_boat}>

                                                    <div className={styles.enter_height_inside_mount_rectangle_1}>
                                                        <div className={styles.toggle_disclaimer_inches_inside_mount_height}>
                                                            <p>
                                                                INCHES
                                                            </p>
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
                                                        <div className={styles.scroller_partition_height_inside_outside_mount}>


                                                            {whole_number_index_inside_mount_height && (
                                                                <div className={styles.height_scroll_number_inches_inside_mount}>
                                                                    <div className={styles.display_whole_numbers_wrapper_inside_mount_height}>
                                                                        <div className={styles.ScrollNumberInches_height_inside_mount}>
                                                                            {whole_number_index_inside_mount_height && (
                                                                                <div className={styles.displayWholeNumbersWrapper_height_inside_mount}>
                                                                                    <div className={styles.displayWholeNumbers_inside_mount_height}>{whole_number_index_inside_mount_height && <div className={styles.displayWholeNumbers_inside_mount_height_list_of_numbers}>{renderNumbers_inside_mount_height()}</div>}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>






                                                    <div className={styles.enter_height_fractions_inside_mount_rectangle_2}>
                                                        <div className={styles.toggle_disclaimer_fractions_inside_mount_height}>
                                                            <p>FRACTIONS</p>
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

                                                        <div className={styles.scroller_partition_height_inside_mount}>


                                                            {fractionIndex_inside_mount_height && (
                                                                <div className={styles.height_scroll_number_fractions_inside_mount}>

                                                                    <div className={styles.display_fractions_wrapper_inside_mount_height}>
                                                                        <div className={styles.ScrollNumberFractions_height_inside_mount}>
                                                                            <div className={styles.displayFractions_inside_mount_height}>{fractionIndex_inside_mount_height && <div className={styles.displayFractions_inside_mount_height_list_of_numbers}>{renderFractions_inside_mount_height()}</div>}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                        <div className={styles.enter_width_group_inside_mount}>
                                            <div className={styles.width_and_toggle_inside_mount}>
                                                <div className={styles.width_inside_mount_sub_title}>
                                                    CHOOSE WIDTH:
                                                </div>

                                                <div className={styles.inches_fractions_boat}>

                                                    <div className={styles.enter_width_inside_mount_rectangle_1}>

                                                        <div className={styles.toggle_disclaimer_inches_inside_mount_width}>
                                                            <p>INCHES</p>
                                                            <svg
                                                                className={styles.polygon_3}
                                                                width="20"
                                                                height="16"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                onClick={handle_drop_down_show_numbers_width_inside_mount}
                                                            >
                                                                <path
                                                                    d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                                    fill="#da1212"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className={styles.scroller_partition_width_inside_mount}>


                                                            {whole_number_index_inside_mount_width && (
                                                                <div className={styles.width_scroll_number_inches_inside_mount}>
                                                                    <div className={styles.display_whole_numbers_wrapper_inside_mount_width}>
                                                                        <div className={styles.ScrollNumberInches_width_inside_mount}>
                                                                            {whole_number_index_inside_mount_width && (
                                                                                <div className={styles.displayWholeNumbersWrapper_width_inside_mount}>
                                                                                    <div className={styles.displayWholeNumbers_inside_mount_width}>{whole_number_index_inside_mount_width && <div className={styles.displayWholeNumbers_inside_mount_width_list_of_numbers}>{renderNumbers_inside_mount_width()}</div>}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>


                                                    <div className={styles.enter_width_inside_mount_rectangle_2}>
                                                        <div className={styles.toggle_disclaimer_fractions_inside_mount_width}>
                                                            <p>FRACTIONS</p>

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
                                                        <div className={styles.scroller_partition_width_inside_mount}>


                                                            {fractionIndex_inside_mount_width && (
                                                                <div className={styles.width_scroll_number_fractions_inside_mount}>

                                                                    <div className={styles.display_fractions_wrapper_inside_mount_width}>
                                                                        <div className={styles.ScrollNumberFractions_width_inside_mount}>
                                                                            <div className={styles.displayFractions_inside_mount_width}>{fractionIndex_inside_mount_width && <div className={styles.displayFractions_inside_mount_width_list_of_numbers}>{renderFractions_inside_mount_width()}</div>}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className={`${styles.outside_mount_group} ${outside_mount_group_visible ? styles.visible_outside_mount : styles.invisible_outside_mount}`}>
                                <span className={styles.left_right_outside_mount}>

                                    <span className={styles.left_outside_mount}>
                                        <div className={styles.inside_mount_group_left_side}>
                                            <div className={styles.outside_mount_measurement_instructions}>

                                                <p className={styles.measurement_instructions_title_outside_mount}>
                                                    Measurement Instructions:
                                                </p>

                                                <div className={styles.step_1_outside_mount}>
                                                    <p className={styles.step_tag}> Step 1: </p>
                                                    <p className={styles.step_tag_description}>
                                                        Measure the width including window trim – Then ADD 4” to your dimension(This will ensure you are past the trim 2” on each side for overlap), use this measurement.
                                                    </p>
                                                </div>

                                                <div
                                                    className={styles.step_2_outside_mount}
                                                >
                                                    <p className={styles.step_tag}> Step 2: </p>
                                                    <p className={styles.step_tag_description}>
                                                        Measure the height in the center including window trim, Then ADD 5-1/2” to your dimension(This will ensure you are past the trim to allow top cassette mount & bottom overlap), use this measurement.
                                                    </p>
                                                </div>


                                                <div
                                                    className={styles.step_3_outside_mount}
                                                >
                                                    <p className={styles.step_tag}> Step 3: </p>
                                                    <p className={styles.step_tag_description}>
                                                        Measure the height in the center including window trim, Then ADD 5-1/2” to your dimension(This will ensure you are past the trim to allow top cassette mount & bottom overlap), use this measurement.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </span>

                                    <span className={styles.right_outside_mount}>
                                        <div className={styles.outside_mount_group_right_side}>
                                            <Image alt="image" width={400} height={400} className={styles.outsidemount_Image} src="/outsidemount.png" />
                                        </div>
                                    </span>
                                </span>



                                <div className={styles.enter_size_outside_mount_group}>
                                    <div className={styles.enter_size_outside_mount_title}>Choose Outside Mount Window Size:</div>
                                    <div className={styles.enter_height_and_width_outside_mount_group}>

                                        <div className={styles.enter_height_group_outside_mount}>
                                            <div className={styles.height_and_toggle_outside_mount}>
                                                <div className={styles.height_outside_mount_sub_title}>
                                                    CHOOSE HEIGHT:
                                                </div>

                                                <div className={styles.inches_fractions_boat}>
                                                    <div className={styles.enter_height_outside_mount_rectangle_1}>
                                                        <div className={styles.toggle_disclaimer_inches_height_outside_mount}>
                                                            <p>
                                                                INCHES
                                                            </p>
                                                            <svg
                                                                className={styles.polygon_5}
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                onClick={handle_drop_down_show_numbers_height_outside_mount}>
                                                                <path
                                                                    d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                                    fill="#da1212"
                                                                />
                                                            </svg>
                                                        </div>

                                                        <div className={styles.scroller_partition_inches_outside_mount}>
                                                            {whole_number_index_outside_mount_height && (
                                                                <div className={styles.height_scroll_number_inches_outside_mount}>

                                                                    <div className={styles.display_whole_numbers_wrapper_outside_mount_height}>
                                                                        <div className={styles.ScrollNumberInches_height_outside_mount}>
                                                                            {whole_number_index_outside_mount_height && (
                                                                                <div className={styles.displayWholeNumbersWrapper_height_outside_mount}>
                                                                                    <div className={styles.displayWholeNumbers_outside_mount_height}>{whole_number_index_outside_mount_height && <div className={styles.displayWholeNumbers_outside_mount_height_list_of_numbers}>{renderNumbers_outside_mount_height()}</div>}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </div>
                                                    </div>



                                                    <div className={styles.enter_height_fractions_outside_mount_rectangle_2}>
                                                        <div className={styles.toggle_disclaimer_width_fractions_outside_mount}>

                                                            <p>FRACTIONS</p>
                                                            <svg
                                                                className={styles.polygon_6}
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                onClick={handle_drop_down_show_fractions_outside_mount_height}
                                                            >
                                                                <path
                                                                    d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                                    fill="#da1212"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className={styles.scroller_partition_fractions_outside_mount}>
                                                            {fractionIndex_outside_mount_height && (
                                                                <div className={styles.height_scroll_number_fractions_outside_mount}>
                                                                    <div className={styles.display_fractions_wrapper_outside_mount_height}>
                                                                        <div className={styles.ScrollNumberFractions_height_outside_mount}>
                                                                            <div className={styles.displayFractions_outside_mount_height}>{fractionIndex_outside_mount_height && <div className={styles.displayFractions_outside_mount_height_list_of_numbers}>{renderFractions_outside_mount_height()}</div>}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className={styles.enter_width_group_outside_mount}>
                                            <div className={styles.width_and_toggle_outside_mount}>
                                                <div className={styles.width_outside_mount_sub_title}>
                                                    CHOOSE WIDTH:
                                                </div>

                                                <div className={styles.inches_fractions_boat}>

                                                    <div className={styles.enter_width_outside_mount_rectangle_1}>

                                                        <div className={styles.toggle_disclaimer_inches_width_outside_mount}>
                                                            <p>INCHES</p>
                                                            <svg
                                                                className={styles.polygon_7}
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                onClick={handle_drop_down_show_numbers_width_outside_mount}
                                                            >
                                                                <path
                                                                    d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                                    fill="#da1212"
                                                                />
                                                            </svg>
                                                        </div>
                                                        <div className={styles.scroller_partition_width_outside_mount}>

                                                            {whole_number_index_outside_mount_width && (
                                                                <div className={styles.width_scroll_number_inches_outside_mount}>

                                                                    <div className={styles.display_whole_numbers_wrapper_outside_mount_width}>
                                                                        <div className={styles.ScrollNumberInches_width_outside_mount}>
                                                                            {whole_number_index_outside_mount_width && (
                                                                                <div className={styles.displayWholeNumbersWrapper_width_outside_mount}>
                                                                                    <div className={styles.displayWholeNumbers_outside_mount_width}>{whole_number_index_outside_mount_width && <div className={styles.displayWholeNumbers_outside_mount_width_list_of_numbers}>{renderNumbers_outside_mount_width()}</div>}
                                                                                    </div>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>


                                                    <div className={styles.enter_width_fractions_outside_mount_rectangle_2}>
                                                        <div className={styles.toggle_disclaimer_width_fractions_outside_mount}>
                                                            <p>FRACTIONS</p>
                                                            <svg
                                                                className={styles.polygon_8}
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                onClick={handle_drop_down_show_fractions_outside_mount_width}
                                                            >
                                                                <path
                                                                    d="M5.05669 0.392578L9.55431 7.40995H0.559065L5.05669 0.392578Z"
                                                                    fill="#da1212"
                                                                />
                                                            </svg>
                                                        </div>

                                                        {fractionIndex_outside_mount_width && (
                                                            <div className={styles.width_scroll_number_fractions_outside_mount}>

                                                                <div className={styles.display_fractions_wrapper_outside_mount_width}>
                                                                    <div className={styles.ScrollNumberFractions_width_outside_mount}>
                                                                        <div className={styles.displayFractions_outside_mount_width}>{fractionIndex_outside_mount_width && <div className={styles.displayFractions_outside_mount_width_list_of_numbers}>{renderFractions_outside_mount_width()}</div>}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className={styles.select_color_type_seperator_line}></div>



                        <div className={styles.select_color_group}>


                            <div className={styles.select_color_long_rectangle}
                            >
                                <div className={styles.select_color_short_rectangle}>
                                    <Image
                                        className={styles.iconforselectcolor}
                                        alt="iconforselectcolor"
                                        width={100}
                                        height={100}
                                        src={"/chevronleft.png"}>
                                    </Image>
                                    <div className={styles.select_color_title}> <span className={styles.select_color_group_title_tag}>2. </span> Select Color / Material</div>
                                </div>
                            </div>

                            <div className={styles.ellipse_and_type_select_material}>
                                <div className={styles.select_color_subtitle}> Select Material</div>
                                <div>Click On A Color To Choose And Add</div>
                            </div>
                            <MaterialsPage></MaterialsPage>
                        </div>

                        <div className={styles.select_lift_type_seperator_line}></div>

                        <div className={styles.select_lift_type_group}>
                            <span className={styles.titled_step_combo}>

                                <div
                                    className={styles.select_lift_type_long_rectangle}
                                >
                                    <div
                                        className={styles.select_lift_type_short_rectangle}
                                    >
                                        <Image
                                            className={styles.iconforselectlifttype}
                                            alt="iconforselectlifttype"
                                            width={100}
                                            height={100}
                                            src={"/chevronleft.png"}>
                                        </Image>
                                        <div className={styles.select_lift_type_group_title}>
                                            <span className={styles.select_lift_type_group_title_tag}>3.</span> Select Lift Type
                                        </div>
                                    </div>
                                </div>
                            </span>

                            <div className={styles.ellipse_and_type_add_lift_feature}>
                                <div className={styles.select_lift_type_subtitle}>Add Lift Feature</div>
                                <div>                                    Select Wand, Cordless Or Motorized
                                </div>
                            </div>

                            <div className={styles.select_chain_side_wrapper}>
                                <div className={styles.select_chain_side_wrapper_subtitle}>
                                </div>

                                <div className={styles.wand_option_group}>
                                    <span className={styles.option_subtitles}>
                                        <div className={styles.option_ellipse_wrapper}>
                                            <span
                                                className={`${styles.wand_ellipse} ${active_wand_cordless_motorized === 1 ? styles.active_wand_cordless_motorized : ''}`}
                                                onClick={() => handleLiftFeatureEllipsess(1)}
                                            ></span>
                                        </div>
                                        <div className={styles.wand_subtitle}>Wand</div>
                                        <div className={styles.options_price_seperator}></div>
                                        <div className={styles.free_subtitle}>Free</div>
                                    </span>
                                    <div className={styles.select_chainparagraph}>Select Which Side You Wnat Your Wand To Be Installed.</div>

                                    <div className={styles.show_image_chain_buttons}>
                                        <button
                                            className={leftButtonClass}
                                            onClick={() => {
                                                show_image_left_right_chain_side(true);
                                                showleftsidechain();
                                            }}
                                        >                                        
                                        <div className={styles.select_chain_left_text}>Left</div>
                                        </button>

                                        <button
                                            className={rightButtonClass}
                                            onClick={() => {
                                                show_image_left_right_chain_side(false);
                                                showrightsidechain();
                                            }}
                                        >
                                            <div className={styles.select_chain_right_text}>Right</div>
                                        </button>
                                    </div>

                                </div>



                                {showImageright && (

                                    <>
                                        <div className={styles.showrightchain_wrapper}>
                                            <Image
                                                width={400}
                                                height={400}
                                                className={styles.show_right_chain_image_render}
                                                alt="showrightchain"
                                                src="/rightside.png"

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
                                                className={styles.show_left_chain_image_render}
                                                alt="showleftchain"
                                                src="/leftside.png"
                                            />
                                        </div>
                                    </>
                                )}

                            </div>


                            <div className={styles.select_chain_options}>




                                <div className={styles.cord_less_option_group}>
                                    <div className={styles.option_ellipse_wrapper}>
                                        <span
                                            className={`${styles.cord_less_ellipse} ${active_wand_cordless_motorized === 2 ? styles.active_wand_cordless_motorized : ''}`}
                                            onClick={() => handleLiftFeatureEllipsess(2)}
                                        ></span>
                                    </div>


                                    <span className={styles.option_subtitles}>
                                        <div className={styles.cord_less_subtitle}>Cord Less</div>
                                        <div className={styles.options_price_seperator}></div>
                                        <div className={styles.cordlift_price_value_subtitle}>$05.00</div>
                                    </span>
                                </div>


                                <div className={styles.motorized_option_group}>
                                    <div className={styles.motorized_ellipse_wrapper}>
                                        <span
                                            className={`${styles.motorized_ellipse} ${active_wand_cordless_motorized === 3 ?
                                                styles.active_wand_cordless_motorized : ''}`}
                                            onClick={() => handleLiftFeatureEllipsess(3)}
                                        ></span>
                                    </div>

                                    <span className={styles.option_subtitles}>
                                        <div className={styles.motorized_subtitle}>Motorized</div>
                                        <div className={styles.options_price_seperator}></div>
                                        <div className={styles.motorized_price_value_subtitle}>$100.00</div>
                                    </span>
                                </div>

                            </div>
                        </div>



                        <FabricsPage></FabricsPage>

                        <div className={styles.select_head_rail_seperator_line}></div>
                        <div className={styles.quantity_seperator_line}></div>



                        <div className={styles.quantity_and_add_to_cart_group}>

                            <div className={styles.quantity_title}>Quantity</div>
                            <div className={styles.quantity_rectangle_and_numbers}>
                                <div className={styles.quantity_rectangle}>
                                    <span>
                                        <div className={styles.qty}>Qty</div>
                                    </span>
                                    <span>
                                        <div className={styles.question_mark_ellipse_and_number_wrapper}>
                                            <span>
                                                <div className={styles.question_ellipse}>
                                                    <div className={styles.questiomark}>?</div>
                                                </div>
                                            </span>
                                            <span>
                                                <div className={styles.qty_number}>1</div>
                                            </span>
                                        </div>
                                    </span>
                                </div>

                                <div>
                                    <span>
                                        <div className={styles.quantity_is_always_1_wrapper}>
                                            <div className={styles.quantity_is_always_1}>Quantity is always 1</div>
                                        </div>

                                    </span>
                                </div>
                            </div>
                            <div className={styles.quantity_is_always_1_note}>Not all Windows are identical in size – Each window will need to be measured & entered individually to avoid errors.</div>


                            <div className={styles.see_bill_button_wrapper}>
                                <button
                                    onClick={handle_click_see_bill_button}
                                    className={styles.see_bill_button}>
                                    <div
                                        style={NextButton4buttonStyle}
                                        className={styles.see_bill_text}>See Bill</div>
                                </button>
                            </div>

                            <div className={styles.review_your_order}>Review Your Order</div>
                            <div className={styles.review_your_order_seperator_line}></div>

                            <div className={styles.review_your_order_bg}>
                                <div className={styles.order_items_list}>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.window_name}>Window Name:
                                        </div>
                                        <div className={styles.window_name_answer}>
                                            {product_title}
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.window_type}>Window Type:</div>
                                        <div className={styles.window_type_answer}>
                                            {roomDarkeningContent}
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.widthbom}>Inside Mount Width:</div>
                                        <div className={styles.width2_answer}>
                                            <p className={styles.width_rendering_element_inches}><span>{selectedNumber_inside_mount_width}</span>{" (Inches width),"}<span></span></p>
                                            <p className={styles.width_rendering_element_fractions}><span>{selectedFraction_width}</span>{" (Fractions width)"}<span></span></p>
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.widthbom}>Outisde Mount Width:</div>
                                        <div className={styles.width2_answer}>
                                            <p className={styles.width_rendering_element_inches}><span>{selectedNumber_outside_mount_width}</span>{" (Inches width),"}<span></span></p>
                                            <p className={styles.width_rendering_element_fractions}><span>{selectedFraction_width_outside_mount_width}</span>{" (Fractions width)"}<span></span></p>
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.heightbom}>Inside Mount Height:</div>
                                        <div className={styles.height2Answer}>
                                            <p className={styles.heightRenderingElementInches}><span>{selectedNumber_height_inside_mount}</span>{" (Inches)height,"}<span></span></p>
                                            <p className={styles.heightRenderingElementFractions}><span>{selectedFraction_height_inside_mount}</span>{" (Fractions)height"}<span></span></p>
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.heightbom}>Outside Mount Height:</div>
                                        <div className={styles.height2Answer}>
                                            <p className={styles.heightRenderingElementInches}><span>{selectedNumber_height_outside_mount}</span>{" (Inches)height,"}<span></span></p>
                                            <p className={styles.heightRenderingElementFractions}><span>{selectedFraction_outside_mount_height}</span>{" (Fractions)height"}<span></span></p>
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.materials_answer_head_rail}>
                                            {"Select A Color"}
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.materials_answer_bottom_rail}>
                                            {"Select A Color  "}
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.mount}>Mount:</div>
                                        <div className={styles.mount_answer}>
                                            {InsideOrOutsideRenderingContent}
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.materialsbom}>Materials:</div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.lift_type}>Lift Type:</div>
                                        <div className={styles.lift_type_answer}>
                                            {active_wand_cordless_motorizedRenderingContent}
                                        </div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.casette_head_rail_type}> Head Rail Type:</div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>

                                        <div className={styles.head_rail_color}>Head Rail Color:</div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>

                                        <div className={styles.bottom_rail_color}>Bottom Rail Color:</div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>
                                    <div className={styles.description_and_answer}>
                                        <div className={styles.bottom_rail_type}>Bottom Rail Type:</div>
                                    </div>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                </div>
                            </div>
                        </div>



                        <div className={styles.shipping_details_group_wrapper}>
                            <Image alt="image" width={100} height={100} className={styles.shippingtruck_1} src="/shippingtruck.png" />
                            <div className={styles.shipping_details_title_wrapper}>
                                <div className={styles.shipping_details_title}>Shipping Details</div>
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
                    </ol>


                </div>
            </div>


        </>
    )
}
export default ZebraBlinds;