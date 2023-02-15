import { FC } from "react";
import { getPercentageOfStat } from "../../../helpers/getPercentageOfStat";
import { BarFillWrapper } from "./styles";

interface BarFillProps {
  stat: number;
  maxStat: number;
  color: string;
}

const BarFill: FC<BarFillProps> = ({ stat, maxStat, color }) => {
  return (
    <BarFillWrapper
      barColor={color}
      barWidth={getPercentageOfStat({
        maxStat,
        stat,
      })}
    ></BarFillWrapper>
  );
};

export default BarFill;
