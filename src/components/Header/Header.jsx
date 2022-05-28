import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="header page__header">
      <div className="header__container">
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li
              className={`header__menu-item ${
                pathname === "/cats" ? "header__menu-item_active" : ""
              }`}
            >
              <Link className="header__menu-link" to="/cats">
                Все котики
              </Link>
            </li>
            <li
              className={`header__menu-item ${
                pathname === "/saved-cats" ? "header__menu-item_active" : ""
              }`}
            >
              <Link className="header__menu-link" to="/saved-cats">
                Любимые котики
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
