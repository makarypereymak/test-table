import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { initialState } from "./state";
import { SortColumn } from "../models";
import { Post, SortType } from "../../../shared/models";
import { sorting } from "../../../shared/utils";

export const postsSlice = createSlice({
  name: "carePlanForm",
  initialState: initialState(),
  reducers: {
    setStateAfterFirstFetching(state, action: PayloadAction<Post[]>) {
      state.allPosts = action.payload;
      state.filteredPosts = action.payload;
      state.pageCount = Math.ceil(action.payload.length / state.pageSize);
      state.currentPostsForPage = action.payload.slice(0, state.pageSize);
    },

    setCurrentPosts(state) {
      const endIndex = state.currentPage * state.pageSize;
      state.currentPostsForPage = state.filteredPosts.slice(endIndex - state.pageSize, endIndex);
    },

    setFilteredPosts(state, action: PayloadAction<string>) {
      const newFilteredPosts = state.allPosts?.filter((item) => {
        const itemWithoutUserId = {
          ...item
        };

        //@ts-ignore
        delete itemWithoutUserId.userId;

        return Object.values(itemWithoutUserId)
          ?.map((it) => String(it))
          ?.some((i) => i.includes(action.payload));
      });
      state.filteredPosts = newFilteredPosts;
      state.currentPage = 1;
      state.pageCount = Math.ceil(newFilteredPosts.length / state.pageSize);
      state.currentPostsForPage = newFilteredPosts.slice(0, state.pageSize);
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },

    setSortColumn(state, action: PayloadAction<SortColumn>) {
      state.sortColumn = action.payload;
    },

    setSortType(state, action: PayloadAction<SortType>) {
      state.sortType = action.payload;
    },

    setCurrentPostsAfterChangedSortOption(state) {
      const newFilteredPosts = state.filteredPosts.sort((a, b) => sorting(a, b, state.sortType, state.sortColumn));
      state.filteredPosts = newFilteredPosts;
      state.currentPage = 1;
      state.currentPostsForPage = newFilteredPosts.slice(0, state.pageSize);
    }
  }
});

export const { reducer: PostsReducer, actions: PostsActions } = postsSlice;
