import React from "react";
import DayCalender from "./DayCalender";
import MonthCalender from "./MonthCalender";
import YearCalender from "./YearCalendar";

import "./datePicker.scss";

const dateReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_YEAR":
      return { ...state, year: action.year };
    case "UPDATE_MONTH": {
      if (action.month < 1) {
        return { ...state, year: state.year - 1, month: 12 };
      }
      if (action.month > 12) {
        return { ...state, year: state.year + 1, month: 1 };
      }

      return { ...state, month: action.month };
    }
    case "UPDATE_DATE":
      return { ...state, date: action.date };
    default:
      return state;
  }
};

const DatePicker = ({
  onSelect,
  date: {
    year: controlledYear,
    month: controlledMonth,
    date: controlledDate,
  } = {},
}) => {
  const [state, dispatch] = React.useReducer(
    dateReducer,
    { year: null, month: null, date: null },
    () => {
      const date = new Date();
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
      };
    }
  );
  const [mode, setMode] = React.useState("DATE");

  const isControlled =
    controlledYear && controlledMonth && controlledDate && onSelect;
  let yearState = isControlled ? controlledYear : state.year;
  let monthState = isControlled ? controlledMonth : state.month;
  let dateState = isControlled ? controlledDate : state.date;

  const dateUpdater = (date) => {
    if (!isControlled) dispatch({ type: "UPDATE_DATE", date });
    onSelect && onSelect(yearState, monthState, date);
  };
  const monthUpdater = (month) => {
    if (!isControlled) dispatch({ type: "UPDATE_MONTH", month });
    onSelect && onSelect(yearState, month, dateState);
    setMode("DATE");
  };
  const yearUpdater = (year) => {
    if (!isControlled) dispatch({ type: "UPDATE_YEAR", year });
    onSelect && onSelect(year, monthState, dateState);
    setMode("MONTH");
  };

  return (
    <div className="date-picker-container">
      <div className="calender-container">
        {mode === "DATE" ? (
          <DayCalender
            year={yearState}
            month={monthState}
            date={dateState}
            onChange={dateUpdater}
            monthUpdater={monthUpdater}
            modeUpdater={() => setMode("MONTH")}
          />
        ) : null}
        {mode === "MONTH" ? (
          <MonthCalender
            year={yearState}
            month={monthState}
            date={dateState}
            onChange={monthUpdater}
            yearUpdater={yearUpdater}
            modeUpdater={() => setMode("YEAR")}
          />
        ) : null}
        {mode === "YEAR" ? (
          <YearCalender
            year={yearState}
            month={monthState}
            date={dateState}
            onChange={yearUpdater}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DatePicker;
