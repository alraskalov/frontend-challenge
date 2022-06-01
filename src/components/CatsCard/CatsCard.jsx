import React from "react";
import "./CatsCard.css";

const CatsCard = ({ cats, onCardLike, onCardClick }) => {
  const handleLikeClick = (e) => {
    e.stopPropagation();
    onCardLike(cats);
  };

  const handleCardClick = () => {
    onCardClick(cats);
  };

  const cardLikeButtonName = `${cats.isLiked ? "cats-card__btn_active" : ""}`;

  return (
    <div onClick={handleCardClick} className="cats-card">
      <img src={cats.url} alt="Котик" className="cats-card__image" />
      <button
        className={`cats-card__btn ${cardLikeButtonName}`}
        onClick={handleLikeClick}
      />
    </div>
  );
};

export default CatsCard;
