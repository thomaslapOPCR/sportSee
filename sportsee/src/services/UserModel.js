export default class UserDataModel {
  constructor(data) {
    this.data = data;
  }

  getUserMainDataById() {
    return this.data.USER_MAIN_DATA[0];
  }

  getUserActivityById() {
    return this.data.USER_ACTIVITY[0].sessions;
  }

  getUserAverageSessionsById() {
    return this.data.USER_AVERAGE_SESSIONS[0].sessions;
  }

  getUserPerformanceById() {
    return this.data.USER_PERFORMANCE[0];
  }

  getUser() {
    const userMainData = this.getUserMainDataById();
    const userActivity = this.getUserActivityById();
    const userAverageSessions = this.getUserAverageSessionsById();
    const userPerformance = this.getUserPerformanceById();

    if (
      !userMainData ||
            !userActivity ||
            !userAverageSessions ||
            !userPerformance
    ) {
      return null; // User data not found
    }

    return {
      userMainData: {
        ...userMainData.userInfos,
        todayScore: userMainData.todayScore,
        keyData: userMainData.keyData,
      },
      userActivity: userActivity,
      userAverageSessions: userAverageSessions,
      userPerformance: {
        data: userPerformance.data,
        kind: userPerformance.kind,
      },
    };
  }
}