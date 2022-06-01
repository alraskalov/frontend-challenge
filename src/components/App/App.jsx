import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router";
import api from "../../utils/Api";
import Cats from "../Cats/Cats";
import Header from "../Header/Header";
import ImagePopup from "../ImagePopup/ImagePopup";
import SavedCats from "../SavedCats/SavedCats";
import "./App.css";

const App = () => {
  const [cats, setCats] = useState([]);
  const [savedCats, setSavedCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    if (fetching) {
      api
        .getCats(currentPage)
        .then((res) => {
          const newCats = res.map((cat) => {
            return {
              id: cat.id + new Date().getMilliseconds(),
              url: cat.url,
              isLiked: false,
            };
          });
          setCats(c => [...c, ...newCats]);
          setCurrentPage((state) => state + 1);
        })
        .catch((err) => console.log(err))
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  const handleCardLike = (card) => {
    card.isLiked = card.isLiked ? false : true;
    setSavedCats(cats.filter((cat) => cat.isLiked === true));
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleUpdateFetching = (fetching) => {
    setFetching(fetching);
  };

  const closePopup = () => {
    setSelectedCard({})
  };

  return (
    <div className="page">
      <Header />
      <ImagePopup card={selectedCard} onClose={closePopup} />
      <Routes>
        <Route
          index
          path="/cats"
          element={
            <Cats
              cats={cats}
              fetching={fetching}
              onCardLike={handleCardLike}
              onCardClick={handleCardClick}
              onUpdateFetching={handleUpdateFetching}
            />
          }
        />
        <Route
          path="/saved-cats"
          element={
            <SavedCats
              cats={savedCats}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
            />
          }
        />
        <Route path="*" element={<Navigate to="/cats" />} />
      </Routes>
    </div>
  );
};

export default App;
