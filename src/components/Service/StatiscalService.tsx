import styled from "styled-components";
import { DatePick } from "../DatePick/DatePick";
// import DatePicker from "react-datepicker";
import {
  ArrowDropDown,
  Search,
  Add,
  ArrowLeft,
  ArrowRight,
  DateRange,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

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

const Block1 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 224px;
  top: 156px;
`;
const Block2 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 520px;
  top: 156px;
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
const Block3 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 1054px;
  top: 156px;
`;

const P = styled.p`
  font-weight: 500;
`;

const FormSelect = styled.div``;

const Select = styled.select`
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
`;

const Option = styled.option``;

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

const TableSt = styled.div`
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
  top: -60px;
  left: -60px;
  width: 1300px;
  height: 600px;
  border-collapse: collapse;
  overflow: hidden;
  border-width: 1px;
  zoom: 95%;
  transform: scale(calc(8 / 9));
`;

const Tr = styled.tr``;

const Th = styled.th`
  font-weight: 500;
  font-size: 1.2rem;
`;

const Td = styled.td`
  text-align: left;
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

const IconGreen = styled.div`
  width: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: green;
  background-color: green;
`;

const FormService = styled.div`
  margin: auto;
  position: absolute;
  top: 275px;
  left: 1340px;

  & :hover {
    cursor: pointer;
  }
`;

const ButtonService = styled.button`
  background-color: #fff2e7;
  width: 80px;
  border: none;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const LabelAdd = styled.label`
  color: orange;
  font-size: 18px;
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

const Pre = styled.div``;

const Dot = styled.div``;

const Next = styled.div``;

export const StatiscalService = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <Wrapper>
        <Block1>
          <P>Trạng thái hoạt động</P>
          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">Tất cả</Option>
              <Option className="dv-option">Hoạt động</Option>
              <Option className="dv-option">Ngưng hoạt động</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "220px",
                top: "5px",
              }}
              className="db-icon-sdDrop"
            />
          </FormSelect>
        </Block1>
        <Block2>
          <P>Chọn thời gian</P>
          {/* <DateP type="date"></DateP> */}
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
        </Block2>
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

      <TableSt>
        <Statiscals>
          <Table className="dv-table">
            <Tr>
              <Th>Mã dịch vụ</Th>
              <Th>Tên dịch vụ</Th>
              <Th>Mô tả</Th>
              <Th>Trạng thái hoạt động</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Mô tả dịch vụ 1</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Ngưng hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Ngưng hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>Hoạt động</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/detail-service"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-service"}>Cập nhật</Link>
              </Td>
            </Tr>
          </Table>
        </Statiscals>
        <FormService>
          <Link to={"/add-service"} className="db-fAdd">
            <ButtonService>
              <Add
                style={{
                  borderRadius: "25%",
                  backgroundColor: "#ff7506",
                  color: "#fff2e7",
                  marginLeft: "24px",
                  marginTop: "14px",
                }}
              />
              <LabelAdd>Thêm dịch vụ</LabelAdd>
            </ButtonService>
          </Link>
        </FormService>
      </TableSt>
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
