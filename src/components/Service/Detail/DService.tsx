import styled from "styled-components";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDropDown,
  Search,
  Edit,
  Replay,
  DateRange,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { DatePick } from "../../DatePick/DatePick";

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 150px;
  left: 220px;
  flex-direction: row;
`;

const BodyLeft = styled.div`
  background-color: white;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 620px;
`;
const TitleF1 = styled.div``;
const P = styled.p`
  font-weight: 600;
  font-size: 20px;
  margin-left: 10px;
  color: #ff780c;
`;

const BlockF1 = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
`;
const F1Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const TLabel = styled.p`
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  margin-top: 24px;
`;
const Lb = styled.label`
  font-weight: 400;
  margin-left: 10px;
  font-size: 18px;
`;
const F1Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Blom = styled.div`
  display: flex;
  flex-direction: row;
`;
const Number1 = styled.div`
  border: 0.1px solid #9c959a;
  border-radius: 12px;
  width: 55px;
  position: absolute;
  top: 350px;
  height: 40px;
  text-align: left;
`;
const LNumber1 = styled.label`
  position: absolute;
  top: 6.5px;
  left: 10px;
`;
const LNumber2 = styled.label`
  position: absolute;
  top: 6.5px;
  left: 10px;
`;
const Number2 = styled.div`
  border-radius: 12px;
  border: 0.1px solid #9c959a;
  width: 55px;
  position: absolute;
  top: 350px;
  left: 255px;
  height: 40px;
  text-align: left;
`;
const Number3 = styled.div`
  border-radius: 12px;
  border: 0.1px solid #9c959a;
  width: 55px;
  position: absolute;
  top: 415px;
  left: 135px;
  height: 40px;
  text-align: left;
`;
const LNumber3 = styled.label`
  position: absolute;
  top: 6.5px;
  left: 10px;
`;
const TContent = styled.p`
  margin-left: 10px;
  color: #9c959a;
  margin-top: 24px;
  font-weight: 400;
  font-size: 18px;
`;

const BlockF2 = styled.div``;
const BlockF3 = styled.div``;

const BodyRight = styled.div`
  background-color: white;
  border-radius: 12px;
  margin-left: 20px;
  display: flex;
  width: 680px;
  height: 620px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Block1 = styled.div`
  position: absolute;
  width: 90px;
  height: 72px;
  left: 434px;
  top: 0px;
`;
const Block2 = styled.div`
  position: absolute;
  width: 120px;
  height: 72px;
  left: 575px;
  top: 0px;
