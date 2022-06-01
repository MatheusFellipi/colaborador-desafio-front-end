import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Avatar } from "../components/avatar";
import { CardDadosPessoal } from "../components/cardDadosPessoal";
import { DropDownDadosPessoal } from "../components/dropDownDadosPessoal";
import { Input } from "../components/input";

import { Templete } from "../components/templente/templente";

const Colaborador: NextPage = () => {
  return (
    <Templete>
      <Div>
        <Heading>Dados do cargo</Heading>
        <Input label="Cargo" name="Analista" values="Analista" />
      </Div>
    </Templete>
  );
};

export default Colaborador;

const Div = styled.div`
  padding: 0 16px;
`;

const User = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  .info {
    margin-left: 16px;
  }
`;

type BoxProps = {
  mt?: string;
  mb?: string;
  mtChild?: string;
  p?: string;
  borderStyle?: "solid" | "none";
  flexDirection?: "row" | "column";
  flexWrap?: "wrap" | "nowrap";
  padding?: string;
  ml?: string;
  breackpoint?: { lg?: string; md?: string; sm?: string };
};

const Box = styled.section<BoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  padding: ${({ padding }) => padding};
  width: 100%;
  border: 2px #eaefed;
  border-style: ${({ borderStyle }) => borderStyle};
  border-radius: 8px;
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ ml }) => ml};
  fieldset,
  div {
    margin-top: ${({ mtChild }) => mtChild};
  }
  h1 {
    margin-bottom: 24px;
  }
  @media (min-width: ${({ breackpoint }) => breackpoint?.lg}) {
    flex-direction: row;
    fieldset,
    div {
      margin-right: 8px;
    }
  }

  @media (min-width: ${({ breackpoint }) => breackpoint?.md}) {
    flex-direction: row;
    fieldset,
    div {
      margin-right: 8px;
    }
  }
`;

const Heading = styled.h1`
  width: 207px;
  height: 27px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #34423d;
`;
