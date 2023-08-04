import React from 'react';
import {ReactComponent as Setting} from "./gear-solid.svg";
import style from "./Loading.module.scss"

const Loading = () => {
  return (
    <div className={style.container}>
      <Setting className={style.test}/>
      <p className={ style.text}>Chargement en cours...</p>
    </div>
  );
};

export default Loading;