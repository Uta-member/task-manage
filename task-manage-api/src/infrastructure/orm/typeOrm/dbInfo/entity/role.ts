import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "role" })
export class RoleEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id!: number;

  @Column({ type: "text", name: "role" })
  role!: string;

  @Column({
    type: "bigint",
    name: "group_id",
    foreignKeyConstraintName: "role_group_id_fkey",
  })
  groupId!: number;
}
