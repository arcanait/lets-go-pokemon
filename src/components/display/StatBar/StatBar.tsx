import { FC } from "react";
import BarFill from "../BarFill/BarFill";
import Label from "../Label/Label";
import { StatBarWrapper } from "./styles";

interface StatBarProps {
  stat: number;
  color: string;
  label: string;
  maxStat: number;
  bright: boolean;
}

const StatBar: FC<StatBarProps> = ({ stat, maxStat, label, color, bright }) => {
  const barProps = { stat, maxStat, color };
  return (
    <StatBarWrapper>
      <Label color={bright ? "black" : "grey"}>
        {label}: {stat}
      </Label>
      <BarFill {...barProps} />
    </StatBarWrapper>
  );
};

StatBar.defaultProps = {};

StatBar.propTypes = {};

export default StatBar;
