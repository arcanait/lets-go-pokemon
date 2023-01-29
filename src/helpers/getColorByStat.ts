import { COLOR_BY_STAT } from "../constants/dynamic";
import { colorByStatType } from "../constants/model";

export const getColorByStat = (stat: string) => {
  return COLOR_BY_STAT[stat as keyof colorByStatType] ?? "";
};
