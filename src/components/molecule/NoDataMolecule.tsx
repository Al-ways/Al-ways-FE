import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';
import Text from '../atom/Text';

interface MoleculeProps {
  txt?: string;
  width?: string;
  height?: string;
  fonts?: string;
  br?: string;
  bgc?: string;
  mb?: string;
}

const NodataMolecule = ({
  txt,
  width,
  height,
  fonts,
  br,
  bgc,
  mb,
}: MoleculeProps) => {
  return (
    <NodataContainer mb={mb}>
      <Text
        txt={txt}
        width={width}
        height={height}
        fonts={fonts}
        br={br}
        bgc={bgc}
      />
    </NodataContainer>
  );
};

export default NodataMolecule;

const NodataContainer = styled.div<MoleculeProps>`
  width: ${(props) => (props.width ? props.width + 'px' : '440px')};
  height: ${(props) => (props.height ? props.height + 'px' : '110px')};
  font-size: ${(props) => (props.fonts ? 'px' : '14px')};
  border-radius: ${(props) => (props.br ? props.br + 'px' : '10px')};
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : 'auto')};
  background-color: ${COLORS.dark_gray};

  display: flex;
  align-items: center;
  justify-content: center;
`;
