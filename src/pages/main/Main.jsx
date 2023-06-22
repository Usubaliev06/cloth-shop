import css from "./Main.module.css";
import React from "react";
import img from "../../assets/images/nursidas-low-resolution-logo-white-on-black-background.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGetClothesQuery } from "../../store/ClothesSlice";

const Main = () => {
  const { data } = useGetClothesQuery()

  const addToBasket = (el) => {
    const basketItems = JSON.parse(localStorage.getItem("basket") || "[]");
    basketItems.push(el);
    localStorage.setItem("basket", JSON.stringify(basketItems));
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <main>
        <Slider {...settings} className={css.slider}>
          {data?.map((el, ind) => {
            if (el.id >= 16 && el.id <= 20) {
              return (
                <div key={ind} className={css.slideCard}>
                  <img src={img} alt="" />
                  <div className={css.cardDesSlider}>
                  <h2>{el.name}</h2>
                  <p>{el.text}</p>
                  </div>
                </div>
              );
            }
          })}
        </Slider>

        <div className={css.sale50}>
          <h1>SALES UP TO 50%</h1>

          <div className={css.cardWrapper}>
            {data?.map((el, ind) => {
              if (el.id <= 6) {
                return (
                  <div key={ind} className={css.card}>
                    <h3>Sale!!!</h3>
                    <img src={img} alt="" />
                    <h2>{el.name}</h2>
                    <p>{el.text}</p>
                    <div className={css.cardDes}>
                      <h2 className="size">size: {el.size.join(", ")}</h2>
                      <h2 className="color">color: {el.color.join(", ")}</h2>
                      <button onClick={() => addToBasket(el)}>В корзину</button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className={css.sale30}>
          <h1>SUMMER SALE 30%</h1>

          <div className={css.cardWrapper}>
            {data?.map((el, ind) => {
              if (el.id >= 10 && el.id <= 15) {
                return (
                  <div key={ind} className={css.card}>
                    <h3>Sale!!!</h3>
                    <img src={img} alt="" />
                    <h2>{el.name}</h2>
                    <p>{el.text}</p>
                    <div className={css.cardDes}>
                      <h2 className="size">size: {el.size.join(", ")}</h2>
                      <h2 className="color">color: {el.color.join(", ")}</h2>
                      <button onClick={() => addToBasket(el)}>В корзину</button>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
