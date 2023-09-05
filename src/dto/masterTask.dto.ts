import { Rule } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';
import { stringRequireRule, numberRequiredRule, numberRule } from '../common/dtoRule';
import { BasePageDTO } from './base.dto';

export class masterTaskAddDTO {
    @ApiProperty({})
    @Rule(numberRule())
    id: number;

    @ApiProperty({
        description: '类型'
    })
    @Rule(stringRequireRule())
    type: string;

    @ApiProperty({
        description: '地址',
    })
    @Rule(stringRequireRule())
    address: string;

    @ApiProperty({
        description: '订单编号',
    })
    @Rule(stringRequireRule())
    orderNo: string;

    @ApiProperty({
        description: 'SN码',
    })
    @Rule(stringRequireRule())
    sn: string;

    @ApiProperty({
        description: '设备ID',
    })
    @Rule(stringRequireRule())
    deviceId: string;

    @ApiProperty({
        description: '付款时间',
    })
    @Rule(numberRequiredRule())
    payTime: number;

    @ApiProperty({
        description: '购买平台',
    })
    @Rule(stringRequireRule())
    platform: string;
}

export class masterTaskUpdateDTO extends masterTaskAddDTO {
    @ApiProperty({
        description: 'id',
        required: true,
    })
    @Rule(numberRequiredRule())
    id: number;
}

export class masterTaskFindsDTO extends BasePageDTO {
    @ApiProperty({
        description: '类型'
    })
    @Rule(stringRequireRule())
    type: string;
}