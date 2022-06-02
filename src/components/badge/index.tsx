import styled from "@emotion/styled";

const Badge_Container = styled.span`
  text-align: center;
  padding: 4px 16px;
  width: 72px;
  height: 24px;
  background: #b5f1dd;
  border-radius: 80px;
  color: #34423d;
`;

type BadgeProps = {
  text: string;
};

export function Badge({ text }: BadgeProps) {
  return <Badge_Container>{text}</Badge_Container>;
}
