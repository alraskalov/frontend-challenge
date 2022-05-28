import React from "react";
import "./CatsCardList.css";

const CatsCardList = ({ children }) => {
  return <div className="card-list">{children}</div>;
};

export default CatsCardList;
