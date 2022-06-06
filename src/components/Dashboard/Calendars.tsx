import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";

const Container = styled.div``;

export const Calendars = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date: Date) => {
    setDate(date);
  };
  return (
    <Container>
      <Calendar className="calendar" onChange={onChange} value={date} />
    </Container>
  );
};
