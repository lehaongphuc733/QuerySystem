import styled from "styled-components";
import { Link } from "react-router-dom";
import avatar from "../../components/assert/avatar.jpg";
import { CameraAlt } from "@material-ui/icons";

const Body = styled.div`
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 2px 6px rgba(219, 219, 219, 0.5);
  border-radius: 12px;
  display: flex;
  background-color: #ffffff;
  width: 1112px;
  height: 397px;
  left: 224px;
  top: 168px;
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

const Image = styled.img`
  margin-top: 5rem;
  height: 10rem;
  width: 10rem;
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

const P = styled.p`
  margin-top: 60px;
  position: absolute;
  height: 36px;
  left: 55px;
  top: 260px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #282739;
`;

const ImageAvatar = styled.div`
  position: absolute;
  width: 248px;
  height: 251px;
  left: 24px;
  top: -20px;
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

const Lb1 = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

export const MyInfo = () => {
  return (
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
        <P>Lê Quỳnh Ái Vân</P>
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
  );
};
