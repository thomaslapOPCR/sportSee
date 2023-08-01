const axios = require("axios");
import UserDataModel from "./UserModel.js";
import data from "../data/MockDataAPI.js";

export default async function getUserData(userId) {
  let useMockData = true;
  if (useMockData) {
    const userModel = new UserDataModel(data);
    return userModel.getUser();
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

      return userDataModel.getUser();
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      throw error;
    }
  }
}
