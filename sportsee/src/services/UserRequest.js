// userDataRetriever.js

import UserDataModel from "../services/UserModel.js";
import axios from "axios";
import data from "../data/MockDataAPI.js";



export default async function getUserData(userId) {
  const USE_MOCK_DATA = true;
  const port = USE_MOCK_DATA ? null : 4200;

  async function fetchUserDataFromAPI(userId, port) {
    const [mainDataResponse, activityResponse, averageSessionsResponse, performanceResponse] = await Promise.all([
      axios.get(`http://localhost:${port}/user/${userId}`),
      axios.get(`http://localhost:${port}/user/${userId}/activity`),
      axios.get(`http://localhost:${port}/user/${userId}/average-sessions`),
      axios.get(`http://localhost:${port}/user/${userId}/performance`),
    ]);

    const mainData = mainDataResponse.data[0];
    const activity = activityResponse.data.find((data) => data.userId === userId);
    const averageSessions = averageSessionsResponse.data.find((data) => data.userId === userId);
    const performance = performanceResponse.data.find((data) => data.userId === userId);

    if (!mainData || !activity || !averageSessions || !performance) {
      throw new Error('Data not found for the given userId.');
    }

    return new UserDataModel(mainData, activity, averageSessions, performance);
  }

  async function fetchUserDataFromMock(userId) {
    const mainData = data.USER_MAIN_DATA.find((data) => data.id === userId);
    const activity =  data.USER_ACTIVITY.find((data) => data.userId === userId);
    const averageSessions =  data.USER_AVERAGE_SESSIONS.find((data) => data.userId === userId);
    const performance =  data.USER_PERFORMANCE.find((data) => data.userId === userId);

    if (!mainData || !activity || !averageSessions || !performance) {
      throw new Error('Data not found for the given userId in mock data.');
    }

    return new UserDataModel(mainData, activity, averageSessions, performance);
  }
  try {
    if (USE_MOCK_DATA) {
      return fetchUserDataFromMock(userId);
    } else {
      return fetchUserDataFromAPI(userId, port);
    }
  } catch (error) {
    console.error('Error fetching user data:', error.message);
    throw error;
  }
}

