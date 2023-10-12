import styled from '@emotion/styled';
import Text from '../atom/Text';
import BoxMolecule from '../molecule/BoxMolecule';

const SearchOrganism = () => {
  return (
    <Container>
      <Text
        txt={'술집 찾기'}
        width={'440'}
        height={'20'}
        fonts={'20'}
        fontw={'700'}
        mb={'20'}
      />
      <BoxContainer>
        <BoxMolecule
          width={'130'}
          height={'130'}
          fonts={'16'}
          fontw={'400'}
          br={'10'}
          txt={'추천받기'}
          routes={'/recommended'}
        />
        <BoxMolecule
          width={'130'}
          height={'130'}
          fonts={'16'}
          fontw={'400'}
          br={'10'}
          txt={'검색하기'}
          routes={'/search'}
        />
        <BoxMolecule
          width={'130'}
          height={'130'}
          fonts={'16'}
          fontw={'400'}
          br={'10'}
          txt={'지도보기'}
          routes={'/map'}
        />
      </BoxContainer>
    </Container>
  );
};

export default SearchOrganism;

/* 술집 찾기 메뉴 */
const Container = styled.div`
  width: 480px;
  height: 174px;
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BoxContainer = styled.div`
  width: 440px;
  height: 130px;

  display: flex;
  justify-content: space-between;
`;
