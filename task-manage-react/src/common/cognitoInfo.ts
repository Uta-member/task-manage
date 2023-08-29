import { CognitoUserPool } from "amazon-cognito-identity-js";

/**
 * Cognitoに関する情報を管理するオブジェクト
 */
const cognitoInfo = {
  region: import.meta.env.VITE_AUTH_REGION,
  identityPoolId: import.meta.env.VITE_AUTH_IDENTITY_POOL_ID,
  userPoolId: import.meta.env.VITE_AUTH_USER_POOL_ID,
  userPoolWebClientId: import.meta.env.VITE_AUTH_USER_POOL_WEB_CLIENT_ID,
};

export const userPool = new CognitoUserPool({
  UserPoolId: cognitoInfo.userPoolId,
  ClientId: cognitoInfo.userPoolWebClientId,
});
