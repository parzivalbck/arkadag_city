import React, { useState } from "react";
import logo from "../../assets/arkadag-white.png";
import logogara from "../../assets/arkadag-dark.png";
import menu from "../../assets/nav-bar.png";
import darkMenu from "../../assets/dark-nav-bar.png";
import SideNav from "./SideBar";
import { Link } from "react-router-dom";
import "./menu.css";
const Menu = ({ onChangeLanguage, lang }) => {
  const [wid, setWid] = useState("0%");
  const openSidenav = () => {
    setWid("274px");
  };
  const closeSidenav = () => {
    setWid("0%");
  };
  const [imageSrc, setImageSrc] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 700) {
      setImageSrc(true);
    } else {
      setImageSrc(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  const arrLang = {
    tm: {
      Arkadag: "Arkadag şäheri",
    },
    en: {
      Arkadag: "Arkadag city",
    },
    ru: {
      Arkadag: "Город Аркадаг",
    },
  };

  return (
    <>
      {" "}
      <div className={imageSrc ? "mainNavbar active" : "mainNavbar"}>
        <div className="logo_container">
          <Link to="" className="logo_content">
            <img
              src={imageSrc ? logogara : logo}
              alt=""
              className={imageSrc ? "logogara" : "logo"}
            />
            <span className={imageSrc ? "titlegara" : "title"}>
              {arrLang[lang]["Arkadag"]}
            </span>
          </Link>
        </div>
        <div></div>
        <div className="navbar_items">
          <img
            src={imageSrc ? darkMenu : menu}
            alt=""
            className={imageSrc ? "darkmenu" : "menu"}
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
