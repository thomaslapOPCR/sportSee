import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import getUserData from "../../services/UserRequest.js"; // Importing the user data fetching function.
import Loading from "../../components/Loading/Loading.jsx"; // Importing the Loading component.
import Activity from "../../components/Activity/Activity.jsx"; // Importing the Activity component.
import UserInfos from "../../components/UserInfos/UserInfos.jsx"; // Importing the UserInfos component.
import style from "./Dashboard.module.scss"; // Importing module CSS for styling.
import UserStats from "../../data/Userdata.json"; // Importing user statistics data.
import ScoreChart from "../../components/Score/ScoreChart.jsx"; // Importing the ScoreChart component.
import Performance from "../../components/Performance/Performance.jsx"; // Importing the Performance component.
import Sessions from "../../components/Sessions/Sessions.jsx"; // Importing the Sessions component.

// Defining the 'Dashboard' component.
const Dashboard = () => {
  const { id } = useParams(); // Extracting the user ID from route parameters.
  const [isLoading, setIsLoading] = useState(true); // State for loading status.
  const [error, setError] = useState(false); // State for error status.
  const [userData, setUserData] = useState(null); // State for user data.

  // Effect to fetch user data when the component mounts.
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserData(parseInt(id)); // Fetching user data using the user ID.
        setUserData(data); // Updating the user data state.
        setIsLoading(false); // Updating the loading state.
      } catch (error) {
        setError(true); // Setting the error state in case of an error.
      }
    }

    fetchData();
  }, [id]);

  // If an error occurs during data fetching, navigate to the error page.
  if (error) {
    return <Navigate to="/error" replace={true} />;
  }

  // If data is still being loaded, display the loading component.
  if (isLoading) {
    return <Loading />;
  }

  // Once data is fetched and loading is complete, render the dashboard content.
  return (
    <section className={style.container}>
      <section className={style.dataHeader}>
        <h1 className={style.title}>Bonjour <span> {userData.firstName}</span></h1>
        <p className={style.text}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className={style.graph}>
        <article>
          {/* Rendering the Activity, Sessions, Performance, and ScoreChart components */}
          <Activity className={style.activity} data={userData.activity}></Activity>
          <div className={style.graphContainer}>
            <Sessions data={userData.averageSessions}></Sessions>
            <Performance data={userData.performance} kind={userData.performanceKind}></Performance>
            <ScoreChart data={userData.todayScore}></ScoreChart>
          </div>
        </article>
        <article>
          {/* Mapping over UserStats to render UserInfos components */}
          {UserStats.map((item, index) => (
            <UserInfos Userdata={item} data={userData.keyData} key={index} />
          ))}
        </article>
      </section>
    </section>
  );
};

export default Dashboard;