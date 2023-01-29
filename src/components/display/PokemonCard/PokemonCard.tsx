import { FC } from "react";

// Components
import Label from "../Label/Label";
import StatBar from "../StatBar/StatBar";

// Helpers
import { STATS_BLACK_LIST } from "../../../constants/dynamic";
import { getColorByStat } from "../../../helpers/getColorByStat";
import { getMaxStatByStat } from "../../../helpers/getMaxStatByStat";

// Services
import { useGetPokemon } from "../../../services/hooks/useGetPokemon";

// Model
import { field } from "./model";

// Styles
import { PokemonCardWrapper } from "./styles";
import { COLOR_BRIGHT_LIST } from "../../../constants/constants";

interface PokemonCardProps {
  urlPokemon: string;
}

const PokemonCard: FC<PokemonCardProps> = ({ urlPokemon }) => {
  const { data, error, loading } = useGetPokemon(urlPokemon);
  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  const { name, types, sprites, stats } = data;

  const getBackgroundColor = () => {
    return types[0].type.name;
  };

  const getImagePokemon = () => {
    return sprites.front_default;
  };

  const getStatList = (): field[] => {
    const statList = stats.map((stat: any) => {
      if (!STATS_BLACK_LIST.includes(stat.stat.name)) {
        return {
          value: stat.base_stat,
          label: stat.stat.name,
        };
      }
      return null;
    });
    const statListFilter = statList.filter((stat: any) => stat);
    return statListFilter;
  };

  const isBrightCard = () => {
    return COLOR_BRIGHT_LIST.includes(getBackgroundColor());
  };

  return (
    <PokemonCardWrapper backgroundColor={getBackgroundColor()}>
      <Label
        fontFamily="pokemon"
        color="yellow"
        fontSize="s-16"
        classLabel="title-name"
      >
        {name}
      </Label>
      <div className="content-container">
        <img src={getImagePokemon()} alt="pokemon" />
        <div className="stats-container">
          {getStatList().map((stat: any) => (
            <StatBar
              color={getColorByStat(stat.label)}
              stat={stat.value}
              maxStat={getMaxStatByStat(stat.label)}
              label={stat.label}
              bright={isBrightCard()}
            />
          ))}
        </div>
      </div>
    </PokemonCardWrapper>
  );
};

export default PokemonCard;
