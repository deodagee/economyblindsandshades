import React, { useEffect } from "react";
import styles from "../../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";


function HeaderPiece() {
  useEffect(() => {
    // Set overflowY to 'auto' on mount
    document.body.style.overflowY = 'scroll';

    // Cleanup function
    return () => {
      // Restore overflowX to 'hidden' and overflowY to 'auto' on unmount
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  return (
    <>
      <div className={styles.header_wrapper}>

        <ol className={styles.header_promo_bar}>

          <li>
            <p>
              20% OFF ON EVERY PURCHASE FOR THE NEXT MONTH
            </p>
          </li>


        </ol>

        <ol className={styles.header_top_bar}>

          <li className={styles.header_logo}>
            <Link href={'/'}>
              <Image className={styles.logo_image} src={"/logo2.png"} width={400} height={400} alt="economyblindsandshades_logo" />
            </Link>
          </li>

          <li className={styles.top_links}>

          <div className={styles.icons_and_links_for_top_wrapper}>
            <div className={styles.icons_group}>
          <div className={styles.icon_and_text}>
          <Image
          className={styles.icons_for_top}
          alt="free_shipping"
          width={100}
          height={100}
          src={"/freeshipping.png"}>
          </Image>
          <p className={styles.icons_for_top_text}>Free Shipping</p>
          </div>

          <div className={styles.icon_and_text}>
          <Image
          className={styles.icons_for_top}
          alt="customer_satisfaction"
          width={100}
          height={100}
          src={"/customersatisfaction.png"}>
          </Image>
          <p className={styles.icons_for_top_text}>Customer Satisfaction</p>
          </div>

          <div className={styles.icon_and_text}>
          <Image
          className={styles.icons_for_top}
          alt="remarkable_designs"
          width={100}
          height={100}
          src={"/remarkabledesigns.png"}>
          </Image>
          <p className={styles.icons_for_top_text}>Remarkable Designs</p>
          </div>

          </div>

          <Image
          className={styles.add_to_cart}
          alt="add_to_cart"
          width={100}
          height={100}
          src={"/cart.png"}>
          </Image>
          <div>

          </div>

          <div className={styles.divider_line}
            ></div>

          <div side_links>
            <span>
            <Link className={styles.top_links_item} href={"/privacypolicy"} > Privacy Policy </Link>
            </span>
            </div>

            </div>
          </li>
        </ol>


        <ul className={styles.second_menu_bar}>
          <li className={styles.second_menu_bar_item}>
            <Link className={styles.header_link} href={"/"} > Home </Link>
          </li>
          <li className={styles.second_menu_bar_item}>Zebra Blinds
            <Image
              className={styles.chevron_top_menu}
              width={100}
              height={100}
              src={"/chevronwhite.png"}
              alt="chevron_top_menu">
            </Image>
          </li>

          <li className={styles.second_menu_bar_item}>Shangrila Blinds
            <Image
              className={styles.chevron_top_menu}
              width={100}
              height={100}
              src={"/chevronwhite.png"}
              alt="chevron_top_menu">
            </Image>
          </li>

          <li className={styles.second_menu_bar_item}>Roman Blinds
            <Image
              className={styles.chevron_top_menu}
              width={100}
              height={100}
              src={"/chevronwhite.png"}
              alt="chevron_top_menu">
            </Image></li>

          <li className={styles.second_menu_bar_item}>Roller Blinds
            <Image
              className={styles.chevron_top_menu}
              width={100}
              height={100}
              src={"/chevronwhite.png"}
              alt="chevron_top_menu">
            </Image></li>

          <li className={styles.second_menu_bar_item}>HoneyComb Blinds
            <Image
              className={styles.chevron_top_menu}
              width={100}
              height={100}
              src={"/chevronwhite.png"}
              alt="chevron_top_menu">
            </Image>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HeaderPiece;
