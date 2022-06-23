import styled from "styled-components";
import { ArrowDropDown, Visibility, VisibilityOff } from "@material-ui/icons";
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
  pointer-events: none;
`;
const Inputs = styled.input`
  width: 1060px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 18px;
  pointer-events: none;
`;

const Select = styled.select`
  width: 530px;
  border-radius: 12px;
  border: 0.2px solid #e4e4e6;
  padding: 10px;
  font-size: 18px;

  pointer-events: none;

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

export const UAct = () => {
  const showpw = (pw: string, eyeshow: string, eyehide: string) => {
    const show: any = document.getElementById(eyeshow);
    const hide: any = document.getElementById(eyehide);
    const eye: any = document.getElementById(pw);
    const type = eye.getAttribute("type") === "password" ? "text" : "password";
    eye.setAttribute("type", type);
    if (type === "password") {
      show.style.display = "flex";
      hide.style.display = "none";
    } else {
      hide.style.display = "flex";
      show.style.display = "none";
    }
  };
  return (
    <Container>
      <Title>Thông tin tài khoản</Title>
      <Row>
        <Column>
          <Name>
            Họ tên: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập họ tên"></Input>
        </Column>
        <Column>
          <Name>
            Tên đăng nhập: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập tên đăng nhập"></Input>
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Số điện thoại: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập số điện thoại"></Input>
        </Column>
        <Column>
          <Name>
            Mật khẩu: <Span>*</Span>
          </Name>
          <Input type="password" value="123456" id="pw1"></Input>
          <VisibilityOff
            className="show"
            id="show1"
            style={{
              position: "absolute",
              top: "77.5px",
              left: "1040px",
              cursor: "pointer",
            }}
            onClick={() => showpw("pw1", "show1", "hide1")}
          />
          <Visibility
            className="hide"
            id="hide1"
            style={{
              display: "none",
              position: "absolute",
              top: "77.5px",
              left: "1040px",
              cursor: "pointer",
            }}
            onClick={() => showpw("pw1", "show1", "hide1")}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Email: <Span>*</Span>
          </Name>
          <Input type="text" placeholder="Nhập email"></Input>
        </Column>
        <Column>
          <Name>
            Nhập lại mật khẩu: <Span>*</Span>
          </Name>
          <Input type="password" value="123456" id="pw2"></Input>
          <Visibility
            className="hide"
            id="hide2"
            style={{
              display: "none",
              position: "absolute",
              top: "77.5px",
              left: "1040px",
              cursor: "pointer",
            }}
            onClick={() => showpw("pw2", "show2", "hide2")}
          />
          <VisibilityOff
            className="show"
            id="show2"
            style={{
              position: "absolute",
              top: "77.5px",
              left: "1040px",
              cursor: "pointer",
            }}
            onClick={() => showpw("pw2", "show2", "hide2")}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Name>
            Vai trò: <Span>*</Span>
          </Name>
          <Select>
            <Option id="add-dv-op" selected>
              <P>Chọn vai trò</P>
            </Option>
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
        <Column>
          <Name>
            Tình trạng: <Span>*</Span>
          </Name>
          <Select>
            <Option id="add-dv-op" selected>
              <P>Hoạt động</P>
            </Option>
            <Option>Ngưng hoạt động</Option>
            <Option>Hủy</Option>
          </Select>
          <ArrowDropDown
            style={{
              color: "orange",
              position: "absolute",
              top: "65px",
              left: "490px",
              fontSize: "3rem",
            }}
          />
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
          <Link to={"/manage-account"}>
            <BCancel>Hủy bỏ</BCancel>
          </Link>
        </ButtonCancel>
        <ButtonAdd>
          <Link to={"/manage-account"}>
            <BAdd>Cập nhật</BAdd>
          </Link>
        </ButtonAdd>
      </ButtonForm>
    </Container>
  );
};
