import styled from "styled-components";
import { Notifications } from "@material-ui/icons";

const FormNoti = styled.div`
  display: flex;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 260px;
  top: 28px;
  background: #fff2e7;
  border-radius: 32px;
  color: #ffac6a;
  cursor: pointer;
`;
const NotiContent = styled.div`
  position: absolute;
  width: 360px;
  height: 526px;
  right: -242px;
  top: 59px;
  display: none;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 10px;
`;

const NotiHeader = styled.div`
  position: absolute;
  width: 360px;
  height: 48px;
  left: 0px;
  top: 0px;
  cursor: auto;
  color: #fff;
  border-radius: 10px 10px 0px 0px;
  background: #ff9138;
`;
const P = styled.p`
  position: absolute;
  width: 101px;
  height: 30px;
  left: 24px;
  top: -7.5px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: -5px;
  color: #ffffff;
`;
const NotiMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  width: 360px;
  height: 478px;
  left: 0px;
  top: 50px;

  & ::-webkit-scrollbar {
    width: 4px;
  }

  & ::-webkit-scrollbar-thumb {
    position: absolute;
    width: 4px;
    height: 340px;
    background: #ffc89b;
    border-radius: 43px;
  }
`;
const Item = styled.div`
  width: 360px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 30px;

  & :hover {
    background: #fff2e7;
  }
`;
const Block = styled.div`
  position: absolute;
  left: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  align-items: flex-start;
`;
const ItemCon = styled.p`
  height: 24px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #bf5805;
`;
const ItemCons = styled.p`
  width: 313px;
  height: 24px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #535261;
`;
const Hr = styled.hr`
  border: none;
  height: 1.5px;
  background: #d4d4d7;
  width: 275px;
  position: absolute;
  left: 8%;
`;

export const Notice = () => {
  const handleNotice = () => {
    const iconBell: any = document.querySelector(FormNoti);
    const notice: any = document.querySelector(NotiContent);
    if (iconBell.classList.toggle("button-notice-active")) {
      notice.style.display = "flex";
    } else {
      notice.style.display = "none";
    }
  };
  return (
    <FormNoti onClick={() => handleNotice()}>
      <Notifications
        style={{
          width: "20px",
          height: "20px",
          margin: "auto",
          color: "#ff7506",
        }}
      />
      <NotiContent>
        <NotiHeader>
          <P>Thông báo</P>
        </NotiHeader>
        <NotiMessage>
          <Item>
            <Block>
              <ItemCon>Người dùng: Nguyễn Thị Thùy Dung</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Nguyễn Thiên Chinh</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Võ Thị Kim Liên</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Hoàng Nguyễn Quốc Huy</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Võ Ngọc Lan Anh</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Nguyễn Thị Trúc Anh</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Nguyễn Trung Toàn</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Phạm Hồng Ngọc</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Hồ Trung Hiếu</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Hoàng Duy Phước</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
          <Item>
            <Block>
              <ItemCon>Người dùng: Trương Ngọc Nguyên</ItemCon>
              <ItemCons>Thời gian nhận số: 12h20 ngày 31/11/2021</ItemCons>
            </Block>
            <Hr></Hr>
          </Item>
        </NotiMessage>
      </NotiContent>
    </FormNoti>
  );
};
