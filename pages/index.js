// Home.jsx
import Image from 'next/image';
import styles from '../styles/components/home.module.css';
import { React, useState, useEffect } from "react";
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





            <div className={styles.two_section_div5}>

              <div className={styles.two_section_div5_wrapper}>

              <div className={styles.rectangle_1}>
              <p className={styles.router_tab}>
              Zeebra Blinds
              </p>

                <Link href={"/zebrablinds"}>
                    <span className={styles.linkitem}>
                      Room Lightening
                      <br />
                    </span>
                </Link>

                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Darkening
                      <br />
                    </span>
                </Link>

                </div>


                <div className={styles.rectangle_4}>
                <p className={styles.router_tab}>
                Roller Blinds
                </p>

                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Lightening
                      <br />
                    </span>
                </Link>
                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Darkening
                      <br />
                    </span>
                </Link>
                </div>

                <div className={styles.rectangle_3}>
                <p className={styles.router_tab}>
                Roman Blinds
                </p>
                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Lightening
                      <br />
                    </span>
                </Link>
                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Darkening
                      <br />
                    </span>
                </Link>
                </div>

                <div className={styles.rectangle_5}>
                <p className={styles.router_tab}>
                Honeycomb Blinds
                </p>
                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Lightening
                      <br />
                    </span>
                </Link>
                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Darkening
                      <br />
                    </span>
                </Link>
                </div>

                <div className={styles.rectangle_2}>
<p className={styles.router_tab}>
                  Shangrila Blinds
</p>
                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Lightening
                      <br />
                    </span>
                </Link>
                <Link href={"/"}>
                    <span className={styles.linkitem}>
                      Room Darkening
                      <br />
                    </span>
                </Link>
                </div>





              </div>
            </div>




            <div className={styles.add}>

              <p className={styles.add1}>
                Best Option for beautiful and affordable blinds and shades!
              </p>
              <p className={styles.add2}>
                Please contact us if you cannot find an answer to your question(s).
              </p>
            </div>

            <div className={styles.gridbox_one_and_gridbox_two}>
              <div className={styles.gridbox_one}>
                <div className={styles.two_section_div1}>

                  <Image width={300} height={300} alt='center_image' className={styles.box_grid_image} src="/howsooncanibookanestimate.png" />

                  <div className={styles.box_grid_text}>
                    <div className={styles.title}>How To Measure</div>
                    <div className={styles.description}>
                      <span>
                        Always use a steel tape measure.
                      </span>
                      <span>
                        - For inside mount measurements, enter the exact frame-to-frame dimensions of your window and we will make the deductions.
                      </span>
                      <span>
                        Measure to the nearest 1/8 &quot; of an inch. If your dimension is at 1/16 &quot; of an inch, round it down.
                      </span>
                      <span>
                        -For outside mount measurements, add 2” past the trim on the width & 5” past the trim on the height.
                      </span>
                      <span>
                        Full Reference instructions at the top of each order page
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.two_section_div2}>

                  <Image width={300} height={300} alt='center_image' className={styles.box_grid_image} src="/aretheoptionsaffordableandstylish.png" />

                  <div className={styles.box_grid_text}>
                    <div className={styles.title}>Are the options affordable and stylish?</div>
                    <div className={styles.description}>
                      We offer a variety of styles that will make your space look incredible, while also offering affordable costs.
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.gridbox_two}>
                <div className={styles.two_section_div3}>

                  <Image width={300} height={300} alt='center_image' className={styles.box_grid_image} src="/areyoupricedcompetitively.png" />

                  <div className={styles.box_grid_text}>
                    <div className={styles.title}>Are you priced competitively?</div>
                    <div className={styles.description}>
                      We are proud to say that we are priced to beat most competitors. Each Job is different however we pride ourselves on quality and value.
                    </div>
                  </div>
                </div>


                <div className={styles.two_section_div4}>
                  <Image width={300} height={300} alt='center_image' className={styles.box_grid_image} src="/whattypeofblindsdoyouinstall.png" />
                  <div className={styles.box_grid_text}>
                    <div className={styles.title}>What Type Of Blinds Do You Install?</div>

                  </div>
                </div>
              </div>



            </div>


            <div className={styles.three_icons}>
              <span className={styles.three_icons_wrapper}>

                <div className={styles.three_icons_prt1}>
                  <Image
                    className={styles.three_icons_ICON_wrapper}
                    alt='threeicon'
                    width={100}
                    height={100}
                    src={"/freedelivery.png"}>
                  </Image>
                  <p className={styles.three_icons_ICON_wrapper_text}>A TRUSTED BRAND, TRUSTED PARTNERS</p>
                  <p className={styles.three_icons_ICON_wrapper_description}>Economy Blinds & Shades over the years demonstrates the highest level of craftsmanship to fit all budgets.
                    We take pride in a high-quality product backed by reliable reputation.</p>
                </div>

                <div className={styles.three_icons_prt2}>
                  <Image
                    className={styles.three_icons_ICON_wrapper}
                    alt='threeicon'
                    width={100}
                    height={100}
                    src={"/freeshippingicon1.png"}>
                  </Image>
                  <p className={styles.three_icons_ICON_wrapper_text}>FREE DELIVERY NO MINIMUM PURCHASE NECESSARY</p>
                  <p className={styles.three_icons_ICON_wrapper_description}>All of our blinds & shades are delivered free of charge.

                    This is another good reason to choose Economy Blinds & Shades for your beautiful window covering.</p>
                </div>

                <div className={styles.three_icons_prt3}>
                  <Image
                    className={styles.three_icons_ICON_wrapper}
                    alt='threeicon'
                    width={100}
                    height={100}
                    src={"/trustedbrand.png"}>
                  </Image>
                  <p className={styles.three_icons_ICON_wrapper_text}>QUALITY & SUPERIOR PRODUCT</p>
                  <p className={styles.three_icons_ICON_wrapper_description}>Customer satisfaction is most important to us, We hand pick high quality fabrics & materials to fit your custom-made window specified needs.</p>

                </div>

              </span>

            </div>


          </div>
          {showFooter && <span className={styles.ZebraBlindsFooter_wrapper}>
            <div className={`${styles.ZebraBlindsFooter} ${showFooter ? styles.showFooter : ''}`}>
              <div className={styles.shipping_divider2}></div>
              <div className={styles.shipping_divider2}></div>

            </div>
          </span>}



        </div>
      </div>

      {showFooter && <span className={styles.ZebraBlindsFooter_wrapper}>
        <div className={`${styles.ZebraBlindsFooter} ${showFooter ? styles.showFooter : ''}`}>
          <div className={styles.shipping_divider2}></div>
          <FooterPage></FooterPage>
          <div className={styles.shipping_divider2}></div>

        </div>
      </span>}
    </>
  )
}
