import styled from "@emotion/styled";
import type { NextPage } from "next";
import { Avatar } from "../components/avatar";
import { CardDadosPessoal } from "../components/cardDadosPessoal";
import { DropDownDadosPessoal } from "../components/dropDownDadosPessoal";

import { Templete } from "../components/templente/templente";

const Colaborador: NextPage = () => {
  return (
    <Templete>
      <Div>
        <User>
          <Avatar width="80px" height="80px" src="" />
          <div className="info">
            <h1 className="title">Shinji Ikari</h1>
            <p className="description">shinjiikari@gmail.com</p>
          </div>
        </User>

        <Box flexDirection="column" mt="40px" borderStyle="none" mtChild="8px">
          <Heading>Informações pessoais</Heading>
          <Box
            breackpoint={{ lg: "1440px", md: "768px" }}
            flexDirection="column"
          >
            <CardDadosPessoal titlo="CPF" description="5555555555555555" />
            <CardDadosPessoal titlo="CPF" description="5555555555555555" />
            <CardDadosPessoal titlo="CPF" description="5555555555555555" />
          </Box>
        </Box>

        <Box
          flexDirection="column"
          mt="40px"
          mtChild="24px"
          borderStyle="solid"
          padding="24px"
        >
          <h1>Dados organizacionais</h1>
          <Box
            breackpoint={{ lg: "1440px", md: "768px" }}
            flexDirection="column"
          >
            <Box flexDirection="column" ml="8px">
              <DropDownDadosPessoal
                description="Comercial"
                title="Departamento"
              />
              <DropDownDadosPessoal
                description="Comercial"
                title="Departamento"
              />
            </Box>
            <Box flexDirection="column">
              <DropDownDadosPessoal
                description="Comercial"
                title="Departamento"
              />
              <DropDownDadosPessoal
                description="Comercial"
                title="Departamento"
              />
            </Box>
          </Box>
        </Box>
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
