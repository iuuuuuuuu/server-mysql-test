import { Provide } from '@midwayjs/core';
import { BaseService } from './base.service';

import sonTask from '../entity/sonTask.entity';


@Provide()
export class sonTaskService extends BaseService {
    async add(sonTask: sonTask) {
        return await this.sonTaskModel.save(sonTask);
    }
    async find(may: any) {
        return await this.sonTaskModel.findOne({
            where: may,
        });
    }
    async finds(may: any, skip = 0, take = 10) {
        const [list, total] = await this.sonTaskModel.findAndCount({
            where: may,
            skip,
            take,
        });
        return {
            list,
            total,
        }
    }
    async update(may: any, sonTask) {
        return await this.sonTaskModel.update(may, sonTask);
    }
    async delete(may: any) {
        return await this.sonTaskModel.delete(may);
    }
}