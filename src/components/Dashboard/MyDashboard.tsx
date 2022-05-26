import styled from "styled-components";
import logo from "../../components/assert/logo_trangchu.jpg";
import { Link } from "react-router-dom";
import {
  Dashboard,
  Tv,
  QuestionAnswer,
  ViewStream,
  Assessment,
  ExitToApp,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  height: 59.5rem;
`;

const NavLeft = styled.div`
  background-color: #ffffff;
  flex: 2.5;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 5rem;
  height: 15rem;
  width: 15rem;
`;

const Wrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 18px;
  text-decoration: none;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  margin-top: 12px;
  text-align: left;
  border: none;
  background-color: #ffffff;
  color: #a3a2a9;
  cursor: pointer;
  margin-left: 18px;
  font-size: 1.5rem;

  & :hover {
    background-color: #fff2e7;
    color: #ff923b;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  transform: translateX(30px);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & :hover {
    display: block;
  }
`;

const NavRight = styled.div`
  background-color: orange;
  flex: 7.5;
`;

const Header = styled.div``;

export const MyDashboard = () => {
  return (
    <Container>
      <NavLeft>
        <Link
          to={"/logo"}
          style={{
            marginTop: "24px",
            textDecoration: "none",
            fontSize: "2rem",
          }}
        >
          <Image src={logo} />
        </Link>
        <Wrapper>
          <Button>
            <Link
              to={"/#"}
              style={{
                marginTop: "24px",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              <Dashboard style={{ color: "#b4b4bb" }} />
              <Button style={{ width: "80%" }}>Dashboard</Button>
            </Link>
          </Button>
          <Button>
            <Link
              to={"/#"}
              style={{
                marginTop: "24px",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              <Tv style={{ color: "#b4b4bb" }} />
              <Button style={{ width: "80%" }}>Thiết bị</Button>
            </Link>
          </Button>
          <Button>
            <Link
              to={"/#"}
              style={{
                marginTop: "24px",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              <QuestionAnswer style={{ color: "#b4b4bb" }} />
              <Button style={{ width: "80%" }}>Dịch vụ</Button>
            </Link>
          </Button>
          <Button>
            <Link
              to={"/#"}
              style={{
                marginTop: "24px",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              <ViewStream style={{ color: "#b4b4bb" }} />
              <Button style={{ width: "80%" }}>Cấp số</Button>
            </Link>
          </Button>
          <Button>
            <Link
              to={"/#"}
              style={{
                marginTop: "24px",
                textDecoration: "none",
                fontSize: "2rem",
              }}
            >
              <Assessment style={{ color: "#b4b4bb" }} />
              <Button style={{ width: "80%" }}>Báo cáo</Button>
            </Link>
          </Button>
          <Dropdown>
            <Button>Cài đặt hệ thống</Button>
            <DropdownContent>
              <Link to={"/#"}>
                <Label>Quản lý vai trò</Label>
              </Link>
              <Link to={"/#"}>
                <Label>Quản lý tài khoản</Label>
              </Link>
              <Link to={"/#"}>
                <Label>Nhật ký người dùng</Label>
              </Link>
            </DropdownContent>
          </Dropdown>
          <Button
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30%",
              backgroundColor: "#fff2e7",
              padding: "20px",
              color: "#ff9946",
            }}
          >
            <ExitToApp />
            Đăng xuất
          </Button>
        </Wrapper>
      </NavLeft>
      <NavRight>
        <Header></Header>
      </NavRight>
    </Container>
  );
};
