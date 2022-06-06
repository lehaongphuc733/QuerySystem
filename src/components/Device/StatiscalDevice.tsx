import styled from "styled-components";
import { ArrowDropDown, Search, Add } from "@material-ui/icons";
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
  position: absolute;
  top: 300px;
  left: 220px;
  border-radius: 12px;
  background-color: orange;
  width: 1110px;
  height: 465px;
`;

const FormAdd = styled.div`
  margin: auto;
  position: absolute;
  top: 300px;
  left: 1340px;

  & :hover {
    cursor: pointer;
  }
`;

const ButtonAdd = styled.button`
  background-color: #ffffff;
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
  background-color: gray;
  position: absolute;
  top: 770px;
  left: 1100px;
  width: 230px;
  height: 30px;
  border-radius: 12px;
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
const Block3 = styled.div`
  position: absolute;
  width: 300px;
  height: 72px;
  left: 1054px;
  top: 156px;
`;

const P = styled.p``;

const Label = styled.label`
  margin-left: 0px;
  margin-top: 6px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  width: 250px;
  border: 0.2px solid #5f3d3d;
  border-radius: 10px;
  padding: auto;
`;

const Input = styled.input`
  width: 250px;
  border: 0.2px solid #5f3d3d;
  border-radius: 10px;
  padding: 12px;
`;

export const StatiscalDevice = () => {
  return (
    <Container>
      <Wrapper>
        <Block1>
          <P>Trạng thái hoạt động</P>
          <Button>
            <Label>Tất cả</Label>
            <ArrowDropDown
              style={{ color: "orange" }}
              className="db-icon-sdDrop"
            />
          </Button>
        </Block1>
        <Block2>
          <P>Trạng thái kết nối</P>
          <Button>
            <Label>Tất cả</Label>
            <ArrowDropDown
              className="db-icon-sdDrop"
              style={{ color: "orange" }}
            />
          </Button>
        </Block2>
        <Block3>
          <P>Từ khóa</P>
          <Input type="text" placeholder="Nhập từ khóa">
            {/* <Search /> */}
          </Input>
        </Block3>
      </Wrapper>
      <WrapperSt>
        <Statiscals></Statiscals>
        <FormAdd>
          <Link to={"#"} className="db-fAdd">
            <ButtonAdd>
              <Add
                style={{
                  borderRadius: "25%",
                  backgroundColor: "orange",
                  color: "white",
                  marginLeft: "24px",
                  marginTop: "14px",
                }}
              />
              <LabelAdd>Thêm thiết bị</LabelAdd>
            </ButtonAdd>
          </Link>
        </FormAdd>
      </WrapperSt>
      <TabNext></TabNext>
    </Container>
  );
};
