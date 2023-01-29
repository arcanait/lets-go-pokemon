export const getPercentageOfStat = ({
  maxStat,
  stat,
}: {
  maxStat: number;
  stat: number;
}) => {
  return (stat * 100) / maxStat;
};
