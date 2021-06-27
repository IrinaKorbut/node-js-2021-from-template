import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: 'tasks'})
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({nullable: true})
    title!: string;

    @Column({nullable: true})
    order!: number;

    @Column()
    description!: string;

    @Column({nullable: true})
    userId!: string;

    @Column({nullable: true})
    boardId!: string;

    @Column({nullable: true})
    columnId!: string;
}
