import styled from "@emotion/styled";

interface TextContainerProps {
  margin?: string | "auto";
  marginLeft?: string;
  fontSize?: string;
  inactive?: boolean;
}

type TextProps = {
  text: string;
  margin?: string | "auto";
  marginLeft?: string;
  inactive?: boolean;
  fontSize?: string;
};

export function Text({
  text,
  margin,
  marginLeft,
  fontSize,
  inactive,
}: TextProps) {
  return (
    <Text_Container
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
  max-width: 59.56112852664577%;
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
