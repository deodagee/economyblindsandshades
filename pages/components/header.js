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
  const [openMenu, setOpenMenu] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
  });

  const dropTheMenu = (menu) => {
    setOpenMenu((prevOpenMenu) => ({
      menu1: false,
      menu2: false,
      menu3: false,
      menu4: false,
      menu5: false,
      [menu]: !prevOpenMenu[menu],
    }));
  };

  const dropdownMenuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = 'scroll';

    const handleBodyClick = (event) => {
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        setOpenMenu({
          menu1: false,
          menu2: false,
          menu3: false,
          menu4: false,
          menu5: false,
        });
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
      document.body.style.overflowY = 'scroll';
      document.body.style.overflowX = 'hidden';
    };
  }, []);

  return (

    <>

      <div ref={dropdownMenuRef} >
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo_mobile}>
            <li className={styles.header_logo_wrapper}>
              <Link href={'/'}>
                <Image className={styles.logo_image_mobile} src={"/logoeconomyblindsandsshades.png"} width={400} height={400} alt="economyblindsandshades_logo" />
              </Link>
            </li>
          </div>

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

                  <span className={styles.icon_and_text_contact_and_privacy} >

                    <Link className={styles.top_links_item}
                      href={"/contact"}
                    > Contact
                    </Link>

                    <div className={styles.divider_line}
                    ></div>

                    <Link className={styles.top_links_item} href={"/privacypolicy"} > Privacy Policy </Link>

                  </span>

                </span>
              </div>

              <ul className={styles.second_bar}>
                <span className={styles.second_bar_wrapper}>

                  <div className={styles.hamburger_icon}>
                    <span className={styles.hamburger_line}></span>
                    <span className={styles.hamburger_line}></span>
                    <span className={styles.hamburger_line}></span>
                  </div>

                  <Link className={styles.header_link_one} href={"/"} >
                    <li className={styles.second_menu_bar_item_one}>
                      <span>
                        <Image
                          alt="homebutton"
                          width={100}
                          height={100}
                          src={"/homebutton.png"}
                          className={styles.home_button}>
                        </Image>
                      </span>
                      <span>
                      <div className={styles.home_button_text}>Home</div>
                      </span>
                    </li>
                  </Link>

                  <button className={styles.second_menu_bar_item} onClick={() => dropTheMenu('menu1')}>
                    <div className={styles.tag_and_chevron}>
                      <li>
                        Zebra Blinds
                      </li>
                      <Image
                        className={styles.chevron_top_menu}
                        width={100}
                        height={100}
                        src={"/chevronwhite.png"}
                        alt="chevron_top_menu">
                      </Image>
                    </div>

                    <div className={styles.drop_down_wrapper}>
                      {openMenu.menu1 && (
                        <>
                          <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                            <div className={styles.drop_down_wrapper_list}>
                              <ul>
                                <Link href={"/zebrablinds"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Room Darkening
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/zebrablinds"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Room Lightening
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>

                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </button>


                  <button className={styles.second_menu_bar_item} onClick={() => dropTheMenu('menu2')}>
                    <div className={styles.tag_and_chevron}>
                      <li>Shangrila Blinds
                      </li>
                      <Image
                        className={styles.chevron_top_menu}
                        width={100}
                        height={100}
                        src={"/chevronwhite.png"}
                        alt="chevron_top_menu">
                      </Image>
                    </div>

                    <div className={styles.drop_down_wrapper}>
                      {openMenu.menu2 && (
                        <>
                          <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                            <div className={styles.drop_down_wrapper_list}>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </button>


                  <button className={styles.second_menu_bar_item} onClick={() => dropTheMenu('menu3')}>
                    <div className={styles.tag_and_chevron}>
                      <li >Roman Blinds
                      </li>
                      <Image
                        className={styles.chevron_top_menu}
                        width={100}
                        height={100}
                        src={"/chevronwhite.png"}
                        alt="chevron_top_menu">
                      </Image>
                    </div>

                    <div className={styles.drop_down_wrapper}>
                      {openMenu.menu3 && (
                        <>
                          <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                            <div className={styles.drop_down_wrapper_list}>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                  </button>

                  <button className={styles.second_menu_bar_item} onClick={() => dropTheMenu('menu4')}>
                    <div className={styles.tag_and_chevron}>
                      <li>Roller Blinds
                      </li>
                      <Image
                        className={styles.chevron_top_menu}
                        width={100}
                        height={100}
                        src={"/chevronwhite.png"}
                        alt="chevron_top_menu">
                      </Image>
                    </div>

                    <div className={styles.drop_down_wrapper}>
                      {openMenu.menu4 && (
                        <>
                          <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                            <div className={styles.drop_down_wrapper_list}>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Option
                                  </li>
                                </Link>
                              </ul>

                            </div>
                          </div>
                        </>
                      )}

                    </div>
                  </button>

                  <button className={styles.second_menu_bar_item} onClick={() => dropTheMenu('menu5')}>
                    <div className={styles.tag_and_chevron}>
                      <li>HoneyComb Blinds
                      </li>
                      <Image
                        className={styles.chevron_top_menu}
                        width={100}
                        height={100}
                        src={"/chevronwhite.png"}
                        alt="chevron_top_menu">
                      </Image>

                      <div className={styles.drop_down_wrapper}>
                        {openMenu.menu5 && (
                          <>
                            <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                              <div className={styles.drop_down_wrapper_list}>
                                <ul>
                                  <Link href={"/"}>
                                    <li className={styles.drop_down_menu_item}>
                                      Option
                                    </li>
                                  </Link>
                                </ul>
                                <ul>
                                  <Link href={"/"}>
                                    <li className={styles.drop_down_menu_item}>
                                      Option
                                    </li>
                                  </Link>
                                </ul>

                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </button>

                  <div className={styles.second_menu_bar_item2}>
                    {session ? (
                      <>
                        <li className={styles.sign_in_and_sign_out_buttons}>
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
                        <li className={styles.sign_in_and_sign_out_buttons}>
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
                              src={"/cartblack.png"}>
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
