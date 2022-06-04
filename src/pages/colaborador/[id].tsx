import styled from "@emotion/styled";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import {
  AiOutlineCreditCard,
  AiOutlinePhone,
  AiOutlineCalendar,
} from "react-icons/ai";
import { useQuery } from "react-query";
import { Avatar } from "../../components/avatar";
import { CardDadosPessoal } from "../../components/cardDadosPessoal";
import { DropDownDadosPessoal } from "../../components/dropDownDadosPessoal";
import { Templete } from "../../components/templente/templente";
import { api } from "../../services/axios";

type agent = {
  id: number;
  name: string;
  email: string;
  phone: {
    ddd: string;
    ddi: string;
    number: string;
  };
  document: {
    type: string;
    number: string;
  };
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

const Colaborador: NextPage = () => {
  const route = useRouter();

  const { data } = useQuery<agent>("agentdata", async () => {
    const id = route.query.id;
    const res = await api.get("agent/1");
    return res.data.agent;
  });

  const cpfMask = (value: string | undefined) => {
    return value
      ?.replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  return (
    <Templete backroute={true} title="Detalhes do colaborador">
      <Div>
        <User>
          <Avatar width="80px" height="80px" src="" />
          <div className="info">
            <h1 className="title">{data?.name}</h1>
            <p className="description">{data?.email}</p>
          </div>
        </User>

        <Box flexDirection="column" mt="40px" borderStyle="none" mtChild="8px">
          <Heading>Informações pessoais</Heading>
          <Box
            breackpoint={{ lg: "1440px", md: "768px" }}
            flexDirection="column"
          >
            <CardDadosPessoal
              icon={<AiOutlineCreditCard />}
              titlo={data?.document.type}
              description={cpfMask(data?.document.number)}
            />
            <CardDadosPessoal
              icon={<AiOutlinePhone />}
              titlo="telefone"
              description={`+${data?.phone.ddi} ${data?.phone.ddd} ${data?.phone.number} `}
            />
            {data ? (
              <CardDadosPessoal
                icon={<AiOutlineCalendar />}
                titlo="Nascimento"
                description={new Date(data.birth_date).toLocaleDateString(
                  "pt-br",
                  {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  }
                )}
              />
            ) : (
              ""
            )}
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
                background="#f5faf8"
                description={data?.department}
                title="Departamento"
              />
              <DropDownDadosPessoal
                background="#f5faf8"
                description={data?.role}
                title="Cargo"
              />
            </Box>
            <Box flexDirection="column">
              <DropDownDadosPessoal
                background="#f5faf8"
                description={data?.branch}
                title="Unidade"
              />
              <DropDownDadosPessoal
                background="#f5faf8"
                description={data?.status}
                title="Status"
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
  width: 956px;

  padding: 0 16px;

  @media (max-width: 520px) {
    width: 100%;
  }
`;

const User = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  .info {
    margin-left: 24px;
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
