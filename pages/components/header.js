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
      <Image src={"/logo.png"} width={100} height={100} alt="economyblindsandshades_logo" />
    </li>
    <li className={styles.link_top_prt2}> 
    <Link className={styles.header_link} href={"/privacypolicy"} > Privacy Policy </Link>
     <Link className={styles.header_link} href={"/getaquote"} > Get A Quote </Link>
     <Link className={styles.header_link} href={"/learnmore"} > Learn More </Link>
    </li>
    </ul>
    </div>
    </>
  );
}

export default HeaderPiece;
