import styled from "styled-components";
import { Navbar } from "../../Dashboard/Navbar";
import { VerticalNavLeft } from "../../Dashboard/VerticalNavLeft";
import { FDevice } from "./FDevice";

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
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 36px;
  color: #ff7506;
`;
export const DetailDevice = () => {
  return (
    <Page>
      <Wrapper>
        <Label>Quản lý thiết bị</Label>
        <VerticalNavLeft />
        <FDevice />
        <Navbar content="Chi tiết thiết bị" />
      </Wrapper>
    </Page>
  );
};
