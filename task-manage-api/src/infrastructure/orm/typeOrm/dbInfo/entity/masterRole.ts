import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "master_role" })
export class MasterRoleEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id!: number;

  @Column({ type: "text", name: "role" })
  role!: string;
}
