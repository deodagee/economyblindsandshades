import React from "react";
import HeaderPiece from "./components/header";
import ZebrablindsPage from "./components/pages/zebrablinds";
import Footer from "./components/footer";
import styles from "../styles/main/main.module.css"


function zebrablinds () { 

    return ( 
        <>
<div className={styles.main_wrapper}>
        <HeaderPiece></HeaderPiece>
        <ZebrablindsPage></ZebrablindsPage>
        </div>
        </>
    )
}

export default zebrablinds;