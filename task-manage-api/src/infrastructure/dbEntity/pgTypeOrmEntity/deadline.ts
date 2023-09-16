import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "deadline" })
export class DeadlineEntity {
  @PrimaryColumn({
    type: "text",
    name: "task_id",
    foreignKeyConstraintName: "deadline_task_id_fkey",
  })
  taskId!: string;

  @PrimaryColumn({ type: "integer", name: "sec" })
  sec!: number;

  @Column({
    type: "timestamp with time zone",
    name: "start_datetime",
    nullable: true,
  })
  startDatetime!: Date;

  @Column({ type: "timestamp with time zone", name: "end_datetime" })
  endDatetime!: Date;

  @Column({
    type: "text",
    name: "user_id",
    foreignKeyConstraintName: "deadline_user_id_fkey",
  })
  userId!: string;

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
  deletedDatetime!: Date;
}
