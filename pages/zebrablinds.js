import React from "react";
import HeaderPiece from "./components/header";
import ZebrablindsPage from "./components/pages/zebrablinds";
import Footer from "./components/footer";
import styles from "/styles/components/footer.module.css"

function zebrablinds () { 

    return ( 
        <>
        <ul className={styles.main_page}>
            <li>
        <HeaderPiece></HeaderPiece>
        </li>
        <li>
        <ZebrablindsPage></ZebrablindsPage>
        </li>
        <li>
        <Footer></Footer>
        </li>
        </ul>
        
        </>

    )
}


export default zebrablinds;