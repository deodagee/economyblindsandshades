import { React, useEffect, useState } from "react";
import styles from '../../../styles/components/pages/contact.module.css';
import HeaderPiece from "../header";
import FooterPage from "../footer";
import Image from "next/image";
import Link from "next/link";

function ContactPage() {
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


    return (

        <>
            <span className={styles.header_piece}>
                <HeaderPiece></HeaderPiece>
            </span>
            <div className={styles.contact_wrapper}>
                <div className={styles.get_in_touch_div}>
                    <div className={styles.get_in_touch_title}>
                        Get In Touch
                    </div>
                    <div className={styles.get_in_touch_paragraph}>
                        We are proud to say that we are priced to beat most competitors. Each Job is different however we pride ourselves on quality and value.
                    </div>
                </div>
                <div className={styles.center_piece}>
                    <div className={styles.center_piece_left_side}>
                        <span className={styles.center_piece_header}>
                            <p className={styles.send_use_a_message_title}>
                                Send Us A Message
                            </p>
                            <Image
                                alt="logo"
                                className={styles.center_piece_logo}
                                src={"/logoeconomyblindsandsshades.png"}
                                width={100}
                                height={100}
                            >
                            </Image>
                        </span>

                        <div className={styles.enter_details_area}>
                            <span className={styles.enter_details_area_top}>
                                <span className={styles.enter_details_area_left}>
                                    <div className={styles.enter_details_sections}>
                                        <p>Your Name</p>
                                        <input type="text" placeholder="Enter your name" />
                                    </div>
                                    <div className={styles.enter_details_sections}>
                                        <p>Your Phone Number</p>
                                        <input type="tel" placeholder="Enter Your Phone Number" />
                                    </div>
                                </span>
                                <span className={styles.enter_details_area_right}>
                                <div className={styles.enter_details_sections}>
                                        <p>Your Email</p>
                                        <input type="text" placeholder="Enter Your Email" />
                                    </div>
                                    <div className={styles.enter_details_sections}>
                                        <p>Your Company</p>
                                        <input type="text" placeholder="Enter Your Company's Name" />
                                    </div>
                                </span>
                            </span>
                            <span className={styles.enter_details_area_bottom}>
                                <div>
                                    <p className={styles.notes_section_title}>Message</p>
                                    <p className={styles.notes_section} contentEditable="true" placeholder="Type your message here"></p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className={styles.center_piece_right_side}>

                    </div>
                </div>

                <div className={styles.contact_box}>

                </div>

                <div className={styles.two_section_div5}>
              <div className={styles.two_section_div5_wrapper}>
                <Link href={"/zebrablinds"}>
                  <div className={styles.rectangle_1}>
                    <span className={styles.linkitem}>
                      1.Zebra Blinds
                      <br />
                    </span>
                  </div>
                </Link>

                <Link href={"/shangrilablinds"}>

                  <div className={styles.rectangle_2}>
                    <span className={styles.linkitem}>
                      2.Shangrila Blinds
                      <br />
                    </span>
                  </div>
                </Link>

                <Link href={"/romanblinds"}>

                  <div className={styles.rectangle_3}>
                    <span className={styles.linkitem}>
                      3.Roman Blinds
                      <br />
                    </span>
                  </div>
                </Link>
                <Link href={"/rollerblinds"}>

                  <div className={styles.rectangle_4}>
                    <span className={styles.linkitem}>
                      4.Roller Blinds
                      <br />
                    </span>
                  </div>
                </Link>

                <Link href={"/honeycombblinds"}>

                  <div className={styles.rectangle_5}>
                    <span className={styles.linkitem}>
                      5.Honeycomb Blinds
                    </span>
                  </div>
                </Link>

              </div>
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
    )
}
export default ContactPage;