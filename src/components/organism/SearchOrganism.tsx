import styled from '@emotion/styled';
import Text from '../atom/Text';
import SearchContainerMolecule from '../molecule/SearchContainerMolecule';

const SearchOrganism = () => {
  return (
    <Container>
      <Text
        txt={'술집 찾기'}
        width={'440'}
        height={'24'}
        fonts={'24'}
        mb={'20'}
      />
      <SearchContainerMolecule />
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
