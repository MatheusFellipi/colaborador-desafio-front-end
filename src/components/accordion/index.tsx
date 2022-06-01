import { Avatar } from "../avatar";
import {
  Accordion_body,
  Accordion_container,
  Accordion_header,
  Dropdown,
  Text,
} from "./styles";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Badge } from "../badge";
import { Button } from "../controles/button";
import { useState } from "react";

export function Accordion() {
  const [hide, setHide] = useState(true);
  function handleHide() {
    setHide(!hide);
  }
  return (
    <Accordion_container hide={hide}>
      <Accordion_header onClick={handleHide}>
        <h1>Nome completo</h1>
        <div className="accordion_avatar">
          <Avatar />
          <Text>Pikachu Soares do Santos Dias</Text>
          <RiArrowDropDownLine fontSize={"3rem"} className="arrow" />
        </div>
      </Accordion_header>
      <Dropdown hide={hide}>
        <Accordion_body>
          <div className="Accordion_section">
            <p>Departamento</p>
            <span>Administrativo</span>
          </div>

          <div className="Accordion_section">
            <p>Cargo</p>
            <span>Diretor</span>
          </div>
        </Accordion_body>
        <Accordion_body>
          <div className="Accordion_section">
            <p>Unidade</p>
            <span>123456789</span>
          </div>

          <div className="Accordion_section">
            <p>Unidade</p>
            <span>Quartel General</span>
          </div>
        </Accordion_body>
        <Accordion_body>
          <div className="Accordion_section">
            <p>Status</p>
            <Badge text="Ativo" />
          </div>
        </Accordion_body>
        <Accordion_body>
          <Button />
        </Accordion_body>
      </Dropdown>
    </Accordion_container>
  );
}
