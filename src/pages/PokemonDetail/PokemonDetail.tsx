import { FC } from "react";
import { useGetPokemon } from "../../services/hooks/useGetPokemon";
import { PokemonDetailWrapper } from "./styles";

interface PokemonDetailProps {
  urlPokemon: string;
  ref?: any;
}

const PokemonDetail: FC<PokemonDetailProps> = ({ urlPokemon }) => {
  const { data, error, loading } = useGetPokemon(urlPokemon);
  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <PokemonDetailWrapper>
      <>{console.log("data", data)}</>
    </PokemonDetailWrapper>
  );
};

PokemonDetail.defaultProps = {};

PokemonDetail.propTypes = {};

export default PokemonDetail;
