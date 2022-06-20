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
  width: 1300px;
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
const Block2 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 375px;
  top: 156px;
`;

const FormSelect = styled.div`
  width: 140px;
`;

const Select = styled.select`
  font-size: 18px;
  width: 140px;
`;

const Option = styled.option``;

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

export const ReportStatiscal = () => {
  return (
    <Container>
      <Wrapper>
        <Block1>
          {/* <P>Tên dịch vụ</P> */}
          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">Tất cả</Option>
              <Option className="dv-option">Khám sản - Phụ khoa</Option>
              <Option className="dv-option">Khám răng hàm mặt</Option>
              <Option className="dv-option">Khám tai mũi họng</Option>
            </Select>
            {/* <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "110px",
                top: "5px",
                fontSize: "28px",
              }}
              className="db-icon-sdDrop"
            /> */}
          </FormSelect>
        </Block1>
        <Block2>
          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">Tất cả</Option>
              <Option className="dv-option">Đang chờ</Option>
              <Option className="dv-option">Đã sử dụng</Option>
              <Option className="dv-option">Bỏ qua</Option>
            </Select>
          </FormSelect>
        </Block2>
      </Wrapper>
      <WrapperSt>
        <Statiscals>
          <Table className="dv-table">
            <Tr>
              <Th>STT</Th>
              <Th>Tên dịch vụ</Th>
              <Th>Thời gian cấp</Th>
              <Th>Tình trạng</Th>
              <Th>Nguồn cấp</Th>
            </Tr>
            <Tr>
              <Td>2010001</Td>
              <Td>Khám tim mạch</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
            </Tr>
            <Tr>
              <Td>2010002</Td>
              <Td>Răng hàm mặt</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Đã sử dụng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
            </Tr>
            <Tr>
              <Td>2010003</Td>
              <Td>Khám sản - Phụ khoa</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Bỏ qua</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
            </Tr>
            <Tr>
              <Td>2010004</Td>
              <Td>Răng hàm mặt</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
            </Tr>
            <Tr>
              <Td>2010005</Td>
              <Td>Tai mũi họng</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
            </Tr>
            <Tr>
              <Td>2010006</Td>
              <Td>Khám tổng quát</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Bỏ qua</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
            </Tr>
            <Tr>
              <Td>2010007</Td>
              <Td>Khám hô hấp</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
            </Tr>
            <Tr>
              <Td>2010008</Td>
              <Td>Khám hô hấp</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Đã sử dụng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
            </Tr>
            <Tr>
              <Td>2010009</Td>
              <Td>Tai mũi họng</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Bỏ qua</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
            </Tr>
            <Tr>
              <Td>2010010</Td>
              <Td>Khám sản - Phụ khoa</Td>
              <Td>07:20 - 07/10/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
            </Tr>
          </Table>
        </Statiscals>
        <FormAdd>
          <Link to={"#Download"} className="db-fAdd">
            <ButtonAdd>
              <Add
                style={{
                  borderRadius: "25%",
                  backgroundColor: "#ff7506",
                  color: "#fff2e7",
                  marginLeft: "24px",
                  marginTop: "14px",
                }}
              />
              <LabelAdd>Tải về</LabelAdd>
            </ButtonAdd>
          </Link>
        </FormAdd>
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
