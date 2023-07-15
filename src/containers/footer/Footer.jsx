import React from "react";
import "./footer.css";
import email from "../../assets/email.png";
import { Link } from "react-router-dom";

const Footer = ({ lang }) => {
  const arrLang = {
    tm: {
      title: "Arkadag şäheri",
      our_adress: "Biziň salgymyz:",
      adress: "Büzmeýin etraby senagatçylar köçesiniň 55-nji jaýy",
      tel: "Telefon",
      follow: "Bizi yzarla:",
    },
    en: {
      title: "Arkadag city",
      our_adress: "Our location:",
      adress: "Building 55 of Industrialists Street, Buzmein Etrap",
      tel: "Telefon",
      follow: "Follow us",
    },
    ru: {
      title: "Город Аркадаг",
      our_adress: "Наше местоположение",
      adress: "Бузмеинского этрапа по улице Промышленников, дом 55",
      tel: "Телефон",
      follow: "Подписывайтесь на нас",
    },
  };
  return (
    <>
      <div className="footer section_padding" data-aos="fade-up">
        <div className="contact_container">
          <h1 className="footer_heading">{arrLang[lang]["title"]}</h1>
          <div className="address">
            <h1>{arrLang[lang]["our_adress"]}</h1>
            <p>{arrLang[lang]["adress"]}</p>
          </div>
          <div className="tel">
            <h1>{arrLang[lang]["tel"]}</h1>
            <div className="telefons">
              <a href="tel:+99363751526">+993 63 75 15 26</a>
              <a href="tel:+993 64 28 04 39">+993 64 28 04 39</a>
              <a href="tel:+993 62 92 53 42">+993 62 92 53 42</a>
            </div>
          </div>
        </div>
        <div className="email_container">
          <h1 className="footer_heading">{arrLang[lang]["follow"]} </h1>
          <div className="email">
            <h1>Email: </h1>
            <p>Arkadagshaher@gmail.com</p>
          </div>
          <div className="input_bar" style={{ position: "relative" }}>
            <input
              type="email"
              name="email"
              placeholder="e-mail"
              className="input"
              id=""
            />
            <img
              src={email}
              style={{
                position: "absolute",
                right: "0px",
                backgroundColor: "#2448c9",
                padding: "0px 10px",
                borderRadius: "30px",
                cursor: "pointer",
                width: "55px",
                height: "36px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
