import styled from "@emotion/styled";
import { Avatar } from "../avatar";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Badge } from "../badge";
import { Button } from "../button";
import { useState } from "react";
import { AiOutlineClose, AiOutlineFileAdd } from "react-icons/ai";

type AccordionProps = {
  agent_id?: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export function Colaboradores({
  agent_id,
  name,
  image,
  department,
  branch,
  role,
  status,
}: AccordionProps) {
  const [hide, setHide] = useState(true);
  const [hideButton, setHideButton] = useState(true);

  function handleHide() {
    setHide(!hide);
  }

  function handleHideButton() {
    setHideButton(!hideButton);
  }

  return (
    <Accordion_container hide={hide}>
      <Accordion_header hide={hide} onClick={handleHide}>
        <h1>Nome completo</h1>
        <div className="accordion_avatar">
          <Avatar height="40px" width="40px" src={image} />
          <Text>{name}</Text>
          <RiArrowDropDownLine fontSize={"3rem"} className="arrow" />
        </div>
      </Accordion_header>

      <Dropdown hide={hide}>
        <Accordion_body>
          <div className="Accordion_section">
            <p>Departamento</p>
            <span>{department}</span>
          </div>

          <div className="Accordion_section">
            <p>Cargo</p>
            <span>{role}</span>
          </div>
        </Accordion_body>
        <Accordion_body>
          <div className="Accordion_section">
            <p>Unidade</p>
            <span>123456789</span>
          </div>

          <div className="Accordion_section">
            <p>Unidade</p>
            <span>{branch}</span>
          </div>
        </Accordion_body>
        <Accordion_body>
          <div className="Accordion_section">
            <p>Status</p>
            <Badge text={status} />
          </div>
        </Accordion_body>
        <Accordion_body>
          <Button
            handleClick={handleHideButton}
            icon={<AiOutlineFileAdd className="icon" />}
            text="Ações"
          />
        </Accordion_body>
      </Dropdown>

      <Dropdown_Button hide={hideButton}>
        <ul>
          <li>Ver colaborador</li>
          <li>Excluir</li>
        </ul>
      </Dropdown_Button>
      <Overlay hide={hideButton} onClick={handleHideButton} />
    </Accordion_container>
  );
}

type IsHideAllProps = {
  hide: boolean;
};

export const Overlay = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide ? "none" : "block")};
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 200;
`;

export const Accordion_container = styled.div<IsHideAllProps>`
  display: flex;
  flex-direction: column;
  border: 2px solid
    ${({ hide, theme }) =>
      hide ? theme.colors.gray[100] : theme.colors.teal[100]};
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  ${({ hide }) => (hide ? `` : "`height: 396px`")}

  @media (min-width: 520px) {
    display: none;
  }
`;

export const Accordion_header = styled.div<IsHideAllProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  .arrow {
    transform: ${({ hide }) => (hide ? `rotate(deg)` : `rotate(180deg)`)};
  }
  h1 {
    width: 100%;
    height: 17px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    color: ${(props) => props.theme.colors["gray-green"][100]};
  }
  .accordion_avatar {
    display: flex;
    align-items: flex-start;
  }
`;

export const Dropdown_Button = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide ? "none" : "block")};
  position: fixed;
  bottom: 0;
  left: 3px;
  padding: 32px 29px 0 0;
  background: ${(props) => props.theme.colors.white};
  width: 98%;
  height: 241px;
  box-shadow: 0px 8px 24px rgba(165, 171, 179, 0.4);
  border-radius: 12px 12px 0px 0px;
  z-index: 300;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0 0 0 24px;
    }
  }

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

export const Dropdown = styled.div<IsHideAllProps>`
  display: ${({ hide }) => (hide ? "none" : "block")};
`;

const Text = styled.p`
  max-width: 59.56112852664577%;
  margin: auto;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 140%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors["gray-green"][100]};
  margin-left: 8px;
`;

export const Accordion_body = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 16px;

  .Accordion_section {
    display: flex;
    flex-direction: column;
    width: 100%;
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 140%;
      color: ${({ theme }) => theme.colors["gray-green"][100]};
    }
    span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: ${({ theme }) => theme.colors["gray-green"][100]};
    }
  }
`;
