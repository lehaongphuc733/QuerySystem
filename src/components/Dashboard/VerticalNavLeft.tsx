import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../components/assert/logo_trangchu.jpg";
import {
  Dashboard,
  Tv,
  QuestionAnswer,
  ViewStream,
  Assessment,
  Settings,
  MoreVert,
  ExitToApp,
} from "@material-ui/icons";

const Container = styled.div`
  position: relative;
  width: 200px;
  height: 810px;
  background: #ffffff;
  box-shadow: 0px 0px 6px rgba(219, 219, 219, 0.5);
  border-radius: 16px 0px 0px 16px;
`;

const Logo = styled.div`
  position: absolute;
  width: 80px;
  height: 64px;
  left: 40px;
  top: 32px;
`;

const Image = styled.img``;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: auto; */
  top: 150px;
`;

const Logout = styled.div`
  position: absolute;
  width: 200px;
  height: 46px;
  left: 0px;
  top: 732px;
`;

const Cop = styled.div`
  position: absolute;
  font-weight: 600;
  font-size: 16px;
  width: 176px;
  height: 48px;
  left: 12px;
  top: 0px;
  background: #fff2e7;
  color: #ff9138;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  margin: auto;
  align-content: center;
`;

const Option = styled.div``;

const Dropdown = styled.div``;

const P = styled.p``;

export const VerticalNavLeft = () => {
  return (
    <Container>
      <Logo>
        <Link
          to={"/dashboard"}
          style={{
            marginTop: "24px",
            textDecoration: "none",
          }}
        >
          <Image src={logo} />
        </Link>
      </Logo>
      <Wrapper>
        <Option className="option">
          <Link className="nlink-left-dashboard" to={"/dashboard"}>
            <Dashboard
              style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
            />
            <P style={{ flex: "3", margin: "auto" }}>Dashboard</P>
          </Link>
        </Option>
        <Option className="option">
          <Link className="nlink-left-dashboard" to={"/device"}>
            <Tv style={{ color: "#b4b4bb", flex: "1", margin: "auto" }} />
            <P style={{ flex: "3", margin: "auto" }}>Thiết bị</P>
          </Link>
        </Option>
        <Option className="option">
          <Link className="nlink-left-dashboard" to={"/services"}>
            <QuestionAnswer
              style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
            />
            <P style={{ flex: "3", margin: "auto" }}>Dịch vụ</P>
          </Link>
        </Option>
        <Option className="option">
          <Link className="nlink-left-dashboard" to={"/numberof"}>
            <ViewStream
              style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
            />
            <P style={{ flex: "3", margin: "auto" }}>Cấp số</P>
          </Link>
        </Option>
        <Option className="option">
          <Link className="nlink-left-dashboard" to={"/dashboard"}>
            <Assessment
              style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
            />
            <P style={{ flex: "3", margin: "auto" }}>Báo cáo</P>
          </Link>
        </Option>
        <Option className="option">
          <Link className="nlink-left-dashboard" to={"#"}>
            <Settings style={{ color: "#b4b4bb", flex: "1", margin: "auto" }} />
            <P style={{ flex: "3", margin: "auto" }}> Cài đặt hệ thống </P>
            <MoreVert style={{ margin: "auto" }} />
            <Dropdown className="dropdown">
              <Link to={"#"}>
                <P style={{ marginLeft: "16px" }}>Quản lý vai trò</P>
              </Link>
              <Link to={"#"}>
                <P style={{ marginLeft: "16px" }}>Quản lý tài khoản</P>
              </Link>
              <Link to={"#"}>
                <P style={{ marginLeft: "16px" }}>QNhật ký người dùng</P>
              </Link>
            </Dropdown>
          </Link>
        </Option>
      </Wrapper>
      <Logout className="logout">
        <Link to={"/login"}>
          <Cop>
            <ExitToApp className="icon" />
            <P style={{ flex: "3", margin: "auto" }}>Đăng xuất</P>
          </Cop>
        </Link>
      </Logout>
    </Container>
  );
};
