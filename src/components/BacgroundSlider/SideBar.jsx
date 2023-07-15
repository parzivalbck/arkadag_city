import React, { useState, useEffect } from "react";
import itLogo from "../../assets/IT-logo.png";
import logoGara from "../../assets/logogara.png";
import darkNavBar from "../../assets/dark-nav-bar.png";
import ArkadagDark from "../../assets/arkadag-dark.png";
import ArkadagWhite from "../../assets/arkadag-white.png";
import mapDark from "../../assets/map-dark.png";
import newsDark from "../../assets/news-dark.png";
import newsWhite from "../../assets/news white.png";
import binaWhite from "../../assets/buildings white.png";
import binaDark from "../../assets/buildings dark.png";
import mapWhite from "../../assets/map-white.png";
import { Link } from "react-router-dom";
import TurkmeFlag from "../../assets/Flag_of_Turkmenistan.png";
import RusFlag from "../../assets/Flag_of_Russia.png";
import EngFlag from "../../assets/Flag_of_the_United_Kingdom.png";
import Dil from "../../assets/language.png";
import DilDark from "../../assets/internet.png";
import "./sidebar.css";
const SideNav = ({ onChangeLanguage, lang, language, width, closeNav }) => {
  const [over, setOver] = useState(false);
  const [map, setDarkMap] = useState(false);
  const [news, setDarkNews] = useState(false);
  const [bina, setDarkBina] = useState(false);
  const [dil, setDarkDil] = useState(false);

  const arrLang = {
    tm: {
      Arkadag: "Arkadag",
      habarlar: "Habarlar",
      Karta: "Karta",
      Binalar: "Binalar",
      logo: "Arkadag şäheri",
    },
    en: {
      Arkadag: "Arkadag",
      habarlar: "News",
      Karta: "Map",
      Binalar: "Buildings",
      logo: "Arkadag city",
    },
    ru: {
      Arkadag: "Аркадаг",
      habarlar: "Новости",
      Karta: "Карта",
      Binalar: "Здания",
      logo: "Город Аркадаг",
    },
  };

  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="sidebar_wrapper">
      <div className="sidenav" style={{ width: width, zIndex: "99999" }}>
        <button onClick={closeNav} className="closeIcon">
          {/* <img src={logoGara} alt="" style={{ width: "150px" }} />{" "} */}
          <span>{arrLang[lang]["logo"]}</span>
          <img src={darkNavBar} className="" alt="" style={{ width: "30px" }} />
        </button>
        <div className="links">
          <Link
            to="/"
            onMouseOver={() => setOver(true)}
            onMouseOut={() => setOver(false)}
          >
            {" "}
            <img
              src={over ? ArkadagWhite : ArkadagDark}
              className="arkadag_icon"
              alt=""
            />
            <span>{arrLang[lang]["Arkadag"]}</span>
          </Link>
          <Link
            to="/habarlar"
            onMouseOver={() => setDarkNews(true)}
            onMouseOut={() => setDarkNews(false)}
          >
            <img
              src={news ? newsWhite : newsDark}
              className="news_icon"
              alt=""
            />
            <span className="lang " key="habarlar">
              {arrLang[lang]["habarlar"]}
            </span>
          </Link>
          <Link
            to="/karta"
            onMouseOver={() => setDarkMap(true)}
            onMouseOut={() => setDarkMap(false)}
          >
            <img src={map ? mapWhite : mapDark} alt="" className="maps_icon" />
            <span>{arrLang[lang]["Karta"]}</span>
          </Link>
          <Link
            to="/binalar"
            onMouseOver={() => setDarkBina(true)}
            onMouseOut={() => setDarkBina(false)}
          >
            <img
              src={bina ? binaWhite : binaDark}
              alt=""
              className="bina_icon"
            />
            <span>{arrLang[lang]["Binalar"]}</span>
          </Link>
        </div>
        <div className="dropdown">
          <button
            onClick={toggle}
            onMouseOver={() => setDarkDil(true)}
            onMouseOut={() => setDarkDil(false)}
            className={dil ? "dil_dark_btn" : "dil_btn"}
          >
            <img
              src={dil ? Dil : DilDark}
              alt=""
              className={dil ? "dil_icon" : "dil_dark_icon"}
            />
            Dil
          </button>
          {open && (
            <ul>
              <li>
                {" "}
                <button
                  onClick={() => onChangeLanguage("tm")}
                  className="lang_btn"
                  id="tm"
                >
                  <img src={TurkmeFlag} className="flags" />
                  Turkmen
                </button>
              </li>
              <li>
                <button
                  onClick={() => onChangeLanguage("ru")}
                  id="ru"
                  className="lang_btn"
                >
                  <img src={RusFlag} className="flags" alt="" />
                  Russian
                </button>
              </li>
              <li>
                <button
                  onClick={() => onChangeLanguage("en")}
                  className="lang_btn"
                  id="en"
                >
                  <img src={EngFlag} className="flags" />
                  English
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className="copyright">
          <a href="https://it.net.tm/">
            <img src={itLogo} alt="" />
            <span>meýdança</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
