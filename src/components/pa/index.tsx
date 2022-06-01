import styled from "@emotion/styled";
import type { NextPage } from "next";
import { ChangeEvent, useState } from "react";
import { Accordion } from "../accordion";
import { Input } from "../input";

export function PgLand() {
  const [values, setValues] = useState("teste");

  function hadleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValues(e.currentTarget.value);
  }

  return (
    <Div>
      oi
      {/* <Input
        label=""
        name="search"
        values={values}
        hadleOnChange={hadleOnChange}
      />
      <Divide />
      <Heading>Listagem de colaboradores </Heading>
      <Accordion
        branch="Farmácia Pedido Pago"
        department="Administrativo"
        image="https://picsum.photos/200"
        name="Kai Cunha Lima"
        role="Diretor"
        status="active"
      />
      <Accordion
        branch="Farmácia Pedido Pago"
        department="Administrativo"
        image="https://picsum.photos/200"
        name="Kai Cunha Lima"
        role="Diretor"
        status="active"
      />
      <Accordion
        branch="Farmácia Pedido Pago"
        department="Administrativo"
        image="https://picsum.photos/200"
        name="Kai Cunha Lima"
        role="Diretor"
        status="active"
      /> */}
    </Div>
  );
}

const Divide = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 100%;
  height: 2px;
  background: #eaefed; ;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #34423d;
`;

const Div = styled.div`
  padding: 0 16px;
`;
