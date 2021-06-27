import {Entity, PrimaryGeneratedColumn, Column as dbColumn, ManyToOne,  } from "typeorm";
// eslint-disable-next-line import/no-cycle,import/named
import { Board } from "./board";

@Entity({name: 'columns'})
export default class Column {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @dbColumn('varchar', {nullable: true})
    title!: string;

    @dbColumn('integer', {nullable: true})
    order!: number;

    @ManyToOne(() => Board, board => board.columns, {onDelete: 'CASCADE'})
    board!: Board;
}
