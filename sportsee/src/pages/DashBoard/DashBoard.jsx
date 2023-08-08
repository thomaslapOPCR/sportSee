import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import getUserData from "../../services/UserRequest.js";
import Loading from "../../components/Loading/Loading.jsx";
import Activity from "../../components/Activity/Activity.jsx";
import UserInfos from "../../components/UserInfos/UserInfos.jsx";
import style from "./Dashboard.module.scss";
import UserStats from "../../data/Userdata.json";

const Dashboard = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserData(parseInt(id));
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    }

    fetchData();
  }, [id]);

  if (error) {
    return <Navigate to="/error" replace={true} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section style={style.container}>
      <section>
        <h1>Bonjour {}</h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section>
        <article>
          <Activity data={userData.activity}></Activity>
          <div></div>
        </article>
        <article>
          {UserStats.map((item, index) => (
            <UserInfos Userdata={item} data={"180g"} key={index} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default Dashboard;
