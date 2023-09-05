import { Rule } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';
import { stringRequireRule, numberRequiredRule, numberRule, arrayRequiredRule } from '../common/dtoRule';

export class sonTaskAddDTO {
    @ApiProperty({
        description: '子任务id',
    })
    @Rule(numberRule())
    id: number;

    @ApiProperty({
        description: '主任务id',
    })
    @Rule(numberRequiredRule())
    masterTaskId: number;

    @ApiProperty({
        description: '任务详情',
    })
    @Rule(stringRequireRule())
    detail: string;

    @ApiProperty({
        description: '任务状态 0 未闭环 1 已闭环',
    })
    @Rule(numberRequiredRule().min(0).max(1))
    status: number;

    @ApiProperty({
        description: '图片或者视频的地址',
    })
    @Rule(arrayRequiredRule())
    fileUrls: string[];

    @ApiProperty({
        description: '问题归纳',
    })
    @Rule(stringRequireRule())
    question: string;

    @ApiProperty({
        description: '是否售后',
    })
    @Rule(numberRequiredRule().min(0).max(1))
    isAfterSale: number;

    @ApiProperty({
        description: '售后企业 0 是 简单有为 1 是 乐生智能',
    })
    @Rule(numberRequiredRule().min(0).max(1))
    afterSaleCompany: number;

    @ApiProperty({
        description: '售后类型 0是 退货 1是 换货 2是 维修 3是 补发配件',
    })
    @Rule(numberRequiredRule().min(0).max(3))
    afterSaleType: number;

    @ApiProperty({
        description: '寄回单号',
    })
    @Rule(stringRequireRule())
    returnNo: string;

    @ApiProperty({
        description: '发出单号',
    })
    @Rule(stringRequireRule())
    sendNo: string;

    @ApiProperty({
        description: '售后附件'
    })
    @Rule(arrayRequiredRule())
    afterSaleFile: string[];

    @ApiProperty({
        description: '用户回访'
    })
    @Rule(numberRequiredRule().min(0).max(1))
    isReturnVisit: number;

    @ApiProperty({
        description: "是否解决"
    })
    @Rule(numberRequiredRule().min(0).max(1))
    isSolve: number;

    @ApiProperty({
        description: '回访备注'
    })
    @Rule(stringRequireRule())
    returnVisitRemark: string;

    @ApiProperty({
        description: '任务备注'
    })
    @Rule(stringRequireRule())
    remark: string;

    @ApiProperty({
        description: '情绪状态'
    })
    @Rule(numberRequiredRule().min(0).max(5))
    mood: number;
}

export class sonTaskUpdateDTO extends sonTaskAddDTO {
    @ApiProperty({
        description: '任务id',
    })
    @Rule(numberRequiredRule())
    id: number;
}