import styled from "@emotion/styled";
import { ReactNode } from "react";

type CardDadosPessoalProps = {
  titlo: string | undefined;
  description: string | undefined;
  icon?: ReactNode;
};

export function CardDadosPessoal({
  titlo,
  description,
  icon,
}: CardDadosPessoalProps) {
  return (
    <Div>
      <Icon>{icon}</Icon>
      <div>
        <span>{titlo}</span>
        <p>{description}</p>
      </div>
    </Div>
  );
}

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 70px;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;
  > div {
    margin-left: 0.9rem;
    span {
      width: 23px;
      height: 14px;
      font-size: 12px;
      line-height: 120%;
      display: flex;
      align-items: center;
      color: #587169;
    }
    p {
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
