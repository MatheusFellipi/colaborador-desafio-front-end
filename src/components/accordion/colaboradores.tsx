import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  AiOutlineDelete,
  AiOutlineEye,
  AiOutlineFileAdd,
} from "react-icons/ai";

import {
  Accordion_avatar,
  Accordion_body,
  Accordion_container,
  Accordion_header,
  Dropdown,
  Dropdown_Button,
} from "./styles";

import { Text } from "../text";
import { Badge } from "../badge";
import { Button } from "../button";
import { Overlay } from "../overlay";
import { Avatar } from "../avatar";
import Link from "next/link";

type AccordionProps = {
  agent_id?: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export function Colaboradores({
  agent_id,
  name,
  image,
  department,
  branch,
  role,
  status,
}: AccordionProps) {
  const [hide, setHide] = useState(true);
  const [hideButton, setHideButton] = useState(true);

  function handleHide() {
    setHide(!hide);
  }

  function handleHideButton() {
    setHideButton(!hideButton);
  }

  return (
    <Accordion_container
      inactive={status === "inactive" ? true : false}
      hide={hide}
    >
      <Accordion_header
        flexDirection="column"
        justifyContent="space-between"
        hide={hide}
        onClick={handleHide}
      >
        <h1>Nome completo</h1>
        <Accordion_avatar>
          <Avatar
            inactive={status === "inactive" ? true : false}
            height="40px"
            width="40px"
            src={image}
          />
          <Text
            key={agent_id}
            inactive={status === "inactive" ? true : false}
            margin="auto"
            marginLeft="5px"
            text={name}
          />
          <RiArrowDropDownLine fontSize={"3rem"} className="arrow" />
        </Accordion_avatar>
      </Accordion_header>

      <Dropdown hide={hide}>
        <Accordion_body padding="16px">
          <div className="Accordion_section">
            <p>Departamento</p>
            <span>{department}</span>
          </div>

          <div className="Accordion_section">
            <p>Cargo</p>
            <span>{role}</span>
          </div>
        </Accordion_body>
        <Accordion_body padding="16px">
          <div className="Accordion_section">
            <p>Unidade</p>
            <span>123456789</span>
          </div>

          <div className="Accordion_section">
            <p>Unidade</p>
            <span>{branch}</span>
          </div>
        </Accordion_body>
        <Accordion_body padding="16px">
          <div className="Accordion_section">
            <p>Status</p>
            <Badge
              inactive={status === "inactive" ? true : false}
              text={status}
            />
          </div>
        </Accordion_body>
        <Accordion_body>
          <Button
            handleClick={handleHideButton}
            inactive={status === "inactive" ? true : false}
            icon={<AiOutlineFileAdd className="icon" />}
            text="Ações"
          />
        </Accordion_body>
      </Dropdown>

      <Dropdown_Button hide={hideButton}>
        <ul>
          <Link href={"colaborador/" + agent_id}>
            <li>
              <AiOutlineEye /> Ver colaborador
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
