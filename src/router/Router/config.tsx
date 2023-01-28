import { lazy } from "react";
import { ROUTES } from "../../constants/routes";

//TODO: export interface in model file
export interface IRoutes {
  path?: string;
  component?: any;
}

const PokemonList = lazy(() => import("../../pages/PokemonList/PokemonList"));

export const generalRoutes: IRoutes[] = [
  {
    path: ROUTES.INDEX,
    component: PokemonList,
  },
];
