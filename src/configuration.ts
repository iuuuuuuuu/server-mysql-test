import { IMidwayContainer, Configuration, App, } from '@midwayjs/core';
import * as koa from '@midwayjs/koa';
import * as validate from '@midwayjs/validate';
import * as info from '@midwayjs/info';
import { join } from 'path';
import * as orm from '@midwayjs/typeorm';
import * as crossDomain from '@midwayjs/cross-domain';
import * as redis from '@midwayjs/redis';
import * as swagger from '@midwayjs/swagger';
import * as bull from '@midwayjs/bull';
import * as staticFile from '@midwayjs/static-file';
import * as captcha from '@midwayjs/captcha';
import * as jwt from '@midwayjs/jwt';

import { DefaultErrorFilter } from './filter/default.filter';
import { NotFoundFilter } from './filter/notfound.filter';
import { ReportMiddleware } from './middleware/report.middleware';
import { ValidateErrorFilter } from './filter/validate.filter';
import AuthMiddleware from './middleware/auth.middleware';
import { UserService } from './service/user.service';


const RateLimit = require('koa2-ratelimit').RateLimit;

@Configuration({
  imports: [
    koa,
    validate,
    orm,
    crossDomain,
    redis,
    bull,
    staticFile,
    captcha,
    jwt,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration {
  @App('koa')
  app: koa.Application;

  async onReady(container: IMidwayContainer) {
    // add middleware
    this.app.useMiddleware([AuthMiddleware, ReportMiddleware]);
    // add filter
    this.app.useFilter([
      NotFoundFilter, DefaultErrorFilter, ValidateErrorFilter]);


    this.app.use(
      RateLimit.middleware({
        interval: { min: 1 }, // 15 minutes = 15*60*1000
        max: 100, // limit each IP to 100 requests per interval
        timeWait: 3 * 1000,
        message: '请求过于频繁',
        messageKey: 'message',
      })
    );
    (await container.getAsync(UserService)).init();
  }
}
