import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import rightArrow from "../../assets/right arrow.png";
import "./blog.css";
import Menu from "../../components/MenuComponent/Menu";
import LatestNew from "../../components/LatestNew/LatestNew";
const Blog = ({ language, lang }) => {
  const arrLang = {
    tm: {
      more: " Ählisini görkez",
    },
    en: {
      more: "Show all",
    },
    ru: {
      more: "Показать все",
    },
  };
  return (
    <>
      <div className="blog " id="habarlar" data-aos="fade-up">
        <LatestNew language={language} lang={lang} />
        <Link to="/habarlar" className="more">
          {arrLang[lang]["more"]}
          <img src={rightArrow} alt="" />
        </Link>
      </div>
    </>
  );
};

export default Blog;
