import styled from "@emotion/styled";
import { GrUpdate } from "react-icons/gr";
import { Button } from "../button";
import { Text } from "../text";

export function Pagination() {
  return (
    <Pagination_Container>
      <div className="table">
        <Text fontSize="16px" text={"Mostrando 10 de 50 registros"} />
        <div>
          <ButtonContainer
            width="48px"
            height="36px"
            borderRadius="8px 0px 0px 8px"
          >
            {"<"}
          </ButtonContainer>
          <p>1 de 10</p>
          <ButtonContainer
            width="48px"
            height="36px"
            borderRadius="0px 8px 8px 0px"
          >
            {">"}
          </ButtonContainer>
        </div>
      </div>
      <div className="button">
        <Button
          handleClick={() => {}}
          icon={<GrUpdate className="icon" />}
          text="Carregar mais"
        />
      </div>
    </Pagination_Container>
  );
}
type ButtonContainerProps = {
  borderRadius: string;
  width: string;
  height: string;
};

const ButtonContainer = styled.button<ButtonContainerProps>`
  padding: 6px 12px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1.4px solid #709085;
  border-radius: ${({ borderRadius }) => borderRadius};
  background: transparent;
`;

const Pagination_Container = styled.div`
  width: 100%;

  @media (min-width: 520px) {
    .button {
      display: none;
    }
  }
  .button {
    margin-top: 24px;
    width: 100%;
  }
  .table {
    margin-top: 30px;
    padding: 0 8px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        margin: 0 1rem;
      }
    }

    @media (max-width: 520px) {
      display: none;
    }
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;
