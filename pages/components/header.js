import React, { useEffect, useState } from "react";
import styles from "../../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import MessageBox from "./pages/contact";
import { useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react"


function HeaderPiece() {
  /////////////////////////////////////////////////////////////////////////
  const { data: session } = useSession()
  /////////////////////////////////////////////////////////////////////////

  const [handle_open_menu, set_handle_open_menu] = useState(false);

  const drop_the_menu = () => {
    set_handle_open_menu(!handle_open_menu);

  }
  // Use useRef to store a reference to the dropdown menu div
  const dropdownMenuRef = useRef(null);



  useEffect(() => {


    // Set overflowY to 'auto' on mount
    document.body.style.overflowY = 'scroll';

    const handleBodyClick = (event) => {
      // Check if the clicked element is outside the dropdown menu
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        set_handle_open_menu(false);
      }
    };

    // Add event listener to handle clicks on the document body
    document.body.addEventListener('click', handleBodyClick);

    // Cleanup function to remove the event listener on unmount
    return () => {
      document.body.removeEventListener('click', handleBodyClick);

      // Restore overflowX to 'hidden' and overflowY to 'auto' on unmount
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  return (

    <>


      <div ref={dropdownMenuRef} >
        <div className={styles.header_wrapper}>

<div className={styles.logo_and_header_1st_and_2nd_bar}>
        <div className={styles.header_logo}>
              <li className={styles.header_logo_wrapper}>
                <Link href={'/'}>
                  <Image className={styles.logo_image} src={"/logoeconomyblindsandsshades.png"} width={400} height={400} alt="economyblindsandshades_logo" />
                </Link>
              </li>
            </div>
        <div className={styles.header_1st_and_2nd_bar}>
          
          <div className={styles.first_bar}>



            <div className={styles.icons_group}>
              <div className={styles.icon_and_text}>
                <Image
                  className={styles.icons_for_top}
                  alt="free_shipping"
                  width={100}
                  height={100}
                  src={"/freeshipping.png"}>
                </Image>
                <p className={styles.icons_for_top_text}>Free Shipping</p>
              </div>

              <div className={styles.icon_and_text}>
                <Image
                  className={styles.icons_for_top}
                  alt="customer_satisfaction"
                  width={100}
                  height={100}
                  src={"/customersatisfaction.png"}>
                </Image>
                <p className={styles.icons_for_top_text}>Customer Satisfaction</p>
              </div>

              <div className={styles.icon_and_text}>
                <Image
                  className={styles.icons_for_top}
                  alt="large_selection"
                  width={100}
                  height={100}
                  src={"/largeselection.png"}>
                </Image>
                <p className={styles.icons_for_top_text}>Large Selection</p>
              </div>

            </div>

            <span className={styles.links_for_top_wrapper}>

              <span className={styles.side_links} >



                <div>
                  <Link className={styles.top_links_item}
                    href={"/contact"}
                  > Contact
                  </Link>
                </div>

                <div className={styles.divider_line}
                ></div>

                <div>
                  <Link className={styles.top_links_item} href={"/privacypolicy"} > Privacy Policy </Link>
                </div>

              </span>

            </span>
          </div>

          <ul className={styles.second_bar}>
            <span className={styles.second_bar_wrapper}>
              <li className={styles.second_menu_bar_item}>
                <Link className={styles.header_link} href={"/"} > Home </Link>
              </li>
              <button
                onClick={drop_the_menu}
              >
                <li className={styles.second_menu_bar_item}>
                  <p> Zebra Blinds </p>
                  <Image
                    className={styles.chevron_top_menu}
                    width={100}
                    height={100}
                    src={"/chevronwhite.png"}
                    alt="chevron_top_menu">
                  </Image>
                </li>
              </button>


              <div className={styles.drop_down_wrapper}>

                {handle_open_menu && (

                  <div className={styles.drop_down_menu}>
                    <ul>
                      <Link href={"/zebrablinds"}>
                        <li className={styles.drop_down_menu_item}>
                          Room Darkening
                        </li>
                      </Link>
                      <li className={styles.drop_down_menu_item}>
                        Light Filtering
                      </li>
                      <li className={styles.drop_down_menu_item}>
                        Option 3
                      </li>
                      <li className={styles.drop_down_menu_item}>
                        Option 4
                      </li>
                      <li className={styles.drop_down_menu_item}>
                        Option 5
                      </li>
                    </ul>
                  </div>
                )}

              </div>


              <button>
                <li className={styles.second_menu_bar_item}>Shangrila Blinds
                  <Image
                    className={styles.chevron_top_menu}
                    width={100}
                    height={100}
                    src={"/chevronwhite.png"}
                    alt="chevron_top_menu">
                  </Image>
                </li>
              </button>


              <button>
                <li className={styles.second_menu_bar_item}>Roman Blinds
                  <Image
                    className={styles.chevron_top_menu}
                    width={100}
                    height={100}
                    src={"/chevronwhite.png"}
                    alt="chevron_top_menu">
                  </Image>
                </li>
              </button>


              <button>
                <li className={styles.second_menu_bar_item}>Roller Blinds
                  <Image
                    className={styles.chevron_top_menu}
                    width={100}
                    height={100}
                    src={"/chevronwhite.png"}
                    alt="chevron_top_menu">
                  </Image>
                </li>
              </button>

              <button>
              <li className={styles.second_menu_bar_item}>HoneyComb Blinds
                  <Image
                    className={styles.chevron_top_menu}
                    width={100}
                    height={100}
                    src={"/chevronwhite.png"}
                    alt="chevron_top_menu">
                  </Image>
              </li>
              </button>
            </span>

            <span className={styles.login_cms_group}>
              <div className={styles.hamburger_icon}>
                <span className={styles.hamburger_line}></span>
                <span className={styles.hamburger_line}></span>
                <span className={styles.hamburger_line}></span>


              </div>


              <div className={styles.sign_in_and_sign_out}>
              {session ? (
                <>
                  <li className={styles.avatar_and_tag}>
                    <div>
                      <button className={styles.button} onClick={() => signOut('google')()}>
                        <p>Logout</p>
                      </button>
                    </div>
                  </li>
                 
                  <div>

                    <div className={styles.add_to_cart_wrapper}>
                    <Image
                      className={styles.add_to_cart}
                      alt="add_to_cart"
                      width={100}
                      height={100}
                      src={"/cart.png"}>
                    </Image>
                    </div>
                  </div>

                </>
              ) : (
                <>
                  <li className={styles.avatar_and_tag}>
                    <button className={styles.button} onClick={() => signIn('google')()}>
                      <p>Sign In</p>
                    </button>
                  </li>
         
                  <div>
                  <div className={styles.add_to_cart_wrapper}>
                    <Image
                      className={styles.add_to_cart}
                      alt="add_to_cart"
                      width={100}
                      height={100}
                      src={"/cart.png"}>
                    </Image>
                    </div>
                  </div>

                </>
              )}
              </div>
            </span>

          </ul>
         </div>

         </div>
         <ol className={styles.header_promo_bar}>
            <li>
              <Image
                src={"/factorydirectsavingsversion4.png"}
                width={200}
                height={200}
                alt="header_top_image"
                className={styles.promo_image}>

              </Image>
            </li>

          </ol>
        </div>

      </div>


    </>



  );
}

export default HeaderPiece;
