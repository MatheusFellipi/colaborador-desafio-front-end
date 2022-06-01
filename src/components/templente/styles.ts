import styled from "@emotion/styled";

type IsHideAllProps = {
  hide: boolean;
};

export const Wrapup = styled.div``;

export const Tabs_container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
  height: 30px;
  border-bottom: 2px solid #eaefed;

  @media (max-width: 520px) {
    display: none;
  }

  .active {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: #34423d;
    /* 
    ::before {
      content: "    ";
      position: absolute;
      width: 196px;
      height: 1px;
      background: red;
    } */
  }

  nav {
    display: flex;
    width: 100%;
    ul {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      border: 0;
      color: #a3b8b0;

      li {
        width: 196px;
        height: 30px;
        list-style: none;
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  background: ${(props) => props.theme.colors.white};
  width: "100%";
  height: "3.813rem";
  @media (min-width: 320px) {
  }
`;
export const Page = styled.div`
  width: 100%;
`;
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

    background: #ffffff;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
    border-radius: 8px;
    margin-bottom: 40px;
  }
`;
export const Heading1 = styled.h1`
  margin: 2.563rem 0 1.5rem 1rem;
`;

export const Divider = styled.div`
  margin: 40px 0;
  width: 100%;
  height: 2px;
  background: ${(props) => props.theme.colors.gray[100]};
`;
export const Fieldset = styled.fieldset`
  border: 0;
  width: 100%;

  @media (min-width: 520px) {
    display: none;
  }
`;

export const Dropdown = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide === false ? "none" : "block")};
  position: absolute;
  bottom: 0;
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

export const Menu = styled.div<IsHideAllProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
  transition: 0.4s;
  cursor: pointer;

  border: 2px solid
    ${(props) =>
      props.hide ? props.theme.colors.black : props.theme.colors.gray[200]};

  border-radius: 8px;
  padding: 16px 22px;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
`;

export const Overlay = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide === false ? "none" : "block")};
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;
