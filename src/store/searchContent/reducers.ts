import SEARCH_CONTENT from "./types";
import IDEMPOTENT from "../models";
import { VO_BASE, actionInit } from "../models";
import createOnceSwitcher from "../../helpers/factories/createOnceSwitcher";
const { ON_UPDATE_SEARCH_CONTENT } = SEARCH_CONTENT;

const handleOnUpdateSearchContent = (state: any, payload: any) => {
  return { ...state, ...payload };
};

const VO = {
  ...VO_BASE,
  [ON_UPDATE_SEARCH_CONTENT]: handleOnUpdateSearchContent,
};

const resolve = createOnceSwitcher(VO, IDEMPOTENT);

function searchContentReducer(state = {}, action = actionInit) {
  const { type, payload } = action;
  return resolve(type)(state, payload);
}

export default searchContentReducer;
