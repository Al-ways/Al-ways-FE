import styled from '@emotion/styled';
import { COLORS } from '../../share/colors';

const BreakLineImage = () => {
  return <BreakLine />;
};

export default BreakLineImage;

const BreakLine = styled.div`
  width: 480px;
  height: 15px;
  margin-bottom: 30px;

  background-color: ${COLORS.dark_gray};
`;
