const USER_ERROR_INITIAL = "U";
export enum UserErrorEnum {
  // 値オブジェクト関連
  // Userインスタンス作成失敗
  userInstanceCreateFailed = 1001,
  // Userパスワードインスタンス作成失敗
  userPasswordInstanceCreateFailed = 1002,
  // UserIdインスタンス作成失敗
  userIdInstanceCreateFailed = 1003,

  // Cognito関連
  // 登録関連
  cognitoUserRegisterFailed = 2000,
  // すでにCognitoにユーザIDが存在しているため、登録に失敗
  cognitoUsernameAlreadyExists = 2001,
  // パスワードの長さが足りない
  cognitoPasswordNotLongEnough = 2002,
  // パスワードの文字種が不足している
  cognitoPasswordMustHaveSymbolCharacters = 2003,
  // パスワードが何らかの理由で登録できない
  cognitoPasswordDidNotConformWithPolicy = 2004,

  // 認証関連
  cognitoUserAuthorizeFailed = 2101,
}

export const getUserErrCode = (code: UserErrorEnum) => {
  return `${USER_ERROR_INITIAL}${code}`;
};
