import React, { useCallback } from "react";
import { Pagination } from "../modules/Posts/features/Pagination/Pagination";
import { SearchInput } from "../shared/components";
import { Table } from "../modules/Posts/features/Table/Table";
import { useActionCreators } from "../shared/hooks";
import { PostsActions } from "../modules/Posts/store";

export const TablePage: React.FC = () => {
  const postsActions = useActionCreators(PostsActions) as typeof PostsActions;

  const handlerForSearchInput = useCallback((value: string) => {
    postsActions.setFilteredPosts(value);
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <SearchInput onClick={handlerForSearchInput} />
        <Table />
      </div>
      <Pagination />
    </>
  );
};
