/**
 * @import {Component} Outlet - The Outlet component from react-router-dom for rendering nested routes.
 * @import {Component} Navigation - The Navigation component for the application header.
 * @import {Component} LateralUi - The LateralUi component for the lateral UI elements.
 * @import {Module} style - The module for styling the BaseLayout component.
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import LateralUi from "../LateralUi/LateralUi.jsx";
import style from "./Layout.module.scss";

/**
 *  Base layout component for the application.
 *
 * @component
 * @returns {JSX.Element}
 */

const BaseLayout = () => {
  return (
    <div className={style.container}>
      <header>
        <Navigation />
      </header>

      <main className={style.main}>
        <LateralUi className={style.LateralUi} />
        <section className={style.Outlet}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default BaseLayout;
