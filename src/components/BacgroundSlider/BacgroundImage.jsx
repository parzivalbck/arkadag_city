import React, { useState } from "react";
import "./BacgroundImage.css";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import TextTransition, { presets } from "react-text-transition";

const BacgroundImage = ({ onChangeLanguage, lang }) => {
  const TEXTS = [
    "ARKADAG ŞÄHERI DÖWRÜŇ ESERI",
    "ГОРОД АРКАДАГ ИСКУССТВА ЭПОХИ ",
    "THE CITY OF ARKADAG IS ARTWORK OF PERIOD ",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <div className="wrapper" id="başy">
        <Menu onChangeLanguage={onChangeLanguage} lang={lang} />
        <div className="wrapper-content" data-aos="fade-up">
          <h1 style={{ textAlign: "center" }}>
            <TextTransition springConfig={presets.wobbly} className="title">
              {TEXTS[index % TEXTS.length]}
              {/* {arrLang[index % arrLang.length]} */}
            </TextTransition>
          </h1>
        </div>
        <div className="arrow_down">
          <Link
            onClick={() => {
              window.scrollTo(0, 750);
            }}
            className="arrow"
          >
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BacgroundImage;
