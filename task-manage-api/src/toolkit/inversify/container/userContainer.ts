import { IUserRepository } from "@/domainService/userService";
import { Container } from "inversify";
import { TYPES } from "../types/mainTypes";
import { UserRepository } from "@/infrastructure/orm/typeOrm/repository/pg/userRepository";
import {
  IUserQueryService,
  UserQueryService,
} from "@/application/user/userApplicationQueryService";

export const bindUserContainer = (container: Container) => {
  container
    .bind<IUserRepository>(TYPES.user.UserRepository)
    .to(UserRepository)
    .inSingletonScope();
  container
    .bind<IUserQueryService>(TYPES.user.UserQueryService)
    .to(UserQueryService)
    .inSingletonScope();
};
