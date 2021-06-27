// import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
//
// @Entity({name: 'tasks'})
// export class Task {
//     @PrimaryGeneratedColumn('uuid')
//     id?: string;
//
//     @Column({nullable: true})
//     title?: string;
//
//     @Column({nullable: true})
//     order?: number;
//
//     @Column({nullable: true})
//     description?: string;
//
//     @Column({nullable: true})
//     userId?: string;
//
//     @Column({nullable: true})
//     boardId?: string;
//
//     @Column({nullable: true})
//     columnId?: string;
// }

import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tasks' })
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string | undefined;

    @Column('varchar', { nullable: true })
    title: string | undefined;

    @Column('integer', { nullable: true })
    order: number | undefined;

    @Column('varchar', { nullable: true })
    description: string | undefined;

    @Column('varchar', { nullable: true })
    userId: string | undefined;

    @Column('varchar', { nullable: true })
    boardId: string | undefined;

    @Column('varchar', { nullable: true })
    columnId: string | undefined;
}
