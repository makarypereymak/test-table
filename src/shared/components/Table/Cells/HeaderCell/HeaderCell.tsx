import React from "react";
import "./HeaderCell.scss";
import { ReactComponent as SortIcon } from "../../../../assets/icons/sort.svg";
import { SortType } from "../../../../models";

type Props = {
  cell: string;
  sortColumn: string;
  sortType: SortType;
  onClick: (currentSortColumn: string) => void;
};
export const HeaderCell: React.FC<Props> = ({ cell, sortColumn, sortType, onClick }) => {
  return (
    <td className="cell-header">
      <div className="cell-header-wrapper">
        {cell}
        <button type="button" className={sortColumn === cell ? "activeSortButton sortButton" : "sortButton"} onClick={() => onClick(cell)}>
          {sortType === "asc" ? <SortIcon className="sort-icon-upper" /> : <SortIcon />}
        </button>
      </div>
    </td>
  );
};
