import styled from "@emotion/styled";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Button } from "../button";
import { Text } from "../text";

export function Pagination() {
  return (
    <Pagination_Container>
      <div className="table">
        <div>
          <Text
            width="240px"
            fontSize="16px"
            text={"Mostrando 10 de 50 registros"}
          />

          <select name="10" id="">
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>

        <div>
          <ButtonContainer
            width="48px"
            height="36px"
            borderRadius="8px 0px 0px 8px"
          >
            <AiOutlineLeft />
          </ButtonContainer>
          <p>1 de 10</p>
          <ButtonContainer
            width="48px"
            height="36px"
            borderRadius="0px 8px 8px 0px"
          >
            <AiOutlineRight />
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
  padding: 8px 12px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 1.4px solid #709085;
  border-radius: ${({ borderRadius }) => borderRadius};
  background: transparent;
`;

const Pagination_Container = styled.div`
  width: 902px;
  height: 36px;

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
    select {
      width: 78px;
      height: 36px;
      background: #ffffff;
      border: 2px solid #cad6d1;
      border-radius: 8px;
      padding: 0px 10px;
    }
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
  align-items: center;
  width: 100%;
`;
