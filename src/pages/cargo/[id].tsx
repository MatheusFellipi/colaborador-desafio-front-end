import styled from "@emotion/styled";
import type { NextPage } from "next";
import { FormEvent, useState } from "react";
import { useQuery } from "react-query";
import { Checkbox } from "../../components/checkbox";
import { DropDownDadosPessoal } from "../../components/dropDownDadosPessoal";
import { Input } from "../../components/input";
import { Templete } from "../../components/templente/templente";
import { api } from "../../services/axios";

type Roles = {
  role: string;
  permissions: string[];
};

type RolesProps = {
  name: string;
  department: string;
  grouprules: Roles[];
};

const Cargo: NextPage = () => {
  const { data } = useQuery<RolesProps>("roledata", async () => {
    const res = await api.get("role/1");
    console.log(res.data);
    return res.data.role;
  });

  function handleChange(e: FormEvent<HTMLInputElement>) {}

  return (
    <Templete title="Cargos e permissões" backroute={true}>
      <Div>
        <Box flexDirection={"column"}>
          <Heading>Dados do cargo</Heading>
          <Box
            breackpoint={{ lg: "1440px", md: "768px" }}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <DropDownDadosPessoal
              background={"#ffffff"}
              title="Departamento"
              description="SAC"
            />
            <Input
              iconHide={true}
              label="Cargo"
              readOnly={true}
              name={data?.name}
              values={data?.name}
            />
          </Box>
        </Box>

        <Box flexDirection={"column"}>
          <Heading>Listagem de cargos</Heading>
          <Table>
            <thead>
              <tr>
                <th>Cargo</th>
                <th>Ler</th>
                <th>Editor</th>
                <th>Comentar</th>
              </tr>
            </thead>
            <tbody>
              {data?.grouprules.map((item) => (
                <tr key={item.role}>
                  <td>{item.role}</td>
                  <td>
                    <Checkbox
                      checked={
                        item.permissions.find((x) => x === "read")
                          ? true
                          : false
                      }
                      handleChange={handleChange}
                      value={"read"}
                      name={"read"}
                    />
                  </td>
                  <td>
                    <Checkbox
                      checked={
                        item.permissions.find((x) => x === "write")
                          ? true
                          : false
                      }
                      value={"write"}
                      handleChange={handleChange}
                      name={"write"}
                    />
                  </td>
                  <td>
                    <Checkbox
                      checked={
                        item.permissions.find((x) => x === "delete")
                          ? true
                          : false
                      }
                      handleChange={handleChange}
                      value={"delete"}
                      name={"delete"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>
      </Div>
    </Templete>
  );
};

export default Cargo;

const Div = styled.div`
  width: 956px;
  padding: 0 16px;
  @media (max-width: 520px) {
    width: 100%;
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
  justifyContent?: string;
  alignItems?: string;
};

const Box = styled.section<BoxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
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
const Table = styled.table`
  thead {
    display: flex;
    text-align: left;
    padding: 16px;
    border: 1px solid #cad6d1;
    border-radius: 8px 8px 0px 0px;
    font-size: 12px;
    color: #587169;
    width: 100%;

    tr th:first-child {
      width: 500px;
      height: 17px;
    }
    tr th {
      margin: 0 10px 0 10px;
      width: 96px;
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
    tr td {
      text-align: left;
      width: 96px;
      height: 17px;
    }
    tr td:first-child {
      width: 500px;
    }
  }
`;

const Heading = styled.h1`
  width: 100%;

  line-height: 150%;

  color: #34423d;
`;
