import { Entity, Column, PrimaryColumn, AfterLoad, OneToMany } from 'typeorm';
import BaseEntity from './base.entity';

import sonTask from './sonTask.entity';

@Entity('master_task')
export default class masterTask extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @OneToMany(() => sonTask, (sonTask: sonTask) => sonTask.masterTask)
    sonTasks?: sonTask[];

    // 类型 
    @Column({
        type: 'enum',
        enum: [
            // 除螨仪
            'mitePredator',
            // 布艺清洗剂
            'fabricCleaner',
            // 洗地机
            'floorWasher',
            // 扫地机器人
            'sweepingRobot',
            // 吸尘器
            'vacuumCleaner',
        ]
    })
    type: string;

    // 地址
    @Column({
    })
    address: string;

    // 订单号
    @Column({})
    orderNo: string;

    // sn码
    @Column({})
    sn: string;

    // 设备Id
    @Column({})
    deviceId: string;

    // 支付时间
    @Column({
        type: 'bigint',
    })
    payTime: number

    // 购买平台
    @Column({})
    platform: string;

    @AfterLoad()
    convertPayTimeToNumber?() {
        this.payTime = Number(this.payTime)
    }
}