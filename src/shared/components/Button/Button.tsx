import React from "react";

import "./Button.scss";

type Props = {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  isActive?: boolean;
};

export const Button: React.FC<Props> = ({ className = "", isActive = false, disabled = false, onClick, children }) => {
  const rootClasses = ["button"];

  if (isActive) {
    rootClasses.push("button--active");
  }

  if (className) {
    rootClasses.push(className);
  }

  return (
    <button className={rootClasses.join(" ")} type="button" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
