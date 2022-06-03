import styled from "@emotion/styled";

type ImagProps = {
  inactive?: boolean;
};

const Avatars = styled.img<ImagProps>`
  vertical-align: middle;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #1dd195;
  opacity: ${({ inactive }) => (inactive ? "0.5" : "")};
`;

type DivProps = {
  width: string;
  height: string;
  inactive?: boolean;
};

const Div = styled.div<DivProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

type AvatarProps = {
  src: string;
  width: string;
  height: string;
  inactive?: boolean;
};

export function Avatar({ src, inactive, width, height }: AvatarProps) {
  return (
    <Div inactive={inactive} width={width} height={height}>
      <Avatars
        inactive={inactive}
        src={"https://picsum.photos/200?random=1"}
        alt="avatar"
      />
    </Div>
  );
}
