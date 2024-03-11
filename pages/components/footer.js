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
                        <div className={styles.footer_subtitle1}>
                            Economy Blinds And Shades
                        </div>
                    </span>
                    <li className={styles.header_logo}>
                        <Link href={'/'}>
                            <Image className={styles.logo_image} src={"/logoeconomyblindsandsshades.png"} width={400} height={400} alt="economyblindsandshades_logo" />
                        </Link>
                    </li>
                </span>

                <span className={styles.footer_subtitle_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                        Title
                        </div>
                    </span>

                    <span>
                        <div className={styles.footer_subtitle2}>
                            Details
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                            Details
                        </div>
                    </span>

                </span>




                <span className={styles.footer_subtitle_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                            <Link
                            href={"/privacypolicy"}>
                            Title
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                        Details
                        </div>
                    </span>

                    <span>
                        <div className={styles.footer_subtitle2}>
                        Details
                        </div>
                    </span>

                </span>


                <span className={styles.footer_subtitle_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                            <Link
                            href={"/contact"}>
                            Title
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                        Details
                        </div>
                    </span>

                    <span>
                        <div className={styles.footer_subtitle2}>
                        Details
                        </div>
                    </span>

                </span>

                <span className={styles.footer_subtitle_group}>


                    <span>
                        <div className={styles.footer_subtitle}>
                            <Link 
                            href={"/"}>
                            Home
                            </Link>
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                        Details
                        </div>
                    </span>
                    <span>
                        <div className={styles.footer_subtitle2}>
                            Details
                        </div>
                    </span>

                </span>


            </div>
        </>
    )
}
export default FooterPage;