import React from "react";
import cx from "classnames";
import { ReactComponent as ChevronRight } from "../../../svg/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../../svg/chevron-left.svg";
import "./controlPanel.scss";

const ControlPannel = ({
  onPrevClick,
  onNextClick,
  onDisplayBlockClick,
  children,
}) => {
  return (
    <div className="controller">
      <div className="prev" onClick={onPrevClick}>
        <ChevronLeft width={20} height={20} />
      </div>
      <div
        onClick={onDisplayBlockClick}
        className={cx("display-block", { disabled: !onDisplayBlockClick })}
      >
        {children}
      </div>
      <div className="next" onClick={onNextClick}>
        <ChevronRight width={20} height={20} />
      </div>
    </div>
  );
};

export default ControlPannel;
