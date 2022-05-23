import { string } from "prop-types";
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

const Wrapper = styled.div``;

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
  border: none;
  border-radius: 4%;
  padding: 12px;
`;

const MainButton = styled.div`
  margin-bottom: -20px;
  display: flex;
  /* align-items: center; */
  /* justify-content: ; */
  justify-content: space-between;
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
  /* background-color: #fa7900; */
  color: white;
  /* border: 1px solid #fa7900; */
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

export const GivePassAgain = () => {
  return (
    <div>
      <Container>
        <BlockLeft>
          <Wrapper>
            {/* <Image src="https://static.ybox.vn/2021/11/4/1637201000017-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn-5.png" /> */}
            <Image src={loginLogo} />
            <Form>
              <Label
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                Đặt lại mật khẩu
              </Label>
              <Label>Vui lòng nhập email để đặt lại mật khẩu của bạn *</Label>
              <Input placeholder="Vui lòng nhập lại Email!" type={"text"} />
              <MainButton>
                <Button
                  style={{ color: "#dc7106", border: "1px solid #dc7106" }}
                >
                  Hủy
                </Button>
                {/* <Link to={"/login"}>Huy</Link> */}
                <Button style={{ color: "white", backgroundColor: "#dc7106" }}>
                  Tiếp tục
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
