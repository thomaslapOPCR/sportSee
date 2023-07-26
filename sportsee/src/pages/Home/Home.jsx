import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div className={style.container}>
      <h1>Selection</h1>
      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Veuillez choisir un utilisateur afin de pouvoir tester l'application
      </p>
      <div className={style.buttonContainer}>
        <Link to={"/user/12"}>Utilisateur 12</Link>
        <Link to={"/user/18"}>Utilisateur 18</Link>
      </div>
    </div>
  );
};

export default Home;
