import React from "react";
import binaImg from "../../assets/1686662143368.jpg";
import "./binalar.css";
import "swiper/css/manipulation";
import Footer from "../footer/Footer";
import Menu from "../../components/MenuComponent/Menu";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Binalar = ({ onChangeLanguage, lang, language }) => {
  return (
    <>
      <Menu onChangeLanguage={onChangeLanguage} lang={lang} />
      <div className="bina_wrapper section_padding">
        <h1 className="pageTitle">Binalar</h1>
        <div className="bina_container">
          <div className="bina_content">
            <div className="bina_image">
              <img src={binaImg} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              aspernatur labore ab assumenda ex temporibus? Velit earum dolorem
              nam error, atque placeat deserunt maxime vel totam blanditiis est
              aliquam. Est architecto dolore numquam repudiandae? Amet odio,
              nesciunt unde perferendis ab consectetur culpa alias enim vero
              provident ad officiis, ullam inventore?
            </p>
          </div>
          <h1 className="bina_title">
            arkdag şäheri 1nji tapgyrynyň <br />
            <span className="cyzyk">wokzalynyň taslamasy </span>
          </h1>
          <p className="secondText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            officiis quo id dolorum saepe error necessitatibus quae cumque
            libero assumenda labore veniam corrupti repudiandae optio architecto
            doloremque ratione, numquam sequi?
          </p>
          <div className="history_container">
            <div className="history_content">
              <h1>
                SOLTAN SANJARYŇ TARYHY <br />
                <span>MAWZOLEYI</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                architecto ad tenetur! Commodi fugit repellendus labore itaque
                iure, numquam magnam eaque rerum alias, vitae eum officiis.
                Assumenda suscipit eos illo tenetur, repudiandae obcaecati in
                dignissimos ea sapiente a quidem tempore fugiat nulla optio cum?
                Praesentium sunt numquam labore quod et!
              </p>
            </div>
            <div className="historyImg">
              <img src={binaImg} alt="" className="history_img" />
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            // spaceBetween={50}
            // slidesPerView={3}
            navigation={{ enabled: true }}
            className="slider"
          >
            <SwiperSlide className="slide">
              <h1>Aragatnasyk mudirligi</h1>
              <p>
                Keymir kor kocesinin ugrunda yerlesyar 75-lik awtobus gecyar
              </p>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <h1>Aragatnasyk mudirligi</h1>
              <p>
                Keymir kor kocesinin ugrunda yerlesyar 75-lik awtobus gecyar
              </p>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <h1>Aragatnasyk mudirligi</h1>
              <p>
                Keymir kor kocesinin ugrunda yerlesyar 75-lik awtobus gecyar
              </p>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <h1>Aragatnasyk mudirligi</h1>
              <p>
                Keymir kor kocesinin ugrunda yerlesyar 75-lik awtobus gecyar
              </p>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <h1>Aragatnasyk mudirligi</h1>
              <p>
                Keymir kor kocesinin ugrunda yerlesyar 75-lik awtobus gecyar
              </p>
            </SwiperSlide>
            <SwiperSlide className="slide">
              <h1>Aragatnasyk mudirligi</h1>
              <p>
                Keymir kor kocesinin ugrunda yerlesyar 75-lik awtobus gecyar
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Footer lang={lang} />
    </>
  );
};

export default Binalar;
