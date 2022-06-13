import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ["01", "13", "19", "31"],
  datasets: [
    {
      label: "Số lượng",
      data: [2800, 4300, 3400, 3700, 4100, 0, 6000],
      fill: true,
      backgroundColor: `#709bf9`,
      pointBorderColor: "white",
      pointBorderWidth: 4,
      pointRadius: 6,
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: { legend: { display: false } },
  layout: { padding: { bottom: 100 } },
  scales: {
    y: {
      ticks: {
        color: "#535261",
        font: {
          size: 14,
        },
      },
      grid: {
        color: "#f4f4f5",
      },
    },
    x: {
      ticks: {
        color: "#535261",
        font: {
          size: 14,
        },
      },
    },
  },
};

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  margin-top: 30px;
  margin-left: 22px;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  margin-top: 30px;
  margin-right: 22px;
`;

const TitleLb = styled.label`
  font-size: 1.25rem;
  font-weight: 700;
`;

const TDate = styled.label``;

const LbSort = styled.label`
  font-size: 18px;
  font-weight: 500;
  margin-right: 10px;
`;

const Select = styled.select`
  outline: 0.2px solid #9c959a;
  border-radius: 12px;
  width: 100px;
  height: 50px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Option = styled.option``;

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
        <Nav>
          <Left>
            <TitleLb>Bảng thông kê theo ngày</TitleLb>
            <TDate>Tháng 11/2021</TDate>
          </Left>
          <Right>
            <LbSort>Xem theo</LbSort>
            <Select>
              <Option selected value="date">
                Ngày
              </Option>
              <Option value="week">Tuần</Option>
              <Option value="month">Tháng</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                top: "30px",
                left: "720px",
                fontSize: "3rem",
              }}
            />
          </Right>
        </Nav>
        <Line style={{ marginTop: "60px" }} data={data} options={options} />
      </Wrapper>
    </Container>
  );
};
