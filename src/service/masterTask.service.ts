import { Provide } from '@midwayjs/core';
import { BaseService } from './base.service';

import masterTask from '../entity/masterTask.entity';


@Provide()
export class masterTaskService extends BaseService {
    async add(masterTask: masterTask) {
        return await this.masterTaskModel.save(masterTask);
    }
    async find(may: any) {
        return await this.masterTaskModel.findOne({
            where: may,
        });
    }
    async finds(may: any, skip = 0, take = 10) {
        console.log(
            this.userModel.createQueryBuilder('master_task')
                .leftJoinAndSelect('master_task.sonTasks', 'son_task')
                .where('son_task.status = 1')
                .getMany()
        )

        const [list, total] = await this.masterTaskModel.findAndCount({
            where: may,
            skip,
            take,
        });
        return {
            list,
            total,
        }
    }
    async update(may: any, masterTask) {
        return await this.masterTaskModel.update(may, masterTask);
    }
    async delete(may: any) {
        return await this.masterTaskModel.delete(may);
    }
}