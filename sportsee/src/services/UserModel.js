export default class UserDataModel {
  constructor(data) {
    this.data = data;
  }

  getUserMainDataById() {
    return this.data.USER_MAIN_DATA
  }

  getUserActivityById() {
    return this.data.USER_ACTIVITY
  }

  getUserAverageSessionsById() {
    return this.data.USER_AVERAGE_SESSIONS
  }

  getUserPerformanceById() {
    return this.data.USER_PERFORMANCE
  }

  getUserDataById() {
    const userMainData = this.getUserMainDataById();
    const userActivity = this.getUserActivityById();
    const userAverageSessions = this.getUserAverageSessionsById();
    const userPerformance = this.getUserPerformanceById();

    if (!userMainData || !userActivity || !userAverageSessions || !userPerformance) {
      return null; // User data not found
    }

    return {
      userMainData: {
        ...userMainData.userInfos,
        todayScore: userMainData.todayScore,
        keyData: userMainData.keyData,
      },
      userActivity: userActivity.sessions,
      userAverageSessions: userAverageSessions.sessions,
      userPerformance: {
        data: userPerformance.data,
        kind: userPerformance.kind
      }
    };
  }
}