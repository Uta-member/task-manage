import { UserId } from "@/class/user";
import { userPool } from "@/common/cognitoInfo";
import { CognitoUser } from "amazon-cognito-identity-js";

/**
 * Cognitoのユーザを認証する関数
 * @param params
 * @returns
 */
export const authorizeUser = async (params: {
  userId: UserId;
  verificationCode: string;
}) => {
  const { userId, verificationCode } = params;

  const cognitoUser = new CognitoUser({
    Username: userId.value,
    Pool: userPool,
  });

  return new Promise((resolve, reject) => {
    cognitoUser.confirmRegistration(verificationCode, true, (err: any) => {
      if (err) {
        if (err instanceof Error) {
          reject(err);
        } else {
          reject(new Error("認証に失敗しました"));
        }
      } else {
        resolve("認証成功");
      }
    });
  });
};
