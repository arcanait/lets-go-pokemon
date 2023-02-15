import { basicPokemonInformation, IFetcherParams } from "../model";
import useSWRInfinite from "swr/infinite";
import { fetcherAllPokemon } from "../fetchers/fetcherAllPokemon";

function useGetAllPokemon(params: IFetcherParams) {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const { data, error, mutate, isValidating } = useSWRInfinite(
    () => `${url}?limit=${params.limit}&offset=${params.offset}`,
    fetcherAllPokemon
  );
  // url, () => fetcher(url, params)
  const pokemonList: basicPokemonInformation[] = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (data && typeof data[data.length - 1] === "undefined");
  const isEmpty = !data?.length;
  const isReachingEnd = isEmpty || (data && data.length < params.limit);

  return {
    error,
    mutate,
    pokemonList,
    isValidating,
    isReachingEnd,
    isLoadingMore,
    isLoadingInitialData,
  };
}

export { useGetAllPokemon };
