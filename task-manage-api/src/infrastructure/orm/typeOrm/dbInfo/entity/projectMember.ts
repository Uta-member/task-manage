import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "project_member" })
export class ProjectMemberEntity {
  @PrimaryColumn({
    type: "bigint",
    name: "project_id",
    foreignKeyConstraintName: "project_member_project_id_fkey",
  })
  projectId!: number;

  @PrimaryColumn({
    type: "text",
    name: "user_id",
    foreignKeyConstraintName: "project_member_user_id_fkey",
  })
  user_id!: string;

  @PrimaryColumn({ type: "integer", name: "sec" })
  sec!: number;

  @Column({ type: "timestamp with time zone", name: "start_datetime" })
  startDatetime!: Date;

  @Column({
    type: "timestamp with time zone",
    name: "end_datetime",
    nullable: true,
  })
  endDatetime!: Date;
}
