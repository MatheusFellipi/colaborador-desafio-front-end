import styled from "@emotion/styled";
import { Avatar } from "../avatar";

type UsersProps = {
  width: string;
  height: string;
  name: string;
  image: string;
};

export function Users({ width, height, name, image }: UsersProps) {
  return (
    <Accordion_header>
      <Avatar height={width} width={height} src={image} />
      <div className="accordion_avatar">
        <Text>{name}</Text>
        <Descripiton>meus dados</Descripiton>
      </div>
    </Accordion_header>
  );
}

const Text = styled.p`
  width: 110px;
  height: 14px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #34423d;
  @media (max-width: 520px) {
    display: none;
  }
`;

const Descripiton = styled.p`
  width: 76px;
  height: 14px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: #587169;
  @media (max-width: 520px) {
    display: none;
  }
`;

const Accordion_header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    width: 100%;
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
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
`;
