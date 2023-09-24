import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BoardEntity } from "./board";

@Entity({ name: "project" })
export class ProjectEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id!: number;

  @Column({ type: "text", name: "name" })
  name!: string;

  @Column({
    type: "bigint",
    name: "group_id",
    foreignKeyConstraintName: "project_group_id_fkey",
  })
  groupId!: number;

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
  deleted_datetime!: Date;

  @OneToMany(() => BoardEntity, (board) => board.project)
  boardList!: BoardEntity[];
}
