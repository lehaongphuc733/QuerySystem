import styled from "styled-components";
import {
  CalendarToday,
  ArrowUpward,
  ArrowDownward,
  EventAvailable,
  ContactPhone,
  Book,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  width: 790px;
  height: 128px;
  left: 224px;
  top: 156px;
  border-radius: 12px;
  display: flex;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 186px;
  height: 120px;
  background: #ffffff;
  box-shadow: 2px 2px 15px rgba(70, 64, 67, 0.1);
  border-radius: 12px;
`;

const Title = styled.div`
  position: absolute;
  width: 130.02px;
  height: 48px;
  margin-top: 8px;
  margin-left: 12px;
  display: flex;
`;

const LabelNumber = styled.p`
  position: absolute;
  width: 108px;
  height: 45px;
  margin-left: 12px;
  margin-top: 68px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #535261;
`;

const Icon = styled.div`
  width: 48px;
  height: 14.98px;
  margin-left: 130.3px;
  margin-top: 85.53px;
  display: flex;
  justify-content: space-around;
  background: rgba(255, 149, 1, 0.15);
  border-radius: 7.18115px;
  color: #ff9138;
`;

const LabelPercent = styled.p`
  width: 29px;
  height: 12px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 12px;
  margin: auto;
  color: #ff9138;
`;

const IconTitle = styled.div`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  background: #e8effe;
  color: #6493f9;
`;

const Label = styled.p`
  position: absolute;
  height: 36px;
  left: 60.02px;
  top: 6px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #535261;
`;

export const Estimate = () => {
  return (
    <Container>
      <Wrapper>
        <Link className="db-nl-title" to="/numberof">
          <Title>
            <IconTitle>
              <CalendarToday className="db-title-icon calendar" />
            </IconTitle>
            <Label>Số thứ tự đã cấp</Label>
          </Title>
          <LabelNumber>4.221</LabelNumber>
          <Icon>
            <ArrowUpward className="db-tt-icon" />
            <LabelPercent>32,41%</LabelPercent>
          </Icon>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link className="db-nl-title" to="/numberof">
          <Title>
            <IconTitle style={{ background: "#E1F7E6" }}>
              <EventAvailable className="db-title-icon calendar-success" />
            </IconTitle>
            <Label>Số thứ tự đã sử dụng</Label>
          </Title>
          <LabelNumber>4.221</LabelNumber>
          <Icon>
            <ArrowDownward className="db-tt-icon" />
            <LabelPercent>32,41%</LabelPercent>
          </Icon>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link className="db-nl-title" to="/numberof">
          <Title>
            <IconTitle style={{ background: "rgba(231, 63, 63, 0.15)" }}>
              <ContactPhone className="db-title-icon phone-contact" />
            </IconTitle>
            <Label>Số thứ tự đang chờ</Label>
          </Title>
          <LabelNumber>4.221</LabelNumber>
          <Icon>
            <ArrowUpward className="db-tt-icon" />
            <LabelPercent>56,41%</LabelPercent>
          </Icon>
        </Link>
      </Wrapper>
      <Wrapper>
        <Link className="db-nl-title" to="/numberof">
          <Title>
            <IconTitle style={{ background: "rgba(231, 63, 63, 0.15)" }}>
              <Book className="db-title-icon book" />
            </IconTitle>
            <Label>Số thứ tự đã bỏ qua</Label>
          </Title>
          <LabelNumber>4.221</LabelNumber>
          <Icon>
            <ArrowDownward className="db-tt-icon" />
            <LabelPercent>22,41%</LabelPercent>
          </Icon>
        </Link>
      </Wrapper>
    </Container>
  );
};
