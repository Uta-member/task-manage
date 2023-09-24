import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "responsible_person" })
export class ResponsiblePersonEntity {
  @PrimaryColumn({
    type: "text",
    name: "user_id",
    foreignKeyConstraintName: "responsible_person_user_id_fkey",
  })
  userId!: string;

  @PrimaryColumn({
    type: "text",
    name: "task_id",
    foreignKeyConstraintName: "responsible_person_task_id_fkey",
  })
  taskId!: string;

  @Column({ type: "timestamp with time zone", name: "start_datetime" })
  startDatetime!: Date;

  @Column({
    type: "timestamp with time zone",
    name: "end_datetime",
    nullable: true,
  })
  endDatetime!: Date | null;
}
