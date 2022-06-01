import Image from "next/image";
import { ReactNode } from "react";
import { Fieldset } from "./styles";
import { BsSearch } from "react-icons/bs";

type InputType = {
  children: ReactNode;
};

export function InputComponents() {
  return (
    <Fieldset>
      <label className="input">
        <BsSearch className="icon" />
        <input
          className="input__field"
          type="text"
          placeholder="Pesquise por nome ou cpf "
          value="Pesquise por nome ou cpf"
        />
        <span className="input__label">Pesquisa por</span>
      </label>
    </Fieldset>
  );
}
