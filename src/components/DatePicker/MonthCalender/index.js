import React from "react";
import ControlPannel from "../../Shared/ControlPannel";
import Cell from "../../Shared/Cell";

import { MONTHS } from "../../../constant/date";

import "./monthCalender.scss";

const MonthCalender = ({ year, month, onChange, yearUpdater, modeUpdater }) => {
  const yearToNum = parseInt(year);

  return (
    <div className="month-calender">
      <ControlPannel
        onNextClick={() => yearUpdater(`${yearToNum + 1}`)}
        onPrevClick={() => yearUpdater(`${yearToNum - 1}`)}
        onDisplayBlockClick={modeUpdater}
      >
        {year}
      </ControlPannel>
      <div className="body">
        {MONTHS.map((mon, index) => {
          return (
            <Cell
              key={mon}
              className="month-cell"
              active={month === index + 1}
              onClick={() => onChange(index + 1)}
            >
              {mon}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};

export default MonthCalender;
