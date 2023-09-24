import { User } from "@/domain/entity/user";
import { Email } from "@/domain/valueObject/email";
import { UserId } from "@/domain/valueObject/userId";
import { UserName } from "@/domain/valueObject/userName";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "app_user" })
export class AppUserEntity {
  @PrimaryColumn({ type: "text", name: "id" })
  id!: string;

  @Column({ type: "text", name: "name" })
  name!: string;

  @Column({ type: "text", name: "email" })
  email!: string;

  @CreateDateColumn({
    type: "timestamp with time zone",
    name: "created_datetime",
  })
  createdDatetime!: Date;

  @Column({
    type: "timestamp without time zone",
    name: "deleted_datetime",
    nullable: true,
  })
  deletedDatetime!: Date | null;
}

export const exchangeUserDAOToUserDomain = (userDAO: AppUserEntity) => {
  const user = new User({
    id: new UserId(userDAO.id),
    name: new UserName(userDAO.name),
    email: new Email(userDAO.email),
  });
  return user;
};
