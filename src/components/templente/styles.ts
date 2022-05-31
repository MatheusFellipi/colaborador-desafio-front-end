import styled from "@emotion/styled";

export const Button = styled.div`
  display: flex;
`;

export const Header = styled.header`
  display: flex;
  background: ${(props) => props.theme.colors.white};
  width: "100%";
  height: "3.813rem";
  @media (min-width: 320px) {
  }
`;
