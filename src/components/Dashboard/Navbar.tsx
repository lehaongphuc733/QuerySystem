import styled from "styled-components";
import { Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import ava from "../../components/assert/avatar.jpg";
import { Notice } from "./Notice";

type Content = {
  content: string;
};

const Header = styled.div`
  position: absolute;
  width: 1240px;
  height: 88px;
  right: 0px;
  top: 0px;
  border-top-right-radius: 16px;
  display: flex;
`;

const NavLeft = styled.div`
  top: 24px;
  left: 24px;
  bottom: 24px;
  flex: 1;
`;

const P = styled.p`
  position: absolute;
  left: 24px;
  top: 29px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ff9138;
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
`;

const NavRight = styled.div`
  flex: 1;
`;

const Avatar = styled.div``;

const Img = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 132px;
  top: 0px;
  border-radius: 48px;
`;

const Info = styled.div`
  position: absolute;
  width: 124px;
  height: 24px;
  left: 48px;
  top: 0px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #535261;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  position: absolute;
  top: 25px;
  color: #7e7d88;
`;

export const Navbar = (props: Content) => {
  return (
    <Header>
      <NavLeft>
        <P>{props.content}</P>
      </NavLeft>
      <NavRight>
        {/* <Notifications className="noti" /> */}
        <Notice />
        <Link
          to={"/info"}
          style={{
            position: "absolute",
            top: "24px",
            width: "172px",
            height: "42px",
            left: "1004px",
          }}
        >
          <Avatar>
            <Img src={ava} alt="fw?900099099099" />
          </Avatar>
          <Info>
            <P
              style={{
                position: "absolute",
                top: "4px",
                color: "#7e7d88",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "18px",
              }}
            >
              Xin chào
            </P>
            <Span>Lê Quỳnh Ái Vân</Span>
          </Info>
        </Link>
      </NavRight>
    </Header>
  );
};
