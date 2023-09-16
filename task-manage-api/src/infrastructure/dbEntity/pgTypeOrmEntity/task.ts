import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "id" })
export class TaskEntity {
  @PrimaryColumn({ type: "text", name: "id" })
  id!: string;

  @Column({ type: "text", name: "title" })
  title!: string;

  @CreateDateColumn({
    type: "timestamp with time zone",
    name: "created_datetime",
  })
  createdDatetime!: Date;

  @Column({
    type: "timestamp with time zone",
    name: "deleted_datetime",
    nullable: true,
  })
  deletedDatetime!: Date | null;
}
