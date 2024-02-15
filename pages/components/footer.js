import React from "react";
import styles from "../../styles/components/footer.module.css";
import Link from "next/link";
import Image from "next/image";

function FooterPage() {

    return (

        <>
            <div className={styles.Footer_wrapper}>

                <span className={styles.image_and_title}>
                    <span>
                        <div className={styles.footer_title}>
                            Economy Blinds And Shades
                        </div>
                    </span>
                    <li className={styles.header_logo}>
                        <Link href={'/'}>
                            <Image className={styles.logo_image} src={"/logoeconomyblindsandsshades.png"} width={400} height={400} alt="economyblindsandshades_logo" />
                        </Link>
                    </li>
                </span>

                <span className={styles.footer_title_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                            Elevate Your Space, Illuminate Your Style.
                        </div>
                    </span>

                    <span>
                        <div className={styles.footer_subtitle2}>
                            We Can Ship To Your Location
                        </div>
                    </span>

                </span>




                <span className={styles.footer_title_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                            <Link
                            href={"/privacypolicy"}>
                            Privacy Policy
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                            Locations
                        </div>
                    </span>

                    <span>
                        <div className={styles.footer_subtitle2}>
                            Shipping Info
                        </div>
                    </span>

                </span>


                <span className={styles.footer_title_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                            <Link
                            href={"/contact"}>
                            Contact Us
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                            Special Orders
                        </div>
                    </span>

                    <span>
                        <div className={styles.footer_subtitle2}>
                            More
                        </div>
                    </span>

                </span>

                <span className={styles.footer_title_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                            <Link 
                            href={"/"}>
                            Home Page
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                            Other
                        </div>
                    </span>

                </span>


            </div>
        </>
    )
}
export default FooterPage;