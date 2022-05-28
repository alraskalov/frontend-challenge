import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import { useEffectOnce } from "../../hooks/useEffectOnce";
import api from "../../utils/Api";
import Cats from "../Cats/Cats";
import Header from "../Header/Header";
import SavedCats from "../SavedCats/SavedCats";
import "./App.css";

const App = () => {
  const [cats, setCats] = useState([]);
  console.log(cats);

  useEffectOnce(() => {
    api
      .getCats(15)
      .then((res) => {
        setCats(
          res.map((cat) => {
            return {
              id: cat.id,
              url: cat.url,
              isLiked: false,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route index path="/cats" element={<Cats cats={cats} />} />
        <Route path="/saved-cats" element={<SavedCats />} />
        <Route path="*" element={<Navigate to="/cats" />} />
      </Routes>
    </div>
  );
};

export default App;
