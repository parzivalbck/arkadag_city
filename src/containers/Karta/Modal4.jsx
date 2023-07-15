import React, { useState } from "react";
import img from "../../assets/binalar.png";
import "./karta.css";
const Modal4 = ({ title, content, close }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={() => setOpen(true)} className="buton4">
        12
      </button>
      {open && (
        <div className="bg">
          <div className="modal4">
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={handleClose} className="close">
              {close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal4;
