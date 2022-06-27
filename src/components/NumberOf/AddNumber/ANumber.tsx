import styled from "styled-components";
import { Replay, ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { NewNumber } from "./NewNumber";

const Container = styled.div`
  border-radius: 12px;
  background-color: white;
  position: absolute;
  top: 150px;
  left: 220px;
  width: 1200px;
  height: 650px;
  /* opacity: 0.5; */
`;

const TitleIf = styled.p`
  color: #ff8523;
  font-size: 40px;
  text-align: center;
  font-weight: 500;
  margin-left: 20px;
`;

const P = styled.p`
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  margin-top: -20px;
`;

const FormSelect = styled.div`
  width: 440px;
  margin-left: 400px;
`;

const Select = styled.select`
  font-size: 18px;
  outline: 0.2px solid #8e8d97;
  width: 440px;
  color: #8e8d97;
`;

const Option = styled.option``;

const ButtonForm = styled.div`
  width: 1200px;
  margin-top: 10px;
  display: flex;
  position: absolute;
  top: 290px;
  left: 50px;
  text-align: center;
`;
const ButtonCancel = styled.div`
  margin-left: 400px;

  & :hover {
    cursor: pointer;
  }
`;
const BCancel = styled.button`
  border-radius: 12px;
  border: 0.1px solid #ff9138;
  width: 150px;
  color: #ff9138;
  background-color: #fff2e7;
  height: 50px;
`;

export const ANumber = () => {
  return (
    <Container>
      <TitleIf>Cấp số mới</TitleIf>
      <P>Dịch vụ khách hàng lựa chọn</P>

      <FormSelect className="dv-form-sl">
        <Select className="dv-select">
          <Option className="dv-option" selected>
            Chọn dịch vụ
          </Option>
          <Option className="dv-option">Khám tim mạch</Option>
          <Option className="dv-option">Khám sản - Phụ khoa</Option>
          <Option className="dv-option">Khám răng hàm mặt</Option>
          <Option className="dv-option">Khám tai mũi họng</Option>
        </Select>
        <ArrowDropDown
          style={{
            color: "orange",
            position: "absolute",
            left: "400px",
            top: "2.5px",
            fontSize: "40px",
          }}
          className="db-icon-sdDrop"
        />
      </FormSelect>
      <ButtonForm className="dv-bcancel">
        <ButtonCancel>
          <Link to={"/numberof"}>
            <BCancel>Hủy bỏ</BCancel>
          </Link>
        </ButtonCancel>
        <NewNumber title="In số" />
      </ButtonForm>
    </Container>
  );
};
