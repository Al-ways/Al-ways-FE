import styled from '@emotion/styled';
import Text from '../atom/Text';
import PopularKeywordMolecule from '../molecule/PopularKeywordMolecule';

const PopularKeywordOrganism = () => {
  return (
    <Container>
      <Text
        width={'440'}
        height={'20'}
        fonts={'20'}
        fontw={'700'}
        mb={'20'}
        txt={'오늘의 인기 검색어'}
      />
      <PopularKeywordMolecule />
    </Container>
  );
};

export default PopularKeywordOrganism;

const Container = styled.div`
  width: 480px;
  height: 260px;
  /* margin-top: 10px; */
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
