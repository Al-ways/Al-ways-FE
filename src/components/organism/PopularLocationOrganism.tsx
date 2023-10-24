import styled from '@emotion/styled';
import PopularLocationHeaderMolecule from '../molecule/PopularLocationHeaderMolecule';
import LargeThumbnailMolecule from '../molecule/LargeThumbnailMolecule';

const PopularLocationOrganism = ({ address }: { address: string | null }) => {
  return (
    <Container>
      <PopularLocationHeaderMolecule address={address} />
      <LargeThumbnailMolecule />
    </Container>
  );
};

export default PopularLocationOrganism;

const Container = styled.div`
  width: 480px;
  height: 380px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
