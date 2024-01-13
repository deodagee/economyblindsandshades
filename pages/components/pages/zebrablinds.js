import React from "react";
import styles from '../../../styles/components/pages/zebrablinds.module.css';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Footer from "../footer.js";
import HeaderPiece from "../header.js";



function ZebraBlinds() {

    // Step 1 Ellipse Logic, allows ellipse selection for inside outside moount and renders choice to the bom
    const [active_inside_outside_ellipse, setActiveInsideOutsideEllipse] = useState(1);
    const [inside_mount_group_visible, setInsideMountGroupVisible] = useState(true);
    const [outside_mount_group_visible, setOutsideMountGroupVisible] = useState(false);
    const [InsideOrOutsideRenderingContent, setInsideOrOutsideRenderingContent] = useState('Inside Mount');

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
    // Step 1 Ellipse Logic, allows ellipse selection for inside outside moount and renders choice to the bom








    // LOGIC FOR SHOW WHOLE NUMBERS INSIDE MOUNT HEIGHT
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
    const [fractionIndex_outside_mount_height, setFractionIndex_outside_mount_height] = useState(null);
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
    const [fractionIndex_outside_mount_width, setfractionIndex_outside_mount_width] = useState(null);
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





    //Step 3 prt1 Slect Lift Type, ellipse Logic in active_wand_cordless_motorized is all 3 selections and handleLiftFeatureEllipsess renders them to the Bom
    const [active_wand_cordless_motorized, setactive_wand_cordless_motorized] = useState(null);
    const [active_wand_cordless_motorizedRenderingContent, setactive_wand_cordless_motorizedRenderingContent] = useState('');

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
    };
    //Step 3 prt1 Slect Lift Type, ellipse Logic in active_wand_cordless_motorized is all 3 selections and handleLiftFeatureEllipsess renders them to the Bom


    //Step 3, prt2 Select Lift Type Change Wand Image Left And Right
    const [showLeftHalf, setShowLeftHalf] = useState(true);
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
    //Step 3, prt2 Select Lift Type Change Wand Image Left And Right




    // Step 4 Skip Head Rail Ellipses Logic and Add Div To Represent Empty PlaceHolder
    const [active_skip_head_rail_ellipse, Set_active_skip_head_rail_ellipse] = useState(false);
    const [active_skip_bottom_rail_ellipse, Set_active_skip_bottom_rail_ellipse] = useState(null);
    const [skip_head_rail_image_placeholder, setskip_head_rail_image_placeholder] = useState(false);
    const [skip_bottom_rail_image_placeholder, setskip_bottom_rail_image_placeholder] = useState(false);

    const handleEllipseClickSkipHeadRailAndBotomRailColor = () => {
        console.log('Ellipse Clicked');
        Set_active_skip_head_rail_ellipse((prevActive) => !prevActive);
        setskip_head_rail_image_placeholder((prevActive) => !prevActive);
        Set_active_skip_bottom_rail_ellipse((prevActive) => !prevActive);
        setskip_bottom_rail_image_placeholder((prevActive) => !prevActive);
    };
    // Step 4 Skip Head Rail Ellipses Logic and Add Div To Represent Empty PlaceHolder




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



    const FirstImageRender = [
        { key: "rfblinds", src: '/rfblinds.jpg', label: "rfblinds" },
    ];


    const colorData = {
        Beige: [
            { key: "Beige", src: '/BEIGE/ETB1003BEIGE.png', label: "ETB1-003" },
            { key: "Beige", src: '/BEIGE/ETB2002BEIGE.png', label: "ETB2-002" },
            { key: "Beige", src: '/BEIGE/ETB3001BEIGE.png', label: "ETB3-001" },
            { key: "Beige", src: '/BEIGE/ETB3002BEIGE.png', label: "ETB3-002" },
            { key: "Beige", src: '/BEIGE/ETB3003BEIGE.png', label: "ETB3-003" },
            { key: "Beige", src: '/BEIGE/ETB5003BEIGE.png', label: "ETB5-003" },
            { key: "Beige", src: '/BEIGE/ETB6003BEIGE.png', label: "ETB6-003" },
            { key: "Beige", src: '/BEIGE/ETB7001BEIGE.png', label: "ETB7-001" },
            { key: "Beige", src: '/BEIGE/ETB8003BEIGE.png', label: "ETB8-003" },
            { key: "Beige", src: '/BEIGE/ETB10001BEIGE.png', label: "ETB10-001" },
            { key: "Beige", src: '/BEIGE/ETB11003BEIGE.png', label: "ETB11-003" },
        ],
        Black: [
            { key: "Black", src: '/BLACK/ETB1006BLACK.png', label: "ETB1-006" },
            { key: "Black", src: '/BLACK/ETB4003BLACK.png', label: "ETB4-003" },
            { key: "Black", src: '/BLACK/ETB4004BLACK.png', label: "ETB4-004" },
            { key: "Black", src: '/BLACK/ETB5006BLACK.png', label: "ETB5-006" },
            { key: "Black", src: '/BLACK/ETB5007BLACK.png', label: "ETB5-007" },
            { key: "Black", src: '/BLACK/ETB8005BLACK.png', label: "ETB8-005" },
            { key: "Black", src: '/BLACK/ETB9003BLACK.png', label: "ETB9-003" },
        ],
        Brown: [
            { key: "Brown", src: '/BROWN/ETB2004BROWN.png', label: "ETB2-004" },
            { key: "Brown", src: '/BROWN/ETB3007BROWN.png', label: "ETB3-007" },
            { key: "Brown", src: '/BROWN/ETB5005BROWN.png', label: "ETB5-005" },
            { key: "Brown", src: '/BROWN/ETB6004BROWN.png', label: "ETB6-004" },
            { key: "Brown", src: '/BROWN/ETB7003BROWN.png', label: "ETB7-003" },
            { key: "Brown", src: '/BROWN/ETB9004BROWN.png', label: "ETB9-004" },
        ],
        Bronze: [
            { key: "Bronze", src: '/BRONZE/ETB1005BRONZE.png', label: "ETB1-005" },
            { key: "Bronze", src: '/BRONZE/ETB3006BRONZE.png', label: "ETB3-006" },
        ],
        Grey: [
            { key: "Grey", src: '/GREY/ETB1004GREY.png', label: "ETB1-004" },
            { key: "Grey", src: '/GREY/ETB2003GREY.png', label: "ETB2-003" },
            { key: "Grey", src: '/GREY/ETB3004GREY.png', label: "ETB3-004" },
            { key: "Grey", src: '/GREY/ETB3005GREY.png', label: "ETB3-005" },
            { key: "Grey", src: '/GREY/ETB5004GREY.png', label: "ETB5-004" },
            { key: "Grey", src: '/GREY/ETB6002GREY.png', label: "ETB6-002" },
            { key: "Grey", src: '/GREY/ETB7002GREY.png', label: "ETB7-002" },
            { key: "Grey", src: '/GREY/ETB8004GREY.png', label: "ETB8-004" },
            { key: "Grey", src: '/GREY/ETB9002GREY.png', label: "ETB9-002" },
            { key: "Grey", src: '/GREY/ETB10002GREY.png', label: "ETB10-002" },
            { key: "Grey", src: '/GREY/ETB11001GREY.png', label: "ETB11-001" },
            { key: "Grey", src: '/GREY/ETB11002GREY.png', label: "ETB11-002" },
            { key: "Grey", src: '/GREY/ETB11004GREY.png', label: "ETB11-004" },
            { key: "Grey", src: '/GREY/ETB14004GREY.png', label: "ETB14-004" },
            { key: "Grey", src: '/GREY/ETB14003GREY.png', label: "ETB14-003" },
            { key: "Grey", src: '/GREY/ETB14005GREY.png', label: "ETB14-005" },
        ],
        White: [
            { key: "White", src: '/WHITE/ETB2001WHITE.png', label: "ETB2-001" },
            { key: "White", src: '/WHITE/ETB4001WHITE.png', label: "ETB4-001" },
            { key: "White", src: '/WHITE/ETB4002WHITE.png', label: "ETB4-002" },
            { key: "White", src: '/WHITE/ETB5001WHITE.png', label: "ETB5-001" },
            { key: "White", src: '/WHITE/ETB5002WHITE.png', label: "ETB5-002" },
            { key: "White", src: '/WHITE/ETB6001WHITE.png', label: "ETB6-001" },
            { key: "White", src: '/WHITE/ETB8001WHITE.png', label: "ETB8-001" },
            { key: "White", src: '/WHITE/ETB8002WHITE.png', label: "ETB8-002" },
            { key: "White", src: '/WHITE/ETB9001WHITE.png', label: "ETB9-001" },
            { key: "White", src: '/WHITE/ETB14001WHITE.png', label: "ETB14-001" },
            { key: "White", src: '/WHITE/ETB15001WHITE.png', label: "ETB15-001" },
            { key: "White", src: '/WHITE/ETB16001WHITE.png', label: "ETB16-001" },
            { key: "White", src: '/WHITE/ETB1001WHITE.png', label: "ETB1-001" },
        ],
    };


    const [selectedMaterial, setSelectedMaterial] = useState(null);

    const [selectedFileNameMaterials, setselectedFileNameMaterials] = useState(null);

    const handleSelectMaterial = (key, src, label) => {
        console.log(`Clicked on file: ${src}`);
        setSelectedMaterial({ key, src, label });
        setselectedFileNameMaterials(`${key} - ${label}`); // Combine key and label
    };




    const renderColorList = (colorList2) => (
        <>
            <div className={styles.images_and_subtitles} key={colorList2[0].key}>
                {colorList2.map((item) => (
                    <div
                        key={item.label}
                        className={`${styles.materials_image_container} ${selectedMaterial && selectedMaterial.src === item.src ? styles.selectedImage : ''}`}
                        onClick={() => handleSelectMaterial(item.key, item.src, item.label)} // Pass key, src, and label
                        style={{
                            border: selectedMaterial && selectedMaterial.src === item.src ? '2px solid black' : '2px solid transparent',
                            padding: selectedMaterial && selectedMaterial.src === item.src ? '5px' : '0', // Add padding if selected
                        }}
                    >
                        <h3 className={styles.images_and_subtitles_color_name}>{item.key}</h3>
                        <Image className={styles.materials_image_container_image_itself} src={item.src} alt={item.label} width={100} height={100} />
                        <p className={styles.selectedImageClass_label}>{item.label}</p>
                    </div>
                ))}
            </div>
        </>
    );



    //  ellipse logic

    //logic 

    const Top_Head_Rail_Choices_Fabrics_Aluminum = {

        Rounded_Top_Cassette_With_Fabric_Insert: [
            { key: 'Beige', src: '/Cassettes/RoundedTopCassetteWithFabricInsert/BeigeRoundedTopCassetteWithFabricInsert.jpg', label: 'Beige  With Fabric Top1' },
            { key: 'Black', src: '/Cassettes/RoundedTopCassetteWithFabricInsert/BlackRoundedTopCassetteWithFabricInsert.jpg', label: 'Black  With Fabric Top1' },
            { key: 'Brown', src: '/Cassettes/RoundedTopCassetteWithFabricInsert/BrownRoundedTopCassetteWithFabricInsert.jpg', label: 'Brown  With Fabric Top1' },
            { key: 'Grey', src: '/Cassettes/RoundedTopCassetteWithFabricInsert/GreyRoundedTopCassetteWithFabricInsert.jpg', label: 'Grey  With Fabric Top1' },
            { key: 'White', src: '/Cassettes/RoundedTopCassetteWithFabricInsert/WhiteRoundedTopCassetteWithFabricInsert.jpg', label: 'White  With Fabric Top1' },
            // Add more image data as needed
        ],

        Square_Top_Aluminum: [
            { key: 'Beige', src: '/Cassettes/SquareTopCassetteAluminum/BeigeSquareTopCassetteAluminum.jpg', label: 'Beige Aluminum Top1' },
            { key: 'Black', src: '/Cassettes/SquareTopCassetteAluminum/BlackSquareTopCassetteAluminum.jpg', label: 'Black Aluminum Top1' },
            { key: 'Brown', src: '/Cassettes/SquareTopCassetteAluminum/BrownSquareTopCassetteAluminum.jpg', label: 'Brown Aluminum Top1' },
            { key: 'Grey', src: '/Cassettes/SquareTopCassetteAluminum/GreySquareTopCassetteAluminum.jpg', label: 'Grey Aluminum Top1' },
            { key: 'White', src: '/Cassettes/SquareTopCassetteAluminum/WhiteSquareTopCassetteAluminum.jpg', label: 'White Aluminum Top1' },
            // Add more image data as needed
        ]

    }

    const Bottom_Bottom_Rail_Choices_Fabrics_Aluminum = {

        Bottom_Rail_Square_With_Fabric_Insert: [
            { key: 'Beige', src: '/BottomRail/BottomRailSquareWithFabricInsert/BeigeBottomRailSquareWithFabricInsert.jpg', label: 'Beige With Fabric Bottom' },
            { key: 'Black', src: '/BottomRail/BottomRailSquareWithFabricInsert/BlackBottomRailSquareWithFabricInsert.jpg', label: 'Black With Fabric Bottom' },
            { key: 'Brown', src: '/BottomRail/BottomRailSquareWithFabricInsert/BrownBottomRailSquareWithFabricInsert.jpg', label: 'Brown With Fabric Bottom' },
            { key: 'Grey', src: '/BottomRail/BottomRailSquareWithFabricInsert/GreyBottomRailSquareWithFabricInsert.jpg', label: 'Grey With Fabric Bottom' },
            { key: 'White', src: '/BottomRail/BottomRailSquareWithFabricInsert/WhiteBottomRailSquareWithFabricInsert.jpg', label: 'White With Fabric Bottom' },
            // Add more image data as needed
        ],

        Bottom_Oval_Rail_Aluminum: [
            { key: 'Beige', src: '/BottomRail/BottomOvalRailAluminum/BeigeBottomOvalRailAluminum.jpg', label: 'Beige Aluminum Bottom' },
            { key: 'Black', src: '/BottomRail/BottomOvalRailAluminum/BlackBottomOvalRailAluminum.jpg', label: 'Black Aluminum Bottom' },
            { key: 'Brown', src: '/BottomRail/BottomOvalRailAluminum/BrownBottomOvalRailAluminum.jpg', label: 'Brown Aluminum Bottom' },
            { key: 'Grey', src: '/BottomRail/BottomOvalRailAluminum/GreyBottomOvalRailAluminum.jpg', label: 'Grey Aluminum Bottom' },
            { key: 'White', src: '/BottomRail/BottomOvalRailAluminum/WhiteBottomOvalRailAluminum.jpg', label: 'White Aluminum Bottom' },
            // Add more image data as needed
        ]
    }

    const [selected_head_rail_color, Set_selected_head_rail_color] = useState(null);

    //////////////////// /////////////////////////////// //////////////////////////////// //////////////////////////// /////////////////////////////////////

    const [selected_bottom_rail_color, Set_selected_bottom_rail_color] = useState(null);

    //////////////////// /////////////////////////////// //////////////////////////////// //////////////////////////// /////////////////////////////////////

    const Match_Fabric_With_bottom = [
        ...Top_Head_Rail_Choices_Fabrics_Aluminum.Rounded_Top_Cassette_With_Fabric_Insert,
        ...Bottom_Bottom_Rail_Choices_Fabrics_Aluminum.Bottom_Rail_Square_With_Fabric_Insert,
    ];

    const Rounded_Top_Cassette_With_Fabric_Insert_function = Match_Fabric_With_bottom.find(imageData => imageData.key === selected_head_rail_color);
    const Bottom_Oval_Rail_Aluminum_function = Match_Fabric_With_bottom.find(imageData => imageData.key === selected_head_rail_color);

    const handleRenderClickImageToMergeFabrics = (imageName, selectedColor, set) => {
        const baseClassName = styles[imageName];
        return `${baseClassName} ${imageName === selectedColor ? styles[`selected_${set}_color`] : ''}`;
    };
    
    const handleRenderClickImageToMergeAluminum = (imageName, selectedColor, set) => {
        const baseClassName = styles[imageName];
        return `${baseClassName} ${imageName === selectedColor ? styles[`selected_${set}_color`] : ''}`;
    };
    

    //////////////////// /////////////////////////////// //////////////////////////////// //////////////////////////// /////////////////////////////////////

    const Match_Amluminum_With_Aluminum = [
        ...Top_Head_Rail_Choices_Fabrics_Aluminum.Square_Top_Aluminum,
        ...Bottom_Bottom_Rail_Choices_Fabrics_Aluminum.Bottom_Oval_Rail_Aluminum,
    ]

    const Bottom_Rail_Square_With_Fabric_Insert_function = Match_Amluminum_With_Aluminum.find(imageData => imageData.key === selected_bottom_rail_color);
    const Square_Top_Aluminum_function = Match_Amluminum_With_Aluminum.find(imageData => imageData.key === selected_bottom_rail_color);


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
                            A distinctive look that makes a statement, this revolutionary sheer shade
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
                                                        Depth Of Window Frame Ledge Must Have 3”. (As Shown In Below Picture Green Lines)
                                                        (If You Do Not Have 3” Ledge Follow Outside Mount Process).
                                                    </p>
                                                </div>

                                                <div
                                                    className={styles.step_2_inside_mount}
                                                >
                                                    <p className={styles.step_tag}>  Step 2:</p>
                                                    <p className={styles.step_tag_description}>
                                                        Horizontal Direction (Width) Measure Inside Window Frame In 3 Places Top/Middle//Bottom
                                                        (As Shown In Below Picture Orange Lines) The Smallest Of The 3 Measurements Is The Number You Will Input For Size On Width.
                                                    </p>
                                                </div>


                                                <div
                                                    className={styles.step_3_inside_mount}
                                                >
                                                    <p className={styles.step_tag}> Step 3: </p>
                                                    <p className={styles.step_tag_description}>
                                                        Vertical Direction (Height) Measure Inside Window Frame Centre.
                                                        (As Shown In Below Picture Purple Lines) This Number You Will Input For Size On Height.
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

                                    <div className={styles.qty_group}>
                                        <div className={styles.qty_group_part1}>
                                            <div className={styles.quantity_title}>QUANTITY</div>
                                            <div className={styles.quantity_rectangle_and_numbers}>

                                                <div className={styles.quantity_rectangle}>
                                                    <div className={styles.qty}>QTY</div>
                                                    <div className={styles.qty_number}>1</div>
                                                </div>

                                                <div>
                                                    <span>
                                                        <div className={styles.quantity_is_always_1_wrapper}>
                                                            <div className={styles.quantity_is_always_1}>Quantity is always 1</div>
                                                        </div>

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.qty_group_part2}>
                                            <div className={styles.quantity_is_always_1_note}>Not all Windows are identical in size – Each window will need to be measured & entered individually to avoid errors.</div>
                                        </div>
                                    </div>



                                    <div className={styles.enter_size_inside_mount_title}>Choose Inside Mount Window Size</div>
                                    <div className={styles.enter_height_and_width_inside_mount_group}>

                                        <div className={styles.enter_height_group_inside_mount}>


                                            <div className={styles.height_and_toggle_inside_mount}>
                                                <div className={styles.choose_height_image_placeholder}></div>
                                                <div className={styles.height_inside_mount_sub_title}>
                                                    CHOOSE HEIGHT:
                                                </div>
                                                <div className={styles.inches_fractions_boat}>

                                                    <div className={styles.enter_height_inside_mount_rectangle_1}
                                                    >
                                                        <div className={styles.toggle_disclaimer_inches_inside_mount_height}
                                                            onClick={handle_drop_down_show_numbers_height_inside_mount}
                                                        >
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
                                                            >
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






                                                    <div className={styles.enter_height_fractions_inside_mount_rectangle_2}
                                                    >
                                                        <div className={styles.toggle_disclaimer_fractions_inside_mount_height}
                                                            onClick={handle_drop_down_show_fractions_inside_mount_height}
                                                        >
                                                            <p>FRACTIONS</p>
                                                            <svg
                                                                className={styles.polygon_2}
                                                                width="20"
                                                                height="16"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
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
                                                <div className={styles.choose_height_image_placeholder}></div>
                                                <div className={styles.width_inside_mount_sub_title}>
                                                    CHOOSE WIDTH:
                                                </div>

                                                <div className={styles.inches_fractions_boat}>

                                                    <div className={styles.enter_width_inside_mount_rectangle_1}>

                                                        <div className={styles.toggle_disclaimer_inches_inside_mount_width}
                                                            onClick={handle_drop_down_show_numbers_width_inside_mount}
                                                        >
                                                            <p>INCHES</p>
                                                            <svg
                                                                className={styles.polygon_3}
                                                                width="20"
                                                                height="16"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
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
                                                        <div className={styles.toggle_disclaimer_fractions_inside_mount_width}
                                                            onClick={handle_drop_down_show_fractions_inside_mount_width}
                                                        >
                                                            <p>FRACTIONS</p>

                                                            <svg
                                                                className={styles.polygon_4}
                                                                width="20"
                                                                height="16"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
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
                                                    <span className={styles.step_tag_description_wrapper}>
                                                        <p className={styles.step_tag_description}>
                                                            Horizontal Direction (Width) Measure Width Including Window Trim In The Center
                                                            (As Shown In Below Picture Orange Lines) This Number You Will Input For Size On Width.
                                                        </p>
                                                        <p className={styles.step_tag_description_note}>Note: We Will Add 2” Per Side To Allow Overlap Of Trim.
                                                        </p>
                                                    </span>
                                                </div>

                                                <div
                                                    className={styles.step_2_outside_mount}
                                                >
                                                    <p className={styles.step_tag}> Step 2: </p>
                                                    <span className={styles.step_tag_description_wrapper}>
                                                        <p className={styles.step_tag_description}>
                                                            Vertical Direction (Height) Measure Height Including Window Trim In The Center
                                                            (As Shown In Below Picture Purple Lines) This Number You Will Input For Size On Height.
                                                        </p>
                                                        <p className={styles.step_tag_description_note}>Note: We Will Add 5-1/2” On Height To Allow Overlap Of Trim & Space For Top Cassette.</p>
                                                    </span>
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


                                    <div className={styles.qty_group}>
                                        <div className={styles.qty_group_part1}>
                                            <div className={styles.quantity_title}>QUANTITY</div>
                                            <div className={styles.quantity_rectangle_and_numbers}>

                                                <div className={styles.quantity_rectangle}>
                                                    <div className={styles.qty}>QTY</div>
                                                    <div className={styles.qty_number}>1</div>
                                                </div>

                                                <div>
                                                    <span>
                                                        <div className={styles.quantity_is_always_1_wrapper}>
                                                            <div className={styles.quantity_is_always_1}>Quantity is always 1</div>
                                                        </div>

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.qty_group_part2}>
                                            <div className={styles.quantity_is_always_1_note}>Not all Windows are identical in size – Each window will need to be measured & entered individually to avoid errors.</div>
                                        </div>
                                    </div>


                                    <div className={styles.enter_size_outside_mount_title}>Choose Outside Mount Window Size:</div>
                                    <div className={styles.enter_height_and_width_outside_mount_group}>

                                        <div className={styles.enter_height_group_outside_mount}>
                                            <div className={styles.height_and_toggle_outside_mount}>
                                                <div className={styles.choose_height_image_placeholder}></div>
                                                <div className={styles.height_outside_mount_sub_title}>
                                                    CHOOSE HEIGHT:
                                                </div>

                                                <div className={styles.inches_fractions_boat}>
                                                    <div className={styles.enter_height_outside_mount_rectangle_1}>
                                                        <div className={styles.toggle_disclaimer_inches_height_outside_mount}
                                                            onClick={handle_drop_down_show_numbers_height_outside_mount}
                                                        >
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
                                                            >
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
                                                        <div className={styles.toggle_disclaimer_height_fractions_outside_mount}
                                                            onClick={handle_drop_down_show_fractions_outside_mount_height}                                                                                                                        >

                                                            <p>FRACTIONS</p>
                                                            <svg
                                                                className={styles.polygon_6}
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
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
                                                <div className={styles.choose_height_image_placeholder}></div>
                                                <div className={styles.width_outside_mount_sub_title}>
                                                    CHOOSE WIDTH:
                                                </div>

                                                <div className={styles.inches_fractions_boat}>

                                                    <div className={styles.enter_width_outside_mount_rectangle_1}>

                                                        <div className={styles.toggle_disclaimer_inches_width_outside_mount}
                                                            onClick={handle_drop_down_show_numbers_width_outside_mount}
                                                        >
                                                            <p>INCHES</p>
                                                            <svg
                                                                className={styles.polygon_7}
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
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
                                                        <div className={styles.toggle_disclaimer_width_fractions_outside_mount}
                                                            onClick={handle_drop_down_show_fractions_outside_mount_width}
                                                        >
                                                            <p>FRACTIONS</p>
                                                            <svg
                                                                className={styles.polygon_8}
                                                                width="10"
                                                                height="8"
                                                                viewBox="0 0 10 8"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
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


                            <div>
                                <div className={styles.materials_page}>
                                    <div className={`${styles.whole_thing} ${showLeftHalf ? styles.imagevisible : styles.imagehidden}`}>

                                        <div className={styles.sliding_gallery_component}>
                                            <div className={styles.imageContainer_titles}><p className={styles.imageContainer_title1}>Image Viewer</p>
                                                <p className={styles.imageContainer_title2}>Selected Images Will Appear Here</p>
                                                <p className={styles.imageContainer_title3}>*All Images Owned by Economy Blinds And Shades Inc.</p></div>
                                            <div className={styles.selectedImageContainer}>
                                                {selectedMaterial ? (
                                                    <>
                                                        <div className={styles.imageContainer2_wrapper}>
                                                            <div className={`${styles.imageContainer2} ${styles.selectedImage2}`}>
                                                                <Image
                                                                    className={styles.image_itself1}
                                                                    src={selectedMaterial.src}
                                                                    alt='image'
                                                                    width={100}
                                                                    height={100}
                                                                />
                                                            </div>
                                                            <h3 className={styles.images_and_subtitles_color_name}>{selectedMaterial.label}</h3>
                                                        </div>
                                                    </>
                                                ) : (

                                                    <div className={styles.image_and_scroller_wrapper}>
                                                        <div className={`${styles.imageContainer2} ${styles.selectedImage3}`}>
                                                            <Image
                                                                width={100}
                                                                height={100}
                                                                className={styles.image_itself2}
                                                                src={FirstImageRender[0].src}
                                                                alt={FirstImageRender[0].label}

                                                            />
                                                        </div>

                                                    </div>

                                                )}
                                            </div>

                                        </div>
                                    </div>
                                    <div className={styles.selectColorImageCollection}>
                                        {Object.keys(colorData).map((color) => (
                                            <div key={color} className={styles[color.toLowerCase()]}>
                                                <p className={styles.color_section_title}>{color}</p>
                                                {renderColorList(colorData[color])}
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
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
                                            <span className={styles.select_lift_type_group_title_tag}>3.</span>
                                            Select Lift Type
                                        </div>
                                    </div>
                                </div>
                            </span>

                            <div className={styles.ellipse_and_type_add_lift_feature}>
                                <div className={styles.select_lift_type_subtitle}>Add Lift Feature</div>
                                <div>
                                    Select Wand, Cordless Or Motorized
                                </div>
                            </div>

                            <div className={styles.select_chain_side_wrapper}>
                                <div className={styles.select_chain_side_wrapper_subtitle}>
                                </div>

                                <div className={styles.wand_option_group}>
                                    <span className={styles.option_subtitles1}>
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
                                    <div className={styles.select_chainparagraph}>Select Which Side You Want Your Wand To Be Installed.</div>

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


                            <div className={styles.select_chain_options1}>
                                <div className={styles.cord_less_option_group}>
                                    <div className={styles.option_ellipse_wrapper}>
                                        <span
                                            className={`${styles.cord_less_ellipse} ${active_wand_cordless_motorized === 2 ? styles.active_wand_cordless_motorized : ''}`}
                                            onClick={() => handleLiftFeatureEllipsess(2)}
                                        ></span>
                                    </div>


                                    <span className={styles.option_subtitles2}>
                                        <div className={styles.cord_less_subtitle}>Cord Less</div>
                                        <div className={styles.options_price_seperator}></div>
                                        <div className={styles.cordlift_price_value_subtitle}>$05.00</div>
                                        <div className={styles.cord_less_option_image_placeholder}></div>
                                    </span>
                                </div>
                            </div>


                            <div className={styles.select_chain_options2}>
                                <div className={styles.motorized_option_group}>
                                    <div className={styles.motorized_ellipse_wrapper}>
                                        <span
                                            className={`${styles.motorized_ellipse} ${active_wand_cordless_motorized === 3 ?
                                                styles.active_wand_cordless_motorized : ''}`}
                                            onClick={() => handleLiftFeatureEllipsess(3)}
                                        ></span>
                                    </div>

                                    <span className={styles.option_subtitles3}>
                                        <div className={styles.motorized_subtitle}>Motorized</div>
                                        <div className={styles.options_price_seperator}></div>
                                        <div className={styles.motorized_price_value_subtitle}>$100.00</div>
                                        <div className={styles.motorized_option_image_placeholder}></div>
                                    </span>
                                </div>
                            </div>

                        </div>



                        <div>
                            <div>
                                <div className={styles.select_head_rail_group}>

                                    <span className={styles.titled_step_combo}>
                                        <div className={styles.select_cassette_head_rail_long_rectangle}
                                        >
                                            <div
                                                className={styles.select_cassette_head_rail_short_rectangle}
                                            >
                                                <Image
                                                    className={styles.iconforselect_cassette_head_rail}
                                                    alt="iconforselectcassetteheaerail"
                                                    width={100}
                                                    height={100}
                                                    src={"/chevronleft.png"}>
                                                </Image>
                                                <div className={styles.select_head_rail_group_title}>
                                                    <span className={styles.select_head_rail_group_title_tag}>4.</span>Head And Bottom Rail
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                    <div className={styles.ellipse_and_type_head_and_bottom_rail}>

                                        <div className={styles.select_head_rail_subtitle}> Select Your Head Rail Type</div>
                                        <div>
                                            Choose Your Type Of Rail, Then Pick A Color For It Along With A Style Choice
                                        </div>
                                    </div>

                                    <div className={styles.fabric_types_top_and_bottom_main_wrapper}>

                                        <div className={styles.fabric_types_top_and_bottom_second_wrapper}>

                                            <div className={styles.pick_head_rail_color_titles_wrapper}>

                                                <div className={styles.pick_head_rail_color_subtitle_cassette_type}>Cassette And Bottom Rail:</div>
                                            </div>

                                            <div className={styles.pick_bottom_rail_color_subtitle0}>Cassette Type:</div>


                                            <div className={styles.top_section}>
                                                <div className={styles.skip_top_section}>
                                                    <div className={styles.ellipse_and_title_head_rail}>
                                                        <div className={`${styles.skip_head_rail_ellipse} ${active_skip_head_rail_ellipse ? styles.active_skip_head_rail_ellipse : ''}`}
                                                            onClick={handleEllipseClickSkipHeadRailAndBotomRailColor}
                                                        ></div>
                                                        <div className={styles.skip_head_rail_color}>Skip Cassette Type
                                                        </div>
                                                    </div>
                                                    <div className={styles.note_skipping_color_for_head_rail}>
                                                        *Note: Skipping Color will result with steel material
                                                    </div>

                                                </div>


                                                <div>
                                                    <div className={`${styles.skip_head_rail_image_placeholder_invisible} ${skip_head_rail_image_placeholder ? styles.skip_head_rail_image_placeholder_visible : ''}`}></div>
                                                    {active_skip_head_rail_ellipse ? null : (
                                                        <div className={styles.fabric_list_top} style={{ marginTop: active_skip_head_rail_ellipse ? '-100px' : '0' }}>
                                                            <div className={styles.fabric_list_top_list1}>
                                                                <div className={styles.pick_head_rail_color_subtitle_rounded_with_fabric}>rounded with fabric</div>


                                                                <div >
                                                                    {Object.keys(Top_Head_Rail_Choices_Fabrics_Aluminum).map((key) => (
                                                                        <div className={styles.fabric_list_images_render_top} key={key}>



                                                                            {Top_Head_Rail_Choices_Fabrics_Aluminum[key].map((imageData) => (
                                                                                <div key={imageData.key} className={styles.fabric_list_top_image_and_description}>
                                                                                    {/* Render the actual image here */}

                                                                                    <div>
                                                                                        <Image
                                                                                            className={handleRenderClickImageToMergeFabrics(imageData.key)}
                                                                                            width={100}
                                                                                            height={100}
                                                                                            src={imageData.src}
                                                                                            alt={imageData.label}
                                                                                            onClick={() => {
                                                                                                if (!active_skip_head_rail_ellipse) {
                                                                                                    console.log(`Click handler for ${imageData.key}`);
                                                                                                    Set_selected_head_rail_color(imageData.key);
                                                                                                }
                                                                                            }}
                                                                                            style={{ pointerEvents: active_skip_head_rail_ellipse ? 'none' : 'auto' }}
                                                                                        />
                                                                                    </div>
                                                                                    <div className={styles.fabric_list_top_image_description}>
                                                                                        <div>{imageData.label}</div>
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>


                                            <div className={styles.pick_bottom_rail_color_wrapper}>
                                                <div className={styles.pick_bottom_rail_color_subtitle1}>Bottom Rail Type:</div>

                                                <div className={styles.bottom_section}>
                                                    <div className={styles.skip_bottom_section}>
                                                        <div>
                                                            <div className={`${styles.skip_bottom_rail_image_placeholder_invisible} ${skip_bottom_rail_image_placeholder ? styles.skip_bottom_rail_image_placeholder_visible : ''}`}></div>
                                                            {active_skip_bottom_rail_ellipse ? null : (
                                                                <div className={styles.fabric_list_bottom} style={{ marginTop: active_skip_bottom_rail_ellipse ? '-100px' : '0' }}>
                                                                    <div className={styles.fabric_list_bottom_list1}>
                                                                        <div className={styles.pick_head_rail_color_subtitle_oval_with_fabric}>oval with fabric</div>

                                                                        {Object.keys(Bottom_Bottom_Rail_Choices_Fabrics_Aluminum).map((key) => (
                                                                            <div className={styles.fabric_list_images_render_bottom} key={key}>
                                                                                {Bottom_Bottom_Rail_Choices_Fabrics_Aluminum[key].map((imageData) => (
                                                                                    <div key={imageData.key} className={styles.fabric_list_bottom_image_and_description}>
                                                                                        {/* Render the actual image here */}
                                                                                        <Image
                                                                                            className={handleRenderClickImageToMergeAluminum(imageData.key)}
                                                                                            width={100}
                                                                                            height={100}
                                                                                            src={imageData.src}
                                                                                            alt={imageData.label}
                                                                                            onClick={() => {
                                                                                                if (!active_skip_bottom_rail_ellipse) {
                                                                                                    console.log(`Click handler for ${imageData.key}`);
                                                                                                    Set_selected_bottom_rail_color(imageData.key);
                                                                                                }
                                                                                            }}
                                                                                            style={{ pointerEvents: active_skip_bottom_rail_ellipse ? 'none' : 'auto' }}
                                                                                        />
                                                                                        <div className={styles.fabric_list_bottom_image_description}>
                                                                                            <div>{imageData.label}</div>
                                                                                        </div>
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        ))}
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
                        </div>


                        <div className={styles.select_head_rail_seperator_line}></div>
                        <div className={styles.quantity_seperator_line}></div>

                        <div className={styles.quantity_and_add_to_cart_group}>

                        

                            <div className={styles.review_your_order}>Review Your Order</div>
                            <div className={styles.review_your_order_seperator_line}></div>

                            <div className={styles.review_your_order_bg}>
                                <div className={styles.order_items_list}>
                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>
                                        <div className={styles.window_name_answer}>Window Name:
                                        </div>
                                        <div className={styles.answers_answers}>
                                            {product_title}
                                        </div>
                                    </div>

                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>
                                        <div className={styles.window_type_answer}>Window Type:</div>
                                        <div className={styles.answers_answers}>
                                            {roomDarkeningContent}
                                        </div>
                                    </div>

                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>
                                        <div className={styles.width2_answer}>Window Size:</div>
                                        <div className={styles.answers_answers}>

                                            <p className={styles.width_rendering_element_inches}><span>
                                                {selectedNumber_inside_mount_width}
                                            </span><span></span></p>
                                            <p className={styles.width_rendering_element_fractions}><span>{selectedFraction_width}</span><span></span></p>
                                            <p className={styles.width_rendering_element_inches}><span>{selectedNumber_outside_mount_width}</span><span></span></p>
                                            <p className={styles.width_rendering_element_fractions}><span>{selectedFraction_width_outside_mount_width}</span><span></span></p>
                                            <p className={styles.heightRenderingElementInches}><span>{selectedNumber_height_inside_mount}</span><span></span></p>
                                            <p className={styles.heightRenderingElementFractions}><span>{selectedFraction_height_inside_mount}</span><span></span></p>
                                            <p className={styles.heightRenderingElementInches}><span>{selectedNumber_height_outside_mount}</span><span></span></p>
                                            <p className={styles.heightRenderingElementFractions}><span>{selectedFraction_outside_mount_height}</span><span></span></p>
                                        </div>
                                    </div>

                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>
                                        <div className={styles.mount_answer}>Mount:</div>

                                        <div className={styles.answers_answers}>
                                            {InsideOrOutsideRenderingContent ? `Mount Type: ${InsideOrOutsideRenderingContent}` : "Please Select A Mount Type"}
                                        </div>

                                    </div>

                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>
                                        <div className={styles.materials_answer}>Material:</div>

                                        <div className={styles.answers_answers}>
                                            {selectedFileNameMaterials ? `Material: ${selectedFileNameMaterials}` : "Please Select Your Material"}
                                        </div>
                                    </div>

                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>
                                        <div className={styles.lift_type_answer}>Lift Type:</div>
                                        <div className={styles.answers_answers}>
                                            {active_wand_cordless_motorizedRenderingContent ? `Type: ${active_wand_cordless_motorizedRenderingContent}` : "Please Select A Lift Type"}
                                        </div>
                                    </div>

                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>
                                        <div className={styles.answers_answers2}>
                                            <div className={styles.casette_rail_type_answer}> Cassette Choice:</div>

                                            {Rounded_Top_Cassette_With_Fabric_Insert_function && (
                                                <span>
                                                    Color: {Rounded_Top_Cassette_With_Fabric_Insert_function.label}
                                                </span>

                                            )}
                                            {Bottom_Rail_Square_With_Fabric_Insert_function && (
                                                <span>
                                                    Color: {Bottom_Rail_Square_With_Fabric_Insert_function.label}
                                                </span>
                                            )}
                                        </div>

                                    </div>

                                    <span
                                        className={styles.bill_divider}>
                                    </span>

                                    <div className={styles.description_and_answer}>

                                        <div className={styles.answers_answers2}>
                                            <div className={styles.bottom_rail_type_answer}>Bottom Rail Choice:</div>

                                            {Square_Top_Aluminum_function && (
                                                <span>
                                                    Color: {Square_Top_Aluminum_function.label}
                                                </span>
                                            )}
                                            {Bottom_Oval_Rail_Aluminum_function && (
                                                <span>
                                                    Color: {Bottom_Oval_Rail_Aluminum_function.label}
                                                </span>
                                            )}
                                        </div>

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