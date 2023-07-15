import React, { useState, useEffect } from "react";
import romb from "../../assets/meret_romb.png";
import axios from "axios";
import "./latestNew.css";
import { Link } from "react-router-dom";
import user from "../../assets/user.png";

const LatestNew = ({ language, lang }) => {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState(news);

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get("http://localhost:8000/api/news/tm");
      setNews(response.data);
      setFilter(response.data);
    };

    getNews();
  }, []);

  const [data, setData] = useState(news);
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
  const arrLang = {
    tm: {
      detailed: " giňişleýin",
    },
    en: {
      detailed: "more",
    },
    ru: {
      detailed: "Подробно",
    },
  };
  return (
    <>
      <div className="singleNew">
        <div className="singleNewWrapper " id="possibility">
          <img src={romb} className="rombright1" alt="" />
          <img src={romb} className="rombright2" alt="" />
          {data.map((post) => {
            const biggestId = Math.max(...data.map((obj) => obj.id));

            if (post.id == biggestId) {
              return (
                <>
                  <Link
                    to={`/singleNew/${post.id}`}
                    className="singleNewContainer"
                    key={post.id}
                  >
                    <div className="singleNewContent" key={post.id}>
                      <h1 style={{ color: "#2448c9" }}>{post.name}</h1>
                      <p>{post.description.slice(0, 400)}...</p>
                      <div className="button">{arrLang[lang]["detailed"]}</div>
                      <div className="yazyjy">
                        <img
                          src={post.author_image ? post.author_image : user}
                          className={
                            post.author_image ? "yazyjy_surat" : "yazyjy_icon"
                          }
                          alt=""
                        />

                        <div className="yazyjy_content">
                          <div className="yazyjy_nameVSviews">
                            <h1>{post.author_name}</h1>
                            {/* <span>
                              <VisibilityRounded style={{ fontSize: "14px" }} />{" "}
                              {post.views}
                            </span> */}
                          </div>
                          <p className="date">{post.pub_date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="singleNewImage">
                      <div className="habar_rombs">
                        <img
                          src={post.image}
                          alt=""
                          className="habar_romb_image"
                        />
                      </div>
                    </div>
                  </Link>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default LatestNew;
