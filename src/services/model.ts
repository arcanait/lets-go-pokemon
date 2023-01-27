interface resultsType {
  name: string;
  url: string;
}

export interface IResponseAllPokemon {
  count: number;
  next: string;
  previous: string;
  results: resultsType[];
}

export interface IFetcherParams {
  [k: string]: string | number;
}
