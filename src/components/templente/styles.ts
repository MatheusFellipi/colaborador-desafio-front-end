import styled from "@emotion/styled";

export const Wrapup = styled.div``;

export const Back = styled.span`
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;

  width: 36px;
  height: 36px;

  background: #eaefed;
  border-radius: 80px;
`;

export const Aside = styled.aside`
  position: fixed;
  width: 256px;
  left: 0px;
  top: 0px;
  bottom: 0px;
  background: #ffffff;
  border: 1px solid #eaefed;
  box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  z-index: 100;
  @media (max-width: 520px) {
    display: none;
  }
`;

export const Tela = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;
  padding-left: 20rem;

  @media (max-width: 520px) {
    width: 100%;
    display: block;
    margin-left: 0rem;
    margin-top: 5rem;
    padding: 0px 6px;
  }
`;

export const Page = styled.div`
  width: 100%;
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0px;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    border-radius: 8px;
    margin-bottom: 40px;
  }
`;

export const Heading1 = styled.h1`
  display: flex;
  align-items: center;
  margin: 2.563rem 0 1.5rem 1rem;
`;

export const Divider = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.gray[100]};
`;
