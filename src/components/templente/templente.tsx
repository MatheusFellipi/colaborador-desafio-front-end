import { ReactNode } from "react";
import { Aside, Back, Container, Heading1, Tela, Wrapup } from "./styles";
import { Header } from "../header";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

type TempleteType = {
  children: ReactNode;
  title?: string;
  backroute: boolean;
};

export function Templete({ children, title, backroute }: TempleteType) {
  return (
    <Wrapup>
      <Header />
      <Tela>
        <Aside></Aside>
        <Container>
          <Heading1>
            {backroute ? (
              <Back>
                <Link href={"/"}>
                  <AiOutlineArrowLeft />
                </Link>
              </Back>
            ) : (
              ""
            )}
            {title}
          </Heading1>
          <section className="main">{children}</section>
        </Container>
      </Tela>
    </Wrapup>
  );
}
