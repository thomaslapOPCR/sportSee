const axios = require("axios");
import UserDataModel from "./UserModel.js";
import data from "../data/MockDataAPI.js";

export default async function getUserData(userId) {
  let useMockData = true;
  if (useMockData) {
    const userMainData = data.USER_MAIN_DATA.find((user) => user.id === userId);
    const userActivity = data.USER_ACTIVITY.find(
      (activity) => activity.userId === userId,
    );
    const userAverageSessions = data.USER_AVERAGE_SESSIONS.find(
      (sessions) => sessions.userId === userId,
    );
    const userPerformance = data.USER_PERFORMANCE.find(
      (performance) => performance.userId === userId,
    );


    console.log(userData)
    const userModel = new UserDataModel(userData);
    return userModel.getUserDataById();
  } else {
    try {
      const [userMainData, userActivity, userAverageSessions, userPerformance] =
                await Promise.all([
                  axios.get(`http://localhost:3000/user/${userId}`),
                  axios.get(`http://localhost:3000/user/${userId}/activity`),
                  axios.get(`http://localhost:3000/user/${userId}/average-sessions`),
                  axios.get(`http://localhost:3000/user/${userId}/performance`),
                ]);

      const userData = {
        USER_MAIN_DATA: [userMainData.data],
        USER_ACTIVITY: [userActivity.data],
        USER_AVERAGE_SESSIONS: [userAverageSessions.data],
        USER_PERFORMANCE: [userPerformance.data],
      };

      const userDataModel = new UserDataModel(userData);

      return userDataModel.getUserDataById();
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      throw error;
    }
  }
}
