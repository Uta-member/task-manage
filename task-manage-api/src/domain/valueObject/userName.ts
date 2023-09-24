export type UserNameType = string;

export class UserName {
  value: UserNameType;
  constructor(name: UserNameType) {
    this.value = name;
  }
}
