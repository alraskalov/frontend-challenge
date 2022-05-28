import React from "react";
import CatsCard from "../CatsCard/CatsCard";
import CatsCardList from "../CatsCardList/CatsCardList";
import "./Cats.css";

const Cats = () => {
  return (
    <section className="cats page__cats">
      <CatsCardList>
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
        <CatsCard />
      </CatsCardList>
    </section>
  );
};

export default Cats;
