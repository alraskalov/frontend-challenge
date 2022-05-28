import React from "react";
import "./CatsCard.css";

const CatsCard = ({ cats, onCardLike }) => {
  const handleLikeClick = () => {
    onCardLike(cats);
  };

  const cardLikeButtonName = `${cats.isLiked ? "cats-card__btn_active" : ""}`;

  return (
    <div className="cats-card">
      <img src={cats.url} alt="Котик" className="cats-card__image" />
      <button
        className={`cats-card__btn ${cardLikeButtonName}`}
        onClick={handleLikeClick}
      />
    </div>
  );
};

export default CatsCard;
