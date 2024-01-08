import React from "react";
import ZebrablindsPage from "./components/pages/zebrablinds";
import styles from "../styles/main/main.module.css"


function zebrablinds () { 

    return ( 
        <>
<div className={styles.main_wrapper}>
        <ZebrablindsPage></ZebrablindsPage>
        </div>
        </>
    )
}

export default zebrablinds;