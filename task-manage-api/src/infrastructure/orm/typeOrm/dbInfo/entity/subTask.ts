import { Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "sub_task" })
export class SubTaskEntity {
  @PrimaryColumn({
    type: "text",
    name: "parent_task_id",
    foreignKeyConstraintName: "sub_task_parent_task_id_fkey",
  })
  parentTaskId!: string;

  @PrimaryColumn({
    type: "text",
    name: "child_task_id",
    foreignKeyConstraintName: "sub_task_child_task_id_fkey",
  })
  childTaskId!: string;
}
