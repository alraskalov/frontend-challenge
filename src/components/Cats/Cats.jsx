import React, { useEffect } from "react";
import CatsCard from "../CatsCard/CatsCard";
import CatsCardList from "../CatsCardList/CatsCardList";
import "./Cats.css";

const Cats = ({ cats, onCardLike, onUpdateFetching, fetching }) => {
  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      onUpdateFetching(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <section className="cats page__cats">
      <CatsCardList>
        {!!cats.length &&
          cats.map((cat) => {
            return <CatsCard key={cat.id} cats={cat} onCardLike={onCardLike} />;
          })}
      </CatsCardList>
      {fetching && <p className="cats__text">... загружаем еще котиков ...</p>}
    </section>
  );
};

export default Cats;
