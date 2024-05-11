import { React, useEffect, useState } from "react";
import styles from '../../../styles/components/pages/contactandrefundpolicy.module.css';
import HeaderPiece from "../header";
import FooterPage from "../footer";
import Image from "next/image";
import Link from "next/link";

function ContactAndRefundPolicy() {
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


    return (

        <>
            <span className={styles.header_piece}>
                <HeaderPiece></HeaderPiece>
            </span>

            <div className={styles.contact_wrapper}>
                <div className={styles.get_in_touch_div}>
                    <div className={styles.get_in_touch_title}>
                        Contact And Refund Policy
                    </div>
                    <div className={styles.get_in_touch_paragraph}>
                        We are proud to say that we are priced to beat most competitors. Each Job is different however we pride ourselves on quality and value.
                    </div>
                </div>
                <div className={styles.center_piece}>
                    <div className={styles.center_piece_left_side}>
                        All Our products are custom & made to order size, Cancelations or modifications are not possible once the order has been placed. If, for any reason, you want to make changes immediately after placing your order, please enter your information on our contact page & customer service will see if its possible to make a change. Please note that we cannot guarantee to cancel or amend your order as production of your blinds may have already started. We are unable to offer a refund or exchange on “Made To Measure” Blinds.
                    </div>
                    <div className={styles.center_piece_right_side}>

                        <div className={styles.center_piece_right_side_wrapper}>

                        </div>


                    </div>

                </div>

                <span className={styles.right_side_promo}>
                        <p>
                            Thank You For Your Understanding
                        </p>

                    </span>

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
export default ContactAndRefundPolicy;