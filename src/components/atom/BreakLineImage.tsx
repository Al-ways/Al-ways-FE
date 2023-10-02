import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';

interface BreakLineProps {
  width?: string;
  height?: string;
  mb?: string;
}

const BreakLineImage = ({ width, height, mb }: BreakLineProps) => {
  return (
    <div>
      <BreakLine width={width} height={height} mb={mb} />
    </div>
  );
};

export default BreakLineImage;

const BreakLine = styled.div<BreakLineProps>`
  width: ${(props) => props.width + 'px' || 'auto'};
  height: ${(props) => props.height + 'px' || 'auto'};
  margin-bottom: ${(props) => props.mb + 'px' || 'auto'};
  color: white;

  background-color: ${COLORS.dark_gray};
`;
