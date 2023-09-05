import { Entity, Column, PrimaryColumn, ManyToOne, } from 'typeorm';
import BaseEntity from './base.entity';

import masterTask from './masterTask.entity';

@Entity('son_task')
export default class sonTask extends BaseEntity {
    @PrimaryColumn()
    id: number;


    // 详情
    @Column({})
    detail: string;

    // 状态 0 未闭环 1 已闭环
    @Column({
        type: 'enum',
        enum: [0, 1],
        default: 0
    })
    status: number;

    // // 图片或者视频链接 数组
    @Column("simple-array")
    fileUrls: string[] = []

    // // 问题归纳
    @Column({
    })
    question: string;

    // // 是否售后 0 否 1 是
    @Column({
        type: "enum",
        enum: [0, 1],
        default: 0
    })
    isAfterSale: number;

    // // 售后企业 0 是 简单有为 1 是 乐生智能
    @Column({
        type: 'enum',
        enum: [0, 1],
        default: 0
    })
    afterSaleCompany: number;

    // // 售后类型 0是 退货 1是 换货 2是 维修 3是 补发配件
    @Column({
        type: 'enum',
        enum: [0, 1, 2, 3],
        default: 0
    })
    public afterSaleType: number;

    // 寄回单号
    @Column({})
    returnNo: string;

    // 发出单号
    @Column({})
    sendNo: string;

    // 售后附件
    @Column('simple-array')
    public afterSaleFile: string[] = [];

    // 用户回访 0 无需回访 1 需要回访
    @Column({
        type: 'enum',
        enum: [0, 1],
        default: 0
    })
    isReturnVisit: number;

    // 是否解决 0 未解决 1 已解决
    @Column({
        type: 'enum',
        enum: [0, 1],
        default: 0
    })
    isSolve: number;

    // 回访备注
    @Column({})
    returnVisitRemark: string;

    // 任务备注
    @Column({})
    remark: string;

    // 情绪状态
    @Column({
        type: 'enum',
        enum: [0, 1, 2, 3, 4, 5],
        default: 0
    })
    mood: number

    @Column({})
    masterTaskId: number;
    // 主任务Id
    @ManyToOne(() => masterTask, (masterTask: masterTask) => masterTask.sonTasks)
    masterTask?: masterTask;
}