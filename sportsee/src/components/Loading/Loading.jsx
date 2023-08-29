/**
 * @import {Module} style - The module for styling the Performance component.
 * @import Importing Setting component from SVG file
 */

import React from 'react';
import {ReactComponent as Setting} from "./gear-solid.svg";
import style from "./Loading.module.scss"


/**
 * Loading component that displays a loading icon and text.
 *
 * @component
 * @returns {JSX.Element}
 *
 */
const Loading = () => {
  return (
    <div className={style.container}>
      <Setting className={style.test}/>
      <p className={ style.text}>Chargement en cours...</p>
    </div>
  );
};

export default Loading;