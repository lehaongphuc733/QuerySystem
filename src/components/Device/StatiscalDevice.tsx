import styled from "styled-components";
import {
  ArrowDropDown,
  Search,
  Add,
  ArrowLeft,
  ArrowRight,
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
  top: -60px;
  left: -60px;
  width: 1300px;
  height: 400px;
  border-collapse: collapse;
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

const IconGreen = styled.div`
  width: 10px;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  color: green;
  background-color: green;
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
const Block3 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 300px;
  height: 72px;
  left: 1054px;
  top: 156px;
`;

const P = styled.p`
  font-weight: 500;
`;

// const Dropdown = styled.div`
//   position: relative;
//   width: 250px;
// `;

// const DropdownSelect = styled.div`
//   padding: 3px;
//   border-radius: 12px;
//   background-color: white;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 20px;
//   cursor: pointer;
// `;

// const DropdownList = styled.div``;

const FormSelect = styled.div``;

const Select = styled.select``;

const Option = styled.option``;

// const Item = styled.div``;

// const SpanSelect = styled.span`
//   margin-left: 10px;
// `;

// const Label = styled.label`
//   margin-left: 0px;
//   margin-top: 6px;
// `;

// const Button = styled.button`
//   display: flex;
//   justify-content: space-between;
//   padding: 10px;
//   background-color: #ffffff;
//   width: 250px;
//   border: 0.2px solid #5f3d3d;
//   border-radius: 10px;
//   padding: auto;
// `;

const Input = styled.input`
  width: 250px;
  font-size: 18px;
  border: 0.2px solid #e4e4e6;
  border-radius: 10px;
  padding: 12px;
`;

export const StatiscalDevice = () => {
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
          <P>Trạng thái kết nối</P>

          <FormSelect className="dv-form-sl">
            <Select className="dv-select">
              <Option className="dv-option">Tất cả</Option>
              <Option className="dv-option">Kết nối</Option>
              <Option className="dv-option">Mất kết nối</Option>
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
      <WrapperSt>
        <Statiscals>
          <Table className="dv-table">
            <Tr>
              <Th>Mã thiết bị</Th>
              <Th>Tên thiết bị</Th>
              <Th>Địa chỉ IP</Th>
              <Th>Trạng thái hoạt động</Th>
              <Th>Trạng thái kết nối</Th>
              <Th>Dịch vụ sử dụng</Th>
              <Th></Th>
              <Th></Th>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Ngưng hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Mất kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Mất kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Ngưng hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Mất kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Ngưng hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>KIO_01</Td>
              <Td>Kiosk</Td>
              <Td>192.168.1.10</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Mất kết nối</RowLabel>
                </RowIcon>
              </Td>
              <Td id="row-6">
                Khám tim mạch, khám mắt...
                <Link to={"#"}>Xem thêm</Link>
              </Td>
              <Td>
                <Link to={"/detail-device"}>Chi tiết</Link>
              </Td>
              <Td>
                <Link to={"/update-device"}>Cập nhật</Link>
              </Td>
            </Tr>
          </Table>
        </Statiscals>
        <FormAdd>
          <Link to={"/add-device"} className="db-fAdd">
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
              <LabelAdd>Thêm thiết bị</LabelAdd>
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
