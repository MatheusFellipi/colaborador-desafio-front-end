import { ReactNode, useState } from "react";
import { AiOutlineClose, AiOutlineMore } from "react-icons/ai";

import {
  ActiveLi,
  Aside,
  Container,
  Dropdown,
  Fieldset,
  Heading1,
  Menu,
  Overlay,
  Page,
  Tabs_container,
  Tela,
  Wrapup,
} from "./styles";

import { PgLand } from "../pa";
import { Users } from "../user";
import Image from "next/image";
import { Header } from "../header";

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
      <Header />
      <Tela>
        <Aside></Aside>
        <Container>
          <Heading1>Colaboradores</Heading1>
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
                  <ActiveLi
                    active={activeTab === "colaboradores" ? true : false}
                    onClick={handleTabColaboradores}
                  >
                    colaboradores
                  </ActiveLi>
                  <ActiveLi
                    active={activeTab === "cargo" ? true : false}
                    value={"cargo"}
                    className={activeTab === "cargo" ? "active" : ""}
                    onClick={handleTabCargo}
                  >
                    cargo
                  </ActiveLi>
                </ul>
              </nav>
            </Tabs_container>

            <Page>{activeTab === "colaboradores" ? <PgLand /> : ""}</Page>
          </section>
        </Container>
      </Tela>

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
