import styled from "@emotion/styled";

type IsHideAllProps = {
  hide: boolean;
};

export const Menu = styled.div<IsHideAllProps>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 19.75rem;
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

export const Dropdown = styled.div<IsHideAllProps>`
  position: absolute;
  padding: 32px 29px 0 0;
  display: ${(props) => (props.hide === false ? "none" : "block")};
  background: ${(props) => props.theme.colors.white};
  width: 19.75rem;
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
    li {
      cursor: pointer;
    }
    li:last-child {
      margin-top: 34px;
    }

    a {
      text-decoration: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: ${(props) => props.theme.colors["gray-green"][100]};
    }
  }
`;

export const Overlay = styled.div<IsHideAllProps>`
  display: ${(props) => (props.hide === false ? "none" : "block")};
  background: transparent;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Fieldset = styled.fieldset`
  margin-top: 2rem;
  border: none;
  width: 100%;

  .input {
    position: relative;
    width: 100%;
    &__label {
      position: absolute;
      left: 0;
      top: 0;
      padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
      margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
      white-space: nowrap;
      transform: translate(0, 0);
      transform-origin: 0 0;
      background: #fff;
      transition: transform 120ms ease-in;
      font-weight: bold;
      line-height: 1.2;
    }
    &__field {
      box-sizing: border-box;
      display: block;
      width: 100%;
      border: 2px solid ${(props) => props.theme.colors.gray[200]};
      border-radius: 8px;
      padding: calc(0.5rem * 1.5) 0.5rem;
      background: transparent;
      border-radius: 4px;

      &:focus,
      &:not(:placeholder-shown) {
        & + .input__label {
          transform: translate(0.25rem, -65%) scale(0.8);
          color: #cad6d1;
        }
      }
    }
    input {
      padding-left: 3.25rem;
    }
    .icon {
      position: absolute;
      top: 15px;
      left: 22px;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
