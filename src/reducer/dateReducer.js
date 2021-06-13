const dateReducer = (state, action) => {
  const { type, year, month, date } = action;
  switch (type) {
    case "UPDATE_YEAR":
      return { ...state, year };
    case "UPDATE_MONTH": {
      if (month < 1) {
        return { ...state, year: state.year - 1, month: 12 };
      }
      if (month > 12) {
        return { ...state, year: state.year + 1, month: 1 };
      }

      return { ...state, month };
    }
    case "UPDATE_DATE":
      return { ...state, date };
    case "UPDATE":
      if (month < 1) {
        return { ...state, year: year - 1, month: 12 };
      }
      if (month > 12) {
        return { ...state, year: year + 1, month: 1 };
      }
      return { ...state, year, month, date };
    default:
      return state;
  }
};

export default dateReducer;
