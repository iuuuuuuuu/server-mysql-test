import { Provide } from '@midwayjs/core';
import { BaseService } from './base.service';
import { UserDTO } from '../dto/user.dto';
import User from '../entity/user.entity';


@Provide()
export class UserService extends BaseService {
  async init() {
    const { total } = await this.finds({});
    if (total == 0) {
      console.log('初始化用户', await this.add({
        username: 'admin',
        password: 'admin',
      }))
    }
  }
  async add(user: UserDTO) {
    const data = new User();
    data.username = user.username;
    data.password = this.utils.encrypt('sha256', user.password);
    return await this.userModel.save(data);
  }
  async find(may: any) {
    return await this.userModel.findOne({
      where: may,
    });
  }
  async finds(may: any, skip = 0, take = 10) {
    const [list, total] = await this.userModel.findAndCount({
      where: may,
      skip,
      take,
    });
    return {
      list,
      total,
    }
  }
  async update(may: any, user) {
    return await this.userModel.update(may, user);
  }
  async delete(may: any) {
    return await this.userModel.delete(may);
  }
}
