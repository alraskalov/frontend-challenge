import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="header page__header">
      <div className="header__container">
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link className="header__menu-link" to="/cats">
                Все котики
              </Link>
            </li>
            <li className="header__menu-item">
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
