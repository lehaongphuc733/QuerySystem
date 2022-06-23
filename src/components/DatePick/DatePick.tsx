import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styled from "styled-components";

interface DPick {}

export const DatePick = () => {
  // const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date: Date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      showYearDropdown
    />
  );
};
