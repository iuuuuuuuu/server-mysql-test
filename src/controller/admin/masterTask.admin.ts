import { Controller, Post, Body, Get, Query } from '@midwayjs/core';
import BaseController from '../base.controller';

import { masterTaskAddDTO, masterTaskFindsDTO, masterTaskUpdateDTO } from '../../dto/masterTask.dto';

@Controller('/admin/masterTask')
export class masterTaskAdminController extends BaseController {
    @Post('/add')
    async add(@Body() body: masterTaskAddDTO) {
        return this.ok(await this.masterTaskService.add(body))
    }
    @Get('/list')
    async list(@Query() query: masterTaskFindsDTO) {
        const { type, skip, limit } = query
        return this.ok(await this.masterTaskService.finds({ type }, skip, limit))
    }
    @Post('/update')
    async update(@Body() body: masterTaskUpdateDTO) {
        const { id, } = body
        return this.ok(await this.masterTaskService.update({ id }, body))
    }
}