`;
const FormDate = styled.div`
  display: flex;
  gap: 5px;
  height: 42px;
  align-items: center;
  input {
    height: 20px;
    width: 96.5px;
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
const P1 = styled.p`
  font-weight: 500;
  font-size: 16px;
`;
const Block3 = styled.div`
  /* border: 0.2px solid #e4e4e6; */
  position: absolute;
  width: 100px;
  height: 72px;
  left: 834px;
  top: 0px;
`;
const FormSelect = styled.div`
  width: 50px;
`;

const Select = styled.select`
  font-size: 14px;
`;

const Option = styled.option`
  font-size: 14px;
`;
const Input = styled.input`
  width: 220px;
  font-size: 14px;
  border: 0.2px solid #e4e4e6;
  border-radius: 10px;
  padding: 12px;
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

const FormUpdate = styled.div`
  margin: auto;
  position: absolute;
  top: 0px;
  left: 1120px;

  & :hover {
    cursor: pointer;
  }
`;

const ButtonUpdate = styled.button`
  background-color: #fff2e7;
  width: 85px;
  border: none;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const LabelUpdate = styled.label`
  color: orange;
  font-size: 15.5px;
`;

const FormRe = styled.div`
  margin: auto;
  position: absolute;
  top: 110px;
  left: 1120px;

  & :hover {
    cursor: pointer;
  }
`;

const ButtonRe = styled.button`
  background-color: #fff2e7;
  width: 80px;
  border: none;
  height: 90px;
  display: flex;
  flex-direction: column;
`;

const LabelRe = styled.label`
  color: orange;
  font-size: 15.5px;
  text-align: center;
  margin-left: 4px;
`;

const Table = styled.table`
  position: absolute;
  border-radius: 1em;
  top: -220px;
  left: 170px;
  width: 800px;
  height: 550px;
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

const Td = styled.td``;
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

const TabNext = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  /* background-color: #f6f6f6; */
  position: absolute;
  top: 589px;
  left: 875px;
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

export const DService = () => {
  return (
    <Container>
      <BodyLeft>
        <TitleF1>
          <P>Thông tin dịch vụ</P>
        </TitleF1>
        <BlockF1>
          <F1Left>
            <TLabel>Mã dịch vụ: </TLabel>
            <TLabel>Tên dịch vụ: </TLabel>
            <TLabel>Mô tả: </TLabel>
          </F1Left>
          <F1Right>
            <TContent>201</TContent>
            <TContent>Khám tim mạch</TContent>
            <TContent>Chuyên các bệnh lý về tim</TContent>
          </F1Right>
        </BlockF1>
        <TitleF1>
          <P>Quy tắc cấp số</P>
        </TitleF1>
        <BlockF1>
          <F1Left>
            <TLabel>Tăng tự động: </TLabel>
            <TLabel>Prefix: </TLabel>
            <TLabel>Reset mỗi ngày </TLabel>
            <Lb>Ví dụ: 201-2001</Lb>
          </F1Left>
          <F1Right>
            <Blom>
              <Number1>
                <LNumber1>0001</LNumber1>
              </Number1>
              <Lb
                style={{ position: "absolute", top: "356.5px", left: "200px" }}
              >
                đến
              </Lb>
              <Number2>
                <LNumber2>9999</LNumber2>
              </Number2>
            </Blom>

            <Number3>
              <LNumber3>0001</LNumber3>
            </Number3>
          </F1Right>
        </BlockF1>
      </BodyLeft>
      <BodyRight>
        <Wrapper>
          <Block1>
            <P1>Trạng thái</P1>
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
                  left: "100px",
                  top: "5px",
                }}
                className="db-icon-sdDrop"
              />
            </FormSelect>
          </Block1>
          <Block2>
            <P1>Chọn thời gian</P1>

            <FormDate>
              <DatePick></DatePick>
              <DateRange
                style={{
                  color: "#ff7506",
                  position: "absolute",
                  left: "85px",
                }}
              />
              <ArrowRight style={{ position: "absolute", left: "139px" }} />
              <DatePick></DatePick>
              <DateRange
                style={{
                  color: "#ff7506",
                  position: "absolute",
                  left: "215px",
                }}
              />
            </FormDate>
          </Block2>
          <Block3>
            <P1>Từ khóa</P1>
            <Input type="text" placeholder="Nhập từ khóa"></Input>
            <Search
              style={{
                color: "orange",
                position: "absolute",
                left: "210px",
                top: "60px",
              }}
            />
          </Block3>
        </Wrapper>
        <Statiscals>
          <Table className="dv-table">
            <Tr>
              <Th>Số thứ tự</Th>
              <Th>Trạng thái</Th>
            </Tr>
            <Tr>
              <Td>20100001</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Đã hoàn thành</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100002</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Đã hoàn thành</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100003</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang thực hiện</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100004</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Vắng</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100005</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Đã hoàn thành</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100006</Td>
              <Td>
                <RowIcon>
                  <IconBlue></IconBlue>
                  <RowLabel>Đang thực hiện</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100007</Td>
              <Td>
                <RowIcon>
                  <IconGray></IconGray>
                  <RowLabel>Vắng</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100007</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Đã hoàn thành</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
            <Tr>
              <Td>20100008</Td>
              <Td>
                <RowIcon>
                  <IconGreen></IconGreen>
                  <RowLabel>Đã hoàn thành</RowLabel>
                </RowIcon>
              </Td>
            </Tr>
          </Table>
        </Statiscals>
        <FormUpdate>
          <Link to={"/update-service"} className="sb-fUpdate">
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
              <LabelUpdate>Cập nhật danh sách</LabelUpdate>
            </ButtonUpdate>
          </Link>
        </FormUpdate>
        <FormRe>
          <Link to={"/services"} className="sb-fRe">
            <ButtonRe>
              <Replay
                style={{
                  borderRadius: "25%",
                  backgroundColor: "#ff7506",
                  color: "#fff2e7",
                  marginLeft: "24px",
                  marginTop: "14px",
                }}
              />
              <LabelRe>Quay lại</LabelRe>
            </ButtonRe>
          </Link>
        </FormRe>
      </BodyRight>
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
