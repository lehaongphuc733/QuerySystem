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
const A = styled.div`
  display: flex;
`;
const B = styled.div`
  display: flex;
`;
const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: -20px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-top: 0px;
`;
const InputCheck = styled.input`
  width: 25px;
  height: 25px;
  margin-top: 10px;
  outline: 0.2px solid #0761ca;
  border-radius: 12px;
`;
const LCon = styled.p`
  margin-left: 20px;
  margin-top: px;
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
const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff2e7;
  border-radius: 12px;
  position: absolute;
  top: 120px;
  width: 590px;
  height: 515px;
`;
const NameR = styled.p``;
const TextArea = styled.textarea`
  width: 555px;
  height: 135px;
  font-size: 14px;
  pointer-events: none;
  border-radius: 12px;
`;

const InputR = styled.input`
  font-size: 14px;
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
  top: 640px;
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

export const ARole = () => {
  return (
    <Container>
      <Block1>
        <Title>Thông tin vai trò</Title>
      </Block1>
      <Block2>
        <BLeft>
          <Name>
            Tên vai trò: <Span>*</Span>
          </Name>
          <Input type="text" value="Kế toán"></Input>
          {/* // */}
          <Name>
            Mô tả: <Span>*</Span>
          </Name>
          <TextArea rows={1} cols={75}>
            Chịu trách nhiệm thống kê số liệu và kiểm toán
          </TextArea>
        </BLeft>
        <BRight>
          <NameR>
            Phân quyền chức năng: <Span>*</Span>
          </NameR>
          <Form>
            <Title>Nhóm chức năng A</Title>
            <A>
              <CheckBox>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>
                  <LCon>Tất cả</LCon>
                </Content>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>
                  <LCon>Chức năng x</LCon>
                </Content>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>{" "}
                  <LCon>Chức năng y</LCon>
                </Content>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>
                  <LCon>Chức năng z</LCon>
                </Content>
              </CheckBox>
            </A>
            <Title>Nhóm chức năng B</Title>
            <B>
              <CheckBox>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>
                  <LCon>Tất cả</LCon>
                </Content>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>
                  <LCon>Chức năng x</LCon>
                </Content>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>{" "}
                  <LCon>Chức năng y</LCon>
                </Content>
                <Content>
                  <InputCheck type="checkbox"></InputCheck>
                  <LCon>Chức năng z</LCon>
                </Content>
              </CheckBox>
            </B>
          </Form>
        </BRight>
      </Block2>
      <Block4>
        <PBl4>
          <Span>* </Span> Là trường thông tin bắt buộc
        </PBl4>
      </Block4>
      <ButtonForm className="dv-bcancel">
        <ButtonCancel>
          <Link to={"/manage-role"}>
            <BCancel>Hủy bỏ</BCancel>
          </Link>
        </ButtonCancel>
        <ButtonAdd>
          <Link to={"/manage-role"}>
            <BAdd>Thêm</BAdd>
          </Link>
        </ButtonAdd>
      </ButtonForm>
    </Container>
  );
};
