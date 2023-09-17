import styled from '@emotion/styled';
interface TextProps {
  width: string;
  height: string;
  color: string;
  align: string;
  vertical: string;
  txt: string;
  fonts: string;
}

const Text = ({
  width,
  height,
  align,
  vertical,
  color,
  txt,
  fonts,
}: TextProps) => {
  return (
    <TextContainer
      width={width}
      height={height}
      align={align}
      vertical={vertical}
      color={color}
      fonts={fonts}
    >
      {txt}
    </TextContainer>
  );
};
const TextContainer = styled.div<{
  width: string;
  height: string;
  color: string;
  align: string;
  vertical: string;
  fonts: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  text-align: ${(props) => props.align};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fonts};
  line-height: ${(props) => props.height};
`;
export default Text;
