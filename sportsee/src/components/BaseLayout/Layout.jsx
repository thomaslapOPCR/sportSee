import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation.jsx";
import LateralUi from "../LateralUi/LateralUi.jsx";
import style from "./Layout.module.scss";

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
