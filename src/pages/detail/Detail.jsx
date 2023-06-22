import React from "react";
import { useParams } from "react-router-dom";
import css from "./Detail.module.css";
import { useGetClothesDetailQuery } from "../../store/ClothesSlice";
import img from "../../assets/images/nursidas-low-resolution-logo-white-on-transparent-background.png"

const Detail = () => {
  const params = useParams();
  const id = params.id;
  const { data } = useGetClothesDetailQuery(id);
  console.log(data);
  console.log(id);

  const addToBasket = (el) => {
    const basketItems = JSON.parse(localStorage.getItem("basket") || "[]");
    basketItems.push(el);
    localStorage.setItem("basket", JSON.stringify(basketItems));
    console.log(JSON.parse(localStorage.getItem("basket")));
  };

  if (data) {
    return (
      <div className="container">
        <div className={css.detailWrapper}>
        <div className={css.img}>
          <img src={img} alt="" />
        </div>
        <div className={css.DetailDes}>
          <h1>{data.name}</h1>
          <p>{data.text}</p>
          <p className="size">size: {data.size.join(', ')}</p>
          <p className="color">color: {data.color.join(', ')}</p>
          <button onClick={() => addToBasket(data)}> В крозину</button>
        </div>
      </div>
      </div>
    );
  }
};

export default Detail;
