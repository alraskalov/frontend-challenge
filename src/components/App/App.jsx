import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Cats from "../Cats/Cats";
import Header from "../Header/Header";
import SavedCats from "../SavedCats/SavedCats";
import './App.css'

const App = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route index path="/cats" element={<Cats />} />
        <Route path="/saved-cats" element={<SavedCats />} />
        <Route path="*" element={<Navigate to="/cats" />} />
      </Routes>
    </div>
  );
};

export default App;
