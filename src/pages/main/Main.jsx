import React from "react";
import { useGetClothesQuery } from "../../store/ClothesSlice";
import css from "./Main.module.css";
import { Link } from "react-router-dom";

// export { useGetClothes } from "./ClothesSlice";

const Main = () => {
  const { data, error, isLoading } = useGetClothesQuery();
  console.log(data);

  return (
    <div className="container">
      <main>
        <div className="slider"></div>
        <div className={css.links}>
          <Link>1</Link>
          <Link>2</Link>
          <Link>3</Link>
          <Link>4</Link>
          <Link>5</Link>
          <Link>6</Link>
          <Link>7</Link>
          <Link>8</Link>
        </div>
        <div className={css.sale50}>
          <h1>SALES UP TO 50%</h1>

          <div className={css.card}>
            <img src="" alt="" />
            <h2></h2>
            <p>Fashion never stops. There is always the new project, the new opportunity. The important thing is to take your time and not get stressed. I just want to do what I do.</p>
            <div className={css.cardDes}>
              <h2 className="size">size:s</h2>
              <h2 className="color">color:red</h2>
            </div>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path></svg>
            </button>
          </div>
        </div>
        <div className={css.sale30}>
          <h1>SUMMER SALE 30%</h1>
        </div>
      </main>
    </div>
  );
};

export default Main;
