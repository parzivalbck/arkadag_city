import React from "react";
import { useParams } from "react-router-dom";
import user from "../../assets/user.png";
import "./singleNew.css";
const SingelNew = ({ data, onChangeLanguage, lang, language }) => {
  window.scrollTo(0, 0);

  const { id } = useParams();

  const product = data.find((p) => String(p.id) === id);

  console.log(product);

  return (
    <>
      {/* <Menu onChangeLanguage={onChangeLanguage} /> */}
      <div className="new_wrapper">
        <div className="name">
          <img
            src={product.author_image ? product.author_image : user}
            className={product.author_image ? "yazyjy_surat" : "yazyjy_icon"}
            alt=""
          />
          <div className="name_content">
            <h1>{product.author_name}</h1>
            <p>{product.pub_date}</p>
          </div>
        </div>
        <div className="new_container">
          <h1>{product.name}</h1>
          {product.image ? (
            <img src={product.image} alt="" className="new_image" />
          ) : null}

          <p>{product.description}</p>
        </div>
      </div>

      {/* <Footer lang={lang} /> */}
    </>
  );
};

export default SingelNew;
