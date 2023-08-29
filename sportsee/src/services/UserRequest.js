import UserDataModel from "../services/UserModel.js"; /* Importing the 'UserDataModel' from the 'services' folder. */
import axios from "axios"; /* Importing the 'axios' library for making HTTP requests. */
import data from "../data/MockDataAPI.js"; /* Importing mock data from the 'MockDataAPI' module. */

/**
 * Retrieves user data either from an API or mock data.
 *
 * @async
 * @param {string} userId - The ID of the user whose data is to be retrieved.
 * @returns {Promise<UserDataModel>} A promise that resolves to a UserDataModel instance containing the user data.
 * @throws {Error} If data is not found for the given userId.
 */
export default async function getUserData(userId) {
  const USE_MOCK_DATA = true; /* Flag to determine whether to use mock data. */
  const port = USE_MOCK_DATA ? null : 4200; /* Port to use for API requests if not using mock data. */

  /**
   * Fetches user data from an API.
   *
   * @async
   * @param {string} userId - The ID of the user whose data is to be retrieved.
   * @param {number} port - The port number for API requests.thoma
   * @returns {Promise<UserDataModel>} A promise that resolves to a UserDataModel instance containing the user data.
   */
  async function fetchUserDataFromAPI(userId, port) {
    /* Using Promise.all to fetch data from multiple API endpoints simultaneously. */
    const [mainDataResponse, activityResponse, averageSessionsResponse, performanceResponse] = await Promise.all([
      axios.get(`http://localhost:${port}/user/${userId}`),
      axios.get(`http://localhost:${port}/user/${userId}/activity`),
      axios.get(`http://localhost:${port}/user/${userId}/average-sessions`),
      axios.get(`http://localhost:${port}/user/${userId}/performance`),
    ]);

    /* Extracting data from API responses. */
    const mainData = mainDataResponse.data[0];
    const activity = activityResponse.data.find((data) => data.userId === userId);
    const averageSessions = averageSessionsResponse.data.find((data) => data.userId === userId);
    const performance = performanceResponse.data.find((data) => data.userId === userId);

    /* Checking if any data is missing. */
    if (!mainData || !activity || !averageSessions || !performance) {
      throw new Error('Data not found for the given userId.');
    }

    /* Creating a new 'UserDataModel' instance with the retrieved data. */
    return new UserDataModel(mainData, activity, averageSessions, performance);
  }

  /**
   * Fetches user data from mock data.
   *
   * @async
   * @param {string} userId - The ID of the user whose data is to be retrieved.
   * @returns {Promise<UserDataModel>} A promise that resolves to a UserDataModel instance containing the user data.
   */
  async function fetchUserDataFromMock(userId) {
    const mainData = data.USER_MAIN_DATA.find((data) => data.id === userId);
    const activity =  data.USER_ACTIVITY.find((data) => data.userId === userId);
    const averageSessions =  data.USER_AVERAGE_SESSIONS.find((data) => data.userId === userId);
    const performance =  data.USER_PERFORMANCE.find((data) => data.userId === userId);

    /* Checking if any data is missing in the mock data. */
    if (!mainData || !activity || !averageSessions || !performance) {
      throw new Error('Data not found for the given userId in mock data.');
    }

    /* Creating a new 'UserDataModel' instance with the mock data. */
    return new UserDataModel(mainData, activity, averageSessions, performance);
  }

  try {
    if (USE_MOCK_DATA) {
      return fetchUserDataFromMock(userId);
    } else {
      return fetchUserDataFromAPI(userId, port);
    }
  } catch (error) {
    /* Handling errors and logging messages. */
    console.error('Error fetching user data:', error.message);
    throw error; /* Re-throwing the error to propagate it. */
  }
}
