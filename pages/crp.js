import React from "react";
import styles from "../styles/components/pages/contactandrefundpolicy.module.css"
import ContactAndRefundPolicy from "./components/pages/crp";
function contactandrefundpolicy() {

    return (
        <>
            <div className={styles.main_wrapper_from_main_page}>
                <ContactAndRefundPolicy></ContactAndRefundPolicy>
            </div>
        </>
    )
}

export default contactandrefundpolicy;