import { Inject, Provide, } from '@midwayjs/core';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import Utils from '../common/utils';
import User from '../entity/user.entity';

import masterTask from '../entity/masterTask.entity';
import sonTask from '../entity/sonTask.entity';

@Provide()
export class BaseService {
    @Inject()
    utils: Utils;
    @InjectEntityModel(User)
    userModel: Repository<User>;

    @InjectEntityModel(masterTask)
    masterTaskModel: Repository<masterTask>;
    @InjectEntityModel(sonTask)
    sonTaskModel: Repository<sonTask>;
}
