import styled from "@emotion/styled";

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: relative;
  background: #f5faf8;
  border: 2px solid #cad6d1;
  border-radius: 8px;

  .icon {
    position: absolute;
    top: -1.5px;
    right: 4px;
    padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
    margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
    font-size: 3rem;
  }
  p {
    width: 85px;
    height: 24px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #587169;
  }

  .__label {
    position: absolute;
    top: -14px;
    left: 4px;

    width: 105px;
    height: 1px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1px;
    display: flex;
    align-items: center;

    color: #a3b8b0;
    background: #fff;

    padding: calc(0.5rem * 0.75) calc(0.5rem * 0.5);
    margin: calc(0.5rem * 0.75 + 3px) calc(0.5rem * 0.5);
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    transition: transform 120ms ease-in;
    font-weight: bold;
    line-height: 1.2;
  }
`;
