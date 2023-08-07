import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import getUserData from "../../services/UserRequest.js";
import Loading from "../../components/Loading/Loading.jsx";
import Activity from "../../components/Activity/Activity.jsx";

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
  console.log(userData)
  return (
    <>
      <Activity data={userData.activity} />
    </>
  );
};

export default Dashboard;
