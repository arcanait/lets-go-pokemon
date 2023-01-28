import useSWR from "swr";
import { fetcherPokemon } from "../fetchers/fetcherPokemon";

function useGetPokemon(urlPokemon: string) {
  const { data, error } = useSWR(urlPokemon, fetcherPokemon);
  const loading = !data && !error;
  const isError = Boolean(error);

  return {
    data,
    error: isError,
    loading,
  };
}

export { useGetPokemon };
