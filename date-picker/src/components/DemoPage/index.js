import React from "react";

import DatePicker from "../DatePicker";
import DatePickerInput from "../DatePickerInput";

import "./demoPage.scss";

const DemoPage = () => {
  return (
    <div>
      Demo Page
      <div className="wrapper">
        <DatePicker />
      </div>
      <div className="wrapper">
        <DatePickerInput />
      </div>
    </div>
  );
};

export default DemoPage;
