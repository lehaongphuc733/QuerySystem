import styled from "styled-components";
import React, { Component, useState } from "react";
import { VisibilityOff, ErrorOutline, Visibility } from "@material-ui/icons";
import { Link } from "react-router-dom";
import logoLogin from "../../src/components/assert/logo_login.jpg";
import imageRight from "../../src/components/assert/image_right.jpg";

type User = {
  name: string;
  password: string;
};

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
  padding: 12px 20px;
  border-radius: 12px;
  width: 300px;
  border: 2px solid #6d6761;
  font-size: 18px;
  border: 0.2px solid #e4e4e6;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;

  & :focus {
    border: 0.2px solid #e4e4e6;
  }
`;

const PassContainer = styled.div`
  border: 0.2px solid lightgray;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: none;
  background-color: white;
`;

const Notification = styled.div`
  display: flex;
  visibility: hidden;
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
  color: #fff9f4;
  background-color: #ff9138;
  border: 1px solid #fa7900;
  border-radius: 10%;
`;

const Links = styled.button`
  background-color: #f6f6f6;
  border: none;
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
  height: 55rem;
`;

const ImageRight = styled.img`
  width: 100%;
  height: 90%;
  background-size: cover;
`;

export const Login = (props: User) => {
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
    // <div>
    <Container>
      <BlockLeft>
        <Wrapper>
          <Image src={logoLogin} />
          <Form>
            <Label htmlFor="">Tên đăng nhập *</Label>
            <Input
              placeholder="username"
              required
              value={props.name}
              type="text"
            />
            <Label htmlFor="">Mật khẩu *</Label>
            <PassContainer>
              <Input type={"password"} id="pw1" value={props.password} />
              <VisibilityOff
                className="show"
                id="show1"
                style={{
                  position: "absolute",
                  top: "488px",
                  left: "510px",
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
                  top: "488px",
                  left: "510px",
                  cursor: "pointer",
                }}
                onClick={() => showpw("pw1", "show1", "hide1")}
              />
              {/* </ObVisibilityOff> */}
            </PassContainer>
            <Notification>
              <ErrorOutline
                style={{
                  color: "red",
                }}
              />
              <LabelNotification>
                Sai tên đăng nhập hoặc mật khẩu
              </LabelNotification>
            </Notification>

            <MainButton>
              <Link to={"/dashboard"}>
                <Button>Đăng Nhập</Button>
              </Link>
              <Link to={"/quen-mat-khau"}>
                <Links>Quên mật khẩu?</Links>
              </Link>
            </MainButton>
          </Form>
        </Wrapper>
      </BlockLeft>
      <BlockRight>
        <ImageRight src={imageRight} />
      </BlockRight>
    </Container>
    // </div>
  );
};
