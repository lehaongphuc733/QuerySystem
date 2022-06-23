import styled from "styled-components";
import { Link } from "react-router-dom";
import loginLogo from "../../src/components/assert/logo_login.jpg";
import imageRight from "../../src/components/assert/image_right.jpg";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BlockLeft = styled.div`
  height: 55rem;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 4;
`;

const Wrapper = styled.div`
  margin-top: -10rem;
`;

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  background-color: red;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 10px 8px 7px;
  text-align: left;
`;

const Input = styled.input`
  color: #535261;
  font-size: 18px;
  border: 2px solid #dcdcde;
  border-radius: 12px;
  padding: 12px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
`;

const MainButton = styled.div`
  /* border-radius: 12px; */
  margin-bottom: -20px;
  display: flex;
  /* align-items: center; */
  /* justify-content: ; */
  justify-content: center;
  flex-direction: row;

  & :hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  border: none;
  margin-top: 25px;
  font-size: 20px;
  width: 10rem;
  height: 2rem;
  color: white;
  border-radius: 12px;
`;

const BlockRight = styled.div`
  background-color: white;
  flex: 6;
  height: 55rem;
`;

const ImageRight = styled.img`
  width: 100%;
  height: 90%;
  background-size: cover;
`;

export const GivePassAgainNew = () => {
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
    <div>
      <Container>
        <BlockLeft>
          <Wrapper>
            <Image src={loginLogo} />
            <Form>
              <Label
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Đặt lại mật khẩu mới
              </Label>
              <Label>Mật khẩu</Label>
              <Input type={"password"} id="pw1" />
              <VisibilityOff
                className="show"
                id="show1"
                style={{
                  position: "absolute",
                  top: "490px",
                  left: "500px",
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
                  top: "490px",
                  left: "500px",
                  cursor: "pointer",
                }}
                onClick={() => showpw("pw1", "show1", "hide1")}
              />
              <Label>Nhập lại mật khẩu</Label>
              <Input type={"password"} id="pw2" />
              <VisibilityOff
                className="show"
                id="show2"
                style={{
                  position: "absolute",
                  top: "580px",
                  left: "500px",
                  cursor: "pointer",
                }}
                onClick={() => showpw("pw2", "show2", "hide2")}
              />
              <Visibility
                className="hide"
                id="hide2"
                style={{
                  display: "none",
                  position: "absolute",
                  top: "580px",
                  left: "500px",
                  cursor: "pointer",
                }}
                onClick={() => showpw("pw2", "show2", "hide2")}
              />
              <MainButton>
                <Link to={"/login"}>
                  <Button
                    style={{ color: "#fff9f4", backgroundColor: "#ff9138" }}
                  >
                    Xác nhận
                  </Button>
                </Link>
              </MainButton>
            </Form>
          </Wrapper>
        </BlockLeft>
        <BlockRight>
          <ImageRight src={imageRight} />
        </BlockRight>
      </Container>
    </div>
  );
};
