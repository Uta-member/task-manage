import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "tasK_completed_status" })
export class TaskCompletedStatusEntity {
  @PrimaryColumn({
    type: "text",
    name: "task_id",
    foreignKeyConstraintName: "task_completed_status_task_id_fkey",
  })
  taskId!: string;

  @PrimaryColumn({ type: "integer", name: "sec" })
  sec!: number;

  @Column({ type: "boolean", name: "completed" })
  completed!: boolean;

  @Column({
    type: "text",
    name: "user_id",
    foreignKeyConstraintName: "task_completed_status_user_id_fkey",
  })
  userId!: string;

  @CreateDateColumn({
    type: "timestamp with time zone",
    name: "crteated_datetime",
  })
  createdDatetime!: Date;
}
