import React from "react";

const useDecade = (initYear) => {
  const [decadeStartYear, setDecadeStartYear] = React.useState(() => {
    // When init Year is on the Edge of decade duration,
    if (Math.floor(initYear / 10) !== Math.floor((initYear - 1) / 10)) {
      return Math.floor(initYear / 10) * 10 - 9;
    }

    return Math.floor(initYear / 10) * 10 + 1;
  });
  const decadeEndYear = decadeStartYear + 9;
  const displayYears = [];

  for (let i = decadeStartYear; i <= decadeEndYear; i++) {
    displayYears.push({
      value: i,
      isInCurrentDecade: true,
    });
  }

  return {
    duration: [
      { value: decadeStartYear - 1, isInCurrentDecade: false },
      ...displayYears,
      { value: decadeEndYear + 1, isInCurrentDecade: false },
    ],
    startYear: decadeStartYear,
    endYear: decadeEndYear,
    setDecadeStartYear: setDecadeStartYear,
  };
};

export default useDecade;
