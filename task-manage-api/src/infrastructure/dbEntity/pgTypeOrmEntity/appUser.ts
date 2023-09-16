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
