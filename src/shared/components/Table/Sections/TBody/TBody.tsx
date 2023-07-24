import React from "react";

import "./TBody.scss";
import { Post } from "../../../../models";
import { BodyCell } from "../../Cells/BodyCell/BodyCell";

type Props = {
  posts: Post[];
};

export const TBody: React.FC<Props> = ({ posts }) => {
  return (
    <tbody>
      {posts?.length > 0 &&
        [...posts].map((item) => {
          return (
            <tr className="table-row" key={`${item.id}-row-body`}>
              <BodyCell>{item.id}</BodyCell>
              <BodyCell>{item.title}</BodyCell>
              <BodyCell>{item.body}</BodyCell>
            </tr>
          );
        })}
    </tbody>
  );
};
