import { CognitoUserPool } from "amazon-cognito-identity-js";
import { config } from "dotenv";

config();

/**
 * Cognitoに関する情報を管理するオブジェクト
 */
export const cognitoInfo = {
  region: process.env.COGNITO_REGION,
  identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
  userPoolId: process.env.COGNITO_USER_POOL_ID,
  userPoolWebClientId: process.env.COGNITO_USER_POOL_WEB_CLIENT_ID,
};

export const userPool = new CognitoUserPool({
  UserPoolId: cognitoInfo.userPoolId ?? "",
  ClientId: cognitoInfo.userPoolWebClientId ?? "",
});
