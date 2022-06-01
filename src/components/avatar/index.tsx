import styled from "@emotion/styled";
import Image from "next/image";

const Avatars = styled.img`
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #1dd195;
`;

const Div = styled.div`
  width: 40px;
  height: 40px;
`;

export function Avatar() {
  return (
    <Div>
      <Avatars
        src={
          "https://i.pinimg.com/originals/73/1b/ad/731bad3bf26de0e5da55b051efa74972.jpg"
        }
        alt="avatar"
      />
    </Div>
  );
}
