import { TablePage } from "../../../../pages";
import React from "react";
import { linksInfo, LinkItem } from "../../../../shared/router/routes";

type TRoute = {
  element: React.ReactNode;
} & LinkItem;

export const PUBLIC_ROUTES: TRoute[] = [
  {
    ...linksInfo.posts,
    element: <TablePage />
  }
];
