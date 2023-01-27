import { FC } from "react";
import { PokemonListWrapper } from "./styles";

interface PokemonListProps {}

const PokemonList: FC<PokemonListProps> = () => {
  return <PokemonListWrapper></PokemonListWrapper>;
};

PokemonList.defaultProps = {};

PokemonList.propTypes = {};

export default PokemonList;
