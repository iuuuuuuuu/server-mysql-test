import { Entity, Column, PrimaryColumn, } from 'typeorm';
import BaseEntity from './base.entity';

@Entity('User')
export default class User extends BaseEntity {
    // 主键
    @PrimaryColumn()
    id: number;

    @Column({
        unique: true,
    })
    username: string;

    @Column({
        select: false,
    })
    password: string;
}