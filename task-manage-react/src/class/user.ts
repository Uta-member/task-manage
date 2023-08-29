export type UserIdType = string;

export class UserId {
  value: UserIdType;
  constructor(id: UserIdType) {
    this.value = id;
  }
}

export type UserNameType = string;

export class UserName {
  value: UserNameType;
  constructor(name: UserNameType) {
    this.value = name;
  }
}

export type EmailType = string;

export class Email {
  value: EmailType;
  constructor(email: EmailType) {
    this.value = email;
  }
}

export type UserPasswordType = string;

export class UserPassword {
  value: UserPasswordType;
  constructor(password: UserPasswordType) {
    this.value = password;
  }
}

export type UserType = {
  id: UserIdType;
  name: UserNameType;
  email: EmailType;
};

export class User {
  id: UserId;
  name: UserName;
  email: Email;

  constructor(params: { id: UserId; name: UserName; email: Email }) {
    const { id, name, email } = params;
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
