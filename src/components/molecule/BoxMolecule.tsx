import styled from '@emotion/styled';
import Text from '../atom/Text';
import { COLORS } from '../../share/colors';
import { useNavigate } from 'react-router-dom';

interface BoxProps {
  width: string;
  height: string;
  txt: string;
  color?: string;
  fonts: string;
  fontw?: string;
  br?: string;
  routes?: string;
}

const BoxMolecule = ({
  width,
  height,
  color,
  txt,
  fonts,
  fontw,
  br,
  routes,
}: BoxProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (routes) navigate(routes);
  };

  return (
    <BoxContainer width={width} height={height} color={color} br={br}>
      <Text
        width={width}
        height={height}
        txt={txt}
        vertical={height}
        fonts={fonts}
        fontw={fontw}
        align={'center'}
        br={br}
        onClick={handleClick}
      />
    </BoxContainer>
  );
};

export default BoxMolecule;

const BoxContainer = styled.div<{
  width: string;
  height: string;
  color?: string;
  br?: string;
}>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.height + 'px'};
  color: ${(props) => props.color || COLORS.white};
  border-radius: ${(props) => props.br + 'px' || '0px'};
  background-color: ${COLORS.dark_gray};
  cursor: pointer;
`;
