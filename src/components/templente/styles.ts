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

export const Aside = styled.div``;

export const Page = styled.div``;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
    width: 96.5625%;
    height: 1311px;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;
export const Heading1 = styled.h1`
  margin: 2.563rem 0 1.5rem 1rem;
`;
export const Wrapup = styled.div``;

export const Divider = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.gray[100]};
`;
