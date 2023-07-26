import React from "react";
import { ReactComponent as IconYoga } from "../../assets/icon-Yoga.svg";
import { ReactComponent as IconSwimming } from "../../assets/icon-swimming.svg";
import { ReactComponent as IconBike } from "../../assets/icon-Bike.svg";
import { ReactComponent as IconDumbbells } from "../../assets/icon-dumbbells.svg";
import style from "./LateralUI.module.scss";

const LateralUi = () => {
  return (
    <div className={style.container}>
      <div className={style.svgContainer}>
        <IconYoga />
        <IconSwimming />
        <IconBike />
        <IconDumbbells />
      </div>
      <p>Copiryght, SportSee 2023</p>
    </div>
  );
};

export default LateralUi;
