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
        <Box flexDirection={"column"}>
          <Heading>Dados do cargo</Heading>
          <Box
            breackpoint={{ lg: "1440px", md: "768px" }}
            flexDirection={"column"}
          >
            <DropDownDadosPessoal title="Departamento" description="SAC" />
            <Input
              iconHide={true}
              label="Cargo"
              name="Analista"
              values="Analista"
            />
          </Box>
        </Box>

        <Box flexDirection={"column"}>
          <Heading>Listagem de cargos</Heading>

          <table>
            <thead>
              <tr>
                <th>Cargo</th>
                <th>Ler</th>
                <th>Editor</th>
                <th>Comentar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Permisao</td>
                <td>/</td>
                <td>/</td>
                <td>/</td>
              </tr>
              <tr>
                <td>Permisao</td>
                <td>/</td>
                <td>/</td>
                <td>/</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Div>
    </Templete>
  );
};

export default Colaborador;

const Div = styled.div`
  padding: 0 16px;
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
  table {
    thead {
      display: flex;
      text-align: left;
      padding: 16px;
      border: 1px solid #cad6d1;
      border-radius: 8px 8px 0px 0px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 140%;
      color: #587169;

      tr th:first-child {
        width: 102px;
        height: 17px;
      }
      tr th {
        margin: 0 10px 0 10px;
        width: 46px;
        height: 17px;
      }
      tr th:last-child {
        width: 66px;
        height: 17px;
      }
    }

    tbody {
      display: flex;
      flex-direction: column;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: #587169;
      text-align: center;
      tr {
        width: 100%;
        height: 68px;
        border-bottom: 1px solid #eaefed;
        padding: 25px 16px;
      }

      tr td:first-child {
        text-align: left;
      }
      tr td {
        width: 102px;
        height: 17px;
      }
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
