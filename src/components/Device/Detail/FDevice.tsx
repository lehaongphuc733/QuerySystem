import styled from "styled-components";
import { Edit } from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  border-radius: 12px;
  background-color: white;
  position: absolute;
  top: 150px;
  left: 220px;
  width: 1100px;
  height: 650px;
`;

const TitleIf = styled.p`
  color: #ff8523;
  font-size: 22px;
  font-weight: 500;
  margin-left: 20px;
`;

const Block1 = styled.div`
  float: left;
  width: 500px;
`;
const Break1 = styled.div`
  margin-top: 20px;
  margin-left: 20px;
`;
const LCon = styled.label`
  font-size: 20px;
  font-weight: 500;
`;
const Con = styled.label`
  font-size: 18px;
  margin-left: 30px;
  color: #8e8d97;
`;

const Block2 = styled.div`
  width: 500px;
  float: right;
`;
const Break2 = styled.div`
  margin-top: 20px;
`;

const Block3 = styled.div`
  width: 1000px;
  margin-top: 20px;
  margin-left: 20px;
  float: left;
  line-height: 20px;
`;
const Area = styled.p`
  color: #8e8d97;
  font-size: 18px;
`;

const FormUpdate = styled.div`
  margin: auto;
  position: absolute;
  border-radius: 12px;
  top: 0px;
  left: 1140px;

  & :hover {
    cursor: pointer;
  }
`;
const ButtonUpdate = styled.button`
  background-color: #fff2e7;
  width: 80px;
  border: none;
  height: 100px;
  display: flex;
  flex-direction: column;
`;
const LabelUpdate = styled.label`
  color: orange;
  font-size: 16px;
`;

export const FDevice = () => {
  return (
    <Container>
      <TitleIf>Thông tin thiết bị</TitleIf>
      <Block1>
        <Break1>
          <LCon>Mã thiết bị: </LCon>
          <Con>KIO_01</Con>
        </Break1>
        <Break1>
          <LCon>Tên thiết bị: </LCon>
          <Con>Kiosk</Con>
        </Break1>
        <Break1>
          <LCon>Địa chỉ IP: </LCon>
          <Con>KIO_01</Con>
        </Break1>
      </Block1>
      <Block2>
        <Break2>
          <LCon>Loại thiết bị: </LCon>
          <Con>Kiosk</Con>
        </Break2>
        <Break2>
          <LCon>Tên đăng nhập: </LCon>
          <Con>Linhkyo011</Con>
        </Break2>
        <Break2>
          <LCon>Mật khẩu: </LCon>
          <Con>CMS</Con>
        </Break2>
      </Block2>
      <Block3>
        <LCon>Dịch vụ sử dụng: </LCon>
        <Area>
          Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi
          họng, Khám hô hấp, Khám tổng quát.
        </Area>
      </Block3>
      <FormUpdate>
        <Link to={"/update-device"} className="db-fUpdate">
          <ButtonUpdate>
            <Edit
              style={{
                borderRadius: "25%",
                backgroundColor: "#ff7506",
                color: "#fff2e7",
                marginLeft: "24px",
                marginTop: "14px",
              }}
            />
            <LabelUpdate>Cập nhật thiết bị</LabelUpdate>
          </ButtonUpdate>
        </Link>
      </FormUpdate>
    </Container>
  );
};
