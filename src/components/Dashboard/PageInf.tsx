import styled from "styled-components";
import { MyInfo } from "./MyInfo";
import { Navbar } from "./Navbar";
import { VerticalNavLeft } from "./VerticalNavLeft";

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

export const PageInf = () => {
  return (
    <Page>
      <Wrapper>
        <VerticalNavLeft />
        <MyInfo />
        <Navbar content="Thông tin cá nhân" />
      </Wrapper>
    </Page>
  );
};
