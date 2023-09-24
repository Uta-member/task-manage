export type UserPasswordType = string;

export class UserPassword {
  value: UserPasswordType;
  constructor(password: UserPasswordType) {
    this.value = password;
  }
}
