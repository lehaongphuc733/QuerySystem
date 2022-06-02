import styled from "styled-components";

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
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};
