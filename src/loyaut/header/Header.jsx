import React from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/nursidas-low-resolution-logo-black-on-transparent-background.png";

const Header = () => {
  return (
    <div className="container">
      <header className={css.header}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <h1>always in style</h1>
        <button>Shoping card</button>
      </header>
    </div>
  );
};

export default Header;
