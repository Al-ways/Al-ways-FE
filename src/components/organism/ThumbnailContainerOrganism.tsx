import styled from '@emotion/styled';
import PopularLocationHeaderMolecule from '../molecule/PopularLocationHeaderMolecule';
import ThumbnailMolecule from '../molecule/ThumbnailMolecule';

const ThumbnailContainerOrganism = () => {
  return (
    <Container>
      <PopularLocationHeaderMolecule />
      <ThumbnailMolecule />
    </Container>
  );
};

export default ThumbnailContainerOrganism;

const Container = styled.div`
  width: 480px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
