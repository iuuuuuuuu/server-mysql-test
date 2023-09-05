import { RuleType } from '@midwayjs/validate';

export const stringRequireRule = () => RuleType.string().required();

export const stringRule = () => RuleType.string();

export const booleanRule = () => RuleType.boolean();

export const booleanRequiredRule = () => RuleType.boolean().required();

export const anyRule = () => RuleType.any();

export const numberRule = () => RuleType.number();
export const numberRequiredRule = () => RuleType.number().required();

export const arrayRule = () => RuleType.array();
export const arrayRequiredRule = () => RuleType.array().required();