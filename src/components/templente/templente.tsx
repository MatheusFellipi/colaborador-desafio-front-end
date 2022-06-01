import { ReactNode } from "react";
import { Container, Header, Heading1, Page, Wrapup } from "./styles";

type TempleteType = {
  children: ReactNode;
};

export function Templete({ children }: TempleteType) {
  return (
    <Wrapup>
      <Header>oi</Header>
      <Heading1>Colaboradores</Heading1>
      <Container>
        <section className="main">
          <Page>{children}</Page>
        </section>
      </Container>
    </Wrapup>
  );
}
