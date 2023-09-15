import styled from '@emotion/styled';
import ProgressBar from '../atom/ProgressBar';
import ProgressText from '../atom/ProgressText';

interface ProgressHeaderMoleculeProps {
  page: number;
}
const ProgressHeaderMolecule = ({ page }: ProgressHeaderMoleculeProps) => {
  return (
    <ProgressHeaderContainer>
      <ProgressText page={page} />
      <ProgressBar page={page} />
    </ProgressHeaderContainer>
  );
};

const ProgressHeaderContainer = styled.div`
  margin: 70px auto 30px auto;
  width: 300px;
  height: 20px;
`;
export default ProgressHeaderMolecule;
