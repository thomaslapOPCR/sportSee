class UserDataModel {
  constructor(mainData, activity, averageSessions, performance) {
    this.id = mainData.id;
    this.firstName = mainData.userInfos.firstName;
    this.lastName = mainData.userInfos.lastName;
    this.age = mainData.userInfos.age;
    this.todayScore = mainData.todayScore;
    this.keyData = mainData.keyData;
    this.activity = activity.sessions;
    this.averageSessions = averageSessions.sessions;
    this.performance = performance.data;
  }
}

export default UserDataModel;
