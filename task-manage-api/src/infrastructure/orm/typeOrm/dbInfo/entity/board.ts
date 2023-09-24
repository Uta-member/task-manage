import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ProjectEntity } from "./project";

@Entity({ name: "board" })
export class BoardEntity {
  @PrimaryColumn({ type: "text", name: "id" })
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

  @ManyToOne(() => ProjectEntity, (project) => project.boardList)
  project!: ProjectEntity;
}
