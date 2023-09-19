import styled from '@emotion/styled';
interface TextProps {
  width?: string;
  height?: string;
  color?: string;
  align?: string;
  vertical?: string;
  txt: string | number;
  fonts?: string;
  fontw?: string;
  mb?: string;
  br?: string;
}

const Text = ({
  width,
  height,
  align,
  vertical,
  color,
  txt,
  fonts,
  fontw,
  mb,
  br,
}: TextProps) => {
  return (
    <TextContainer
      width={width}
      height={height}
      align={align}
      vertical={vertical}
      color={color}
      fonts={fonts}
      fontw={fontw}
      mb={mb}
      br={br}
    >
      {txt}
    </TextContainer>
  );
};
const TextContainer = styled.div<{
  width?: string;
  height?: string;
  color?: string;
  align?: string;
  vertical?: string;
  fonts?: string;
  fontw?: string;
  mb?: string;
  br?: string;
}>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  text-align: ${(props) => props.align || 'start'};
  color: ${(props) => props.color || '#ffffff'};
  font-size: ${(props) => props.fonts + 'px' || '16px'};
  line-height: ${(props) => props.height + 'px' || 'auto'};
  font-weight: ${(props) => props.fontw || 'normal'};
  margin-bottom: ${(props) => props.mb + 'px' || '0px'};
  border-radius: ${(props) => props.br + 'px' || '0px'};
`;
export default Text;
