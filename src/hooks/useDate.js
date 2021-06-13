const getDateString = (year, month, day) => `${year}-${month}-${day}`;

export const useDate = (year, month) => {
  const date = new Date();
  const currentMonthStartTime = new Date(year, month - 1, 1);
  const currentMonthEndTime = new Date(year, month, 0);
  const lastDateOfCurrentMonth = currentMonthEndTime.getDate();

  const currentMonthStartDay = currentMonthStartTime.getDay();

  const lastDayOfPrevMonth = new Date(year, month - 1, 0).getDate();

  // Get the date we need to display for prevMonth
  const displayDatesOfPrevMonth = [];
  for (let i = currentMonthStartDay; i > 0; i--) {
    // handle edge of the year
    let currentYear = year;
    let currentMonth = month - 1;
    let date = lastDayOfPrevMonth - i + 1;

    if (month === 1) {
      currentYear--;
      currentMonth = 12;
    }

    displayDatesOfPrevMonth.push({
      value: date,
      displayValue: lastDayOfPrevMonth - i + 1,
      isDayOfCurrentMonth: false,
      dateString: getDateString(currentYear, currentMonth, date),
    });
  }

  const displayDates = Array.from(
    { length: lastDateOfCurrentMonth },
    (v, i) => {
      let date = i + 1;

      return {
        value: date,
        displayValue: i + 1,
        isDayOfCurrentMonth: true,
        dateString: getDateString(year, month, date),
      };
    }
  );

  const extraDay = 42 - (displayDatesOfPrevMonth.length + displayDates.length);

  const displayDatesOfNextMonth = [];
  for (let i = 1; i <= extraDay; i++) {
    // handle edge of the year
    let currentYear = year;
    let currentMonth = month + 1;

    if (month === 12) {
      currentYear++;
      currentMonth = 1;
    }

    displayDatesOfNextMonth.push({
      value: i,
      displayValue: i,
      isDayOfCurrentMonth: false,
      dateString: getDateString(currentYear, currentMonth, date),
    });
  }

  return [
    ...displayDatesOfPrevMonth,
    ...displayDates,
    ...displayDatesOfNextMonth,
  ];
};
