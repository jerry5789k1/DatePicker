import React from "react";
import cx from "classnames";
import "./cell.scss";

const Cell = ({
  children,
  className,
  active,
  disable,
  onClick,
  ...restProps
}) => {
  return (
    <div
      {...restProps}
      onClick={() => {
        if (disable) return;
        onClick();
      }}
      className={cx("cell", {
        [className]: className,
        active,
        disable,
      })}
    >
      {children}
    </div>
  );
};

export default Cell;
