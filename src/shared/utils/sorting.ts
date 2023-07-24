import { SortType } from "../models";

/* eslint-disable */
export const sorting = (a: Record<string, any>, b: Record<string, any>, sortType: SortType, sortColumn: string) => {
  if (a[sortColumn] > b[sortColumn]) {
    return sortType === "asc" ? 1 : -1;
  } else {
    return sortType === "asc" ? -1 : 1;
  }
};
