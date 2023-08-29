
/**
 * @import {Component} ReactComponent as Logo - The Logo component from the assets folder.
 * @import {Module} style - The module for styling the Navigation component.
 * @import {Component} NavLink - The NavLink component from react-router-dom.
 */

import React from "react";
import style from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";

/**
 * Navigation component that displays navigation links using NavLink components.
 *
 * @component
 * @returns {JSX.Element}
 *
 */
const Navigation = () => {
  return (
    <div className={style.container}>
      <Logo /> {/* Rendering the Logo component */}

      <ul>
        {/* Navigation links using NavLink components */}
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")} /** Applying 'active' class for active links */
            to={"/"} /** Link to the home page */
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/user"} /** Link to the user profile page */
          >
            Profil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/settings"} /** Link to the settings page */
          >
            Réglage
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? style.active : "")}
            to={"/community"} /** Link to the community page */
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;