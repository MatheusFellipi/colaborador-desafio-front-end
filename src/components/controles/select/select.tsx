import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dropdown, Menu, Overlay } from "./styles";

export function Select() {
  const [hide, setHide] = useState(false);

  function handleHide() {
    setHide(!hide);
  }

  return (
    <>
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
    </>
  );
}
