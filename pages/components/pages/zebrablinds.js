import React from "react";
import styles from '../../../styles/components/pages/zebrablinds.module.css';
import Image from "next/image";
import { useState } from "react";


function ZebraBlinds() {
    //1. //  ellipse logic
    const [active_inside_outside_ellipse, Setactive_inside_outside_ellipse] = useState(null);
    const [active_wand_cordlift_motorized, Setactive_wand_cordlift_motorized] = useState(null);
    const [active_cassette_round1, Setactive_cassette_round1] = useState(null);
    const [active_skip_head_rail_ellipse, Setactive_skip_head_rail_ellipse] = useState(null);
    const [active_cassette_round2, Setactive_cassette_round2] = useState(null);

    const handleEllipseClick1 = (ellipseNumber) => {
        Setactive_inside_outside_ellipse(ellipseNumber);
    };

    const handleEllipseClick2 = (ellipseNumber) => {
        Setactive_wand_cordlift_motorized((prevActiveEllipse) => (prevActiveEllipse === ellipseNumber ? null : ellipseNumber));
    };

    const handleEllipseClick3 = (ellipseNumber) => {
        Setactive_cassette_round1(ellipseNumber);
    };

    const handleEllipseClick4 = () => {
        console.log('Ellipse Clicked');
        Setactive_skip_head_rail_ellipse((prevActive) => !prevActive);
    };

    const handleEllipseClick5 = (ellipseNumber) => {
        Setactive_cassette_round2(ellipseNumber);
    };


    //2. // increase width and heigh count
    const [number, setNumber] = useState(1);
 

    const handle_polygon_decrease_width_inches = () => {
        // Increase the number, but not beyond 100
        if (number < 100) {
            setNumber((prevNumber) => prevNumber + 1);
        }
    };
    const handle_polygon_increase_width_inches = () => {
        // Decrease the number, but not below 1
        if (number > 1) {
            setNumber((prevNumber) => prevNumber - 1);
        }
    };

    const fractions = ["0", "1/4", "3/8", "1/2", "5/8", "3/4", "7/8"];
    const [fractionIndex, setFractionIndex] = useState(0);
  
    const handle_polygon_increase_width_fractions = () => {
      // Decrease the index, but not below 0
      if (fractionIndex > 0) {
        setFractionIndex((prevIndex) => prevIndex - 1);
      }
    };
  
    const handle_polygon_decrease_width_fractions = () => {
      // Increase the index, but not beyond the length of the array - 1
      if (fractionIndex < fractions.length - 1) {
        setFractionIndex((prevIndex) => prevIndex + 1);
      }
    };
  
  

    return (
        <>
            <div className={styles.page}>
                <div className={styles.page_wrapper}>

                    <div className={styles.left_half}>

                        <div className={styles.sliding_gallery}>

                            <Image alt="zebrablinds_8" width={600} height={600} className={styles.zebrablinds_8} src="/indexcomponentmain.png" />

                            <Image alt="chevronleft" className={styles.chevron_left} width={100} height={100} src="/chevronleft.png" />
                            <Image alt="product_image" width={100} height={100} className={styles.product_image} src="/indexcomponent2.png" />

                            <Image alt="zebrablinds_9" width={100} height={100} className={styles.zebrablinds_9} src="/indexcomponent2.png" />
                            <Image alt="zebrablinds_10" width={100} height={100} className={styles.zebrablinds_10} src="/indexcomponent2.png" />
                            <Image alt="zebrablinds_11" width={100} height={100} className={styles.zebrablinds_11} src="/indexcomponent2.png" />
                            <Image alt="zebrablinds_12" width={100} height={100} className={styles.zebrablinds_12} src="/indexcomponent2.png" />
                            <Image alt="chevronright" className={styles.chevron_right} width={100} height={100} src="/chevronright.png" />
                        </div>
                    </div>

                    <div className={styles.right_half}>
                        <div className={styles.product_title}>ZEBRA BLINDS SHADES</div>

                        <div className={styles.rectangle_1}></div>

                        <div>   <div className={styles.room_darkening}>Room Darkening
                            <div className={styles.top_prices}> <p className={styles.price_regular}>$ 325.00 </p>
                                <p className={styles.price_discount}>SAVE 25%</p></div>
                        </div>

                        </div>

                        <div
                            className={styles.a_distinctive_look_that}
                        >
                            A distinctive look that makes a statement, this revolutionary     sheer shade
                            adds personality to any room. These zebra shades are made with two pieces
                            of fabric, which both have alternating panels/bands:
                        </div>
                        <Image alt="star" width={100} height={100} className={styles.star_6} src="/star.png" />
                        <Image alt="star" width={100} height={100} className={styles.star_7} src="/star.png" />
                        <Image alt="star" width={100} height={100} className={styles.star_8} src="/star.png" />
                        <Image alt="star" width={100} height={100} className={styles.star_9} src="/star.png" />
                        <Image alt="star" width={100} height={100} className={styles.star_10} src="/star.png" />
                        <div className={styles.choose_inside_or_outside_mount}>
                            Choose Inside or Outside Mount
                        </div>
                        <div className={styles.inside_mount}>Inside Mount</div>
                        <Image alt="image" width={400} height={400} className={styles.outsidemount_1} src="/OutsideMount.png" />
                        <Image alt="image" width={400} height={400} class={styles.insidemount_1} src="/InsideMount.png" />
                        <div className={styles.outside_mount}>Outside Mount</div>
                        <div
                            className={styles.inside_mount_blinds_fit_within_your}
                        >
                            Inside mount blinds fit within your window opening and is by far the most
                            popular choice. Your product will be made with a ½ inch deduction.
                        </div>
                        <div
                            className={styles.outside_mount_blinds_are_installed}
                        >
                            Outside mount blinds are installed above the window opening (on the trim
                            or drywall). Use with a shallow window opening or on doors. Your product
                            will be made in the exact size you specify.
                        </div>
                        <div
                            className={`${styles.ellipse_16} ${active_inside_outside_ellipse === 1 ? styles.active_inside_outside_ellipse : ''}`}
                            onClick={() => handleEllipseClick1(1)}
                        ></div>
                        <div
                            className={`${styles.ellipse_17} ${active_inside_outside_ellipse === 2 ? styles.active_inside_outside_ellipse : ''}`}
                            onClick={() => handleEllipseClick1(2)}
                        ></div>
                        <div
                            className={styles.measure_the_top_of}
                        >
                            Measure the top of the window frame and order the exact size making NO
                            deductions.
                        </div>
                        <div className={styles.take_the_shortest2}>
                            Take the shortest width measurement.
                        </div>
                        <div className={styles.measure_the_left_center}>
                            Measure the left, center and right portions of the inside frame.
                        </div>
                        <div className={styles.take_the_shortest1}>
                            Take the shortest height measurement.
                        </div>



                        <div className={styles.enter_size}>Enter Size:</div>
                        <div className={styles.width}>Width</div>
                        <div className={styles.rectangle_9}></div>
                        <div className={styles.rectangle_10}>
                        </div>
                        <div>
                            <div className={styles.width_scroll_number_inches}>{number}</div>

                            <svg
                                className={styles.polygon_1}
                                width="10"
                                height="8"
                                viewBox="0 0 10 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={handle_polygon_increase_width_inches}
                            >
                                <path d="M5.11137 0.976562L9.60899 7.99394H0.613753L5.11137 0.976562Z" fill="#D9D9D9" />
                            </svg>

                            <svg
                                className={styles.polygon_2}
                                width="10"
                                height="8"
                                viewBox="0 0 10 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={handle_polygon_decrease_width_inches}
                            >
                                <path d="M5.11519 7.88281L0.617569 0.865438L9.61281 0.865438L5.11519 7.88281Z" fill="#D9D9D9" />
                            </svg>
                        </div>

                        <div>

                        <div className={styles.width_scroll_number_fractions}>
        {fractions[fractionIndex].includes('/') ? (
          <span>
            {fractions[fractionIndex].split('/')[0]}
            <sup>{fractions[fractionIndex].split('/')[1]}</sup>
          </span>
        ) : (
          fractions[fractionIndex]
        )}
      </div>

                        <svg
                            className={styles.polygon_3}
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handle_polygon_increase_width_fractions}
                            >
                            <path
                                d="M5.43559 0.976562L9.93321 7.99394H0.937972L5.43559 0.976562Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                        <svg
                            className={styles.polygon_4}
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handle_polygon_decrease_width_fractions}>
                            <path
                                d="M5.4355 7.88281L0.937881 0.865438L9.93312 0.865438L5.4355 7.88281Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                        <div className={styles.eighths}>Eighths</div>
                        <div className={styles.inches}>Inches</div>

                        </div>




                        <div className={styles.height}>Height</div>
                        <div className={styles.rectangle_11}></div>
                        <div className={styles.rectangle_12}></div>
                        <div className={styles.height_scroll_number}> 2</div>

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
                            className={styles.polygon_6}
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.0605 7.29883L0.562881 0.281453L9.55812 0.281453L5.0605 7.29883Z"
                                fill="#D9D9D9"
                            />
                        </svg>

                        <svg
                            className={styles.polygon_7}
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.377 0.392578L9.87462 7.40995H0.879378L5.377 0.392578Z"
                                fill="#D9D9D9"
                            />
                        </svg>

                        <svg
                            className={styles.polygon_8}
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.38081 7.29883L0.883194 0.281453L9.87843 0.281453L5.38081 7.29883Z"
                                fill="#D9D9D9"
                            />
                        </svg>


                        <div className={styles.inches2}>Inches</div>
                        <div className={styles.eighths2}>Eighths</div>





                        <div className={styles.seperator_22}></div>
                        <div className={styles.rectangle_66}></div>
                        <div className={styles.outsidemount_10003_1}></div>


                        <div className={styles.outsidemount_10003_1}></div>
                        <div className={styles.select_material}>Select Material</div>



                        <div className={styles.add_lift_feature}>Add Lift Feature</div>
                        <div
                            className={`${styles.wand_ellipse} ${active_wand_cordlift_motorized === 1 ? styles.active_wand_cordlift_motorized : ''}`}
                            onClick={() => handleEllipseClick2(1)}
                        ></div>
                        <div className={styles.wand}>Wand</div>
                        <div className={styles.free}>Free</div>


                        <div
                            className={`${styles.cord_lift_ellipse} ${active_wand_cordlift_motorized === 3 ? styles.active_wand_cordlift_motorized : ''}`}
                            onClick={() => handleEllipseClick2(3)}
                        ></div>
                        <div className={styles.cord_lift}>Cord Lift</div>
                        <div className={styles.cordlift_price_value}>$60.00</div>

                        <div
                            className={`${styles.motorized_ellipse} ${active_wand_cordlift_motorized === 2 ? styles.active_wand_cordlift_motorized : ''}`}
                            onClick={() => handleEllipseClick2(2)}
                        ></div>

                        <div className={styles.motorized}>Motorized</div>
                        <div className={styles.motorized_price_value}>$100.00</div>


                        <div className={styles.ema_26_01}>EMA26-01</div>

                        <div className={styles.ema_26_012}>EMA26-01</div>
                        <div className={styles.ema_26_013}>EMA26-01</div>
                        <div className={styles.ema_26_014}>EMA26-01</div>
                        <div className={styles.ema_26_015}>EMA26-01</div>
                        <svg
                            className={styles.rectangle_3}
                            width="482"
                            height="32"
                            viewBox="0 0 482 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.667969 16.1941C0.667969 7.66779 7.5799 0.755859 16.1062 0.755859H465.856C474.382 0.755859 481.294 7.66779 481.294 16.1941V16.1941C481.294 24.7204 474.382 31.6323 465.856 31.6323H16.1062C7.57992 31.6323 0.667969 24.7204 0.667969 16.1941V16.1941Z"
                                fill="#E3E3E3"
                            />
                        </svg>

                        <svg
                            className={styles.rectangle_5}
                            width="135"
                            height="32"
                            viewBox="0 0 135 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.667969 16.1941C0.667969 7.66779 7.5799 0.755859 16.1062 0.755859H119.314C127.84 0.755859 134.752 7.66779 134.752 16.1941V16.1941C134.752 24.7204 127.84 31.6323 119.314 31.6323H16.1062C7.57989 31.6323 0.667969 24.7204 0.667969 16.1941V16.1941Z"
                                fill="#3C3C3C"
                            />
                        </svg>

                        <div className={styles.select_color}>Select Color</div>

                        <Image alt="pickcolor" width={100} height={100} className={styles.pickcolor} src="/indexcomponent2.png" />
                        <Image alt="pickcolor" width={100} height={100} className={styles.pickcolor} src="/pickcolor.png" />


                        <div className={styles.seperatorline}></div>






                        <div className={styles.select_lift_type_seperator_line}></div>
                        <svg
                            className={styles.select_lift_type_seperator_line_long_rectangle}
                            width="482"
                            height="32"
                            viewBox="0 0 482 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.496094 16.0847C0.496094 7.55841 7.40802 0.646484 15.9343 0.646484H465.684C474.21 0.646484 481.122 7.55841 481.122 16.0847V16.0847C481.122 24.611 474.21 31.5229 465.684 31.5229H15.9343C7.40804 31.5229 0.496094 24.611 0.496094 16.0847V16.0847Z"
                                fill="#E3E3E3"
                            />
                        </svg>

                        <svg
                            className={styles.select_lift_type_seperator_line_short_rectangle}
                            width="155"
                            height="32"
                            viewBox="0 0 155 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.871094 16.3535C0.871094 7.7931 7.81068 0.853516 16.3711 0.853516H139.371C147.932 0.853516 154.871 7.7931 154.871 16.3535V16.3535C154.871 24.9139 147.932 31.8535 139.371 31.8535H16.3711C7.81068 31.8535 0.871094 24.9139 0.871094 16.3535V16.3535Z"
                                fill="#3C3C3C"
                            />
                        </svg>
                        <div className={styles.select_lift_type}>Select Lift Type</div>
                        <Image alt="image" width={100} height={100} className={styles.lift_typeicon} src="/lift_typeicon.png" />









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
                                fill="#E3E3E3"
                            />
                        </svg>

                        <svg
                            className={styles.select_cassette_head_rail_short_rectangle}
                            width="155"
                            height="32"
                            viewBox="0 0 155 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.871094 16.3535C0.871094 7.7931 7.81068 0.853516 16.3711 0.853516H139.371C147.932 0.853516 154.871 7.7931 154.871 16.3535V16.3535C154.871 24.9139 147.932 31.8535 139.371 31.8535H16.3711C7.81068 31.8535 0.871094 24.9139 0.871094 16.3535V16.3535Z"
                                fill="#3C3C3C"
                            />
                        </svg>
                        <div className={styles.select_cassette_head_rail}>Select Cassette Head Rail</div>

                        <div
                            className={`${styles.select_cassette_ellipse1} ${active_cassette_round1 === 1 ? styles.active_cassette_round1 : ''}`}
                            onClick={() => handleEllipseClick3(1)}
                        ></div>
                        <div className={styles.cassette}>Cassette</div>
                        <Image alt="image" width={400} height={400} className={styles.chosen_image} src="/cassette.png" />


                        <div
                            className={`${styles.select_round_ellipse1} ${active_cassette_round1 === 2 ? styles.active_cassette_round1 : ''}`}
                            onClick={() => handleEllipseClick3(2)}
                        ></div>
                        <div className={styles.round}>Round</div>
                        <Image alt="image" width={400} height={400} className={styles.cassette_round_image} src="/cassetteround.png" />




                        <div className={styles.pick_head_rail_color}>Pick Head Rail Color</div>
                        <div className={styles.fabric_types}>FABRIC TYPES</div>

                        <Image alt="image" width={400} height={400} className={styles.fabric_type_image1} src="/cassette.png" />
                        <div className={styles.oval_black}>Oval Black</div>

                        <Image alt="image" width={400} height={400} className={styles.fabric_type_image2} src="/cassette.png" />
                        <div className={styles.oval_brown}>Oval Brown</div>

                        <Image alt="image" width={400} height={400} className={styles.fabric_type_image3} src="/cassette.png" />
                        <div className={styles.oval_beige}>Oval Beige</div>

                        <Image alt="image" width={400} height={400} className={styles.fabric_type_image4} src="/cassette.png" />
                        <div className={styles.oval_grey}>Oval Grey</div>

                        <Image alt="image" width={400} height={400} className={styles.fabric_type_image5} src="/cassette.png" />
                        <div className={styles.oval_white}>Oval White</div>


                        <div
                            className={`${styles.skip_head_rail_ellipse} ${active_skip_head_rail_ellipse ? styles.active_skip_head_rail_ellipse : ''}`}
                            onClick={handleEllipseClick4}
                        ></div>
                        <div className={styles.skip_head_rail_color}>Skip Head Rail Color</div>
                        <div className={styles.note_skipping_color}>
                            *Note: Skipping Color will result with steel material
                        </div>




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



                        <div className={styles.select_head_rail}>Select Head Rail</div>
                        <Image alt="image" width={100} height={100} className={styles.lift_typeicon} src="/lift_typeicon.png" />
                        <Image alt="image" width={100} height={100} className={styles.etb_3004_1} src="/etb3004.jpg" />
                        <Image alt="image" width={100} height={100} className={styles.ema_601_1} src="/ema2601.jpg" />
                        <Image alt="image" width={100} height={100} className={styles.etb_3004_2} src="/etb3004.jpg" />
                        <Image alt="image" width={100} height={100} className={styles.ema_601_2} src="/ema2601.jpg" />
                        <Image alt="image" width={100} height={100} className={styles.ema_2601_2} src="/etb3004.jpg" />


                        <div
                            className={`${styles.select_cassette_ellipse2} ${active_cassette_round2 === 1 ? styles.active_cassette_round2 : ''}`}
                            onClick={() => handleEllipseClick5(1)}
                        ></div>
                        <div
                            className={`${styles.select_round_ellipse2} ${active_cassette_round2 === 2 ? styles.active_cassette_round2 : ''}`}
                            onClick={() => handleEllipseClick5(2)}
                        ></div>

                        <div className={styles.cassette2}>Cassette</div>
                        <div className={styles.product_price}>$65.00</div>
                        <Image alt="image" width={400} height={400} className={styles.cassette_image_2} src="/cassette.png" />



                        <div className={styles.round2}>Round</div>
                        <div className={styles.product_price_2}>$60.00</div>
                        <Image alt="image" width={400} height={400} className={styles.cassette_image3} src="/cassette.png" />


                        <div className={styles.color}>Color:</div>
                        <Image alt="image" width={400} height={400} className={styles.chosen_headrail_image} src="/cassette.png" />
                        <div className={styles.rectangle_32}></div>
                        <div className={styles.steel}>Steel</div>





                        <div className={styles.review_your_order_seperator_line}></div>
                        <div className={styles.review_your_order}>Review Your Order</div>

                        <div className={styles.review_your_order_bg}></div>

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

                        <svg
                            className={styles.rectangle_46}
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


                        <div className={styles.window_name}>Window Name</div>
                        <div className={styles.window_type}>Window Type</div>
                        <div className={styles.width2}>Width</div>
                        <div className={styles.height2}>Height</div>
                        <div className={styles.mount}>Mount</div>
                        <div className={styles.materials}>Materials</div>
                        <div className={styles.lift_type}>Lift Type</div>
                        <div className={styles.casette_head_rail_type}>Casette Head Rail Type</div>
                        <div className={styles.order_item_review_1}>Bottom Rail Type</div>


                        <div className={styles.order_item_review_3}>Zebra Blinds</div>
                        <div className={styles.order_item_review_2}>Room Darkening</div>
                        <div className={styles.order_item_review_4}>34”</div>
                        <div className={styles.order_item_review_5}>78”</div>
                        <div className={styles.order_item_review_6}>Inside Mount</div>
                        <div className={styles.order_item_review_7}>EMA26-01</div>
                        <div className={styles.order_item_review_8}>Lift Type</div>
                        <div className={styles.order_item_review_9}>Black With Fabric</div>
                        <div className={styles.order_item_review_10}>Oval Black</div>


                        <div className={styles.rectangle_47}></div>
                        <div className={styles.rectangle_48}></div>
                        <div className={styles.rectangle_49}></div>
                        <div className={styles.shipping_details}>Shipping Details</div>
                        <div className={styles.total_price_tile}>Total Price</div>
                        <div className={styles.total_price}>$65.34</div>
                        <div className={styles.qty_1}>Qty 1</div>
                        <div className={styles.shipping_price}>$12.34</div>
                        <div className={styles.shipping}>Shipping</div>
                        <div className={styles.estimated_delivery_date}>Estimated Delivery Date:</div>
                        <div className={styles.order_number}>Order Number: 345969654</div>
                        <div className={styles.date}>12/07/2024</div>




                        <div className={styles.rectangle_33}></div>







                        <Image alt="image" width={100} height={100} className={styles.shippingtruck_1} src="/shippingtruck.png" />
                        <div class={styles.add_to_cart}>ADD TO CART</div>

                        <Image alt="image" width={100} height={100} className={styles.paymenticon}
                            src="/interact.png" />

                        <Image alt="image" width={100} height={100}
                            className={styles.paypalicon}
                            src="/paymenticon.png"
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
export default ZebraBlinds;
