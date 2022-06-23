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
  top: -60px;
  left: -60px;
  width: 1300px;
  height: 580px;
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
  top: 275px;
  left: 1340px;

  & :hover {
    cursor: pointer;
  }
`;

const ButtonAdd = styled.button`
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
const Block3 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 300px;
  height: 72px;
  left: 525px;
  top: 156px;
`;
const Block4 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 300px;
  height: 72px;
  left: 675px;
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
const Block5 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 300px;
  height: 72px;
  left: 1054px;
  top: 156px;
`;

const P = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

const FormSelect = styled.div`
  width: 140px;
`;

const Select = styled.select`
  font-size: 18px;
  width: 140px;

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

  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
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

export const StatiscalNumber = () => {
  return (
    <Container>
      <Wrapper>
        <Block1>
          <P>Tên dịch vụ</P>
          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">Tất cả</Option>
              <Option className="dv-option">Khám sản - Phụ khoa</Option>
              <Option className="dv-option">Khám răng hàm mặt</Option>
              <Option className="dv-option">Khám tai mũi họng</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "110px",
                top: "5px",
                fontSize: "28px",
              }}
              className="db-icon-sdDrop"
            />
          </FormSelect>
        </Block1>
        <Block2>
          <P>Tình trạng</P>

          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">Tất cả</Option>
              <Option className="dv-option">Đang chờ</Option>
              <Option className="dv-option">Đã sử dụng</Option>
              <Option className="dv-option">Bỏ qua</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "110px",
                top: "5px",
                fontSize: "28px",
              }}
              className="db-icon-sdDrop"
            />
          </FormSelect>
        </Block2>
        <Block3>
          <P>Nguồn cấp</P>

          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">Tất cả</Option>
              <Option className="dv-option">Kiosk</Option>
              <Option className="dv-option">Hệ thống</Option>
            </Select>
            <ArrowDropDown
              style={{
                color: "orange",
                position: "absolute",
                left: "110px",
                top: "5px",
                fontSize: "28px",
              }}
              className="db-icon-sdDrop"
            />
          </FormSelect>
        </Block3>
        <Block4>
          <P>Chọn thời gian</P>
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
        </Block4>
        <Block5>
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
        </Block5>
      </Wrapper>
      <WrapperSt>
        <Statiscals>
          <Table className="dv-table">
            <Tr>
              <Th>STT</Th>
              <Th>Tên khách hàng</Th>
              <Th>Tên dịch vụ</Th>
              <Th>Thời gian cấp</Th>
              <Th>Hạn sử dụng</Th>
              <Th>Trạng thái</Th>
              <Th>Nguồn cấp</Th>
              <Th></Th>
            </Tr>
            <Tr>
              <Td>2010001</Td>
              <Td>Lê Huỳnh Ái Vân</Td>
              <Td>Khám tim mạch</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010002</Td>
              <Td>Huỳnh Ái Vân</Td>
              <Td>Khám sản - Phụ khoa</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Đã sử dụng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010003</Td>
              <Td>Lê Ái Vân</Td>
              <Td>Khám răng hàm mặt</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010004</Td>
              <Td>Nguyễn Ái Vân</Td>
              <Td>Khám tai mũi họng</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010005</Td>
              <Td>Trần Thị Ái Vân</Td>
              <Td>Khám hô hấp</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang chờ</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010006</Td>
              <Td>Lê Huỳnh Nghĩa</Td>
              <Td>Khám tổng quát</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Đã sử dụng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010007</Td>
              <Td>Lê Huỳnh Đức</Td>
              <Td>Khám tai mũi họng</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Đã sử dụng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Kiosk</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010008</Td>
              <Td>Phạm Văn Mạnh</Td>
              <Td>Khám tổng quát</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Bỏ qua</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>2010009</Td>
              <Td>Lê Thị Cẩm Tiên</Td>
              <Td>Khám tai mũi họng</Td>
              <Td>14 : 35 - 07/11/2021</Td>
              <Td>14 : 35 - 12/11/2021</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Đã sử dụng</RowLabel>
                </RowIcon>
              </Td>
              <Td>Hệ thống</Td>
              <Td>
                <Link to={"/detail-number"}>Chi tiết</Link>
              </Td>
            </Tr>
          </Table>
        </Statiscals>
        <FormAdd>
          <Link to={"/add-number"} className="db-fAdd">
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
              <LabelAdd>Cấp số mới</LabelAdd>
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
