import React, { useState } from "react";
import "./karta.css";
const Modal3 = ({ title, content, close }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={() => setOpen(true)} className="buton3">
        11
      </button>
      {open && (
        <div className="bg">
          <div className="modal3">
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

export default Modal3;
