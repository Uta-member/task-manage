import { User, UserPassword } from "@/class/user";
import { userPool } from "@/common/cognitoInfo";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { getCreateUserQuery } from "./queryBuilder/getCreateUserQuery";
import { execTransaction } from "@/common/database/transaction";

/**
 * CognitoとDBにユーザを登録する関数
 * @param params
 */
export const createUser = async (params: {
  user: User;
  password: UserPassword;
}) => {
  const { user, password } = params;
  const { id, email } = user;

  const attributeList = [
    new CognitoUserAttribute({
      Name: "email",
      Value: email.value,
    }),
  ];

  const signUp = async (params: {
    id: string;
    password: string;
    userAttributes: CognitoUserAttribute[];
    validationData: CognitoUserAttribute[];
    callback: (
      err: any,
      _result: any,
      resolve: (value: unknown) => void,
      reject: (reason?: any) => void
    ) => Promise<void>;
  }) => {
    const { id, password, userAttributes, validationData, callback } = params;
    return new Promise((resolve, reject) => {
      userPool.signUp(
        id,
        password,
        userAttributes,
        validationData,
        (err, result) => callback(err, result, resolve, reject)
      );
    });
  };

  const signUpParams = {
    id: id.value,
    password: password.value,
    userAttributes: attributeList,
    validationData: [],
    callback: async (
      err: any,
      result: any,
      resolve: (value: unknown) => void,
      reject: (reason?: any) => void
    ) => {
      if (err) {
        reject(err);
        return err;
      }
      resolve(result.user);
    },
  };

  const queryParams = getCreateUserQuery({ user });
  await execTransaction(
    [queryParams],
    [{ func: signUp, params: signUpParams }]
  );
};
