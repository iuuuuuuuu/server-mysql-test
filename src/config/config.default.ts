import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1693809960750_5913',
  koa: {
    port: 7001,
  },
  security: {
    csrf: {
      enable: false,
    },
  },
  cors: {
    credentials: false,
  },
  jsonp: {
    limit: 100,
    callback: 'jsonp',
  },
  bull: {
    // 默认队列配置
    defaultQueueOptions: {
      redis: {
        host: '127.0.0.1',
        port: 6379,
        password: '',
      },
    },
  },
  redis: {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0,
      expire: 60 * 60 * 24 * 3,
    },
  },
  validate: {
    validationOptions: {
      // 允许出现没有定义的字段
      // allowUnknown: true,
      // 剔除参数中的未定义字段
      stripUnknown: true,
    },
  },
  swagger: {
    enable: true,
    routerMap: true,
    apiInfo: {
      title: 'midwayjs-koa',
      description: 'midwayjs-koa api doc',
      version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    enableValidate: true,
  },
  staticFile: {
    dirs: {
      default: {
        // 自定义url前缀
        // prefix: '/static/admin/',
        // 对应的静态文件目录
        // dir: 'public',
        // alias: {
        //   '/': '/index.html',
        // },
      },
    },
  },
  captcha: {
    default: {
      width: 120,
      height: 40,
      noise: 2,
    },
  },
  jwt: {
    secret: 'midway-koa+dsalkjgjasddas@!#^&%*#$%skdaj',
    expiresIn: 60 * 30,
  },
  i18n: {
    defaultLocale: 'zh-CN',
    localeTable: {},
  },
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'midway-test',
        // 生产环境下请使用 synchronize: false 或者把值改为 migration 不然会有安全隐患
        synchronize: false,
        // synchronize: true,
        logging: false,
        entities: ['entity/*{.ts,.js}'],
      }
    }
  }
} as MidwayConfig;
