import React from "react";
import CatsCardList from "../CatsCardList/CatsCardList";
import "./Cats.css";
import cat from "../../images/cat.jpg";

const Cats = () => {
  return (
    <section className="cats page__cats">
      <CatsCardList>
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
        <img src={cat} alt="" />
      </CatsCardList>
    </section>
  );
};

export default Cats;
