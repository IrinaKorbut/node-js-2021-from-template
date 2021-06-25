import {
    Entity, Column, PrimaryGeneratedColumn, BaseEntity,
} from 'typeorm';

import { IColumn } from '../types/index'

@Entity({ name: 'board' })

/**
 * Class to create a Board object
 *
 */

export class Board extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id : string | undefined;

    @Column('varchar')
    title = '';

    @Column('jsonb', { nullable: true })
    columns: IColumn[] | undefined;
}