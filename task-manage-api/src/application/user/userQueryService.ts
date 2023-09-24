import { User } from "@/domain/entity/user";
import { Email } from "@/domain/valueObject/email";
import { UserId } from "@/domain/valueObject/userId";
import { IUserRepository, UserService } from "@/domainService/userService";
import { TYPES } from "@/toolkit/inversify/types/mainTypes";
import { inject, injectable } from "inversify";

export interface IUserQueryService {
  fetchUser: (param: UserId | Email) => Promise<User | null>;
}

@injectable()
export class UserQueryService implements IUserQueryService {
  private readonly _userService: UserService;

  constructor(
    @inject(TYPES.user.UserRepository) private _userRepository: IUserRepository
  ) {
    this._userService = new UserService(this._userRepository);
  }

  fetchUser = async (param: UserId | Email) => {
    if (param instanceof UserId) {
      return await this._userService.findFromUserId(param);
    } else {
      return await this._userService.findFromEmail(param);
    }
  };
}
