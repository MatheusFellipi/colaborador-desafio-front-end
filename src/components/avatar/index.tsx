import styled from "@emotion/styled";
import Image from "next/image";

const Avatars = styled.img`
  vertical-align: middle;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #1dd195;
`;

type DivProps = {
  width: string;
  height: string;
};

const Div = styled.div<DivProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

type AvatarProps = {
  src: string;
  width: string;
  height: string;
};

export function Avatar({ src, width, height }: AvatarProps) {
  return (
    <Div width={width} height={height}>
      <Avatars
        src={
          "https://i.pinimg.com/originals/73/1b/ad/731bad3bf26de0e5da55b051efa74972.jpg"
        }
        alt="avatar"
      />
    </Div>
  );
}
