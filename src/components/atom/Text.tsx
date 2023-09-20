import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
interface TextProps {
  width?: string;
  height?: string;
  color?: string;
  align?: string;
  vertical?: string;
  txt?: string | number;
  fonts?: string;
  fontw?: string;
  mb?: string;
  mt?: string;
  mr?: string;
  bottom?: string;
  position?: string;
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
  mt,
  mr,
  bottom,
  position,
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
      mt={mt}
      mr={mr}
      bottom={bottom}
      position={position}
      br={br}
    >
      {txt}
    </TextContainer>
  );
};
const TextContainer = styled.div<TextProps>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  text-align: ${(props) => props.align || 'start'};
  color: ${(props) => props.color || COLORS.white};
  font-size: ${(props) => props.fonts + 'px' || '16px'};
  line-height: ${(props) => props.height + 'px' || 'auto'};
  font-weight: ${(props) => props.fontw || 'normal'};
  margin-bottom: ${(props) => props.mb + 'px' || '0px'};
  margin-top: ${(props) => props.mt + 'px' || '0px'};
  margin-right: ${(props) => props.mr + 'px' || '0px'};
  bottom: ${(props) => props.bottom + 'px' || '0px'};
  position: ${(props) => props.position || 'auto'};
  border-radius: ${(props) => props.br + 'px' || '0px'};
`;
export default Text;
