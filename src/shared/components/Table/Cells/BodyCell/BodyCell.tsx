import React from "react";

import "./BodyCell.scss";

type Props = {
  children: React.ReactNode;
};

export const BodyCell: React.FC<Props> = ({ children }) => {
  return <td className="cell-table">{children}</td>;
};
