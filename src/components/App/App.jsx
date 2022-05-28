import React from "react";
import Cats from "../Cats/Cats";
import Header from "../Header/Header";
import './App.css'

const App = () => {
  return (
    <div className="page">
      <Header />
      <Cats />
    </div>
  );
};

export default App;
