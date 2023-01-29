import { MAX_STAT_BY_STAT } from "../constants/dynamic";
import { maxStatByStatType } from "../constants/model";

export const getMaxStatByStat = (stat: string) => {
  return MAX_STAT_BY_STAT[stat as keyof maxStatByStatType] ?? 500;
};
