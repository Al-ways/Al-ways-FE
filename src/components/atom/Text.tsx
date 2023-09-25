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
  br?: string;

  /* 원준 추가*/
  mt?: string;
  mr?: string;
  ml?: string;
  bottom?: string;
  position?: string;
  display?: string;
  top?: string;
  right?: string;
  cursor?: string;
  ai?: string;
  jc?: string;
  bgc?: string;
  onClick?: () => void;
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
  mt,
  mr,
  ml,
  bottom,
  position,
  display,
  top,
  right,
  cursor,
  ai,
  jc,
  bgc,
  onClick,
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
      ml={ml}
      bottom={bottom}
      position={position}
      br={br}
      display={display}
      top={top}
      right={right}
      cursor={cursor}
      ai={ai}
      jc={jc}
      bgc={bgc}
      onClick={() => {
        onClick;
      }}
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
  border-radius: ${(props) => props.br + 'px' || '0px'};

  /* 원준 추가*/
  margin-top: ${(props) => props.mt + 'px' || '0px'};
  margin-right: ${(props) => props.mr + 'px' || '0px'};
  margin-left: ${(props) => props.ml + 'px' || '0px'};
  bottom: ${(props) => props.bottom + 'px' || '0px'};
  position: ${(props) => props.position || 'auto'};
  display: ${(props) => props.display || 'auto'};
  top: ${(props) => props.top + 'px' || '0px'};
  right: ${(props) => props.right + 'px' || '0px'};
  cursor: ${(props) => props.cursor};
  align-items: ${(props) => props.ai || 'auto'};
  justify-content: ${(props) => props.jc || 'auto'};
  background-color: ${(props) => props.bgc || 'none'};
`;
export default Text;
