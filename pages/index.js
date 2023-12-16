// Home.jsx
import Image from 'next/image';
import styles from '../styles/components/home.module.css';
import React from "react";
import Link from 'next/link';
import HeaderPiece from "./components/header"


export default function HomePage() {
  return (
    <>
            <HeaderPiece></HeaderPiece>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>



    <div className={styles.index_wrapper}>
      <div className={styles.EconomyBlindsAndShades}>
      <div className={styles.home_wrapper}>

<div className={styles.intro_image}>
<Image alt='indexcomponent2' className={styles.indexcomponent2} src={"/indexcomponent2.png"} width={100} height={100}></Image>

  <div className={styles.box}>
    <div className={styles.box_prt1}>
  <p className={styles.welcome}>Welcome</p>
  </div>
<div className={styles.box_prt2}>
    <Link href={"/getaquote"}><p className={styles.getaquote}>Get A Quote</p></Link>
    <Link href={"/learnmore"}><p className={styles.learnmore}>Learn More</p></Link>
    </div>
  </div>
</div>



<div className={styles.what_type_of_blinds}>
  
        <Image width={100} height={100} alt='center_image' className={styles.whattypeofblindspng} src="/whattypeofblindsdoyouinstall.png" />

        <div className={styles.what_type_of_blinds_text}>
          <div className={styles.WhatTypeOfBlindsDoYouInstall}>What Type Of Blinds Do You Install?</div>
          <div className={styles.AtEconomyBlindsShadesIncWeOfferAWideRangeOfBlindsToSuitYourUniqueStyleAndNeedsOurExpertInstallationTeamCanInstallTheFollowingTypesOfBlinds}>
            At Economy Blinds & Shades Inc., we offer a wide range of blinds to suit your unique style and needs. Our expert installation team can install the following types of blinds:
          </div>
          <div className={styles.EachTypeOfBlindOffersItsOwnSetOfBenefitsAndAestheticsAllowingYouToChooseThePerfectWindowTreatmentThatComplementsYourInteriorDecorAndLifestyleOurTeamIsHereToHelpYouMakeAnInformedDecisionAndEnsureASeamlessInstallationProcessSeeAFullDescriptionOfOurBlindsBelow}>
            Each type of blind offers its own set of benefits and aesthetics, allowing you to choose the perfect window treatment that complements your interior decor and lifestyle. Our team is here to help you make an informed decision and ensure a seamless installation process. See a full description of our blinds below.
          </div>
          <div className={styles.ZebraBlindsShangrilaBlindsRomanBlindsRollerBlindsHoneycombBlinds}>
          <Link href={"/zebrablinds"}>
          <span className={styles.linkitem}>
            1.Zebra Blinds
            <br/>
            </span>
            </Link>
            <Link href={"/shangrilablinds"}>
            <span className={styles.linkitem}>
            2.Shangrila Blinds
            <br/>
            </span>
            </Link>
            <Link href={"/romanblinds"}>
            <span className={styles.linkitem}>
            3.Roman Blinds
            <br/>
            </span>
            </Link>
            <Link href={"/rollerblinds"}>
            <span className={styles.linkitem}>
            4.Roller Blinds
            <br/>
            </span>
            </Link>
            <Link href={"/honeycombblinds"}>
            <span className={styles.linkitem}>
            5.Honeycomb Blinds
            </span>
            </Link>
          </div>
        </div>
        </div>


      </div>
      </div>
      </div>
    </>
  )
}
