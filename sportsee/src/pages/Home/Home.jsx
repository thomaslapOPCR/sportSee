/**
 * @import {Library} React - The React library.
 * @import {Component} Link - The Link component from react-router-dom.
 * @import {Module} style - The module for styling the Home component.
 */

import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.scss";
/**
 * The Home page component.
 *
 * @component
 * @returns {JSX.Element}
 */
const Home = () => {
  return (
    /** Renders the main content of the Home page */
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
