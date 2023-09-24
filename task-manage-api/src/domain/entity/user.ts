import { Email } from "../valueObject/email";
import { UserId } from "../valueObject/userId";
import { UserName } from "../valueObject/userName";

export class User {
  readonly id: UserId;
  readonly name: UserName;
  readonly email: Email;

  constructor(params: { id: UserId; name: UserName; email: Email }) {
    const { id, name, email } = params;
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
