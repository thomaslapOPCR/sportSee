/**
 * @import {Component} ReactComponent as IconYoga - The Yoga icon component from the assets folder.
 * @import {Component} ReactComponent as IconSwimming - The Swimming icon component from the assets folder.
 * @import {Component} ReactComponent as IconBike - The Bike icon component from the assets folder.
 * @import {Component} ReactComponent as IconDumbbells - The Dumbbells icon component from the assets folder.
 * @import {Module} style - The module for styling the LateralUI component.
 */

import React from "react";
import { ReactComponent as IconYoga } from "../../assets/icon-Yoga.svg";
import { ReactComponent as IconSwimming } from "../../assets/icon-swimming.svg";
import { ReactComponent as IconBike } from "../../assets/icon-Bike.svg";
import { ReactComponent as IconDumbbells } from "../../assets/icon-dumbbells.svg";
import style from "./LateralUI.module.scss";
/**
 * LateralUI component that displays a set of icons.
 *
 * @component
 * @returns {JSX.Element}
 *
 */
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
