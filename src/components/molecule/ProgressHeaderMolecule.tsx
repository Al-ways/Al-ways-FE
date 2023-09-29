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
        txt={`${page + 1}/7`}
      />
      <ProgressBar page={page + 1} />
    </ProgressHeaderContainer>
  );
};

const ProgressHeaderContainer = styled.div`
  margin: 0 auto 30px auto;
  width: 400px;
  height: 15px;
`;
export default ProgressHeaderMolecule;
