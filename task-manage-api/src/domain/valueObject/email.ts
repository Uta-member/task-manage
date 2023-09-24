export type EmailType = string;

export class Email {
  value: EmailType;
  constructor(email: EmailType) {
    this.value = email;
  }
}
