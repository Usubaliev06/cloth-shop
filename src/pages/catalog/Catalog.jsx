import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "./Catalog.module.css";
import { useGetClothesQuery } from "../../store/ClothesSlice";
import hui from '../../assets/images/nursidas-low-resolution-logo-white-on-black-background.png'

const Catalog = () => {
  const { data} = useGetClothesQuery();
  const params = useParams();
  const category = params.category;
  // console.log(category);
  const navigate = useNavigate();

  const addToBasket = (el) => {
    const basketItems = JSON.parse(localStorage.getItem("basket") || []);
    basketItems.push(el);
    localStorage.setItem("basket", JSON.stringify(basketItems));
    console.log(JSON.parse(localStorage.getItem("basket")));
  }

  return (
    <div className="container">
      <div className="">
        <h1>{category}</h1>

        <div className={css.cardWrapper}>
          {data?.map((el, ind) => {
            if (el.type === category) {
              return (
                <div key={ind} className={css.card}>
                  <img
                    onClick={() => navigate(`./detail/${ind + 1}`)}
                    src={hui}
                    alt=""
                  />
                  <h2>{el.name}</h2>
                  <p>{el.text}</p>
                  <div className={css.cardDes}>
                    <h2 className="size">size: {el.size.join(", ")}</h2>
                    <h2 className="color">color: {el.color.join(", ")}</h2>
                  </div>
                  <button onClick={()=>addToBasket(el)}> В крозину</button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
