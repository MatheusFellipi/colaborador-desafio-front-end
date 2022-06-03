import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import { AiOutlineClose, AiOutlineMore } from "react-icons/ai";
import { Cargo } from "../cargo";
import { PgLand } from "../colaboradores";
import { Overlay } from "../overlay";

export function Tabs() {
  const [activeTab, setActiveTab] = useState("colaboradores");

  const handleTabColaboradores = () => {
    setActiveTab("colaboradores");
  };

  const handleTabCargo = () => {
    setActiveTab("cargo");
  };

  const [hide, setHide] = useState(true);

  function handleHide() {
    setHide(!hide);
  }

  return (
    <>
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

      <Page>{activeTab === "colaboradores" ? <PgLand /> : <Cargo />}</Page>

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
      <Overlay hide={hide} handleHide={handleHide} />
    </>
  );
}

type ActiveLiprops = {
  active: boolean;
};

export const Fieldset = styled.fieldset`
  border: 0;
  width: 100%;
  padding: 0 16px;

  @media (min-width: 520px) {
    display: none;
  }
`;

type IsHideAllProps = {
  hide: boolean;
};

const Menu = styled.div<IsHideAllProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  transition: 0.4s;
  cursor: pointer;

  border: 2px solid
    ${(props) =>
      props.hide ? props.theme.colors.black : props.theme.colors.gray[200]};

  border-radius: 8px;
  padding: 16px 22px;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
`;

const Page = styled.div`
  width: 100%;
`;
const ActiveLi = styled.li<ActiveLiprops>`
  width: 196px;
  height: 30px;
  list-style: none;
  border-bottom: ${(props) => (props.active ? "2px solid #22E0A1 " : "")};
`;

const Tabs_container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
  height: 30px;
  border-bottom: 2px solid #eaefed;
  margin-bottom: 40px;

  @media (max-width: 520px) {
    display: none;
  }

  .active {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: #34423d;
  }

  nav {
    display: flex;
    width: 100%;
    ul {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      border: 0;
      color: #a3b8b0;
    }
  }
`;

const Dropdown = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide ? "none" : "block")};
  position: fixed;
  bottom: 0;
  padding: 32px 29px 0 0;
  background: ${(props) => props.theme.colors.white};
  width: 98%;
  height: 241px;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 12px 12px 0px 0px;
  z-index: 300;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0 0 0 24px;
    }
  }

  ul {
    list-style-type: none;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    padding: 25px 32px;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${(props) => props.theme.colors["gray-green"][100]};
    li {
      cursor: pointer;
    }
    li:last-child {
      margin-top: 34px;
    }
  }
`;
