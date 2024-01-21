import React, { useEffect, useState } from "react";
import styles from "../../styles/components/header.module.css";
import Image from "next/image";
import Link from "next/link";
import MessageBox from "./pages/contact";
import { useRef } from "react";

function HeaderPiece() {

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

          <ol className={styles.header_promo_bar}>
            <li>
              <p>
                <Image
                  src={"/factorydirectsavingsversion4.png"}
                  width={200}
                  height={200}
                  alt="header_top_image"
                  className={styles.header_top_image}>

                </Image>              
                </p>
            </li>
          </ol>

          <div className={styles.header_top_bar}>

            <div>
              <li className={styles.header_logo}>
                <Link href={'/'}>
                  <Image className={styles.logo_image} src={"/logodarker.png"} width={400} height={400} alt="economyblindsandshades_logo" />
                </Link>
              </li>
            </div>

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
                  <Image
                    className={styles.add_to_cart}
                    alt="add_to_cart"
                    width={100}
                    height={100}
                    src={"/cart.png"}>
                  </Image>
                </div>

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

          <ul className={styles.second_menu_bar}>
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


            <li className={styles.second_menu_bar_item}>HoneyComb Blinds
              <button>
                <Image
                  className={styles.chevron_top_menu}
                  width={100}
                  height={100}
                  src={"/chevronwhite.png"}
                  alt="chevron_top_menu">
                </Image>
              </button>
            </li>
          </ul>
        </div>


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

    </>


  );
}

export default HeaderPiece;
