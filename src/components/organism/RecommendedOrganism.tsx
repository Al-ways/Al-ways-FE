import styled from '@emotion/styled';
import RecomendedMolecule from '../molecule/RecomendedMolecule';

const RecommendedOrganism = () => {
  return (
    <Container>
      <RecomendedMolecule />
    </Container>
  );
};

export default RecommendedOrganism;

const Container = styled.div`
  width: 480px;
  height: 150px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
