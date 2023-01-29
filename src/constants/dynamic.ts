import { STATS_NAME } from "./constants";
import { colorByStatType, maxStatByStatType } from "./model";

export const COLOR_BY_STAT: colorByStatType = {
  [STATS_NAME.HP]: "green",
  [STATS_NAME.ATTACK]: "red",
  [STATS_NAME.DEFENSE]: "blue",
  [STATS_NAME.SPEED]: "orange",
};

export const MAX_STAT_BY_STAT: maxStatByStatType = {
  [STATS_NAME.HP]: 300,
  [STATS_NAME.ATTACK]: 300,
  [STATS_NAME.DEFENSE]: 300,
  [STATS_NAME.SPEED]: 300,
};

export const STATS_BLACK_LIST = [
  STATS_NAME.SPECIAL_ATTACK,
  STATS_NAME.SPECIAL_DEFENSE,
];
