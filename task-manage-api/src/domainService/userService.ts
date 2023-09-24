import { User } from "@/domain/entity/user";
import { Email } from "@/domain/valueObject/email";
import { UserId } from "@/domain/valueObject/userId";
import { UserPassword } from "@/domain/valueObject/userPassword";

export interface IUserRepository {
  findFromUserId: (userId: UserId) => Promise<User | null>;
  findFromEmail: (email: Email) => Promise<User | null>;
  update: (user: User) => Promise<void>;
  create: (user: User, password: UserPassword) => Promise<void>;
}

export class UserService {
  private _repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this._repository = repository;
  }

  findFromUserId = async (userId: UserId) => {
    return await this._repository.findFromUserId(userId);
  };

  findFromEmail = async (email: Email) => {
    return await this._repository.findFromEmail(email);
  };

  update = async (user: User) => {
    await this._repository.update(user);
  };

  create = async (user: User, password: UserPassword) => {
    await this._repository.create(user, password);
  };
}
