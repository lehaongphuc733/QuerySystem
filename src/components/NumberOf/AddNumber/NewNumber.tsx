import styled from "styled-components";
import { Close } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 150px;
  height: 50px;
  right: 260px;
  top: 0px;
  left: 600px;
  background: #ff7506;
  border-radius: 12px;
  color: #ffac6a;
  cursor: pointer;
`;

const Ten = styled.p`
  color: #ffffff;
  text-align: center;
  margin-left: 56px;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: red;
  border-radius: 12px;
  overflow: hidden;
  width: 560px;
  right: -242px;
  top: -200px;
  left: -350px;
  display: none;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 10px;
`;

const Block1 = styled.div`
  background-color: white;
`;

const Title = styled.p`
  font-size: 30px;
  color: #535261;
  font-weight: 500;
`;
const Number = styled.p`
  font-size: 45px;
  font-weight: 700;
  color: #ff7506;
`;
const Label = styled.p`
  color: #787883;
  font-size: 20px;
`;
const Span = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

type Name = {
  title: string;
};

const Block2 = styled.div`
  background-color: #ff7506;
  height: auto;
`;
const Content = styled.p`
  font-size: 26px;
  color: #ffffff;
`;

export const NewNumber = (s: Name) => {
  const handleNotice = () => {
    const formC: any = document.querySelector(Container);
    const notice: any = document.querySelector(Wrapper);
    if (formC.classList.toggle("button-notice-active")) {
      notice.style.display = "flex";
    } else {
      notice.style.display = "none";
    }
  };
  return (
    <Container onClick={() => handleNotice()}>
      <Ten>In số</Ten>
      <Wrapper>
        <Close
          style={{ position: "absolute", left: "510px", fontSize: "40px" }}
        />
        <Block1>
          <Title>Số thứ tự đã cấp</Title>
          <Number>2001201</Number>
          <Label>
            DV: Khám răng hàm mặt <Span>(tại quầy số 1)</Span>
          </Label>
        </Block1>
        <Block2>
          <Content>Thời gian cấp: 09:30 11/10/2021</Content>
          <Content>Hạn sử dụng: 17:30 11/10/2021</Content>
        </Block2>
      </Wrapper>
    </Container>
  );
};
