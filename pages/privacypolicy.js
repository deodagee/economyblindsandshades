import React from "react";
import PrivacyPolicyPage from "./components/pages/privacypolicy";
import HeaderPiece from "./components/header";
import styles from "../styles/components/pages/privacypolicy.module.css"
function PrivacyPolicy() {



    return (
        <>
            <div className={styles.privacy_policy_main_page_wrapper}>

                <HeaderPiece></HeaderPiece>
                <PrivacyPolicyPage></PrivacyPolicyPage>
            </div>
        </>
    )
}
export default PrivacyPolicy;