import { User } from "@/domain/entity/user";
import { UserId } from "@/domain/valueObject/userId";
import { IUserRepository } from "@/domainService/userService";
import { pgDatasource } from "../../dbInfo/datasources/pgDatasource";
import {
  AppUserEntity,
  exchangeUserDAOToUserDomain,
} from "../../dbInfo/entity/appUser";
import { Email } from "@/domain/valueObject/email";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { userPool } from "@/toolkit/cognito/cognitoInfo";
import { UserPassword } from "@/domain/valueObject/userPassword";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
  findFromUserId = async (userId: UserId) => {
    const repo = pgDatasource.getRepository(AppUserEntity);
    const userDAO = await repo.findOneBy({ id: userId.value });

    if (userDAO === null) {
      return userDAO;
    }

    const user = exchangeUserDAOToUserDomain(userDAO);
    return user;
  };

  findFromEmail = async (email: Email) => {
    const repo = pgDatasource.getRepository(AppUserEntity);
    const userDAO = await repo.findOneBy({ email: email.value });

    if (userDAO === null) {
      return userDAO;
    }

    const user = exchangeUserDAOToUserDomain(userDAO);
    return user;
  };

  update = async (user: User) => {
    const repo = pgDatasource.getRepository(AppUserEntity);
    await repo.update(
      { id: user.id.value },
      { name: user.name.value, email: user.email.value }
    );
  };

  create = async (user: User, password: UserPassword) => {
    const attributeList = [
      new CognitoUserAttribute({
        Name: "email",
        Value: user.email.value,
      }),
    ];

    const signUpParams = {
      id: user.id.value,
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

    await pgDatasource.transaction(async (entityManager) => {
      await signUpToCognito(signUpParams);
      const repo = entityManager.getRepository(AppUserEntity);
      const newUser = repo.create({
        id: user.id.value,
        name: user.name.value,
        email: user.email.value,
      });
      await repo.save(newUser);
    });
  };
}

const signUpToCognito = async (params: {
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
