import { Rule } from "@midwayjs/validate";
import { ApiProperty } from "@midwayjs/swagger";
import { numberRule } from "../common/dtoRule";

export class BasePageDTO {
    @ApiProperty({
        description: "跳过多少页",
    })
    @Rule(numberRule())
    public skip: number;

    @ApiProperty({
        description: "查询数量",
    })
    @Rule(numberRule())
    public limit: number;
}