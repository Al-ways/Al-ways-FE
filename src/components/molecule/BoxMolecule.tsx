import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';

interface BoxProps {
  width: string;
  height: string;
  txt: string;
  color?: string;
  fonts: string;
  br?: string;
}

const BoxMolecule = ({ width, height, color, txt, fonts, br }: BoxProps) => {
  return (
    <Container width={width} height={height} color={color} br={br}>
      <Text
        width={width}
        height={height}
        txt={txt}
        vertical={height}
        fonts={fonts}
        align={'center'}
        br={br}
      />
    </Container>
  );
};

export default BoxMolecule;

const Container = styled.div<{
  width: string;
  height: string;
  color?: string;
  br?: string;
}>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  color: ${(props) => props.color || COLORS.white};
  border-radius: ${(props) => props.br + 'px' || '0px'};
  cursor: pointer;
  background-color: ${COLORS.dark_gray};
`;
