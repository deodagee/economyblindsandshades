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

  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerMenuRef = useRef(null);

  const toggleSideMenu = () => {
    setSideMenuOpen(!isSideMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (burgerMenuRef.current && !burgerMenuRef.current.contains(event.target)) {
      setSideMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /////////////////////////////////////////////////////////////////////////

  const [openMenu, setOpenMenu] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
    menu5: false,
    menu6: false,

  });

  const handleMouseEnter = (menu) => {
    setOpenMenu((prevOpenMenu) => ({
      ...prevOpenMenu,
      [menu]: true,
    }));
  };

  const handleMouseLeave = (menu) => {
    setOpenMenu((prevOpenMenu) => ({
      ...prevOpenMenu,
      [menu]: false,
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
          menu6: false,
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
                <Image className={styles.logo_image_mobile} src={"/logoeconomyblindsandsshadeswithwhite.png"} width={400} height={400} alt="economyblindsandshades_logo" />
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


                    <Link className={styles.top_links_item} href={"/contact"}>  Contact </Link>

                    <div className={styles.divider_line}> </div>

                    <Link className={styles.top_links_item} href={"/privacypolicy"} > Privacy Policy </Link>

                    <Link className={styles.top_links_item} href={"/crp"} > Cancellations & Refund Policy </Link>

                  </span>

                </span>
              </div>


              <ul className={styles.second_bar}>
                <span className={styles.second_bar_wrapper}>


                  <div className={styles.burger_and_menu} ref={burgerMenuRef}>
                    <div className={styles.hamburger_icon} onClick={toggleSideMenu}>
                      <span className={styles.hamburger_line}></span>
                      <span className={styles.hamburger_line}></span>
                      <span className={styles.hamburger_line}></span>
                    </div>

                    {isSideMenuOpen && (
                      <div className={styles.side_menu_container} ref={menuRef}>
                        <div className={styles.side_menu}>
                          Menu
                          <p className={styles.side_menu_item1}>Zebra Blinds Room Light No Drill Type
                            <Image
                              className={styles.chevron_top_menu}
                              width={100}
                              height={100}
                              src={"/chevronwhite.png"}
                              alt="chevron_top_menu">
                            </Image>
                          </p>
                          <Link className={styles.side_menu_item} href={"/zebrablinds"}>
                            <p>Light Filtering</p>
                          </Link>
                          <Link className={styles.side_menu_item} href={"/zebrablindsroomdarkening"}>
                            <p>Room Darkening</p>
                          </Link>

                          <p className={styles.side_menu_item1}>Roller Blinds
                            <Image
                              className={styles.chevron_top_menu}
                              width={100}
                              height={100}
                              src={"/chevronwhite.png"}
                              alt="chevron_top_menu">
                            </Image>
                          </p>
                          <Link className={styles.side_menu_item} href={"/rollerblindsroomlightening"}>
                            <p>Light Filtering</p>
                          </Link>
                          <Link className={styles.side_menu_item} href={"/rollerblindsroomdarkening"}>
                            <p>Room Darkening</p>
                          </Link>

                          <p className={styles.side_menu_item1}>Honey-Comb Blinds
                            <Image
                              className={styles.chevron_top_menu}
                              width={100}
                              height={100}
                              src={"/chevronwhite.png"}
                              alt="chevron_top_menu">
                            </Image>
                          </p>
                          <Link className={styles.side_menu_item} href={"/honeycombblindsroomlightening"}>
                            <p>Light Filtering</p>
                          </Link>
                          <Link className={styles.side_menu_item} href={"/honeycombblindsroomdarkening"}>
                            <p>Room Darkening</p>
                          </Link>

                        </div>
                      </div>
                    )}
                  </div>


                  <span className={styles.second_bar_left}>

                    <Link className={styles.header_link_home_button} href={"/"} >
                        <Image
                          alt="homepage"
                          width={100}
                          height={100}
                          src={"/homepage.png"}
                          className={styles.home_button}>
                        </Image>
                    </Link>
                  </span>

                  <span className={styles.second_bar_right}>
                    <button
                      className={styles.second_menu_bar_item}
                      onMouseEnter={() => handleMouseEnter('menu1')}
                      onMouseLeave={() => handleMouseLeave('menu1')}>
                      <div className={styles.tag_and_chevron}>
                        <span className={styles.headerlink}>
                          <li> </li>
                          <li>Zebra Blinds No Drill Type</li>
                        </span>

                        <Image
                          className={styles.chevron_top_menu}
                          width={100}
                          height={100}
                          src={"/chevronblack.png"}
                          alt="chevron_top_menu">
                        </Image>

                      </div>

                      <div className={styles.drop_down_wrapper}>
                        {openMenu.menu1 && (
                          <>
                            <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                              <div className={styles.drop_down_wrapper_list}>
                                <ul>

                                  <Link href={"/zebrablindsroomdarkening"}>
                                    <li className={styles.drop_down_menu_item}>
                                      Room Darkening
                                    </li>
                                  </Link>

                                </ul>
                                <ul>

                                  <Link href={"/zebrablinds"}>
                                    <li className={styles.drop_down_menu_item}>
                                      Light Filtering
                                    </li>
                                  </Link>

                                </ul>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </button>
                  </span>

                  <span className={styles.invisible}>
                    <button
                      className={styles.second_menu_bar_item}
                      onMouseEnter={() => handleMouseEnter('menu2')}
                      onMouseLeave={() => handleMouseLeave('menu2')}
                    >
                      <div className={styles.tag_and_chevron}>

                        <span className={styles.headerlink}>
                          <li></li>
                          <li>Shangrila Blinds No Drill Type</li>
                        </span>

                        <Image
                          className={styles.chevron_top_menu}
                          width={100}
                          height={100}
                          src={"/chevronblack.png"}
                          alt="chevron_top_menu"
                        />
                      </div>
                      <div className={styles.drop_down_wrapper}>
                        {openMenu.menu2 && (
                          <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                            <div className={styles.drop_down_wrapper_list}>
                              <ul>
                                <Link href={"/shangrilablindsroomdarkening"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Room Darkening
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/shangrilablindsroomlightening"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Light Filtering
                                  </li>
                                </Link>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  </span>



                  <span className={styles.invisible}>
                    <button
                      className={styles.second_menu_bar_item}
                      onMouseEnter={() => handleMouseEnter('menu3')}
                      onMouseLeave={() => handleMouseLeave('menu3')}
                    >
                      <div className={styles.tag_and_chevron}>
                        <span className={styles.headerlink}>
                          <li></li>
                          <li>Roman Blinds No Drill Type</li>
                        </span>
                        <Image
                          className={styles.chevron_top_menu}
                          width={100}
                          height={100}
                          src={"/chevronblack.png"}
                          alt="chevron_top_menu"
                        />
                      </div>
                      <div className={styles.drop_down_wrapper}>
                        {openMenu.menu3 && (
                          <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                            <div className={styles.drop_down_wrapper_list}>
                              <ul>
                                <Link href={"/romanblindsroomdarkening"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Room Darkening
                                  </li>
                                </Link>
                              </ul>
                              <ul>
                                <Link href={"/romanblindsroomlightening"}>
                                  <li className={styles.drop_down_menu_item}>
                                    Light Filtering
                                  </li>
                                </Link>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </button>
                  </span>



                  <button
                    className={styles.second_menu_bar_item}
                    onMouseEnter={() => handleMouseEnter('menu4')}
                    onMouseLeave={() => handleMouseLeave('menu4')}
                  >
                    <div className={styles.tag_and_chevron}>
                      <span className={styles.headerlink}>
                        <li></li>
                        <li>Roller Blinds No Drill Type</li>
                      </span>
                      <Image
                        className={styles.chevron_top_menu}
                        width={100}
                        height={100}
                        src={"/chevronblack.png"}
                        alt="chevron_top_menu"
                      />
                    </div>
                    <div className={styles.drop_down_wrapper}>
                      {openMenu.menu4 && (
                        <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                          <div className={styles.drop_down_wrapper_list}>
                            <ul>
                              <Link href={"/rollerblindsroomdarkening"}>
                                <li className={styles.drop_down_menu_item}>
                                  Room Darkening
                                </li>
                              </Link>
                            </ul>
                            <ul>
                              <Link href={"/rollerblindsroomlightening"}>
                                <li className={styles.drop_down_menu_item}>
                                  Light Filtering
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>

                  <button
                    className={styles.second_menu_bar_item}
                    onMouseEnter={() => handleMouseEnter('menu5')}
                    onMouseLeave={() => handleMouseLeave('menu5')}
                  >
                    <div className={styles.tag_and_chevron}>
                      <span className={styles.headerlink}>
                        <li></li>
                        <li>Honey-Comb Blinds No Drill Type</li>
                      </span>
                      <Image
                        className={styles.chevron_top_menu}
                        width={100}
                        height={100}
                        src={"/chevronblack.png"}
                        alt="chevron_top_menu"
                      />
                    </div>
                    <div className={styles.drop_down_wrapper}>
                      {openMenu.menu5 && (
                        <div className={`${styles.drop_down_menu} ${styles.expand_menu}`}>
                          <div className={styles.drop_down_wrapper_list}>
                            <ul>
                              <Link href={"/honeycombblindsroomdarkening"}>
                                <li className={styles.drop_down_menu_item}>
                                  Room Darkening
                                </li>
                              </Link>
                            </ul>
                            <ul>
                              <Link href={"/honeycombblindsroomlightening"}>
                                <li className={styles.drop_down_menu_item}>
                                  Light Filtering
                                </li>
                              </Link>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </button>


                  <div className={styles.second_menu_bar_item2}>

                    {session ? (
                      <>
                        <li className={styles.sign_in_and_sign_out_buttons}>
                          <div>
                            <button className={styles.greyarea} onClick={() => signOut('google')()}>
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
                              src={"/cartblack.png"}>
                            </Image>
                          </div>
                        </div>

                      </>
                    ) : (
                      <>
                        <li className={styles.sign_in_and_sign_out_buttons}>
                          <button className={styles.greyarea} onClick={() => signIn('google')()}>
                            <Image
                              className={styles.avatar}
                              alt="avatar_image"
                              width={100}
                              height={100}
                              src={"/avatar.png"}>

                            </Image>
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
