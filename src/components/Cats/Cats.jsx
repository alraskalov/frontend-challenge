import React from "react";
import CatsCard from "../CatsCard/CatsCard";
import CatsCardList from "../CatsCardList/CatsCardList";
import "./Cats.css";

const Cats = ({cats}) => {
  return (
    <section className="cats page__cats">
      <CatsCardList>
        {!!cats.length ? cats.map((cat) => {
          return <CatsCard key={cat.id} img={cat.url} />
        }) : <p>... загружаем еще котиков ...</p>}
      </CatsCardList>
    </section>
  );
};

export default Cats;
