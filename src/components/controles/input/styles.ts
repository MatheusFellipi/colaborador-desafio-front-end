import styled from "@emotion/styled";

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
