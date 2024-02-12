// Home.jsx
import Image from 'next/image';
import styles from '../styles/components/home.module.css';
import {React, useState, useEffect} from "react";
import Link from 'next/link';
import HeaderPiece from "./components/header"
import FooterPage from './components/footer';

export default function HomePage() {

  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Adjust the threshold as needed
      const threshold = 100;

      // Check if we are close to the bottom of the page
      const isNearBottom = scrollPosition + windowHeight >= documentHeight - threshold;

      // Set the state to show or hide the footer
      setShowFooter(isNearBottom);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <HeaderPiece></HeaderPiece>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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

            <div className={styles.two_section_div1}>

              <Image width={300} height={300} alt='center_image' className={styles.are_you_priced_png} src="/howsooncanibookanestimate.png" />

              <div className={styles.are_you_priced_text}>
                <div className={styles.title}>How soon can I book an estimate?</div>
                <div className={styles.description}>
                  We can usually be out at potential clients homes, within 24 hours of initial contact.
                </div>
              </div>
            </div>

            <div className={styles.two_section_div2}>

              <Image width={300} height={300} alt='center_image' className={styles.are_you_priced_png} src="/aretheoptionsaffordableandstylish.png" />

              <div className={styles.are_you_priced_text}>
                <div className={styles.title}>Are the options affordable and stylish?</div>
                <div className={styles.description}>
                  We offer a variety of styles that will make your space look incredible, while also offering affordable costs.
                </div>
              </div>
            </div>


            <div className={styles.two_section_div3}>

              <Image width={300} height={300} alt='center_image' className={styles.are_you_priced_png} src="/areyoupricedcompetitively.png" />

              <div className={styles.are_you_priced_text}>
                <div className={styles.title}>Are you priced competitively?</div>
                <div className={styles.description}>
                  We are proud to say that we are priced to beat most competitors. Each Job is different however we pride ourselves on quality and value.
                </div>
              </div>
            </div>


            <div className={styles.two_section_div4}>
              <Image width={300} height={300} alt='center_image' className={styles.whattypeofblindspng} src="/whattypeofblindsdoyouinstall.png" />
              <div className={styles.what_type_of_blinds_text}>
                <div className={styles.title}>What Type Of Blinds Do You Install?</div>
                <div className={styles.description}>
                  At Economy Blinds & Shades Inc., we offer a wide range of blinds to suit your unique style and needs. Our expert installation team can install the following types of blinds:
                </div>
                <div className={styles.description}>
                  Each type of blind offers its own set of benefits and aesthetics, allowing you to choose the perfect window treatment that complements your interior decor and lifestyle. Our team is here to help you make an informed decision and ensure a seamless installation process. See a full description of our blinds below.
                </div>
              </div>
            </div>

            <div className={styles.two_section_div5}>
              <div className={styles.two_section_div5_wrapper}>
              <Link href={"/zebrablinds"}>
                <div className={styles.rectangle_1}>
                    <span className={styles.linkitem}>
                      1.Zebra Blinds
                      <br />
                    </span>
                </div>
                </Link>

                <Link href={"/shangrilablinds"}>

                <div className={styles.rectangle_2}>
                    <span className={styles.linkitem}>
                      2.Shangrila Blinds
                      <br />
                    </span>
                </div>
                </Link>

                <Link href={"/romanblinds"}>

                <div className={styles.rectangle_3}>
                    <span className={styles.linkitem}>
                      3.Roman Blinds
                      <br />
                    </span>
                </div>
                </Link>
                <Link href={"/rollerblinds"}>

                <div className={styles.rectangle_4}>
                    <span className={styles.linkitem}>
                      4.Roller Blinds
                      <br />
                    </span>
                </div>
                </Link>

                <Link href={"/honeycombblinds"}>

                <div className={styles.rectangle_5}>
                    <span className={styles.linkitem}>
                      5.Honeycomb Blinds
                    </span>
                </div>
                </Link>

              </div>
            </div>
          </div>
          {showFooter && <span className={styles.ZebraBlindsFooter_wrapper}>
            <div className={`${styles.ZebraBlindsFooter} ${showFooter ? styles.showFooter : ''}`}>
              <div className={styles.shipping_divider2}></div>
              <FooterPage></FooterPage>
              <div className={styles.shipping_divider2}></div>

            </div>
          </span>}


          
        </div>
      </div>
    </>
  )
}
