/**
 * @import {Library} React - The React library.
 * @import {Function} useEffect - The useEffect function for side effects.
 * @import {Function} useState - The useState function for managing component state.
 * @import {Component} Navigate - The Navigate component from react-router-dom for navigation.
 * @import {Hook} useParams - The useParams hook for accessing route parameters.
 * @import {Function} getUserData - The function for fetching user data.
 * @import {Component} Loading - The Loading component for indicating loading status.
 * @import {Component} Activity - The Activity component for displaying activity data.
 * @import {Component} UserInfos - The UserInfos component for displaying user information.
 * @import {Module} style - The module for styling the Dashboard component.
 * @import {Data} UserStats - The user statistics data.
 * @import {Component} ScoreChart - The ScoreChart component for displaying score data.
 * @import {Component} Performance - The Performance component for displaying performance data.
 * @import {Component} Sessions - The Sessions component for displaying session data.
 */
import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import getUserData from "../../services/UserRequest.js"; /** Importing the user data fetching function. */
import Loading from "../../components/Loading/Loading.jsx"; /** Importing the Loading component. */
import Activity from "../../components/Activity/Activity.jsx"; /** Importing the Activity component. */
import UserInfos from "../../components/UserInfos/UserInfos.jsx"; /** Importing the UserInfos component. */
import style from "./Dashboard.module.scss"; /** Importing module CSS for styling. */
import UserStats from "../../data/Userdata.json"; /** Importing user statistics data. */
import ScoreChart from "../../components/Score/ScoreChart.jsx"; /** Importing the ScoreChart component. */
import Performance from "../../components/Performance/Performance.jsx"; /** Importing the Performance component. */
import Sessions from "../../components/Sessions/Sessions.jsx"; /** Importing the Sessions component. */

import { ReactComponent as CalorieIcon } from "./calories-icon.svg";
import { ReactComponent as ProteineIcon } from "./protein-icon.svg";
import { ReactComponent as GlucideIcon } from "./carbs-icon.svg";
import { ReactComponent as LipideIcon } from "./fat-icon.svg";

/**
 * The Dashboard component for displaying user data and statistics.
 *
 * @component
 * @returns {JSX.Element}
 */
const Dashboard = () => {
  const { id } = useParams(); /** Extracting the user ID from route parameters. */
  const [isLoading, setIsLoading] = useState(true); /** State for loading status. */
  const [error, setError] = useState(false); /** State for error status. */
  const [userData, setUserData] = useState(null); /** State for user data. */

  /** Effect to fetch user data when the component mounts. */
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserData(parseInt(id)); /** Fetching user data using the user ID. */
        setUserData(data); /** Updating the user data state. */
        setIsLoading(false); /** Updating the loading state. */
      } catch (error) {
        setError(true); /** Setting the error state in case of an error. */
      }
    }

    fetchData();
  }, [id]);

  /**
   * Function to get the appropriate icon and unit based on the title.
   * @param {string} title - The title for which to retrieve icon and unit.
   * @param {object} data - The data object containing relevant data.
   * @returns {object} The icon, unit, and relevant data for the title.
   */
  const getTitleData = (title, { calorieCount, proteinCount, carbohydrateCount, lipidCount } = {}) => {
    /** Icon and unit mapping based on title. */
    const dataMapping = {
      Calories: {
        icon: <CalorieIcon />,
        unit: "KCal",
        relevantData: calorieCount || ""
      },
      Proteines: {
        icon: <ProteineIcon />,
        unit: "g",
        relevantData: proteinCount || ""
      },
      Glucides: {
        icon: <GlucideIcon />,
        unit: "g",
        relevantData: carbohydrateCount || ""
      },
      Lipides: {
        icon: <LipideIcon />,
        unit: "g",
        relevantData: lipidCount || ""
      }
    };

    return dataMapping[title] || {
      icon: <CalorieIcon />,
      unit: "",
      relevantData: ""
    };
  };

  /** If an error occurs during data fetching, navigate to the error page. */
  if (error) {
    return <Navigate to="/error" replace={true} />;
  }

  /** If data is still being loaded, display the loading component. */
  if (isLoading) {
    return <Loading />;
  }

  /** Once data is fetched and loading is complete, render the dashboard content. */
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
          {UserStats.map((item, index) => {
            const { icon, unit, relevantData } = getTitleData(item.title, userData.keyData);

            return (
              <UserInfos
                Userdata={item}
                data={relevantData}
                icon={icon}
                unit={unit}
                key={index}
              />
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default Dashboard;