import styled from "@emotion/styled";
import { ReactNode } from "react";

type ButtonContainerProps = {
  inactive?: boolean;
};

const Button_Container = styled.button<ButtonContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 24px;
  width: 100%;
  height: 52px;
  border: 2px solid
    ${(props) => (props.inactive ? "#A3B8B0" : props.theme.colors.teal[100])};
  background: ${(props) => props.theme.colors.white};
  border-radius: 8px;

  svg {
    color: ${(props) =>
      props.inactive ? "#A3B8B0" : props.theme.colors.teal[100]};
    font-size: 24px;
    margin-right: 11px;
  }

  p {
    font-weight: 600;
    color: ${(props) =>
      props.inactive ? "#A3B8B0" : props.theme.colors.gray[600]};
  }
`;

type ButtonProps = {
  text: string;
  icon?: ReactNode;
  handleClick: () => void;
  inactive?: boolean;
};

export function Button({ inactive, text, icon, handleClick }: ButtonProps) {
  return (
    <Button_Container inactive={inactive} onClick={handleClick}>
      {icon} <p>{text}</p>
    </Button_Container>
  );
}
