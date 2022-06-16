import styled from "styled-components";
import { Replay } from "@material-ui/icons";
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

const IconBlue = styled.div`
  position: absolute;
  top: 152.5px;
  left: 713.5px;
  background-color: blue;
  border-radius: 100%;
  width: 10px;
  height: 10px;
`;

const Con = styled.label`
  font-size: 18px;
  /* position: relative;
  left: 50px; */
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
  height: 80px;
  display: flex;
  flex-direction: column;
`;
const LabelUpdate = styled.label`
  color: orange;
  font-size: 15.5px;
  text-align: center;
  margin-left: 4px;
`;

export const DNumber = () => {
  return (
    <Container>
      <TitleIf>Thông tin thiết bị</TitleIf>
      <Block1>
        <Break1>
          <LCon>Họ tên: </LCon>
          <Con>Nguyễn Thị Dung</Con>
        </Break1>
        <Break1>
          <LCon>Tên dịch vụ: </LCon>
          <Con>Khám tim mạch</Con>
        </Break1>
        <Break1>
          <LCon>Số thứ tự: </LCon>
          <Con>2001201</Con>
        </Break1>
        <Break1>
          <LCon>Thời gian cấp: </LCon>
          <Con>14:35 - 07/11/2021</Con>
        </Break1>
        <Break1>
          <LCon>Hạn sử dụng: </LCon>
          <Con>18:00 - 07/11/2021</Con>
        </Break1>
      </Block1>
      <Block2>
        <Break2>
          <LCon>Nguồn cấp: </LCon>
          <Con>Kiosk</Con>
        </Break2>
        <Break2>
          <LCon>Trạng thái: </LCon>
          <IconBlue></IconBlue>
          <Con>Đang chờ</Con>
        </Break2>
        <Break2>
          <LCon>Số điện thoại: </LCon>
          <Con>0948523623</Con>
        </Break2>
        <Break2>
          <LCon>Địa chỉ Email: </LCon>
          <Con>nguyendung@gmail.com</Con>
        </Break2>
      </Block2>

      <FormUpdate>
        <Link to={"/numberof"} className="db-fUpdate">
          <ButtonUpdate>
            <Replay
              style={{
                borderRadius: "25%",
                backgroundColor: "#ff7506",
                color: "#fff2e7",
                marginLeft: "24px",
                marginTop: "14px",
              }}
            />
            <LabelUpdate>Quay lại</LabelUpdate>
          </ButtonUpdate>
        </Link>
      </FormUpdate>
    </Container>
  );
};
