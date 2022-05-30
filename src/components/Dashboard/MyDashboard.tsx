import styled from "styled-components";
import logo from "../../components/assert/logo_trangchu.jpg";
import avatar from "../../components/assert/avatar.jpg";
import { Link } from "react-router-dom";
import {
  Dashboard,
  Tv,
  QuestionAnswer,
  ViewStream,
  Assessment,
  ExitToApp,
  Settings,
  MoreVert,
  Notifications,
  CameraAlt,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  height: 59.5rem;
`;

const NavLeft = styled.div`
  position: relative;
  box-shadow: 0px 4px 6px rgba(219, 219, 219, 0.5);
  border-radius: 16px 0px 0px 16px;
  background-color: #ffffff;
  flex: 2.5;
  text-align: center;
`;

const Image = styled.img`
  margin-top: 5rem;
  height: 10rem;
  width: 10rem;
`;

const Wrapper = styled.div`
  /* align-items: center; */

  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const WrapperItem = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  flex: none;
  order: 1;
  flex-grow: 0;
  width: 200px;
  height: 48px;
  margin-bottom: 6px;
  margin-left: 10px;
  text-align: left;
  display: flex;
`;

const Label = styled.label`
  cursor: pointer;
  margin-left: 18px;
  text-decoration: none;
`;

const DropdownItem = styled.div`
  width: 20rem;
  position: relative;
  display: inline-block;
  line-height: 50px;
  flex: none;
  order: 1;
  flex-grow: 0;
  text-align: left;
  display: flex;
`;

const Item = styled.div`
  width: 500px;
  margin-left: 200px;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  & :last-child {
    width: 200px;
    height: 48px;
    float: left;
    overflow: hidden;
  }
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

// const DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f1f1f1;
//   min-width: 160px;
//   transform: translateX(30px);
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;

//   & :hover {
//     display: block;
//   }
// `;

const Logout = styled.div`
  width: 200px;
  height: 46px;
  position: absolute;
  left: 0px;
  top: 732px;
`;

const P = styled.p`
  font-size: 1.5rem;
  flex: 3;
  margin: auto;
`;

const WrapperLogout = styled.div`
  width: 450px;
  height: 48px;
  display: flex;
  position: absolute;
  background: #fff2e7;
  color: #ff9138;
  border-radius: 8px;
  flex-direction: row;
  margin: auto;
  align-content: center;
`;

const NavRight = styled.div`
  border: 0.5px solid #f2f2f2;
  background-color: #f6f6f6;
  flex: 7.5;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Lb = styled.label`
  margin-top: 2rem;
  margin-left: 2rem;
  font-size: 2rem;
  color: #ff933b;
`;

const Lb1 = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const Span = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #7e7d88;
`;

const MyInfo = styled.div`
  display: flex;
  /* flex: 1; */

  flex-direction: row;
  margin-top: 2rem;
  margin-left: 2rem;
`;

const BorderNoti = styled.div`
  margin-right: 20px;
  background-color: #fff2e7;
  height: 48px;
  border-radius: 50px;
`;

const Alert = styled.div``;

const Avatar = styled.div``;

const Img = styled.img`
  width: 40px;
  height: 40px;
  right: 132px;
  top: 0px;
  border-radius: 48px;
`;

const LabelInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

const Body = styled.div`
  position: absolute;

  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(219, 219, 219, 0.5);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  margin-left: 2rem;
  margin-top: 2.5rem;
  background-color: #ffffff;
  width: 80rem;
  height: 30rem;
`;

const WrapperImage = styled.div``;

const Infomation = styled.div`
  position: absolute;
  width: 792px;
  height: 276px;
  left: 296px;
  top: 40px;
  display: flex;
  flex-wrap: wrap;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
`;

const Input = styled.input`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  padding: 12px 16px;
  background: #eaeaec;
  border-radius: 6px;
  border: 0px;
  box-shadow: none;
  width: 352px;
  color: #535261;
  opacity: 0.5;
  outline: none;
  pointer-events: none;
`;

const ImageAvatar = styled.div`
  position: absolute;
  width: 248px;
  height: 251px;
  left: 24px;
  top: 40px;
`;

const CamIcons = styled.div`
  box-sizing: border-box;

  position: absolute;
  width: 45px;
  height: 45px;
  left: 191px;
  top: 280px;
  display: flex;

  background: #ff7506;

  border: 2px solid #ffffff;
  border-radius: 38px;
`;

export const MyDashboard = () => {
  return (
    <Container>
      <NavLeft>
        <Link
          to={"#"}
          style={{
            marginTop: "24px",
            textDecoration: "none",
          }}
        >
          <Image src={logo} />
        </Link>
        <Wrapper>
          <WrapperItem>
            <Link
              id="nav-link-left"
              to={"#"}
              style={{
                textDecoration: "none",
                width: "200px",
                height: "48px",
                display: "flex",
                color: "#7e7d88",
              }}
            >
              <Dashboard
                style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
              />
              <P>Dashboard</P>
            </Link>
          </WrapperItem>
          <WrapperItem>
            <Link
              id="nav-link-left"
              to={"#"}
              style={{
                textDecoration: "none",
                width: "200px",
                height: "48px",
                display: "flex",
                color: "#7e7d88",
              }}
            >
              <Tv style={{ color: "#b4b4bb", flex: "1", margin: "auto" }} />
              <P>Thiết bị</P>
            </Link>
          </WrapperItem>
          <WrapperItem>
            <Link
              id="nav-link-left"
              to={"#"}
              style={{
                textDecoration: "none",
                width: "200px",
                height: "48px",
                display: "flex",
                color: "#7e7d88",
              }}
            >
              <QuestionAnswer
                style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
              />
              <P>Dịch vụ</P>
            </Link>
          </WrapperItem>
          <WrapperItem>
            <Link
              id="nav-link-left"
              to={"#"}
              style={{
                textDecoration: "none",
                width: "200px",
                height: "48px",
                display: "flex",
                color: "#7e7d88",
              }}
            >
              <ViewStream
                style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
              />
              <P>Cấp số</P>
            </Link>
          </WrapperItem>
          <WrapperItem>
            <Link
              id="nav-link-left"
              to={"#"}
              style={{
                textDecoration: "none",
                width: "200px",
                height: "48px",
                display: "flex",
                color: "#7e7d88",
              }}
            >
              <Assessment
                style={{ color: "#b4b4bb", flex: "1", margin: "auto" }}
              />
              <P>Báo cáo</P>
            </Link>
          </WrapperItem>

          <DropdownItem>
            <Link
              id="dropdown-item"
              to={"#"}
              style={{
                textDecoration: "none",
                width: "300px",
                height: "48px",
                display: "flex",
                color: "#7e7d88",
              }}
            >
              <Settings style={{ flex: "1", margin: "auto" }} />
              <P style={{ flex: "3", margin: "auto" }}>Cài đặt hệ thống</P>
              <MoreVert style={{ margin: "auto" }} />
              <Item className="item">
                <Link id="a1" to={"#"}>
                  <P style={{ marginLeft: "16px" }}>Quản lý vai trò</P>
                </Link>
                <Link id="a1" to={"#"}>
                  <P>Quản lý tài khoản</P>
                </Link>
                <Link id="a1" to={"#"}>
                  <P>Nhật ký người dùng</P>
                </Link>
              </Item>
            </Link>
          </DropdownItem>

          <Logout>
            <Link
              to={"/"}
              style={{
                width: "76px",
                height: "24px",
                color: "#ff9138",
                fontWeight: "600",
                flex: "none",
                order: "1",
                flexGrow: "0",
                textDecoration: "none",
              }}
            >
              <WrapperLogout>
                <ExitToApp style={{ flex: "1", margin: "auto" }} />
                <P>Đăng xuất</P>
              </WrapperLogout>
            </Link>
          </Logout>
        </Wrapper>
      </NavLeft>
      <NavRight>
        <Header>
          <Lb>Thông tin cá nhân</Lb>
          <MyInfo>
            <BorderNoti>
              <Notifications style={{ color: "#ffac6a", fontSize: "40px" }} />
            </BorderNoti>

            <Link
              to={"#"}
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Avatar>
                <Img src={avatar} />
              </Avatar>
              <LabelInfo>
                <Lb
                  style={{
                    marginLeft: "5px",
                    marginTop: "-2px",
                    color: "#7e7d88",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "18px",
                  }}
                >
                  Xin chào
                </Lb>
                <Span>Lê Quỳnh Ái Vân</Span>
              </LabelInfo>
            </Link>
          </MyInfo>
        </Header>

        <Body>
          <WrapperImage>
            <ImageAvatar>
              <Image
                src={avatar}
                alt="error image"
                style={{
                  position: "absolute",
                  width: "248px",
                  height: "248px",
                  left: "0px",
                  top: "0px",
                  borderRadius: "318px",
                }}
              />
              <CamIcons>
                <CameraAlt style={{ margin: "auto", color: "#fff" }} />
              </CamIcons>
            </ImageAvatar>
            <P
              style={{
                marginTop: "60px",
                position: "absolute",
                height: "36px",
                left: "55px",
                top: "307px",
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: "700",
                fontSize: "24px",
                lineHeight: "36px",
                display: "flex",
                alignItems: "center",
                color: "#282739",
              }}
            >
              Lê Quỳnh Ái Vân
            </P>
          </WrapperImage>
          <Infomation>
            <ItemInfo>
              <Lb1 htmlFor="">Tên người dùng</Lb1>
              <Input type="text" value={"Lê Quỳnh Ái Vân"}></Input>
            </ItemInfo>
            <ItemInfo>
              <Lb1 htmlFor="">Tên đăng nhập</Lb1>
              <Input type="text" value={"lequynhaivan01"}></Input>
            </ItemInfo>
            <ItemInfo>
              <Lb1 htmlFor="">Số điện thoại</Lb1>
              <Input type="text" value={"0909090909"}></Input>
            </ItemInfo>
            <ItemInfo>
              <Lb1 htmlFor="">Mật khẩu</Lb1>
              <Input type="text" value={"123456"}></Input>
            </ItemInfo>
            <ItemInfo>
              <Lb1 htmlFor="">Email</Lb1>
              <Input type="text" value={"aivan@admin.com"}></Input>
            </ItemInfo>
            <ItemInfo>
              <Lb1 htmlFor="">Vai trò</Lb1>
              <Input type="text" value={"Kế Toán"}></Input>
            </ItemInfo>
          </Infomation>
        </Body>
      </NavRight>
    </Container>
  );
};
