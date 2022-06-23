import styled from "styled-components";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDropDown,
  Search,
  Edit,
  Replay,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 165px;
  left: 220px;
  flex-direction: column;
  width: 1200px;
  height: 565px;
`;

const Block1 = styled.div``;
const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-left: 20px;
  color: #ff780c;
`;

const Block2 = styled.div`
  display: flex;
  flex-direction: row;
`;
const BLeft = styled.div`
  margin-left: 20px;
  /* position: absolute;
  top: 120px;
  left: 230px; */
`;
const Name = styled.p``;
const Span = styled.span`
  color: red;
`;
const Input = styled.input`
  width: 555px;
  height: 35px;
  padding: 5px;
  font-size: 14px;
  border: 0.2px solid #9c959a;
  border-radius: 12px;
  pointer-events: none;
`;
const BRight = styled.div`
  margin-left: 20px;
`;
const NameR = styled.p``;
const InputR = styled.textarea`
  font-size: 14px;
  padding: 12px;
  padding: 5px;
  pointer-events: none;
  width: 555px;
  height: 135px;
  border: 0.2px solid #9c959a;
  border-radius: 12px;
`;

const Block3 = styled.div``;
const B2Left = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  /* width: 500px; */
`;
const FormRadio = styled.div`
  display: flex;
  flex-direction: column;
`;
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Number1 = styled.div`
  border: 0.1px solid #9c959a;
  border-radius: 12px;
  width: 55px;
  position: absolute;
  top: 330px;
  left: 200px;
  height: 40px;
  text-align: left;
`;
const LNumber1 = styled.label`
  position: absolute;
  top: 6.5px;
  left: 10px;
`;
const LNumber2 = styled.label`
  position: absolute;
  top: 6.5px;
  left: 10px;
`;
const Number2 = styled.div`
  border-radius: 12px;
  border: 0.1px solid #9c959a;
  width: 55px;
  position: absolute;
  top: 330px;
  left: 298.5px;
  height: 40px;
  text-align: left;
`;
const Number3 = styled.div`
  border-radius: 12px;
  border: 0.1px solid #9c959a;
  width: 55px;
  position: absolute;
  top: 375px;
  left: 200px;
  height: 40px;
  text-align: left;
`;
const LNumber3 = styled.label`
  position: absolute;
  top: 6.5px;
  left: 10px;
`;
const Number4 = styled.div`
  border-radius: 12px;
  border: 0.1px solid #9c959a;
  width: 55px;
  position: absolute;
  top: 415px;
  left: 200px;
  height: 40px;
  text-align: left;
`;
const LNumber4 = styled.label`
  position: absolute;
  top: 6.5px;
  left: 10px;
`;
const Lb = styled.label`
  font-weight: 400;
  margin-left: 10px;
  font-size: 18px;
`;
const NCon = styled.p`
  margin-left: 20px;
  margin-top: 4.7px !important;
`;
const RadioI = styled.input`
  width: 25px;
  height: 25px;
  margin-top: 10px;
  outline: 0.2px solid #0761ca;
  border-radius: 12px;
`;
const B2Right = styled.div``;

const Block4 = styled.div`
  margin-left: 20px;
  margin-top: -15px;
`;
const PBl4 = styled.p``;

const ButtonForm = styled.div`
  width: 1200px;
  margin-top: 10px;
  display: flex;
  position: absolute;
  top: 540px;
  text-align: center;
`;
const ButtonCancel = styled.div`
  margin-left: 400px;

  & :hover {
    cursor: pointer;
  }
`;
const ButtonAdd = styled.div`
  margin-left: 30px;
  & :hover {
    cursor: pointer;
  }
`;

const BAdd = styled.button`
  background-color: #ff9138;
  border: none;
  color: #fffcfa;
  border-radius: 12px;
  width: 150px;
  height: 50px;

  & :hover {
    cursor: pointer;
  }
`;

const BCancel = styled.button`
  border-radius: 12px;
  border: 0.1px solid #ff9138;
  width: 150px;
  color: #ff9138;
  background-color: #fff2e7;
  height: 50px;
`;

export const AService = () => {
  return (
    <Container>
      <Block1>
        <Title>Thông tin dịch vụ</Title>
      </Block1>
      <Block2>
        <BLeft>
          <Name>
            Mã dịch vụ: <Span>*</Span>
          </Name>
          <Input type="text" value="201"></Input>
          {/* // */}
          <Name>
            Tên dịch vụ: <Span>*</Span>
          </Name>
          <Input type="text" value="Khám tim mạch"></Input>
        </BLeft>
        <BRight>
          <NameR>Mô tả: </NameR>
          <InputR value="Mô tả dịch vụ"></InputR>
        </BRight>
      </Block2>
      <Block3>
        <Title>Quy tắc cấp số</Title>
        <B2Left>
          <FormRadio>
            <RadioI type="checkbox" value="Tăng tự động từ: "></RadioI>
            <RadioI type="checkbox" value="Tăng tự động từ: "></RadioI>
            <RadioI type="checkbox" value="Tăng tự động từ: "></RadioI>
            <RadioI type="checkbox" value="Tăng tự động từ: "></RadioI>
          </FormRadio>
          <FormContent>
            <NCon>Tăng tự động từ: </NCon>
            <NCon>Prefix: </NCon>
            <NCon>Surfix: </NCon>
            <NCon>Reset mỗi ngày: </NCon>
          </FormContent>
        </B2Left>
      </Block3>
      <Number1>
        <LNumber1>0001</LNumber1>
      </Number1>
      <Lb style={{ position: "absolute", top: "336.5px", left: "252.5px" }}>
        đến
      </Lb>
      <Number2>
        <LNumber2>9999</LNumber2>
      </Number2>
      <Number3>
        <LNumber3>0001</LNumber3>
      </Number3>
      <Number4>
        <LNumber4>0001</LNumber4>
      </Number4>
      <Block4>
        <PBl4>
          <Span>* </Span> Là trường thông tin bắt buộc
        </PBl4>
      </Block4>
      <ButtonForm className="dv-bcancel">
        <ButtonCancel>
          <Link to={"/services"}>
            <BCancel>Hủy bỏ</BCancel>
          </Link>
        </ButtonCancel>
        <ButtonAdd>
          <Link to={"/services"}>
            <BAdd>Thêm dịch vụ</BAdd>
          </Link>
        </ButtonAdd>
      </ButtonForm>
    </Container>
  );
};
