import React from "react";
import "./CatsCard.css";

const CatsCard = ({img}) => {
  return (
    <div className="cats-card">
      <img src={img} alt="" className="cats-card__image" />
      <button className="cats-card__btn" />
    </div>
  );
};

export default CatsCard;
