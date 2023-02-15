import axios from "axios";
import { IFetcherParams } from "../model";

export const fetcherAllPokemon = (url: string, params: IFetcherParams) =>
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json",
      },
      params: { ...params },
      validateStatus: (status) => status >= 200 && status < 400,
    })
    .then((res) => {
      return res.data.results;
    })
    .catch((e) => e.response.data);
