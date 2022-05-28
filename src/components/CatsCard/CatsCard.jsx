import React from "react";
import "./CatsCard.css";
import cat from "../../images/cat.jpg";

const CatsCard = () => {
  return (
    <div className="cats-card">
      <img src={cat} alt="" className="cats-card__image" />
      <button className="cats-card__btn" />
    </div>
  );
};

export default CatsCard;
