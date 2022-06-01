import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "@emotion/styled";

export function Select() {
  const [hide, setHide] = useState(false);

  function handleHide() {
    setHide(!hide);
  }

  return (
    <Fieldset>
      <Overlay hide={hide} onClick={handleHide} />
      <Menu onClick={handleHide} hide={hide}>
        <p>Colaboradores</p>
        <Image src="/more-vertical.svg" alt="" width="20rem" height="20rem" />
      </Menu>
      <Dropdown hide={hide}>
        <div>
          <h1>Categorias </h1>
          <Image
            src={"/close.svg"}
            alt={"fechar menu"}
            width="20rem"
            height="20rem"
          ></Image>
        </div>

        <ul>
          <Link href={"Cargo"}>
            <li className="link" value="Cargo">
              <a>Cargo</a>
            </li>
          </Link>
          <Link href={"Colaboradores"}>
            <li className="link">
              <a>Colaboradores</a>
            </li>
          </Link>
        </ul>
      </Dropdown>
    </Fieldset>
  );
}

type IsHideAllProps = {
  hide: boolean;
};

export const Fieldset = styled.fieldset`
  border: 0;
  width: 100%;
`;

export const Menu = styled.div<IsHideAllProps>`
  position: relative;
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

export const Dropdown = styled.div<IsHideAllProps>`
  position: absolute;
  padding: 32px 29px 0 0;
  display: ${(props) => (props.hide === false ? "none" : "block")};
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
    li {
      cursor: pointer;
    }
    li:last-child {
      margin-top: 34px;
    }

    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: ${(props) => props.theme.colors["gray-green"][100]};
    }
  }
`;

export const Overlay = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide === false ? "none" : "block")};
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
