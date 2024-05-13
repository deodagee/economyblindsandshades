.ZebraBlindsFooter_wrapper::after {
  display: flex;
  transition: 0.8s;
}

.ZebraBlindsFooter {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 15vh;
  background-color: rgb(242, 242, 242);
  background: linear-gradient(to top, #1c1c1c, #1e1e1e, #171717);
  position: fixed;
  bottom: 0;
  z-index: 4;
  opacity: 0;
  transition: opacity 0.9s ease;
  border-left: none;
  border-right: none;
  border-color: #00765e;
  border-width: 5px;
  border-top-width: 30px;

}

.showFooter {
  opacity: 1;
  transition: opacity 0.9s ease;
}

.index_wrapper {
  z-index: 50;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.home_wrapper {
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin-top: -168px;
  display: flex;
  flex-direction: column;
  margin-bottom: 21vh;
}

.two_section_div5 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}


.top_banner { 
  background-color: #d2d2d2;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34vh;
  flex-direction: row;
  background-image: url("/blindsrf5.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 5vh;
}

.top_banner_headers { 
  display: flex;
  background-color: black;
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0.35rem;
  box-shadow: rgb(197, 197, 197) 5px 5px 10px;
  gap: 15px;

}


.top_banner h1 { 
  display: flex;
  height: 30px;
  width: auto;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 25px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.different_blinds_top {
  width: max-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}


.rectangle_2,
.rectangle_3 {
  display: none;
}


.rectangle_1,
.rectangle_4,
.rectangle_5
{

  border-radius: 5px;
  width: 35vw;
  height: 13vw;
  align-items: start;
  justify-content: flex-start;
  display: flex;
  margin: 5px;
  gap: 5vw;
  border-width: 2px;
  border-color: rgb(0, 144, 127);
  box-shadow: rgb(197, 197, 197) 5px 5px 10px;
  transition: 0.3s;
  background-color: #262626;
  background: linear-gradient(to top, #f3f3f300, #9e9e9e, #d8d8d800);
  box-shadow: rgb(142, 142, 142) 5px 5px 10px;


}



.top_banner2 { 
  background-color: #d2d2d2;
  width: 70vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
  flex-direction: row;
  background-image: url("/blindsrf4.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 7vh;
}


.top_banner_headers2 { 
  display: flex;
  background-color: rgb(255, 255, 255);
  padding: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 0.35rem;
  box-shadow: rgb(197, 197, 197) 5px 5px 10px;
  gap: 15px;
  width: 45vw;
  align-items: center;
  justify-content: center;
}

.top_banner2 h1 { 
  display: flex;
  height: 30px;
  width: auto;
  align-items: center;
  justify-content: center;
  color: black;
  font-weight: 800;
  font-size: 25px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}



.rectangle_6 { 
  border-radius: 5px;
  width: 70vw;
  height: 30vw;
  align-items: center;
  justify-content:center;
  display: flex;
  margin: 5px;
  gap: 5vw;
  border-width: 2px;
  border-color: rgb(0, 144, 127);
  box-shadow: rgb(197, 197, 197) 5px 5px 10px;
  transition: 0.3s;
  background-color: rgb(229, 229, 229);
}


.rectangle_1:hover,
.rectangle_2:hover,
.rectangle_3:hover,
.rectangle_4:hover,
.rectangle_5:hover,
.rectangle_6:hover {
  transform: scale(1.01);
  box-shadow: rgb(95, 95, 95) 1px 1px 5px;
  transition: 0.3s;
  border-color: rgb(0, 101, 89);
}


.router_tab {
  width: 27vw;
  display: flex;
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  position: absolute;
  padding: 5px;
  color: #ffffff;
  font-weight: 600;
  background-color: #f7f7f7ae;
  white-space: nowrap;
  border-top-left-radius: 3px;
  background: linear-gradient(to top, #1e4b41dc, #255e51e0, #3f937fda);
  border-bottom-right-radius: 255px;
  font-size: 20px;

}

.linkitem_wrapper {
  display: flex;
  position: absolute;
  width: 35vw;
  height: 13vw;
  gap: 10px;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: underline;
  text-decoration-color: rgb(255, 255, 255);
}


.linkitem {
  position: relative;
  width: 15vw;
  height: 10vh;
  display: flex;
  word-wrap: break-word;
  align-items: center;
  justify-content: center;
  background-color: rgba(52, 52, 52, 0.41);
  font-size: 17px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  transition: 0.5s;
  font-weight: 700;
  border-width: 2px;
  border-color: rgb(0, 128, 79);
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: #dbdbdb 0.5px 0.5px 3px;
  margin-top: 5vh;

}

.linkitem::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/blindsrf7.jpg");
  background-size: cover;
  opacity: 0.4;
  transition: opacity 0.5s;
}

.linkitem:hover::before {
  opacity: 0.9;
}

.linkitem:hover span {
  color: black;
  font-size: 20px;
  color: #6cffdfdc;


}

.linkitem span {
  position: relative;
  z-index: 1;
}

.demo_video {
  background-color: black;
  border-color: green;
  border-width: 2px;
  border-radius: 0.25rem;
  display: flex;
  height: 25vw;
  width: 50vw;
  margin-top: 5vh;
  align-self: center;
}


.add {
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  color: #ffffff;
  background-color: rgb(42, 107, 111);
  border-radius: 0.15rem;
  box-shadow: rgb(197, 197, 197) 2px 2px 6px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  transition: 0.4s;
}

.add:hover {
  transform: scale(1.02);
  transition: 0.4s;
  box-shadow: rgb(115, 115, 115) 2px 2px 8px;

}


.gridbox_one_and_gridbox_two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}



.two_section_div1,
.two_section_div2,
.two_section_div3,
.two_section_div4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(to right, rgb(255, 255, 255), rgb(241, 241, 241), rgb(255, 255, 255));
  width: max-content;
  height: 500px;
  border-width: 1px;
  border-color: rgb(192, 192, 192);
  margin: 10px;
  box-shadow: rgb(197, 197, 197) 5px 5px 10px;
  border-radius: 0.15rem;
  transition: 0.3s;
}

.two_section_div1:hover,
.two_section_div2:hover,
.two_section_div3:hover,
.two_section_div4:hover {

  transform: scale(1.02);
  transition: 0.3s;

}


.box_grid_image {
  width: auto;
  height: 200px;
  display: flex;
  height: auto;
  margin: 5px;
}

.box_grid_text {
  width: 400px;
  height: 300px;
  color: white;
  border-color: rgb(228, 228, 228);
  border-width: 1px;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 5px;
  text-align: left;
}

.title {
  white-space: nowrap;
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 10px;
}

.description {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0;
  text-align: left;
  display: flex;
  font-size: 12px;
  color: rgb(0, 83, 73);
}

.title_for_three_icons { 
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;

}


.three_icons {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-bottom: 100px;
}

.three_icons_wrapper {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  gap: 10vw;
  width: 80vw;
}

.three_icons_prt1,
.three_icons_prt2,
.three_icons_prt3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 25vw;
}

.three_icons_ICON_wrapper {
  display: flex;
  width: auto;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255);
  padding: 2px;
}


.three_icons_ICON_wrapper_text {
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.three_icons_ICON_wrapper_description {
  font-size: 15px;
  text-align: center;
}



@media (min-width: 200px) and (max-width: 600px) and (orientation: portrait) {

  .EconomyBlindsAndShades {
    display: flex;
    flex-direction: column;
  }

  .rectangle_1,
  .rectangle_4,
  .rectangle_5
   {
    border-radius: 5px;
    width: 42vw;
    height: 20vh;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 5px;
    gap: 5vw;
    border-width: 2px;
    border-color: rgb(0, 144, 127);
    box-shadow: rgb(197, 197, 197) 5px 5px 10px;
    transition: 0.3s;
    background-color: rgb(243, 243, 243);
  }

  .rectangle_6  { 
    border-radius: 5px;
    width: 42vw;
    height: 20vh;
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 5px;
    margin-top: 5vh;
    gap: 5vw;
    border-width: 2px;
    border-color: rgb(0, 144, 127);
    border-color: rgb(144, 70, 0);
    box-shadow: rgb(197, 197, 197) 5px 5px 10px;
    transition: 0.3s;
    background-color: rgb(243, 243, 243);
  }

  .rectangle_6 .linkitem_wrapper { 
    width: 35vw;
    display: flex;
    align-items:center;
  }

  .router_tab {
    width: calc(42vw - 3.5px);
    height: 7vh;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    background-color: #296759;
    background: linear-gradient(to top, #1e4b41, #255e51, #3f937f);
font-size: 10px;
flex-direction: column;
    position: absolute;
    padding: 5px;
    font-weight: 600;
    white-space: nowrap;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    color: white;


  }


  .linkitem_wrapper {
    display: flex;
    position: absolute;
    width: max-content;
    height: 15vh;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 0;
    margin-top: 40px;
    color: white;
    text-decoration: underline;
  }


  .linkitem {
    position: relative;
    width: 17vw;
    height: 10vh;
    display: flex;
    word-wrap: break-word;
    align-items: center;
    justify-content: center;
    background-color: rgba(52, 52, 52, 0.41);
    font-size: 12px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    transition: 0.5s;
    font-weight: 700;
    border-width: 2px;
    border-color: rgb(0, 128, 79);
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: #dbdbdb 0.5px 0.5px 3px;
    text-align: center;
  }


  .add {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-top: 75px;
    color: #ffffff;
    background-color: rgb(42, 107, 111);
    border-radius: 0.15rem;
    box-shadow: rgb(197, 197, 197) 2px 2px 6px;
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
    transition: 0.4s;
    text-align: left;
  }

  .demo_video {
    background-color: black;
    border-color: green;
    border-width: 2px;
    border-radius: 0.25rem;
    display: flex;
    height: 10vh;
    width: 35vw;
    margin-top: 0;
  }


  .gridbox_one_and_gridbox_two {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }


  .box_grid_text {
    width: 80vw;
    height: 300px;
    color: white;
    border-color: rgb(228, 228, 228);
    border-width: 1px;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
    text-align: left;
  }

  .title {
    white-space: nowrap;
    color: black;
    font-size: 15px;
    font-weight: 600;
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    width: 80%;
    margin: 0;
    text-align: left;

    color: rgb(49, 49, 49);
  }

  .description span {
    display: flex;
    font-size: 12px;
    color: rgb(0, 83, 73);
  }



  .three_icons {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin: 20px;
    margin-bottom: 100px;
  }


  .three_icons_wrapper {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 10vw;
    width: 90vw;
  }


  .three_icons_prt1,
  .three_icons_prt2,
  .three_icons_prt3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 80vw;
  }

  .three_icons_ICON_wrapper_text {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }

  .three_icons_ICON_wrapper_description {
    font-size: 15px;
    text-align: center;
  }


}


@media (min-width: 200px) and (max-width: 600px) and (orientation: landscape) {

  .EconomyBlindsAndShades {
    display: flex;
    flex-direction: column;
  }

  .rectangle_1,
  .rectangle_4,
  .rectangle_5 {
    border-radius: 5px;
    width: 40vw;
    height: 30vh;
    align-items: start;
    justify-content: flex-start;
    display: flex;
    margin: 5px;
    gap: 5vw;
    border-width: 2px;
    border-color: rgb(0, 144, 127);
    border-color: rgb(144, 70, 0);
    box-shadow: rgb(197, 197, 197) 5px 5px 10px;
    transition: 0.3s;
    background-color: rgb(243, 243, 243);
  }
  .rectangle_6  { 
    border-radius: 5px;
    width: 40vw;
    height: 30vh;
    align-items: start;
    justify-content: flex-start;
    display: flex;
    margin: 5px;
    margin-top: 5vh;
    gap: 5vw;
    border-width: 2px;
    border-color: rgb(0, 144, 127);
    border-color: rgb(144, 70, 0);
    box-shadow: rgb(197, 197, 197) 5px 5px 10px;
    transition: 0.3s;
    background-color: rgb(243, 243, 243);
  }

  .rectangle_6 .linkitem_wrapper { 
    width: 35vw;
    display: flex;
    align-items:center;
  }

  .router_tab {
    width: calc(40vw - 3.5px);
    height: 7vh;
    display: flex;
    align-self: flex-start;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0);
    position: absolute;
    flex-direction: row;
    gap: 5px;
    font-size: 12px;
    padding: 5px;
    font-weight: 600;
    white-space: nowrap;

  }


  .linkitem_wrapper {
    display: flex;
    position: absolute;
    width: max-content;
    height: 35vh;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    color: white;
    text-decoration: underline;
  }


  .linkitem {
    position: relative;
    width: 17vw;
    height: 15vh;
    display: flex;
    word-wrap: break-word;
    align-items: center;
    justify-content: center;
    background-color: rgba(52, 52, 52, 0.41);
    font-size: 12px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    transition: 0.5s;
    font-weight: 700;
    border-width: 2px;
    border-color: rgb(0, 128, 79);
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: #dbdbdb 0.5px 0.5px 3px;
    text-align: center;
  }


  .add {
    width: 90vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin-top: 75px;
    color: #ffffff;
    background-color: rgb(42, 107, 111);
    border-radius: 0.15rem;
    box-shadow: rgb(197, 197, 197) 2px 2px 6px;
    padding: 10px;
    font-size: 12px;
    font-weight: 600;
    transition: 0.4s;
    text-align: left;
  }




  .demo_video {
    background-color: black;
    border-color: green;
    border-width: 2px;
    border-radius: 0.25rem;
    display: flex;
    height: 15vh;
    width: 20vw;
  }


  .gridbox_one_and_gridbox_two {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: auto;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }


  .box_grid_text {
    width: 80vw;
    height: 300px;
    color: white;
    border-color: rgb(228, 228, 228);
    border-width: 1px;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 5px;
    text-align: left;
  }

  .title {
    white-space: nowrap;
    color: black;
    font-size: 15px;
    font-weight: 600;
  }

  .description {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    width: 80%;
    margin: 0;
    text-align: left;

    color: rgb(49, 49, 49);
  }

  .description span {
    display: flex;
    font-size: 12px;
    color: rgb(0, 83, 73);
  }



  .three_icons {
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin: 20px;
    margin-bottom: 100px;
  }


  .three_icons_wrapper {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    gap: 10vw;
    width: 90vw;
  }


  .three_icons_prt1,
  .three_icons_prt2,
  .three_icons_prt3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 80vw;
  }

  .three_icons_ICON_wrapper_text {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
  }

  .three_icons_ICON_wrapper_description {
    font-size: 15px;
    text-align: center;
  }


}
