import React from "react";
import DatePicker from "../DatePicker";

const dateReducer = (state, action) => {
  const { type, year, month, date } = action;
  switch (type) {
    case "UPDATE_YEAR":
      return { ...state, year };
    case "UPDATE_MONTH": {
      if (month < 1) {
        return { ...state, year: year - 1, month: 12 };
      }
      if (month > 12) {
        return { ...state, year: year + 1, month: 1 };
      }

      return { ...state, month };
    }
    case "UPDATE_DATE":
      return { ...state, date };
    case "UPDATE":
      return { ...state, year, month, date };
    default:
      return state;
  }
};

const DatePickerInput = () => {
  const [currentSelectedDate, dispatch] = React.useReducer(
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
  const normalize = (value) => (value <= 9 ? `0${value}` : `${value}`);

  const parseCurrentValueToInputFormat = (year, month, date) => {
    return `${year}-${normalize(month)}-${normalize(date)}`;
  };

  const handleDateSelect = (year, month, date) =>
    dispatch({ type: "UPDATE", year, month, date });

  return (
    <>
      <div className="input-container">
        <input
          type="date"
          onChange={(e) => {
            const [year, month, date] = e.target.value.split("-");
            dispatch({
              type: "UPDATE",
              year: parseInt(year),
              month: parseInt(month),
              date: parseInt(date),
            });
          }}
          value={parseCurrentValueToInputFormat(
            currentSelectedDate.year,
            currentSelectedDate.month,
            currentSelectedDate.date
          )}
        />
        <DatePicker date={currentSelectedDate} onSelect={handleDateSelect} />
      </div>
    </>
  );
};

export default DatePickerInput;
