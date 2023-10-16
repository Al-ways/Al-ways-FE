import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';

interface LoadingProps {
  txt?: string;
  width?: string;
  height?: string;
  fonts?: string;
  br?: string;
  bgc?: string;
}

const NoDataMolecule = ({
  txt,
  width,
  height,
  fonts,
  br,
  bgc,
}: LoadingProps) => {
  return (
    <LoadingContainter>
      <Text
        txt={txt}
        width={width}
        height={height}
        fonts={fonts}
        br={br}
        bgc={bgc}
      />
    </LoadingContainter>
  );
};

export default NoDataMolecule;

const LoadingContainter = styled.div<LoadingProps>`
  width: ${(props) => (props.width ? props.width + 'px' : '440px')};
  height: ${(props) => (props.height ? props.height + 'px' : '110px')};
  font-size: ${(props) => (props.fonts ? 'px' : '16px')};
  border-radius: ${(props) => (props.br ? props.br + 'px' : '10px')};
  background-color: ${COLORS.dark_gray};

  display: flex;
  align-items: center;
  justify-content: center;
`;
