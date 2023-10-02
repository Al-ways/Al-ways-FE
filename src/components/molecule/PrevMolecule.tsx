import styled from '@emotion/styled';
import Prev from '../atom/Prev';

const PrevMolecule = () => {
  return (
    <Container>
      <Prev />
    </Container>
  );
};

export default PrevMolecule;

const Container = styled.div`
  width: 480px;
  height: 50px;
  margin-bottom: 30px;
`;
