import { FC, Fragment, useCallback, useEffect, useRef, useState } from "react";

// Store
import { useSelector } from "react-redux";
import { getSearchContent } from "../../store/searchContent/selectors";

// Components
import PokemonCard from "../../components/display/PokemonCard/PokemonCard";

// Service
import { basicPokemonInformation } from "../../services/model";
import { useGetAllPokemon } from "../../services/hooks/useGetAllPokemon";

import { PokemonListWrapper } from "./styles";

interface PokemonListProps {}

const PokemonList: FC<PokemonListProps> = () => {
  const [limit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [allPokemonList, setAllPokemonList] = useState<
    basicPokemonInformation[]
  >([]);
  const [currentPokemonList, setCurrentPokemonList] = useState<
    basicPokemonInformation[]
  >([]);
  const { pokemonList, isLoadingMore, isLoadingInitialData } = useGetAllPokemon(
    {
      limit,
      offset,
    }
  );
  const searchContent = useSelector(getSearchContent);
  const observer = useRef<any>();

  useEffect(() => {
    setCurrentPokemonList((prev) => [...prev, ...pokemonList]);
    setAllPokemonList((prev) => [...prev, ...pokemonList]);
  }, [offset, pokemonList.length]);

  useEffect(() => {
    if (searchContent !== "") {
      const filterPokemonList = allPokemonList.filter((pokemon) => {
        return pokemon.name.includes(searchContent);
      });
      return setCurrentPokemonList(filterPokemonList);
    }
    setCurrentPokemonList(allPokemonList);
  }, [searchContent]);

  const lastPokemonRef = useCallback(
    (node: any) => {
      if (isLoadingInitialData || isLoadingMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && searchContent === "") {
          setOffset((previousOffset) => previousOffset + limit);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoadingInitialData, isLoadingMore, searchContent]
  );

  return (
    <PokemonListWrapper>
      {currentPokemonList.map((pokemon, index) => (
        <Fragment key={`${pokemon.name}_${index}_${pokemon.url}`}>
          {currentPokemonList.length - 1 === index ? (
            <div ref={lastPokemonRef}>
              <PokemonCard urlPokemon={pokemon.url} />
            </div>
          ) : (
            <PokemonCard urlPokemon={pokemon.url} />
          )}
        </Fragment>
      ))}
    </PokemonListWrapper>
  );
};

export default PokemonList;
