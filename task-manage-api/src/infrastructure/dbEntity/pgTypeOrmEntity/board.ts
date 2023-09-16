import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "board" })
export class BoardEntity {
  @PrimaryColumn({ type: "string", name: "id" })
  id!: string;

  @Column({
    type: "bigint",
    name: "project_id",
    foreignKeyConstraintName: "board_project_id_fkey",
  })
  projectId!: number;

  @Column({ type: "text", name: "name" })
  name!: string;

  @Column({ type: "integer", name: "order" })
  order!: number;
}
