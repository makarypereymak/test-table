import { SortType, Post } from "../../../shared/models";
import { SortColumn } from "../models";

export interface PostState {
  searchingText: string;
  pageCount: number | null;
  currentPage: number;
  allPosts: Post[];
  filteredPosts: Post[];
  currentPostsForPage: Post[];
  pageSize: number;
  sortType: SortType;
  sortColumn: SortColumn;
}
