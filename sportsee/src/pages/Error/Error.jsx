/**
 * @import {Library} React - The React library.
 * @import {Component} Link - The Link component from react-router-dom.
 * @import {Module} style - The module for styling the Error component.
 */

import React from "react";
import { Link } from "react-router-dom";
import style from "./Error.module.scss";

/**
 * The Error page component.
 *
 * @component
 * @returns {JSX.Element}
 */

const Error = () => {
  return (
    /** Renders the main content of the Error page */
    <div className={style.container}>
      <h1>404</h1>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <p>La page que vous demandez n'existe pas</p>
      <Link to={"/"}>Tableau de bord</Link>
    </div>
  );
};

export default Error;
