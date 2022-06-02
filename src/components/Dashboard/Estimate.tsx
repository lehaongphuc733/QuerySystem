import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 790px;
  height: 128px;
  left: 224px;
  top: 156px;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 186px;
  height: 120px;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 12px;
`;

export const Estimate = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
};
