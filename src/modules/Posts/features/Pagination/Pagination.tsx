import React from "react";
import { PostsSelectors } from "../../store";
import { useActionCreators, useAppSelector } from "../../../../shared/hooks";
import "./Pagination.scss";
import { PostsActions } from "../../store";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../shared/components/Button/Button";
import { routePath } from "../../../../shared/router/routes";

export const Pagination: React.FC = () => {
  const pageCount = useAppSelector(PostsSelectors.pageCount);
  const postsActions = useActionCreators(PostsActions) as typeof PostsActions;
  const currentPage = useAppSelector(PostsSelectors.currentPage);
  const navigate = useNavigate();

  const getPagination = () => {
    if (pageCount !== null) {
      const content = [];
      for (let i = 1; i <= pageCount; i++) {
        content.push(
          <li key={`${i}-page`}>
            <Button
              isActive={currentPage === i}
              onClick={() => {
                postsActions.setCurrentPage(i);
                navigate(`${routePath.posts}${i}`);
              }}
            >
              {i}
            </Button>
          </li>
        );
      }
      return content;
    }
  };

  return (
    <div className="pagination-wrapper">
      <Button
        disabled={currentPage <= 1}
        onClick={() => {
          postsActions.setCurrentPage(currentPage - 1);
          navigate(`${routePath.posts}${currentPage - 1}`);
        }}
      >
        Назад
      </Button>
      <ul className="pagination">{getPagination()}</ul>
      <Button
        disabled={currentPage === pageCount}
        onClick={() => {
          postsActions.setCurrentPage(currentPage + 1);
          navigate(`${routePath.posts}${currentPage + 1}`);
        }}
      >
        Далее
      </Button>
    </div>
  );
};
