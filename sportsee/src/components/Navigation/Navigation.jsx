import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className={style.container}>
      <Logo />

      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/"}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/user"}
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/settings"}
          >
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/community"}
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
