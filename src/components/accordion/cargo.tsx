import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from "../button";
import { useState } from "react";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { Overlay } from "../overlay";
import {
  Accordion_avatar,
  Accordion_body,
  Accordion_container,
  Accordion_header,
  Dropdown,
  Dropdown_Button,
} from "./styles";
import { Text } from "../text";
import Link from "next/link";

type RolesType = {
  id?: number;
  name: string;
  departament: string;
  agents_quantity: number;
};

export function Cargos({ id, name, departament, agents_quantity }: RolesType) {
  const [hide, setHide] = useState(true);
  const [hideButton, setHideButton] = useState(true);

  function handleHide() {
    setHide(!hide);
  }

  function handleHideButton() {
    setHideButton(!hideButton);
  }

  return (
    <Accordion_container hide={hide}>
      <Accordion_header
        flexDirection="row"
        justifyContent="space-between"
        hide={hide}
        onClick={handleHide}
      >
        <Accordion_avatar hide={hide} flexDirection="column">
          <Text text="Cargo" />
          <span>{name}</span>
        </Accordion_avatar>
        <Accordion_avatar hide={hide} flexDirection="column">
          <Text text="Departamento" />
          <span>{departament}</span>
        </Accordion_avatar>
        <RiArrowDropDownLine fontSize={"3rem"} className="arrow" />
      </Accordion_header>

      <Dropdown hide={hide}>
        <Accordion_body padding="16px 0px">
          <div className="Accordion_section">
            <Text text="Colaboradores" />
            <span>{agents_quantity}</span>
          </div>
        </Accordion_body>

        <Accordion_body padding="16px">
          <Button
            handleClick={handleHideButton}
            icon={<AiOutlineFileAdd className="icon" />}
            text="Ações"
          />
        </Accordion_body>
      </Dropdown>

      <Dropdown_Button hide={hideButton}>
        <ul>
          <Link href={"cargo/" + id}>
            <li>
              <AiOutlineEye /> Ver cargo
            </li>
          </Link>
          <li>
            <AiOutlineDelete /> Excluir
          </li>
        </ul>
      </Dropdown_Button>
      <Overlay hide={hideButton} handleHide={handleHideButton} />
    </Accordion_container>
  );
}
