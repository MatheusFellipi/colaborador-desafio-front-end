import styled from "@emotion/styled";

type IsHideAllProps = {
  hide: boolean;
};

export const Accordion_container = styled.div<IsHideAllProps>`
  border: 2px solid
    ${({ hide, theme }) =>
      hide ? theme.colors.gray[100] : theme.colors.teal[100]};
  border-radius: 8px;
  padding: 16px;
  width: 319px;
  ${({ hide }) => (hide ? `` : "`height: 396px`")}
`;

export const Accordion_header = styled.div<IsHideAllProps>`
  width: 100%;
  .arrow {
    transform: ${({ hide }) => (hide ? `rotate(deg)` : `rotate(180deg)`)};
  }
  h1 {
    width: 196px;
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
  max-width: 11.875rem;
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
