import React from "react";
import { Link } from "react-router-dom";
import style from "./Error.module.scss";

const Error = () => {
  return (
    <div className={style.container}>
      <h1>404</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>La page que vous demandez n'existe pas</p>
      <Link to={"/"}>Tableau de bord</Link>
    </div>
  );
};

export default Error;
