import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import { Colaboradores } from "../accordion//colaboradores";
import { Avatar } from "../avatar";
import { Badge } from "../badge";
import { Input } from "../input";
import { useQuery } from "react-query";
import { api } from "../../services/axios";
import { Text } from "../text";
import Link from "next/link";
import { Pagination } from "../pagination";

type AgentType = {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export function PgLand() {
  const [values, setValues] = useState("");
  const [hide, setHide] = useState(true);
  const [id, setId] = useState<number>();

  const { data } = useQuery<AgentType[]>("agentstdata", async () => {
    const res = await api.get("agents/?count=10");
    return res.data.items;
  });

  function handleHide(id?: number) {
    setId(id);
    console.log(id);

    setHide(!hide);
  }

  function hadleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValues(e.currentTarget.value);
  }

  return (
    <Div>
      <Input
        readOnly={false}
        label="Pesquisar por"
        name="search"
        placeholder="Pesquise por nome ou cpf "
        values={values}
        hadleOnChange={hadleOnChange}
      />

      <Divide />

      <Heading>Listagem de colaboradores </Heading>

      {data?.map((agent) => (
        <div
          key={agent.agent_id}
          className={agent.status === "inactive" ? "inactive" : ""}
        >
          <Colaboradores
            key={agent.agent_id}
            agent_id={agent.agent_id}
            branch={agent.branch}
            department={agent.department}
            image={agent.image}
            name={agent.name}
            role={agent.role}
            status={agent.status}
          />
        </div>
      ))}

      <Table>
        <thead>
          <tr>
            <th>Nome completo</th>
            <th>Departamento</th>
            <th>Cargo</th>
            <th>Unidade</th>
            <th>Status</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {data?.map((agent) => (
            <tr
              key={agent.agent_id}
              className={agent.status === "inactive" ? "inactive" : ""}
            >
              <td>
                <div className="user">
                  <Avatar
                    inactive={agent.status === "inactive" ? true : false}
                    height="40px"
                    width="40px"
                    src={""}
                  />
                  <Text
                    inactive={agent.status === "inactive" ? true : false}
                    margin="auto"
                    marginLeft="5px"
                    text={agent.name}
                    fontSize="12px"
                  />
                </div>
              </td>
              <td>{agent.department}</td>
              <td>{agent.role}</td>
              <td>Quartel General</td>
              <td>
                <Badge
                  inactive={agent.status === "inactive" ? true : false}
                  text={agent.status}
                />
              </td>
              <td onClick={() => handleHide(agent.agent_id)}>
                <AiOutlineMore />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination />

      <Dropdown_Button hide={hide}>
        <ul>
          <Link href={"colaborador/" + id}>
            <li>Ver colaborador</li>
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

const Dropdown_Button = styled.div<IsHideAllProps>`
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
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 196px;
    height: 34px;
  }

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

    tr th {
      width: 12.25rem;
      text-align: left;
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
    text-align: left;
    tr {
      width: 100%;
      height: 68px;
      border-bottom: 1px solid #eaefed;
      padding: 16px;
    }

    .inactive {
      color: #a3b8b0;
    }

    tr td:first-child {
      text-align: left;
      width: 12.25rem;
    }
    tr td {
      width: 12.25rem;
    }

    tr td:last-child {
      width: 1rem;
      position: relative;
      font-size: 2rem;
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

const Div = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
`;
