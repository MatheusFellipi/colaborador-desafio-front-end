import styled from "@emotion/styled";
import { AiOutlineCreditCard } from "react-icons/ai";

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 316px;
  height: 70px;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  > div {
    margin-left: 8px;
    span {
      width: 23px;
      height: 14px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 120%;
      display: flex;
      align-items: center;
      color: #587169;
    }
    p {
      width: 103px;
      height: 14px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      display: flex;
      align-items: center;
      color: #587169;
    }
  }
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 38px;
  height: 38px;
  background: #cad6d1;
  border-radius: 80px;
`;

export function CardDadosPessoal() {
  return (
    <Div>
      <Icon>
        <AiOutlineCreditCard />
      </Icon>
      <div>
        <span>CPF</span>
        <p>869 748 070 15</p>
      </div>
    </Div>
  );
}
