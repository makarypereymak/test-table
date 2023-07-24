import React from "react";
import "./THeader.scss";
import { SortType } from "../../../../models";
import { HeaderCell } from "../../Cells/HeaderCell/HeaderCell";

type Props = {
  cells: string[];
  sortColumn: string;
  sortType: SortType;
  onClick: (currentSortColumn: string) => void;
};
export const THeader: React.FC<Props> = ({ cells, sortColumn, sortType, onClick }) => {
  return (
    <thead className="table-header">
      <tr>
        {cells.map((cell) => {
          return <HeaderCell key={`${cell}-column`} cell={cell} sortColumn={sortColumn} sortType={sortType} onClick={onClick} />;
        })}
      </tr>
    </thead>
  );
};
