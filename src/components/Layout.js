import React, { useState } from "react";
import { Footer, Blog, Arkadag } from "../containers";
import BacgroundImage from "./BacgroundSlider/BacgroundImage";
import "../App.css";

const Layout = ({ onChangeLanguage, lang, language }) => {
  return (
    <>
      <div className="App">
        <BacgroundImage
          onChangeLanguage={onChangeLanguage}
          lang={lang}
          data-aos="fade-up"
        />
        <Arkadag language={language} lang={lang} data-aos="fade-up" />
        <Blog language={language} lang={lang} data-aos="fade-up" />
        <Footer language={language} lang={lang} data-aos="fade-up" />
      </div>
    </>
  );
};

export default Layout;
