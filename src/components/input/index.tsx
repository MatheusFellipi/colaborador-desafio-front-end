import { ChangeEvent, createRef, ReactNode, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import { BsSearch } from "react-icons/bs";

type InputType = {
  name: string;
  label: string;
  values: string;
  type?: "text";
  iconHide?: boolean;
  hadleOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  values,
  hadleOnChange,
  type,
  name,
  label,
  iconHide,
}: InputType) {
  return (
    <Fieldset>
      <label className="input">
        {iconHide ? "" : <BsSearch className="icon" />}
        <input
          className="input__field"
          type={type}
          placeholder="Pesquise por nome ou cpf "
          value={values}
          onChange={hadleOnChange}
          name={name}
        />
        <span className="input__label">{label}</span>
      </label>
    </Fieldset>
  );
}

export const Fieldset = styled.div`
  margin: 1rem 0;
  width: 100%;
  .input {
    position: relative;
    width: 100%;

    &__label {
      position: absolute;
      left: 0;
      top: 0;
      padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
      margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
      white-space: nowrap;
      transform: translate(0, 0);
      transform-origin: 0 0;
      background: #fff;
      transition: transform 120ms ease-in;
      transform: translate(0.25rem, -65%) scale(0.8);
      color: #cad6d1;
    }
    &__field {
      width: 100%;
      display: block;
      border: 2px solid ${(props) => props.theme.colors.gray[200]};
      border-radius: 8px;
      padding: calc(0.5rem * 1.5) 0.5rem;
      background: transparent;
      border-radius: 4px;

      &:focus,
      &:not(:placeholder-shown) {
        & + .input__label {
          color: #000000;
        }
      }
    }

    input {
      padding-top: 0.9rem;
      padding-left: 3.25rem;
      ::placeholder {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #587169;
      }
    }

    .icon {
      position: absolute;
      top: 13px;
      left: 22px;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
