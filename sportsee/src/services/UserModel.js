/**
 * Represents user data including personal information, activity, and performance metrics.
 */
class UserDataModel {
  /**
   * Constructor for the UserDataModel class.
   * @param {object} mainData - Main user data object.
   * @param {object} activity - User activity data object.
   * @param {object} averageSessions - User average sessions data object.
   * @param {object} performance - User performance data object.
   */
  constructor(mainData, activity, averageSessions, performance) {
    /* Assigning properties from the main data. */
    this.id = mainData.id;
    this.firstName = mainData.userInfos.firstName;
    this.lastName = mainData.userInfos.lastName;
    this.age = mainData.userInfos.age;

    /* Assigning today's score from main data, or fallback to the overall score. */
    this.todayScore = mainData.todayScore || mainData.score;

    /* Assigning key data from main data. */
    this.keyData = mainData.keyData;

    /* Assigning user activity sessions. */
    this.activity = activity.sessions;

    /* Assigning user average sessions data. */
    this.averageSessions = averageSessions.sessions;

    /* Assigning user performance data. */
    this.performance = performance.data;

    /* Assigning user performance kind. */
    this.performanceKind = performance.kind;
  }
}

export default UserDataModel;