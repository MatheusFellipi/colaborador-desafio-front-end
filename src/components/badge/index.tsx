import styled from "@emotion/styled";

type BadgeContainerProps = {
  inactive: boolean;
};

const Badge_Container = styled.span<BadgeContainerProps>`
  text-align: center;
  padding: 4px 16px;
  width: 72px;
  height: 24px;
  background: ${({ inactive }) => (inactive ? "#A3B8B0" : "#b5f1dd")};
  opacity: ${({ inactive }) => (inactive ? "0.5" : "")};
  border-radius: 80px;
  span {
    color: #000000;
  }
`;

type BadgeProps = {
  text: string;
  inactive: boolean;
};

export function Badge({ text, inactive }: BadgeProps) {
  return (
    <Badge_Container inactive={inactive}>
      <span>{text}</span>
    </Badge_Container>
  );
}
