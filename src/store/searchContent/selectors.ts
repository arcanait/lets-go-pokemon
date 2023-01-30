import { IGetSearchContent } from "./models";

export const getSearchContent: IGetSearchContent = (state) =>
  state.searchContent.data;
