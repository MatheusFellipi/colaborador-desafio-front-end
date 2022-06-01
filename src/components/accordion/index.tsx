import styled from "@emotion/styled";
import { Avatar } from "../avatar";

import { RiArrowDropDownLine } from "react-icons/ri";
import { Badge } from "../badge";
import { Button } from "../button";
import { useState } from "react";

type AccordionProps = {
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
};

export function Accordion({
  name,
  image,
  department,
  branch,
  role,
  status,
}: AccordionProps) {
  const [hide, setHide] = useState(true);

  function handleHide() {
    setHide(!hide);
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
          <Button icon={`<AiOutlineFileAdd className="icon" />`} text="Ações" />
        </Accordion_body>
      </Dropdown>
    </Accordion_container>
  );
}

type IsHideAllProps = {
  hide: boolean;
};

export const Accordion_container = styled.div<IsHideAllProps>`
  border: 2px solid
    ${({ hide, theme }) =>
      hide ? theme.colors.gray[100] : theme.colors.teal[100]};
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  ${({ hide }) => (hide ? `` : "`height: 396px`")}
`;

export const Accordion_header = styled.div<IsHideAllProps>`
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

export const Dropdown = styled.div<IsHideAllProps>`
  display: ${({ hide }) => (hide ? "none" : "block")};
`;

export const Text = styled.p`
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
    width: 100%;
    p {
      width: 91px;
      height: 17px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 140%;
      color: ${({ theme }) => theme.colors["gray-green"][100]};
    }
    span {
      width: 88px;
      height: 17px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 140%;
      color: ${({ theme }) => theme.colors["gray-green"][100]};
    }
  }
`;
