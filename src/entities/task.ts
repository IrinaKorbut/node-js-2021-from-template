import {
    BaseEntity, Column, Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tasks' })
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string | undefined;

    @Column('varchar', { length: 25 })
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