
class UserDataModel {
  constructor(data) {
    this.data = data;
  }

  getUserMainData(userId) {
    return this.data.USER_MAIN_DATA.find((user) => user.id === userId);
  }

  getUserActivity(userId) {
    return this.data.USER_ACTIVITY.find((user) => user.userId === userId);
  }

  getUserAverageSessions(userId) {
    return this.data.USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
  }

  getUserPerformance(userId) {
    return this.data.USER_PERFORMANCE.find((user) => user.userId === userId);
  }
}

export default UserDataModel;