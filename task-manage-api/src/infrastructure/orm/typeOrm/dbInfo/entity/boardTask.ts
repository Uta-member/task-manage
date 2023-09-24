import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "board_task" })
export class BoardTaskEntity {
  @PrimaryColumn({
    type: "text",
    name: "board_id",
    foreignKeyConstraintName: "board_task_board_id_fkey",
  })
  boardId!: string;

  @PrimaryColumn({
    type: "text",
    name: "task_id",
    foreignKeyConstraintName: "board_task_task_id_fkey",
  })
  taskId!: string;

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

  @Column({ type: "integer", name: "order" })
  order!: number;
}
