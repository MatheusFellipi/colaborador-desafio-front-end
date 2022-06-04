import { ChangeEvent, FormEvent } from "react";
import styled from "@emotion/styled";

type InputType = {
  name: string | undefined;
  value: string | undefined;
  checked?: boolean;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
};

export function Checkbox({ name, value, checked, handleChange }: InputType) {
  return (
    <Container>
      <input
        type="checkbox"
        onChange={handleChange}
        value={value}
        name={name}
        checked={checked}
      />
      <span className="checkmark"></span>
    </Container>
  );
}

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 6px;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  :hover input ~ .checkmark {
    background-color: #ccc;
  }

  input:checked ~ .checkmark {
    background-color: #1dd195;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
