export type searchContentType = {
  data: string;
};

interface IState {
  searchContent: searchContentType;
}

export type IGetSearchContent = (state: IState) => string;
