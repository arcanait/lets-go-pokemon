import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";
import { useGetAllPokemon } from "../../services/hooks/useGetAllPokemon";
import { basicPokemonInformation } from "../../services/model";
import PokemonDetail from "../PokemonDetail/PokemonDetail";
import { PokemonListWrapper } from "./styles";

interface PokemonListProps {}

const PokemonList: FC<PokemonListProps> = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [currentPokemonList, setCurrentPokemonList] = useState<
    basicPokemonInformation[]
  >([]);
  const {
    error,
    mutate,
    pokemonList,
    isValidating,
    isReachingEnd,
    isLoadingMore,
    isLoadingInitialData,
  } = useGetAllPokemon({
    limit,
    offset,
  });

  useEffect(() => {
    setCurrentPokemonList((prev) => [...prev, ...pokemonList]);
  }, [offset, pokemonList.length]);

  const observer = useRef<any>();
  const lastPokemonRef = useCallback(
    (node: any) => {
      if (isLoadingInitialData || isLoadingMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset((previousOffset) => previousOffset + limit);
          console.log("se ejecuta");
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoadingInitialData, isLoadingMore]
  );

  return (
    <PokemonListWrapper>
      {currentPokemonList.map((pokemon, index) => (
        <Fragment key={`${pokemon.name}_${index}_${pokemon.url}`}>
          {currentPokemonList.length - 1 === index ? (
            <PokemonDetail ref={lastPokemonRef} urlPokemon={pokemon.url} />
          ) : (
            <PokemonDetail urlPokemon={pokemon.url} />
          )}
        </Fragment>
      ))}
    </PokemonListWrapper>
  );
};

PokemonList.defaultProps = {};

PokemonList.propTypes = {};

export default PokemonList;
