import React, { useRef } from "react";

import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

import "./SearchInput.scss";

type Props = {
  onClick: (value: string) => void;
};

export const SearchInput: React.FC<Props> = ({ onClick }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  return (
    <div className="search-input-wrapper">
      <input className="search-input" type="text" ref={searchInput} placeholder="Поиск" />
      <button
        className="search-button"
        type="button"
        onClick={() => {
          if (typeof searchInput.current?.value === "string") {
            onClick(searchInput.current?.value);
          }
        }}
      >
        <SearchIcon />
      </button>
    </div>
  );
};
