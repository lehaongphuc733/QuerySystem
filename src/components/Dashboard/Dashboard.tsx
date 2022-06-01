import styled from "styled-components";
import { Navbar } from "./Navbar";
import { VerticalNavLeft } from "./VerticalNavLeft";
import { VerticalNavRight } from "./VerticalNavRight";

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
  width: 182px;
  height: 36px;
  left: 224px;
  top: 104px;
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 36px;
  color: #ff7506;
`;

export const Dashboard = () => {
  return (
    <Page>
      <Wrapper>
        <Label>Biểu đồ cấp số</Label>
        <VerticalNavLeft />
        <VerticalNavRight />
        <Navbar content="Dashboard" />
      </Wrapper>
    </Page>
  );
};
