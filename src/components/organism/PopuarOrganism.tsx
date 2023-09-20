import styled from '@emotion/styled';
import PopularHeaderMolecule from '../molecule/PopularHeaderMolecule';
import ThumbnailMolecule from '../molecule/ThumbnailMolecule';

const PopularOrganism = () => {
  return (
    <Container>
      <PopularHeaderMolecule />
      <ThumbnailMolecule />
    </Container>
  );
};

export default PopularOrganism;

const Container = styled.div`
  width: 480px;
  height: 380px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
