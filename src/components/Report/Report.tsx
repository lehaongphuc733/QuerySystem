import styled from "styled-components";
import { VerticalNavLeft } from "../Dashboard/VerticalNavLeft";
import { Navbar } from "./../Dashboard/Navbar";
import { ReportStatiscal } from "./ReportStatiscal";

const Page = styled.div`
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 810px;
  background: #f7f7f7;
  border-radius: 16px;
  margin: auto;
`;

const Label = styled.label`
  position: absolute;
  width: 210px;
  height: 36px;
  left: 224px;
  top: 104px;
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 36px;
  color: black;
`;

export const Report = () => {
  return (
    <Page>
      <Wrapper>
        <Label>Chọn thời gian</Label>
        <VerticalNavLeft />
        <ReportStatiscal />
        <Navbar content="Lập báo cáo" />
      </Wrapper>
    </Page>
  );
};
