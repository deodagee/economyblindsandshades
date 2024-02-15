import React from "react";
import styles from "../styles/components/pages/contact.module.css"
import ContactPage from "./components/pages/contact";
function zebrablinds() {

    return (
        <>
            <div className={styles.main_wrapper_from_main_page}>
                <ContactPage></ContactPage>
            </div>
        </>
    )
}

export default zebrablinds;