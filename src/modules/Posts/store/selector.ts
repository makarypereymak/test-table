import { RootState } from "../../../app/providers/storeProvider/config/store";

export class PostsSelectors {
  public static readonly postsState = (state: RootState) => state.posts;

  public static readonly currentPosts = (state: RootState) => PostsSelectors.postsState(state).currentPostsForPage;

  public static readonly pageCount = (state: RootState) => PostsSelectors.postsState(state).pageCount;

  public static readonly currentPage = (state: RootState) => PostsSelectors.postsState(state).currentPage;

  public static readonly sortType = (state: RootState) => PostsSelectors.postsState(state).sortType;

  public static readonly sortColumn = (state: RootState) => PostsSelectors.postsState(state).sortColumn;
}
