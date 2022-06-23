import styled from "styled-components";
import {
  ArrowDropDown,
  Search,
  Add,
  ArrowLeft,
  ArrowRight,
  DateRange,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { DatePick } from "../DatePick/DatePick";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const WrapperSt = styled.div`
  display: flex;
  flex-direction: row;
`;

const Statiscals = styled.div`
  border-radius: 12px;
  position: absolute;
  top: 300px;
  left: 220px;
  border-radius: 12px;
  width: 1110px;
  height: 465px;
`;

const Table = styled.table`
  position: absolute;
  border-radius: 1em;
  overflow: hidden;
  top: -100px;
  left: -60px;
  width: 1350px;
  height: 630px;
  border-collapse: collapse;
  border-width: 1px;
  zoom: 95%;
  transform: scale(calc(8 / 9));
`;

const Tr = styled.tr`
  /* border-radius: 12px; */
`;

const Th = styled.th`
  font-weight: 500;
  font-size: 1.2rem;
`;

const Td = styled.td`
  text-align: center;
`;

const RowIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconRed = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: red;
  background-color: red;
`;

const RowLabel = styled.label`
  margin-left: 14px;
  /* position: absolute;
  top: 70px; */
`;

const IconBlue = styled.div`
  width: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: blue;
  background-color: blue;
`;
const IconGray = styled.div`
  width: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: gray;
  background-color: gray;
`;

const FormAdd = styled.div`
  margin: auto;
  position: absolute;
  top: 240px;
  left: 1350px;

  & :hover {
    cursor: pointer;
  }
`;

const ButtonAdd = styled.button`
  background-color: #fff2e7;
  width: 80px;
  border: none;
  height: 90px;
  display: flex;
  flex-direction: column;
`;

const LabelAdd = styled.label`
  color: orange;
  font-size: 18px;
  margin-left: 10px;
  margin-top: 10px;
`;

const Block1 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 224px;
  top: 156px;
`;

const Block3 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 1054px;
  top: 96px;
`;

const P = styled.p`
  font-weight: 500;
`;

const Input = styled.input`
  width: 250px;
  font-size: 18px;
  border: 0.2px solid #e4e4e6;
  border-radius: 10px;
  padding: 12px;

  /* Xoa border */
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
`;

const FormDate = styled.div`
  display: flex;
  gap: 5px;
  height: 42px;
  align-items: center;
  input {
    height: 20px;
    width: 125px;
    background: #ffffff;
    border: 1.5px solid #e4e4e6 !important;
    border-radius: 12px;
    padding: 10px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }
`;

const TabNext = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  position: absolute;
  top: 780px;
  left: 1100px;
  width: 230px;
  height: 30px;
  border-radius: 12px;
`;

const Number = styled.div`
  margin-top: 3.5px;
  width: 40px;
  height: 40px;
`;

const Pre = styled.div``;

const Dot = styled.div``;

const Next = styled.div``;

const Nlab = styled.div`
  color: #8a8993;
  justify-content: center;
  text-align: center;
  width: 20px;
  height: 20px;
`;
const Nlab3 = styled.div`
  margin-top: 5px;
  margin-right: 3px;
  color: #8a8993;
  text-align: center;
  width: 20px;
  height: 20px;
`;
const Nlab1 = styled.div`
  justify-content: center;
  text-align: center;
  color: white;
  width: 20px;
  height: 20px;
  background-color: #ff7506;
`;

export const UserLogDT = () => {
  return (
    <Container>
      <Wrapper>
        <Block1>
          <FormDate>
            <DatePick></DatePick>
            <DateRange
              style={{ color: "#ff7506", position: "absolute", left: "115px" }}
            />
            <ArrowRight style={{ position: "absolute", left: "139px" }} />
            <DatePick></DatePick>
            <DateRange
              style={{ color: "#ff7506", position: "absolute", left: "265px" }}
            />
          </FormDate>
        </Block1>
        <Block3>
          <P>Từ khóa</P>
          <Input type="text" placeholder="Nhập từ khóa"></Input>
          <Search
            style={{
              color: "orange",
              position: "absolute",
              left: "240px",
              top: "60px",
            }}
          />
        </Block3>
      </Wrapper>
      <WrapperSt>
        <Statiscals>
          <Table className="dv-table">
            <Tr>
              <Th>Tên đăng nhập</Th>
              <Th>Thời gian tác động</Th>
              <Th>IP thực hiện</Th>
              <Th>Thao tác thực hiện</Th>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>01/12/2021 15:12:17</Td>
              <Td>192.168.3.1</Td>
              <Td>Cập nhật thông tin dịch vụ DV_01</Td>
            </Tr>
          </Table>
        </Statiscals>
      </WrapperSt>
      <TabNext className="dv-tag">
        <Pre className="dv-tag-con">
          <Link to={"#"}>
            <ArrowLeft style={{ color: "#a9a9b0", fontSize: "30px" }} />
          </Link>
        </Pre>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab1>1</Nlab1>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>2</Nlab>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>3</Nlab>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>4</Nlab>
          </Link>
        </Number>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>5</Nlab>
          </Link>
        </Number>
        <Dot>
          <Nlab3>...</Nlab3>
        </Dot>
        <Number className="dv-tag-con">
          <Link to={"#"}>
            <Nlab>10</Nlab>
          </Link>
        </Number>
        <Next>
          <Link to={"#"}>
            <ArrowRight style={{ color: "#a9a9b0", fontSize: "30px" }} />
          </Link>
        </Next>
      </TabNext>
    </Container>
  );
};
