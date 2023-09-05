import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export default class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @UpdateDateColumn({
        type: 'timestamp',
    })
    updateAt?: Date;

    @CreateDateColumn({
        type: 'timestamp',
    })
    createAt?: Date;
}