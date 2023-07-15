import React, { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";
import romb from "../../assets/meret_romb.png";
const Header = ({ language, lang }) => {
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
      epoch: "Döwrüň eseri",
      desc: `Akylly desgalar elektro
      taksiler we elektromobiller...`,
      author: "G.BERDIMUHAMEDOW",
    },
    en: {
      epoch: "A masterpiece of the era",
      desc: `Smart buildings include electric 
       taxis and electric cars...`,
      author: "G.BERDIMUHAMEDOV",
    },
    ru: {
      epoch: "Шедевр эпохи",
      desc: `Умные здания включают электрические 
       такси и электромобили...`,
      author: "Г. Бердымухамедов  ",
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
      <div>
        <div className="header section_padding" id="home">
          <img src={romb} className="rightRomb" alt="" />
          {data.map((post) => {
            if (post.id === 1) {
              return (
                <>
                  <div className="header-image">
                    <div className="rombs">
                      <img src={post.image} alt="ai" />
                    </div>
                  </div>
                  <div className="header-content">
                    <div className="header_title">
                      <h1 className="main">{post.title}</h1>
                      <span className="main2">{arrLang[lang]["epoch"]}</span>
                    </div>
                    <p className="mainp">{arrLang[lang]["desc"]}</p>
                    <p className="subtitle">{post.description}</p>
                    <p className="quote">{arrLang[lang]["author"]}</p>
                  </div>
                </>
              );
            }
          })}

          <img src={romb} className="romb" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
