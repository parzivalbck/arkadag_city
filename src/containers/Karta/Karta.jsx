import React from "react";
import karta from "../../assets/karta.png";
import "./karta.css";
import "../blog/blog.css";
import Modal5 from "./Modal5";
import Modal6 from "./Modal6";
import Modal4 from "./Modal4";
import Modal3 from "./Modal3";
import Modal2 from "./Modal2";
import Modal from "./Modal";
import Modal7 from "./Modal7";
import Modal8 from "./Modal8";
import Menu from "../../components/MenuComponent/Menu";
import Footer from "../footer/Footer";
const Karta = ({ onChangeLanguage, lang }) => {
  const handleLanguageChange = (language) => {
    onChangeLanguage(language);
  };
  const arrLang = {
    tm: {
      title: "Karta",
      stadion: "9.Stadion",
      stadion_content: "500 orunlyk stadion",
      medeniyet: "10.Medeniýet binasy",
      medeniyet_content: "500 orunlyk 2 gatly Medeniýet binasy",
      dync: "11.Dynç alyş seýilgähi",
      dync_content: "Çagalaryň we maşgalalaryň gowy dynç almagy üçin seýilgäh",
      sowda: "12.Söwda we dynç alyş merkezi",
      sowda_content: "3gatly söwda we medeni dynç alyş  merkezi",
      tennis: "13.Tennis meýdançasy",
      tennis_content: "300 orunlyk tennis meýdançasy",
      atcylyk: "33.Atçylyk toplumy",
      atcylyk_content: "1000 meterlik çapuw meýdançasy",
      gurjak: "16.Gurjak teatry",
      gurjak_content: "500 orunlyk teatr",
      mekdep: "17.Orta mekdep",
      mekdep_content: "1500 adamlyk orta mekdep",

      close: "çyk",
    },
    en: {
      title: "Map",
      stadion: "9.Stadium",
      stadion_content: "500-seat stadium",
      medeniyet: "10.Culture Building",
      medeniyet_content: "500-seat 2-story Culture Building",
      dync: "11.Recreational Park",
      dync_content: "A park for children and families to enjoy",
      sowda: "12.Shopping and entertainment center",
      sowda_content: "3-story shopping and cultural recreation center",
      tennis: "13.Tennis court",
      tennis_content: "300-seat tennis court",
      atcylyk: "33.Equestrian complex",
      atcylyk_content: "1,000 meter sprint",
      gurjak: "16.Puppet theater",
      gurjak_content: "500-seat theater",
      mekdep: "17.High school",
      mekdep_content: "A high school of 1500 students",
      close: "close",
    },
    ru: {
      title: "Карта",
      stadion: "9.Стадион",
      stadion_content: "стадион на 500 мест",
      medeniyet: "10.Здание культуры",
      medeniyet_content: "2-этажный Дом культуры на 500 мест",
      dync: "11.парк отдыха",
      dync_content: "Парк для детей и семей, чтобы весело провести время",
      sowda: "12.Торгово-развлекательный центр",
      sowda_content: "3-этажный торгово-культурный центр отдыха",
      tennis: "13.Теннисный корт",
      tennis_content: "теннисный корт на 300 мест",
      atcylyk: "33.Конный комплекс",
      atcylyk_content: "1000 метров спринт",
      gurjak: "16.Кукольный театр",
      gurjak_content: "театр на 500 мест",
      mekdep: "17.Средняя школа",
      mekdep_content: "Средняя школа на 1500 учеников",
      close: "закрыть",
    },
  };
  return (
    <>
      <Menu onChangeLanguage={handleLanguageChange} lang={lang} />

      <div
        className="karta_wrapper section_padding "
        id="karta"
        data-aos="fade-up"
      >
        <h1
          className="blog_heading"
          style={{ color: "#2448c9", marginLeft: "100px" }}
        >
          {arrLang[lang]["title"]}
        </h1>
        <div className="karta">
          <img src={karta} alt="" />

          <Modal
            title={arrLang[lang]["stadion"]}
            content={arrLang[lang]["stadion_content"]}
            close={arrLang[lang]["close"]}
          />
          <Modal2
            title={arrLang[lang]["medeniyet"]}
            content={arrLang[lang]["medeniyet_content"]}
            close={arrLang[lang]["close"]}
          />
          <Modal3
            title={arrLang[lang]["dync"]}
            content={arrLang[lang]["dync_content"]}
            close={arrLang[lang]["close"]}
          />
          <Modal4
            title={arrLang[lang]["sowda"]}
            content={arrLang[lang]["sowda_content"]}
            close={arrLang[lang]["close"]}
          />
          <Modal5
            title={arrLang[lang]["tennis"]}
            content={arrLang[lang]["tennis_content"]}
            close={arrLang[lang]["close"]}
          />
          <Modal6
            title={arrLang[lang]["atcylyk"]}
            content={arrLang[lang]["atcylyk_content"]}
            close={arrLang[lang]["close"]}
          />
          <Modal7
            title={arrLang[lang]["gurjak"]}
            content={arrLang[lang]["gurjak_content"]}
            close={arrLang[lang]["close"]}
          />
          <Modal8
            title={arrLang[lang]["mekdep"]}
            content={arrLang[lang]["mekdep_content"]}
            close={arrLang[lang]["close"]}
          />
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
};

export default Karta;
