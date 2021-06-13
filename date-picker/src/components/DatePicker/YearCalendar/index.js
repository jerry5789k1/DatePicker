import React from "react";
import ControlPannel from "../../Shared/ControlPannel";
import Cell from "../../Shared/Cell";

import useDecade from "../../../hooks/useDecade";

import "./yearCalender.scss";

export const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const YearCalender = ({ year, onChange }) => {
  const { duration, startYear, endYear, setDecadeStartYear } = useDecade(year);

  return (
    <div className="year-calender">
      <ControlPannel
        onNextClick={() => setDecadeStartYear((startYear / 10 + 1) * 10)}
        onPrevClick={() => setDecadeStartYear((startYear / 10 - 1) * 10)}
      >
        {`${startYear} - ${endYear}`}
      </ControlPannel>
      <div className="body">
        {duration.map((y) => {
          return (
            <Cell
              className="year-cell"
              active={y.value === year}
              onClick={() => onChange(y.value)}
              disable={!y.isInCurrentDecade}
            >
              {y.value}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};

export default YearCalender;
