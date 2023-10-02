import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';

interface BreakLineProps {
  width?: string;
  height?: string;
  mb?: string;
}

const BreakLine = ({ width, height, mb }: BreakLineProps) => {
  return (
    <div>
      <Image width={width} height={height} mb={mb} />
    </div>
  );
};

export default BreakLine;

const Image = styled.div<BreakLineProps>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  margin-bottom: ${(props) => props.mb + 'px' || 'auto'};
  color: white;

  background-color: ${COLORS.dark_gray};
`;
