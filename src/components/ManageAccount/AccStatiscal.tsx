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
  height: 600px;
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
  width: 90px;
  border: none;
  height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
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

const Select = styled.select``;

const Option = styled.option``;

const Input = styled.input`
  width: 250px;
  font-size: 18px;
  border: 0.2px solid #e4e4e6;
  border-radius: 10px;
  padding: 12px;
`;

export const AccStatiscal = () => {
  return (
    <Container>
      <Wrapper>
        <Block1>
          <P>Tên vai trò</P>
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
              <Th>Họ tên</Th>
              <Th>Số điện thoại</Th>
              <Th>Email</Th>
              <Th>Vai trò</Th>
              <Th>Trạng thái hoạt động</Th>
              <Th></Th>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@10</Td>
              <Td>Nguyen Van A</Td>
              <Td>0919236712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@22</Td>
              <Td>Nguyen Van B</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@12</Td>
              <Td>Nguyen Van C</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Ngưng hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@18</Td>
              <Td>Nguyen Van D</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@19</Td>
              <Td>Nguyen Van T</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@18</Td>
              <Td>Nguyen Van K</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@16</Td>
              <Td>Nguyen Van N</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@14</Td>
              <Td>Nguyen Van M</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconRed></IconRed>
                  <RowLabel>Ngưng hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
              </Td>
            </Tr>
            <Tr>
              <Td>tuyetnguyen@13</Td>
              <Td>Nguyen Van L</Td>
              <Td>0919256712</Td>
              <Td>tuyetnguyen123@gmail.com</Td>
              <Td>kế toán</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Hoạt động</RowLabel>
                </RowIcon>
              </Td>
              <Td>
                <Link to={"/update-maAct"}>Cập nhật</Link>
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
                  marginLeft: "27px",
                  marginTop: "14px",
                }}
              />
              <LabelAdd>Thêm tài khoản</LabelAdd>
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
