import styled from "@emotion/styled";

type IsHideAllProps = {
  hide: boolean;
  inactive?: boolean;
};

export const Accordion_container = styled.div<IsHideAllProps>`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
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
  color: ${({ inactive, theme }) => (inactive ? "#A3B8B0" : "")};

  span {
    font-size: 12px;
    color: ${({ inactive, theme }) =>
      inactive ? "#A3B8B0" : theme.colors["gray-green"][100]};
  }

  h1 {
    width: 100%;
    height: 17px;
    font-size: 12px;
    line-height: 140%;
    color: ${({ inactive, theme }) =>
      inactive ? "#A3B8B0" : theme.colors["gray-green"][100]};
  }
`;

type AccordionHeaderProps = {
  justifyContent?: string;
  flexDirection?: "column" | "row";
};

export const Accordion_header = styled.div<
  IsHideAllProps & AccordionHeaderProps
>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};

  width: 100%;
  .arrow {
    transform: ${({ hide }) => (hide ? `rotate(deg)` : `rotate(180deg)`)};
  }
`;

type AccordionAvatarProps = {
  hide?: boolean;
  flexDirection?: "column" | "row";
  justifyContent?: string;
};

export const Accordion_avatar = styled.div<AccordionAvatarProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};

  & + & {
    display: ${(props) => (props.hide ? "none" : "block")};
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
  height: 300px;
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
    font-size: 18px;
    padding: 20px 32px;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.colors["gray-green"][100]};

    .disability {
      color: #cad6d1;
    }
    li {
      div {
        margin-right: 10px;
      }
      margin-top: 34px;
      cursor: pointer;
      display: flex;
      &:first-child {
        margin-top: 0px;
      }
    }
  }
`;

export const Dropdown = styled.div<IsHideAllProps>`
  display: ${({ hide }) => (hide ? "none" : "block")};
`;

type AccordionBodyProps = {
  padding?: string;
};

export const Accordion_body = styled.div<AccordionBodyProps>`
  display: flex;
  justify-content: space-evenly;
  padding: ${({ padding }) => padding};

  .Accordion_section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
