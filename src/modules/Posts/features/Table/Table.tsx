import React, { useEffect, useCallback } from "react";
import { PostsController } from "../../service";
import { useActionCreators, useAppSelector } from "../../../../shared/hooks";
import { PostsActions } from "../../store";
import { PostsSelectors } from "../../store";
import "./Table.scss";

import { THeader, TBody } from "../../../../shared/components";
import { SortColumn } from "../../models";

const COLUMNS_FOR_RENDER: SortColumn[] = ["id", "title", "body"];

export const Table: React.FC = () => {
  const postsActions = useActionCreators(PostsActions) as typeof PostsActions;
  const currentPosts = useAppSelector(PostsSelectors.currentPosts);
  const currentPage = useAppSelector(PostsSelectors.currentPage);
  const sortType = useAppSelector(PostsSelectors.sortType);
  const sortColumn = useAppSelector(PostsSelectors.sortColumn);

  useEffect(() => {
    const controller = new AbortController();

    PostsController.gettingPosts(controller).then((result) => {
      postsActions.setStateAfterFirstFetching(result?.data);
    });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    postsActions.setCurrentPosts();
  }, [currentPage]);

  useEffect(() => {
    postsActions.setCurrentPostsAfterChangedSortOption();
  }, [sortType]);

  useEffect(() => {
    postsActions.setCurrentPostsAfterChangedSortOption();
  }, [sortColumn]);

  const tableCellHandler = useCallback(
    (currentSortColumn: SortColumn) => {
      if (sortType === "asc") {
        postsActions.setSortType("desc");
      } else {
        postsActions.setSortType("asc");
      }

      if (sortColumn !== currentSortColumn) {
        postsActions.setSortColumn(currentSortColumn);
      }
    },
    [sortType, sortColumn]
  );

  return (
    <table className="table">
      <THeader
        cells={COLUMNS_FOR_RENDER}
        sortColumn={sortColumn}
        sortType={sortType}
        onClick={tableCellHandler as (currentSortColumn: string) => void}
      />
      <TBody posts={currentPosts} />
    </table>
  );
};
