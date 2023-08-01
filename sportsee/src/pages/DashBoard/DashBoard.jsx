import React, {useEffect, useState} from "react";
import getUserData from "../../services/UserRequest.js";

const DashBoard = () => {
  const [userData, setUserData] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData(12);
        console.log(userData)
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchData();
  }, []);

  // if (!userData) {
  //
  //   return <p>Chargement en cours...</p>;
  // }

  return <>{userData}</>;
};

export default DashBoard;
