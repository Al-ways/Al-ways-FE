import styled from '@emotion/styled';
import BoxMolecule from './BoxMolecule';

const SearchContainerMolecule = () => {
  return (
    <Container>
      <BoxMolecule
        width={'130'}
        height={'130'}
        fonts={'20'}
        br={'10'}
        txt={'추천받기'}
      />
      <BoxMolecule
        width={'130'}
        height={'130'}
        fonts={'20'}
        br={'10'}
        txt={'검색하기'}
      />
      <BoxMolecule
        width={'130'}
        height={'130'}
        fonts={'20'}
        br={'10'}
        txt={'지도보기'}
      />
    </Container>
  );
};

export default SearchContainerMolecule;

const Container = styled.div`
  width: 440px;
  height: 130px;

  display: flex;
  justify-content: space-between;
`;
