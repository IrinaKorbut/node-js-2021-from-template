import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity()
class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column('text', { nullable: true } )
    name!: string;

    @Column('text', { nullable: true })
    login!: string;

    @Column('text', { nullable: true })
    password!: string;
}

export default User;
