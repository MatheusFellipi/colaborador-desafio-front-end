import { ReactNode } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Fieldset } from "./styles";

type InputType = {
  children: ReactNode;
};

export function DropDownDadosPessoal() {
  return (
    <>
      <Fieldset>
        <label className="__label">Departamento</label>
        <p>Comercial</p>
        <RiArrowDropDownLine className="icon" />
      </Fieldset>
    </>
  );
}
