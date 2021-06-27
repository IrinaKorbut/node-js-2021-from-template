import {Entity, PrimaryGeneratedColumn, Column, OneToMany, } from "typeorm";
// eslint-disable-next-line import/no-cycle
import Columns from './column';
import { IColumn } from '../types/index'

@Entity({name: 'board'})
export class Board {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({nullable: true})
    title!: string;

    @OneToMany(() => Columns, column => column.board, {nullable: true})
    columns!: IColumn[];
}
