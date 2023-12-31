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

    <ul className={styles.headercomponent}>
        <li className={styles.link_top_prt1}> 
        <Link className={styles.header_link} href={"/"} > Home </Link></li>
        <li className={styles.header_logo}>
          <Link href={'/'}>
      <Image className={styles.logo_image} src={"/logo.jpg"} width={400} height={400} alt="economyblindsandshades_logo" />
      </Link>
    </li>
    <li className={styles.link_top_prt2}> 
    <Link className={styles.header_link} href={"/privacypolicy"} > Privacy Policy </Link>
     <Link className={styles.header_link} href={"/getaquote"} > Get A Quote </Link>
     <Link className={styles.header_link} href={"/learnmore"} > Learn More </Link>
    </li>
    </ul>


    <ul className={styles.second_menu_bar}>

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
