import React from "react";
import DatePicker from "../DatePicker";
import dateReducer from "../../reducer/dateReducer";

const DatePickerInput = ({ onSelect }) => {
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

  const handleDateSelect = (year, month, date) => {
    dispatch({ type: "UPDATE", year, month, date });
    onSelect && onSelect(year, month, date);
  };

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
            onSelect && onSelect(year, month, date);
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
