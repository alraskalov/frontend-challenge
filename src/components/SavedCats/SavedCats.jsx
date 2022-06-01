import React from "react";
import CatsCard from "../CatsCard/CatsCard";
import CatsCardList from "../CatsCardList/CatsCardList";
import "./SavedCats.css";

const SavedCats = ({ cats, onCardLike, onCardClick }) => {
  return (
    <section className="saved-cats page__saved-cats">
      <CatsCardList>
        {!!cats.length &&
          cats.map((cat) => {
            return <CatsCard key={cat.id} cats={cat} onCardLike={onCardLike} onCardClick={onCardClick} />;
          })}
      </CatsCardList>
      {!cats.length && (
        <p className="saved-cats__text">... у вас нет любимых котиков ...</p>
      )}
    </section>
  );
};

export default SavedCats;
