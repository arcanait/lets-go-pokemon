import SEARCH_CONTENT from "./types";

const { ON_UPDATE_SEARCH_CONTENT } = SEARCH_CONTENT;

const updateSearchContent = (payload: any) => ({
  type: ON_UPDATE_SEARCH_CONTENT,
  payload,
});

const resetSearchContent = () => ({
  type: ON_UPDATE_SEARCH_CONTENT,
  payload: { data: "" },
});

export { updateSearchContent, resetSearchContent };
