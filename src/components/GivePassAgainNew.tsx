import styled from "styled-components";
import { Link } from "react-router-dom";
import loginLogo from "../../src/components/assert/logo_login.jpg";
import imageRight from "../../src/components/assert/image_right.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const BlockLeft = styled.div`
  height: 59.5rem;
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
  border-radius: 4%;
  padding: 12px;
`;

const MainButton = styled.div`
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
  border-radius: 10%;
`;

const BlockRight = styled.div`
  background-color: white;
  flex: 6;
  height: 60rem;
`;

const ImageRight = styled.img`
  width: 100%;
  height: 90%;
  background-size: cover;
`;

export const GivePassAgainNew = () => {
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
              <Input type={"password"} />
              <Label>Nhập lại mật khẩu</Label>
              <Input type={"password"} />
              <MainButton>
                <Button
                  style={{ color: "#fff9f4", backgroundColor: "#ff9138" }}
                >
                  Xác nhận
                </Button>
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
