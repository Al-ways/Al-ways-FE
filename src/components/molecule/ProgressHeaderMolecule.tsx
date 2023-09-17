import styled from '@emotion/styled';
import ProgressBar from '../atom/ProgressBar';
import Text from '../atom/Text';

interface ProgressHeaderMoleculeProps {
  page: number;
}
const ProgressHeaderMolecule = ({ page }: ProgressHeaderMoleculeProps) => {
  return (
    <ProgressHeaderContainer>
      <Text
        width={'395'}
        height={'10'}
        align={'end'}
        fonts={'10'}
        mb={'5'}
        txt={`${page}/7`}
      />
      <ProgressBar page={page} />
    </ProgressHeaderContainer>
  );
};

const ProgressHeaderContainer = styled.div`
  margin: 70px auto 30px auto;
  width: 400px;
  height: 15px;
`;
export default ProgressHeaderMolecule;
