import styled from "@emotion/styled";

interface TextContainerProps {
  margin?: string | "auto";
  marginLeft?: string;
  fontSize?: string;
  inactive?: boolean;
  width?: string;
}

type TextProps = {
  text: string;
  margin?: string | "auto";
  marginLeft?: string;
  inactive?: boolean;
  fontSize?: string;
  width?: string;
};

export function Text({
  text,
  margin,
  marginLeft,
  fontSize,
  inactive,
  width,
}: TextProps) {
  return (
    <Text_Container
      width={width}
      inactive={inactive}
      fontSize={fontSize}
      margin={margin}
      marginLeft={marginLeft}
    >
      {text}
    </Text_Container>
  );
}

const Text_Container = styled.p<TextContainerProps>`
  width: ${({ width }) => width};
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }) => fontSize};
  line-height: 140%;
  display: flex;
  align-items: center;

  color: ${({ inactive, theme }) =>
    inactive ? "#A3B8B0" : theme.colors["gray-green"][100]};

  margin: ${({ margin }) => margin};
  margin-left: ${({ marginLeft }) => marginLeft};
`;
