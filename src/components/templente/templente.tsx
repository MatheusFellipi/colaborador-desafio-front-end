import { ReactNode, useState } from "react";
import { AiOutlineClose, AiOutlineMore } from "react-icons/ai";

import {
  Container,
  Dropdown,
  Fieldset,
  Header,
  Heading1,
  Menu,
  Overlay,
  Page,
  Tabs_container,
  Wrapup,
} from "./styles";

import { PgLand } from "../pa";

type TempleteType = {
  children: ReactNode;
};

export function Templete() {
  const [activeTab, setActiveTab] = useState("colaboradores");

  const handleTabColaboradores = () => {
    setActiveTab("colaboradores");
  };

  const handleTabCargo = () => {
    setActiveTab("cargo");
  };

  const [hide, setHide] = useState(false);

  function handleHide() {
    setHide(!hide);
  }

  return (
    <Wrapup>
      <Header>oi</Header>
      <Heading1>Colaboradores</Heading1>

      <Container>
        <section className="main">
          <Fieldset>
            <Menu onClick={handleHide} hide={hide}>
              <p>{activeTab}</p>
              <AiOutlineMore />
            </Menu>
          </Fieldset>

          <Tabs_container>
            <nav>
              <ul>
                <li
                  className={activeTab === "colaboradores" ? "active" : ""}
                  onClick={handleTabColaboradores}
                >
                  colaboradores
                </li>
                <li
                  value={"cargo"}
                  className={activeTab === "cargo" ? "active" : ""}
                  onClick={handleTabCargo}
                >
                  cargo
                </li>
              </ul>
            </nav>
          </Tabs_container>
          <Page>{activeTab === "colaboradores" ? <PgLand /> : ""}</Page>
        </section>
      </Container>

      <Dropdown hide={hide}>
        <div>
          <h1 className="title">Categorias </h1>
          <AiOutlineClose />
        </div>

        <ul>
          <li value={"colaboradores"} onClick={handleTabColaboradores}>
            colaboradores
          </li>
          <li value={"cargo"} onClick={handleTabCargo}>
            cargo
          </li>
        </ul>
      </Dropdown>
      <Overlay hide={hide} onClick={handleHide} />
    </Wrapup>
  );
}
