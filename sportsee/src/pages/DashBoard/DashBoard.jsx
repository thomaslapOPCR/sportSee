import React from "react";
import getUserData from "../../services/UserRequest.js";

const DashBoard = async () => {
  const t = await getUserData(12);
  console.log(t);
  return <>{t}</>;
};

export default DashBoard;
