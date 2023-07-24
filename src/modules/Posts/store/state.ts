import { PostState } from "./model";

const DEFAULT_PAGE_SIZE = 10;

export const initialState = (): PostState => {
  return {
    searchingText: "",
    pageCount: null,
    currentPage: 1,
    allPosts: [],
    filteredPosts: [],
    currentPostsForPage: [],
    pageSize: DEFAULT_PAGE_SIZE,
    sortType: "asc",
    sortColumn: "id"
  };
};
