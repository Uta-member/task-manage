export type UserIdType = string;

export class UserId {
  value: UserIdType;
  constructor(id: UserIdType) {
    this.value = id;
  }
}
