import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Arkadag, Karta } from "./containers";
import "./App.css";
import SingelNew from "./components/SingleNew/SingelNew";
import Binalar from "./containers/Binalar/Binalar";
import AOS from "aos";
import "aos/dist/aos.css";
import Habarlar from "./containers/Habarlar/Habarlar";
import axios from "axios";
AOS.init();

AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 600, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
const App = () => {
  const [language, setLanguage] = useState("tm");
  const [lang, setLang] = useState("tm");
  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    const langCode = selectedLanguage;
    setLang(langCode);
  };
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/news/${language}`
        );
        setData(response.data);
      } catch {
        console.error("errror");
      }
    };
    fetchData();
  }, [language]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              language={language}
              lang={lang}
              onChangeLanguage={handleLanguageChange}
              data-aos="fade-up"
            />
          }
        />
        <Route
          path="karta"
          element={
            <Karta
              language={language}
              lang={lang}
              onChangeLanguage={handleLanguageChange}
            />
          }
        />
        <Route
          path="binalar"
          element={
            <Binalar
              language={language}
              lang={lang}
              onChangeLanguage={handleLanguageChange}
            />
          }
        />
        <Route
          path="habarlar"
          element={
            <Habarlar
              language={language}
              lang={lang}
              onChangeLanguage={handleLanguageChange}
            />
          }
        />
        <Route
          path={`singleNew/:id`}
          element={
            <SingelNew
              language={language}
              lang={lang}
              onChangeLanguage={handleLanguageChange}
              data={data}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
