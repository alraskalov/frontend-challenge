import React from "react";
import "./CatsCard.css";
import cat from "../../images/cat.jpg";
import like from "../../images/like.svg";

const CatsCard = () => {
  return (
    <div className="cats-card">
      <img src={cat} alt="" className="cats-card__image" />
      <button className="cats-card__btn">
        {/* <img src={like} alt="Кнопка лайка" className="cats-card__btn-like" /> */}
      </button>
    </div>
  );
};

export default CatsCard;
