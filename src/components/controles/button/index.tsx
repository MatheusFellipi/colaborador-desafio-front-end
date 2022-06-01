import styled from "@emotion/styled";
import { type } from "os";
import { ReactNode } from "react";
import { AiOutlineFileAdd } from "react-icons/ai";

const Button_Container = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 287px;
  height: 52px;
  border: 2px solid ${(props) => props.theme.colors.teal[100]};
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;

  p {
    width: 50px;
    height: 24px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.colors.gray[600]};
  }
  .icon {
    color: ${(props) => props.theme.colors.teal[100]};
    font-size: 24px;
    margin-right: 11px;
  }
`;

type ButtonProps = {
  text: string;
  icon?: ReactNode;
};

export function Button({ text }: ButtonProps) {
  return (
    <Button_Container>
      <AiOutlineFileAdd className="icon" /> <p>{text}</p>
    </Button_Container>
  );
}
