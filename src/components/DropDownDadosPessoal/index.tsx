import { RiArrowDropDownLine } from "react-icons/ri";
import styled from "@emotion/styled";

type DropDownDadosPessoalProps = {
  description: string | undefined;
  title: string;
  opiton?: any[];
  background?: string;
};

export function DropDownDadosPessoal({
  description,
  title,
  background,
}: DropDownDadosPessoalProps) {
  return (
    <>
      <Fieldset background={background}>
        <label className="__label">{title}</label>
        <p>{description}</p>
        <RiArrowDropDownLine className="icon" />
      </Fieldset>
    </>
  );
}

type FieldsetProps = {
  background?: string;
};
export const Fieldset = styled.fieldset<FieldsetProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
  background: ${({ background }) => background};
  border: 2px solid #cad6d1;
  border-radius: 8px;
  width: 100%;
  height: 56px;

  .icon {
    position: absolute;
    top: -1.5px;
    right: 4px;
    padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
    margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
    font-size: 3rem;
  }

  .__label {
    position: absolute;
    top: -14px;
    left: 4px;

    height: 1px;
    font-size: 14px;
    line-height: 1px;

    color: #a3b8b0;
    background: #fff;

    padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
    margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    transition: transform 120ms ease-in;
  }
`;
