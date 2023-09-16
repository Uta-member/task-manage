import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "group_member" })
export class GroupMemberEntity {
  @PrimaryColumn({
    type: "bigint",
    name: "group_id",
    foreignKeyConstraintName: "group_member_group_id_fkey",
  })
  groupId!: number;

  @PrimaryColumn({
    type: "text",
    name: "user_id",
    foreignKeyConstraintName: "group_member_user_id_fkey",
  })
  userId!: string;

  @PrimaryColumn({ type: "integer", name: "sec" })
  sec!: number;

  @Column({
    type: "bigint",
    name: "role_id",
    nullable: true,
    foreignKeyConstraintName: "group_member_role_id_fkey",
  })
  roleId!: number;

  @Column({ type: "timestamp with time zone", name: "start_datetime" })
  startDatetime!: Date;

  @Column({
    type: "timestamp with time zone",
    name: "end_datetime",
    nullable: true,
  })
  endDatetime!: Date;
}
