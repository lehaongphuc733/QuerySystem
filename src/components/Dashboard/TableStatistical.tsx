import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Label } from "@material-ui/icons";
// import thu vien r
const Container = styled.div`
  position: absolute;
  width: 791px;
  height: 484px;
  left: 224px;
  top: 296px;
  filter: drop-shadow(2px 2px 15px rgba(70, 64, 67, 0.1));
  border-radius: 8px;
  background: #ffffff;
`;

const Wrapper = styled.div``;

export const TableStatistical = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["monday", "tueday", "wednesday", "thursday", "friday"],
      datasets: [
        {
          label: "level of thiccness",
          date: [32, 45, , 12, 76, , 69],
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <Container>
      <Wrapper>
        {/* <Doughnut data={chartData} /> */}
        {/* <Bar
          data={data}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
          }}
        /> */}
      </Wrapper>
    </Container>
  );
};
