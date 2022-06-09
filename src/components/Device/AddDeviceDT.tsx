import styled from "styled-components";
import { ArrowDropDown } from "@material-ui/icons";

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

const Name = styled.p`
  font-size: 20px;
`;

const Span = styled.span`
  color: red;
`;

const Input = styled.input`
  width: 510px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 18px;
`;

const Select = styled.select`
  width: 530px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 18px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Option = styled.option``;

export const AddDeviceDT = () => {
  return (
    <Container>
      <Title>Thông tin thiết bị</Title>
      <Row>
        <Column>
          <Name>
            Mã thiết bị: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập mã thiết bị"></Input>
        </Column>
        <Column>
          <Name>
            Loại thiết bị: <Span>*</Span>
          </Name>
          <Select>
            <Option selected>Chọn loại thiết bị</Option>
            <Option>Kiosk</Option>
            <Option>Display counter</Option>
          </Select>
          <ArrowDropDown
            style={{
              color: "orange",
              position: "absolute",
              top: "65px",
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
          <Input type="text" placeholder="Nhập tên thiết bị"></Input>
        </Column>
        <Column>
          <Name>
            Tên đăng nhập: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập tài khoản"></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Địa chỉ IP: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập mã thiết bị"></Input>
        </Column>
        <Column>
          <Name>
            Mật khẩu: <Span>*</Span>
          </Name>
          <Input type="password" placeholder="Nhập mật khẩu"></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Dịch vụ sử dụng: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập dịch vụ sử dụng"></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            <Span>*</Span> Là trường thông tin bắt buộc
          </Name>
        </Column>
      </Row>
    </Container>
  );
};
