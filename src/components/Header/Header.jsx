import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header className="header page__header">
      <div className="header__container">
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Все котики
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#" className="header__menu-link">
                Любимые котики
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
