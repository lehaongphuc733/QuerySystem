import styled from "styled-components";
import React, { Component } from "react";
import { VisibilityOff, ErrorOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logoLogin from "../../src/components/assert/logo_login.jpg";
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
  margin-top: -20%;
  padding: 30px;
  height: 40%;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  /* background-image: url("G:\Desktop2\DaiHoc_HuTech\ThucTapTotNghiep\ImageLogo\lg1.jpg"); */
  width: 20rem;
  height: 20rem;
  /* background-color: red; */
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  text-align: left;
  padding: 5px;
  width: auto;
  font-size: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5%;
  border: 2px solid #6d6761;
  font-size: 18px;
  border: none;
`;

const ObVisibilityOff = styled.div`
  display: flex;
`;

const PassContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: none;
  background-color: white;
`;

const Notification = styled.div`
  display: flex;
`;

const LabelNotification = styled.label`
  color: red;
  font-size: 20px;
  font-weight: none;
  text-align: left;
`;

const MainButton = styled.div`
  margin-bottom: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & :hover {
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin-top: 25px;
  font-size: 20px;
  width: 10rem;
  height: 2rem;
  background-color: #fa7900;
  color: white;
  border: 1px solid #fa7900;
  border-radius: 10%;
`;

const Links = styled.a`
  margin-top: 10px;
  color: red;
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
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

export const Login = () => {
  return (
    <div>
      <Container>
        <BlockLeft>
          <Wrapper>
            <Image src={logoLogin} />
            <Form>
              <Label htmlFor="">Tên đăng nhập *</Label>
              <Input placeholder="username" required />
              <Label htmlFor="">Mật khẩu *</Label>
              <PassContainer>
                <Input
                  style={{ width: "17.5rem" }}
                  placeholder="password"
                  type={"password"}
                  required
                />
                <ObVisibilityOff>
                  <VisibilityOff
                    style={{
                      backgroundColor: "white",
                      fontSize: "auto",
                      textAlign: "right",
                    }}
                  />
                </ObVisibilityOff>
              </PassContainer>
              {/* <Notification>
                <ErrorOutline
                  style={{
                    color: "red",
                  }}
                />
                <LabelNotification>
                  Sai tên đăng nhập hoặc mật khẩu
                </LabelNotification>
              </Notification> */}

              <MainButton>
                <Button>Đăng Nhập</Button>
                {/* <Links>Quên mật khẩu?</Links> */}
                <Links href="/quen-mat-khau">Quên mật khẩu?</Links>
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
