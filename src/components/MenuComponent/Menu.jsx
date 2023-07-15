import React, { useState } from "react";
import menu from "../../assets/dark-nav-bar.png";
import logoGara from "../../assets/logogara.png";
import SideNav from "../BacgroundSlider/SideBar";

import "./menu.css";
const Menu = ({ onChangeLanguage, lang }) => {
  const [wid, setWid] = useState("0%");
  const openSidenav = () => {
    setWid("274px");
  };
  const closeSidenav = () => {
    setWid("0%");
  };

  return (
    <>
      {" "}
      <div className="navbar">
        <div className="logo">
          <img
            src={logoGara}
            alt=""
            className="logo"
            style={{
              borderRadius: "50px",
              width: "150px",
            }}
          />
        </div>

        <div className="navbar_items">
          <img
            src={menu}
            alt=""
            style={{ cursor: "pointer", width: "30px", marginRight: "20px" }}
            onClick={openSidenav}
          />
          <SideNav
            width={wid}
            closeNav={closeSidenav}
            onChangeLanguage={onChangeLanguage}
            lang={lang}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
