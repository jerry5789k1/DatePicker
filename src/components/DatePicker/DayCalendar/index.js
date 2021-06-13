import React from "react";
import Header from "../../Shared/Header";
import HeaderCell from "../../Shared/HeaderCell";
import ControlPannel from "../../Shared/ControlPannel";
import Cell from "../../Shared/Cell";

import { useDate } from "../../../hooks/useDate";
import { DAYS, MONTHS } from "../../../constant/date";

import "./dayCalendar.scss";

const Calender = ({
  year,
  month,
  date,
  onChange,
  monthUpdater,
  modeUpdater,
}) => {
  const dates = useDate(year, month);
  const monthWording = MONTHS.find((_, i) => {
    return i + 1 === month;
  });
  const currentActiveDate = `${year}-${month}-${date}`;
  const displayDate = `${monthWording} ${year}`;

  return (
    <div className="day-calender">
      <ControlPannel
        onNextClick={() => monthUpdater(month + 1)}
        onPrevClick={() => monthUpdater(month - 1)}
        onDisplayBlockClick={modeUpdater}
      >
        {displayDate}
      </ControlPannel>

      <Header>
        {DAYS.map((value) => (
          <HeaderCell key={value}>{value}</HeaderCell>
        ))}
      </Header>
      <div className="body">
        {dates.map((date, i) => {
          return (
            <Cell
              key={`${date.dateString}-${i}`}
              active={date.dateString === currentActiveDate}
              onClick={() => onChange(date.value)}
              disable={!date.isDayOfCurrentMonth}
            >
              {date.displayValue}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};

export default Calender;
