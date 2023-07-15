import React, { useState, useEffect, useContext } from "react";
import Menu from "../../components/MenuComponent/Menu";
import axios from "axios";
import "./habarlar.css";
import all from "../../assets/all.png";
import sport from "../../assets/sport.png";
import policy from "../../assets/policy.png";
import makala from "../../assets/makala.png";
import books from "../../assets/books.png";
import user from "../../assets/user.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import LatestNew from "../../components/LatestNew/LatestNew";

const Habarlar = ({ onChangeLanguage, language, lang }) => {
  window.scrollTo(0, 0);
  const [news, setNews] = useState([]);
  const [data, setData] = useState(news);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get("http://localhost:8000/api/news/tm");
      setNews(response.data);
    };

    getNews();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/news/${language}`
        );
        setData(response.data);
        setFilter(response.data);
      } catch {
        console.error("errror");
      }
    };
    fetchData();
  }, [language]);
  const filterProduct = (cat) => {
    const updateList = data.filter((x) => x.category === cat);
    setFilter(updateList);
  };

  const arrLang = {
    tm: {
      category: "Kategoriýa",
      all: "Hemmesi",
      sport: "Sport",
      syyasat: "Syýasat",
      makala: "Makala",
      kitaplar: "Kitaplar",
      habarlar: "Habarlar",
      more: "giňişleýin",
    },
    en: {
      category: "Category",
      all: "All",
      sport: "Sport",
      syyasat: "Policy",
      makala: "Article",
      kitaplar: "Books",
      habarlar: "News",
      more: "more",
    },
    ru: {
      category: "Категория",
      all: "Все",
      sport: "Спорт",
      syyasat: "Политика",
      makala: "Статья",
      kitaplar: "Книги",
      habarlar: "Новости",
      more: "подробно",
    },
  };
  return (
    <>
      <Menu onChangeLanguage={onChangeLanguage} lang={lang} />
      <div className="habarlar_wrapper" data-aos="fade-up">
        <LatestNew language={language} lang={lang} />
        <hr style={{ width: "80%", margin: "0 auto" }} />
        <div className="category">
          <h1>{arrLang[lang]["category"]}</h1>

          <div className="category_container">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              className="slider"
            >
              <SwiperSlide
                className="category_item"
                onClick={() => setFilter(data)}
              >
                <img src={all} alt="" className="category_icon" />
                <p>{arrLang[lang]["all"]}</p>
              </SwiperSlide>
              <SwiperSlide
                className="category_item"
                onClick={() => filterProduct("sport")}
              >
                <img src={sport} alt="" className="category_icon" />
                <p>{arrLang[lang]["sport"]}</p>
              </SwiperSlide>
              <SwiperSlide
                className="category_item"
                onClick={() => filterProduct("syyasat")}
              >
                <img src={policy} alt="" className="category_icon" />
                <p>{arrLang[lang]["syyasat"]}</p>
              </SwiperSlide>
              <SwiperSlide
                className="category_item"
                onClick={() => filterProduct("makala")}
              >
                <img src={makala} alt="" className="category_icon" />
                <p>{arrLang[lang]["makala"]}</p>
              </SwiperSlide>
              <SwiperSlide
                className="category_item"
                onClick={() => filterProduct("kitaplar")}
              >
                <img src={books} alt="" className="category_icon" />
                <p>{arrLang[lang]["kitaplar"]}</p>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <h1 className="page_title">{arrLang[lang]["habarlar"]}</h1>
        <hr style={{ width: "80%", margin: "0 auto" }} />
        <div className="habarlar">
          {filter.map((fil) => (
            <Link to={`/singleNew/${fil.id}`} className="habar" key={fil.id}>
              {fil.image ? (
                <img src={fil.image} alt="" className="habar_image" />
              ) : null}

              <h1 className="habar_title"> {fil.name}</h1>
              <div className="dateVSview">
                <span>{fil.pub_date}</span>
              </div>
              <p className="habar_content">{fil.description.slice(0, 400)}</p>

              <div className="habar_under_content">
                <div>
                  <div className="button">{arrLang[lang]["more"]}</div>
                  <h1 className="writer">{fil.author_name}</h1>
                </div>
                <img
                  src={fil.author_image ? fil.author_image : user}
                  className={fil.author_image ? "yazyjy_surat" : "yazyjy_icon"}
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer language={language} lang={lang} />
    </>
  );
};

export default Habarlar;
