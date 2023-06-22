import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/nursidas-low-resolution-logo-white-on-black-background.png";

const Header = () => {
  const [basketWindow, setBasketWindow] = useState(css.basketWrapperClose);

  const deleteCard = (ind) => {
    const basketItems = JSON.parse(localStorage.getItem("basket") || "[]");
    basketItems.splice(ind, 1);
    localStorage.setItem("basket", JSON.stringify(basketItems));
    location.reload();
  };
  const closeWindow = (e) => {
    e.stopPropagation();
    setBasketWindow(css.basketWrapperClose);
  };

  let count = 0;

  const basketItems = JSON.parse(localStorage.getItem("basket"));
  return (
    <div className="container">
      <header className={css.header}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <h1>always in style</h1>
        <button onClick={() => setBasketWindow(css.basketWrapper)}>
          Shoping card
        </button>
      </header>
      <nav>
        <Link to="/catalog/Hoodies">Hoodies</Link>
        <Link to="/catalog/Dresses">Dresses</Link>
        <Link to="/catalog/Suits">Suits</Link>
        <Link to="/catalog/Shoes">Shoes</Link>
        <Link to="/catalog/T-Shirts">T-Shirts</Link>
        <Link to="/catalog/Jeans">Jeans</Link>
        <Link to="/catalog/Jackets">Jackets</Link>
        <Link to="/catalog/Bags">Bags</Link>
      </nav>

      <div className={basketWindow} onClick={closeWindow}>
        <div className={css.basket}>
          <h1>Shopping Cart</h1>
          <hr />
          <div className={css.cardBasketWrapper}>
            {basketItems?.map((el, ind) => {
            
              if (el) {
                count+=el.price
                return (
                  <div key={ind} className={css.cardBasket}>
                    <img src="" alt="" />
                    <div className={css.cardDes}>
                      <h2>{el.name}</h2>
                      <p>{el.text}</p>
                    </div>
                    <div className={css.cardDes}>
                      <h2 className="size">size: {el.size.join(", ")}</h2>
                      <h2 className="color">color: {el.color.join(", ")}</h2>
                      <h2 className="color"> price: {el.price} $</h2>
                      <button onClick={() => deleteCard(ind)}>Удалить</button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <hr />
          <h1>Total count: {count} $</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
