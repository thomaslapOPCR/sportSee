// userDataRetriever.js

import UserDataModel from "../services/UserModel.js";
import axios from "axios";
import data from "../data/MockDataAPI.js";

const isUsingMockData = true; // Change to false if you want to use Axios API

async function getUserData(userId) {
  let userData = null;

  if (isUsingMockData) {
    const userModel = new UserDataModel(data);
    userData = userModel.getUserMainData(userId);
    userData.activity = userModel.getUserActivity(userId);
    userData.averageSessions = userModel.getUserAverageSessions(userId);
    userData.performance = userModel.getUserPerformance(userId);
    if (userData === undefined) return;
    return userData;
  } else {
    const port = 4200;

    const mainDataPromise = axios.get(
      `http://localhost:${port}/user/${userId}`,
    );
    const activityPromise = axios.get(
      `http://localhost:${port}/user/${userId}/activity`,
    );
    const averageSessionsPromise = axios.get(
      `http://localhost:${port}/user/${userId}/average-sessions`,
    );
    const performancePromise = axios.get(
      `http://localhost:${port}/user/${userId}/performance`,
    );

    const [
      mainDataResponse,
      activityResponse,
      averageSessionsResponse,
      performanceResponse,
    ] = await Promise.all([
      mainDataPromise,
      activityPromise,
      averageSessionsPromise,
      performancePromise,
    ]);

    userData = mainDataResponse.data.data;
    userData.activity = activityResponse.data.data;
    userData.averageSessions = averageSessionsResponse.data.data;
    userData.performance = performanceResponse.data.data;
  }

  return userData;
}

export default getUserData;
