import { Rule } from '@midwayjs/validate';
import { ApiProperty } from '@midwayjs/swagger';
import { numberRule, stringRequireRule, } from '../common/dtoRule';

export class UserDTO {
    @ApiProperty({
        description: 'id',
    })
    @Rule(numberRule())
    id?: number;

    @ApiProperty({
        description: '用户名',
        required: true,
    })
    @Rule(stringRequireRule())
    username: string;

    @ApiProperty({
        description: '密码',
        required: true,
    })
    @Rule(stringRequireRule())
    password: string;
}

export class UserEditPsdDto {
    @ApiProperty({
        description: '旧密码',
        required: true,
    })
    @Rule(stringRequireRule())
    oldPassword: string;

    @ApiProperty({
        description: '新密码',
        required: true,
    })
    @Rule(stringRequireRule())
    newPassword: string;
}
