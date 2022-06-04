import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineMore, AiOutlineSync } from "react-icons/ai";

import { Button } from "../button";
import { Input } from "../input";
import { useQuery } from "react-query";
import { api } from "../../services/axios";
import { Cargos } from "../accordion/cargo";
import Link from "next/link";
import { Pagination } from "../pagination";

type RolesType = {
  id?: number;
  name: string;
  departament: string;
  agents_quantity: number;
};

export function Cargo() {
  const [values, setValues] = useState("");
  const [hide, setHide] = useState(true);

  const { data } = useQuery<RolesType[]>("rolesdata", async () => {
    const res = await api.get("roles/?count=10");
    return format(res.data.roles);
  });

  function handleHide() {
    setHide(!hide);
  }

  function hadleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValues(e.currentTarget.value);
  }

  function format(data: RolesType[]) {
    let i = 1;
    return data.map((item) => ({
      ...item,
      id: i++,
    }));
  }

  return (
    <Div>
      <Input
        label="Pesquisar por"
        name="search"
        placeholder="Pesquise por cargos "
        values={values}
        hadleOnChange={hadleOnChange}
      />

      <Divide />

      <Heading>Listagem de cargos </Heading>

      {data?.map((cargo) => (
        <div key={cargo.id}>
          <Cargos
            agents_quantity={cargo.agents_quantity}
            departament={cargo.departament}
            name={cargo.name}
            id={cargo.id}
            key={cargo.id}
          />
        </div>
      ))}

      <Table>
        <thead>
          <tr>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Colaboradores</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data?.map((agent) => (
            <tr key={agent.id}>
              <td>{agent.name}</td>
              <td>{agent.departament}</td>
              <td>{agent.agents_quantity}</td>
              <td onClick={handleHide}>
                <AiOutlineMore />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination />

      <Dropdown_Button hide={hide}>
        <ul>
          <Link href={"cargo/1"}>
            <li>Ver cargo</li>
          </Link>
          <li>Excluir</li>
        </ul>
      </Dropdown_Button>
    </Div>
  );
}

type IsHideAllProps = {
  hide: boolean;
};

const Div = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;

export const Dropdown_Button = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide ? "none" : "block")};
  position: absolute;
  background: ${(props) => props.theme.colors.white};
  width: 340px;
  height: 132px;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 12px 12px 0px 0px;
  z-index: 300;
  text-align: left;
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

const Table = styled.table`
  width: 902px;
  height: 661px;

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
    text-align: left;

    tr th {
      width: 12.25rem;
    }

    tr th:last-child {
      width: 1rem;
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
    padding: 16px;

    tr {
      width: 100%;
      height: 68px;
      border-bottom: 1px solid #eaefed;
    }

    tr td {
      text-align: left;
      width: 24.83370288248337%;
    }

    tr td:nth-last-child(-n + 2) {
      width: 48.11529933481153%;
      text-align: left;
    }

    tr td:last-child {
      width: 1rem;
      font-size: 2rem;
      text-align: right;
    }
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

const Divide = styled.div`
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 100%;
  height: 2px;
  background: #eaefed;

  @media (min-width: 520px) {
    display: none;
  }
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: #34423d;
  @media (min-width: 520px) {
    margin-top: 40px;
  }
`;
