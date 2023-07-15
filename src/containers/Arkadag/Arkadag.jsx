import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Header from "../header/Header";
import "./arkadag.css";
import romb from "../../assets/meret_romb.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Arkadag = ({ language, lang }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:8000/api/article/tm");
      setPosts(response.data);
    };

    getPosts();
  }, []);
  const arrLang = {
    tm: {
      future: "Geljegiň dolanyşygy",
    },
    en: {
      future: "Future turnover",
    },
    ru: {
      future: "Транспорт будущего",
    },
  };

  const [data, setData] = useState(posts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/article/${language}`
        );

        setData(response.data);
      } catch {
        console.error("errror");
      }
    };
    fetchData();
  }, [language]);

  return (
    <>
      <div className="arkadag_wrapper " id="arkadag" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={500}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            waitForTransition: 5000,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <Header language={language} lang={lang} />
          </SwiperSlide>
          <div className="arkadag section_padding">
            <SwiperSlide>
              <div className="possibility section_padding" id="possibility">
                <img src={romb} className="rombleft1" alt="" />
                <img src={romb} className="rombleft2" alt="" />
                {data.map((post) => {
                  if (post.id === 2) {
                    return (
                      <>
                        <div className="container">
                          <div className="possibility-image">
                            <div className="rombs">
                              <img
                                src={post.image}
                                alt=""
                                className="romb_image"
                              />
                            </div>
                          </div>
                          <div className="possibility-content">
                            <h1 style={{ color: "#2448c9" }}>{post.title}</h1>
                            <h2 className="slogan lang" key="future">
                              {arrLang[lang]["future"]}
                            </h2>
                            <p>{post.description}</p>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="possibility section_padding" id="possibility">
                <img src={romb} className="rombleft1" alt="" />
                <img src={romb} className="rombleft2" alt="" />
                <div className="statistika">
                  {data.map((post) => {
                    if (post.id > 2) {
                      return (
                        <>
                          <div className="bina">
                            <img src={post.image} alt="" />
                            <div className="data">
                              <h1>{post.title}</h1>
                              <p>{post.description}</p>
                            </div>
                          </div>
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Arkadag;
