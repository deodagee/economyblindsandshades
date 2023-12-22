import React from "react";
import HeaderPiece from "./components/header";
import ZebrablindsPage from "./components/pages/zebrablinds";
import Footer from "./components/footer";
import styles from "../styles/main/main.module.css"


function zebrablinds () { 

    return ( 
        <>
        <ul className={styles.main_wrapper}>

            <li className={styles.header_piece}>
        <HeaderPiece></HeaderPiece>
        </li>
        <li className={styles.middle_piece}>
        <ZebrablindsPage></ZebrablindsPage>
        </li>
        <li className={styles.footer_piece}>
        <Footer></Footer>
        </li>
        </ul>
        </>
    )
}


export default zebrablinds;