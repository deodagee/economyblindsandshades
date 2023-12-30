/* header.module.css */

.header_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  align-items: center;
  position: fixed;
  background-color: white;
}

.headercomponent {
  width: 100vw;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 0;
  height: 50px;
}

.link_top_prt1 {
  color: #808080;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin-left: 20px;
  width: 30vw;
  order: 1;
  /* Set the order to 1 to move it to the start */
}

.header_logo {
  width: 30vw;
  order: 2;
  /* Set the order to 2 to keep it in the center */
}

.logo_image {
  height: 90px;
  width: auto;
}


.link_top_prt2 {
  color: #808080;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 30vw;
  align-content: flex-end;
  order: 3;
  /* Set the order to 3 to move it to the end */
}

.header_link {
  /* Add any additional styles for your links */
  text-decoration: none;
  color: #333;
  /* Adjust the color as needed */
  margin: 0 20px;
  /* Add spacing between links, adjust as needed */
}


.second_menu_bar {
  background-color: rgb(15, 15, 15);
  width: 100vw;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  padding: 0;
  height: 50px;
}

.second_menu_bar_item  { 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: max-content;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-weight: 600;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.chevron_top_menu { 
  margin-left: 5px;
  height: 7px;
  width: 10px;
}
