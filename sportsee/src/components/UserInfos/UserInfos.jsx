import React from "react";
import style from "./UserInfo.module.scss"
const UserInfos = (props) => {
  const { Userdata, data } = props;
  return (
    <div className={style.container}>
      <div style={{ background: Userdata.color }}>
        <img  src={}  alt={`${Userdata.title} icon`} />
      </div>
      <div>
        <h1>{data}</h1>
        <p>{Userdata.title}</p>
      </div>
    </div>
  );
};

export default UserInfos;
