import { fetcher } from "../fetchers/fetcher";
import { IFetcherParams } from "../model";
import useSWRInfinite from "swr/infinite";
// import { IResponseHook } from "../model";

function useGetAllPokemon(params: IFetcherParams) {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    () => `${url}?limit=${params.limit}&offset=${params.offset}`,
    fetcher
  );
  // url, () => fetcher(url, params)
  const issues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < params.limit);
  const isRefreshing = isValidating && data && data.length === size;
  console.log(data, error, mutate, size, setSize, isValidating);
  return {};
}

export { useGetAllPokemon };
