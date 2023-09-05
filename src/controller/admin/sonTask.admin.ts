import { Controller, Post, Body, } from '@midwayjs/core';
import BaseController from '../base.controller';
import { sonTaskAddDTO, sonTaskUpdateDTO } from '../../dto/sonTask.dto';

@Controller('/admin/sonTask')
export class sonTaskAdminController extends BaseController {
    @Post('/add')
    async add(@Body() body: sonTaskAddDTO) {
        return this.ok(await this.sonTaskService.add(body))
    }
    @Post('/update')
    async update(@Body() body: sonTaskUpdateDTO) {
        const { id, } = body
        return this.ok(await this.sonTaskService.update({ id }, body))
    }
}
