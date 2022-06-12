import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  border-radius: 12px;
  position: absolute;
  top: 210px;
  left: 220px;
  background-color: white;
  width: 1170px;
  height: 540px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.label`
  position: absolute;
  width: 210px;
  height: 36px;
  left: 44px;
  top: 15px;
  font-style: normal;
  font-weight: 650;
  font-size: 20px;
  line-height: 36px;
  color: #ff7506;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 40px;
  left: 40px;
`;

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const Name = styled.p`
  font-size: 14px;
`;

const FrameSV = styled.div`
  border: 0.2px solid #ffac6a;
  border-radius: 12px;
  width: 1075px;
  height: 150px;
`;

const Span = styled.span`
  color: red;
`;

const Input = styled.input`
  width: 510px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 14px;
  pointer-events: none;
`;
const Inputs = styled.input`
  width: 1060px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 14px;
  pointer-events: none;
`;

const Select = styled.select`
  width: 530px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 14px;

  /* pointer-events: none; */

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Option = styled.option`
  color: #ff7506;
`;

const P = styled.p`
  color: #89888d;
`;

export const FUpdate = () => {
  return (
    <Container>
      <Title>Thông tin thiết bị</Title>
      <Row>
        <Column>
          <Name>
            Mã thiết bị: <Span>*</Span>
          </Name>
          <Input
            type="text"
            placeholder="Nhập mã thiết bị"
            value="KIO_01"
          ></Input>
        </Column>
        <Column>
          <Name>
            Loại thiết bị: <Span>*</Span>
          </Name>
          <Select>
            {/* <Option id="add-dv-op">
              <P>Chọn loại thiết bị</P>
            </Option> */}
            <Option selected>Kiosk</Option>
            <Option>Display counter</Option>
          </Select>
          <ArrowDropDown
            style={{
              color: "orange",
              position: "absolute",
              top: "40px",
              left: "1030px",
              fontSize: "3rem",
            }}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Tên thiết bị: <Span>*</Span>
          </Name>
          <Input
            type="text"
            value="Kiosk"
            placeholder="Nhập tên thiết bị"
          ></Input>
        </Column>
        <Column>
          <Name>
            Tên đăng nhập: <Span>*</Span>
          </Name>
          <Input
            type="text"
            value="Linhkyo011"
            placeholder="Nhập tài khoản"
          ></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Địa chỉ IP: <Span>*</Span>
          </Name>
          <Input
            type="text"
            value="128.172.308"
            placeholder="Nhập mã thiết bị"
          ></Input>
        </Column>
        <Column>
          <Name>
            Mật khẩu: <Span>*</Span>
          </Name>
          <Input type="text" value="CMS" placeholder="Nhập mật khẩu"></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Dịch vụ sử dụng: <Span>*</Span>
          </Name>
          <FrameSV></FrameSV>
          {/* <Inputs type="text" placeholder="Nhập dịch vụ sử dụng"></Inputs> */}
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            <Span>*</Span> Là trường thông tin bắt buộc
          </Name>
        </Column>
      </Row>
      <ButtonForm className="dv-bcancel">
        <ButtonCancel>
          <Link to={"/device"}>
            <BCancel>Hủy bỏ</BCancel>
          </Link>
        </ButtonCancel>
        <ButtonAdd>
          <Link to={"/device"}>
            <BAdd>Cập nhật</BAdd>
          </Link>
        </ButtonAdd>
      </ButtonForm>
    </Container>
  );
};
