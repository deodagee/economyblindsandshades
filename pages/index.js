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

<div className={styles.intro_piece}>
<Image alt='intro_piece_image' className={styles.intro_piece_image} src={"/indexcomponent2.png"} width={300} height={300}></Image>

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


<div className={styles.middle_social}>

  <div className={styles.socials_div}>
    
  <Link href="https://www.facebook.com/economyblindsandshadesinc">
  <Image alt='facebook' width={100} height={100} src={"/facebookicon.png"} className={styles.social_icons}>
  </Image>
  </Link>

  <Link href="https://www.instagram.com/economyblindsandshadesinc
">
  <Image alt='instagram' width={100} height={100} src={"/instagramicon.png"} className={styles.social_icons}>
  </Image>
  </Link>

  </div>

</div>


<div className={styles.add}>

  <p className={styles.add1}>
  Best Option for beautiful and affordable blinds and shades!
  </p>
  <p className={styles.add2}>
  Please contact us if you cannot find an answer to your question
  </p>
</div>

<div className={styles.two_section_div}>
  
        <Image width={300} height={300} alt='center_image' className={styles.are_you_priced_png} src="/howsooncanibookanestimate.PNG" />

        <div className={styles.are_you_priced_text}>
          <div className={styles.title}>How soon can I book an estimate?</div>
          <div className={styles.description}>
          We can usually be out at potential clients homes, within 24 hours of initial contact.
          </div>
        </div>
        </div>

<div className={styles.two_section_div}>
  
        <Image width={300} height={300} alt='center_image' className={styles.are_you_priced_png} src="/aretheoptionsaffordableandstylish.PNG" />

        <div className={styles.are_you_priced_text}>
          <div className={styles.title}>Are the options affordable and stylish?</div>
          <div className={styles.description}>
          We offer a variety of styles that will make your space look incredible, while also offering affordable costs.
          </div>
        </div>
        </div>


<div className={styles.two_section_div}>
  
        <Image width={300} height={300} alt='center_image' className={styles.are_you_priced_png} src="/areyoupricedcompetitively.PNG" />

        <div className={styles.are_you_priced_text}>
          <div className={styles.title}>Are you priced competitively?</div>
          <div className={styles.description}>
          We are proud to say that we are priced to beat most competitors. Each Job is different however we pride ourselves on quality and value. 
          </div>
        </div>
        </div>


<div className={styles.two_section_div}>
  
        <Image width={300} height={300} alt='center_image' className={styles.whattypeofblindspng} src="/whattypeofblindsdoyouinstall.png" />

        <div className={styles.what_type_of_blinds_text}>
          <div className={styles.title}>What Type Of Blinds Do You Install?</div>
          <div className={styles.description}>
            At Economy Blinds & Shades Inc., we offer a wide range of blinds to suit your unique style and needs. Our expert installation team can install the following types of blinds:
          </div>
          <div className={styles.description}>
            Each type of blind offers its own set of benefits and aesthetics, allowing you to choose the perfect window treatment that complements your interior decor and lifestyle. Our team is here to help you make an informed decision and ensure a seamless installation process. See a full description of our blinds below.
          </div>
          <div className={styles.links}>
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
